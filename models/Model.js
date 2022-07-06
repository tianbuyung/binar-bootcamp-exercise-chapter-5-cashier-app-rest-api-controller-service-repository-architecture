class Model {
  constructor() {
    this.database = "";
  }
  #getData() {
    return this.database;
  }
  getAllData() {
    return this.#getData();
  }
  getDataById(id) {
    const data = this.#getData();
    let dataFiltered = data.filter((item) => item.id === Number(id));
    return dataFiltered;
  }
}

module.exports = Model;
