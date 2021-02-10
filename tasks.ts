let tasks: Array<string> = [];
//let test: string[] = []; same thing as above

function addTask(task:string):number{
    let count:number = tasks.push(task); // add task to array
    console.log("Item "+task+" added to array Tasks");
    return count;
}

function listAllTasks():void{
    for(let i = 0; i < tasks.length; i++){
        console.log("Item "+tasks[i]+" is in array Tasks");
    }

    tasks.forEach(function(task){
        console.log(task);
    })
    
}

function deleteTask(task:string):number{
    let index:number = tasks.indexOf(task);
    if(index > -1){
        tasks.splice(index, 1); // .splice removes element from array
        console.log("Item "+task+" removed from array Tasks");
    }
    return tasks.length;
}

console.log(addTask("Homework"));
console.log(addTask("Sleep"));

listAllTasks();

console.log(deleteTask("Sleep"));