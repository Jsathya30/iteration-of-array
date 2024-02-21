//Iteration of array-use loops
 
 //1. let a = [5,76,3,675,2,3,7] -Seperate even number in array.
 let a=[5,76,3,675,2,3,7];
 let evennum=[];
 for(let i=0;i<a.length;i++){
	
	 if(a[i]%2==0)
	 evennum.push(a[i]);
 }
 console.log(evennum);
 
 //using while loop
 
 let a1=[5,76,3,675,2,3,7];
 let even=[];
 let i=0;
 while(i<a1.length){
	 if(a1[i]%2==0)
	 even.push(a1[i]);
     i++;
 }
 console.log(even);
 
 
 //2. let b = [22,5,32,78,99,23,66]
//output : [22,99,66]

let b = [22,5,32,78,99,23,66];
let multiple=[];
for(i=0;i<b.length;i++){
	if(b[i]%11==0)
    multiple.push(b[i]);
}
console.log(multiple);


//3. let c = [1,2,3,4,5]
//output : 15

let c = [1,2,3,4,5];
var sum=0;
for(i=0;i<c.length;i++){
	sum+=c[i];
}
console.log(sum);


//4. let d = [1,2,3,4,5]
//output : 3

let d=[1,2,3,4,5];
var sum=0;
let count=0;
let j=0;

while(j<d.length){
	sum+=d[j];
	j++;
	count++;
}
console.log(sum/count);


//5. let g = [2,4,7,9,12,3]
//output : 18


let g = [2,4,7,9,12,3];
var evencount=0;
for(let m=0;m<g.length;m++){
	if(g[m]%2==0)
	evencount+=g[m];
    
}
console.log(evencount);

