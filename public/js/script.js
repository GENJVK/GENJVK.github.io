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

    // let n_month = (today.getMonth() + 1);
    // switch (n_month) {
    //     case 0:
    //         strDate.innerHTML = " December " + strDate.innerHTML
    //         break;
    //     case 1:
    //         strDate.innerHTML = " January " + strDate.innerHTML
    //         break;
    //     case 2:
    //         strDate.innerHTML = " February" + strDate.innerHTML
    //         break;
    //     case 3:
    //         strDate.innerHTML = " March " + strDate.innerHTML
    //         break;
    //     case 4:
    //         strDate.innerHTML = " April " + strDate.innerHTML
    //         break;
    //     case 5:
    //         strDate.innerHTML = " May " + strDate.innerHTML
    //         break;
    //     case 6:
    //         strDate.innerHTML = " June " + strDate.innerHTML
    //         break;
    //     case 7:
    //         strDate.innerHTML = " July " + strDate.innerHTML
    //         break;
    //     case 8:
    //         strDate.innerHTML = " August " + strDate.innerHTML
    //         break;
    //     case 9:
    //         strDate.innerHTML = " September " + strDate.innerHTML
    //         break;
    //     case 10:
    //         strDate.innerHTML = " October " + strDate.innerHTML
    //         break;
    //     case 11:
    //         strDate.innerHTML = " November " + strDate.innerHTML
    //         break;
    //     case 12:
    //         strDate.innerHTML = " December " + strDate.innerHTML
    //         break;
    // }
}

function checkTime(i) {
    if (i < 10) { i = "0" + i }
    return i
}

startTime()