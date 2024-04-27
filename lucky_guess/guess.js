var time = 30;
var highscore = 0;
var control2 = 0; //new game control
var money = 0;                  //GLOBAL VARIABLES
var multiplier = 2;
var stake = 0;
var control = localStorage.getItem("control");
var control3 = 1;
var angle = 180;
var background_color = localStorage.getItem("background_color");



if(control == null || NaN || undefined){                    //FIRST GAME CHECK
    control++;                                                          //VARIABLES
    background_color = "#3d72b4";
    
    document.getElementById("message").innerHTML = "Start New Game";   //HTML
    
    document.getElementById("start").style.visibility = "hidden";     //CSS

    localStorage.setItem("background_color", background_color);
    localStorage.setItem("multiplier", multiplier);
    localStorage.setItem("control", control);                    //STORAGE
    localStorage.setItem("money", money);
    localStorage.setItem("stake", stake);
	localStorage.setItem("highscore", highscore);
    

}
control2 = localStorage.getItem("control2");

stake = localStorage.getItem("stake");
money = localStorage.getItem("money");
multiplier = localStorage.getItem("multiplier");
highscore = localStorage.getItem("highscore");


document.getElementById("money").innerHTML = "money " + money;                       //HTML
document.getElementById("stake").innerHTML = "+" + stake;
document.getElementById("multiplier").innerHTML = "multiplier " + multiplier + "X";

document.getElementById("low").style.visibility = "hidden";        //CSS
document.getElementById("high").style.visibility = "hidden";
document.getElementById("tryagain").style.visibility = "hidden";
document.getElementById("multi").style.visibility = "hidden";

var rotate_interval = setInterval(rotate_background,100);
function rotate_background(){
    
    angle+=5;
    $("body").css("background", 'linear-gradient('+ angle + 'deg,'+ background_color + ', #525252)');
}


function timer(){
    
    time -= 1;
    document.getElementById("time").innerHTML = time;
	
	if( time == 0){
			clearInterval(timer_interval);
			clearInterval(rotate_interval);
                rotate_interval = 0;
                background_color = "red";
				rotate_interval = setInterval(rotate_background,100);
				document.getElementById("message").innerHTML = "time is up!!! score is " + money;
				document.getElementById("high").style.visibility = "hidden";
				document.getElementById("low").style.visibility = "hidden";
				document.getElementById("tryagain").style.visibility = "hidden";
				document.getElementById("multi").style.visibility = "hidden";
				document.getElementById("random1").innerHTML = "";
				document.getElementById("random2").innerHTML = "";
				
				temp = money;
				if( highscore < temp){
						highscore = money;
						localStorage.setItem("highscore", highscore);
						document.getElementById("highscore").innerHTML = highscore;
				}
	}
}




function start()
{
		control3 = 1;
		time = 30;
		document.getElementById("random1").innerHTML = time;
        random1 = Math.floor(Math.random() * 10) + 1;                //VARIABLES
    
        if( (random1 == 1) || (random1 == 10) ){
			start();
        return;
        }
		
		timer_interval = setInterval(timer,1000);
		
        document.getElementById("random1").innerHTML = random1;          //HTML
        document.getElementById("money").innerHTML = "money " + money;
        document.getElementById("stake").innerHTML = "+" + stake;
        document.getElementById("message").innerHTML = "Higher or lower?";
    
        document.getElementById("start").style.visibility = "hidden";   //CSS
        document.getElementById("low").style.visibility = "visible";
        document.getElementById("high").style.visibility = "visible";
        document.getElementById("message").style.fontSize = "35px";
    
    
    
}

