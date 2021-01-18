const db = require("../models");
const Fasilitas = db.fasilitas;

exports.create = (req, res) => {
  const fasilitas = new Fasilitas({
    nama: req.body.nama,
    foto: req.files[0].filename,
    informasi: req.body.informasi,
    jumlah: req.body.jumlah,
    id_kategori: req.body.id_kategori,
  });

  // Save Fasilitas in the database
  fasilitas
    .save(fasilitas)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Fasilitas.",
      });
    });
};

exports.findAll = (req, res) => {
  const nama = req.query.nama;
  var condition = nama
    ? { nama: { $regex: new RegExp(nama), $options: "i" } }
    : {};

  Fasilitas.find(condition).populate('id_kategori')
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Fasilitas.findById(id)
    .then((data) => {
      if (!data) res.status(404).send({ message: "Not found with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving with id=" + id });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Fasilitas.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Fasilitas with id=${id}. Maybe Fasilitas was not found!`,
        });
      } else res.send({ message: "Fasilitas was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Fasilitas with id=" + id,
      });
    });
};
exports.delete = (req, res) => {
  const id = req.params.id;

  Fasilitas.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Fasilitas with id=${id}. Maybe Fasilitas was not found!`,
        });
      } else {
        res.send({
          message: "Fasilitas was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Fasilitas with id=" + id,
      });
    });
};

exports.deleteAll = (req, res) => {};

exports.findAllPublished = (req, res) => {};
