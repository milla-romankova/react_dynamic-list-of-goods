(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(2),c=n.n(r),s=n(3),i=n(4),u=n(6),l=n(5),m=function(t){var e=t.goods;return a.a.createElement("ul",{className:"list-group"},e.map((function(t){var e=t.id,n=t.color,o=t.name;return a.a.createElement("li",{key:e,style:{color:"".concat(n)},className:"list-group-item list-group-item-secondary mb-1"},o)})))};function d(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var f=function(){return d().then((function(t){return t.sort((function(t,e){return t.name.localeCompare(e.name)})).slice(0,5)}))},b=function(){return d().then((function(t){return t.filter((function(t){return"red"===t.color}))}))},p=function(t){var e=t.onLoad;return a.a.createElement("div",{className:"d-flex justify-content-center mb-2"},a.a.createElement("button",{type:"button",className:"button btn-info ml-3",onClick:function(){return e(d)}},"Load all goods"),a.a.createElement("button",{type:"button",className:"button btn-info ml-3",onClick:function(){return e(f)}},"Load 5 first goods"),a.a.createElement("button",{type:"button",className:"button btn-info ml-3",onClick:function(){return e(b)}},"Load red goods"))},g=(n(12),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={goods:[]},t.loadGoods=function(e){e().then((function(e){t.setState({goods:e})}))},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state.goods,e=this.loadGoods;return a.a.createElement("div",{className:"App container card"},a.a.createElement("h1",{className:"d-flex justify-content-center display-4 mb-4"},"Dynamic list of Goods"),a.a.createElement(p,{onLoad:e}),a.a.createElement(m,{goods:t}))}}]),n}(a.a.Component));c.a.render(a.a.createElement(g,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.6aa911c6.chunk.js.map