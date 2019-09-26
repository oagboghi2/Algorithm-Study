function power(base,exp){
    console.log(exp)
    if(exp === 0 || base === 0) return 1;

    if(exp >= 0){
        exp--
        console.log("testcase 1:", exp)
    }
    return base * power(base, exp)
}

power(2,12)
