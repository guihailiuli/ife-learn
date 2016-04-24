
/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {},
    cityInput = document.getElementById("aqi-city-input"),
    aqiInput = document.getElementById("aqi-value-input"),
    cityError = document.getElementById('city-error'),
    valueError = document.getElementById('value-error');

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var city = cityInput.value.trim(),
        aqi = aqiInput.value.trim();
    if(!city.match(/^[A-Za-z\u4E00-\u9FA5]+$/)){
    	// alert('城市名称为中文或英文');
        cityError.innerHTML = ' 输入有误，请重新输入城市名称(不能包含数字)';
        cityInput.value = '';
        return;
    }
    if(!aqi.match(/^\d+$/)) {
        // alert("空气质量指数为整数！");
        valueError.innerHTML = ' 输入有误，请重新输入该城市空气质量';
        aqiInput.value = '';
        return;
    }
    aqiData[city] = aqi;
}

function clearErrorText() {
    cityError.innerHTML = "";
    valueError.innerHTML = "";
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var items = "<tr><th>城市</th><th>空气质量</th><th>操作</th></tr>";
    for(var city in aqiData){
        items += "<tr><td>"+city+"</td><td>"+aqiData[city]+"</td><td><button onclick='delBtnHandle(\""+city+"\")'"+">删除</button></td></tr>";
        // 方法二：
        // items += "<tr><td>"+city+"</td><td>"+aqiData[city]+"</td><td><button data-city='"+city+"'>删除</button></td></tr>";
    }
    document.getElementById("aqi-table").innerHTML = city ? items : "";
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    clearErrorText();
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(city) {
    // do sth.
    delete aqiData[city];
    renderAqiList();
    cityInput.value = '';
    aqiInput.value = '';
}

/**
 * addEventHandler方法，实现跨浏览器事件绑定
 */
 function addEventHandler(ele, event, handler) {
    if(ele.addEventListener) {
      ele.addEventListener(event,handler, false);
    }else if(ele.attachEvent) {
      ele.attachEvent("on"+event, handler);
    }else {
      ele["on"+event] = handler;
    }
 }

function init() {

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
     // document.getElementById("btnSubmit").addEventListener("click", addBtnHandle);
    var btnSubmit = document.getElementById("btnSubmit");
    addEventHandler(btnSubmit, "click", addBtnHandle);

    // 方法二删除方法
    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
    // document.getElementById("aqi-table").addEventListener("click", function(event){
    //     if(event.target.nodeName.toLowerCase() === 'button') {
    //     	delBtnHandle.call(null, event.target.dataset.city);
    //     }
    // });
}

init();
