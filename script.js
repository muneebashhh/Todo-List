/*TODO list with edit Delete checkbox as well as new task*/

//varaiables
var taskInput = document.getElementById("new-task");
var addButton = document.getElementsByTagName('button')[0];
var incompleteTasksHolder = document.getElementById('incomplete-tasks');
var completedTasksHolder = document.getElementById('completed-tasks');
 
//New Task List Item
          var createNewTaskElement = function(taskString){
                //create list item
                var listItem = document.createElement('li');
                //input(checkBox)
                var checkBox = document.createElement('Input');
                //label
                var label = document.createElement('label');
                //input(text)
                var editInput = document.createElement('Input');
                //button.edit
                var editButton = document.createElement('button');
                //button.delete
                var deleteButton = document.createElement('button');
                
                //each element needs modifying
            
                
                editInput.type = 'text';
                
                editButton.innerHTML = 'Edit';
                editButton.className = 'edit';
                deleteButton.innerHTML = 'Delete';
                deleteButton.className = 'delete';
            
                label.innerHTML = taskString;
            
                //each element needs appending
                
                
                listItem.appendChild(label);
                listItem.appendChild(editInput);
                listItem.appendChild(editButton);
                listItem.appendChild(deleteButton);
            
                return listItem;
                
              }

//Add a new task
         var addTask = function(){
               console.log('add task....');
               var listItem = createNewTaskElement(taskInput.value);
           
                //to preventan empty string being binded 
                if(taskInput.value === ""){
                  
                      alert('Please enter a Task');
                  
                }else{
                  
                 //append items to incompleteTasksHolder
                 incompleteTasksHolder.appendChild(listItem);
                 bindTaskEvents(listItem, taskComplete); 
                 
                 taskInput.value = ('');
                }
           }


//Edit an existing task
          var editTask = function(){
          console.log('Edit Task...');
              
          //local variables
          var listItem = this.parentNode;          
          var editInput = listItem.querySelector('input[type=text]');
          var label = listItem.querySelector('label');
          var containsClass = listItem.classList.contains('editMode');
          var button = document.getElementsByClassName('edit'); 
          
            
         //if the class of the parent is editMode
         if(containsClass) {
            
                label.innerText = editInput.value;
                this.innerHTML = 'Edit'; //when pressed changes button text
          }else {
            
            
                editInput.value = label.innerText;
                this.innerHTML = 'SAVE';//when pressed changes button text
          }
          
                //toggle editMode on list item
                listItem.classList.toggle('editMode');
                
              
              }

//Delete existing task
          var deleteTask = function(){
            
                  console.log('Delete Task ....');
                  var listItem = this.parentNode;
                  var ul = listItem.parentNode;
                  
                  //Remove li item from parent ul #incomplete-tasks
                  ul.removeChild(listItem);
              }
          
          
//Mark as complete
          var taskComplete = function(){
              console.log('Task Complete ...');    
              //append task item to #completed-tasks
              var listItem = this.parentNode;
              completedTasksHolder.appendChild(listItem);
              bindTaskEvents(listItem, taskIncomplete);
            }


//Mark a task as incomplete

          var taskIncomplete = function(){
              console.log('Task Incomplete....');
             //append to #incompleted-task
              var listItem = this.parentNode;
              incompleteTasksHolder.appendChild(listItem);
              bindTaskEvents(listItem, taskComplete);
          }


         
     

//bindTaskEvents function
var bindTaskEvents = function(taskListItem){
          console.log('Bind ListItem events...');
  
          //Select ListItems Children
          var checkBox = taskListItem.querySelector('input[type=checkbox]');
          var editButton = taskListItem.querySelector('button.edit');
          var deleteButton = taskListItem.querySelector('button.delete'); 
          
          //bind editTask to edit button
          editButton.onclick = editTask;
          
          //bind deleteTask to delete button
          deleteButton.onclick = deleteTask;
          
          //bind checkBoxEventHandler to checkBox
          
}
var ajaxRequest = function(){
    console.log('Ajax Request Made ');
};


//click event using addEventListener allows multiple listenets to an event.
addButton.addEventListener('click', addTask);
addButton.addEventListener('click', ajaxRequest);


          
//cycle over the incompleteTasksHolder ul li items
//for each list item

          for(var i = 0; i < incompleteTasksHolder.children.length; i++){
            
          //bind events to list items children (taskCompleted)
            bindTaskEvents(incompleteTasksHolder.children[i], taskComplete);
          }

 

//cycle over the completedTasksHolder ul li items
  //for each list item

          for(var i = 0; i < completedTasksHolder.children.length; i++ ){
            
          //bind events to list items children (taskInComplete)
            bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
          }















