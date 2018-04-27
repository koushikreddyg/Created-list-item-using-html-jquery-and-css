var array=
[
	
{"name": "Test Task #1", "date": "12/01/2012", "assigned": "John Doe" },
	
{"name": "Test Task #2", "date": "12/02/2012", "assigned": "John Doe" },
	
{"name": "Test Task #3", "date": "12/03/2012", "assigned": "John Doe" },
	
{"name": "Test Task #4", "date": "12/04/2012", "assigned": "John Doe" },
	
{"name": "Test Task #5", "date": "12/05/2012", "assigned": "John Doe" },
	
{"name": "Test Task #6", "date": "12/06/2012", "assigned": "John Doe" },
	
{"name": "Test Task #7", "date": "12/07/2012", "assigned": "John Doe" }

]
console.log(array);
var html=``;
$(document).ready(function(){
    $("button").click(function(){
         var taskName=$("#task-name").val();
        var addDate=$("#add-date").val();
        var assignedTo=$("#assigned-to").val();
        var html=``;
        var nameError=taskName;
        var dateError=addDate;
        var assignedError=assignedTo;
        
        if(nameError.length===0 || assignedError.length===0 || dateError.length===0){
           $( "#Error" ).html(`<p> *please enter all the values</p>`)
           
           }else{
               var arrayItem={"name":taskName,"date": addDate.toString(), "assigned":assignedTo};
               array=array.concat(arrayItem);
               $( "#Error" ).html("");
               jQuery.each( array, function( i, val ) {
            
        if(i%2===1){
            html=html+ `<div class="taskStyle" style="background-color: #f2f2f2">
                <span class="indivisualTaskStyle">${val.name}</span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                <span class="dateStyle">${val.date}</span>
                <span class="right">${val.assigned}</span>
                </div>`;
         $( "#display" ).html(html)
            
        }else{
            html=html+ `<div class="taskStyle" style="background-color: white">
                <span class="indivisualTaskStyle">${val.name}</span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                <span class="dateStyle">${val.date}</span>
                <span class="right">${val.assigned}</span>
                </div>`;
         $( "#display" ).html(html)
        }
        $("#task-name").val('');
        $("#add-date").val(``);
        $("#assigned-to").val(``);
        
        
});
           
           }
        
       
    });
});


jQuery.each( array, function( i, val ) {
        if(i%2===1){
            html=html+ `<div class="taskStyle" style="background-color: #f2f2f2">
                <span class="indivisualTaskStyle">${val.name}</span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                <span class="dateStyle">${val.date}</span>
                <span class="right">${val.assigned}</span>
                </div>`;
         $( "#display" ).html(html)
            
        }else{
            html=html+ `<div class="taskStyle" style="background-color: white">
                <span class="indivisualTaskStyle">${val.name}</span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                <span class="dateStyle">${val.date}</span>
                <span class="right">${val.assigned}</span>
                </div>`;
         $( "#display" ).html(html)
        }
        
        
});
