//Q1 สร้าง 5 Tuple ของนศ [id,name,mid,final,project,grade]
//                      1,"pantira",20,30,35,""
//แสดง Output :<id>:<name>, Total: <mid+final+project>,Grade: <grade>
//Grad 4,3.5,3,2.5,2,1.5,1,0
//FileName : Pantira_Q1.ts
let stu;
stu = [
    ["63309010014", "Chatbunta", 35, 21, 20, 0],
    ["63309010015", "Patchareeporn", 40, 20, 20, 0],
    ["63309010016", "Pantira", 42, 20, 19, 0],
    ["63309010017", "Wanasiri", 30, 15, 22, 0],
    ["63309010018", "Nantawat", 25, 17, 1, 0]
];
stu.forEach(s => {
    s[5] += s[2] + s[3] + s[4];
    if (s[5] >= 80) {
        s[5] = 4;
    }
    else if (s[5] >= 75) {
        s[5] = 3.5;
    }
    else if (s[5] >= 70) {
        s[5] = 3;
    }
    else if (s[5] >= 65) {
        s[5] = 2.5;
    }
    else if (s[5] >= 60) {
        s[5] = 2;
    }
    else if (s[5] >= 55) {
        s[5] = 1.5;
    }
    else if (s[5] >= 50) {
        s[5] = 1;
    }
    else {
        s[5] = 0;
    }
    //แสดง Output :<id>:<name>, Total: <mid+final+project>,Grade: <grade>
    console.log(`: ${s[0]} : ${s[1]} ==> Total : ${s[2]} + ${s[3]} + ${s[4]} Grade : ${s[5]}`);
});
