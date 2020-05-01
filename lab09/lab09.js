"use strict"

//1
console.log("Question 1:");
class Person {
    constructor(name, dateOfBirth) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }
    getName() {
        return this.name;
    }
    getDateOfBirth() {
        return this.dateOfBirth;
    }
    toString() {
        let y = new Intl.DateTimeFormat("en", { year: "numeric" }).format(this.dateOfBirth);
        let m = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(this.dateOfBirth);
        let d = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(this.dateOfBirth);

        return `The person’s name is : ${this.name} \nJohn was born on : ${y}-${m}-${d}`;
    }
}
const john = new Person("John", new Date("1998-12-11"));
console.log(john.toString());

//2
console.log("Question 2:");
class Employee extends Person {
    constructor(name, dateBirth, salary, hireDate ) {
        super(name, dateBirth);
        this.salary = salary;
        this.hireDate = hireDate;
    }
    doJob(jobTitle ) {
        let salary = formatMoney(this.salary);
        return `${this.name} is a ${jobTitle} who earns $${salary}`;
    }
}
const anna = new Employee("Anna", new Date("1998-12-11"), 249995.5,5, new Date("2020-02-11"));
console.log(anna.doJob("Programmer"));
// eslint-disable-next-line strict
function formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
    try {
        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

        const negativeSign = amount < 0 ? "-" : "";

        let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
        let j = (i.length > 3) ? i.length % 3 : 0;

        return negativeSign + (j ? i.substr(0, j) + thousands : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
        console.log(e)
    }
}

//3
console.log("Question 3:");
// eslint-disable-next-line strict
function Person2(name, dateOfBirth) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;

    this.toString = function () {
        let y = new Intl.DateTimeFormat("en", { year: "numeric" }).format(this.dateOfBirth);
        let m = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(this.dateOfBirth);
        let d = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(this.dateOfBirth);

        return `{Name: ${this.name}, DateOfBirth: ${y}-${m}-${d}}`;
    }
}
const peter = new Person2("Peter", new Date("1985-11-11"));
console.log(peter.toString());