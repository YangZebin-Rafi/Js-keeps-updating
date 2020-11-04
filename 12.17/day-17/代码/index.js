   /* 解构：把对象|数组中的数据提取出来。 */
   let o = { name: "zs", age: 18, score: 99 };

   /* 需求：提取对象中的score和age，保存到变量中。 */
   //  let score = o.score;
   //  let age = o.age;
   //  let name = o.name;

   //  let { score: score, age: age, name: name } = o;
   let { score, age, name } = o; //对象的解构语法(根据名字来取值)
   console.log(score, age, name);

   /* 数组的解构 */
   let arr = ["小奶狗", "绿色", 13];

   //  let dogName = arr[0];
   //  let dogColor = arr[1];
   //  let dogAgr = arr[2];

   /* 解构表示的是从对象或者是数组中把数据取出来保存在变量的身上。 */
   let [dogName, dogColor, dogAge] = arr; //数组的解构语法(按照顺序赋值)
   console.log(dogName, dogColor, dogAge); //小奶狗 绿色 13


   /* 用法： */
   /* 交换两个变量的值 */
   let a = 100;
   let b = 200;

   /* 方案A  借助中间变量*/
   //  let c = a;
   //  a = b;
   //  b = c;

   /* 方案B  不允许借助中间变量来交互 */
   [a, b] = [b, a];
   console.log(a, b);