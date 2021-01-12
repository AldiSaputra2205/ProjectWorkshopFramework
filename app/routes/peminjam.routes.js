module.exports = (app) => {
    const peminjams = require("../controller/peminjam.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", peminjams.create);
  
    router.get("/", peminjams.findAll);
  
    router.get("/:id", peminjams.findOne);
  
    router.put("/:id", peminjams.update);
  
    router.delete("/:id", peminjams.delete);
  
    app.use("/api/peminjam", router);
  };
  