type Person =  {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

function createPerson(person: Person) {
    return `${person.firstName}\n${person.lastName}\n${person.email}`;
}

const sam: Person = {
    firstName: 'Samuel',
    lastName: 'Abdulai',
    email: 'sam@example.com',
    phoneNumber: '0123456789',
}

console.log(createPerson(sam))
