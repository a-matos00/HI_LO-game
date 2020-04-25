
var control2 = 0; //new game control
var money = 100;                  //GLOBAL VARIABLES
var multiplier = 2;
var stake = 0;
var total_tries = 0;
var current_tries = 0;
var total_wins = 0;
var current_wins = 0;
var total_fails = 0;
var current_fails = 0;
var success_rate = 0;
var total_success_rate = 0;
var highest_multiplier = 2;
var total_highest_multiplier = 2;

var control = localStorage.getItem("control");

if(control == null || NaN || undefined){                    //FIRST GAME CHECK
    control++;                                                          //VARIABLES
    
    document.getElementById("start").style.visibility = "hidden";     //CSS

    localStorage.setItem("control", control);                    //STORAGE
    localStorage.setItem("money", money);
    localStorage.setItem("stake", stake);
    localStorage.setItem("total_tries", total_tries);
    localStorage.setItem("current_tries", current_tries);
    localStorage.setItem("total_wins", total_wins);
    localStorage.setItem("current_wins", current_wins);
    localStorage.setItem("total_fails", total_fails);
    localStorage.setItem("success_rate", success_rate);
    localStorage.setItem("total_success_rate", total_success_rate);
    localStorage.setItem("highest_multiplier", highest_multiplier);
    localStorage.setItem("total_highest_multiplier", total_highest_multiplier);

}
control2 = localStorage.getItem("control2");
total_tries = localStorage.getItem("total_tries");           //get values from local storage on load
current_tries = localStorage.getItem("current_tries");
total_wins = localStorage.getItem("total_wins");
current_wins = localStorage.getItem("current_wins");
total_fails = localStorage.getItem("total_fails");
current_fails = localStorage.getItem("current_fails");
stake = localStorage.getItem("stake");
money = localStorage.getItem("money");
multiplier = localStorage.getItem("multiplier");
highest_multiplier = localStorage.getItem("highest_multiplier");
total_highest_multiplier = localStorage.getItem("total_highest_multiplier");


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

$("#start").click(function start()
{

        random1 = Math.floor(Math.random() * 10) + 1;               
    
        if( (random1 == 1) || (random1 == 10)){
        start();
        return;
        }
    
        money -= 10;
   

        document.getElementById("random1").innerHTML = random1;          //HTML
        document.getElementById("money").innerHTML = money;
    
        document.getElementById("start").style.visibility = "hidden";   //CSS
        document.getElementById("low").style.visibility = "visible";
        document.getElementById("high").style.visibility = "visible";
    
    
    
});

$("#new_game").click(function ()
{
    money = 100;                                                    //VARIABLES
    multiplier = 2;
    stake = 0;
    current_tries = 0;
    current_wins = 0;
    current_fails = 0;
    highest_multiplier = 2;
    control2 = 1;
    
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
    localStorage.setItem("highest_multiplier", highest_multiplier);
    localStorage.setItem("stake", stake);
    localStorage.setItem("current_tries", current_tries); 
    localStorage.setItem("current_wins", current_wins);
    localStorage.setItem("current_fails", current_fails);
    localStorage.setItem("control2",control2);
});

$("#low").click(function low()
{
    
    random2 = Math.floor(Math.random() * 10) + 1;                      //VARIABLES

    document.getElementById("random2").innerHTML = random2;             //HTML
    
    document.getElementById("tryagain").style.visibility = "visible";     //CSS
    $(".hi_lo").css("visibility","hidden");
    
    
    if(random2 == random1){                                         //RECURSION
        low();
        return;                //stops the current function which generated a random2 equal to random1
    }
    
    else if( random2 < random1){
        
        stake = 10 * multiplier;                                         //VARIABLES
        current_wins++;
        total_wins++;
        
        document.getElementById("message").innerHTML = "success";        //HTML
        document.getElementById("tryagain").innerHTML = "CASH IN";
        document.getElementById("stake").innerHTML = stake;
    
        document.getElementById("multi").style.visibility = "visible";   //CSS
        localStorage.setItem("stake", stake);
        
           
    }
    else if( (random2 > random1) && (money != 0) ){
        stake = 0;                                                  //VARIABLES
        current_fails++;
        total_fails++;
        document.getElementById("message").innerHTML = "fail";          //HTML
        document.getElementById("stake").innerHTML = stake;
        document.getElementById("tryagain").innerHTML = "try again";

        localStorage.setItem("stake", stake);                       //STORAGE
    
    }
    else if( (random2 > random1) && (money == 0) ){
        stake = 0;                                                  //VARIABLES
        current_fails++;
        total_fails++;
        document.getElementById("message").innerHTML = "Game over";          //HTML
        document.getElementById("stake").innerHTML = stake;
        document.getElementById("tryagain").innerHTML = "try again";

         $("#tryagain").css("visibility", "hidden");             //CSS

        localStorage.setItem("stake", stake);                       //STORAGE
    }
    current_tries++;
    total_tries++;
    
    document.getElementById("money").innerHTML = money;         //HTML

     localStorage.setItem("total_tries", total_tries);        //STORAGE
     localStorage.setItem("current_tries", current_tries);
     localStorage.setItem("money", money);
     localStorage.setItem("current_wins", current_wins);
     localStorage.setItem("total_wins", total_wins);
     localStorage.setItem("current_fails", current_fails);
     localStorage.setItem("total_fails", total_fails);
});

