// side-menu
let isOpen = true;
// let localStorage = window.Storage

function menuToggle() {
    if (isOpen === false) {
        document.getElementById('sideMenu').style.marginLeft = "0";
        document.getElementById("container").style.marginLeft = "200px";
        isOpen = true;
    } else {
        document.getElementById('sideMenu').style.marginLeft = "-210px";
        document.getElementById("container").style.marginLeft = "0";
        isOpen = false;
    }
}
document.getElementById('menu-button').addEventListener('click', menuToggle);

// current time

function startTime() {
    let today = new Date();
    let strDate = document.getElementById("currentdate");
    strDate.innerHTML = ("  " + " " + today.getDate() + ",    " + today.getFullYear());

    let n_month = (today.getMonth() + 1);
    switch (n_month) {
        case 0:
            strDate.innerHTML = " December " + strDate.innerHTML
            break;
        case 1:
            strDate.innerHTML = " January " + strDate.innerHTML
            break;
        case 2:
            strDate.innerHTML = " February " + strDate.innerHTML
            break;
        case 3:
            strDate.innerHTML = " March " + strDate.innerHTML
            break;
        case 4:
            strDate.innerHTML = " April " + strDate.innerHTML
            break;
        case 5:
            strDate.innerHTML = " May " + strDate.innerHTML
            break;
        case 6:
            strDate.innerHTML = " June " + strDate.innerHTML
            break;
        case 7:
            strDate.innerHTML = " July " + strDate.innerHTML
            break;
        case 8:
            strDate.innerHTML = " August " + strDate.innerHTML
            break;
        case 9:
            strDate.innerHTML = " September " + strDate.innerHTML
            break;
        case 10:
            strDate.innerHTML = " October " + strDate.innerHTML
            break;
        case 11:
            strDate.innerHTML = " November " + strDate.innerHTML
            break;
        case 12:
            strDate.innerHTML = " December " + strDate.innerHTML
            break;
    }
    let n_day = today.getDay();
    switch (n_day) {
        case 0:
            strDate.innerHTML = " Sunday, " + strDate.innerHTML
            break;
        case 1:
            strDate.innerHTML = " Monday, " + strDate.innerHTML
            break;
        case 2:
            strDate.innerHTML = " Tuesday, " + strDate.innerHTML
            break;
        case 3:
            strDate.innerHTML = " Wednesday, " + strDate.innerHTML
            break;
        case 4:
            strDate.innerHTML = " Thursday, " + strDate.innerHTML
            break;
        case 5:
            strDate.innerHTML = " Friday, " + strDate.innerHTML
            break;
        case 6:
            strDate.innerHTML = " Saturday, " + strDate.innerHTML
            break;
        case 7:
            strDate.innerHTML = " Sunday, " + strDate.innerHTML
            break;
    }

    function checkTime(i) {
        if (i < 10) { i = "0" + i }
        return i
    }

}
startTime()

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

