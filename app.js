let dropbtn = document.querySelector('.dropmenu');
let checkstatus = false;
dropbtn.addEventListener('click', menushow);
let dropdown =document.querySelectorAll(".dropdown")
function menushow() {
    if (checkstatus == true) {
        checkstatus = false;
        document.getElementById('iconrotate').style.transform = "rotate(270deg)";
        document.querySelector('.list').style.transform = "translateY(-200%)";
        document.querySelector('.dropdown').style.height = "100px";
       
    }
    else{
        checkstatus = true;
        document.getElementById('iconrotate').style.transform = "rotate(180deg)";
        document.querySelector('.list').style.transform = "translateY(0%)";
        document.querySelector('.dropdown').style.height = "200px";
    

    }

}


let dropbtn1 = document.querySelector('.dropmenu1');
let checkstatus1 = false;
dropbtn1.addEventListener('click', menushow1);
let dropdown1 =document.querySelectorAll(".dropdown1")
function menushow1() {
    if (checkstatus1 == true) {
        checkstatus1 = false;
        document.getElementById('iconrotate1').style.transform = "rotate(270deg)";
        document.querySelector('.list1').style.transform = "translateY(-200%)";
        document.querySelector('.dropdown1').style.height = "100px";
        
       
    }
    else{
        checkstatus1 = true;
        document.getElementById('iconrotate1').style.transform = "rotate(180deg)";
        document.querySelector('.list1').style.transform = "translateY(0%)";
        document.querySelector('.dropdown1').style.height = "200px";
    }

}

let dropbtn2 = document.querySelector('.dropmenu2');
let checkstatus2 = false;
dropbtn2.addEventListener('click', menushow2);
let dropdown2 =document.querySelectorAll(".dropdown2")
function menushow2() {
    if (checkstatus2 == true) {
        checkstatus2 = false;
        document.getElementById('iconrotate2').style.transform = "rotate(270deg)";
        document.querySelector('.list2').style.transform = "translateY(-200%)";
        document.querySelector('.dropdown2').style.height = "100px";
        
       
    }
    else{
        checkstatus2 = true;
        document.getElementById('iconrotate2').style.transform = "rotate(180deg)";
        document.querySelector('.list2').style.transform = "translateY(0%)";
        document.querySelector('.dropdown2').style.height = "200px";
    }

}