$("#high").click(function high()
{
    
    random2 = Math.floor(Math.random() * 10) + 1;                      //VARIABLES

    document.getElementById("random2").innerHTML = random2;             //HTML
    
    document.getElementById("tryagain").style.visibility = "visible";     //CSS
    $(".hi_lo").css("visibility","hidden");
    
    
    if(random2 == random1){                                         //RECURSION
        high();
        return;         //stops the current function which generated a random2 equal to random1
    }
    
    else if( random2 > random1){
        
        stake = 10 * multiplier;                                         //VARIABLES
        current_wins++;
        total_wins++;
        
        document.getElementById("message").innerHTML = "success";        //HTML
        document.getElementById("tryagain").innerHTML = "CASH IN";
        document.getElementById("stake").innerHTML = stake;
    
        document.getElementById("multi").style.visibility = "visible";   //CSS
        localStorage.setItem("stake", stake);
        
           
    }
    else if( (random2 < random1) && (money != 0) ){
        stake = 0;                                                  //VARIABLES
        current_fails++;
        total_fails++;
        document.getElementById("message").innerHTML = "fail";          //HTML
        document.getElementById("stake").innerHTML = stake;
        document.getElementById("tryagain").innerHTML = "try again";

        localStorage.setItem("stake", stake);                       //STORAGE
    
    }
    else if( (random2 < random1) && (money == 0) ){
        stake = 0;                                                  //VARIABLES
        current_fails++;
        total_fails++;
        document.getElementById("message").innerHTML = "Game over";          //HTML
        document.getElementById("stake").innerHTML = stake;
        document.getElementById("tryagain").innerHTML = "try again";

         $("#tryagain").css("visibility", "hidden");             //CSS

        localStorage.setItem("stake", stake);                       //STORAGE
    }
    current_tries++;
    total_tries++;
    
    document.getElementById("money").innerHTML = money;         //HTML

     localStorage.setItem("total_tries", total_tries);        //STORAGE
     localStorage.setItem("current_tries", current_tries);
     localStorage.setItem("money", money);
     localStorage.setItem("current_wins", current_wins);
     localStorage.setItem("total_wins", total_wins);
     localStorage.setItem("current_fails", current_fails);
     localStorage.setItem("total_fails", total_fails);
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
    random1 = Math.floor(Math.random() * 10) + 1;
    if( (random1 == 1) || (random1 == 10)){
        multi();
        return;
    }
    
    multiplier *=2;                                            //VARIABLES
    localStorage.setItem("multiplier", multiplier);
    if( multiplier > highest_multiplier){
        highest_multiplier = multiplier;
        localStorage.setItem("highest_multiplier", highest_multiplier);
    }

    if( highest_multiplier > total_highest_multiplier){
        total_highest_multiplier = highest_multiplier;
         localStorage.setItem("total_highest_multiplier", total_highest_multiplier);
    }
    
    
    document.getElementById("multiplier").innerHTML = multiplier;     //HTML
    document.getElementById("random1").innerHTML = random1;
    document.getElementById("random2").innerHTML = "";
    document.getElementById("money").innerHTML = money; 

    $(".hi_lo").css("visibility","visible");         //CSS
    $(".try_multi").css("visibility","hidden");
    
    
});

$("#stats_button").click(function()
{
    success_rate = Math.round((current_wins / current_tries)*100);
    total_success_rate = Math.round((total_wins / total_tries)*100);
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
    $("#total_tries").text("Total tries " + total_tries);
    $("#total_wins").text("Total wins " + total_wins);
    $("#total_fails").text("Total fails " + total_fails);
    $("#current_wins").text("Current wins " + current_wins);
    $("#current_fails").text("Current fails " + current_fails);
    $("#success_rate").text("Success rate " + success_rate + "%");
    $("#total_success_rate").text("All time success rate " + total_success_rate + "%");
    $("#current_highest_mutiplier").text("Current highest multiplier: " + highest_multiplier );
    $("#total_highest_mutiplier").text("All time highest multiplier: " + total_highest_multiplier );


});

$("#index_button").click(function()
{   
    control++;
    if(money != 0 || money < 0){                                 //START BUTTON IS NOT AVALIABLE IF THE GAME IS OVER
        $("#start").css("visibility","visible");                 
        
    }
    else{
        $("#start").css("visibility","hidden");
    }

    if( control2 != 1){
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

  
});
   
   














