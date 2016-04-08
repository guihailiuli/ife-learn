**面向人群：**
零基础或初学者
**难度：**
简单

### 任务目的

 - 在上一任务基础上继续JavaScript的体验
 - 接触一下JavaScript中的高级选择器
 - 学习JavaScript中的数组对象遍历、读写、排序等操作
 - 学习简单的字符串处理操作

### 任务描述

 - 参考以下示例代码，读取页面上已有的source列表，从中提取出城市以及对应的空气质量
 - 将数据按照某种顺序排序后，在resort列表中按照顺序显示出来

### 任务注意事项

 - 实现简单功能的同时，请仔细学习JavaScript基本语法、事件、DOM相关的知识
 - 请注意代码风格的整齐、优雅
 - 代码中含有必要的注释
 - 其中的数据以及60的判断逻辑可以自行设定
 - 建议不使用任何第三方库、框架
 - 示例代码仅为示例，可以直接使用，也可以完全自己重写

### 完成情况

#### Demo: http://codepen.io/guihailiuli/pen/oxpbvW

#### 总结：

**一：**

对于：```<li>北京空气质量：<b>90</b></li>```用正则匹配'北京'的方法：

方法一： ```cityList.innerHTML.match(/(.*?)空气/)[1];```

(.*?)代表一个分组，.代表任意一个字符，星号 代表前面的那个字符出现任意多次，两个合起来代表匹配任意无限多个字符，?表示使用非贪婪匹配。[1]代表第一个(.\星号?)的内容。

方法二： li.innerHTML.split("空气")[0];


对于 ```<li>第一名：北京空气质量：<b>90</b></li>```获取'90'的方法：

方法一： cityList[i].getElementsByTagName('b')[0].innerHTML;

方法二： cityList[i].children[0].innerHTML;

**二：**
当需要动态生成li节点，可以使用字符串拼接代替创建li节点。比如：
```
for(var i = 0; i < data.length; i++) {
    var li = document.createElement('li');
    li.innerHTML += '第'+ (i+1) + '名： ' + data[i][0] + '空气质量:<b>' + data[i][1] + '</b>';
     resort.appendChild(li);
}

```
可以被替换为：
```
var items = "";
for(var i = 0; i < data.length; i++) {
    items += '<li>第' + (i + 1) + '名' + data[i][0] + '空气质量：<b>' + data[i][1] + '</b></li>';
}
ul.innerHTML = items;
```

**三：**
重视代码结构，按照一个个函数来写，使代码更加清晰：
```
function getData() {
	//
}

function sortAqiData(data) {
	//
}

function render(data) {
	//
}

function btnHandle() {
	var aqiData = getData();
	aqiData = sortAqiData(aqiData);
	render(aqiData);
}

function init() {
	//
}

init();

```

代码的结构很美。

