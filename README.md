# Countdown Component

## 先上效果图
![image](./images/image.png)


## 项目启动方法
1. 运行：npm install    安装热更新等依赖
2. 运行：webpack-dev-server   开启热更新
3. 浏览器打开 http://localhost:8080/webpack-dev-server/  即可


## React的倒计时组件，基本用法：

仅仅需要在你的代码中插入如下事例代码即可
**<CountdownComponent  endTime={"2017/09/19 18:30:00"} />**


## 《使用文档》必看👇
 * <倒计时组件1>,
 * 显示为：xx天xx小时xx分xx秒
 * @param {传入的props之一} endTime：必填参数；传入您的截至的时间；格式为："2020/11/11 18:30:00"
 * @param {传入的props之一} myCorrNowTime   ：可选参数；传入您的准确的当前的时间；之所有要有这个参数，是因为，很多时候倒计时需要用的是服务器返回的当前时间作为基数进行倒计时运算；
 * 如未传入，则使用当前的客户端的时间为基数进行倒计时运算；
 * <倒计时组件2>,
 * 显示为：xx秒
 * @param {传入的props之一} second          ：必填参数；传入您想要倒计时的秒数，
 * 
 * 两个组件的属性不应混用；  
 * 如：传入了second属性就不应再传入endTime或myCorrNowTime
 * 
 * 两个组件共有的参数
 * @param {传入的props之一} timeoutFn       ：可选参数；传入您在倒计时结束时候想执行的方法

## 《使用文档》必看👆

## Usage👇
 * <CountdownComponent endTime={"2017/09/19 18:30:00"} myCorrNowTime={"2017/09/19 18:29:50"} timeoutFn={timeoutFn} />
 * <CountdownComponent endTime={"2017/09/19 18:30:00"} />
 * <CountdownComponent second="10" timeoutFn={timeoutFn} />
 * <CountdownComponent second="100" />     

## Usage👆