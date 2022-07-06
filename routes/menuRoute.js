const express = require("express");
const router = express.Router();
const MenuController = require("../controllers/menuController");

// inisiasi menu
const menuController = new MenuController();

router.post("/", menuController.createNewMenu);
router.get("/", menuController.getAllMenus);
router.get("/:id", menuController.getMenuById);
router.put("/:id", menuController.updateMenuById);
router.delete("/:id", menuController.deleteMenuById);

module.exports = router;
