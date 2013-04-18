// JavaScript Document

onload = init;

function init(){

document.getElementById("next1").onclick = function(){nextSection();};
document.getElementById("full_time").onclick = function(){fullTime();};
document.getElementById("part_time").onclick = function(){partTime();};
document.getElementById("next2").onclick = function(){jobApplying();};
document.getElementById("next3").onclick = function(){jobApplying2();};
document.getElementById("back1").onclick = function(){personalInformation1();};
document.getElementById("back2").onclick = function(){personalInformation2();};
document.getElementById("web_design").onclick = function(){webDesign();};
//document.getElementById("web_development").onclick = function(){webDevelopment();};
document.getElementById("back3").onclick = function(){availability1();};
document.getElementById("back4").onclick = function(){back_applying();};
document.getElementById("next4").onclick = function(){next_page4();};
document.getElementById("back5").onclick = function(){back_page4();};
document.getElementById("next5").onclick = function(){next_page5();};
//document.getElementById("add_job").onclick = function(){addJob();};

}

//function addJob(){
	//var section = document.createElement("section"); 
	//section.innerHTML = 
	//var destination = document.getElementById("add_job2"); 
	//destination.parentNode.insertBefore(section,destination);
	//}

function nextSection(){
	document.getElementById("page1").style.display="none";
	document.getElementById("page2").style.display="block";
	}
	
function fullTime(){
	document.getElementById("full_time2").style.display="block";
	document.getElementById("part_time2").style.display="none";
	}
	
function partTime(){
	document.getElementById("part_time2").style.display="block";
	document.getElementById("full_time2").style.display="none";
	}
	
function jobApplying(){
	document.getElementById("page1").style.display="none";
	document.getElementById("page2").style.display="none";
	document.getElementById("page3").style.display="block";
	document.getElementById("part_time2").style.display="none";
	document.getElementById("full_time2").style.display="none";
	}
	
function jobApplying2(){
	document.getElementById("page1").style.display="none";
	document.getElementById("page2").style.display="none";
	document.getElementById("page3").style.display="block";
	document.getElementById("part_time2").style.display="none";
	document.getElementById("full_time2").style.display="none";
	
}
	
function personalInformation1(){
	document.getElementById("page1").style.display="block";
	document.getElementById("page2").style.display="none";
	}
	
function personalInformation2(){
	document.getElementById("page1").style.display="block";
	document.getElementById("page2").style.display="none";
	}

function webDesign(){
	document.getElementById("page1").style.display="none";
	document.getElementById("page2").style.display="none";
	document.getElementById("page3").style.display="block";
	document.getElementById("design_job").style.display="block";
	
	}

function availability1(){
	document.getElementById("page1").style.display="none";
	document.getElementById("page2").style.display="block";
	document.getElementById("page3").style.display="none";
	document.getElementById("design_job").style.display="none";
	}
	
function next_page4(){
	document.getElementById("page1").style.display="none";
	document.getElementById("page2").style.display="none";
	document.getElementById("page3").style.display="none";
	document.getElementById("design_job").style.display="none";
	document.getElementById("page4").style.display="block";
	}
	
function back_applying(){
	document.getElementById("page1").style.display="none";
	document.getElementById("page2").style.display="none";
	document.getElementById("page3").style.display="block";
	document.getElementById("design_job").style.display="none";
	document.getElementById("page4").style.display="none";
	}
	
function back_page4(){
	document.getElementById("page1").style.display="none";
	document.getElementById("page2").style.display="none";
	document.getElementById("page3").style.display="none";
	document.getElementById("design_job").style.display="none";
	document.getElementById("page4").style.display="block";
	document.getElementById("page5").style.display="none";
	}
	
function next_page5(){
	document.getElementById("page1").style.display="none";
	document.getElementById("page2").style.display="none";
	document.getElementById("page3").style.display="none";
	document.getElementById("design_job").style.display="none";
	document.getElementById("page4").style.display="none";
	document.getElementById("page5").style.display="block";
	}