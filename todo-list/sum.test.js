
import { addTask, deleteTask, markAllAsDone} from './sum.js'
import { describe, it , expect } from "./node_modules/vitest";


// ------------- test addTask 

describe ('Add a new task', () =>{

  it('can not to add an empty task', () => {

    const tasks = [];

    const obj = {
      name: "call Anne",
      task: {
        label: " ",
        done: false
      }
  }

  
  expect(() => addTask(obj, tasks)).toThrowError()


  })

  it('have to add a new task in the array', () => {

    const tasks = [];

    const obj = {
        name: "call Anne",
        task: {
          label: "call Anne this friday",
          done: false
        }
    }

    addTask(obj, tasks);
    expect(tasks.length > 0).toBe(true)

    // console.log(tasks);

  })
})



// ------------- test deleteTask 

describe ('Delete the task', () =>{

  it('have to delete the task from array', () => {

    const tasks = [
    {
      name: "call Anne",
      task: {
        label: "call Anne this friday",
        done: false
      }
    },
    {
      name: "contact Jordan",
      task: {
        label: "send invatation to Jordan for lunch ",
        done: false
      }
    },
    ];


    const taskToDalete = {
      name: "call Anne",
      task: {
        label: "call Anne this friday",
        done: false
      }
    }

    deleteTask(tasks, taskToDalete)

    expect(tasks.includes(taskToDalete)).toBe(false)
    // expect(deleteTask(tasks, taskToDalete)).toEqual(tasks)


  })

})


// test markAllAsDone

describe ('Mark all the labels as done', () =>{

  it('have mark all labels as done', () => {

    const tasks = [
    {
      name: "call Anne",
      task: {
        label: "call Anne this friday",
        done: false
      }
    },
    {
      name: "contact Jordan",
      task: {
        label: "send invatation to Jordan for lunch ",
        done: false
      }
    },

    ];

    const arr = markAllAsDone(tasks)


    expect(arr.map(item => item.task.done)).toStrictEqual([true, true])

  })

})


// test markAsDone

describe ('Mark the label as done', () =>{

  it('have mark label as done', () => {

    const tasks = [
    {
      name: "call Anne",
      task: {
        label: "call Anne this friday",
        done: false
      }
    },
    {
      name: "contact Jordan",
      task: {
        label: "send invatation to Jordan for lunch ",
        done: false
      }
    },

    ];


    const taskAsDone = {
      name: "call Anne",
      task: {
        label: "call Anne this friday",
        done: false
      }
    }


    const arr = markAllAsDone(tasks, taskAsDone)

    
    expect(arr.map(item => item.task.done)).toStrictEqual([true, true])

  })

})









