/* eslint-disable no-multiple-empty-lines */
/* eslint-disable prefer-const */
/* eslint-disable import/extensions */

import runChallenges from "../spec/list_generator_examiner.js";

const listItem = (content) => {
  // TODO: return the proper <li> HTML tag with its content (as a string)
  return `<li class="list-group-item">${content}</li>`;
};

const unorderedList = (items) => {
  // TODO: return the proper <ul> markup (as a string)
  let message = `<ul class="list-group">`;
  items.forEach((element) => {
    message += listItem(element);
  });
  message += `</ul>`;
  console.log(message);
  return message;
};

const groceries = ['milk', 'butter', 'bread'];
// Do not remove these lines:
if (typeof window === "object") {
  document.addEventListener("DOMContentLoaded", () => {
    // TODO: call unorderedList() passing the right element
    const content = unorderedList(groceries);
    // TODO: display the list in the browser
    const list = document.getElementById("list");
    list.insertAdjacentHTML('beforeend', content);
  });
}

runChallenges(listItem, unorderedList); // Do not remove.
export { listItem, unorderedList };
