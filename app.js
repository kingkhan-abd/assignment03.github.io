// Question no:1
var num1 = 3;
var num2 = 5;
var result = num1 + num2;
document.write("Sum of 3 and 5 is " + result, "<br />");

// Question no:2
var nm1 = 3;
var nm2 = 5;
var subTotal = nm1 - nm2;
document.write("Subtraction of 3 and 5 is " + subTotal, "<br />");

var n1 = 3;
var n2 = 5;
var finalResult = n1 * n2;
document.write("The final result of 3 and 5 is " + finalResult, "<br />");

var n = 3;
var n1 = 5;
var finalResult = n % n1;
document.write("The modulus  of 3 and 5 is  " + finalResult, "<br />");

// Question no:3
var number;
document.write("Value after variable declaration is ??", "<br />");
number = 5;
document.write("Initial value of variable is" + number, "<br />");

number++;
document.write("value after incremenet is :" + number, "<br />");
number = number + 7;
document.write("value after addition is :" + number, "<br />");
number--;
document.write("value after decremenet is :" + number, "<br />");
number = number / 3;
document.write(
  "The modulus value after variable value divided by 3 is :" + number,
  "<br />"
);

// Question no:4
var costOfOneTicket = "600";
var totalCost = costOfOneTicket * 5;
document.write("Total cost of buying 5 tickets is " + totalCost, "<br />");

var i = 0;
i = i + 1;
document.write("<h3>Multiplication table of 5</h3>", "<br />");
document.write(5 * i, " X 1=", 5 * i, "<br />");
i = i + 1;
document.write(5, " X 2= ", 5 * i, "<br />");
i = i + 1;
document.write(5, " X 3= ", 5 * i, "<br />");
i = i + 1;
document.write(5, " X 4= ", 5 * i, "<br />");
i = i + 1;
document.write(5, " X 5= ", 5 * i, "<br />");
i = i + 1;
document.write(5, " X 6=  ", 5 * i, "<br />");
i = i + 1;
document.write(5, " X 7= ", 5 * i, "<br />");
i = i + 1;
document.write(5, " X 8= ", 5 * i, "<br />");
i = i + 1;
document.write(5, " X 9= ", 5 * i, "<br />");
i = i + 1;
document.write(5, " X 10= ", 5 * i, "<br />");

document.write("<h3>celsius to fahrenheit and fahrenheit to celsius</h3>");

var celsius = 0;
var fahrenheit = 0;
fahrenheit = celsius * 1.8 + 32;
celsius = 0;

var celsius = +prompt("Enter celsius value");
document.write(
  "fahrenheit to  celsius ",
  celsius,
  " is= ",
  fahrenheit,
  "<br />"
);
var fahrenheit = +prompt("Enter your fahrenheit value");
celsius = (fahrenheit - 32) / 1.8;
document.write("celsius to fahrenheit ", fahrenheit, " is=", celsius, "<br />");

document.write("Shopping cart system !", " <br />");
var item1 = 650;
var item2 = 300;
var quantityOfItem1 = 1;
var quantityOfItem2 = 7;
var shoppingCharges = item1 + item2 + quantityOfItem1 + quantityOfItem2;

document.write("price of item1 is " + item1, "<br />");
document.write("price of item2 is " + item2, "<br />");
document.write("quantity of item1 is " + quantityOfItem1, "<br />");
document.write(" quantity of item2 is " + quantityOfItem2, "<br />");
document.write("price of item1 is " + shoppingCharges, "<br />");

document.write("<h1>Percentage problem!...</h1>");
var totalMarks = +prompt("Enter total marks!");
var subject1 = +prompt("Enter your subject1 marks!");
var subject2 = +prompt("Enter your subject2 marks!");
var obatainedMarks = subject1 + subject2;
var obatainedMarks = +prompt("your obtained marks!...", obatainedMarks);
var per = (obatainedMarks / totalMarks) * 100;
document.write("you got " + per + " percentage","<br />");

var oneDollarToPkr = 272;
var oneSaudiRiyalToPkr = 72;
var totalCurrencyToPkr = oneDollarToPkr*10 + oneSaudiRiyalToPkr*25;
document.write("Total currency to Pkr is !..." + totalCurrencyToPkr,"<br />");

document.write("<h1> Arithmetic expression!... </h1>");
var number = 12;
number = ((number + 5) * 10) /2;
document.write("number after arithmetic expression is " + number,"<br />");

document.write("<h1> Age Calculator!... </h1>");

var birthYear = +"1999";
var currentYear = +"2023";
var age = currentYear - birthYear;
document.write("Enter birth year "+birthYear);
document.write("Enter current year"+currentYear)
document.write("your age is " + age,"<br />");

document.write("<h1> The Geometrizer!... </h1>");
var radius;
radius = 2;
var pie = 3.14;
var circumference = 2 * pie * radius;
var area = ((pie * radius) * radius);
document.write("The circumference of circle is " + circumference,"<br />");
document.write("The Area of circle of circle is " + area,"<br />");




