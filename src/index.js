import {newNode} from "./newNode.js";
import { LinkedList } from "./LinkedList.js";



const myList = LinkedList();

for(let i = 0; i<10; i++){
  let node = newNode(i,null);
  console.log(node);
  myList.append(node);
}

console.log('Size :' + myList.size());
console.log('ToString :' + myList.toString());
console.log(myList.pop());
console.log(myList.pop());
console.log('ToString :' + myList.toString());
console.log('inserting 9 at index 7');
console.log(myList.insertAt(9,12));
console.log('ToString :' + myList.toString());
console.log('at :');
console.log(myList.at(0));
console.log('contains :');
console.log(myList.contains(0));
console.log('find :');
console.log(myList.find(0));
console.log('removing at index 9');
console.log(myList.removeAt(9));
console.log('ToString :' + myList.toString());
