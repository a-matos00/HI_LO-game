var picked_number = 0;      //number selected on the number grid
var money = 100;            //money amount
var bet = 1;                //default bet
var flow = 0;               //VERY IMPORTANT: It prevents from picking a new number if try again is not pressed.
var tries = 0;              //AMOUNT OF TRIES
var win = 0;                //AMOUNT OF SUCCESSFUL GUESSES
var win = 0;                //AMOUNT OF SUCCESSFUL GUESSES
var percentage=0;         //Percentage of successful guesses
var percentage_rounded=0; //rounded percentage


$("body").ready(function(){
	
	money=localStorage.getItem("kune");    				            //Restore variables from storage
	win=localStorage.getItem("win");
	tries=localStorage.getItem("tries");
	
	percentage_rounded= Math.round((win/tries)*100);               //variable
	
	document.getElementById("money").innerHTML=Math.round(money);  //HTML
	document.getElementById("success_rate").innerHTML="Sucess rate "+percentage_rounded+"%";
});

$("#new_game").click(function new_game(){
	flow=0;                      											//VARIABLES
    picked_number=0;	
    money=100;
	percentage=0;
	tries=0;
    win=0;
	percentage_rounded= Math.round((win/tries)*100);
  
    document.getElementById("money").innerHTML=Math.round(money);           //HTML
	document.getElementById("your_pick").innerHTML="";                      
	document.getElementById("success_rate").innerHTML="Sucess rate "+percentage_rounded+"%";
	
    document.getElementById("reset").style.visibility="hidden";              //CSS
	document.getElementById("high").style.visibility="visible";
	document.getElementById("low").style.visibility="visible";
	$(".grid_number_buttons").css("background-color","lightblue");
	
	localStorage.setItem("kune", money);                                    //STORAGE
	localStorage.setItem("tries", tries);
	localStorage.setItem("win", win);
	
});

$("#reset").click(function brisanje(){
	flow--;                                                                 //VARIABLE
    picked_number=0;	
	
	document.getElementById("reset").style.visibility="hidden";             //CSS
	$(".grid_number_buttons").css("background-color","lightblue");
	document.getElementById("high").style.visibility="visible";
	document.getElementById("low").style.visibility="visible";
	
	document.getElementById("message").innerHTML="Pick a number!";          //HTML
	document.getElementById("random_pick").innerHTML="";
	document.getElementById("your_pick").innerHTML="";

});

