// side-menu
let isOpen = true;

function menuToggle() {
    if (isOpen === false) {
        document.getElementById("sideMenu").style.marginLeft = "0";
        document.getElementById("container").style.marginLeft = "200px";
        isOpen = true;
    } else {
        document.getElementById("sideMenu").style.marginLeft = "-210px";
        document.getElementById("container").style.marginLeft = "0";
        isOpen = false;
    }
}
document.getElementById("menu-button").addEventListener("click", menuToggle);

// current time

function startTime() {
    let today = new Date();
    let strDate = document.getElementById("currentdate");
    strDate.innerHTML =
        "  " + " " + today.getDate() + ",    " + today.getFullYear();

    let n_month = today.getMonth() + 1;
    switch (n_month) {
        case 0:
            strDate.innerHTML = " December " + strDate.innerHTML;
            break;
        case 1:
            strDate.innerHTML = " January " + strDate.innerHTML;
            break;
        case 2:
            strDate.innerHTML = " February " + strDate.innerHTML;
            break;
        case 3:
            strDate.innerHTML = " March " + strDate.innerHTML;
            break;
        case 4:
            strDate.innerHTML = " April " + strDate.innerHTML;
            break;
        case 5:
            strDate.innerHTML = " May " + strDate.innerHTML;
            break;
        case 6:
            strDate.innerHTML = " June " + strDate.innerHTML;
            break;
        case 7:
            strDate.innerHTML = " July " + strDate.innerHTML;
            break;
        case 8:
            strDate.innerHTML = " August " + strDate.innerHTML;
            break;
        case 9:
            strDate.innerHTML = " September " + strDate.innerHTML;
            break;
        case 10:
            strDate.innerHTML = " October " + strDate.innerHTML;
            break;
        case 11:
            strDate.innerHTML = " November " + strDate.innerHTML;
            break;
        case 12:
            strDate.innerHTML = " December " + strDate.innerHTML;
            break;
    }
    let n_day = today.getDay();
    switch (n_day) {
        case 0:
            strDate.innerHTML = " Sunday, " + strDate.innerHTML;
            break;
        case 1:
            strDate.innerHTML = " Monday, " + strDate.innerHTML;
            break;
        case 2:
            strDate.innerHTML = " Tuesday, " + strDate.innerHTML;
            break;
        case 3:
            strDate.innerHTML = " Wednesday, " + strDate.innerHTML;
            break;
        case 4:
            strDate.innerHTML = " Thursday, " + strDate.innerHTML;
            break;
        case 5:
            strDate.innerHTML = " Friday, " + strDate.innerHTML;
            break;
        case 6:
            strDate.innerHTML = " Saturday, " + strDate.innerHTML;
            break;
        case 7:
            strDate.innerHTML = " Sunday, " + strDate.innerHTML;
            break;
    }

    function checkTime(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }
}
startTime();

// deleted-tasks
async function deletedData() {
    const deletedTask = document.querySelector("#deleted-tasks");

    deletedTask.innerHTML = ``;

    const res = await fetch("http://localhost:8080/todolist?checkDelete=true", {
        method: "GET",
    });

    const dataArr = await res.json();

    for (let i = 0; i < dataArr.length; i++) {
        deletedTask.innerHTML += `
        <div id='task'>
        <div class='due-date'>${dataArr[i].duedate}</div>
        <div class='task'>${dataArr[i].task}</div>
        <div class='assigned-to'>Assigned to: ${dataArr[i].assignedto}</div>
        <div class='type'>${dataArr[i].type}</div>
        <button class='button restore'>Restore</button>
        </div>
        `;
    }
}
deletedData();

let htmlUser = document.querySelector("#header .user_icon1");
htmlUser.innerHTML += localStorage.getItem("login");

htmlUser.addEventListener("click", () => {
    window.location = "http://localhost:8080/login.html";
  });