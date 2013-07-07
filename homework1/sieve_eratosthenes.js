#!/usr/bin/env node
var fs = require('fs');
var output_file = "prime.txt";
n = 1000; 
var a = new Array()
for (i = 0 ; i <= n ; i++){
    a[i] = true;
}
n_sqrt = Math.sqrt(n);
for(idx=2; idx <= n_sqrt; idx++ ){
    if (a[idx]){
	j = idx*idx;
	cnt = 0; 
	while(j  <= n){
	    a[j] = false;
	    cnt = cnt + 1; 
	    j = idx * idx + cnt*idx;
	} 
    }
}
var len = a.length;
var cnt = 0; 
var output = new Array(); 
for( idx = 2 ; idx < len ; idx++){
    if(a[idx]){
	if(cnt == 100){
	    break; 
	}
	output[cnt] = idx;
	cnt = cnt + 1;
	
    }

}
var prime_numbers  = output.join(); 
fs.writeFileSync(output_file, prime_numbers);



