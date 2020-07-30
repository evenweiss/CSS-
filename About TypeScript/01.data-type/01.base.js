// 1. Boolean 布尔值
var bool_1 = true;
var bool_0 = false;
// 2. Number 数值
var num = 10;
// 3. String 字符串
var str = 'abc';
// 4. Array 数组
// const arr1: number[] = [1, 2, 3];
// const arr2: Array<number> = [1, 2, 3];
// 5. Turple 元组
// const tur:[number, string] = [1, 'abc'];
// 6. Enum 枚举
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["South"] = 1] = "South";
    Direction[Direction["West"] = 2] = "West";
    Direction[Direction["East"] = 3] = "East";
})(Direction || (Direction = {}));
var dir = Direction.North;
console.log(Direction, dir);
