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
    strDate.innerHTML = "  " + " " + today.getDate() + ",    " + today.getFullYear();

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

// task-form
// task-form icon
window.onload = function() {
    let school_r = document.getElementById("school_r");
    let life_r = document.getElementById("life_r");
    let job_r = document.getElementById("job_r");
    let school_ronOff = true;
    let life_ronOff = true;
    let job_ronOff = true;

    school_r.onclick = function() {
        if (school_ronOff) {
            school_r.src = "./images/??????_Logo.png";
            life_r.src = "./images/?????????_??????_Logo.png";
            job_r.src = "./images/?????????_??????_Logo.png";
            school_ronOff = false;
            life_ronOff = true;
            job_ronOff = true;
            localStorage.setItem("taskType", "School");
        } else {
            school_r.src = "./images/?????????_??????_Logo.png";
            school_ronOff = true;
        }
    };
    life_r.onclick = function() {
        if (life_ronOff) {
            life_r.src = "./images/??????_Logo.png";
            school_r.src = "./images/?????????_??????_Logo.png";
            job_r.src = "./images/?????????_??????_Logo.png";
            life_ronOff = false;
            school_ronOff = true;
            job_ronOff = true;
            localStorage.setItem("taskType", "Life");
        } else {
            life_r.src = "./images/?????????_??????_Logo.png";
            life_ronOff = true;
        }
    };
    job_r.onclick = function() {
        if (job_ronOff) {
            job_r.src = "./images/??????_Logo.png";
            life_r.src = "./images/?????????_??????_Logo.png";
            school_r.src = "./images/?????????_??????_Logo.png";
            job_ronOff = false;
            life_ronOff = true;
            school_ronOff = true;
            localStorage.setItem("taskType", "Job");
        } else {
            job_r.src = "./images/?????????_??????_Logo.png";
            job_ronOff = true;
        }
    };
};

// add data
// ??????data???form????????????eventListener?????????javascript fetch??? add data.
document.querySelector("#task-form").addEventListener("submit", async(event) => {
    // ????????????form submission?????????
    event.preventDefault();

    // ???form ??????variable ?????????form
    const form = event.target;

    // ????????? object ????????? data ?????????server??????data
    const dataObj = {
        // id: form.id.value,
        task: form.task.value,
        assignedto: form.assignedto.value,
        duedate: form.duedate.value,
        type: localStorage.getItem("taskType"),
        isDelete: "false",
        status: "false",
    };

    // ???fetch??? POST ???????????????server???
    const res = await fetch("http://localhost:8080/todolist", {
        method: "POST",
        // POST?????????headers?????????json???????????????Content-Type??????????????????
        headers: {
            "Content-Type": "application/json",
        },
        // ?????????????????????body???????????????JSON.stringify()??????object??????json??????
        body: JSON.stringify(dataObj),
    });

    // ???????????????????????????server???res.ok????????????true
    if (res.ok) {
        console.log(await res.json());
        scheduleData();
    };
});

