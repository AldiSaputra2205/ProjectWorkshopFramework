const db = require("../models");
const Peminjaman = db.peminjaman;

exports.create = (req, res) => {
  const peminjaman = new Peminjaman({
    id_peminjam: req.body.id_peminjam,
    tgl: req.body.tgl,
    kegiatan: req.body.kegiatan,
    id_fasilitas: req.body.id_fasilitas,
  });

  // Save Peminjaman in the database
  peminjaman
    .save(peminjaman)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Peminjaman.",
      });
    });
};

exports.findAll = (req, res) => {
  const nama = req.query.nama;
  var condition = nama
    ? { nama: { $regex: new RegExp(nama), $options: "i" } }
    : {};

  Peminjaman.find(condition)
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

  Peminjaman.findById(id)
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

  Peminjaman.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Peminjaman with id=${id}. Maybe Peminjaman was not found!`,
        });
      } else res.send({ message: "Peminjaman was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Peminjaman with id=" + id,
      });
    });
};
exports.delete = (req, res) => {
  const id = req.params.id;

  Peminjaman.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Peminjaman with id=${id}. Maybe Peminjaman was not found!`,
        });
      } else {
        res.send({
          message: "Peminjaman was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Peminjaman with id=" + id,
      });
    });
};

exports.deleteAll = (req, res) => {};

exports.findAllPublished = (req, res) => {};