// schedule
// 設定一個名為scheduleData的function
async function scheduleData() {
    const schedule = document.querySelector('#schedule')

    schedule.innerHTML = `
    `

    // 用 fetch 問 http://localhost:8080/todolist 拎 data，拎完，將 data 放入 variable "res"內。記得要await，因為拎data要時間，要等。
    // fetch食兩個 parameter, fetch(a,b) -> a 是網址，b 是設定（以object格式表達）, 若果用 'GET'的方法取資料，可以唔寫設定都得： fetch('http://localhost:8080/todolist')
    const res = await fetch('http://localhost:8080/todolist?checkDelete=false', {
        method: 'GET'
    })

    // sever 處理要求後，會將相關資料以 json 格式 send返俾你(這個例子，回覆的內容放在 res 內)，你要將資料用 .json() 拆解 json，記得要加 await 
    const dataArr = await res.json()

    // // replace new line with 😀
    // let inputText = ""
    // const replaceEnter = (inputText) => {
    //     let output = inputText.replace(/\r\n/g, "哈");
    //     return output;
    // }

    // const recoverEnter = (inputText) => {
    //     let output = inputText.replace(/\哈/g, /\r\n/ );
    // }

    // 拆解 json 後，data本身是array，所以用for loop將它分開，再砌成html格式，直接用.innerHTML，放入displayDataArea 內
    for (let i = 0; i < dataArr.length; i++) {
        schedule.innerHTML += `
        <div id='task'>
        <div class='due-date'>${dataArr[i].duedate}</div>
        <div class='task'>${dataArr[i].task}</div>
        <div class='assigned-to'>Assigned to: ${dataArr[i].assignedto}</div>
        <div class='type'>${dataArr[i].type}</div>
        <button class="button update" id="${dataArr[i].id}">EDIT</button>
        <button class="button delete" id="${dataArr[i].id}">DELETE</button>
        <input class='status' type='checkbox'>
        </div>
        `
    }

    //update
    const updateItem = async(id) => {

        // 先獲取資料，資料本身以array of object方式儲存，然後將指定要更新的資料放入 selectedItem ，以object方式儲存
        let selectedItem = {}
        let res = await fetch('http://localhost:8080/todolist')
        let resArr = await res.json()
        for (let resItem of resArr) {
            if (resItem.id === id) {
                selectedItem = {...resItem } // {...resItem } = new resItem 不會改變本身resItem
            }
        }

        let updatedItem = {}
        document.querySelector('#schedule').innerHTML = `
        <form id='update-form'>
        <input type='text' name='task' placeholder='task' value="${selectedItem.task}">
        <input type='text' name='assignedto' placeholder='assignedto' value="${selectedItem.assignedto}">
        <input type='date' name='duedate' placeholder='duedate' value="${selectedItem.duedate}">
        <input type='text' name='type' placeholder='type' value="${selectedItem.type}">
        <button class='button'>EDIT</button>
        </form>
        `

        document.querySelector('#update-form').addEventListener('submit', (event) => {
            event.preventDefault();
            updatedItem.id = id
            updatedItem.task = event.target.task.value
            updatedItem.assignedto = event.target.assignedto.value
            updatedItem.duedate = event.target.duedate.value
            updatedItem.type = event.target.type.value
            updatedItem.isDelete = "false",
                updatedItem.status = "false"
            performUpdate(updatedItem)
        })
    }

    const performUpdate = async(data) => {
        let dataObj = {
            id: data.id,
            task: data.task,
            assignedto: data.assignedto,
            duedate: data.duedate,
            type: data.type,
            isDelete: "false",
            status: "false"
        }

        const url = 'http://localhost:8080/todolist/' + data.id
        let res = await fetch(url, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataObj)
        })
        if (res.ok) {
            scheduleData()
        }
    }

    // delete
    const deleteItem = async(id) => {
        const url = 'http://localhost:8080/todolist/' + id
        const setting = {
            method: 'DELETE'
        }
        const res = await fetch(url, setting)
            // if(res.status === 200) is the same as if(res.ok)
        if (res.ok) {
            scheduleData()
        }
        console.log(deleteItem);
    }

    //update and delete button
    const updateButtons = document.querySelectorAll('.button.update')
    for (let updateButton of updateButtons) {
        updateButton.addEventListener('click', (event) => {
            event.preventDefault();
            updateItem(updateButton.id)
        })
    }
    const deleteButtons = document.querySelectorAll('.button.delete')
    for (let deleteButton of deleteButtons) {
        deleteButton.addEventListener('click', (event) => {
            event.preventDefault();
            deleteItem(deleteButton.id)
        })
    }
}
scheduleData();

// add data
// 在加data的form裏面，加eventListener，改用javascript fetch做 add data.
document.querySelector('#task-form').addEventListener('submit', async(event) => {

    // 停止原先form submission的動作
    event.preventDefault();

    // 用form 這個variable 裝住個form
    const form = event.target

    // 砌一個 object 用來放 data ，配合server要的data
    const dataObj = {
        // id: form.id.value,
        task: form.task.value,
        assignedto: form.assignedto.value,
        duedate: form.duedate.value,
        type: localStorage.getItem("taskType"),
        isDelete: "false",
        status: "false"
    }
    localStorage.removeItem("taskType")

    // 用fetch的 POST 來送資料去server。
    const res = await fetch('http://localhost:8080/todolist', {
        method: 'POST',
        // POST，要加headers。如以json格式送出，Content-Type設定要配合返
        headers: {
            'Content-Type': 'application/json'
        },
        // 送出的資料放在body內。但要以JSON.stringify()來將object轉為json格式
        body: JSON.stringify(dataObj)
    })

    // 如果資料成功送了去server，res.ok就會等如true
    if (res.ok) {
        console.log(await res.json())
        scheduleData()
    }
})