(window.webpackJsonpdash_bio=window.webpackJsonpdash_bio||[]).push([[5],{46:function(t,n,e){"use strict";e.r(n);var r=e(1),o=e.n(r),a=e(52),i=e.n(a),u=e(10);function c(t){return"[object Number]"===Object.prototype.toString.call(t)}var l=Object(u.a)((function(t,n){if(!c(t)||!c(n))throw new TypeError("Both arguments to range must be numbers");for(var e=[],r=t;r<n;)e.push(r),r+=1;return e})),s=e(3),f=Object(s.a)((function(t){return function(){return t}})),p=Object(u.a)((function(t,n){var e,r=Number(n),o=0;if(r<0||isNaN(r))throw new RangeError("n must be a non-negative number");for(e=new Array(r);o<r;)e[o]=t(o),o+=1;return e})),y=Object(u.a)((function(t,n){return p(f(t),n)})),h=e(4);function b(t){return function n(e,r,o){switch(arguments.length){case 0:return n;case 1:return Object(h.a)(e)?n:Object(u.a)((function(n,r){return t(e,n,r)}));case 2:return Object(h.a)(e)&&Object(h.a)(r)?n:Object(h.a)(e)?Object(u.a)((function(n,e){return t(n,r,e)})):Object(h.a)(r)?Object(u.a)((function(n,r){return t(e,n,r)})):Object(s.a)((function(n){return t(e,r,n)}));default:return Object(h.a)(e)&&Object(h.a)(r)&&Object(h.a)(o)?n:Object(h.a)(e)&&Object(h.a)(r)?Object(u.a)((function(n,e){return t(n,e,o)})):Object(h.a)(e)&&Object(h.a)(o)?Object(u.a)((function(n,e){return t(n,r,e)})):Object(h.a)(r)&&Object(h.a)(o)?Object(u.a)((function(n,r){return t(e,n,r)})):Object(h.a)(e)?Object(s.a)((function(n){return t(n,r,o)})):Object(h.a)(r)?Object(s.a)((function(n){return t(e,n,o)})):Object(h.a)(o)?Object(s.a)((function(n){return t(e,r,n)})):t(e,r,o)}}}var d=Array.isArray||function(t){return null!=t&&t.length>=0&&"[object Array]"===Object.prototype.toString.call(t)};var m=Object(s.a)((function(t){return!!d(t)||!!t&&("object"==typeof t&&(!function(t){return"[object String]"===Object.prototype.toString.call(t)}(t)&&(1===t.nodeType?!!t.length:0===t.length||t.length>0&&(t.hasOwnProperty(0)&&t.hasOwnProperty(t.length-1)))))})),g=function(){function t(t){this.f=t}return t.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},t.prototype["@@transducer/result"]=function(t){return t},t.prototype["@@transducer/step"]=function(t,n){return this.f(t,n)},t}();var x=Object(u.a)((function(t,n){return function(t,n){switch(t){case 0:return function(){return n.apply(this,arguments)};case 1:return function(t){return n.apply(this,arguments)};case 2:return function(t,e){return n.apply(this,arguments)};case 3:return function(t,e,r){return n.apply(this,arguments)};case 4:return function(t,e,r,o){return n.apply(this,arguments)};case 5:return function(t,e,r,o,a){return n.apply(this,arguments)};case 6:return function(t,e,r,o,a,i){return n.apply(this,arguments)};case 7:return function(t,e,r,o,a,i,u){return n.apply(this,arguments)};case 8:return function(t,e,r,o,a,i,u,c){return n.apply(this,arguments)};case 9:return function(t,e,r,o,a,i,u,c,l){return n.apply(this,arguments)};case 10:return function(t,e,r,o,a,i,u,c,l,s){return n.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}(t.length,(function(){return t.apply(n,arguments)}))}));function O(t,n,e){for(var r=e.next();!r.done;){if((n=t["@@transducer/step"](n,r.value))&&n["@@transducer/reduced"]){n=n["@@transducer/value"];break}r=e.next()}return t["@@transducer/result"](n)}function j(t,n,e,r){return t["@@transducer/result"](e[r](x(t["@@transducer/step"],t),n))}var v="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";function w(t,n,e){if("function"==typeof t&&(t=function(t){return new g(t)}(t)),m(e))return function(t,n,e){for(var r=0,o=e.length;r<o;){if((n=t["@@transducer/step"](n,e[r]))&&n["@@transducer/reduced"]){n=n["@@transducer/value"];break}r+=1}return t["@@transducer/result"](n)}(t,n,e);if("function"==typeof e["fantasy-land/reduce"])return j(t,n,e,"fantasy-land/reduce");if(null!=e[v])return O(t,n,e[v]());if("function"==typeof e.next)return O(t,n,e);if("function"==typeof e.reduce)return j(t,n,e,"reduce");throw new TypeError("reduce: list must be array or iterable")}var S=b(w),A=Object(u.a)((function(t,n){return n>t?n:t}));function E(t){return"[object Object]"===Object.prototype.toString.call(t)}var k=e(5),P=b((function(t,n,e){var r,o={};for(r in n)Object(k.a)(r,n)&&(o[r]=Object(k.a)(r,e)?t(r,n[r],e[r]):n[r]);for(r in e)Object(k.a)(r,e)&&!Object(k.a)(r,o)&&(o[r]=e[r]);return o})),_=b((function t(n,e,r){return P((function(e,r,o){return E(r)&&E(o)?t(n,r,o):n(e,r,o)}),e,r)})),N=Object(u.a)((function(t,n){return _((function(t,n,e){return e}),t,n)})),T=e(167),C=e(16);function M(t){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function B(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function z(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var e=[],r=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(e.push(i.value),!n||e.length!==n);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return e}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function F(){return(F=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function R(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function D(t){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function I(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function J(t,n){return(J=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function L(t){return!isNaN(parseFloat(t))&&isFinite(t)}function W(t,n,e,r){var o=(n-t)/r,a=Math.max(2,r);return[l(0,a).map((function(n){return t+n*o})),y(e,a)]}function G(t){return S(A,-1/0,function(t){return t.filter((function(t){return Number(L(t))}))}(t))}e.d(n,"default",(function(){return H}));var H=function(t){function n(){var t,e,r;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),e=this,(t=!(r=D(n).call(this))||"object"!==M(r)&&"function"!=typeof r?I(e):r).state={xStart:null,xEnd:null},t.handleChange=t.handleChange.bind(I(t)),t}var e,r,a;return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&J(t,n)}(n,t),e=n,(r=[{key:"UNSAFE_componentWillMount",value:function(){this.props=N(n.defaultProps,this.props)}},{key:"handleChange",value:function(t){t["xaxis.range[0]"]||t["xaxis.range"]?this.setState({xStart:t["xaxis.range[0]"]||t["xaxis.range"][0],xEnd:t["xaxis.range[1]"]||t["xaxis.range"][1]}):!0===t["xaxis.autorange"]&&this.setState({xStart:null,xEnd:null})}},{key:"render",value:function(){var t=this.props.id,n=this.prepareTraces(),e=n.data,r=n.globalAnnotation,a=n.domainAnnotations,u=this.prepareLayout({data:e,globalAnnotation:r,domainAnnotations:a});return o.a.createElement("div",{id:t},o.a.createElement(i.a,F({data:e,layout:u,onRelayout:this.handleChange},Object(T.a)(["setProps"],this.props))))}},{key:"prepareTraces",value:function(){var t=N(n.defaultProps,this.props),e=t.mutationData,r=e.x,o=e.y,a=e.mutationGroups,i=e.domains,u=t.domainStyle,c=u.domainColor,l=u.displayMinorDomains,s=t.needleStyle,f=s.stemColor,p=s.stemThickness,y=s.stemConstHeight,h=s.headSize,b=s.headColor,d=s.headSymbol,m=z(function(t){var n=[],e=[],r=[],o=[];return t.forEach((function(t,a){if(t.indexOf("-")>-1){var i=t.split("-");L(i[0])||L(i[1])?o.push(a):e.push(t)}else r.push(a),n.push(t)})),[n,e,r,o]}(r),3),g=m[0],x=m[1],O=m[2],j=Array.isArray(b)?b:a.map((function(){return b})),v=Array.isArray(d)?d:a.map((function(){return d})),w=c,S=Math.min.apply(null,g),A=Math.max.apply(null,g),E=!0===y?1:G(o),k=this.state.xStart||S,P=(this.state.xEnd||A)-k,_=!0===y?.5:E/10,T=!0===y?2:E+_,C=[],M=[],F=[],R=[];O.forEach((function(t){y?R=R.concat([1]):(F=F.concat(["("+r[t]+","+o[t]+")"]),R=R.concat([o[t]]))}));var D=!0===y?"x+name+text":"name+text";i.forEach((function(t,n){var e=t.coord.split("-"),r=Number(e[0]),o=Number(e[1]),a=o-r;C.push({x:[o,r],y:[T,T],xaxis:"x1",name:t.name,fill:"tozeroy",mode:"lines",opacity:.5,visible:"legendonly",legendgroup:t.name,marker:{color:w[n]}});var i=z(W(r,o,-_,o-r),2),u=i[0],c=i[1];C.push({type:"scatter",mode:"lines",fill:"tozeroy",fillcolor:w[n],hoveron:"points+fills",x:u,y:c,xaxis:"x2",showlegend:!1,hoverinfo:"name",name:"[".concat(r,"->").concat(o,"] ").concat(t.name),marker:{color:w[n]},line:{width:2}}),M.push({x:(r+o)/2,y:-_/2,showarrow:!1,text:t.name,width:a,align:a<.2*P?"right":"center"})})),!0===l&&x.forEach((function(t){var n=Number(t.split("-")[0]),e=Number(t.split("-")[1]),o=a[r.indexOf(t)],i=z(W(n,e,-_/2,e-n),2),u=i[0],c=i[1];C.push({type:"scatter",mode:"lines",x:u,y:c,fill:"tozeroy",fillcolor:j[B(new Set(a)).indexOf(o)],hoveron:"points+fills",xaxis:"x2",hoverinfo:"name+text",name:o,text:"[".concat(n,"->").concat(e,"] "),showlegend:!1,marker:{color:j[B(new Set(a)).indexOf(o)]},line:{width:33}})}));var I=[{text:"<b>".concat(g.length+x.length," Mutations</b>"),x:.01,xref:"paper",y:1.1,yref:"paper",showarrow:!1,align:"left"}];return{data:[{type:"scatter",mode:"markers",x:g,y:R,xaxis:"x1",hoverinfo:D,text:F,error_y:{type:"data",symmetric:!1,array:0,arrayminus:R,thickness:p,width:0,color:f},transforms:[{type:"groupby",groups:a,nameformat:"%{group}",styles:B(new Set(a)).map((function(t,n){return{target:t,value:{marker:{size:h,symbol:v[n],color:j[n]}}}}))}]}].concat(C),globalAnnotation:I,domainAnnotations:M}}},{key:"prepareLayout",value:function(t){var e=t.data,r=t.globalAnnotation,o=t.domainAnnotations,a=N(n.defaultProps,this.props),i=a.xlabel,u=a.ylabel,c=a.rangeSlider,l=this.state,s=l.xStart,f=l.xEnd,p=!1;(Boolean(!s)||Boolean(!f))&&(p=!0,e.forEach((function(t){var n=Math.min.apply(null,t.x),e=Math.max.apply(null,t.x);(s>n||Boolean(!s))&&(s=n),(f<e||Boolean(!f))&&(f=e)})));var y={legend:{orientation:"v",x:1,y:1.05,bgcolor:"rgba(255, 255, 255, 0)"},hovermode:"closest",xaxis:{title:i,showgrid:!1,zeroline:!1,autorange:Boolean(!s),range:[s,f],anchor:"y"},xaxis2:{scaleanchor:"x",autorange:Boolean(!s),range:[s,f],anchor:"y",overlaying:"x"},yaxis:{title:u,showgrid:!1,ticks:"inside"},margin:{t:100,l:40,r:0,b:40},annotations:o.concat(r)};return!0===c&&(y.xaxis.rangeslider=!0===p?{range:[.98*s,1.02*f]}:{}),y}}])&&R(e.prototype,r),a&&R(e,a),n}(r.Component);H.propTypes=C.c,H.defaultProps=C.b}}]);