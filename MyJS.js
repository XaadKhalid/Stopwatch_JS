var hours=0;
var mins=0;
var sec=0;
var msecond=0;

var RunCode = false;

function start(){
    RunCode=true;
    mytimer();
}

function reset(){
    RunCode=false;
    hours=0;
    mins=0;
    sec=0;
    msecond=0;
    document.getElementById("h").innerHTML="00";
    document.getElementById("m").innerHTML="00";
    document.getElementById("s").innerHTML="00";
    document.getElementById("ms").innerHTML="00";
}

function Pause(){
    RunCode=false; 
}

function mytimer(){
    if(RunCode==true){
        msecond=msecond+1;
        if(msecond==100)
        {
            sec=sec+1;
            msecond=0;
        }
        if(sec==60)
        {
            mins=mins+1;
            sec=0;
        }
        if(mins==60)
        {
            hours=hours+1;
            mins=0;
            sec=0;
        }

        var hstr=hours;
        var mstr=mins;
        var sstr=sec;
        var msstr=msecond;

        if(msstr<10)
        {
            msstr="0"+msstr;
        }
        if(mstr<10)
        {
            mstr="0"+mstr;
        }
        if(sstr<10)
        {
            sstr="0"+sstr;
        }
        if(hstr<10)
        {
            hstr="0"+hstr;
        }
        document.getElementById("h").innerHTML=hstr;
        document.getElementById("m").innerHTML=mstr;
        document.getElementById("s").innerHTML=sstr;
        document.getElementById("ms").innerHTML=msstr;

        setTimeout( "mytimer()" ,10);
    }
}