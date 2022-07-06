const getUser = () => {
  // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  fetch("http://localhost:3000/menu")
    .then((response) => response.json())
    .then((resJson) => {
      const data = resJson.data;
      let ulPost = document.getElementById("menus");
      let content = "";
      data.forEach((d) => {
        content += `<li> id: ${d.id}
        <br> name ${d.name}
        <br> price ${d.price}
        <br> quantity ${d.quantity}
        <br><button onclick="getMenuById(${d.id})" id="getMenuById">Lihat Menu Detail</button>
        <br><button onclick="deleteMenuById(${d.id})" id="deleteMenuById">Delete Menu</button></li>`;
      });
      ulPost.innerHTML = content;
    })
    .catch((err) => console.log("err", err));
};

getUser();

function createNewMenu() {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const quantity = document.getElementById("quantity").value;
  const data = {
    name,
    price,
    quantity,
  };
  fetch("http://localhost:3000/menu", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function deleteMenuById(id) {
  fetch(`http://localhost:3000/menu/${id}`, {
    method: "DELETE", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function getMenuById(id) {
  fetch(`http://localhost:3000/menu/${id}`)
    .then((response) => response.json())
    .then((resJson) => {
      const data = resJson.data;
      let ulPost = document.getElementById("menus");
      let content = `<li>
      <br>id: ${data[0].id}
      <br> name <input type="text" id="name" value="${data[0].name}">
      <br> price <input type="number" id="price" value="${data[0].price}">
      <br> quantity <input type="number" id="quantity" value="${data[0].quantity}">
      <br><button onclick="editMenuById(${data[0].id})" id="editMenuById">Edit Menu</button>
      <br><button onclick="deleteMenuById(${data[0].id})" id="deleteMenuById">Delete Menu</button></li>`;
      ulPost.innerHTML = content;
    })
    .catch((err) => console.log("err", err));
}

function editMenuById(id) {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const quantity = document.getElementById("quantity").value;
  const data = {
    name,
    price,
    quantity,
  };
  console.log(data);
  fetch(`http://localhost:3000/menu/${id}`, {
    method: "PUT", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
