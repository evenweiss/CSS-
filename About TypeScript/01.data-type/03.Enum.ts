// 1. 声明
enum Color {
  Red,
  Yellow,
  Blue
}
let co: Color = Color.Red; // 0

// 异构枚举
enum Num {
  One,
  Two,
  Three = 30,
  Four = "D",
  Five = '3',
  Six = 'D'
}
console.log(Color, Num);

// 
enum Str {
  Name = 'jane',
  Name2 = 'jane'
}
console.log(Str);
