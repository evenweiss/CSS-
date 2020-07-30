// 1. Boolean 布尔值
const bool_1: boolean = true;
const bool_0: boolean = false;

// 2. Number 数值
const num: number = 10;

// 3. String 字符串
const str: string = 'abc';

// 4. Array 数组
// const arr1: number[] = [1, 2, 3];
// const arr2: Array<number> = [1, 2, 3];

// 5. Turple 元组
// const tur:[number, string] = [1, 'abc'];

// 6. Enum 枚举
enum Direction {
  North,
  South,
  West,
  East
}
let dir: Direction = Direction.North;
console.log(Direction, dir);
