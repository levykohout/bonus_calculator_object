
function Person(name, id, salary, rating) {
	this.name = name;
	this.employeeId = id;
	this.salary = salary;
	this.rating = rating;
}

var atticus = new Person('Atticus','2405','47000', 3);
var jem = new Person('Jem','62347', '63500', 4);
var boo = new Person('Boo', '11435', '54000', 3);
var scout = new Person('Scout', '6243', '74750', 5);

var employees = [atticus,jem,boo,scout];

for (var i = 0; i < employees.length; i++) {
  var report = employeeReport(employees[i]);
  console.log(report);
}

function employeeReport(employee) {
  var employeeName = employee.name;
  var employeeId = employee.employeeId;
  var salary = parseInt(employee.salary);
  var rating = employee.rating;
  var bonus = 0;

  var output = {};

  output.name = employeeName;

  bonus = calcBonus(rating, employeeId, salary);
  output.rate = bonus;
  output.compensation = Math.round(salary + (bonus * salary));
  output.bonus = Math.round(bonus * salary);
  return output;
}

function calcBonus(rating, id, salary) {
  var bonus = 0;

  switch (rating) {
    case 5:
      bonus = 0.1;
      break;
    case 4:
      bonus = 0.06;
      break;
    case 3:
      bonus = 0.04;
      break;
    default:
      bonus = 0;
  }

  if (id.length == 4) {
    bonus += 0.05;
  }

  if (salary > 65000) {
    bonus -= 0.01;
  }

  if (bonus > 0.13) {
    bonus = 0.13;
  }

  return bonus;
}
