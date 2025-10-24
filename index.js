// function main(): void {
//   const projectName = "support.ai";
//   const message = welcome(projectName);
//   console.log(welcome(message));
// }
// function welcome(name: string) {
//   return "Hello, " + name.toLowerCase();
// }
// main();
import { log, chats } from "./chats";
const button = document.getElementById("enable-button");
button.addEventListener("click", () => {
    // @ts-ignore
    window.supportAI.enableAutoReply();
});
log(chats);
