function addTask() {
    var taskName = document.getElementById("taskName").value;
    var duration = document.getElementById("duration").value;

    if (taskName.trim() === "" || duration.trim() === "") {
        alert("Please enter both task name and duration.");
        return;
    }

    var taskList = document.getElementById("taskList");
    var listItem = document.createElement("li");
    listItem.className = "task-item";
    listItem.innerHTML = "<span>" + taskName + "</span> - " + duration + " minutes <button onclick='removeTask(this)'>Remove</button>";
    taskList.appendChild(listItem);

    // Clear input fields after adding task
    document.getElementById("taskName").value = "";
    document.getElementById("duration").value = "";
}

function removeTask(button) {
    var listItem = button.parentNode;
    var taskList = listItem.parentNode;
    taskList.removeChild(listItem);
}

function lockApp() {
    var selectedApp = document.getElementById("appToLock").value;
    var durationInput = document.getElementById("duration").value.trim(); // Trim whitespace
    var duration = parseInt(durationInput); // Parse string to integer

    // Check if duration is a valid number
    if (isNaN(duration) || duration <= 0) {
        var correctedInput = prompt("Please enter a valid duration in minutes."); // Prompt for correct input
        if (correctedInput !== null && correctedInput.trim() !== "") {
            duration = parseInt(correctedInput.trim()); // Parse corrected input
        } else {
            return; // Exit function if input is empty or user cancels
        }
    }

    // Your code to lock the selected app goes here
    alert("App '" + selectedApp + "' locked for "+ duration + " minutes");

    var listStatus = document.createElement("li");
    listStatus.className = "Status-item";
    listStatus.innerHTML = "<span>" + selectedApp + "</span> - " + duration + " minutes <button onclick='unlockApp(this)'>Unlock</button>";
    document.getElementById("applock").appendChild(listStatus); // Append to applock directly

}



/*function unlockApp(button) {
    var listStatus = button.parentNode;
    listStatus.parentNode.removeChild(listStatus); // Remove the status directly
}
*/