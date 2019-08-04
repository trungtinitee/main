// *********************** THIS IS JAVA SCRIPT FILE *************************
//*************************************************************************** */

//VAR



// FUNCTION

// change text for introduce

function change_text_for_introduce(){
    var temp_wait = 0;
    var repeart_change_text = setInterval(function_repeart_text,10000);
    function function_repeart_text(){
    if(temp_wait == 4){
        temp_wait = 0;
    }
    
    if (temp_wait == 0){
        document.getElementById("intro1").style.display = "none";
        document.getElementById("intro2").style.display = "block";
        document.getElementById("intro3").style.display = "none";
        document.getElementById("intro4").style.display = "none";

    }

    if (temp_wait == 1){
        document.getElementById("intro1").style.display = "none";
        document.getElementById("intro3").style.display = "block";
        document.getElementById("intro2").style.display = "none";
        document.getElementById("intro4").style.display = "none";

    }

    if (temp_wait == 2){
        document.getElementById("intro1").style.display = "none";
        document.getElementById("intro4").style.display = "block";
        document.getElementById("intro2").style.display = "none";
        document.getElementById("intro3").style.display = "none";

    }

    if (temp_wait == 3){
        document.getElementById("intro4").style.display = "none";
        document.getElementById("intro1").style.display = "block";
        document.getElementById("intro2").style.display = "none";
        document.getElementById("intro3").style.display = "none";

    }

    temp_wait +=1;
    }
}


// SCRIPT FOR HEADER
var status_header = false;
function header_page(){
    if (status_header == false){
        document.getElementById("header_page").style.display = "block";
        document.getElementById("btn_expand").style.top = "160px";
        status_header = true;
    }
    else{
        document.getElementById("header_page").style.display = "none";
        document.getElementById("btn_expand").style.top = "20px";
        status_header = false;
    }
    
    

}


//CODE WHEN FORM LOAD
change_text_for_introduce();
document.getElementById("btn_expand").addEventListener("click",header_page);