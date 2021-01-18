module.exports = (mongoose) => {
    const { Schema } = require("mongoose");
    const Fasilitas = mongoose.model(
      "fasilitas",
      mongoose.Schema(
        {
          nama: String,
          foto: String,
          informasi: String,
          jumlah: String,
          id_kategori: {
            type: Schema.Types.ObjectId,
            ref: 'kategori',
        },
        },
        { timestamps: true }
      )
    );
  
    return Fasilitas;
  };
  