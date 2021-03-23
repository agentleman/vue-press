##### js

```js
var _interval,n;
init(n)
_interval = setInterval(interHandle,3000)

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