$("#high").click(function random_number(){
	if(bet<money+1){                                //If the bet is smaller then the amount of money the user has
	
		tries++;                                    //adds to the sum of tries
		flow++;                                    //locks the functionality of the number grid numbers
		money-=bet;                                //bet is deducted from money mount
		var random_number=Math.floor(Math.random() * (10 - 0 + 0)) + 0;  // (max - min + min)) + min;  sets random number as variable                                                              

        $(".grid_number_buttons").css("background-color","lightblue");   //CSS
		document.getElementById("reset").style.visibility="visible";
		document.getElementById("high").style.visibility="hidden";
		document.getElementById("low").style.visibility="hidden";
    
		document.getElementById("random_pick").innerHTML=random_number;  //HTML
    
if(picked_number<random_number){            //Winning scenario
	
															//VARIABLES
	win++;                                                 //win count increase
	percentage_rounded= Math.round((win/tries)*100);
	
	document.getElementById("win_sound").play();          //Plays winning sound
	
	
	switch(picked_number){                 //every number has a different multiplier base on probability
		case 9:money+=bet*10;break;
		case 8:money+=bet*5;break;
		case 7:money+=bet*4;break;
		case 6:money+=bet*3;break;
		case 5:money+=bet*2;break;
		case 4:money+=bet*1.5;break;
		case 3:money+=bet*1.4;break;
		case 2:money+=bet*1.2;break;
		case 1:money+=bet*1.1;break;	
	}

	document.getElementById("success_rate").innerHTML="Sucess rate "+percentage_rounded+"%";   //HTML
	document.getElementById("message").innerHTML="GOOD JOB!";
	document.getElementById("money").innerHTML=Math.round(money);		
}

else if(picked_number==random_number){                             //Jackpot scenario

	win++;
	money+=bet*20;                                                 //Jackpot multiplier
	percentage_rounded= Math.round((win/tries)*100);
	
	document.getElementById("win_sound").play();                   //Plays jackpot audio
	
	document.getElementById("message").innerHTML="JACKPOT";        //HTML
	document.getElementById("money").innerHTML=Math.round(money);
	document.getElementById("success_rate").innerHTML="Sucess rate "+percentage_rounded+"%";
	
	
	
}
else{               											   //Fail scenario
	
	percentage_rounded= Math.round((win/tries)*100);               //VARIABLES
	
	document.getElementById("fail_sound").play();                  //Fail sound
	
	document.getElementById("success_rate").innerHTML="Sucess rate "+percentage_rounded+"%"; //HTML
	document.getElementById("message").innerHTML="FAIL";
	document.getElementById("money").innerHTML=Math.round(money);
	
}
localStorage.setItem("kune", money);                       //Storage
localStorage.setItem("tries", tries);
localStorage.setItem("win", win);

	} //END OF IF(bet<money)
	

    else if(money<=0){
		document.getElementById("message").innerHTML="Game over";
	}
	
	else{
		document.getElementById("message").innerHTML="Pick a smaller bet";
	}
	
	
});

$("#low").click(function random_number(){
	if(bet<money+1){
		tries++;
		flow++;
    $(".grid_number_buttons").css("background-color","lightblue");
	document.getElementById("reset").style.visibility="visible";
    var number=Math.floor(Math.random() * (10 - 0 + 0)) + 0;
    document.getElementById("random_pick").innerHTML=random_number;
    money-=bet;
	document.getElementById("high").style.visibility="hidden";
	document.getElementById("low").style.visibility="hidden";

 
if(picked_number>random_number){
	win++;
	document.getElementById("win_sound").play();
	document.getElementById("message").innerHTML="GOOD JOB!";
	switch(picked_number){
		case 9:money+=bet*1.1;break;
		case 8:money+=bet*1.2;break;
		case 7:money+=bet*1.4;break;
		case 6:money+=bet*1.5;break;
		case 5:money+=bet*2;break;
		case 4:money+=bet*3;break;
		case 3:money+=bet*4;break;
		case 2:money+=bet*5;break;
		case 1:money+=bet*10;break;	
	}
	document.getElementById("money").innerHTML=Math.round(money);
	percentage_rounded= Math.round((win/tries)*100);
	document.getElementById("success_rate").innerHTML="Sucess rate "+percentage_rounded+"%";
	
		
}
else if(picked_number==number){
	win++;
	document.getElementById("win_sound").play();
	document.getElementById("message").innerHTML="JACKPOT";
	money+=bet*20;
	document.getElementById("money").innerHTML=Math.round(money);
	percentage_rounded= Math.round((win/tries)*100);
	document.getElementById("success_rate").innerHTML="Sucess rate "+percentage_rounded+"%";
	
}
else{
	percentage_rounded= Math.round((win/tries)*100);
	document.getElementById("success_rate").innerHTML="Sucess rate "+percentage_rounded+"%";
	document.getElementById("fail_sound").play();
	document.getElementById("message").innerHTML="FAIL";
	document.getElementById("money").innerHTML=Math.round(money);
}
localStorage.setItem("kune", money);
localStorage.setItem("win", win);
localStorage.setItem("tries", tries);

	} //END OF IF(bet<money)
	

    else if(money<=0){
		document.getElementById("message").innerHTML="Game over";
	}
	else{
		document.getElementById("message").innerHTML="Pick a smaller bet";
	}
	
	
});





