"use strict"

//6
const count = (function(){
    let counter = 0;
    const add = function(){
        this.counter += 1;
    };
    const reset = function(){
        this.counter = 0;
    };
    return {
        add: add,
        reset: reset,
        counter: counter
    }
})();

//test
console.log("Question 6:")
console.log(count.counter);
count.add();
console.log(count.counter);
count.add();
console.log(count.counter);
count.reset();
console.log(count.counter);

//8
const count2 = (function(){
    let counter = 0;
    const add = function(){
        this.counter += 1;
    };
    const make_adder = function(inc){
        return function(){
            count2.counter += inc;
        }
    };
    const reset = function(){
        this.counter = 0;
    };
    return {
        add: add,
        make_adder: make_adder,
        reset: reset,
        counter: counter
    }
})();

//test
console.log("Question 8:")
const add5 = count2.make_adder(5);
add5();
add5();
add5();
console.log(count2.counter);

count2.reset();
console.log(count2.counter);

const add7 = count2.make_adder(7);
add7();
add7();
add7();
console.log(count2.counter);

//9
(function(){
    //current functions

    //current variable declarations
})();

//10
const employee = (function(){
    let name;
    let age;
    let salary;
    const setAge = function(newAge){
        this.age = newAge;
    }
    const setSalary = function(newSalary){
        this.salary = newSalary;
    }
    const setName = function(newName){
        this.name = newName
    }
    const getAge = function(){
        return this.age;
    }
    const getSalary = function(){
        return this.salary;
    }
    const getName = function(){
        return this.name;
    }
    const increaseSalary = function(percentage){
        this.salary += employee.salary*percentage;
    }
    const incrementAge = function(){
        this.age += 1;
    }
    return {
        setAge: setAge,
        setSalary: setSalary,
        setName: setName,
        increaseSalary: increaseSalary,
        incrementAge: incrementAge
    }
})();

//test
console.log("Question 10:")
employee.setSalary(100000);
employee.increaseSalary(0.3);

//11
employee.address;
employee.setAddress = function(newAddress){
    this.address = newAddress;
};
employee.getAddress = function(){
    return this.address;
}

//test
console.log("Question 11:")
employee.setAddress("1000 4TH ST");
console.log(employee.getAddress());