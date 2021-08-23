// const console = require("console");
// const { info } = require("console");

// side-menu
let isOpen = false;

function menuToggle() {
    if (isOpen === false) {
        document.getElementById('sideMenu').style.width = "200px";
        document.getElementById("calendar").style.marginLeft = "200px";
        isOpen = true;
    } else {
        document.getElementById('sideMenu').style.width = "0";
        document.getElementById("calendar").style.marginLeft = "0";
        isOpen = false;
    }
}
document.getElementById('menu-button').addEventListener('click', menuToggle);


// calendar

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        dateClick: (info) => {
            console.log(info.dateStr)
            displayItemByDate(info.dateStr)
        }
    });
    calendar.render();
});

// 入資料
const toDoListItem = [{
    id: '1',
    title: "do calender example",
    assignedTo: 'Joseph',
    status: 'No completed',
    detail: 'ahahahaha',
    date: '2021-08-21'
}, {
    id: '2',
    title: "to do 1",
    assignedTo: 'Anson',
    status: 'No completed',
    detail: 'ahahahaha',
    date: '2021-08-21'
}, {
    id: '3',
    title: "to do 2",
    assignedTo: 'Victor',
    status: 'No completed',
    detail: 'ahahahaha',
    date: '2021-08-21'
}]

// 顯示data
function displayItemByDate(date) {
    const itemList = document.querySelector('.itemList')

    const filterItems = toDoListItem.filter(item => item.date === date)

    itemList.innerHTML = ''

    for (const filterItem of filterItems) {
        itemList.innerHTML += `
        <div class="item">
            <div class="itemHeader">
                <p>title : ${filterItem.title}</p>
                <p>assigned to : ${filterItem.assignedTo}</p>
                <p>status: ${filterItem.status}</p>
            </div>
            <p>details : ${filterItem.detail}</p>
        </div>
        `
    }

}