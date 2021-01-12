module.exports = (mongoose) => {
    const objectId = mongoose.Schema.Types.ObjectId;
    const Peminjaman = mongoose.model(
      "peminjaman",
      mongoose.Schema(
        {
          id_peminjam: {
            type: objectId,
            ref: 'peminjams',
          },
          tgl: String,
          kegiatan: String,
          id_fasilitas: {
            type: objectId,
            ref: 'fasilitass',
          },
        },
        { timestamps: true }
      )
    );
    return Peminjaman;
  };
  