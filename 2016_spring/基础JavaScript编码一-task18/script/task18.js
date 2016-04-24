
var inputNum = document.getElementById("numValue"),
    display = document.getElementById("display"),
    btn = document.querySelectorAll("button"),
    container = document.getElementById("container");
/**
*跨浏览器事件处理
*/
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
    //返回event对象的引用，
    getEvent : function(e) {
        return e || window.event;
    },
    //返回事件的目标检测event对象的target属性，
    getTarget : function(e) {
        return e.target || e.srcElement;
    }
};
/**
*对输入进行检测
*/
function checkInput(inputNumValue) {
    if(inputNumValue.length <= 0) {
        alert('请输入一个数字');
        return false;
        //利用正则处理输入整数和小数
    }else if(!/^[+-]?\d+(?:\.\d+)?$/g.test(inputNumValue)) {
        alert('请输入一个数字');
        inputNum.value = null;
        return false;
    }else if(/^[+-]?\d+(?:\.\d+)?$/g.test(inputNumValue)){
        return true;
    }else{
        alert('请输入一个数字');
        return false;
    }
}
/**
*从左侧移入
*/
function leftIn() {
    var inputNumValue = inputNum.value;
    if(checkInput(inputNumValue)) {
            var li = document.createElement('li');
            li.innerHTML = inputNumValue;
            display.insertBefore(li, display.firstChild);
            inputNum.value = null;
    }
}
/**
*从右侧移入
*/
function rightIn() {
    var inputNumValue = inputNum.value;
    if(checkInput(inputNumValue)) {
            var li = document.createElement('li');
            li.innerHTML = inputNumValue;
            display.appendChild(li);
            inputNum.value = null;
    }
}
/**
*从左侧移除
*/
function leftOut() {
    // if(display.firstChild !== null) {
    if(display.hasChildNodes()){   
        var firstChildValue = display.firstChild;
        alert('将要从左侧移除的数字是: ' + firstChildValue.innerHTML);
        display.removeChild(firstChildValue);
    }else {
        alert('队列已经空了，没有可移除的');
    }
}
/**
*从右侧移除
*/
function rightOut() {
    // if(display.lastChild !== null) {
    if(display.hasChildNodes()){
        var lastChildValue = display.lastChild;
        alert('将要从右侧移除的数字是: ' + lastChildValue.innerHTML);
        display.removeChild(display.lastChild);
    }else {
        alert('队列已经空了，没有可移除的');
    }
}
/**
*删除某个选中的数字
*/
function deleteSelect(e) {
    e = EventUtil.getEvent(e);
    var target = EventUtil.getTarget(e);
    if (target.tagName.toLowerCase() === 'li') {
         display.removeChild(target);
    }
}
/**
*删除ul下所有节点，清空数字
*/
function deleteAll() {
    // if(display.childNodes.length === 0) {
    if(!display.hasChildNodes()){
        alert("队列中没有可删除的元素");
    }else {
        display.innerHTML = "";
    }
}
/**
*给ul注册事件，删除点击的某个数字
*/
EventUtil.addEventHandler(display, "click", deleteSelect);
/**
*使用事件委托，指定一个事件处理程序，管理某一类的事件
*在DOM树的尽量高的层次添加click事件处理程序，利用事件冒泡的原理。
*/
EventUtil.addEventHandler(container, "click", function(e) {
    e = EventUtil.getEvent(e);
    var target = EventUtil.getTarget(e);
    //选择某个事件的target的id
    switch(target.id) {
        case "left-in":
            leftIn();
            break;
        case "right-in":
            rightIn();
            break;
        case "left-out":
            leftOut();
            break;
        case "right-out":
            rightOut();
            break;
        case "removeAll":
            deleteAll();
            break;
        default:
            break;
    }
});


// 看别人的思路：


// https://github.com/Sakitama/Sakitama.github.io/blob/master/js/task-18.js

// http://ife.baidu.com/review/detail?workId=2430
// http://ife.baidu.com/review/detail?workId=2430


// https://github.com/zp1996/ife-2016/blob/master/task_2_18/task_2_18.js


// https://github.com/yenshih/ife/tree/master/2016_spring/task2-6/src/scripts
