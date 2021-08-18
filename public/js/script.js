window.onload = function(){
    let school_r = document.getElementById('school_r');
    let life_r = document.getElementById('life_r');
    let urgent_r = document.getElementById('urgent_r');
    let job_r= document.getElementById('job_r');
    let school_ronOff = true;//創造一個開關,布爾值，true為1，false為0
    let life_ronOff = true;//創造一個開關,布爾值，true為1，false為0
    let urgent_ronOff = true;//創造一個開關,布爾值，true為1，false為0
    let job_ronOff = true;//創造一個開關,布爾值，true為1，false為0
    let chAnge = document.getElementById('add-task');
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