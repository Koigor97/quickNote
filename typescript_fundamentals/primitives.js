"use strict";
/**
 * @file *** PRIMITIVE TYPES ***
 * In JavaScript, a primitive is a data that is not an object and
 * has no methods or properties. A primitive value is represented
 * directly at the lowest level of the language implementation.
 *
 * JS has seven primitive types:
 * -- string,
 * -- number,
 * -- boolean,
 * -- null,
 * -- undefined,
 * -- BigInt,
 * -- Symbol
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPerson = createPerson;
/**
 * The createPerson function takes an object as an argument,
 * an object of type Person and returns a Hello World message
 * with the person's information
 *
 * @param {Person} person - an object of the person info
 * @returns {string}
 */
function createPerson(person) {
    console.log("\nHello World...from TypeScript\n");
    return `Name: ${person.firstName} ${person.lastName}\nEmail: ${person.email}\nPhone: ${person.phoneNumber}\nAge: ${person.age}\nGraduate: ${person.graduate}\nRegistration Number: ${person.registrationNumber}\n`;
}
// Primitives and their type declaration
let greetings = "Hello World";
let year = 2025;
let isWinterSemester = true;
let fetched = null;
let user;
let largeNumber = 900234405035678920875n;
let unique = Symbol("unique234");
