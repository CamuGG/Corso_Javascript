// VALORE - REFERENZA

let user = {
  name: "Cosimo",
  age: 30,
};

let newUser = {};

for(const value in user) {
  newUser[value] = user[value]
}

newUser['name'] = "Paolo";

console.log(newUser);  //name:'paolo', age: 30
console.log(user);     //name:'cosimo', age: 30
