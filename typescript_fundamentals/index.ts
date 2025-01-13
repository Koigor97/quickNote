import {Person, createPerson} from "./primitives";
import {BookType, bookDetail} from "./typescript_type_system";

// ************************** PRIMITIVE SECTION ************************** //

// the object sam is of the type Person
const sam: Person = {
    firstName: 'Samuel',
    lastName: 'Abdulai',
    email: 'sam@example.com',
    age: 18,
    graduate: false,
    registrationNumber: 3738246589060793n,
    phoneNumber: '0123456789',
}

console.log(createPerson(sam))

// ************************* TYPE SYSTEM SECTION *********************** //

const book : BookType = {
    title: "Who let the Dog's out",
    author: "Koigor Fogbawa",
    releaseDate: new Date(),
    chapters: {
        chapterName: ["The Leash", "Doggy Bone", "Fetch"],
        chapterNumber: 10
    }
}

console.log(bookDetail(book));
console.log(bookDetail("The Dummy Preface"))
