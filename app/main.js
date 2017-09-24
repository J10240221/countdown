import React from 'react';
import ReactDOM from 'react-dom';
import CountdownComponent from './component/CountdownComponent';

function timeoutFn() {//时间到执行的函数
   console.log("时间到啦")
}

const Container = () => {
   const css = { border: "2px solid red", margin: "20px 0", padding: "10px" }
   return (
      < div >
         <div style={css}>
            该组件传递给子组件的属性有：<br />
            <strong> endTime="2017/09/21 00:00:00" </strong><br />
            <strong> myCorrNowTime="2017/09/20 00:00:00" </strong><br />
            所以每次刷新页面都是24小时开始倒计时，其实这个<strong>myCorrNowTime</strong>属性的使用场景，就是在需要使用的<br />
            服务器时间的场景，避免用户客户端的时间不对，而造成同一个时刻，不同用户显示的倒计时不一致的问题；
            <hr />
            这两个属性的用法如下：<br />
            <strong> endTime="倒计时的最后时刻" </strong><br />
            <strong> myCorrNowTime="服务器获取的准确的当前时刻" </strong><br />
            <CountdownComponent endTime={"2017/09/21 00:00:00"} myCorrNowTime={"2017/09/20 00:00:00"} timeoutFn={timeoutFn} />
         </div>
         <div style={css}>
            该组件传递给子组件的属性有：<br />
            <strong> endTime="2030/01/01 00:00:00" </strong><br />
            <strong> myCorrNowTime=new Date() </strong><br />
            这里使用的便是客户端自己的时间，
            <hr />
            现在距离2030/01/01 00:00:00<CountdownComponent endTime={"2030/01/01 00:00:00"} myCorrNowTime={new Date()} />
         </div>
         <div style={css}>
            该组件传递给子组件的属性有：<br />
            <strong> second="10" </strong><br />
            <CountdownComponent second="10" />
         </div>
      </div >
   )
}

ReactDOM.render(
   <Container />,
   document.querySelector('#root')
);
