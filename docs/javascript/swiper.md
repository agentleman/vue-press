### js

```js
var _interval, n;
init(n);
_interval = setInterval(interHandle, 3000);

function interHandle() {
  w_right(getItem(n)).one("transitionend", function(e) {
    w_right($(e.currentTarget));
  });
  w_active(getItem(n + 1));
  n++;
}

function init(n) {
  getItem(x(n).addClass("active_swiper"))
    .slibings()
    .addClass("w_right");
}

function x(n) {
  if (n > 4) {
    n = n % 5;
  }
  return;
}

function getItem(n) {
  return $(".seiper_item_con")
    .children()
    .eq(x(n));
}

function w_active($node) {
  return $node.removeClass("w_right w_left").addClass("active_swiper");
}

function w_right($node) {
  return $node.removeClass("active_swiper w_left").addClass("w_right");
}
function w_left($node) {
  return $node.removeClass("w_right active_swiper").addClass("w_left");
}
```

### 继承

::: tip
继承方式
:::

#### class+extends 继承（ES6）

#### 原型继承

#### 借用构造函数继承

#### 寄生组合式继承（重点）

::: details class+extends 继承（ES6）

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
}

//继承类
class Cat extends Animal{//重点。extends方法，内部用constructor+super
constructor(name)
super(name);
//super作为函数调用时，代表父类的构造函数
}//constructor可省略
eat(){
console.log("eating")
   }
}
```

:::

::: details 原型继承

```js
//类模板
function Animal(name) {
  this.name = name;
}
//添加原型方法
Animal.prototype.eat = function() {
  console.log("eating");
};
function Cat(furColor) {
  this.color = color;
}
//继承类
Cat.prototype = new Animal(); //重点：子实例的原型等于父类的实例
```

:::

::: details 借用构造函数

```js
function Animal(name){
this.name = name
}
function Cat(){
Animal.call(this,"CatName")//重点，调用父类的call方法
}

```

:::



