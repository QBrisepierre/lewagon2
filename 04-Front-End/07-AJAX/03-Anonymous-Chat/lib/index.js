const batch = 401; // change to your own batch id
const baseUrl = "https://wagon-chat.herokuapp.com/";

// Your turn to code!
const url = `${baseUrl}${batch}/messages`;
const refresh = document.getElementById("refresh");
const form = document.getElementById("comment-form");
const lists = document.querySelector(".list-unstyled");
const comment = document.getElementById("your-message");
const name = document.getElementById("your-name");

const refreshMessages = () => {
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      lists.innerHTML = "";
      const messages = data.messages;
      console.log(messages);
      messages.forEach((message) => {
        const minutesAgo = Math.round((new Date() - new Date(message.created_at)) / 60000);
        lists.insertAdjacentHTML("afterbegin", `<li>${message.content} (posted <span class="date">${minutesAgo} minutes ago</span>) by ${message.author}</li>`);
      });
    });
};

const postNewMessage = (message, callback) => {
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(message)
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      callback();
    });
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = { "author": name.value, "content": comment.value };
  postNewMessage(data, refreshMessages);
});

refresh.addEventListener("click", refreshMessages);

document.addEventListener("DOMContentLoaded", refreshMessages);

setInterval(refreshMessages, 5000);
