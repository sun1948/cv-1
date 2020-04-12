let html = document.querySelector("#html-wrapper");
let style = document.querySelector("#style");
let string = `/* 你好，我是一名前端新人
* 我叫孙小伟，下面请观看我的太极八卦图
* 首先我要准备一个div
*/
#div1{
    border:1px solid black;
    width:200px;
    height:200px;
}
/* 接下来我把它变成一个圆 */
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/* 然后我给它上颜色 */
#div1{
    background: linear-gradient(90deg, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%);
}
/* 接着我要添加两颗混元珠 */
#div1::before{
    left:50%;
    top:0;
    transform:translateX(-50%);
    width:100px;
    height:100px;
    border-radius:50%;
}
#div1::after{
    left:50%;
    bottom:0;
    transform:translateX(-50%);
    width:100px;
    height:100px;
    border-radius:50%;
}
`;
let n = 0;
let string2 = "";
let step = () => {
  setTimeout(() => {
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp";
    } else {
      string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 99999);
    html.scrollTo(0, 99999);
    if (n < string.length - 1) {
      n++;
      step();
    }
  }, 50);
};
step();
