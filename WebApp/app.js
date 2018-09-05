
document.getElementById("change-fullname").onclick = function () {
        
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;

    var fullName = firstName + " " + lastName;

    document.getElementById("full-name").innerText = fullName;
}