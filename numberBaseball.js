var ii = 0;

let S3Number = [];
let TryCount = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function nullNumber(id){
    document.getElementById(id).value = 0;
    return 0;
}


function tryBaseball(nb1, nb2, nb3)
{
    let nS = 0;
    let nB = 0;
    let nO = 0;

    let tNumber = [];
    tNumber[0] = nb1;
    tNumber[1] = nb2;
    tNumber[2] = nb3;

    for(var i = 0; i < 3; i++)
    {
        for (var j = 0; j < 3; j++) {

            if (S3Number[i] === tNumber[j] && i === j)
            {
                nS++;
            }
            else if (S3Number[i] === tNumber[j])
            {
                nB++;
            }

            console.log("QNumber : " + S3Number[i] + " TNumber : " + tNumber[j]);
        }
    }

    nO = 3 - nS - nB;

    console.log(" S : " + nS + " B : " + nB + " O : " + nO);

//    var retArray = [nS, nB, nO];
//    return (nS, nB, nO);

    return [nS, nB, nO];
}

function input()
{
    let input1 =  document.getElementById("nb1").value;
    let input2 =  document.getElementById("nb2").value;
    let input3 =  document.getElementById("nb3").value;

    if (input1 === "")
    {
        input1 = 0;
        nullNumber("nb1");
    }

    if (input2 === "")
    {
        input2 = 0;
        nullNumber("nb2");
    }

    if (input3 === "")
    {
        input3 = 0;
        nullNumber("nb3");
    }

    var ret = tryBaseball(parseInt(input1) , parseInt(input2), parseInt(input3));

    TryCount++;

    document.getElementById('lblResult').innerHTML = '! ' + ret[0] + 'S ' + ret[1] + 'B ' + ret[2] + 'O !';

    return 0;
}

function Start()
{
    Reset();
}

function Reset()
{
    S3Number[0] = getRandomInt(9);
    S3Number[1] = getRandomInt(9);
    S3Number[2] = getRandomInt(9);

    TryCount = 0;

    document.getElementById('lblResult').innerHTML = '! ' + '0S 0B 0O !';

    console.log(S3Number + " and " + TryCount);

}


function over(){
    
}

function leave(){

}

