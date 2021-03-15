function clearForm(){
    document.getElementById("clientName").value = ""
    document.getElementById("projectName").value = ""
    document.getElementById("budgetAmnt").value = ""
}

var data_storage = []
var data_counter = 0

function storeData(){
    var clientName = document.getElementById("clientName").value
    var projectName = document.getElementById("projectName").value
    var budgetAmnt = document.getElementById("budgetAmnt").value
    data_counter++

    console.log(clientName)
    console.log(projectName)
    console.log(budgetAmnt)

    // Prep data 
    project_data = {}
    project_data.client_name = clientName
    project_data.project_name = projectName
    project_data.budget_amnt = budgetAmnt

    json_project_data = JSON.stringify(project_data)
    data_storage.push(json_project_data)

    console.log(data_storage)

    sessionStorage.setItem("num_data",data_counter)
    sessionStorage.setItem("Project"+data_counter.toString(),)

    console.log(sessionStorage)
    clearForm()
}

function displayFinancialData(){
    // navigate to financial page
    document.location='financial_team.html';
}