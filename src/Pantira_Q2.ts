// Q2การบ้าน implement 1 อาชีพ จาก Human 
//แสดงการ implement move(),eat()
//แสดงการสร้าง object
//Filename: Pantira_Q2.ts

interface Human{
    id: number,
    name: string,
    age: number,
    occupation: string,
    tel?: string,
    move():string,
    eat(): string
}

const designer : Human = {
    id: 633090010017,
    name: "Pantira R.",
    age: 19,
    occupation: "Designer",
    tel: "091-87519-87",
    
    move: function() : string{
        return "bus";
    },
    eat: function() : string{
        return "Spaghetti";
    }
}

console.log("ID : "+designer.id);
console.log("Name : "+designer.name);
console.log("age : "+designer.age);
console.log("occupation : "+designer.occupation);

console.log(designer.name+" moves by "+designer.move());
console.log(designer.name+" eat"+designer.eat());