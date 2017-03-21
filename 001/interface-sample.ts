/**
 *
 * User: luamas
 * DateTime: 2017/3/21 17:21
 */

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

var user = { firstName: "Jane", lastName: "User" };
document.body.innerHTML = greeter(user);