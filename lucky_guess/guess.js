
var money = 100;                  //GLOBAL VARIABLES
var multiplier = 2;
var stake = 0;
var total_tries = 0;
var current_tries = 0;

total_tries = localStorage.getItem("total_tries");           //get values from local storage on load
current_tries = localStorage.getItem("current_tries");
stake = localStorage.getItem("stake");
money = localStorage.getItem("money");
multiplier = localStorage.getItem("multiplier");

document.getElementById("money").innerHTML = "money " + money;                       //HTML
document.getElementById("stake").innerHTML = "+" + stake;
document.getElementById("multiplier").innerHTML = "multiplier " + multiplier + "X";

document.getElementById("low").style.visibility = "hidden";        //CSS
document.getElementById("high").style.visibility = "hidden";
document.getElementById("tryagain").style.visibility = "hidden";
document.getElementById("multi").style.visibility = "hidden";

if(money == 0){                               //IF you exited the app after game over
    $("#start").css("visibility","hidden");
    $("#message").text("Game over");
}

$("#start").click(function ()
{
    money -= 10;
    random1 = Math.floor(Math.random() * 10) + 1;               //VARIABLES


    document.getElementById("random1").innerHTML = random1;          //HTML
    document.getElementById("money").innerHTML = money;
    
    document.getElementById("start").style.visibility = "hidden";  //CSS
    document.getElementById("low").style.visibility = "visible";
    document.getElementById("high").style.visibility = "visible";
    
});

$("#new_game").click(function ()
{
    money = 10;                                                    //VARIABLES
    multiplier = 2;
    stake = 0;
    current_tries = 0;
    
    document.getElementById("money").innerHTML = "money " + money;     //HTML
    document.getElementById("multiplier").innerHTML = multiplier;
    document.getElementById("random1").innerHTML = "";
    document.getElementById("random2").innerHTML = "";
    document.getElementById("message").innerHTML = "message";
    document.getElementById("stake").innerHTML = "stake " + stake;
    
    document.getElementById("start").style.visibility = "visible";   //CSS
    document.getElementById("low").style.visibility = "hidden";
    document.getElementById("high").style.visibility = "hidden";
    document.getElementById("tryagain").style.visibility = "hidden";
    document.getElementById("multi").style.visibility = "hidden";
                  
    localStorage.setItem("money", money);               // STORAGE
    localStorage.setItem("multiplier", multiplier);
    localStorage.setItem("stake", stake);
    localStorage.setItem("current_tries", current_tries); 
});

$("#low").click(function low()
{
    
    random2 = Math.floor(Math.random() * 10) + 1;                      //VARIABLES

    document.getElementById("random2").innerHTML = random2;             //HTML
    
    document.getElementById("tryagain").style.visibility = "visible";     //CSS
    $(".hi_lo").css("visibility","hidden");
    
    
    if(random2 == random1){                                         //RECURSION
        low();
    }
    
    else if( random2 < random1){
        
        stake = 10 * multiplier;
        document.getElementById("message").innerHTML = "success";        //HTML
        document.getElementById("tryagain").innerHTML = "CASH IN";
        document.getElementById("stake").innerHTML = stake;
    
        document.getElementById("multi").style.visibility = "visible";   //CSS
        localStorage.setItem("stake", stake);
           
    }
    else if( (random2 > random1) && (money != 0) ){
        stake = 0;                                                  //VARIABLES
    
        document.getElementById("message").innerHTML = "fail";          //HTML
        document.getElementById("stake").innerHTML = stake;
        document.getElementById("tryagain").innerHTML = "try again";

        localStorage.setItem("stake", stake);                       //STORAGE
    
    }
    else{
        stake = 0;                                                  //VARIABLES
    
        document.getElementById("message").innerHTML = "Game over";          //HTML
        document.getElementById("stake").innerHTML = stake;
        document.getElementById("tryagain").innerHTML = "try again";

         $("#tryagain").css("visibility", "hidden");

        localStorage.setItem("stake", stake);                       //STORAGE
    }
    total_tries++;                                                  //VARIABLES
    current_tries++;
    
    document.getElementById("money").innerHTML = money;         //HTML

     localStorage.setItem("total_tries", total_tries);        //STORAGE
     localStorage.setItem("current_tries", current_tries);
     localStorage.setItem("money", money);
});

