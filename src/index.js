document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  const form = document.getElementById('create-task-form');

  
  form.addEventListener('submit', (event) => {
    
    event.preventDefault();
  
    
    const taskDescription = document.getElementById('new-task-description').value;
  
    
    const newTaskItem = document.createElement('li');
  
    
    newTaskItem.textContent = taskDescription;
  
  
    const tasksList = document.getElementById('tasks');
  
    
    tasksList.appendChild(newTaskItem);
  
    
    document.getElementById('new-task-description').value = '';
  });

 
});
