const Menu = require("../models/Menu");
const menuModel = new Menu();

class MenuRepository {
  constructor() {}
  getAllMenus() {
    const menus = menuModel.getAllMenus();
    return menus;
  }
  getMenuById(id) {
    const menu = menuModel.getMenuById(id);
    return menu;
  }
  createNewMenu(payload) {
    let err = null;
    menuModel.createNewMenu(payload);
    return [true, err];
  }
  updateMenuById(id, payload) {
    let err = null;
    menuModel.updateMenuById(id, payload);
    return [true, err];
  }
  deleteMenuById(id) {
    let err = null;
    menuModel.deleteMenuById(id);
    return [true, err];
  }
}

module.exports = MenuRepository;
