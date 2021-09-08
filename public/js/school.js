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

// task-form icon
window.onload = function() {
    let school_r = document.getElementById('school_r');
    let life_r = document.getElementById('life_r');
    let job_r = document.getElementById('job_r');
    let school_ronOff = true; //創造一個開關,布爾值，true為1，false為0
    let life_ronOff = true; //創造一個開關,布爾值，true為1，false為0
    let job_ronOff = true; //創造一個開關,布爾值，true為1，false為0
    let chAnge = document.getElementById('task-form');
    let chAngeInput = document.getElementById('task-input');

    school_r.onclick = function() {
        if (school_ronOff) { //如果是真
            school_r.src = './images/學校_Logo.png'; //圖片路徑切換為圖片2
            life_r.src = './images/文字框_生活_Logo.png'; //圖片路徑切換為圖片1
            job_r.src = './images/文字框_工作_Logo.png'; //圖片路徑切換為圖片1
            school_ronOff = false; //並且開關設為假
            life_ronOff = true; //並且開關設為真
            job_ronOff = true; //並且開關設為真
            localStorage.setItem('taskType', 'School')
        } else { //如果是假
            school_r.src = './images/文字框_學校_Logo.png'; //圖片路徑切換為圖片1
            chAngeInput.style['background-color'] = '#e6e6e6';
            chAnge.style['background-color'] = '#e6e6e6';
            school_ronOff = true; //並且開關設為真
        }
    }
    life_r.onclick = function() {
        if (life_ronOff) { //如果是真
            life_r.src = './images/生活_Logo.png'; //圖片路徑切換為圖片2
            school_r.src = './images/文字框_學校_Logo.png'; //圖片路徑切換為圖片2
            job_r.src = './images/文字框_工作_Logo.png'; //圖片路徑切換為圖片1
            life_ronOff = false; //並且開關設為假
            school_ronOff = true; //並且開關設為假
            job_ronOff = true; //並且開關設為真
            localStorage.setItem("taskType", "Life")
        } else { //如果是假
            life_r.src = './images/文字框_生活_Logo.png'; //圖片路徑切換為圖片1
            chAngeInput.style['background-color'] = '#e6e6e6';
            chAnge.style['background-color'] = '#e6e6e6';
            life_ronOff = true; //並且開關設為真
        }
    }
    job_r.onclick = function() {
        if (job_ronOff) { //如果是真
            job_r.src = './images/工作_Logo.png'; //圖片路徑切換為圖片2
            life_r.src = './images/文字框_生活_Logo.png'; //圖片路徑切換為圖片2
            school_r.src = './images/文字框_學校_Logo.png'; //圖片路徑切換為圖片2
            job_ronOff = false; //並且開關設為假
            life_ronOff = true; //並且開關設為假
            school_ronOff = true; //並且開關設為假
            localStorage.setItem("taskType", "Job")
        } else { //如果是假
            job_r.src = './images/文字框_工作_Logo.png'; //圖片路徑切換為圖片1
            chAngeInput.style['background-color'] = '#e6e6e6';
            chAnge.style['background-color'] = '#e6e6e6';
            job_ronOff = true; //並且開關設為真
        }
    }
}

// school-tasks
async function schoolTaskData() {
    const deletedTask = document.querySelector("#school-tasks");

    deletedTask.innerHTML = ``;

    const res = await fetch("http://localhost:8080/todolist?type=School", {
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
        </div>
        `;
    }
}
schoolTaskData();