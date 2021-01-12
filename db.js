const mongoose = require("mongoose"); //untuk koneksi ke database mongodb

// urlnya didapatkan saat kita test conection saat di mongodb cloud <password> = diganti dengan password di mongodb tadi
// dan <dbname> diubah dengan nama database yang telah kita buat
// url untuk komunikasi ke mongodbnya.
const url = `mongodb://uas:9e2p051lv5h1NaV9@cluster0-shard-00-00.xbiyo.mongodb.net:27017,cluster0-shard-00-01.xbiyo.mongodb.net:27017,cluster0-shard-00-02.xbiyo.mongodb.net:27017/uas?ssl=true&replicaSet=atlas-p0qyfb-shard-0&authSource=admin&retryWrites=true&w=majority`;


const connectionParams = { //merupakan variable dalam bentuk array untuk connection paramns
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
mongoose //salah satu library node.js dihubungkan untuk mongodb.
  .connect(url, connectionParams)
  .then(() => { //jika berhasil akan mencetak pada terminal kita.
    console.log("Connected to database ");
  })
  .catch((err) => { // ketika gagal akan menampilkan errornya.
    console.error(`Error connecting to the database. \n${err}`);
  });