$("#high").click(function low()
{
    
    random2 = Math.floor(Math.random() * 10) + 1;                      //VARIABLES

    document.getElementById("random2").innerHTML = random2;             //HTML
    
    document.getElementById("tryagain").style.visibility = "visible";     //CSS
    $(".hi_lo").css("visibility","hidden");
    
    
    if(random2 == random1){                                         //RECURSION
        low();
    }
    
    else if( random2 > random1){
        
        stake = 10 * multiplier;
        document.getElementById("message").innerHTML = "success";        //HTML
        document.getElementById("tryagain").innerHTML = "CASH IN";
        document.getElementById("stake").innerHTML = stake;
    
        document.getElementById("multi").style.visibility = "visible";   //CSS
        localStorage.setItem("stake", stake);
           
    }
    else if( (random2 < random1) && (money != 0) ){
        stake = 0;                                                  //VARIABLES
    
        document.getElementById("message").innerHTML = "fail";          //HTML
        document.getElementById("stake").innerHTML = stake;
        document.getElementById("tryagain").innerHTML = "try again";

        localStorage.setItem("stake", stake);                       //STORAGE
    
    }
    else{
        stake = 0;                                                  //VARIABLES
    
        document.getElementById("message").innerHTML = "Game over";          //HTML
        document.getElementById("stake").innerHTML = stake;
        document.getElementById("tryagain").innerHTML = "try again";

         $("#tryagain").css("visibility", "hidden");

        localStorage.setItem("stake", stake);                       //STORAGE
    }
    total_tries++;                                                  //VARIABLES
    current_tries++;
    
    document.getElementById("money").innerHTML = money;         //HTML

     localStorage.setItem("total_tries", total_tries);        //STORAGE
     localStorage.setItem("current_tries", current_tries);
     localStorage.setItem("money", money);
});

$("#tryagain").click(function()
{
    multiplier = 2;                 //VARIABLES
    money += stake;
    stake = 0;
    
    document.getElementById("stake").innerHTML = stake;        //HTML
    document.getElementById("money").innerHTML = money;
    document.getElementById("multiplier").innerHTML = multiplier;
    document.getElementById("random1").innerHTML = "";
    document.getElementById("random2").innerHTML = "";
    document.getElementById("message").innerHTML = "Message";
    document.getElementById("tryagain").innerHTML = "try again";

    document.getElementById("start").style.visibility = "visible";       //CSS
    $(".try_multi").css("visibility","hidden");

    localStorage.setItem("multiplier", multiplier);      //STORAGE
    localStorage.setItem("money", money);
    localStorage.setItem("stake", stake);
    
    
});

$("#multi").click(function()
{
    multiplier *=2;                                            //VARIABLES
    localStorage.setItem("multiplier", multiplier);
    random1 = Math.floor(Math.random() * 10) + 1;
    
    document.getElementById("multiplier").innerHTML = multiplier;     //HTML
    document.getElementById("random1").innerHTML = random1;
    document.getElementById("random2").innerHTML = "";
    document.getElementById("money").innerHTML = money; 

    $(".hi_lo").css("visibility","visible");         //CSS
    $(".try_multi").css("visibility","hidden");
    
});

$("#stats_button").click(function()
{
    $("#start").css("visibility","hidden");                  //INDEX VISIBILITY
    $("#new_game").css("visibility","hidden");
    $(".hi_lo").css("visibility","hidden");
    $(".try_multi").css("visibility","hidden");
    $("#stats_button").css("visibility","hidden");
    $(".index_static").css("visibility","hidden");
    $("#index_page").css("position", "absolute");
    $("#index_page").css("top", "1px");
    $("#index_page").css("z-index", "0");
    
    
    $("#stats_page").css("visibility", "visible");          //STATS VISIBILITY
    $("#stats_page").css("position", "relative");
    $("#stats_page").css("z-index", "1");

    $("#current_tries").text("Current tries " + current_tries);  //HTML
    $("#total_tries").text("Current tries " + total_tries);


});

$("#index_button").click(function()
{   
    if(money != 0){                                 //START BUTTON IS NOT AVALIABLE IF THE GAME IS OVER
        $("#start").css("visibility","visible");                 
        
    }
    else{
        $("#start").css("visibility","hidden");
    }

    $("#new_game").css("visibility","visible");      //INDEX VISIBILITY
    $(".hi_lo").css("visibility","hidden");
    $(".try_multi").css("visibility","hidden");
    $("#stats_button").css("visibility","visible");
    $(".index_static").css("visibility","visible");
    $("#index_page").css("position", "relative");
    $("#index_page").css("top", "1px");
    $("#index_page").css("z-index", "1");
    
    $("#stats_page").css("visibility", "hidden");          //STATS VISIBILITY
    $("#stats_page").css("position", "absolute");
    $("#stats_page").css("z-index", "0");

    $("#current_tries").text("Current tries " + current_tries);
    $("#total_tries").text("Current tries " + total_tries);
    
});
   
   


  











