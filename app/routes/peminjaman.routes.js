module.exports = (app) => {
    const peminjamans = require("../controller/peminjaman.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", peminjamans.create);
  
    router.get("/", peminjamans.findAll);
  
    router.get("/:id", peminjamans.findOne);
  
    router.put("/:id", peminjamans.update);
  
    router.delete("/:id", peminjamans.delete);
  
    app.use("/api/peminjaman", router);
  };
  