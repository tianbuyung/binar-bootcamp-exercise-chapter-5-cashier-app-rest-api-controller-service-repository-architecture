const express = require("express");
const router = express.Router();
const MenuController = require("../controllers/menuController");

// inisiasi menu
const menuController = new MenuController();

router.get("/", menuController.getAllMenu);
router.post("/", menuController.createNewMenu);
router.get("/:id", menuController.getMenuById);
router.put("/:id", menuController.updateMenuById);

module.exports = router;
