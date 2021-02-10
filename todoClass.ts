import { todoInterface } from './todoInterface'; // import interface

class Todo implements todoInterface {

    constructor() { }
    tasks: Array<string> = [];

    addTask(task: string): number {
        let count: number = this.tasks.push(task); // add task to array
        console.log("Item " + task + " added to array Tasks");
        return count;
    }

    listAllItems(): void {
        this.tasks.forEach((task) => {  // => arrow function same as normal function
            console.log(task);
        })
    }

    deleteTask(task: string): number {
        let index: number = this.tasks.indexOf(task);
        if (index > -1) {
            this.tasks.splice(index, 1); // .splice removes element from array
            console.log("Item " + task + " removed from array Tasks");
        }
        return this.tasks.length;
    }
}

let myTodos = new Todo();

myTodos.addTask("Work");
myTodos.addTask("Sleep");

myTodos.listAllItems();

myTodos.deleteTask("Sleep");