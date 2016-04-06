**面向人群：**
零基础或初学者
**难度：**
简单

### 任务目的

 - JavaScript初体验
 - 初步明白JavaScript的简单基本语法，如变量、函数
 - 初步了解JavaScript的事件是什么
 - 初步了解JavaScript中的DOM是什么

### 任务描述

 - 参考以下示例代码，补充其中的JavaScript功能，完成一个JavaScript代码的编写

 - 本任务完成的功能为：用户可以在输入框中输入任何内容，点击“确认填写”按钮后，用户输入的内容会显示在“您输入的值是”文字的右边

 ```
  <label>请输入北京今天空气质量：<input id="aqi-input" type="text"></label>
  <button id="button">确认填写</button>

  <div>您输入的值是：<span id="aqi-display">尚无录入</span></div>

 (function() {
  /*	
  在注释下方写下代码
  给按钮button绑定一个点击事件
  在事件处理函数中
  获取aqi-input输入的值，并显示在aqi-display中
  */

})();
```

### 任务注意事项

 - 实现简单功能的同时，请仔细学习JavaScript基本语法、事件、DOM相关的知识
 - 请注意代码风格的整齐、优雅
 - 代码中含有必要的注释
 - 可以不考虑输入的合法性
 - 建议不使用任何第三方库、框架
 - 示例代码仅为示例，可以直接使用，也可以完全自己重写

### 完成情况

Demo地址： http://codepen.io/guihailiuli/pen/JXOeYP

总结： http://www.fscwz.com/2016/04/06/input-string-change-input-number/

我的初步实现没有考虑到输入的合理性，需求是输入的空气质量，当输入字符，空格，特殊字符时应该提示用户输入错误，而不是照常显示出来。而test队的比较完善。

学习了他们队的实现方法： 

在检测是否是数字时，用到Number()方法，构造函数 Number() 可以不与运算符 new 一起使用，而直接作为转化函数来使用。以这种方式调用 Number() 时，它会把自己的参数转化成一个数字，然后返回转换后的原始数值（或 NaN）。

使用isNaN方法检测Number()的返回值，如果值是NaN，则isNaN函数返回true，否则(值是数字),返回false。当返回true时，提示应该输入数字，当返回false时，将该数字显示在页面上。

但是在使用Number时候，有个地方需要注意，当输入的值为空字符串时(' '), Number会将其转化为0，因此需要使用 Number(''.trim() || '~') 将空内容转换为NaN。(~可以替换为其他特殊字符，如@#*&等)


