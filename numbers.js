$(".grid_number_buttons").click(function color(){
    $(".grid_number_buttons").css("background-color","lightblue");
	this.style.backgroundColor="red";
});



$("#1").click(function confirm_guess(){
    picked_number=1;
	document.getElementById("1").style.backgroundColor="red";
	
	
});
$("#2").click(function confirm_guess(){
   picked_number=2;
   document.getElementById("2").style.backgroundColor="red";
	
	
	
});
$("#3").click(function confirm_guess(){
    picked_number=3;
	document.getElementById("3").style.backgroundColor="red";
	
	
	
});
$("#4").click(function confirm_guess(){
    picked_number=4;
	document.getElementById("4").style.backgroundColor="red";
	
	
	
});
$("#5").click(function confirm_guess(){
    picked_number=5;
	document.getElementById("5").style.backgroundColor="red";
	
	
	
});
$("#6").click(function confirm_guess(){
    picked_number=6;
	document.getElementById("6").style.backgroundColor="red";
	
	
	
});
$("#7").click(function confirm_guess(){
    picked_number=7;
	document.getElementById("7").style.backgroundColor="red";
	
	
	
});
$("#8").click(function confirm_guess(){
    picked_number=8;
	document.getElementById("8").style.backgroundColor="red";
	
	
	
});
$("#9").click(function confirm_guess(){
    picked_number=9;
	document.getElementById("9").style.backgroundColor="red";

});

$(".grid_number_buttons").click(function check_money(){  //mora bit ispod svhi pojedinacnih
	if(money>=0&&flow!=1){
		document.getElementById("your_pick").innerHTML=picked_number;
	}
	});