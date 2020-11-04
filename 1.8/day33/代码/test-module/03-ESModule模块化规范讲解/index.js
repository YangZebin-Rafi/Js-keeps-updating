console.log("index");
export let index = 100;

/* 导入：A */
import { showA, a } from "./A.js";
showA();
console.log(a);


/* 导入：B */
import { b, showB, Person } from "./B.js";
console.log(b);
showB();
console.log(new Person("zs"));