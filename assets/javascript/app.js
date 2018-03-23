
var number = 60; 
var intervalId;

var correctCount = 0;
var wrongCount = 0;
var unansweredCount = 5;


$(document).ready(function () {

	// Intialize the game with hidden Divs
	$("#Secondpage").hide();
	$("#Thirdpage").hide();

});

// to start the game
$("#StartGame").on("click", function () {

	// Hide the start page.
	$("#Firstpage").hide();

	// Show the Game page.
	$("#Secondpage").show();

	//Hide the Results page.
	$("#Thirdpage").hide();

	run();

});


function decrement() {
	number--;

	$("#number").html(+ number + " seconds");

	if (number === 0) {

		number = 60;
		alert("Time Up!");
		stop();
	
	//Update these elements before showing the third page
	$('#correct_answers').html(correctCount);
	$('#wrong_answers').html(wrongCount);
	$('#unanswered').html(unansweredCount);

		//Hide second page.
		$("#Secondpage").hide();

		//Show Thirdpage.
		$("#Thirdpage").show();

		// Results();
	}
}

function run() {
	clearInterval(intervalId);
	intervalId = setInterval(decrement, 1000);
}

function stop() {
	clearInterval(intervalId);
}

// User finishes before time is up and clicks submit button.
$("#Submit_button").on("click", function () {

	count = 0;

	// Hide the start page.
	$("#Firstpage").hide();

	// Hide the Game page.
	$("#Secondpage").hide();

	//Update these elements before showing the third page 
	$('#correct_answers').html(correctCount);
	$('#wrong_answers').html(wrongCount);
	$('#unanswered').html(unansweredCount);

	//Show the Results page.
	$("#Thirdpage").show();

	stop();
	
});

$(document).on("click", "input", function () {
	unansweredCount--;

	var answer = $(this).attr("value");
	if (answer === "right") {
		correctCount++;
	}
	else if (answer === "wrong") {
		wrongCount++;
	}
});

//another way to add counts.
// function Results() {
// 	$(".question").each(function(){
// 		var question = $(this);

// 		if(question.prop("checked")){
// 			if(question.val() === "right"){
// 				correctCount++;
// 			}
// 			else if(question.val() === "wrong"){
// 				wrongCount++;
// 			}
// 			else{
// 				unansweredCount++;
// 			}
// 		}
// 	});

	

// };