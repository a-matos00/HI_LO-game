$("#bet_1").click(function bet_size(){
	if(money>1){
    bet=1;
	$(".bet").css("background-color","white");
	$("#bet_1").css("background-color","red");
	}
	
});
$("#bet_5").click(function bet_size(){
	if(money>5){
    bet=5;
	$(".bet").css("background-color","white");
	$("#bet_5").css("background-color","red");
	}
});
$("#bet_10").click(function bet_size(){
	if(money>10){
    bet=10;
	$(".bet").css("background-color","white");
	$("#bet_10").css("background-color","red");
	}
});
$("#bet_25").click(function bet_size(){
	if(money>25){
    bet=25;
	$(".bet").css("background-color","white");
	$("#bet_25").css("background-color","red");
	}
});
$("#bet_50").click(function bet_size(){
	if(money>50){
    bet=50;
	$(".bet").css("background-color","white");
	$("#bet_50").css("background-color","red");
	}
});