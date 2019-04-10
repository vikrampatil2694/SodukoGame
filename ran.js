//Node.js 6.5
//Plain Javascript and Node.js is supported
// html/css is not supported here
 let count=17;
 let flag=0;

 let ah2=new Array(1,2,7);
 let ah3=new Array(4,6,7);
 let ah4=new Array(3,4,6,7);
 let ah5=new Array(2,1,4,5,7);
 let ah6=new Array(4,1,6,7);
 let c1=new Array(2,7);
 let c2=new Array(4,1,2,3,6,7);
 let c3=new Array(1,4,5,7);
 let c4=new Array(1,4,6,7);
 let c5=new Array(1,4,7);
 let c6=new Array(2,3,6,7);
 let r1=new Array(1,2,7);
 let r2=new Array(1,2,3,7);
 let r3=new Array(3,4,6,7);
 let r4=new Array(6,4,7);
 let r5=new Array(1,4,7);
 let r6=new Array(1,2,4,5,6,7);
 let ah1=new Array(1,2,3,7);
function rest(p){
	
	p.innerHTML=Math.floor(Math.random()*6+1);

	}

function paste(vicky){
	let z=document.getElementById("d1");
    var a=z.innerHTML
	if(a!='h'){
	vicky.innerHTML=z.innerHTML;
	let r=document.getElementById("res");
	r.innerHTML="Result";
	result(vicky);	
     }
	}
	    
 
    function result(vicky){
		if(vicky.id=="1"){
			 flag=0;
			for(let x=0;x<7;x++){
				if(ah1[x]==vicky.innerHTML ||c1[x]==vicky.innerHTML||r1[x]==vicky.innerHTML ){
			 flag=1;
			}
			}
			makered(vicky);
			if(flag==0){	
			ah1.push(vicky.innerHTML);
			c1.push(vicky.innerHTML);
			r1.push(vicky.innerHTML);
			count++;
			checkwin();
			countinc(vicky);
			}
		}
		if(vicky.id=="4"){
	flag=0;
	for(let x=0;x<7;x++){
		if(ah1[x]==vicky.innerHTML ||c1[x]==vicky.innerHTML||r2[x]==vicky.innerHTML ){
	flag=1;
   }
   }
   makered(vicky);
   if(flag==0){	
   ah1.push(vicky.innerHTML);
   c1.push(vicky.innerHTML);
   r2.push(vicky.innerHTML);
   count++;
			checkwin();
   countinc(vicky);
   }
}if(vicky.id=="6"){
	flag=0;
	for(let x=0;x<7;x++){
		if(ah1[x]==vicky.innerHTML ||c3[x]==vicky.innerHTML||r2[x]==vicky.innerHTML ){
	flag=1;
   }
   }
   makered(vicky);
   if(flag==0){	
   ah1.push(vicky.innerHTML);
   c3.push(vicky.innerHTML);
   r2.push(vicky.innerHTML);
   count++;
			checkwin();
   countinc(vicky);
   }
}if(vicky.id=="7"){
	flag=0;
	for(let x=0;x<7;x++){
		if(ah2[x]==vicky.innerHTML ||c4[x]==vicky.innerHTML||r1[x]==vicky.innerHTML ){
	flag=1;
   }
   }
   makered(vicky);
   if(flag==0){	
   ah2.push(vicky.innerHTML);
   c4.push(vicky.innerHTML);
   r1.push(vicky.innerHTML);
   count++;
			checkwin();
   countinc(vicky);
   }
}if(vicky.id=="8"){
	flag=0;
	for(let x=0;x<7;x++){
		if(ah2[x]==vicky.innerHTML ||c5[x]==vicky.innerHTML||r1[x]==vicky.innerHTML ){
	flag=1;
   }
   }
   makered(vicky);
   if(flag==0){	
   ah2.push(vicky.innerHTML);
   c5.push(vicky.innerHTML);
   r1.push(vicky.innerHTML);
   count++;
			checkwin();
   countinc(vicky);
   }
}if(vicky.id=="9"){
	flag=0;
	for(let x=0;x<7;x++){
		if(ah2[x]==vicky.innerHTML ||c6[x]==vicky.innerHTML||r1[x]==vicky.innerHTML ){
	flag=1;
   }
   }
   makered(vicky);
   if(flag==0){	
   ah2.push(vicky.innerHTML);
   c6.push(vicky.innerHTML);
   r1.push(vicky.innerHTML);
   count++;
			checkwin();
   countinc(vicky);
   }
}if(vicky.id=="10"){
	flag=0;
	for(let x=0;x<7;x++){
		if(ah2[x]==vicky.innerHTML ||c4[x]==vicky.innerHTML||r2[x]==vicky.innerHTML ){
	flag=1;
   }
   }
   makered(vicky);
   if(flag==0){	
   ah2.push(vicky.innerHTML);
   c4.push(vicky.innerHTML);
   r2.push(vicky.innerHTML);
   count++;
			checkwin();
   countinc(vicky);
   }
}if(vicky.id=="13"){
	flag=0;
	for(let x=0;x<7;x++){
		if(ah3[x]==vicky.innerHTML ||c1[x]==vicky.innerHTML||r3[x]==vicky.innerHTML ){
	flag=1;
   }
   }
   makered(vicky);
   if(flag==0){	
   ah3.push(vicky.innerHTML);
   c1.push(vicky.innerHTML);
   r3.push(vicky.innerHTML);
   count++;
			checkwin();
   countinc(vicky);
   }
}if(vicky.id=="14"){
	flag=0;
	for(let x=0;x<7;x++){
		if(ah3[x]==vicky.innerHTML ||c2[x]==vicky.innerHTML||r3[x]==vicky.innerHTML ){
	flag=1;
   }
   }
   makered(vicky);
   if(flag==0){	
   ah3.push(vicky.innerHTML);
   c2.push(vicky.innerHTML);
   r3.push(vicky.innerHTML);
   count++;
			checkwin();
   countinc(vicky);
   }
}if(vicky.id=="15"){
	flag=0;
	for(let x=0;x<7;x++){
		if(ah3[x]==vicky.innerHTML ||c3[x]==vicky.innerHTML||r3[x]==vicky.innerHTML ){
	flag=1;
   }
   }
   makered(vicky);
   if(flag==0){	
   ah3.push(vicky.innerHTML);
   c3.push(vicky.innerHTML);
   r3.push(vicky.innerHTML);
   count++;
			checkwin();
   countinc(vicky);
   }
}if(vicky.id=="16"){
	flag=0;
	for(let x=0;x<7;x++){
		if(ah3[x]==vicky.innerHTML ||c1[x]==vicky.innerHTML||r4[x]==vicky.innerHTML ){
	flag=1;
   }
   }
   makered(vicky);
   if(flag==0){	
   ah3.push(vicky.innerHTML);
   c1.push(vicky.innerHTML);
   r4.push(vicky.innerHTML);
   count++;
			checkwin();
   countinc(vicky);
   }
}if(vicky.id=="22"){
	flag=0;
	for(let x=0;x<7;x++){

	   if(ah4[x]==vicky.innerHTML ||c4[x]==vicky.innerHTML||r4[x]==vicky.innerHTML ){
	flag=1;
   }
   }
   makered(vicky);
   if(flag==0){	
   ah4.push(vicky.innerHTML);
   c4.push(vicky.innerHTML);
   r4.push(vicky.innerHTML);
   count++;
			checkwin();
   countinc(vicky);
   }
}if(vicky.id=="23"){
	flag=0;
	for(let x=0;x<7;x++){

	   if(ah4[x]==vicky.innerHTML ||c5[x]==vicky.innerHTML||r4[x]==vicky.innerHTML ){
	flag=1;
   }
   }
   makered(vicky);
   if(flag==0){	
   ah4.push(vicky.innerHTML);
   c5.push(vicky.innerHTML);
   r4.push(vicky.innerHTML);
   count++;
			checkwin();
   countinc(vicky);
   }
}if(vicky.id=="24"){
	flag=0;
	for(let x=0;x<7;x++){
		if(ah4[x]==vicky.innerHTML ||c6[x]==vicky.innerHTML||r4[x]==vicky.innerHTML ){
	flag=1;
   }
   }
   makered(vicky);
   if(flag==0){	
   ah4.push(vicky.innerHTML);
   c6.push(vicky.innerHTML);
   r4.push(vicky.innerHTML);
   count++;
			checkwin();
   countinc(vicky);
   }
}if(vicky.id=="25"){
	flag=0;
	for(let x=0;x<7;x++){
		if(ah5[x]==vicky.innerHTML ||c1[x]==vicky.innerHTML||r5[x]==vicky.innerHTML ){
	flag=1;
   }
   }
   makered(vicky);
   if(flag==0){	
   ah5.push(vicky.innerHTML);
   c1.push(vicky.innerHTML);
   r5.push(vicky.innerHTML);
   count++;
			checkwin();
   countinc(vicky);
   }
}if(vicky.id=="27"){
	flag=0;
	for(let x=0;x<7;x++){
		if(ah5[x]==vicky.innerHTML ||c3[x]==vicky.innerHTML||r5[x]==vicky.innerHTML ){
	flag=1;
   }
   }
   makered(vicky);
   if(flag==0){	
   ah5.push(vicky.innerHTML);
   c3.push(vicky.innerHTML);
   r5.push(vicky.innerHTML);
   count++;
			checkwin();
   countinc(vicky);
   }
}if(vicky.id=="32"){
	flag=0;
	for(let x=0;x<7;x++){
		if(ah6[x]==vicky.innerHTML ||c5[x]==vicky.innerHTML||r5[x]==vicky.innerHTML ){
	flag=1;
   }
   }
   makered(vicky);
   if(flag==0){	
   ah6.push(vicky.innerHTML);
   c5.push(vicky.innerHTML);
   r5.push(vicky.innerHTML);
   count++;
			checkwin();
   countinc(vicky);
   }
}if(vicky.id=="33"){
	flag=0;
	for(let x=0;x<7;x++){
		if(ah6[x]==vicky.innerHTML ||c6[x]==vicky.innerHTML||r5[x]==vicky.innerHTML ){
	flag=1;
   }
   }
   makered(vicky);
   if(flag==0){	
   ah6.push(vicky.innerHTML);
   c6.push(vicky.innerHTML);
   r5.push(vicky.innerHTML);
   count++;
			checkwin();
   countinc(vicky);
   }
}if(vicky.id=="35"){
	flag=0;
	for(let x=0;x<7;x++){
		if(ah6[x]==vicky.innerHTML ||c5[x]==vicky.innerHTML||r6[x]==vicky.innerHTML ){
	flag=1;
   }
   }
   makered(vicky);
   if(flag==0){	
   ah6.push(vicky.innerHTML);
   c5.push(vicky.innerHTML);
   r6.push(vicky.innerHTML);
   count++;
			checkwin();
   countinc(vicky);
   
}
}
}

	function makered(vicky){
	if(flag==1){
		vicky.style.backgroundColor ="red";
		}
	}
	
	function countinc(vicky){
	if(	vicky.style.backgroundColor =="red"){
		vicky.style.backgroundColor = "white";}
		let z=document.getElementById("d1");
		z.innerHTML='h';
	
		
	}
	function checkwin(){
		if(count==36){
			let t=document.getElementById("res");
			let t1=document.getElementById("res1");
			let t2=document.getElementById("next")
			t2.style.display="flex";
			t.style.backgroundColor="pink"
			t.backgroundImage="win.jpg"
			t.innerHTML="winner winner chicken dinner";
         t1.style.display="flex";
		}
		
	}
