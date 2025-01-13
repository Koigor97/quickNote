"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const primitives_1 = require("./primitives");
const typescript_type_system_1 = require("./typescript_type_system");
// ************************** PRIMITIVE SECTION ************************** //
// the object sam is of the type Person
const sam = {
    firstName: 'Samuel',
    lastName: 'Abdulai',
    email: 'sam@example.com',
    age: 18,
    graduate: false,
    registrationNumber: 3738246589060793n,
    phoneNumber: '0123456789',
};
console.log((0, primitives_1.createPerson)(sam));
// ************************* TYPE SYSTEM SECTION *********************** //
const book = {
    title: "Who let the Dog's out",
    author: "Koigor Fogbawa",
    releaseDate: new Date(),
    chapters: {
        chapterName: ["The Leash", "Doggy Bone", "Fetch"],
        chapterNumber: 10
    }
};
console.log((0, typescript_type_system_1.bookDetail)(book));
console.log((0, typescript_type_system_1.bookDetail)("The Dummy Preface"));
