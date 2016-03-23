!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("base")):"function"==typeof define&&define.amd?define("pages/home/index",["base"],t):"object"==typeof exports?exports["pages/home/index"]=t(require("base")):(e["h5-snake"]=e["h5-snake"]||{},e["h5-snake"]["pages/home/index"]=t(e.base))}(this,function(e){return webpackJsonph5_snake__name_([1],{0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}n(35);var a=n(2),s=n(36),i=o(s),u=n(14),r=o(u),l=(a.Bridge.Global,[{x:0,y:0}]),d=r["default"].getWindowRegion(),c=r["default"].calculateUnit(d);d.w=Math.ceil(d.width/c),d.h=Math.ceil(d.height/c);var f={scenceStyle:{left:d.left,top:d.top,position:"absolute"},gameRegion:d,unit:c,snake:l,foodsCount:1};a.ReactDOM.render(a.React.createElement(i["default"],f),document.getElementById("J_Page"))},2:function(t,n){t.exports=e},14:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=window,o=document;t["default"]={randomInt:function(e,t){return Math.floor(Math.random()*(t-e))+e},getWindowRegion:function(){o.documentElement;return{width:n.innerWidth,height:n.innerHeight,left:n.scrollX,top:n.scrollY}},calculateUnit:function(e){var t=10,n=Math.min(e.width,e.height);return Math.floor(n/t)},randomGenFoods:function(e,t,n){for(var o=[];n>0;)n--,o.push({x:this.randomInt(0,e),y:this.randomInt(0,t)});return o}}},15:function(e,t,n){e.exports={"default":n(46),__esModule:!0}},29:function(e,t){},30:function(e,t){e.exports={food:"index__food___2vxVA"}},32:29,33:function(e,t){e.exports={snakeNode:"index__snakeNode___IubWa"}},35:29,36:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(15),s=o(a),i=n(4),u=o(i),r=n(5),l=o(r),d=n(6),c=o(d),f=n(8),h=o(f),p=n(7),m=o(p),v=n(2),y=n(9),b=o(y),_=n(29),g=o(_),k=n(40),R=o(k),x=n(37),M=o(x),O=n(39),j=o(O),C=n(14),w=o(C),E=v.React.Component,P=(v.React.PropTypes,v.React.addons.PureRenderMixin),S=(b["default"].bind(g["default"]),function(e){function t(e){(0,l["default"])(this,t);var n=(0,h["default"])(this,(0,u["default"])(t).call(this,e));return n.clashObjs=[],n.state={unit:n.props.unit,snake:n.props.snake,foods:w["default"].randomGenFoods(n.props.gameRegion.w,n.props.gameRegion.h,n.props.foodsCount),obstacle:[{x:-1,y:-1,w:100,h:1},{x:-1,y:-1,w:1,h:100}],gameState:"ing"},n.shouldComponentUpdate=P.shouldComponentUpdate.bind(n),n.refreshClashObject(),n}return(0,m["default"])(t,e),(0,c["default"])(t,[{key:"eat",value:function(e){this.refs.snake.eat(e),this.refs.food.del(e)}},{key:"handleMove",value:function(e){var t=this._detectClash(e);t&&("obstacle"===t.type?this.setState({gameState:"fail"},function(){this.gameOver()}):"food"===t.type&&this.eat(e))}},{key:"_detectClash",value:function(e){var t=this,n=null;return this.clashObjs.some(function(o){return t._isRegionOverlap(t._parseClashObj(e,"snake"),o)?(n=o,!0):void 0}),n}},{key:"refreshClashObject",value:function(){var e=this;this.clashObjs=[],this.clashObjs=this.state.foods.map(function(t){return e._parseClashObj(t,"food")}).concat(this.state.obstacle.map(function(t){return e._parseClashObj(t,"obstacle")}))}},{key:"gameOver",value:function(){this.refs.snake.stop()}},{key:"handleFoodEmpty",value:function(){this.gameOver("success")}},{key:"_parseClashObj",value:function(e,t){var n=this.state.unit;return e.w=e.w||1,e.h=e.h||1,e.type=t,e.left=e.x*n,e.top=e.y*n,e.right=(e.x+e.w)*n,e.bottom=(e.y+e.h)*n,e}},{key:"_isRegionOverlap",value:function(e,t){var n=Math.min,o=Math.max,a=o(e.left,t.left),s=n(-e.top,-t.top),i=n(e.right,t.right),u=o(-e.bottom,-t.bottom);return i>a&&s>u}},{key:"render",value:function(){return v.React.createElement("div",{style:this.props.scenceStyle},v.React.createElement(R["default"],{ref:"snake",model:this.state.snake,unit:this.state.unit,onMove:this.handleMove.bind(this)}),v.React.createElement(M["default"],{ref:"food",model:this.state.foods,unit:this.state.unit,onDel:this.refreshClashObject.bind(this),onEmpty:this.handleFoodEmpty.bind(this)}),v.React.createElement(j["default"],{ref:"obstacle",model:this.state.obstacle,unit:this.state.unit}))}}]),t}(E));S.propTypes={},S.defaultProps=(0,s["default"])({unit:10,scenceStyle:{left:0,top:0}}),t["default"]=S},37:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(4),s=o(a),i=n(5),u=o(i),r=n(6),l=o(r),d=n(8),c=o(d),f=n(7),h=o(f),p=n(2),m=n(9),v=o(m),y=n(30),b=o(y),_=p.React.Component,g=(p.React.PropTypes,p.React.addons.PureRenderMixin),k=(v["default"].bind(b["default"]),function(e,t){var n=-1;return e.some(function(e,o){t.x===e.x&&t.y===e.y&&(n=o)}),n}),R=function(e){function t(e){(0,u["default"])(this,t);var n=(0,c["default"])(this,(0,s["default"])(t).call(this,e));return n.state={model:n.props.model},n.shouldComponentUpdate=g.shouldComponentUpdate.bind(n),n}return(0,h["default"])(t,e),(0,l["default"])(t,[{key:"render",value:function(){var e=this.props.unit,t=this.state.model.map(function(t){var n={left:t.x*e,top:t.y*e,width:e,height:e};return p.React.createElement("div",{className:b["default"].food,style:n})});return p.React.createElement("div",null,t)}},{key:"del",value:function(e){var t=this.state.model,n=k(t,e);0>n||(t.splice(n,1),this.setState({model:t.concat()},function(){this.props.onDel()}),t.length<1&&this.props.onEmpty())}}]),t}(_);R.propTypes={},R.defaultProps={model:[],unit:10},t["default"]=R},39:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(4),s=o(a),i=n(5),u=o(i),r=n(6),l=o(r),d=n(8),c=o(d),f=n(7),h=o(f),p=n(2),m=n(9),v=o(m),y=n(32),b=o(y),_=p.React.Component,g=(p.React.PropTypes,p.React.addons.PureRenderMixin),k=(v["default"].bind(b["default"]),function(e){function t(e){(0,u["default"])(this,t);var n=(0,c["default"])(this,(0,s["default"])(t).call(this,e));return n.state={},n.shouldComponentUpdate=g.shouldComponentUpdate.bind(n),n}return(0,h["default"])(t,e),(0,l["default"])(t,[{key:"render",value:function(){return p.React.createElement("p",null)}}]),t}(_));k.propTypes={},k.defaultProps={},t["default"]=k},40:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(15),s=o(a),i=n(4),u=o(i),r=n(5),l=o(r),d=n(6),c=o(d),f=n(8),h=o(f),p=n(7),m=o(p),v=n(2),y=n(9),b=o(y),_=n(33),g=o(_),k=v.React.Component,R=(v.React.PropTypes,v.React.addons.PureRenderMixin),x=(b["default"].bind(g["default"]),{37:0,38:1,39:2,40:3}),M=function(e){function t(e){(0,l["default"])(this,t);var n=(0,h["default"])(this,(0,u["default"])(t).call(this,e));return n.state=(0,s["default"])({direction:3,model:[]},n.props),n.shouldComponentUpdate=R.shouldComponentUpdate.bind(n),n.play(),document.addEventListener("keydown",function(e){if("undefined"!=typeof x[e.keyCode]){e.preventDefault();var t=x[e.keyCode];this._isAllowDirection(t)&&this.setState({direction:t})}}.bind(n),!0),n}return(0,m["default"])(t,e),(0,c["default"])(t,[{key:"play",value:function(){this._ticker=setInterval(function(){this.move(this.state.direction)}.bind(this),60)}},{key:"stop",value:function(){clearInterval(this._ticker)}},{key:"move",value:function(e){var t=this.state.model,n=(0,s["default"])({},t[0]);switch(e){case 1:n.y--;break;case 3:n.y++;break;case 0:n.x--;break;case 2:n.x++}n.direction=e,this._doMove(t,n),this.setState({model:t.concat()},function(){this.props.onMove(n)})}},{key:"eat",value:function(e){this.state.model.unshift(e),this.setState({model:this.state.model})}},{key:"_isAllowDirection",value:function(e){return!(2==Math.abs(e-this.state.direction)&&this.state.model.length>1)}},{key:"_doMove",value:function(e,t){e.pop(),e.unshift(t)}},{key:"render",value:function(){if("stop"==this.props.gameState)return void this.stop();var e=this.props.unit,t=this.state.model.map(function(t){var n={left:t.x*e,top:t.y*e,width:e,height:e};return v.React.createElement("div",{className:g["default"].snakeNode,style:n})});return v.React.createElement("div",null,t)}}]),t}(k);M.propTypes={},M.defaultProps={unit:10,model:[]},t["default"]=M},46:function(e,t,n){n(64),e.exports=n(3).Object.assign},59:function(e,t,n){var o=n(1),a=n(26),s=n(22);e.exports=n(11)(function(){var e=Object.assign,t={},n={},o=Symbol(),a="abcdefghijklmnopqrst";return t[o]=7,a.split("").forEach(function(e){n[e]=e}),7!=e({},t)[o]||Object.keys(e({},n)).join("")!=a})?function(e,t){for(var n=a(e),i=arguments,u=i.length,r=1,l=o.getKeys,d=o.getSymbols,c=o.isEnum;u>r;)for(var f,h=s(i[r++]),p=d?l(h).concat(d(h)):l(h),m=p.length,v=0;m>v;)c.call(h,f=p[v++])&&(n[f]=h[f]);return n}:Object.assign},64:function(e,t,n){var o=n(10);o(o.S+o.F,"Object",{assign:n(59)})}})});