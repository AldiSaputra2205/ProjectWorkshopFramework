const db = require("../models");
const Peminjam = db.peminjam;

exports.create = (req, res) => {
  const peminjam = new Peminjam({
    nama: req.body.nama,
    email: req.body.email,
    nohp: req.body.nohp,
    alamat: req.body.alamat,
  });

  // Save Peminjam in the database
  peminjam
    .save(peminjam)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Peminjam.",
      });
    });
};

exports.findAll = (req, res) => {
  const nama = req.query.nama;
  var condition = nama
    ? { nama: { $regex: new RegExp(nama), $options: "i" } }
    : {};

  Peminjam.find(condition)
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

  Peminjam.findById(id)
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

  Peminjam.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Peminjam with id=${id}. Maybe Peminjam was not found!`,
        });
      } else res.send({ message: "Peminjam was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Peminjam with id=" + id,
      });
    });
};
exports.delete = (req, res) => {
  const id = req.params.id;

  Peminjam.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Peminjam with id=${id}. Maybe Peminjam was not found!`,
        });
      } else {
        res.send({
          message: "Peminjam was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Peminjam with id=" + id,
      });
    });
};

exports.deleteAll = (req, res) => {};

exports.findAllPublished = (req, res) => {};
