
// let name = "Imran";
// let age = 21;
// let course = "B.Tech AI";
// let city = "Jammu";
// let skills = ["HTML", "CSS", "JavaScript", "Python"];

// let student = {
//     name: name,
//     age: age,
//     course: course,
//     city: city,
//     skills: skills
// };
// console.log(student);
// console.log(student.name);
// console.log(student.age);
// console.log(student.course);
// console.log(student.city);
// console.log(student.skills);

// const user = {
//     name: "Imran",
//     age: 21,
//     isAdmin: true,
//     greet:function() {
//         console.log("Hello My Name Is, " + this.name);
//     }
// };
// console.log(user);

// const jsonData = '{"name":"Rahul","age":20,"course":"Java"}';

// const student = JSON.parse(jsonData);

// console.log(student);
// console.log(student.name);
// console.log(student.age);
// console.log(student.course);


const student = {
    name: "priya",
    age: 21,
    course: "python"
};

const jsonString = JSON.stringify(student);

console.log(jsonString);
console.log(typeof student);
console.log(typeof jsonString);