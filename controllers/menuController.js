const MenuService = require("../services/MenuService");

const menuService = new MenuService();

// const MenuModel = require("../models/Menu");

// inisiasi Menu Model
// const menu = new MenuModel();

class MenuController {
  constructor() {}
  getAllMenus(req, res) {
    let [menus, err] = menuService.getAllMenu();
    if (err) {
      res.json({
        message: err.message,
        status: err.statusCode,
      });
    } else {
      res.json({
        message: "Get All Menus",
        data: menus,
      });
    }
  }
  getMenuById(req, res) {
    const id = req.params.id;
    let [menu, err] = menuService.getMenuById(id);
    if (err) {
      res.json({
        message: err.message,
        status: err.statusCode,
      });
    } else {
      res.json({
        message: `Get detail post by id ${id}`,
        data: menu,
      });
    }
  }
  createNewMenu(req, res) {
    const payload = req.body;
    let [newMenu, err] = menuService.createNewMenu(payload);
    if (err) {
      res.json({
        message: err.message,
        status: err.statusCode,
      });
    } else {
      res.json({
        message: `New menu has been added successfully`,
        data: payload,
      });
    }
  }
  updateMenuById(req, res) {
    const id = req.params.id;
    const payload = req.body;
    let [editedMenu, err] = menuService.updateMenuById(id, payload);
    if (err) {
      res.json({
        message: err.message,
        status: err.statusCode,
      });
    } else {
      res.json({
        message: `the menu with id ${id} has been successfully updated`,
        data: payload,
      });
    }
  }
  deleteMenuById(req, res) {
    const id = req.params.id;
    let [deletedMenu, err] = menuService.deleteMenuById(id);
    if (err) {
      res.json({
        message: err.message,
        status: err.statusCode,
      });
    } else {
      res.json({
        message: `menu with id ${id} has been successfully deleted`,
      });
    }
  }
}

module.exports = MenuController;
