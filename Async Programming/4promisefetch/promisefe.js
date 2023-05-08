let url = "https://63e0dea765b57fe6064b482f.mockapi.io/employee-form";

//1.To Read the data=GET
//lets create a function
function getData(){
    fetch(url,{
       method:"GET",
       headers:{
        "Content-Type":"application/json"
        },

    }).then((result)=>result.json())
    .then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    })
}
getData();

//2.To send the data=POST
//lets create a function
function createData(){
    let data={
        name:"Tajuddin",
        email:"tajuddin.soft@gmail.com",
        };
        fetch(url,{
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                "Content-Type":"application/json"
            },
        }).then((result) => result.json())
        .then((data) => {
        console.log(data);
        }).catch((error) => {
        console.log(error);
    })
}
//createData();
GetData();

//3.Update the data=PUT
function updateData(){
    let data={
        name:"Tajuddin",
        email:"tajuddin.soft@gmail.com",
        }

 fetch(url+"/8",{
    method:"PUT",
    body:JSON.stringify(data),
    headers:{
        "Content-Type":"application/json"
    },
        }).then((result) => result.json())
         .then((data) => {
         console.log(data);
         }).catch((error) => {
         console.log(error);
     })
 }
 updateData();
 GetData();

//4.Delete the data =>DELETE
function deleteData() {
  fetch(url + "/8", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((result) => result.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
deleteData();
GetData();

//5.write a logic to get the data
async function getUsers() {
  let users;
  try {
    const data = await fetch("https://63d70569afbba6b7c9367f87.mockapi.io/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    users = await data.json();
    console.log(users);
  } catch (error) {
    console.log(error);
  }
  return users;
}
//getUsers();

//Write a functionality to display the date of the users
async function displayUsers() {
  let users = await getUsers;
  console.log(users);
  const userList = document.querySelector(".user-list");
  userList.innerHTML = "";
  users.forEach((user) => {
    //console.log(user.name);
    userList.innerHTML += `
<div class="user-container">
<img class="user-avatar" src="$(user.avatar)" alt="${user.name}">
</div>
<h3>${user.name}</h3>
<button onclick="deleteUser(${user.id})">Delete</button>
<button onclick="editUser(${user.id})">Edit</button>
</div>

`;
  });
}
displayUsers();

//5.Write a functionality to delete the user data
async function deleteUser(id) {
  try {
    const data = await fetch(`https://63d70569afbba6b7c9367f87.mockapi.io/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const users = await data.json();
    console.log(users);
    displayUsers();
  } catch (error) {
    console.log(error);
  }
}
