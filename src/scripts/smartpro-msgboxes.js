// Лень комменты писать, но вроде все понятно, допишу потом как-то
const message = document.getElementById("message");

const messageDefault = `<div class='messagebox messagebox--message font-bold'>
        <div class='flex justify-between items-center'>
          <h1 class=''>Message</h1>
          <button><img src='svg/x-circle.svg' alt='x-circle' /></button>
        </div>
        <div class='font-thin mt-2'>
          <span
            >Пробное всплывающее окно о совершении какого-либо действия. Оно
            предназначено для замены ранее используемых Alert-ов в коде.
            Содержит вариации 'message' 'alert' и 'error'</span
          >
        </div>
      </div>`;

// create message
const createMessage = (type, text) => {
  const messageBox = document.createElement("div");
  messageBox.classList.add("messagebox");
  if (type !== "message" && type !== "alert" && type !== "error") {
    messageBox.classList.add(`messagebox--message`);
  } else {
    messageBox.classList.add(`messagebox--${type}`);
  }
  messageBox.innerHTML = `<div class='flex justify-between items-center'>
          <h1 class='font-bold text-xl'>${type}</h1>
          <button><img src='svg/x-circle.svg' alt='x-circle' /></button>
        </div>
        <div class='font-thin mt-2'>

          <span>${text}</span>
        </div>`;
  message.appendChild(messageBox);
  const button = messageBox.querySelector("button");
  button.addEventListener("click", () => {
    message.removeChild(messageBox); 
  });
};
