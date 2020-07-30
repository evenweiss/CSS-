// ======= Array 数组 =======
// 1.声明方式 elemType[] / Array<elemType>
const arr1: number[] = [1, 2, 3];
const arr2: Array<number> = [1, 2, 3];
console.log(arr1, arr2); // [1, 2, 3] [1, 2, 3]

//! 2.赋值: 声明时，数组元素的数据类型即被限制
let arr3: number[];
arr3 = [1, 2, 3];
// arr3 = ['a', 2, 3]; // Error

// ======= Turple 元组 =======
//* 1.概念：已知元素类型的数组(已知每个位置的元素的类型)
// 2.声明
let tur1: [string, number, boolean] = ['a', 1, true];
//! 3.赋值: 要求每个位置上的元素类型保持对应，元素数量也保持一致
let tur2: [string, number, boolean];
tur2 = ['b', 2, false];
// tur2 = [1, 2, 3]; // Error
