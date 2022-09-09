# test_niuke

```js
'2'+3+4 == '234'

<https://www.nowcoder.com/test/question/ae1ce1fdd4a74ad5bba637c0f0c49b00?pid=34743151&tid=50373577>

用户更改表单元素Select中的值时,触发的事件有  onChange onMouseOver onFocus onClick
javascript内置对象不包含windowd
isNaN(1/0) == false
1/0 == Infinity
isNaN(isNaN) ==true
(1&&2>1)== true

130503 670401 001的含义; 13为河北，05为邢台，03为桥西区，出生日期为1967年4月1日，顺序号为001

Angular 的知识，没有$send.
$emit只能向parent controller传递event与data
$broadcast只能向child controller传递event与data
$on用于接收event与data

15位身份证正则
isIDCard=/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;

正则表达式里：
？出现0次或1次.  [0,1]
* 出现0次或多次.  [0,+∞]
+ 出现1次或多次  [1,+∞]

+表示出现至少一次b
*表示可以不出现b，也可以出现一次或多次
{n,m}表示最少出现n次b,最多出现m次b

\w匹配字母数字或下划线；
?匹配0个或1个；
\1表示对第一个捕获组的引用；


正则表达式中的小括号"()"。是代表分组的意思。 如果再其后面出现\1则是代表与第一个小括号中要匹配的内容相同。

1<<4   左移相当于1*2^4=16
a^=16-1=15
a=a^15=10^15
^ 异或运算：
10的二进制00001010
15的二进制00001111
========>00000101  转成十进制：5

无法达到预期效果
<div class=”msg-box”>{msg}</div>


(()=>{}).length; 获取方法形参个数，形参为0
1=0001 2=0010  按位与运算，同为1才为1，否则返回0
+[] 隐式类型转换，因为[]是对象，所以toPrimitive->valueOf->toString为''，结果就是+''===0
reduce对数组中的每个元素执行一个reducer函数(升序执行)，将其结果汇总为单个返回值。a为累计器累计回调的返回值，b为数组的每一项元素，传入初始值0->0-(1)->(-1)-2->(-3)-(-3)->0

 var m= 1, j = k = 0;
    function add(n) {
        return n = n+1;
　 }
    y = add(m);
    function add(n) {
        return n = n + 3;
    }
z = add(m);
js里面没有函数重载的概念，在其他语言中（如java）java中，可以存在同名函数，
只要传入的参数数量或者类型不同即可。在js中，定义了两个同名函数后，
后面的函数会覆盖前面定义的函数。结合这道题来说，由于函数声明提升，
所以函数声明会提前，由于存在同名函数，后面的add函数将覆盖第一个add函数，
所以两次调用add()返回的值是相同的。也就是y,z都为4.

avaScript 的说法中正确的是（）
JavaScript是解释性语言

function A(x){
    this.x = x;
}
A.prototype.x = 1;
 
function B(x){
    this.x = x;
}
 
B.prototype = new A();
var a = new A(2), b = new B(3);
delete b.x;
答案 2 undefined


console.log(1+ "2"+"2");
console.log(1+ +"2"+"2");
console.log("A"- "B"+"2");
console.log("A"- "B"+2);

122
32
NaN2
NaN

var x=10;
var y=20;
var z=x<y?x++:++y;
console.log('x='+x+';y='+y+';z='+z);
x=11;y=20;z=10

console.log('Value is ' + (val != '0') ? 'define' : 'undefine');


用户更改表单元素Select中的值时，就会触发（ ）事件处理程序
onMouseOver
onFocus
onChange
onClick

下哪些表达式的结果为true（）
undefined == null
isNaN("100")
parseInt("1a") === 1
[] instanceof Array
ACD


下列关于 JavaScript 模块化的描述错误的是?
正确答案: B  
AMD推崇依赖前置，CMD推崇依赖就近
Sea.js遵循AMD规范，RequireJS遵循CMD规范


function Foo(){
     var i=0;
     return function(){
         document.write(i++);
     }
}
var f1=Foo(),
f2=Foo();
f1();
f1();
f2();
010
这是一个闭包，闭包可以用在许多地方。它的最大用处有两个，一个是前面提到的可以读取函数内部的变量，另一个就是让这些变量的值始终保持在内存中。 
这里的局部变量i，对f1()来说是全局变量，对f2()来说也是全局变量，但是f1()的i跟f2()的i又是相互独立相互不可见的，f1()每执行一次，f1()的i就加一，f2（）每次执行一次，f2()的i就加油，但是相互之间不影响，因此结果是010


function test() {
    var n = 4399;
    function add(){
        n++;
        console.log(n);
    }
    return {n:n,add:add}
}
var result = test();
var result2 = test();
result.add();
resukt2.add();
console.log(result.n);
result2.add();
A

4400 4401 4399 4400


function A(x){
    this.x = x;
}
A.prototype.x = 1;
 
function B(x){
    this.x = x;
}
 
B.prototype = new A();
var a = new A(2), b = new B(3);
delete b.x;


正确答案:   2, undefined
2, 3
2, 1
2, undefined


AngularJS中的$apply()的作用是？
正确答案: C   使方法生效

在javascript中，(全局 )变量在函数外声明，并可从脚本的任意位置访问


以下哪些选项可以将集合A转化为数组？
正确答案: A B C D   
Array.from(A)
[].slice.apply(A)
[…A]
[].map.call(A, o => o)

有var d = new Date('2018-05-09')，可以设置为6月份的操作是？（）
正确答案: C D   
d.setMonth(7);
d.setMonth(6);
d.setMonth(5);
d.setDate(40);



var x = new Boolean(false);
if (x) {
  alert('hi'); 
}
var y = Boolean(0);
if (y) {
  alert('hello');  
}
正确答案: A  
此题考查的是 JS 的类型转换：
if(x) 这里期望 x 是一个布尔类型的原始值，而 x 是一个对象，任何对象转为布尔值，都为得到 true（切记！在 JS 中，只有 0，-0，NaN，""，null，undefined 这六个值转布尔值时，结果为 false）。
题目的第二部分，一定要注意 y = Boolean(0)，而不是 y = new Boolean(0)。这两个有很大区别，用 new 调用构造函数会新建一个布尔对象，此处没有加 new，进行的是显示类型转换，正如上述第一条所说，0 转换布尔，结果为 false，所以此时 y 的值就是 false。如果加了 new，那么 y 就是一个 Boolean 类型的对象，执行 if(y) 时，对象转布尔，始终是 true，所以结果会与不加 new 的时候相反。


下面哪些语句执行结果为true
正确答案: B C E   你的答案: C D E (错误)
'foo' == new function(){ return String('foo'); };
'foo' == new function(){ return new String('foo'); };
[] == 0
![]
!0


用户在登陆某个账号时，通常是将账号名和密码分别输入到对应的文本框中，现要将账号名和密码连接起来作为用户的唯一标识符，怎样来实现这一功能（      ）
正确答案: A   
userName.concat(pwd);


0xff ^ 33 的结果是：222

AngularJS指令中的compile参数是在什么时候运行的？
正确答案: C   你的答案: A (错误)
在生成DOM前扫描并生成
在生成DOM中扫描并生成
在生成DOM后扫描并生成

下面哪个不是RegExp对象的方法？（）
正确答案: B   你的答案: D (错误)
test
match


Angular指令中哪种作用域可以继承父scope
正确答案: A   你的答案: C (错误)
scope:true


下拉菜单中，用户更改表单元素Select中的值时，就会触发（ ）事件处理程序
正确答案: A B C D   你的答案: C D (错误)
onMouseOver
onFocus
onChange
onClick


下面哪些语句执行结果为true
正确答案: B C E   你的答案: C D E (错误)
'foo' == new function(){ return String('foo'); };
'foo' == new function(){ return new String('foo'); };
[] == 0
![]
!0


下面对this对象的理解,哪些是正确的  
正确答案: B D   你的答案: A B D (错误)
this总是指向函数的直接调用者（而非间接调用者）；
如果有new关键字，this指向new出来的那个对象；
在事件中，this总是指向触发这个事件的对象；
this是函数运行时自动生成的一个内部对象，只能在函数内部使用；

以下哪些代码执行后i的值为10：
正确答案: A C   你的答案: C D (错误)
let i =1 + {
  valueOf() { return 9; }
};
let i = 0;
new Array(10).forEach(() => {
  i++;
});
let i = parseInt('0xA');
let i = 5;
function a(i) {
  i *= 2;
}
a(i);


在一个表单中，如果想要给输入框添加一个输入验证，可以用下面的哪个事件实现？
正确答案: C D   你的答案: B (错误)
hover(over ,out)
keypress（fn）
change()
change(fn)


下面哪些语句可以 在JS里判断一个对象是否为String类型？
正确答案: A   你的答案: A B (错误)
oStringObject instanceof String

在大数据量场景下，以下哪种js中字符串连接方式较为高效（     ）
正确答案: C   你的答案: A (错误)
a+=b
a = a+b
Array.join()

以下哪些表达式的结果为true（）
正确答案: A C D   你的答案: A B C D (错误)
undefined == null
isNaN("100")
parseInt("1a") === 1
[] instanceof Array

var F=function(){};
Object.prototype.a=function(){};
Function.prototype .b=function(){};
var f=new F();
关于这段代码的描述,正确的是：
正确答案: A   你的答案: B (错误)
f能取到a，但取不到b



var a,b;
(function(){
    alert(a);
    alert(b);
    var a=b=3;
    alert(a);
    alert(b);
})();
alert(a);
alert(b);
正确答案: A   你的答案: B (错误)
undefined，undefined，3,3，undefined，3

在文件/home/somebody/workspace/somemodule.js中第一行引用了一个模块：require(‘othermodule‘)，请问require查找模块的顺序是：
正确答案: C B A D
A. /home/somebody/workspace/node_modules/othermodule/index.js
B. /home/somebody/workspace/node_modules/othermodule. Js
C.CORE MODULES named othermodule
D./home/somebody/node_modules/othermodule/index.js





















```
