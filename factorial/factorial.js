function factorial(num){
    if(num < 0) return 0
    if(num <= 1) return 1
    console.log("num", num)
    return num * factorial(num - 1)

}

factorial(4)
