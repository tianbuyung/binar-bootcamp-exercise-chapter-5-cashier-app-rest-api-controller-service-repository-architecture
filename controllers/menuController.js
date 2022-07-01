const MenuModel = require("../models/Menu");

// inisiasi Menu Model
const menu = new MenuModel();

class MenuController {
  constructor() {}
  getAllMenu(req, res) {
    let data = menu.getAllDatas();
    if (data.length === 0) {
      res.status(404).json({
        message: "Get All Menu From Menu Database",
        data,
      });
    } else {
      res.status(200).json({
        message: "Get All Menu From Menu Database",
        data,
      });
    }
  }
  getMenuById(req, res) {
    const id = req.params.id;
    let menuById = menu.getDataById(id);
    if (menuById.length === 0) {
      res.status(404).json({
        message: `data has been deleted`,
        data: menuById,
      });
    } else {
      res.status(200).json({
        message: `get menu by id ${req.params.id}`,
        data: menuById,
      });
    }
  }
  createNewMenu(req, res) {
    menu.createNewData(req.body);
    res.status(201).json({
      message: "Succesfully created data",
      data: req.body,
    });
  }
  updateMenuById(req, res) {
    menu.updateDataById(req.body);
  }
}

module.exports = MenuController;
