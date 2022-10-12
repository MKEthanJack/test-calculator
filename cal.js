var clear = document.getElementById("del");
clear.addEventListener("click",clr);
function clr(){
    document.getElementById("new").reset();
}
function num1(){
    var x = document.getElementById("userinput");
    var num1_val = x.value;
    x.value = num1_val + "1";
}
function num2(){
    var x = document.getElementById("userinput");
    var num1_val = x.value;
    x.value = num1_val + "2";
}
function num3(){
    var x = document.getElementById("userinput");
    var num1_val = x.value;
    x.value = num1_val + "3";
}
function num4(){
    var x = document.getElementById("userinput");
    var num1_val = x.value;
    x.value = num1_val + "4";
}
function num5(){
    var x = document.getElementById("userinput");
    var num1_val = x.value;
    x.value = num1_val + "5";
}
function num6(){
    var x = document.getElementById("userinput");
    var num1_val = x.value;
    x.value = num1_val + "6";
}
function num7(){
    var x = document.getElementById("userinput");
    var num1_val = x.value;
    x.value = num1_val + "7";
}
function num8(){
    var x = document.getElementById("userinput");
    var num1_val = x.value;
    x.value = num1_val + "8";
}
function num9(){
    var x = document.getElementById("userinput");
    var num1_val = x.value;
    x.value = num1_val + "9";
}
function num0(){
    var x = document.getElementById("userinput");
    var num1_val = x.value;
    x.value = num1_val + "0";
}
function plus(){
    var x = document.getElementById("userinput");
    var num1_val = x.value;
    x.value = num1_val + "+";
}
function minus(){
    var x = document.getElementById("userinput");
    var num1_val = x.value;
    x.value = num1_val + "-";
}
function mul(){
    var x = document.getElementById("userinput");
    var num1_val = x.value;
    x.value = num1_val + "*";
}
function divi(){
    var x = document.getElementById("userinput");
    var num1_val = x.value;
    x.value = num1_val + "/";
}
function mod(){
    var x = document.getElementById("userinput");
    var num1_val = x.value;
    x.value = num1_val + "%";
}
function result(){
    var y = document.getElementById("userinput");
    var res = y.value;
    
    
    var out = "";
    if(res.indexOf("+") != -1){
        var split = res.split("+"); 
        var p_out = 0;
        for(var i =0; i<split.length; i++)
        {
            p_out = p_out + parseInt(split[i]);
        }
        // out = parseInt(split[0]) + parseInt(split[1]);
        y.value = p_out;
    }
    if(res.indexOf("-") != -1){
        var split = res.split("-");
        // var srt = split.sort(function(a,b){return b-a;});
        // console.log(srt);
        var s_out = 0;
        // for(var i =0; i<split.length; i++)
        // {
        //     s_out = s_out - parseInt(split[i]);
        // }
        s_out = parseInt(split[0]) - parseInt(split[1]);
        y.value = s_out;
    }
    if(res.indexOf("*") != -1){
        var m_out = 1;
        var split = res.split("*");
        for(var i =0; i<split.length; i++)
        {
            m_out = m_out * parseInt(split[i]);
        }
        // out = parseInt(split[0]) * parseInt(split[1]);
        y.value = m_out;
    }
    if(res.indexOf("/") != -1){
        var div_out = 0;
        var split = res.split("/"); 
        div_out = parseInt(split[0]) / parseInt(split[1]);
        y.value = div_out;
    }
    if(res.indexOf("%") != -1){
        var mod_out = 0;
        var split = res.split("%"); 
        mod_out = parseInt(split[0]) % parseInt(split[1]);
        y.value = mod_out;
    }
}
