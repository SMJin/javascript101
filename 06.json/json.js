// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)

let json = JSON.stringify(true);
console.log(json);

console.log("-------------------------------------------------------");
json = JSON.stringify(["person-name", "person-age"]);
console.log(json);

console.log("-------------------------------------------------------");
const you = {
    name: 'right',
    age: 26,
    height: 174,
    birthDate: new Date(),
    talk: () => {
        console.log(`${this.name} : say something ...`);
    }
}
json = JSON.stringify(you);
console.log(json);

console.log("-------------------------------------------------------");
json = JSON.stringify(you, ['name', 'age']);
console.log(json);

console.log("-------------------------------------------------------");
json = JSON.stringify(you, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return value;
});
console.log(json);

console.log("-------------------------------------------------------");
json = JSON.stringify(you, (key, value) => {
    return key === 'name' ? 'victory' : value;
});
console.log(json);




// 1. JSON to Object
// parse(json)

console.clear();
json = JSON.stringify(you);
const obj = JSON.parse(json);
console.log(obj);

// 하지만 함수는 전달되지 않는다.
json.talk();
obj.talk();
