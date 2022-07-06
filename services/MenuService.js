const MenuRepository = require("../repositories/MenuRepository");

const menuRepo = new MenuRepository();

class MenuService {
  constructor() {}
  getAllMenu() {
    let err = null;
    const menus = menuRepo.getAllMenus();
    let menuFiltered = menus.filter((data) => data.status === true);
    if (menuFiltered.length < 0) {
      err = {
        message: "Data not found",
        statusCode: 404,
      };
    }
    return [menuFiltered, err];
  }
  getMenuById(id) {
    let err = null;
    let menu = menuRepo.getMenuById(id);
    if (menu.length === 0) {
      err = {
        message: "Data not found/has been deleted.",
        statusCode: 404,
      };
    } else if (menu[0].status !== true) {
      err = {
        message: "Data not found/has been deleted.",
        statusCode: 404,
      };
    }
    return [menu, err];
  }
  createNewMenu(payload) {
    let err = null;
    let [_, errCreateMenu] = menuRepo.createNewMenu(payload);
    if (errCreateMenu) {
      err = errCreateMenu;
    }
    return [payload, err];
  }
  updateMenuById(id, payload) {
    let err = null;
    const menu = menuRepo.getMenuById(id);
    if (menu.length === 0) {
      err = {
        message: "Data not found/has been deleted.",
        statusCode: 404,
      };
    } else if (menu[0].status !== true) {
      err = {
        message: "Data not found/has been deleted.",
        statusCode: 404,
      };
    } else {
      let [_, errUpdateMenu] = menuRepo.updateMenuById(id, payload);
      if (errUpdateMenu) {
        err = errUpdateMenu;
      }
    }
    return [payload, err];
  }
  deleteMenuById(id) {
    let err = null;
    const menu = menuRepo.getMenuById(id);
    if (menu.length === 0) {
      err = {
        message: "Data not found/has been deleted.",
        statusCode: 404,
      };
    } else if (menu[0].status !== true) {
      err = {
        message: "Data not found/has been deleted.",
        statusCode: 404,
      };
    } else {
      let [_, errDeleteMenu] = menuRepo.deleteMenuById(id);
      if (errDeleteMenu) {
        err = errDeleteMenu;
      }
    }
    return [true, err];
  }
}

module.exports = MenuService;
