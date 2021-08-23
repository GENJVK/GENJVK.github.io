
// for(o=0;o<9999;o++){
// document.getElementById("rNum").value = Math.random()*o;
// }

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
        <input type='text' name='id' value="${selectedItem.id}">
        <input type='text' name='name' value="${selectedItem.name}">
        <input type='text' name='description' value="${selectedItem.description}">
        <input type='text' name='assignedto' value= "${selectedItem.assignedto}">
        <input type='text' name='duedate' value="${selectedItem.duedate}">
        <input type='text' name='status' value="${selectedItem.status}">
        <button class='button' >UPDATE</button>
        </form>
        `
        document.querySelector('#update-form').addEventListener('submit', (event) => {
            event.preventDefault();
            updatedItem.id = event.target.id.value
            updatedItem.name = event.target.name.value
            updatedItem.description = event.target.description.value
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
            description: data.description,
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
            <div>Num:${i}</div>
            <div id='data-${dataArr[i].id} class='data-field'>
            <div class="status">${dataArr[i].duedate} ${dataArr[i].status}</div>
            <div class="description">Description: ${dataArr[i].description}</div>
            <div>${dataArr[i].id}</div>
            <div class="due-date">DUE Date: ${dataArr[i].duedate}</div>
            <button class="button update" id="${dataArr[i].id}">UPDATE</button>
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
    let job_r= document.getElementById('job_r');
    let school_ronOff = true;//創造一個開關,布爾值，true為1，false為0
    let life_ronOff = true;//創造一個開關,布爾值，true為1，false為0
    let urgent_ronOff = true;//創造一個開關,布爾值，true為1，false為0
    let job_ronOff = true;//創造一個開關,布爾值，true為1，false為0
    let chAnge = document.getElementById('body_main');
    let chAngeInput = document.getElementById('input_main');
 
    school_r.onclick = function(){
        if(school_ronOff){//如果是真
            school_r.src = './images/學校_Logo.png' ;//圖片路徑切換為圖片2
            
            life_r.src = './images/文字框_生活_Logo.png';//圖片路徑切換為圖片1
            urgent_r.src = './images/文字框_緊急事項_Logo.png';//圖片路徑切換為圖片1
            job_r.src = './images/文字框_工作_Logo.png';//圖片路徑切換為圖片1
            chAnge.style['background-color'] = '#f8d7da';
            chAngeInput.style['background-color'] = '#f8d7da';
            school_ronOff = false;//並且開關設為假
            life_ronOff = true;//並且開關設為真
            urgent_ronOff = true;//並且開關設為真
            job_ronOff = true;//並且開關設為真
            document.getElementById("sD").value = '<img src="./images/學校_Logo.png" width="24" height="24" class="d-inline-block align-top">'+" 學校";
        }else{//如果是假
            school_r.src = './images/文字框_學校_Logo.png';//圖片路徑切換為圖片1
            chAngeInput.style['background-color'] = '#dbdbdb';
            chAnge.style['background-color'] = '#dbdbdb';
            school_ronOff = true;//並且開關設為真
            document.getElementById("sD").value = "其他";
        }
    }
    life_r.onclick = function(){
        if(life_ronOff){//如果是真
            life_r.src = './images/生活_Logo.png' ;//圖片路徑切換為圖片2
            school_r.src = './images/文字框_學校_Logo.png' ;//圖片路徑切換為圖片2
            urgent_r.src = './images/文字框_緊急事項_Logo.png';//圖片路徑切換為圖片1
            job_r.src = './images/文字框_工作_Logo.png';//圖片路徑切換為圖片1
            chAnge.style['background-color'] = '#fff3cd';
            chAngeInput.style['background-color'] = '#fff3cd';
            life_ronOff = false;//並且開關設為假
            school_ronOff = true;//並且開關設為假
            urgent_ronOff = true;//並且開關設為真
            job_ronOff = true;//並且開關設為真
            document.getElementById("sD").value = '<img src="./images/生活_Logo.png" width="24" height="24" class="d-inline-block align-top">'+" 生活";
        }else{//如果是假
            life_r.src = './images/文字框_生活_Logo.png';//圖片路徑切換為圖片1
            chAngeInput.style['background-color'] = '#dbdbdb';
            chAnge.style['background-color'] = '#dbdbdb';
            life_ronOff = true;//並且開關設為真
            document.getElementById("sD").value = "其他";
        }
    }
    urgent_r.onclick = function(){
        if(urgent_ronOff){//如果是真
            urgent_r.src = './images/緊急事項_Logo.png' ;//圖片路徑切換為圖片2
            life_r.src = './images/文字框_生活_Logo.png' ;//圖片路徑切換為圖片2
            school_r.src = './images/文字框_學校_Logo.png' ;//圖片路徑切換為圖片2
            job_r.src = './images/文字框_工作_Logo.png';//圖片路徑切換為圖片1
            chAnge.style['background-color'] = '#b8daff';
            chAngeInput.style['background-color'] = '#b8daff';
            urgent_ronOff = false;//並且開關設為假
            life_ronOff = true;//並且開關設為假
            school_ronOff = true;//並且開關設為假
            job_ronOff = true;//並且開關設為真
            document.getElementById("sD").value = '<img src="./images/緊急事項_Logo.png" width="24" height="24" class="d-inline-block align-top">'+" 緊急事項";
        }else{//如果是假
            urgent_r.src = './images/文字框_緊急事項_Logo.png';//圖片路徑切換為圖片1
            chAngeInput.style['background-color'] = '#dbdbdb';
            chAnge.style['background-color'] = '#dbdbdb';
            urgent_ronOff = true;//並且開關設為真
            document.getElementById("sD").value = "其他";
        }
    }
    job_r.onclick = function(){
        if(job_ronOff){//如果是真
            job_r.src = './images/工作_Logo.png' ;//圖片路徑切換為圖片2
            urgent_r.src = './images/文字框_緊急事項_Logo.png' ;//圖片路徑切換為圖片2
            life_r.src = './images/文字框_生活_Logo.png' ;//圖片路徑切換為圖片2
            school_r.src = './images/文字框_學校_Logo.png' ;//圖片路徑切換為圖片2
            chAnge.style['background-color'] = '#d1e7dd';
            chAngeInput.style['background-color'] = '#d1e7dd';
            job_ronOff = false;//並且開關設為假
            urgent_ronOff = true;//並且開關設為假
            life_ronOff = true;//並且開關設為假
            school_ronOff = true;//並且開關設為假
            document.getElementById("sD").value = '<img src="./images/工作_Logo.png" width="24" height="24" class="d-inline-block align-top">'+" 工作";
        }else{//如果是假
            job_r.src = './images/文字框_工作_Logo.png';//圖片路徑切換為圖片1
            chAngeInput.style['background-color'] = '#dbdbdb';
            chAnge.style['background-color'] = '#dbdbdb';
            job_ronOff = true;//並且開關設為真
            document.getElementById("sD").value = "其他";
        }
    }
}

const navBar = document.querySelector('#Lmenu')
document.querySelector('#nav-bar-button').addEventListener('click', () => {
    if (navBar.style.width === '0px') {
        navBar.style.width = "200px"
    } else {
        navBar.style.width = "0px"
    }
})



// 在加data的form裏面，加eventListener，改用javascript fetch做 add data.
document.querySelector('#data-form').addEventListener('submit', async (event) => {

    // 停止原先form submission的動作
    event.preventDefault();

    // 用form 這個variable 裝住個form
    const form = event.target

    // 砌一個 object 用來放 data ，配合server要的data
    const dataObj = {
        id: Math.floor(Math.random()*10000),
        name: form.name.value,
        description: form.description.value,
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
/*
// show data
// 用document.querySelector選擇在html 內，id 是 show-button 的element, 存放在 showButton 內
const showButton = document.querySelector('#show-button')

// 設定一個名為showData的function
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

    // 22拆解 json 後，data本身是array，所以用for loop將它分開，再砌成html格式，直接用.innerHTML，放入displayDataArea 內
    for (let i = 0; i < dataArr.length; i++) {
        displayDataArea.innerHTML +=  `
        <div id="data-detail-form" class="list-group">
        <a href="#" class="list-group-item" tabindex="-1" aria-disabled="true">
            <div class="assigned-to">${dataArr[i].assignedto}</div>
            <div>${dataArr[i].name}</div>
            <div>Num:${i}</div>
            <div id='data-${dataArr[i].id} class='data-field'>
            <div class="status">${dataArr[i].duedate} ${dataArr[i].status}</div>
            <div class="description">Description: ${dataArr[i].description}</div>
            <div>${dataArr[i].id}</div>
            <div class="due-date">DUE Date: ${dataArr[i].duedate}</div>
            <button class="button update" id="${dataArr[i].id}">UPDATE</button>
            <button class="button delete" id="${dataArr[i].id}">DELETE</button>
            <input class="form-check-input" type="checkbox" value="">
        </a>
</div>`
    }
    const updateButtons2 = document.querySelectorAll('.button.update')
    for (let updateButton of updateButtons) {
        updateButton2.addEventListener('click', (event) => {
            event.preventDefault();
            updateItem(updateButton.id)
        })
    }
    const deleteButtons2 = document.querySelectorAll('.button.delete')
    for (let deleteButton of deleteButtons) {
        deleteButton2.addEventListener('click', (event) => {
            event.preventDefault();
            deleteItem(deleteButton.id)
        })
    }


}

// 要先設定好function才，可以用。 addEventListener(a, b) -> a 是引發的行動，b是行動被引發後，要執行的function
showButton.addEventListener('click', showData)



*/