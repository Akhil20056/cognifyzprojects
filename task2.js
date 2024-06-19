const colorButton = document.getElementById('colorButton');
colorButton.addEventListener('click', function() {
  this.classList.toggle('clicked');
});



const now = new Date();
const currentHour = now.getHours();
let greetingMessage;

if (currentHour < 12) {
  greetingMessage = 'Good morning!';
} else if (currentHour < 18) {
  greetingMessage = 'Good afternoon!';
} else {
  greetingMessage = 'Good evening!';
}
alert(greetingMessage);



function calculate() {
  let num1 = parseFloat(document.getElementById('number 1').value);
  let num2 = parseFloat(document.getElementById('number 2').value);
  
  if (isNaN(num1) || isNaN(num2)) {
      alert('Please enter valid numbers');
      return;
    }
  
  let sum = num1 + num2;
  document.getElementById('result').textContent = `Result: ${sum}`;
  }
  