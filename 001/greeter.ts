/**
 * User: luamas
 * DateTime: 2017/3/21 17:02
 */


/**
 * @param person
 * @returns {string}
 */
function greeter(person: string) {
    return "Hello, " + person;
}

var user = "Jane User";
document.body.innerHTML = greeter(user);

// var user = [0, 1, 2];
// document.body.innerHTML = greeter(user);
