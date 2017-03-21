/**
 *
 * User: luamas
 * DateTime: 2017/3/21 17:21
 */
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Jane", lastName: "User" };
document.body.innerHTML = greeter(user);