// Task Data
async function scheduleData() {
    const schedule = document.querySelector("#schedule");

    schedule.innerHTML = ``;

    // ??? fetch ??? http://localhost:8080/todolist ??? data??????????????? data ?????? variable "res"???????????????await????????????data?????????????????????
    // fetch????????? parameter, fetch(a,b) -> a ????????????b ???????????????object???????????????, ????????? 'GET'???????????????????????????????????????????????? fetch('http://localhost:8080/todolist')
    const res = await fetch("http://localhost:8080/todolist?checkDelete=false", {
        method: "GET",
    });

    // sever ??????????????????????????????????????? json ?????? send?????????(???????????????????????????????????? res ???)????????????????????? .json() ?????? json??????????????? await
    const dataArr_full = await res.json();

    // ???????????????????????????task (status=false)
    dataArr = dataArr_full.filter((elem) => elem.status === "false");

    const bgColor = (type) => {
        switch (type) {
            case "School":
                return "#EE9999";
                break;
            case "Life":
                return "#57b278";
                break;
            case "Job":
                return "#424ed4";
                break;
        }
    };

    // ?????? json ??????data?????????array????????????for loop????????????????????????html??????????????????.innerHTML?????????displayDataArea ???
    for (let i = 0; i < dataArr.length; i++) {
        schedule.innerHTML += `
        <div id='task' style=${`"background-color: ${bgColor(
			dataArr[i].type
		)};"`}>
        <div class='task'>${dataArr[i].task}</div>
        <div class='assigned-to'>Assigned to: ${dataArr[i].assignedto}</div>
        <div class='due-date'>Due date: ${dataArr[i].duedate}</div>
        <div class='type' hidden>${dataArr[i].type}</div>
        <button class="button update" id="${dataArr[i].id}">Edit</button>
        <button class="button delete" id="${dataArr[i].id}">Delete</button>
        <button class='button complete' id="${dataArr[i].id}">Complete</button>
        </div>
        `;
	}

	//update
	const updateItem = async (id) => {
		// ?????????????????????????????????array of object?????????????????????????????????????????????????????? selectedItem ??????object????????????
		let selectedItem = {};
		let res = await fetch("http://localhost:8080/todolist");
		let resArr = await res.json();
		for (let resItem of resArr) {
			if (resItem.id === id) {
				selectedItem = { ...resItem }; // {...resItem } = new resItem ??????????????????resItem
			}
		}

		let updatedItem = {};
		schedule.innerHTML = `
		<form id='update-form' style=${`"background-color: ${bgColor(selectedItem.type
		)};"`}>
		<span>Task</span>
		<input type='text' name='task' placeholder='task' value="${selectedItem.task}" maxlength="255"> 
		<span>Assigned to</span>
		<input type='text' name='assignedto' placeholder='assignedto' value="${selectedItem.assignedto}">
		<span>Due date</span>
		<input type='date' name='duedate' placeholder='duedate' value="${selectedItem.duedate}">
		<input type='text' name='type' placeholder='type' value="${selectedItem.type}" hidden>
		<button class='button update'>Edit</button>
		</form>
		`;

		document.querySelector("#update-form").addEventListener("submit", (event) => {
			event.preventDefault();
			updatedItem.id = id;
			updatedItem.task = event.target.task.value;
			updatedItem.assignedto = event.target.assignedto.value;
			updatedItem.duedate = event.target.duedate.value;
			updatedItem.type = event.target.type.value;
			updatedItem.isDelete = "false";
			updatedItem.status = "false";
			performUpdate(updatedItem);
		});

		const performUpdate = async (data) => {
			let dataObj = {
				id: data.id,
				task: data.task,
				assignedto: data.assignedto,
				duedate: data.duedate,
				type: data.type,
				isDelete: "false",
				status: "false",
			};
		
			const url = "http://localhost:8080/todolist/" + data.id;
			let res = await fetch(url, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(dataObj),
			});
			if (res.ok) {
				scheduleData();
			}
		};	
	};

	// delete
	const deleteItem = async (id) => {
		const url = "http://localhost:8080/todolist/" + id;
		const setting = {
			method: "DELETE",
		};
		const res = await fetch(url, setting);
		// if(res.status === 200) is the same as if(res.ok)
		if (res.ok) {
			scheduleData();
		}
	};

	// complete
	const completeItem = async (id) => {
		// ???all data
		let res = await fetch("http://localhost:8080/todolist");
		let selectedItem;
		let resArr = await res.json();
		for (let resItem of resArr) {
			if (resItem.id === id) {
				selectedItem = { ...resItem }; // {...resItem } = new resItem ??????????????????resItem
			}
		}

		// ??? update
		const url = "http://localhost:8080/todolist/" + id;
		const dataObj = {
			id: selectedItem.id,
			task: selectedItem.task,
			assignedto: selectedItem.assignedto,
			duedate: selectedItem.duedate,
			type: selectedItem.type,
			isDelete: selectedItem.isDelete,
			status: "true",
		};
		const setting = {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(dataObj),
		};
		res = await fetch("http://localhost:8080/todolist/" + id, setting);
		if (res.ok) {
			scheduleData();
		}
	};

	//update, delete and complete button
	const updateButtons = document.querySelectorAll(".button.update");
	for (let updateButton of updateButtons) {
		updateButton.addEventListener("click", (event) => {
			event.preventDefault();
			updateItem(updateButton.id);
		});
	}
	const deleteButtons = document.querySelectorAll(".button.delete");
	for (let deleteButton of deleteButtons) {
		deleteButton.addEventListener("click", (event) => {
			event.preventDefault();
			deleteItem(deleteButton.id);
		});
	}
	const completeButtons = document.querySelectorAll(".button.complete");
	for (let completeButton of completeButtons) {
		completeButton.addEventListener("click", (event) => {
			event.preventDefault();
			completeItem(completeButton.id);
		});
	}
}
scheduleData();

let htmlUser = document.querySelector("#header .user_icon1");
htmlUser.innerHTML += localStorage.getItem("login");

htmlUser.addEventListener("click", () => {
    window.location = "http://localhost:8080/login.html";
  });