let students = [
    {id: 1, name : 'Paolo', surname: 'Rossi', age: 21},
    {id: 2, name : 'Luca', surname: 'Rossi', age: 30},
    {id: 3, name : 'Francesco', surname: 'Verdi', age: 18},
];

// console.log(students[0]); //stampo 1° studente - Paolo



// faccio una copia dell'array

// for

let copyStudents = [];

for (i = 0; i < students.length; i++) {
    copyStudents [i] = students[i];
}

console.log(copyStudents)


// spread

let copyStudents2 = [...students];

console.log(copyStudents2);