function new_game()
{
	time = 30;
    money = 0;                                                    //VARIABLES
    multiplier = 2;
    stake = 0;
    control2 = 1;
    control3 = 0;
	
	
    clearInterval(rotate_interval);                         //  BACKGROUND ROTATION
    rotate_interval = 0;
    background_color = "#3d72b4";
    rotate_interval = setInterval(rotate_background,100);
    
    document.getElementById("money").innerHTML = "money " + money;     //HTML
    document.getElementById("multiplier").innerHTML = "multiplier " + multiplier + "X";
    document.getElementById("random1").innerHTML = "";
    document.getElementById("random2").innerHTML = "";
    document.getElementById("message").innerHTML = "message";
    document.getElementById("stake").innerHTML = "stake " + stake;
    document.getElementById("message").innerHTML = "Press Start";
    
    
    document.getElementById("start").style.visibility = "visible";   //CSS
    document.getElementById("low").style.visibility = "hidden";
    document.getElementById("high").style.visibility = "hidden";
    document.getElementById("tryagain").style.visibility = "hidden";
    document.getElementById("multi").style.visibility = "hidden";
                  
    localStorage.setItem("money", money);               // STORAGE
    localStorage.setItem("multiplier", multiplier);
    localStorage.setItem("stake", stake);

    localStorage.setItem("control2",control2);
    localStorage.setItem("background_color", background_color);
	clearInterval(timer_interval); //mora bit na dnu
}

function low()
{
    
    random2 = Math.floor(Math.random() * 10) + 1;                      //VARIABLES

    document.getElementById("random2").innerHTML = random2;             //HTML
    document.getElementById("multiplier").innerHTML = "multiplier " + multiplier + "X";
    
    
    document.getElementById("tryagain").style.visibility = "visible";     //CSS
    $(".hi_lo").css("visibility","hidden");
    
    
    if(random2 == random1){                                         //RECURSION
        low();
        return;                //stops the current function which generated a random2 equal to random1
    }
    
    else if( random2 < random1){
        
        stake = 10 * multiplier;                                         //VARIABLES
        
        document.getElementById("message").innerHTML = "success";        //HTML
        document.getElementById("tryagain").innerHTML = "CASH IN";
        document.getElementById("stake").innerHTML = stake;
    
        document.getElementById("multi").style.visibility = "visible";   //CSS
        localStorage.setItem("stake", stake);
        
           
    }
    else if( random2 > random1){
        stake = 0;                                                  //VARIABLES
        
        document.getElementById("message").innerHTML = "fail";          //HTML
        document.getElementById("stake").innerHTML = stake;
        document.getElementById("tryagain").innerHTML = "try again";

        localStorage.setItem("stake", stake);                       //STORAGE
    
    }
    else if( random2 > random1){
        stake = 0;                                                  //VARIABLES
        
        document.getElementById("message").innerHTML = "Game over";          //HTML
        document.getElementById("stake").innerHTML = stake;
        document.getElementById("tryagain").innerHTML = "try again";

         $("#tryagain").css("visibility", "hidden");             //CSS

        localStorage.setItem("stake", stake);                       //STORAGE
    }
    
    
    document.getElementById("money").innerHTML = "money " + money;
     document.getElementById("stake").innerHTML = "+" + stake;         //HTML

    
     localStorage.setItem("money", money); //STORAGE
     
}

function high()
{
    
    random2 = Math.floor(Math.random() * 10) + 1;                      //VARIABLES

    document.getElementById("random2").innerHTML = random2;             //HTML
    document.getElementById("multiplier").innerHTML = "multiplier " + multiplier + "X";
    
    
    document.getElementById("tryagain").style.visibility = "visible";     //CSS
    $(".hi_lo").css("visibility","hidden");
    
    
    if(random2 == random1){                                         //RECURSION
        high();
        return;         //stops the current function which generated a random2 equal to random1
    }
    
    else if( random2 > random1 ){
        
        stake = 10 * multiplier;                                         //VARIABLES
        
        
        document.getElementById("message").innerHTML = "success";        //HTML
        document.getElementById("tryagain").innerHTML = "CASH IN";
        document.getElementById("stake").innerHTML = stake;
    
        document.getElementById("multi").style.visibility = "visible";   //CSS
        localStorage.setItem("stake", stake);
        
           
    }
    else if( random2 < random1 ){
        stake = 0;                                                  //VARIABLES
        
        document.getElementById("message").innerHTML = "fail";          //HTML
        document.getElementById("stake").innerHTML = stake;
        document.getElementById("tryagain").innerHTML = "try again";

        localStorage.setItem("stake", stake);                       //STORAGE
    
    }
    else if( random2 < random1){
        stake = 0;                                                  //VARIABLES
        
        document.getElementById("message").innerHTML = "Game over";          //HTML
        document.getElementById("stake").innerHTML = stake;
        document.getElementById("tryagain").innerHTML = "try again";

         $("#tryagain").css("visibility", "hidden");             //CSS

        localStorage.setItem("stake", stake);                       //STORAGE
    }
    
    
     document.getElementById("money").innerHTML = "money " + money;
     document.getElementById("stake").innerHTML = "+" + stake;         //HTML

     
     localStorage.setItem("money", money);
     
}



