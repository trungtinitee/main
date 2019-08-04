// *********************** THIS IS JAVA SCRIPT FILE *************************
//*************************************************************************** */

//VAR



// FUNCTION

// change text for introduce

// SCRIPT FOR HEADER
var status_header = false;
function header_page(){
    if (status_header == false){
        document.getElementById("header_page").style.display = "block";
        document.getElementById("line_header").style.display = "none";
        document.getElementById("header_reponsive").style.height = "0";
        document.getElementById("btn_expand").style.top = "160px";
        status_header = true;
    }
    else{
        document.getElementById("header_page").style.display = "none";
        document.getElementById("btn_expand").style.top = "20px";
        document.getElementById("line_header").style.display = "block";
        document.getElementById("header_reponsive").style.height = "50px";
        status_header = false;
    }
    
    

}


//CODE WHEN FORM LOAD
document.getElementById("btn_expand").addEventListener("click",header_page);



//code test
