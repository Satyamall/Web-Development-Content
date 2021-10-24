function foo(n,sum){
    var k=0,j=0;
    if(n===0){
        return;
    }
    k=n%10;
    j=Math.floor(n/10);
    sum=sum+k;
    foo(j,sum);
    console.log(k);
}

function main(){
    var a=2048, sum=0;
    foo(a,sum);
    console.log(sum);
}

main();