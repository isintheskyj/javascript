

var today;
var TheDay = new Date();
var cal_YYYY;
var cal_MM;
var cal_DD;
var cal_list = [];

function getToday(){

    console.log("get today");

    today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    cal_YYYY = yyyy;
    cal_MM = mm;
    cal_DD = dd;

    document.getElementById("lblToday").innerHTML = yyyy + ". " + mm + ". " + dd + ".";

    let list = document.getElementById("1");

    for (var i = 1; i <36; i ++)
    {
       cal_list[i-1] = document.getElementById(i.toString());
    }

    getDay();
}


function getDay(){

    TheDay.setFullYear(cal_YYYY);
    TheDay.setMonth(cal_MM);
    TheDay.setDate(cal_DD);

    const day =  TheDay.getDay()

    var count = 1;

    for (var j=0; j<7; j++){
        cal_list[j].innerHTML = "";
    }

    for ( var i = day ; count < 30; i++){
        cal_list[i].innerHTML = (count++).toString();
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

    getDay();
}

function NextMonth(){

    console.log("NextMonth");
    if  (cal_MM > 10){
        cal_MM = 1;
        cal_YYYY++;
    }
    else{
        cal_MM++;
    }

    getDay();
}

function initialize(){
    console.log("init");
    getToday();
}