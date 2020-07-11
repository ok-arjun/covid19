$(document).ready(function () {
  // fetching data from api
  $.getJSON("https://api.covid19india.org/data.json", function(data) 
  {
    var states = [];
    var confirmed = [];
    var recovered = [];
    var deaths = [];

    var tt_confirmed;
    var tt_active;
    var tt_recovered;
    var tt_deaths;

    var confirmedincrease;
    var recoveredincrease;
    var deathincrease;

    
    tt_confirmed=data.statewise[0].confirmed;
    tt_active=data.statewise[0].active;
    tt_recovered=data.statewise[0].recovered;
    tt_deaths=data.statewise[0].deaths;

    confirmedincrease=data.statewise[0].deltaconfirmed;
    recoveredincrease=data.statewise[0].deltarecovered;
    deathincrease=data.statewise[0].deltadeaths;

    $("#confirmed").append(tt_confirmed);
    $("#active").append(tt_active);
    $("#recovered").append(tt_recovered);
    $("#deaths").append(tt_deaths);

    $("#nc").append(confirmedincrease);
    $("#nr").append(recoveredincrease);
    $("#nd").append(deathincrease);
    
       // Take the data in that array and add it to variables
       $.each(data.statewise, function (id, obj) {
        states.push(obj.state);
        confirmed.push(obj.confirmed);
        recovered.push(obj.recovered);
        deaths.push(obj.deaths);
      });
  
      // Remove the first element in the states, confirmed, recovered, and deaths as that is the total value
      states.shift();
      confirmed.shift();
      recovered.shift();
      deaths.shift();
   
  });

});
//-----------------------district wise table------------
$.getJSON("https://api.covid19india.org/state_district_wise.json", function (data2) {
		var city=[];
		var con=[];
		var act=[];
		var rec=[];
		var died=[];
        
		$.each(data2, function (id, obj) {
		 
		 $.each(obj.districtData, function (j, dist) {
			city.push(j);
			con.push(dist.confirmed);
			act.push(dist.active);
			rec.push(dist.recovered);
			died.push(dist.deceased);
	      });
		});
		
	  console.log(died);
		for(var i = 0; i<city.length; i++){
		
		$('#dist').append(city[i]+"<br>");
		}
		for(var j = 0; j<con.length; j++){
		
			$('#conf').append(con[j]+"<br>");
			}
		for(var k = 0; k<rec.length; k++){
		
		$('#recov').append(rec[k]+"<br>");
		}	
		for(var l = 0; l<act.length; l++){
		
			$('#actv').append(act[l]+"<br>");
			}
		for(var m = 0; m<died.length; m++){
		
			$('#death').append(died[m]+"<br>");
			}	
   });
//tester function js

function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var chance = 0;
 console.log("ss",question1);

	if (question1 == "yes") {
		chance++;
}
	if (question2 == "yes") {
		chance++;
}	
	if (question3 == "yes") {
		chance++;
	}
	if (question4 == "yes") {
		chance++;
	}
	
	var messages = ["You may have Covid19 consider a doctor immediately!", "You have some serious symptoms. kindly quarantine yourself and consider a doctor!","you have mild symptoms. seek a doctor and take healthy foods!","you have some common symptoms. take healthy foods!", "You don't have any symptoms of covid19. stay home stay safe!"];
	var caution;

	if (chance == 0) {
		caution = 4;
	}

	if (chance==1) {
		caution = 3;
	}
	if (chance ==2) {
		caution = 2;
	}

	if (chance ==3) {
		caution = 1;
	}
	if (chance == 4) {
		caution = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[caution];
	document.getElementById("number_chance").innerHTML = "You got " + chance + " on test.";

	}
	$(document).ready(function () {
  $("#hide").click(function(){
    $("td").hide();
  });
  $("#show").click(function(){
    $("td").show();
  });
});
