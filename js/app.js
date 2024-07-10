// Database
let data = [
  {
    id: 1,
    img: "./img/Avatar.png",
    name: "Jacob",
    surname: "Jones",
    email: "jackson.graham@example.com",
    city: "Dushanbe",
    status: false,
    mobile_phone: 888880090,
    complete: false,
  },
  {
    id: 2,
    img: "./img/Avatar2.png",
    name: "Jenny",
    surname: "Wilson",
    email: "jessica.hanson@example.com",
    city: "Kulob",
    status: false,
    mobile_phone: 888880090,
    complete: false,
  },
  {
    id: 3,
    img: "./img/Avatar3.png",
    name: "Guy",
    surname: "Hawkins",
    email: "bill.sanders@example.com",
    city: "Dushanbe",
    status: false,
    mobile_phone: 888880090,
    complete: false,
  },
  {
    id: 4,
    img: "./img/Avatar4.png",
    name: "Cody",
    surname: "Fisher",
    email: "michael.mitc@example.com",
    city: "Bokhtar",
    status: true,
    mobile_phone: 888880090,
    complete: false,
  },
  {
    id: 5,
    img: "./img/Avatar5.png",
    name: "Esther",
    surname: "Howard",
    email: "felicia.reid@example.com",
    city: "Dushanbe",
    status: true,
    mobile_phone: 888880090,
    complete: false,
  },
  {
    id: 6,
    img: "./img/Avatar6.png",
    name: "Kristin",
    surname: "Watson",
    email: "kenzi.lawson@example.com",
    city: "Khujand",
    status: true,
    mobile_phone: 888880090,
    complete: false,
  },
  {
    id: 7,
    img: "./img/Avatar7.png",
    name: "Dianne",
    surname: "Russell",
    email: "deanna.curtis@example.com",
    city: "Dushanbe",
    status: false,
    mobile_phone: 888880090,
    complete: false,
  },
  {
    id: 8,
    img: "./img/Avatar8.png",
    name: "Ronald",
    surname: "Richards",
    email: "tim.jennings@example.com",
    city: "Hisor",
    status: true,
    mobile_phone: 888880090,
    complete: false,
  },
];

// Calling HTML elements to JS as object
const tableRoot = document.querySelector(".tableRoot");
const btnAdd = document.querySelector(".btnAdd");
const btnLightMode = document.querySelector(".btnLightMode");
const btnDarkMode = document.querySelector(".btnDarkMode");
const filterStatus = document.querySelector(".filterStatus");
const filterCities = document.querySelector(".filterCities");
const searchInput = document.querySelector(".searchInput");
const closeModalMore = document.querySelector(".closeModalMore");
const viewModalButton = document.querySelector(".viewModalButton");
const editModalButton = document.querySelector(".editModalButton");
const deleteModalButton = document.querySelector(".deleteModalButton");
const closeModalAdd = document.querySelector(".closeModalAdd");
const closeModalAddButton = document.querySelector(".closeModalAddButton");
const closeModalEdit = document.querySelector(".closeModalEdit");
const closeModalEditButton = document.querySelector(".closeModalEditButton");
const closeModalDelete = document.querySelector(".closeModalDelete");
const btnYesModalDelete = document.querySelector(".btnYesModalDelete");
const btnNoModalDelete = document.querySelector(".btnNoModalDelete");
const closeModalView = document.querySelector(".closeModalView");
const imgViewUser = document.querySelector(".imgViewUser");
const fullnameViewUser = document.querySelector(".fullnameViewUser");
const emailViewUser = document.querySelector(".emailViewUser");
const cityViewUser = document.querySelector(".cityViewUser");
const statusViewUser = document.querySelector(".statusViewUser");
const phoneViewUser = document.querySelector(".phoneViewUser");

// For dark and light mode
const textHeader = document.querySelector(".textHeader");


// Forms
const formModalAdd = document.querySelector(".formModalAdd");
const formModalEdit = document.querySelector(".formModalEdit");

// Modals
const modalAdd = document.querySelector(".modalAdd");
const modalMore = document.querySelector(".modalMore");
const modalView = document.querySelector(".modalView");
const modalEdit = document.querySelector(".modalEdit");
const modalDelete = document.querySelector(".modalDelete");

// First styling of dark mode
//Project starts with light mode automatically

btnLightMode.style.backgroundColor = "#00000099";
btnLightMode.style.color = "#fff"

//Frontend Function

// Dark Mode
btnDarkMode.onclick = () => {
  textHeader.style.color = "#fff"
  btnDarkMode.style.backgroundColor = "blue";
  btnDarkMode.style.color = "#fff";
  btnLightMode.style.backgroundColor = "#fff";
  btnLightMode.style.color = "#00000099";
  document.body.style.backgroundColor = "#00000099";
}

// Light Mode
btnLightMode.onclick = () => {
  textHeader.style.color = "#343a40";
  btnLightMode.style.backgroundColor = "#00000099";
  btnLightMode.style.color = "#fff";
  btnDarkMode.style.backgroundColor = "#fff";
  btnDarkMode.style.color = "#00000099";
  document.body.style.backgroundColor = "#fff";
}



