function sayHelloName (callback) {
    console.log('Hello ');
    callback();
}

function printName (){
    console.log('ngul a mammt');
}

sayHelloName(printName)