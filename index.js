// Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescriptions = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title,
    description,
    complete: false,

    logState: function() {
      console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// function completeTask(taskIndex) {
//   taskComplete[taskIndex] = true;
// }

// // Print the state of a task to the console in a nice readable way
// function logTaskState() {
//   console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
// }

// function completeTask(task) {
//   task.complete = true;
// }

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", 'Take all the 💩  out of the litter box'); // task 0
const task2 = newTask("Clean Cat Litter", '😨'); // task 1
const tasks = [task1, task2];

task1.logState(task1); // Clean Cat Litter has not been completed
task1.markCompleted(task1);
task1.logState(task1); // Clean Cat Litter has been completed