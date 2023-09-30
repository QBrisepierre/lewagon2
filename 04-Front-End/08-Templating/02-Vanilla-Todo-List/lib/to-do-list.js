const todos = [
  { title: "Code a to-do list", done: false },
  { title: "Eat breakfast", done: true },
  { title: "Do some exercise", done: false },
  { title: "Water the plants", done: true }
];

const template = document.getElementById("todoItemTemplate");

const container = document.getElementById("todosContainer");
// TODO: Use the template in the `index.html` to dynamically generate a list based on `todos` array
todos.forEach((todo) => {
  const clone = template.content.cloneNode(true);
  clone.querySelector("input").checked = todo.done;
  clone.querySelector(".title").textContent = todo.title;
  container.appendChild(clone);
});
