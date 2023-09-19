// TODO: Write your gambling application here.
const balance = document.getElementById("balance");
let count = Number(document.getElementById("balance").innerHTML);

function updateBalance(ticket) {
  count -= 10;
  count += Number(ticket.dataset.amount);
  balance.innerHTML = count;
}

function updateTicket(ticket) {
  ticket.dataset.scratched = true;
  ticket.innerHTML = ticket.dataset.amount;
}

document.querySelectorAll('li').forEach((ticket) => {
  ticket.addEventListener("click", (event) => {
    if (balance.innerHTML > 0) {
      console.log(ticket.dataset.scratched);
      if (ticket.dataset.scratched === "false") {
        updateBalance(ticket);
        updateTicket(ticket);
      }
    } else {
      alert("Game Over");
    }
  });
});
