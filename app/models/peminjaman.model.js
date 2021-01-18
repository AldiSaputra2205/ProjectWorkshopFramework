module.exports = (mongoose) => {
  const { Schema } = require("mongoose");
    const Peminjaman = mongoose.model(
      "peminjaman",
      mongoose.Schema(
        {
          id_peminjam: {
            type: Schema.Types.ObjectId,
            ref: 'peminjam',
        },
          tgl: String,
          kegiatan: String,
          id_fasilitas: {
            type: Schema.Types.ObjectId,
            ref: 'fasilitas',
        },
        },
        { timestamps: true }
      )
    );
    return Peminjaman;
  };
  