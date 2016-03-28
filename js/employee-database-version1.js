$(document).ready(function(){
    
    //jQuery functions come here.
    $("#addEmployeeDetails").click(function(){
        
        //This will empty the previous content present in form-section class
        $(".form-section").empty();
        //This will append desired data to the form-section class of div
        var addFormObject = $('#addFormTempalte').clone();
        $(addFormObject).removeClass('hidden');
        $(".form-section").append(addFormObject);
        
    });  
    
    $("#viewAllEmployeeDetails").click(function(){
        /*
        $(".form-section").empty();
        var viewAllEmployeeDetailsObject = $('#viewAllEmployees').clone();
        $(viewAllEmployeeDetailsObject).removeClass('hidden');
        $(".form-section").append(viewAllEmployeeDetailsObject);
        */
        
        $(".form-section").empty();
        
        
        
       // var viewAllEmployeeDetailsObject = $('#viewAllEmployees').clone();
       // $(viewAllEmployeeDetailsObject).removeClass('hidden');
        
        
        
        //$(".employee-details-table tbody").empty();
        
        /* This will remove the previous rows present in the table. B'coz below loop
         * picks all the data (ie table rows) from the local storage. 
         */
        
        $('.employee-details-table > tbody > tr:gt(0)').remove();
        
        
        for (var i = 1; i <= localStorage.length; i++){
            
            
            var employeeDetails  = JSON.parse(localStorage.getItem("employee"+i));
            
            //alert("come here  "+"employee"+i +"   "+employeeDetails.name+ employeeDetails);
            
           //adds data to the employee table
           var newRowInEmployeeDetailsTable = '<tr onclick="selectRow(event);"><td>'+employeeDetails.name+'</td><td>'+employeeDetails.dob+'</td><td>'+employeeDetails.contactNumber+'</td><td>'+employeeDetails.city+'</td></tr>';
           $(".employee-details-table tr").last().after(newRowInEmployeeDetailsTable); 
            
            
        }
        
        //alert("out");
        
        var viewAllEmployeeDetailsObject = $('#viewAllEmployees').clone();
        $(viewAllEmployeeDetailsObject).removeClass('hidden');
        $(".form-section").append(viewAllEmployeeDetailsObject);
        
        //localStorage.clear();
       
        
        /*for(var i = 1; i <= employeeCount; i++){
            var getEmployeeDetails = JSON.parse(localStorage.getItem("employee"+i));
            var newRowInEmployeeDetailsTable = '<tr onclick="selectRow(event);"><td>'+employeeName+'</td><td>'+employeeDOB+'</td><td>'+employeeContactNumber+'</td><td>'+employeeCity+'</td></tr>';
            
        }*/
        
    });
    
    $("#deleteEmployeeDetails").click(function(){
        $(".form-section").empty();
        var deleteEmployeeDetailsObject = $('#viewAllEmployees').clone();
        $(deleteEmployeeDetailsObject).removeClass('hidden');
        $(".form-section").append(deleteEmployeeDetailsObject);
        
    });
    
    $("#editEmployeeDetails").click(function(){
        $(".form-section").empty();
        var editEmployeeDetailsObject = $('#viewAllEmployees').clone();
        $(editEmployeeDetailsObject).removeClass('hidden');
        $(".form-section").append(editEmployeeDetailsObject);
        
    });
       
    
});  



function saveDetails() {
    
   if (($("#empName").val() !== "") && ($("#empDOB").val() !== "") && ($("#empContactNumber").val() !== "") && ($("#empCity").val() !== "")){   
       
       var employeeName = $("#empName").val();
       var employeeDOB = $("#empDOB").val();
       var employeeContactNumber = $("#empContactNumber").val();
       var employeeCity = $("#empCity").val();
       
       
       
       confirm("Employee " + employeeName + " is added to the Employee Database.");
       //clears the text boxes of the addition form
       $('#addFormTempalte').find('input:text').val('');
       
       //adds to the local storage
       var employeeCount = localStorage.length + 1;
       var employeeDetails = {name:employeeName, dob:employeeDOB, contactNumber: employeeContactNumber, city:employeeCity};
       localStorage.setItem("employee"+employeeCount, JSON.stringify(employeeDetails));
       
    }
    else{
        alert("Please fill all the employee entries");
    }
        
}

function resetValues(){
    $('#addFormTempalte').find('input:text').val('');
}

function selectRow(event){
    //alert("triggered");
   $(event.currentTarget).toggleClass('selected');
   // $(".employee-details-table tbody tr").css("background-color","red");
    //$(event.currentTarget).addClass('selected');
    //$(currenttarget).addClass('selected');
    //localStorage.removeItem("employee1");
}