//Data Functions
// Open Modal Add
btnAdd.onclick = () => {
  modalAdd.showModal();
};

//Close Modal Add
closeModalAdd.onclick = () => {
  modalAdd.close();
};

closeModalAddButton.onclick = (event) => {
  modalAdd.close();
  event.preventDefault();
};

//Add User
formModalAdd.onsubmit = (event) => {
  event.preventDefault();

  if (
    event.target["imageAdd"].value.trim().length === 0 ||
    event.target["nameAdd"].value.trim().length === 0 ||
    event.target["surnameAdd"].value.trim().length === 0 ||
    event.target["emailAdd"].value.trim().length === 0 ||
    event.target["cityAdd"].value.trim().length === 0 ||
    event.target["statusAdd"].value.trim().length === 0 ||
    event.target["nameAdd"].value.trim().length === 0 ||
    event.target["nameAdd"].value.trim().length === 0
  ) {
    alert("Please fill all of these fields out");
  } else {
    let newObj = {
      id: data.length + 1,
      img: event.target["imageAdd"].value,
      name: event.target["nameAdd"].value,
      surname: event.target["surnameAdd"].value,
      email: event.target["emailAdd"].value,
      city: event.target["cityAdd"].value,
      status: event.target["statusAdd"].value === "true" ? true : false,
      mobile_phone: event.target["phoneAdd"].value,
    };

    data.push(newObj);
    getUsers(data);

    event.target["imageAdd"].value = "";
    event.target["nameAdd"].value = "";
    event.target["surnameAdd"].value = "";
    event.target["emailAdd"].value = "";
    event.target["cityAdd"].value = "";
    event.target["statusAdd"].value = "";
    event.target["phoneAdd"].value = "";

    modalAdd.close();
  }
};

// Open Modal More
let idxUser = null;
function openModalMore(id) {
  idxUser = id;
  modalMore.showModal();
}

//Close Modal More
closeModalMore.onclick = () => {
  modalMore.close();
};

// Open Modal Edit
editModalButton.onclick = () => {
  modalMore.close();
  modalEdit.showModal();

  let selectedUser = data.find((item) => item.id === idxUser);
  formModalEdit["imageEdit"].value = selectedUser.img;
  formModalEdit["nameEdit"].value = selectedUser.name;
  formModalEdit["surnameEdit"].value = selectedUser.surname;
  formModalEdit["emailEdit"].value = selectedUser.email;
  formModalEdit["cityEdit"].value = selectedUser.city;
  formModalEdit["statusEdit"].value = selectedUser.status ? "true" : "false";
  formModalEdit["phoneEdit"].value = selectedUser.mobile_phone;
};

// Close Modal Edit
closeModalEdit.onclick = () => {
  modalEdit.close();
};

closeModalEditButton.onclick = (event) => {
  event.preventDefault();
  modalEdit.close();
};

// Edit user
formModalEdit.onsubmit = (event) => {
  event.preventDefault();

  if (
    event.target["imageEdit"].value.trim().length === 0 ||
    event.target["nameEdit"].value.trim().length === 0 ||
    event.target["surnameEdit"].value.trim().length === 0 ||
    event.target["emailEdit"].value.trim().length === 0 ||
    event.target["cityEdit"].value.trim().length === 0 ||
    event.target["statusEdit"].value.trim().length === 0 ||
    event.target["phoneEdit"].value.trim().length === 0
  ) {
    alert("Please fill all of these field out for editing");
  } else {
    data.map((item) => {
      if (item.id === idxUser) {
        item.img = event.target["imageEdit"].value;
        item.name = event.target["nameEdit"].value;
        item.surname = event.target["surnameEdit"].value;
        item.email = event.target["emailEdit"].value;
        item.city = event.target["cityEdit"].value;
        item.status =
          event.target["statusEdit"].value === "true" ? true : false;
        item.mobile_phone = event.target["phoneEdit"].value;
      }

      return item;
    });

    getUsers(data);
    modalEdit.close();
  }
};

// Open Modal Delete
deleteModalButton.onclick = () => {
  modalMore.close();
  modalDelete.showModal();
};

// Close Modal Delete
closeModalDelete.onclick = () => {
  modalDelete.close();
};

// Delete User
btnYesModalDelete.onclick = () => {
  data = data.filter((item) => {
    return item.id !== idxUser;
  });
  getUsers(data);
  modalDelete.close();
};

// Reject deleting
btnNoModalDelete.onclick = () => {
  modalDelete.close();
};

// View User inside the Modal
viewModalButton.onclick = () => {
  modalMore.close();
  modalView.showModal();
  let selectedUser = data.find((item) => item.id === idxUser);
  imgViewUser.src = selectedUser.img;
  fullnameViewUser.innerHTML = `${selectedUser.name} ${selectedUser.surname}`;
  emailViewUser.href = `mailto:${selectedUser.email}`;
  emailViewUser.innerHTML = selectedUser.email;
  cityViewUser.innerHTML = selectedUser.city;
  if (selectedUser.status) {
    statusViewUser.innerHTML = "ACTIVE";
    statusViewUser.classList.add("active");
  } else {
    statusViewUser.innerHTML = "INACTIVE";
    statusViewUser.classList.add("inactive");
  }
  phoneViewUser.innerHTML = selectedUser.mobile_phone;
};

