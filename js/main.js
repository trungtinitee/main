// *********************** THIS IS JAVA SCRIPT FILE *************************
//*************************************************************************** */

// FUNCTION

function into_logo(){
    document.getElementById("logo1").style.display = "none";
    document.getElementById("logo2").style.display = "block";
}
function leave_logo(){
    document.getElementById("logo1").style.display = "block";
    document.getElementById("logo2").style.display = "none";
}


// SCRIPT FOR LOGO HEADER

document.getElementById("logo1").addEventListener("mouseover", into_logo);
document.getElementById("logo2").addEventListener("mouseleave", leave_logo);