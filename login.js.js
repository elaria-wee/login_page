let namee = document.getElementById("namie");
let g_mail = document.getElementById("mail");
function show() {
  if (namee.value.trim() == "") {
    alert("empty name");
    return;
  }
  if (g_mail.value.trim() == "") {
    alert("empty mail");
    return;
  }

alert("Thank you " + namee.value + ", your email " + g_mail.value + " has been saved!");
window.open("https://www.google.com","_self")
}