//Close Modal View

closeModalView.onclick = () => {
  modalView.close();
};

// // Search User by Everything
// searchInput.oninput = () => {
//   let searchedUsers;
//   searchedUsers = data.filter((item) => {
//     return item.name.trim().toLowerCase().includes(searchInput.value.trim());
//   });
//   getUsers(searchedUsers);
// };

// //Filter User by Status
// filterStatus.onclick = () => {
//   let filteredUserByStatus;

//   filteredUserByStatus = data.filter((item) => {
//     if (filterStatus.value === "true") {
//       return item.status === true;
//     } else if (filterStatus.value === "false") {
//       return item.status === false;
//     } else {
//       return item;
//     }
//   });
//   getUsers(filteredUserByStatus)
// };

// //Filter User by City
// filterCities.onclick = () => {
//   let filteredUserByCity;

//   filteredUserByCity = data.filter((item) => {
//     if (filterCities.value === "Dushanbe") {
//       return item.city === "Dushanbe"
//     } else if (filterCities.value === "Bokhtar") {
//       return item.city === "Bokhtar"
//     } else if (filterCities.value === "Khujand") {
//       return item.city === "Khujand";
//     } else {
//       return item
//     }
//   })

//   getUsers(filteredUserByCity)
// }

filterStatus.onchange = applyFilters;
filterCities.onchange = applyFilters;
searchInput.oninput = applyFilters;

function applyFilters() {
  const statusValue = filterStatus.value;
  const cityValue = filterCities.value;
  const searchValue = searchInput.value.trim().toLowerCase();

  const filteredUsers = data.filter((item) => {
    const matchesStatus =
      statusValue === "" || item.status.toString() === statusValue;
    const matchesCity = cityValue === "" || item.city === cityValue;
    const matchesSearch =
      item.name.trim().toLowerCase().includes(searchValue) ||
      item.surname.trim().toLowerCase().includes(searchValue) ||
      item.email.trim().toLowerCase().includes(searchValue) ||
      item.city.trim().toLowerCase().includes(searchValue) ||
      item.mobile_phone.toString().includes(searchValue);

    return matchesStatus && matchesCity && matchesSearch;
  });

  getUsers(filteredUsers);
}

// Get the users from backend
function getUsers(data) {
  tableRoot.innerHTML = "";
  data.forEach((item) => {
    // <tr class="rowUsers"></tr>
    const tableRow = document.createElement("tr");
    tableRow.classList.add("rowUsers");

    // <td class="table_data_img_fullName_email"></td>
    const firstTableData = document.createElement("td");
    firstTableData.classList.add("table_data_img_fullName_email");

    const blockFirstTableData = document.createElement("div");
    blockFirstTableData.classList.add("block_1st_table_data");

    // <img src="url of image from backend" src="name of user from backend"/>
    const imgUser = document.createElement("img");
    imgUser.src = item.img;
    imgUser.alt = item.name;

    // <div class="block_fullName_email"></div>
    const blockNameSurnameEmail = document.createElement("div");
    blockNameSurnameEmail.classList.add("block_fullName_email");

    // <h1>Fullname from backend</h1>
    const fullName = document.createElement("h1");
    fullName.innerHTML = `${item.name} ${item.surname}`;

    // <a href="link email from backend">link email from backend</a>
    const email = document.createElement("a");
    email.href = `mailto: ${item.email}`;
    email.innerHTML = item.email;

    // <td></td>
    const secondTableData = document.createElement("td");

    // <h2>City from backend</h2>
    const city = document.createElement("h2");
    city.innerHTML = item.city;

    // <td></td>
    const thirdTableData = document.createElement("td");

    // <h1>Status from backend with condition</h1>
    const status = document.createElement("h1");

    // For adding the class and text
    if (item.status) {
      status.classList.add("active");
      status.innerHTML = `ACTIVE`;
    } else {
      status.classList.add("inactive");
      status.innerHTML = `INACTIVE`;
    }

    // <td></td>
    const fourthTableData = document.createElement("td");

    // <h1>Number Phone from backend</h1>
    const phone = document.createElement("h1");
    phone.innerHTML = item.mobile_phone;

    // <td></td>
    const fifthTableData = document.createElement("td");

    // <button>...</button>
    const btnMore = document.createElement("button");
    btnMore.innerHTML = `<i class="fa-solid fa-ellipsis"></i>`;

    btnMore.onclick = () => {
      openModalMore(item.id);
    };

    blockNameSurnameEmail.append(fullName, email);

    blockFirstTableData.append(imgUser, blockNameSurnameEmail);

    firstTableData.append(blockFirstTableData);
    secondTableData.append(city);
    thirdTableData.append(status);
    fourthTableData.append(phone);
    fifthTableData.append(btnMore);

    tableRow.append(
      firstTableData,
      secondTableData,
      thirdTableData,
      fourthTableData,
      fifthTableData
    );

    tableRoot.append(tableRow);
  });
}

getUsers(data);
