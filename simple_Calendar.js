

var today;
var cur_yyyy;
var cur_mm;
var cur_dd;
var click_yyyy;
var click_mm;

var TheDay = new Date();
var cal_YYYY;
var cal_MM;
var cal_DD;
var cal_list = [];
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const monthday = [31,28,31,30,31,30,31,31,30,31,30,31];
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
let day = 0;


function getToday(){
    console.log("get today");

    today = new Date();
    cur_dd = today.getDate(); // String(today.getDate()).padStart(2, '0');
    cur_mm = today.getMonth();// String(today.getMonth()).padStart(2, '0'); //January is 0!
    cur_yyyy = today.getFullYear();

    cal_YYYY = cur_yyyy;
    cal_MM = cur_mm;
    cal_DD = cur_dd;

    document.getElementById("lblToday").innerHTML = "Today : " + cur_yyyy + ". " + (cal_MM + 1) + ". " + cur_dd + ".";

    getDay();
}


function getDay(){

    TheDay.setFullYear(cal_YYYY);
    TheDay.setMonth(cal_MM);
    TheDay.setDate(1);

    day = TheDay.getDay();

    console.log("getday " + day + weekday[day] + " date : " + cal_YYYY + (cal_MM + 1) + cal_DD + "??" + TheDay.getDate());

    document.getElementById("lblCurrentDate").innerHTML = monthNames[cal_MM] + " " + cal_YYYY;


    var count = 1;

    for (var j=0; j<7; j++){
        cal_list[j].innerHTML = "";
    }

    for (var k=28; k<42; k++){
        cal_list[k].innerHTML = "";
    }

    for ( var i = day ; count <= monthday[cal_MM]; i++){
        cal_list[i].innerHTML = (count++).toString();
    }

    console.log(cal_YYYY.toString() + cur_yyyy.toString() + cal_MM.toString() + cur_mm.toString());

    if(cal_YYYY === cur_yyyy && cal_MM === cur_mm)
    {
        console.log(cal_list[day + cur_dd]);
        cal_list[day + cur_dd - 1].style.color = "red";
    }

    console.log("getDay");
}

function PrevMonth(){

    console.log("PrevMonth");
    if  (cal_MM < 1){
        cal_MM = 11;
        cal_YYYY--;
    }
    else{
        cal_MM--;
    }

    cal_DD = 1;

    cal_list[day + cur_dd - 1].style.color = "beige";

    if(cal_MM === click_mm && cal_YYYY === click_yyyy){
        lbl_Clicked.style.color = "aqua";
    }
    else{
        lbl_Clicked.style.color = "beige";
    }

    getDay();
}

function NextMonth(){

    console.log("NextMonth");
    if  (cal_MM > 10){
        cal_MM = 0;
        cal_YYYY++;
    }
    else{
        cal_MM++;
    }

    cal_DD = 1;

    cal_list[day + cur_dd - 1].style.color = "beige";
    
    if(cal_MM === click_mm && cal_YYYY === click_yyyy){
        lbl_Clicked.style.color = "aqua";
    }
    else{
        lbl_Clicked.style.color = "beige";
    }

    getDay();
}

var lbl1;
var lbl_Clicked;

function initialize(){
    console.log("init");
    addTableClick();
    getToday();
    lbl1 =  document.getElementById("lblSelectedDay") ;
}


function addTableClick() {
    var table = document.getElementById("calendar");
    cal_list = table.getElementsByTagName("td");

    for (i = 0; i < cal_list.length; i++) {
      var currentCol = cal_list[i];

      var createClickHandler = function(col) {

        return function() {
            if (col.innerHTML !== "")
            {
                lbl_Clicked.style.color = "beige";
                col.style.color = "aqua";
                lbl1.innerHTML = "Selected Day : " + cal_YYYY + ". " + (cal_MM + 1) + ". " + col.innerHTML + ".";
                lbl_Clicked = col;
                click_yyyy = cal_YYYY;
                click_mm = cal_MM;
            }
        };
      };
      currentCol.onclick = createClickHandler(currentCol);
    }

    lbl_Clicked = cal_list[0];
  }