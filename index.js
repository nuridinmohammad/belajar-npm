import { sayGoodbye } from "npm/@/components/sayGoodbye";
import { sayHello } from "npm/@/say-hello";
import { writeToFile } from "npm/@/write";
import _ from "lodash";

console.log("Hello World!")
const hello = sayHello("Nuridin")
const goodbye = sayGoodbye("Nuridin")
const name  = "Mohammad Nuridin"

console.log(_.upperCase(name));
console.info(hello);
console.info(goodbye);


writeToFile("hello.log", "Hello Nuridin")
