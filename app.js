// write code here
let key = prompt("กรอกชื่อผลไม้");
let obj = {};
while (true) {
    let value = prompt("จำนวนผลไม้");
    if (value > 1) {
            key = key + "s";
    }
    obj[key] = value;
    key = prompt("กรอกชื่อผลไม้");
    if (key == "stop") break;
}
console.log(obj);