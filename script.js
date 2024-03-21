//your JS code here. If required.
const circles=document.querySelectorAll(".circle");
let currentAct=[{circle:"circle-2",line:"line1"}]; 

let next=document.getElementById("next");
let prev=document.getElementById("prev"); 
let i=2; 
function handlePrev() {
	let {circle,line}=currentAct.pop();
	const c=document.getElementById(circle);
	const l=document.getElementById(line); 
c.classList.remove("active")
l.classList.remove("active1") 
	i--;
	if (i>1) {
		prev.disabled=false;
	}else{   
		prev.disabled=true;
	}
	console.log(currentAct)
}

function handleNext() {  
let act={circle:`circle-${i+1}`,line:`line${i}`};i++;    
	const c=document.getElementById(act.circle);
	const l=document.getElementById(act.line); 
	currentAct.push(act)
	c.classList.add("active");
	(l.classList.add("active1"));
	if (i==5) {
		next.disabled=true;
		
		return;
	}else{
		next.disabled=false;
	}
	if (i>1) {
		prev.disabled=false;
	}else{
		prev.disabled=true;
	}
	console.log(currentAct)
	
}