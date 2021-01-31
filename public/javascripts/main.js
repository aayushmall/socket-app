console.log("abc");

const socket = io();
console.log(socket);

socket.on("messages", (messages) => {
  console.log(messages);

  const listMsgs = messages.map((message) => {
    return `<li><b>${message.name}</b> <p>${message.message}</p></li>`;
  });

  console.log(listMsgs);

  document.getElementById("messageList").innerHTML = listMsgs.join("");
});
