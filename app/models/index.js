const dbConfig = require("../db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.fasilitas = require("./fasilitas.model.js")(mongoose);
db.kategori = require("./kategori.model.js")(mongoose);
db.peminjaman = require("./peminjaman.model.js")(mongoose);
db.peminjam = require("./peminjam.model.js")(mongoose);

module.exports = db;
