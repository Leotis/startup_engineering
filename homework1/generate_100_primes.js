#!/usr/bin/env node
var fs = require('fs');
var output_file = "output.txt";
var z = "A startup is a business built to grow rapidly.\n"
n = 100; 
var a = new Array()
for (i = 0 ; i <= 100 ; i++){

    a[i] = true;
    //console.log(a);
}
n_sqrt = Math.sqrt(n);

for(idx=2; idx <= n_sqrt; idx++ ){
    //console.log("<****** i == "+ idx)
    if (a[idx]){
	j = idx*idx;
	cnt = 0; 
	while(j  <= n){
	    //reset cnt 
	    //console.log(j)
	    a[j] = false;
	    cnt = cnt + 1; 
	    j = idx * idx + cnt*idx;
	    
	} 

    }

}



//console.log("Primes"); 
for(i = 2 ; i <= n ; i++){
    if(a[i]){
	console.log(i); 
    }
}