function tryagain()
{
	
	random1 = Math.floor(Math.random() * 10) + 1;                //VARIABLES
    
	if( (random1 == 1) || (random1 == 10)){
		tryagain();
		return;
        }
		
    multiplier = 2;                 //VARIABLES
    money += stake;
    stake = 0;
    
    clearInterval(rotate_interval);                         //BACKGROUND ROTATION
    rotate_interval = 0;
    background_color = "#3d72b4";
    rotate_interval = setInterval(rotate_background,100);
    localStorage.setItem("background_color", background_color);
	
	

	document.getElementById("random1").innerHTML = random1; 
    document.getElementById("money").innerHTML = "money " + money;        //HTML
    document.getElementById("stake").innerHTML = "+" + stake;
    document.getElementById("multiplier").innerHTML = "multiplier " + multiplier + "X";
    
    document.getElementById("random2").innerHTML = "";
    document.getElementById("message").innerHTML = "Press start";
    document.getElementById("tryagain").innerHTML = "try again";

          //CSS
    $(".try_multi").css("visibility","hidden");
	document.getElementById("high").style.visibility = "visible";
	document.getElementById("low").style.visibility = "visible";
	document.getElementById("random1").style.visibility = "visible";
	document.getElementById("random2").style.visibility = "visible";

    localStorage.setItem("multiplier", multiplier);      //STORAGE
    localStorage.setItem("money", money);
    localStorage.setItem("stake", stake);
    
    
}

function multi()
{

   
    random1 = Math.floor(Math.random() * 10) + 1;
    if( (random1 == 1) || (random1 == 10)){
        multi();
        return;
    }
    else{
    
    multiplier *=2;                                            //VARIABLES
    localStorage.setItem("multiplier", multiplier);
    switch(multiplier){
        case 4: clearInterval(rotate_interval);
                rotate_interval = 0;
                background_color = "cyan";
                break;
        case 8: clearInterval(rotate_interval);
                rotate_interval = 0;
                background_color = "lime";
                break;
        case 16:clearInterval(rotate_interval);
                rotate_interval = 0;
                background_color = "red";
                break;
        case 32:clearInterval(rotate_interval);
                rotate_interval = 0;
                background_color = "orange";
                break;
         case 64:clearInterval(rotate_interval);
                rotate_interval = 0;
                background_color = "yellow";
                break;
         case 128:clearInterval(rotate_interval);
                rotate_interval = 0;
                background_color = "#ff0385";
                break;

         case 256:clearInterval(rotate_interval);
                rotate_interval = 0;
                background_color = "#ffa8a8";
                break;
        default:clearInterval(rotate_interval);
                rotate_interval = 0;
                background_color = "#ffa8a8";
                break;
    }
    rotate_interval = setInterval(rotate_background,100);
    localStorage.setItem("background_color", background_color);
    
    document.getElementById("multiplier").innerHTML = "multiplier " + multiplier + "X";     //HTML
    document.getElementById("random1").innerHTML = random1;
    document.getElementById("random2").innerHTML = "";
    document.getElementById("money").innerHTML = "money " + money;
    document.getElementById("stake").innerHTML = "+" + stake;
    document.getElementById("message").innerHTML = "multiplier "+ multiplier + "X";
    

    $(".hi_lo").css("visibility","visible");         //CSS
    $(".try_multi").css("visibility","hidden");
   }
    
}

function stats()
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
	 $("#random1").css("visibility", "hidden");
    
    
    $("#stats_page").css("visibility", "visible");          //STATS VISIBILITY
    $("#stats_page").css("position", "relative");
    $("#stats_page").css("z-index", "1");
	
	document.getElementById("highscore").innerHTML = "Highscore: " + highscore;
}

function index()
{   
    control++; //???
    
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
	$("#random1").css("visibility", "visible");
	$("#random1").text("");
}
   
   














