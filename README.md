# Countdown Component

## 先上效果图
![image](./images/image.png)

## 项目启动方法
1. 运行：npm install       安装热更新等依赖
2. 运行：npm run server    开启热更新并打开网页，npm会运行package.json中的"script"属性中的"server"对应的内部语句，即："webpack-dev-server --open"
3. 当运行是发生错误显示： “ERROR in Entry module not found: Error: Can't resolve 'babel-loader' in.........”，这时则只需要运行："npm install babel-loader --save-dev"即可

## React的倒计时组件，基本用法：
仅仅需要在你的代码中插入如下示例代码即可
**<CountdownComponent  endTime={"2020/01/01 18:30:00"} />**

## Usage👇
- &lt;CountdownComponent endTime={"2017/09/19 18:30:00"} myCorrNowTime={"2017/09/19 18:29:50"} timeoutFn={timeoutFn} />
- &lt;CountdownComponent endTime={"2030/09/19 18:30:00"} />
- &lt;CountdownComponent second={"10"} timeoutFn={timeoutFn} />
- &lt;CountdownComponent second={"100"} />