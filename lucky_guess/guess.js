var money = 100;
var multiplier = 2;
var stake = 0;

stake = localStorage.getItem("stake");
money = localStorage.getItem("money");
multiplier = localStorage.getItem("multiplier");

document.getElementById("money").innerHTML = "money " + money;
document.getElementById("stake").innerHTML = "+" + stake;
document.getElementById("multiplier").innerHTML = "multiplier " + multiplier + "X";
document.getElementById("low").style.visibility = "hidden";
document.getElementById("high").style.visibility = "hidden";
document.getElementById("tryagain").style.visibility = "hidden";
document.getElementById("multi").style.visibility = "hidden";

$("#start").click(function ()
{
    money -= 10;
    random1 = Math.floor(Math.random() * 10) + 1;
    document.getElementById("random1").innerHTML = random1;
    document.getElementById("start").style.visibility = "hidden";
    document.getElementById("low").style.visibility = "visible";
    document.getElementById("high").style.visibility = "visible";
    document.getElementById("money").innerHTML = money;
});

$("#new_game").click(function ()
{
    money = 100;
    multiplier = 2;
    stake = 0;
    
    document.getElementById("start").style.visibility = "visible";
    document.getElementById("low").style.visibility = "hidden";
    document.getElementById("high").style.visibility = "hidden";
    document.getElementById("tryagain").style.visibility = "hidden";
    document.getElementById("multi").style.visibility = "hidden";
    document.getElementById("money").innerHTML = "money " + money;
    document.getElementById("multiplier").innerHTML = multiplier;
    document.getElementById("random1").innerHTML = "";
    document.getElementById("random2").innerHTML = "";
    document.getElementById("message").innerHTML = "message";
    document.getElementById("stake").innerHTML = "stake " + stake;
    localStorage.setItem("money", money);
    localStorage.setItem("multiplier", multiplier);
    localStorage.setItem("stake", stake);
});

$("#low").click(function low()
{
    random2 = Math.floor(Math.random() * 10) + 1;
    document.getElementById("random2").innerHTML = random2;
    
    document.getElementById("tryagain").style.visibility = "visible";
    document.getElementById("low").style.visibility = "hidden";
    document.getElementById("high").style.visibility = "hidden";
    
    if(random2 == random1){
        low();
    }
    
    else if( random2 < random1){
        document.getElementById("message").innerHTML = "success";
        stake = 10 * multiplier;
        document.getElementById("multi").style.visibility = "visible";
        localStorage.setItem("stake", stake);
        document.getElementById("stake").innerHTML = stake;
        document.getElementById("tryagain").innerHTML = "CASH IN";
    }
    else{
        document.getElementById("message").innerHTML = "fail";
        stake = 0;
        localStorage.setItem("stake", stake);
        document.getElementById("stake").innerHTML = stake;
        document.getElementById("tryagain").innerHTML = "try again";
        
    }
    document.getElementById("money").innerHTML = money;
    localStorage.setItem("money", money);
});

$("#high").click(function low()
{
    random2 = Math.floor(Math.random() * 10) + 1;
    document.getElementById("random2").innerHTML = random2;
    
    document.getElementById("tryagain").style.visibility = "visible";
    document.getElementById("low").style.visibility = "hidden";
    document.getElementById("high").style.visibility = "hidden";
    
    if(random2 == random1){
        low();
    }
    
    else if( random2 > random1){
        document.getElementById("message").innerHTML = "success";
        stake = 10 * multiplier;
        document.getElementById("multi").style.visibility = "visible";
        localStorage.setItem("stake", stake);
        document.getElementById("stake").innerHTML = stake;
        document.getElementById("tryagain").innerHTML = "CASH IN";
    }
    else{
        document.getElementById("message").innerHTML = "fail";
        stake = 0;
        localStorage.setItem("stake", stake);
        document.getElementById("stake").innerHTML = stake;
        document.getElementById("tryagain").innerHTML = "try again";
        
    }
    document.getElementById("money").innerHTML = money;
    localStorage.setItem("money", money);
});

$("#tryagain").click(function()
{
    multiplier = 2;
    money += stake;
    stake = 0;
    document.getElementById("stake").innerHTML = stake;
    document.getElementById("money").innerHTML = money;
    document.getElementById("multiplier").innerHTML = multiplier;
    document.getElementById("random1").innerHTML = "";
    document.getElementById("random2").innerHTML = "";
    document.getElementById("message").innerHTML = "Message";
    document.getElementById("tryagain").innerHTML = "try again";
    document.getElementById("start").style.visibility = "visible";
    document.getElementById("tryagain").style.visibility = "hidden";
    document.getElementById("multi").style.visibility = "hidden";
    localStorage.setItem("multiplier", multiplier);
    localStorage.setItem("money", money);
    
});

$("#multi").click(function()
{
    multiplier *=2;
    localStorage.setItem("multiplier", multiplier);
    random1 = Math.floor(Math.random() * 10) + 1;
    
    document.getElementById("multiplier").innerHTML = multiplier;
    document.getElementById("multi").style.visibility = "hidden";
    document.getElementById("tryagain").style.visibility = "hidden";
    document.getElementById("random1").innerHTML = random1;
    document.getElementById("random2").innerHTML = "";
    document.getElementById("low").style.visibility = "visible";
    document.getElementById("high").style.visibility = "visible";
    document.getElementById("money").innerHTML = money;
    
});
