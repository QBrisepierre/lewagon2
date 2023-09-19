/* eslint-disable no-multiple-empty-lines */
/* eslint-disable prefer-const */
/* eslint-disable import/extensions */

import runChallenges from "../spec/inbox_examiner.js";

const hasNewMessage = () => {
  // TODO: return true with a probability of 20%.
  return Math.random() < 0.2;
};

console.log(hasNewMessage);
const newMessage = () => {
  // TODO: return a random message as an object with two keys, subject and sender
  return {
    sender: `Github ${Math.random()}`,
    subject: `Github ${Math.random()}`
  };
};

const appendMessageToDom = (message) => {
  // TODO: append the given message to the DOM (as a new row of `#inbox`)
  const myMessage = `<div class="row message unread">
    <div class="col-3">${message.sender}</div>
    <div class="col-9">${message.subject}</div>
    </div>`;
  const inbox = document.getElementById("inbox");
  inbox.insertAdjacentHTML('afterbegin', myMessage);
};

const refresh = () => {
  // TODO: Implement the global refresh logic. If there is a new message,
  //       append it to the DOM. Update the unread counter in title as well.
  if (hasNewMessage()) {
    appendMessageToDom(newMessage());
  }
};

// Do not remove these lines.
if (typeof window === "object") {
  document.addEventListener("DOMContentLoaded", () => {
    setInterval(refresh, 1000); // Every 1 second, the `refresh` function is called.
  });
}

// Checking exercise answers. DO NOT MODIFY THIS LINE.
runChallenges(hasNewMessage, newMessage);
export { hasNewMessage, newMessage };
