function clearForm(){
    document.getElementById("clientName").value = ""
    document.getElementById("projectName").value = ""
    document.getElementById("budgetAmnt").value = ""
}

var data_storage = []

function checkDataExists(){
    console.log("in check fn")
    console.log(sessionStorage)
    if(sessionStorage.getItem("Project") === null){
        return true;
    }
    else{
        return false;
    }
}

function storeData(){
    var clientName = document.getElementById("clientName").value
    var projectName = document.getElementById("projectName").value
    var budgetAmnt = document.getElementById("budgetAmnt").value

    console.log(clientName)
    console.log(projectName)
    console.log(budgetAmnt)

    // Prep data 
    project_data = {}
    project_data.client_name = clientName
    project_data.project_name = projectName
    project_data.budget_amnt = budgetAmnt

    // check if previous data exists
    var NOTexists = checkDataExists();
    if(NOTexists){
        console.log("no data")
    }
    else{
        console.log("data exists")
        // get the pre-existing array
        var json_project_data = sessionStorage.getItem("Project")
        data_storage = JSON.parse(json_project_data)
    }
    
    // Add to Projects Array
    data_storage.push(project_data)
    console.log(data_storage)

    json_project_data = JSON.stringify(data_storage)

    sessionStorage.setItem("Project",json_project_data)

    console.log(sessionStorage)
    clearForm()
}

function displayFinancialData(){
    // navigate to financial page
    document.location='financial_team.html';
}