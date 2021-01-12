module.exports = (mongoose) => {
    const Peminjam = mongoose.model(
      "peminjam",
      mongoose.Schema(
        {
          nama: String,
          email: String,
          nohp: String,
          alamat: String,
        },
        { timestamps: true }
      )
    );
  
    return Peminjam;
  };
  