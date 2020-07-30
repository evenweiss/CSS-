// 1. 声明
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Yellow"] = 1] = "Yellow";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var co = Color.Red; // 0
// 异构枚举
var Num;
(function (Num) {
    Num[Num["One"] = 0] = "One";
    Num[Num["Two"] = 1] = "Two";
    Num[Num["Three"] = 30] = "Three";
    Num["Four"] = "D";
    Num["Five"] = "3";
    Num["Six"] = "D";
})(Num || (Num = {}));
console.log(Color, Num);
// 
var Str;
(function (Str) {
    Str["Name"] = "jane";
    Str["Name2"] = "jane";
})(Str || (Str = {}));
console.log(Str);
