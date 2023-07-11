const express = require("express");
const router = express.Router();
const controller = require("./controller");
//Get all notams
router.get("/getAll", controller.getAllNotams);
//Get notams by start date
router.get("/getNotams/startDate/:startDate", controller.getNotamsByStartDate);
//Get notams by end date
router.get("/getNotams/endDate/:endDate", controller.getNotamsByEndDate);
//Get active notams
router.get("/getActiveNotams", controller.getActiveNotams);
//Create notam
router.post("/addNotam", controller.addNotam);
//Add circle
router.post("/addCircle", controller.addCircle);
//Add polygon
router.post("/addPolygon", controller.addPolygon);
//Update notam
router.put("/:num_ntm", controller.updateNotam);
//Delete all
router.delete("/all", controller.deleteAll);
//Delete all shapes
router.delete("/shapes/all", controller.deleteAllShapes);
//Delete circle
router.delete("/polygon/:id", controller.deletePolygon);
//Delete polygon
router.delete("/circle/:id", controller.deleteCircle);
//Delete notam
router.delete("/:num_notam", controller.deleteNotam);
//get all shapes
router.get("/shapes", controller.getAllShapes);

module.exports = router;
