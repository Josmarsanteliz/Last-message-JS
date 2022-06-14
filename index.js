const sendBtnEl = document.getElementById("sendBtn");
const messageIn = document.getElementById("messageIn");
const messageOut = document.getElementById("messageOut");

sendBtnEl.addEventListener("click", sendMsg);

function sendMsg() {
  //save the value
  let content = messageIn.value;

  //blank
  if (content === "") {
    alert("Please Enter Valid Value");
  } else {
    messageOut.innerHTML = content;
    messageIn.value = "";
  }
}
