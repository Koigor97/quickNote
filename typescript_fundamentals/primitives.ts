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

// defining the structure of the Person type
// using a Type Alias
export type Person =  {
    firstName: string; // primitive string value
    lastName: string;
    age: number;
    graduate: boolean;
    email: string;
    registrationNumber: bigint;
    phoneNumber: string;
}

/**
 * The createPerson function takes an object as an argument,
 * an object of type Person and returns a Hello World message
 * with the person's information
 *
 * @param {Person} person - an object of the person info
 * @returns {string}
 */
export function createPerson(person: Person) : string {
    console.log("\nHello World...from TypeScript\n")
    return `Name: ${person.firstName} ${person.lastName}\nEmail: ${person.email}\nPhone: ${person.phoneNumber}\nAge: ${person.age}\nGraduate: ${person.graduate}\nRegistration Number: ${person.registrationNumber}\n`;
}

// Primitives and their type declaration

let greetings : string = "Hello World";
let year : number = 2025;
let isWinterSemester : boolean = true;
let fetched : null = null;
let user : undefined;
let largeNumber : bigint = 900234405035678920875n;
let unique : symbol = Symbol("unique234");
