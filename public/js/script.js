// side-menu
let isOpen = false;

function menuToggle() {
    if (isOpen === false) {
        document.getElementById('sideMenu').style.width = "200px";
        document.getElementById("container").style.marginLeft = "200px";
        isOpen = true;
    } else {
        document.getElementById('sideMenu').style.width = "0";
        document.getElementById("container").style.marginLeft = "0";
        isOpen = false;
    }
}

document.getElementById('menu-button').addEventListener('click', menuToggle);

const showButton = document.querySelector('#show-button')
async function showData() {

    // 選擇html內 id 是display-data-area的 element，放在displayDataArea內
    const displayDataArea = document.querySelector('#display-data-area')

    // 用 innerHTML 更改 displayDataArea的內容
    displayDataArea.innerHTML = `
    `
    // 用 fetch 問 http://localhost:8080/todolist 拎 data，拎完，將 data 放入 variable "res"內。記得要await，因為拎data要時間，要等。
    // fetch食兩個 parameter, fetch(a,b) -> a 是網址，b 是設定（以object格式表達）, 若果用 'GET'的方法取資料，可以唔寫設定都得： fetch('http://localhost:8080/todolist')
    const res = await fetch('http://localhost:8080/todolist',
        {
            method: 'GET'
        })

    // sever 處理要求後，會將相關資料以 json 格式 send返俾你(這個例子，回覆的內容放在 res 內)，你要將資料用 .json() 拆解 json，記得要加 await 
    const dataArr = await res.json()

    const updateItem = async (id) => {

        // 先獲取資料，資料本身以array of object方式儲存，然後將指定要更新的資料放入 selectedItem ，以object方式儲存
        let selectedItem = {}
        let res = await fetch('http://localhost:8080/todolist')
        let resArr = await res.json()
        for (let resItem of resArr){
            if (resItem.id === id){
                selectedItem = {...resItem}
            }
        }
    
        
        let updatedItem = {}
        document.querySelector('#display-data-area').innerHTML = `
        <form id='update-form'>
        <input type='text' name='name' value="${selectedItem.name}">
        <input type='text' name='assignedto' value= "${selectedItem.assignedto}">
        <input type='text' name='duedate' value="${selectedItem.duedate}">
        <input type='text' name='status' value="${selectedItem.status}">
        <button class='button' >UPDATE</button>
        </form>
        `
        document.querySelector('#update-form').addEventListener('submit', (event) => {
            event.preventDefault();
            updatedItem.id = event.target.id.value
            updatedItem.name = event.target.name.values
            updatedItem.assignedto = event.target.assignedto.value
            updatedItem.duedate = event.target.duedate.value
            updatedItem.status = event.target.status.value
            performUpdate(updatedItem)
        })
    }
    
    const performUpdate = async (data) => {
        let dataObj = {
            id: data.id,
            name: data.name,
            assignedto: data.assignedto,
            duedate: data.duedate,
            status: data.status
        }
        const url = 'http://localhost:8080/todolist/' + data.id
        let res = await fetch(url, {
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(dataObj)
        })
        if(res.ok){
            document.querySelector('#display-data-area').innerHTML = `
            <div>Item ${data.id} is updated</div>
            `
            showData()
        }
    }
    

    const deleteItem = async (id) => {
        const url = 'http://localhost:8080/todolist/' + id
        const setting = {
            method: 'DELETE'
        }
        const res = await fetch(url, setting)
        // if(res.status === 200) is the same as if(res.ok)
        if(res.ok){
            document.querySelector('#display-data-area').innerHTML = "<div> item: " + id +" is deleted.</div>"
            showData()
        }
    }
    // 11拆解 json 後，data本身是array，所以用for loop將它分開，再砌成html格式，直接用.innerHTML，放入displayDataArea 內
    for (let i = 0; i < dataArr.length; i++) {
        displayDataArea.innerHTML +=  `
        <div id="data-detail-form" class="list-group">
        <a href="#" class="list-group-item" tabindex="-1" aria-disabled="true">
            <div class="assigned-to">${dataArr[i].assignedto}</div>
            <div>${dataArr[i].name}</div>
            <div id='data-${dataArr[i].id} class='data-field'>
            <div class="status">Status: ${dataArr[i].status}</div>
            <div class="due-date">DUE Date: ${dataArr[i].duedate}</div>
            <button class="button update" id="${dataArr[i].id}">EDIT</button>
            <button class="button delete" id="${dataArr[i].id}">DELETE</button>
            <input class="form-check-input" type="checkbox" value="">
        </a>
        </div>`
    }
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
showButton.addEventListener('click', showData)

window.onload = function(){
    let school_r = document.getElementById('school_r');
    let life_r = document.getElementById('life_r');
    let urgent_r = document.getElementById('urgent_r');
    let job_r = document.getElementById('job_r');
    let school_ronOff = true; //創造一個開關,布爾值，true為1，false為0
    let life_ronOff = true; //創造一個開關,布爾值，true為1，false為0
    let urgent_ronOff = true; //創造一個開關,布爾值，true為1，false為0
    let job_ronOff = true; //創造一個開關,布爾值，true為1，false為0
    let chAnge = document.getElementById('add-task');
    let chAngeInput = document.getElementById('input_main');

function startTime() {
    let today = new Date();
    let strDate = document.getElementById("datetime");
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

// const fetchTodolist = document.querySelector('#showTodolist');
// fetchTodolist.addEventListener('click', async (e) => {
//     e.preventDefault();
//     const data = await fetch('http://localhost:8080/todolist')
//     const jsonResponse = await data.json()
//     let displayArea = document.querySelector('#fetch-area')
//     let displayhtml = "" 
//     displayArea.innerHTML = displayhtml;
//     // document.querySelector('.button.delete').addEventListener('click', async(e) => {
//     //     e.preventDefault()
//     //     const delResponse = await fetch(`http://localhost:8080/todolist/${i.id}`, {method: 'DELETE'})
//     //     if((await delResponse.json()).result == 'deleted') {}
//     // })
// })

// 在加data的form裏面，加eventListener，改用javascript fetch做 add data.
document.querySelector('#add-task').addEventListener('submit', async (event) => {

    // 停止原先form submission的動作
    event.preventDefault();

    // 用form 這個variable 裝住個form
    const form = event.target

    // 砌一個 object 用來放 data ，配合server要的data
    const dataObj = {
        id: Math.floor(Math.random()*10000),
        name: form.name.value,
        assignedto: form.assignedto.value,
        duedate: form.duedate.value,
        status: form.status.value
    }

    // 用fetch的 POST 來送資料去server。
    const res = await fetch('http://localhost:8080/todolist',
        {
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
        showData()
    }
})
}
