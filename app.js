let dropbtn = document.querySelector('.dropmenu');
let checkstatus = false;
dropbtn.addEventListener('click', menushow);
let dropdown =document.querySelectorAll(".dropdown")
function menushow() {
    if (checkstatus == true) {
        checkstatus = false;
        document.getElementById('iconrotate').style.transform = "rotate(270deg)";
        document.querySelector('.list').style.transform = "translateY(-200%)";
    
        dropdown[1].style.transform = "translateY(-60%)";
    }
    else{
        checkstatus = true;
        document.getElementById('iconrotate').style.transform = "rotate(180deg)";
        document.querySelector('.list').style.transform = "translateY(0%)";

        dropdown[1].style.transform = "translateY(0%)";

    }

}