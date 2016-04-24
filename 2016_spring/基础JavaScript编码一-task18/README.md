**面向人群：**
JavaScript初学者
**难度：**
简单

### 任务目的

 - 学习与实践JavaScript的基本语法、语言特性
 - 初步了解JavaScript的事件是什么
 - 初步了解JavaScript中的DOM是什么

### 任务描述

 - 如图，模拟一个队列，队列的每个元素是一个数字，初始队列为空
 - 有一个input输入框，以及4个操作按钮
 - 点击"左侧入"，将input中输入的数字从左侧插入队列中；
 - 点击"右侧入"，将input中输入的数字从右侧插入队列中；
 - 点击"左侧出"，读取并删除队列左侧第一个元素，并弹窗显示元素中数值；
 - 点击"右侧出"，读取并删除队列又侧第一个元素，并弹窗显示元素中数值；
 - 点击队列中任何一个元素，则该元素会被从队列中删除

### 任务注意事项

 - 实现简单功能的同时，请仔细学习JavaScript基本语法、事件、DOM相关的知识
 - 请注意代码风格的整齐、优雅
 - 代码中含有必要的注释
 - 示例图仅为参考，不需要完全一致
 - 需要考虑数字输入的合法性
 - 建议不使用任何第三方库、框架

### 完成情况

##### Demo 

http://codepen.io/guihailiuli/pen/jqZdNN?editors=1010

##### 总结

EventUtil总结使用
var EventUtil = {
    addEventHandler : function(element, type, handler) {
        if(element.addEventListener) {
            element.addEventListener(type, handler, false);
        }else if(element.attachEvent) {
            element.attachEvent("on" + type, handler);
        }else {
            element["on"+type] = handler;
        }
    },
    getEvent : function(e) {
        return e || window.event;
    },
    getTarget : function(e) {
        return e.target || e.srcElement;
    }
};


 if(/^[+-]?\d+(?:\.\d+)?$/g.test(inputNumValue)) {


trim()方法使用

一些很好的思路：
**一**
```
function render() {
    //利用map方法，简单优雅
    $('#result').innerHTML = data.map(function(d) { return "<div>" + d + "</div>"; })
          .join('');
}
```
**二**
```
var render = function() {
    var htmlStr='';
    for (var k in data)
        htmlStr += ['<div data-index="',k,'" class="div">', data[k], '</div>'].join('')
    html($('#container'),htmlStr);
};

$('#container').addEventListener('click',function(ev){
    if(ev.target.tagName.toLowerCase() === 'div'){
        //通过data-index属性获取位置
        var index = ev.target.getAttribute('data-index');
        data.splice(index,1);
        render();
    }
});

```

**三**
方法并不是太好，不过思路有点妙
```
ul.onmouseover = function () {
    var li = ul.getElementsByTagName('li');
    for (var i in li) {
        li[i].index = i;
        li[i].onclick = function () {
            ul.removeChild(ul.childNodes[this.index]);
        }
    }
}

```



