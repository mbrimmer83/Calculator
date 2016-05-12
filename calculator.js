/*
Logic:

* when a number is clicked, add a digit to the display.
* when an operator is clicked
  1. parse the displayed number (new number)
  2. if there is an existing operator and existing number, evaluate the operator upon the existing number and the new number
  3. store the result (but don't display it)
  4. clear the display for the user to input the next number
* when "=" is clicked
  1. parse the displayed number (new number)
  2. if there is an existing operator and existing number, evaluate the operator upon the existing number and the new number
  3. update the display to show the result
* when "C" is clicked
  1. unset the operator
  2. unset the current number
  3. clear the display

*/
var currentNumber;
var operator;
var display = '';
$(function (){
  $('.number').click(function () {
    var number = $(this).text();
    display += number;
    $('#display').val(display);
  });
  $('.operator').click(function () {
    var newNumber = Number(display);
    if (operator && currentNumber) {
      if (operator === '+') {
      currentNumber = currentNumber + newNumber;
      } if (operator === '-') {
      currentNumber = newNumber - currentNumber;
      } if (operator == 'x') {
      currentNumber = newNumber * currentNumber;
      } if (operator === '/') {
      currentNumber = currentNumber / newNumber;
      }
    } else {
      currentNumber = newNumber;
    }
    operator = $(this).text();
    display = " ";
    $('#display').val(display);
});
  $('.evaluate').click(function () {
    var newNumber = Number(display);
    if (operator && currentNumber) {
      if (operator === '+') {
      currentNumber = newNumber + currentNumber;
      } else if (operator === '-') {
      currentNumber = currentNumber - newNumber;
      } else if (operator == 'x') {
      currentNumber = newNumber * currentNumber;
      } else if (operator === '/') {
      currentNumber = currentNumber / newNumber;
      }
    } else {
      currentNumber = newNumber;
  }
      operator = null;
      display = currentNumber;
      $('#display').val(display);
  });
  $('.clear').click(function () {
    display = '';
    operator = null;
    currentNumber = null;
    $('#display').val(display);
  });
});
