/* eslint-disable no-multiple-empty-lines */
/* eslint-disable prefer-const */
/* eslint-disable import/extensions */
import runChallenges from "../spec/examiner.js";

// INSTRUCTIONS - PLEASE READ!!
// Here are some challenges. Solve them from top to bottom

// **Each time** you complete a challenge, please commit and push!
// This is a good practice. Each time you make some progress in software
// development, you want to save a snapshot.


// Ex 1. Read what's written in the email input
//       Make the function getEmail() return it
const getEmail = () => {
  // TODO: return the email
  const email = document.getElementById('email').value;
  return email;
};

// /!\ DO NOT CHANGE THIS LINE - TEST PURPOSES
const borisesEmail = getEmail();

// Ex 2. Change the content of the email input by writing your own email address
// eslint-disable-next-line no-undef
email.value = "john@gmail.com";

// Ex 3. Replace the email hint (next to the input) with 'This is my email now'
//       The text should be emphasized using a <strong> tag
const emailText = document.getElementById('email-hint');
emailText.innerHTML = "<strong>This is my email now</strong>";

// Ex 4. Add the .blue CSS class to the th elements
const allTh = document.querySelectorAll('th');
allTh.forEach((th) => {
  th.classList.add('blue');
});


// Ex 5. Count the number of table body rows there are
//       Make the function teamCount() return it
const teamCount = () => {
  // TODO: return the number of teams
  const table = document.querySelector('tbody');
  return table.rows.length;
};

// /!\ DO NOT CHANGE THIS LINE - TEST PURPOSES
const teamCountBeforeAddition = teamCount();

// Ex 6. Say there is a 15th team added to the table.
//       Add a row at the bottom, this new team should have zero points.
const addRowInTable = document.querySelector('tbody');
addRowInTable.insertAdjacentHTML('beforeend', '<tr><td>15</td><td>Quentin Olympique </td><td>0</td></tr>');


// Ex 7. Write some code to sum all points given to all teams
//       Make the function summarizePoints() return it
const summarizePoints = () => {
  // TODO: return the sum
  let sum = 0;
  document.querySelectorAll('tbody tr td:last-child').forEach((element) => {
    sum += Number(element.innerHTML);
  });
  return sum;
};


// Ex 8. Change the background color of all `<th>` cells to #DDF4FF
allTh.forEach((th) => {
  th.style.backgroundColor = '#DDF4FF';
});


// Ex 9. Remove the "Email:" label from the DOM
document.querySelector('label').remove();



// Checking exercise answers. DO NOT MODIFY THIS LINE
runChallenges(borisesEmail, teamCountBeforeAddition, summarizePoints);
