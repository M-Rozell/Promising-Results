slowMath.add(6,2)
.then((answer) => {
    console.log(answer);
    return slowMath.multiply(answer,2)
}).then((answer) => {
    console.log(answer);
    return slowMath.divide(answer, 4);
}).then((answer) => {
    console.log(answer);
    return slowMath.subtract(answer, 3);
}).then((answer) => {
    console.log(answer);
    return slowMath.add(answer, 98);
}).then((answer )=> {
    console.log(answer);
    return slowMath.remainder(answer, 2);
}).then((answer) => {
    console.log(answer);
    return slowMath.multiply(answer, 50);
}).then((answer) => {
    console.log(answer);
    return slowMath.remainder(answer, 40);
}).then((answer) => {
    console.log(answer);
    return slowMath.add(answer, 32);
}).then((answer) => {
    console.log('The Final Result is', answer);
}).catch((err) => {
    console.log(err)
})


doMath()
async function doMath() {
    try {
        answer = await slowMath.add(6,2);
        console.log(answer)
        answer = await slowMath.multiply(answer, 2);
        console.log(answer)
        answer = await slowMath.divide(answer, 4);
        console.log(answer);
        answer = await slowMath.subtract(answer, 3);
        console.log(answer);
        answer = await slowMath.add(answer, 98);
        console.log(answer);
        answer = await slowMath.remainder(answer, 2);
        console.log(answer);
        answer = await slowMath.multiply(answer, 50);
        console.log(answer);
        answer = await slowMath.remainder(answer, 40);
        console.log(answer);
        answer = await slowMath.add(answer,32);
        console.log('The Final Result is ', answer);
        
    } catch (err) {
        console.log(err);
    }
}





   
        


