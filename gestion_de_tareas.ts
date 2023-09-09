class Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
  
    constructor(id: number, title: string, description: string) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.completed = false;
    }
  
    markAsCompleted(): void {
      this.completed = true;
    }
  }
  
  class TaskManager {
    tasks: Task[];
  
    constructor() {
      this.tasks = [];
    }
  
    createTask(title: string, description: string): Task {
      const newTaskId = this.tasks.length + 1;
      const newTask = new Task(newTaskId, title, description);
      this.tasks.push(newTask);
      return newTask;
    }
  
    getAllTasks(): Task[] {
      return this.tasks;
    }
  }
  
  const taskManager = new TaskManager();
  const task1 = taskManager.createTask("Task 1", "Description 1");
  const task2 = taskManager.createTask("Task 2", "Description 2");
  
  task1.markAsCompleted();
  
  console.log(taskManager.getAllTasks());