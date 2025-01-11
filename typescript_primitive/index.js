"use strict";
function createPerson(person) {
    return `${person.firstName}\n${person.lastName}\n${person.email}`;
}
const sam = {
    firstName: 'Samuel',
    lastName: 'Abdulai',
    email: 'sam@example.com',
    phoneNumber: '0123456789',
};
console.log(createPerson(sam));
