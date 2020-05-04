document.getElementById("Avatar").src = "img/avatar.png";
document.getElementById("Name").value = "Xabier";
document.getElementById("LastName").value = "Mutiloa";
document.getElementById("UpdateButton").onclick = function(){
    console.log(document.getElementById('Name').value + ' ' + document.getElementById('LastName').value);
}