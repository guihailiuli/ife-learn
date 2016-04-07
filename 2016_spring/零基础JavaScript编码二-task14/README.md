**面向人群：**
零基础或初学者
**难度：**
简单

### 任务目的

在上一任务基础上继续JavaScript的体验
学习JavaScript中的if判断语法，for循环语法
学习JavaScript中的数组对象
学习如何读取、处理数据，并动态创建、修改DOM中的内容

### 任务描述

参考以下示例代码，页面加载后，将提供的空气质量数据数组，按照某种逻辑（比如空气质量大于60）进行过滤筛选，最后将符合条件的数据按照一定的格式要求显示在网页上


### 任务注意事项

 - 实现简单功能的同时，请仔细学习JavaScript基本语法、事件、DOM相关的知识
 - 请注意代码风格的整齐、优雅
 - 代码中含有必要的注释
 - 其中的数据以及60的判断逻辑可以自行设定
 - 建议不使用任何第三方库、框架
 - 示例代码仅为示例，可以直接使用，也可以完全自己重写

### 完成情况

Demo: http://codepen.io/guihailiuli/pen/WwXmQM?editors=1010

总结：

innerHTML,outerHTML和innerText怎么区分？

document对象中有innerHTML和innerText两个属性，都是获取document对象的文本内容的，但是两者还是有差异的。

innerHTML指获取对象起始位置到终止位置的全部内容，包括HTML；
innerText指获取从起始位置到终止位置的内容，去除HTML标签；
outerHTML指获取包含innerHTML的全部内容，还要获取包含对象的标签本身。

innerHTML是符合W3C标准的，而innerText只有IE和Chrome等部分浏览器实现。因此在实际中尽可能使用innerHTML。如果要获取去除HTML标签的内容，可以这样写：
```
content.innerHTML.replace(/& lt;.+?>/gim,'');
```
具体区别可以看这里的实例：http://codepen.io/guihailiuli/pen/QNabJM?editors=1010


补充： innerHTML和document.write的区别：

document.write是直接写入到页面的内容流，如果在写之前没有调用document.open, 浏览器会自动调用open。每次写完关闭之后重新调用该函数，会导致页面被重写。

innerHTML则是DOM页面元素的一个属性，只是修改DOM元素的内容包含该元素下子元素结构

使用document.write要重新渲染整个页面。使用innerHTML只需要渲染被更改了的局部即可。















