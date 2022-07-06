const Model = require("../models/Model");

class Menu extends Model {
  constructor() {
    super();
    this.database = require("../db/menus.json");
    this.PATH_MENUS = "./db/menus.json";
    this.fs = require("fs");
  }
  #getPathDb() {
    return this.PATH_MENUS;
  }
  getAllMenus() {
    const menus = super.getAllData();
    return menus;
  }
  getMenuById(id) {
    const menu = super.getDataById(id);
    return menu;
  }
  createNewMenu(payload) {
    const { name, price, quantity } = payload;
    const db = this.#getPathDb();
    let menus = super.getAllData();
    const objToAdd = {
      name: name,
      price: Number(price),
      quantity: Number(quantity),
      id: menus[menus.length - 1].id + 1,
      status: true,
    };
    menus.push(objToAdd);
    this.fs.writeFile(db, JSON.stringify(menus), (err) => {
      if (err) return err;
      // silent handler
    });
  }
  updateMenuById(id, payload) {
    const { name, price, quantity } = payload;
    const db = this.#getPathDb();
    let menus = super.getAllData();
    menus[id - 1] = {
      name: name,
      price: price,
      quantity: quantity,
      id: Number(id),
      status: true,
    };
    this.fs.writeFile(db, JSON.stringify(menus), (err) => {
      if (err) return err;
      // silent handler
    });
  }
  deleteMenuById(id) {
    const db = this.#getPathDb();
    let menus = super.getAllData();
    menus[id - 1].status = false;
    this.fs.writeFile(db, JSON.stringify(menus), (err) => {
      if (err) return err;
      // silent handler
    });
  }
}

module.exports = Menu;
