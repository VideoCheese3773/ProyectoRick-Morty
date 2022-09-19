console.log("poggers")

function calculator(num1, num2, action){
    let result = "syntax error"
    if(action == 1) {
        result = num1 + num2
        console.log(num1,"+",num2,"=",result)
    }
    if(action == 2) {
        result = num1 - num2
        console.log(num1,"-",num2,"=",result)
    }
    if(action == 3) {
        result = num1 * num2
        console.log(num1,"*",num2,"=",result)
    }
    if(action == 4) {
        result = num1 / num2
        console.log(num1,"/",num2,"=",result)
    }
}

let a = 15;
let b = 3;
let c = 4;
calculator(a, b ,c);

