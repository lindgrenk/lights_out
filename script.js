var arr =  ["00","01","02","03","04",
			"05","06","07","08","09",
			"10","11","12","13","14",
			"15","16","17","18","19",
			"20","21","22","23","24"];	

function lightSwitch(){
	for(var i = 0; i < arr.length; i++){
		var tableData = document.getElementById(arr[i]);
		tableData.style.backgroundColor = "white";
		tableData.addEventListener("click", whatIsThis);
	}
}
lightSwitch();

function whatIsThis(){

	var id = this.id;
	var idIndex = arr.indexOf(id);
	
	var center = arr[idIndex];
	var down = arr[idIndex + 5];
	var up = arr[idIndex - 5];
	var left = arr[idIndex - 1];
	var right = arr[idIndex + 1];
	
	var centerElement = document.getElementById(center);
	var downElement = document.getElementById(down);
	var upElement = document.getElementById(up);
	var leftElement = document.getElementById(left);
	var rightElement = document.getElementById(right);

	var nextTo = [centerElement,downElement,upElement,leftElement,rightElement];

	if(idIndex === 00){
		nextTo = [centerElement,downElement,rightElement];
	}
	if(idIndex === 04){
		nextTo = [centerElement,downElement,leftElement];
	}
	if(idIndex === 01 || idIndex === 02 || idIndex === 03){
		nextTo = [centerElement,downElement,leftElement,rightElement];
	}
	if(idIndex === 20){
		nextTo = [centerElement,upElement,rightElement];
	}
	if(idIndex === 24){
		nextTo = [centerElement,upElement,leftElement];
	}
	if(idIndex === 21 || idIndex === 22 || idIndex === 23){
		nextTo = [centerElement,upElement,leftElement,rightElement];
	}
	if(idIndex === 05 || idIndex === 10 || idIndex === 15){
		nextTo = [centerElement,downElement,upElement,rightElement];
	}
	if(idIndex === 09 || idIndex === 14 || idIndex === 19){
		nextTo = [centerElement,downElement,upElement,leftElement];	
	}
	if(idIndex === 06 || idIndex === 07 || idIndex === 08 ||
	idIndex === 11 || idIndex === 12 || idIndex === 13 ||
	idIndex === 16 || idIndex === 17 || idIndex === 18){
		nextTo = [centerElement,downElement,upElement,leftElement,rightElement];
	}

	for(var i = 0; i < nextTo.length; i++){
		if(nextTo[i].style.backgroundColor == "white"){
			nextTo[i].style.backgroundColor = "black";
		}
		else if(nextTo[i].style.backgroundColor == "black"){
			nextTo[i].style.backgroundColor = "white";
		}
	}
}