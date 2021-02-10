"use strict";
exports.__esModule = true;
var Todo = /** @class */ (function () {
    function Todo() {
        this.tasks = [];
    }
    Todo.prototype.addTask = function (task) {
        var count = this.tasks.push(task); // add task to array
        console.log("Item " + task + " added to array Tasks");
        return count;
    };
    Todo.prototype.listAllItems = function () {
        this.tasks.forEach(function (task) {
            console.log(task);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        var index = this.tasks.indexOf(task);
        if (index > -1) {
            this.tasks.splice(index, 1); // .splice removes element from array
            console.log("Item " + task + " removed from array Tasks");
        }
        return this.tasks.length;
    };
    return Todo;
}());
var myTodos = new Todo();
myTodos.addTask("Work");
myTodos.addTask("Sleep");
myTodos.listAllItems();
myTodos.deleteTask("Sleep");
