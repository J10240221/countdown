/**
 * @Author: 华志林 
 * @Date: 2017-09-19 14:02:24 
 * @Last Modified by: 华志林
 * @Last Modified time: 2017-09-19 15:51:29
 * 
 * 
 * ↓↓↓↓↓↓↓《使用文档》必看↓↓↓↓↓↓↓
 * <倒计时组件1>,
 * 显示为：xx天xx小时xx分xx秒
 * @param {传入的props之一} endTime         ：必填参数；传入您的截至的时间；格式为："2020/11/11 18:30:00"
 * @param {传入的props之一} myCorrNowTime   ：可选参数；传入您的准确的当前的时间；之所有要有这个参数，是因为，很多时候倒计时需要用的是服务器返回的当前时间作为基数进行倒计时运算；
 *                                           如未传入，则使用当前的客户端的时间为基数进行倒计时运算；
 * <倒计时组件2>,
 * 显示为：xx秒
 * @param {传入的props之一} second          ：必填参数；传入您想要倒计时的秒数，
 * 
 * 两个组件的属性不应混用；   如：传入了second属性就不应再传入endTime或myCorrNowTime
 * 
 * 两个组件共有的参数
 * @param {传入的props之一} timeoutFn       ：可选参数；传入您在倒计时结束时候想执行的方法
 * 
 * ↑↑↑↑↑↑↑《使用文档》必看↑↑↑↑↑↑↑
 * 
 * 
 * ↓↓↓↓↓↓↓ Usage ↓↓↓↓↓↓↓
 * 
 * <CountdownComponent endTime={"2017/09/19 18:30:00"} myCorrNowTime={"2017/09/19 18:29:50"} timeoutFn={timeoutFn} />
 * <CountdownComponent endTime={"2017/09/19 18:30:00"} />
 * 
 * <CountdownComponent second="10" timeoutFn={timeoutFn} />
 * <CountdownComponent second="100" />     
 * 
 * ↑↑↑↑↑↑↑ Usage ↑↑↑↑↑↑↑ 
 */

import React from 'react';

//容器组件，负责逻辑
export default class CountdownComponent extends React.Component {
   constructor(props) {
      super(props);
      this.state = { countdownShow: "" };
      if (!this.props.endTime && !this.props.second) {//应传入这两个参数中一个
         throw new TypeError('need this props: endTime or second! You can use this component like this: <CountdownComponent endTime={"2022/11/11 18:30:00"} />');
      }
      if( this.props.timeoutFn !== undefined && typeof this.props.timeoutFn !== 'function') {
         throw new TypeError('timeoutFn is not a function');
      }

      if (this.props.second) {//当有second属性时
         this.time = {//都转成毫秒数
            endTime: Date.parse(new Date()) + this.props.second * 1000,
            myCorrNowTime: Date.parse(new Date()),//传入了时间，就是传入的客户端时间，否则就是自己的时间
            hasPassTime: 0,//已经走过的时间，初始0
         }
      } else {
         this.time = {//都转成毫秒数
            endTime: Date.parse(this.props.endTime),
            myCorrNowTime: Date.parse(this.props.myCorrNowTime) || Date.parse(new Date()),//传入了时间，就是传入的客户端时间，否则就是自己的时间
            hasPassTime: 0,//已经走过的时间，初始0
         }
      }

      this._xTime = Date.parse(new Date()) - this.time.myCorrNowTime;//时间差值。只在最开始的构造函数中执行计算一次，算出本地与传入的时间差值，进行误差的回复
      this.countdownTotalTime = this.time.endTime - this.time.myCorrNowTime;
      this.timerId = 0;//计数器序号

      this.isTimeOut = this.isTimeOut.bind(this);
   }

   //在组件即将进入的时候开启周期性计时器
   componentWillMount() {
      this.timerId = setInterval(() => {
         this.tick();
      }, 1000)
   }

   //在组件卸载时，删除计时器
   componentWillUnmount() {
      clearInterval(this.timerId);
   }

   tick() {
      this.time.hasPassTime = Date.parse(new Date()) - this.time.myCorrNowTime - this._xTime;
      this.setState({
         countdownShow: this.time.endTime - this.time.myCorrNowTime - this.time.hasPassTime
      });
      //判断是否倒计时结束
      this.isTimeOut();
   }

   //判断是否时间到了，则   停止周期性计时器 && 执行您传入的timeoutFn()
   isTimeOut() {
      if (this.state.countdownShow <= 0) {
         clearInterval(this.timerId);
         this.props.timeoutFn && this.props.timeoutFn();
      }
   }

   //格式化日期
   dateFormat(arg) {
      arg = parseInt(arg);//下取整
      return (arg < 10 ? "0" + arg : arg);//转格式
   }

   render() {
      const totalSecond = parseInt(this.state.countdownShow / 1000);
      const s = this.props.second ? totalSecond : this.dateFormat(totalSecond % 60);
      const m = this.dateFormat(totalSecond / 60 % 60);
      const h = this.dateFormat(totalSecond / 60 / 60 % 60);
      const d = this.dateFormat(totalSecond / 60 / 60 / 60 % 24);

      const countdownTime = this.props.second ? `${s}秒` : `${d}天${h}:${m}:${s}`;
      return (
         //下面代码可以修改成您想要的格式
         <div>
            <hr />
            <h1>倒计时还剩：{countdownTime}</h1>
            这个页面已经显示了：{this.time.hasPassTime / 1000}秒
            {this.state.countdownShow > 0
               ?
               ""
               :
               this.state.countdownShow !== "" ? <p style={{ color: "red" }}>时间到！</p> : ""
            }
            <hr />
         </div>
      )
   }
}