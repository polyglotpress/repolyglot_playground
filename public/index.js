console.log("this loads");

const startTaskButton = document.querySelector("#start-task")

startTaskButton.addEventListener("click", () => {
    console.log("start clicked");
    //user wants to start task
    
    //we want to help them
    document.querySelector("#current-task-card-container").style.display = "none";
    document.querySelector(".d-none").setAttribute("class", "d-block");
    
//user can add task notes
//user can note resources and websites used
})