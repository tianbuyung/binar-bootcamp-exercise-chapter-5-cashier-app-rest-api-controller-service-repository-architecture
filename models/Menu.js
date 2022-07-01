class Menu {
  constructor() {
    this.menus = require("../db/menus.json");
    this.PATH_MENUS = "./db/menus.json";
    this.fs = require("fs");
  }
  #getDb() {
    return this.PATH_MENUS;
  }
  #getDatas() {
    return this.menus;
  }
  getAllDatas() {
    const menus = this.#getDatas();
    let menuFiltered = menus.filter((data) => data.status === true);
    return menuFiltered;
  }
  getDataById(id) {
    const menus = this.#getDatas();
    let menuFiltered = menus.filter(
      (data) => data.id === Number(id) && data.status === true
    );
    return menuFiltered;
  }
  createNewData(data) {
    const { name, price, quantity } = data;
    const db = this.#getDb();
    this.fs.readFile(db, "utf-8", (err, data) => {
      if (err) return err;
      let menus = JSON.parse(data);
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
      });
    });
  }
  updateDataById(data) {
    const { name, price, quantity } = data;
  }
}

module.exports = Menu;
