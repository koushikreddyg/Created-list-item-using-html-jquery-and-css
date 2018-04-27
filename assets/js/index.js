var allTasks = [
	{"name": "Test Task #1", "date": "12/01/2012", "assigned": "John Doe" },
	{"name": "Test Task #2", "date": "12/02/2012", "assigned": "John Doe" },
	{"name": "Test Task #3", "date": "12/03/2012", "assigned": "John Doe" },
	{"name": "Test Task #4", "date": "12/04/2012", "assigned": "John Doe" },
	{"name": "Test Task #5", "date": "12/05/2012", "assigned": "John Doe" },
	{"name": "Test Task #6", "date": "12/06/2012", "assigned": "John Doe" },
	{"name": "Test Task #7", "date": "12/07/2012", "assigned": "John Doe" }
];

$("#btn_submit").on("click", function(){
    
    var taskName = $("#task_name").val();
    var taskDate = $("#task_date").val();
    var assignedTo = $("#assigned").val();

    if(taskName === undefined || taskName === ""){
        alert("Task name is required");
        return false;
    }else if(taskDate === undefined || taskDate === ""){
        alert("Task date is required");
        return false;
    }else if(assignedTo === undefined || assignedTo === ""){
        alert("Assigned to is required");
        return false;
    }else{
        var date = taskDate.split("-");
        taskDate = date[2]+"/"+date[1]+"/"+date[0];
        allTasks.unshift({"name":taskName, "date":taskDate, "assigned":assignedTo});
        loadAllTasks();
        reset();
        alert("Task was added successfully.");
    }
});

function reset(){
    $("#task_name").val("");
    $("#task_date").val("");
    $("#assigned").val("")
}

function loadAllTasks(){
    var tr = "";
    $.each(allTasks, function( index, task ) {
        tr += "<tr><td><strong>"+task.name +"</strong> "+task.date+"</td><td><strong>"+task.assigned+"</strong></td></tr>"
      });
    $("#tasks_list > tbody").html(tr);
}

$(function(){
    loadAllTasks();
});
