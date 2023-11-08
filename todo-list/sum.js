

// addTask

function addTask (object, tasks){
  const isEmpty = object.task.label;
  if(!isEmpty.trim()){
    throw new Error('Input not valid')
  }
  tasks.push(object);
}


// deleteTask

function deleteTask (tasks, taskToDalete) {

  for (const task of tasks) {

    if (task.name === taskToDalete.name){

      const index = tasks.indexOf(task);
      tasks.splice(index,1)
      return  tasks;
    }
  }
  console.log("this task don't existe in array");

}

// markAllAsDone

function markAllAsDone (arr) {
 
  return arr.map((item)=> {
    item.task.done = true
    return item;
  })
}


// markAsDone

function markAsDone (arr, taskAsDone) {

   arr.find((item)=> {
    const isFound = item.name === taskAsDone.name;
    if(isFound){
     item.task.done = true;
    }
  
  })
}


export {addTask, deleteTask, markAllAsDone, markAsDone}
