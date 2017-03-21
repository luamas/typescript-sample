/**
 *
 * User: luamas
 * DateTime: 2017/3/21 17:58
 */
// 布尔数据类型
var isDone = false;
// 数字类型
// 这些浮点数的类型是 number。 除了支持十进制和十六进制字面量，Typescript还支持ECMAScript 2015中引入的二进制和八进制字面量
// 十进制
var decLiteral = 6;
// 十六进制
var hexLiteral = 0xf00d;
// 二进制
var binaryLiteral = 10;
// 八进制
var octalLiteral = 484;
// 字符串
// JavaScript程序的另一项基本操作是处理网页或服务器端的文本数据。
// 像其它语言里一样，我们使用 string表示文本数据类型。 和JavaScript一样，可以使用双引号（ "）或单引号（'）表示字符串。
var nameStr = "bob";
nameStr = "smith";
// 你还可以使用模版字符串，它可以定义多行文本和内嵌表达式。 这种字符串是被反引号包围（ `），并且以${ expr }这种形式嵌入表达式
var age = 37;
// 基本方式定义 sentence
var sentence1 = "Hello, my name is " + name + ".\n\n" + "I'll be " + (age + 1) + " years old next month.";
// 模板方式定义 sentence
var sentence2 = "Hello, my name is " + name + ".\n\nI'll be " + (age + 1) + " years old next month.";
// 数组
// TypeScript像JavaScript一样可以操作数组元素。 有两种方式可以定义数组。 第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组：
var list1 = [1, 2, 3];
// 第二种方式是使用数组泛型，Array<元素类型>：
var list2 = [1, 2, 3];
// 元组 Tuple
// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 string和number类型的元组。
// 声明元组类型
var x;
// 正确初始化
x = ['hello', 10];
// 错误初始化
// x = [10, 'hello'];
// 当访问一个已知索引的元素，会得到正确的类型：
console.log(x[0].substr(1));
// 错误的语句,类型不正确
// console.log(x[1].substr(1));
// 当访问一个越界的元素，会使用联合类型替代：
x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型
console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString
// x[6] = true; // Error, 布尔不是(string | number)类型
// 枚举
// enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 0] = "Red";
    Color1[Color1["Green"] = 1] = "Green";
    Color1[Color1["Blue"] = 2] = "Blue";
})(Color1 || (Color1 = {}));
;
var c1 = Color1.Green;
// 默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值。 例如，我们将上面的例子改成从 1开始编号
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
;
var c2 = Color2.Green;
// 全部都采用手动赋值：
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 1] = "Red";
    Color3[Color3["Green"] = 2] = "Green";
    Color3[Color3["Blue"] = 4] = "Blue";
})(Color3 || (Color3 = {}));
;
var c = Color3.Green;
// 获取枚举值的名字。
// 例如，我们知道数值为2，但是不确定它映射到Color里的哪个名字，我们可以查找相应的名字
var Color4;
(function (Color4) {
    Color4[Color4["Red"] = 1] = "Red";
    Color4[Color4["Green"] = 2] = "Green";
    Color4[Color4["Blue"] = 3] = "Blue";
})(Color4 || (Color4 = {}));
;
var colorName4 = Color4[2];
alert(colorName4);
// 任意值
// 有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。
// 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。
// 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用 any类型来标记这些变量
var notSure1 = 4;
notSure1 = "maybe a string instead";
notSure1 = false; // okay, definitely a boolean
// 在对现有代码进行改写的时候，any类型是十分有用的，它允许你在编译时可选择地包含或移除类型检查。
// 你可能认为 Object有相似的作用，就像它在其它语言中那样。
// 但是 Object类型的变量只是允许你给它赋任意值 - 但是却不能够在它上面调用任意的方法，即便它真的有这些方法
var notSure2 = 4;
notSure2.ifItExists(); // okay, ifItExists might exist at runtime
notSure2.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
var prettySure2 = 4;
// 错误,Object类型不存在toFixed方法
// prettySure2.toFixed();
// 当你只知道一部分数据的类型时，any类型也是有用的。 比如，你有一个数组，它包含了不同的类型的数据
var list3 = [1, true, "free"];
list3[1] = 100;
// 空值
// 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void
function warnUser() {
    alert("This is my warning message");
}
// 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
var unusable = undefined;
// Null 和 Undefined
// TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。 和 void相似，它们的本身的类型用处不是很大：
var u = undefined;
var n = null;
// 默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。
// 然而，当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。这能避免 很多常见的问题。
// 也许在某处你想传入一个 string或null或undefined，你可以使用联合类型string | null | undefined。
// Never
// never类型表示的是那些永不存在的值的类型。
// 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型；
// 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
// never类型是任何类型的子类型，也可以赋值给任何类型；
// 然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop() {
    while (true) {
    }
}
// 类型断言
// 有时候你会遇到这样的情况，你会比TypeScript更了解某个值的详细信息。 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。
// 通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。
// 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。
// 它没有运行时的影响，只是在编译阶段起作用。 TypeScript会假设你，程序员，已经进行了必须的检查。
// 类型断言两种形式
var someValue1 = "this is a string";
var strLength1 = someValue1.length;
// 另一个为as语法
var someValue2 = "this is a string";
var strLength2 = someValue2.length;
// 两种形式是等价的。 至于使用哪个大多数情况下是凭个人喜好；然而，当你在TypeScript里使用JSX时，只有 as语法断言是被允许的。 
