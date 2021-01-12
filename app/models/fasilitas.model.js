module.exports = (mongoose) => {
    const objectId = mongoose.Schema.Types.ObjectId;
    const Fasilitas = mongoose.model(
      "fasilitas",
      mongoose.Schema(
        {
          nama: String,
          foto: String,
          informasi: String,
          jumlah: String,
          id_kategori: {
            type: objectId,
            ref: 'kategoris',
          },
        },
        { timestamps: true }
      )
    );
  
    return Fasilitas;
  };
  