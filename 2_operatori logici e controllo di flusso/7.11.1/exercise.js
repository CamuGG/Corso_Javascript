let primitive = 15;

/*
if (typeof(primive) === 'string') {
    console.log('is a string');
} else if (typeof(primitive) === 'number'){
    console-log('is a number');
} else if (typeof(primitive) === 'boolean'){
    console.log('is a boolean');
} else {
    console.log('non riconosco la variabile')
}
*/


switch (typeof(primitive)){
    case 'string':
        console.log('is a string');
        break;
    case 'number':
        console.log('is a number');
        break;
    case 'boolean':
        console.log('is a boolean');
        break;
    default:
        console.log('non riconosco la variabile');
}