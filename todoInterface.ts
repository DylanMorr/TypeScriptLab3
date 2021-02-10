export interface todoInterface{ // export lets us import it to class
    tasks: Array<string>;
    addTask(task:string):number;
    listAllItems():void;
    deleteTask(task:string):number;
}