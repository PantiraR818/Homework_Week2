// Q2การบ้าน implement 1 อาชีพ จาก Human 
//แสดงการ implement move(),eat()
//แสดงการสร้าง object
//Filename: Pantira_Q2.ts
const designer = {
    id: 633090010017,
    name: "Pantira R.",
    age: 19,
    occupation: "Designer",
    tel: "091-87519-87",
    move: function () {
        return "bus";
    },
    eat: function () {
        return "Spaghetti";
    }
};
console.log("ID : " + designer.id);
console.log("Name : " + designer.name);
console.log("age : " + designer.age);
console.log("occupation : " + designer.occupation);
console.log(designer.name + " moves by " + designer.move());
console.log(designer.name + " eat" + designer.eat());
