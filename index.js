import { sayHello } from "./say-hello.js"
import { writeToFile } from "./write.js";

console.log("Hello World!")
const hello = sayHello("Nuridin")
console.info(hello);

writeToFile("hello.log", "Hello Nuridin")
