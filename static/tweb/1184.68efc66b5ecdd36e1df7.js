"use strict";(self.webpackChunktelegram_t=self.webpackChunktelegram_t||[]).push([[1184],{31184:(t,e,n)=>{n.r(e),n.d(e,{create:()=>It});const o=window.devicePixelRatio||1,a={begin:.8,end:1},i=300,l=500,s=10,r=320,c=15,d=2,u=.45,h=10,f=.5,m=.02,p=20,y="300 10px Helvetica, Arial, sans-serif",g=45,v=50,x=30,M=1,b=.1,w=40,k=10,S=1,L=8,T=4,F=i,A=.1,P=.5,$=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],I=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],C=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],V=864e5,O=200,E=4,W=1e3,D=1,H=.5,Z=["begin 200 fast","end 200 fast","labelFromIndex 200 fast floor","labelToIndex 200 fast ceil","xAxisScale 400","yMinViewport","yMaxViewport","yMinViewportSecond","yMaxViewportSecond","yMinMinimap","yMaxMinimap","yMinMinimapSecond","yMaxMinimapSecond","yAxisScale","yAxisScaleSecond"];function R(t){const e=t.length;let n=t[0],o=t[0];for(let a=0;a<e;a++){const e=t[a];e>n?n=e:e<o&&(o=e)}return{max:n,min:o}}function N(t){return[].concat.apply([],t)}function X(t){const e=[],n=t.length;for(let o=0,a=t[0].length;o<a;o++){e[o]=0;for(let a=0;a<n;a++)e[o]+=t[a][o]}return e}function z(t,e){return new Proxy({},{get:(n,o)=>void 0!==n[o]?n[o]:void 0!==e[o]?e[o]:t[o]})}function q(t,e){let n,o,a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=null;return function(){n=!0;for(var l=arguments.length,s=new Array(l),r=0;r<l;r++)s[r]=arguments[r];o=s,i||(a&&(n=!1,t(...o)),i=window.setInterval((()=>{if(!n)return window.clearInterval(i),void(i=null);n=!1,t(...o)}),e))}}function B(t){let e,n=!1;return function(){for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];e=a,n||(n=!0,requestAnimationFrame((()=>{n=!1,t(...e)})))}}const Y=[1,2,8,18,50,100,250,500,1e3,2500,5e3,1e4,25e3,5e4,1e5,25e4,5e5,1e6,25e5,5e6,1e7,25e6,5e7,1e8];function j(t){return Y[t]||Y[Y.length-1]}function U(t,e,n){const o=Math.min(e+s,n-e);return o<=4*s&&(t=Math.min(1,t,o/(4*s))),t}function J(t,e){return e-s<=2*s?Math.min(1,t,(e-s)/(2*s)):t}function _(t){return Math.min(...t.getSize())*u}function K(t){return t>=W?Math.min(t/1e3,1):0}function G(t,e,n){const o={begin:0,end:1},a=function(){const e={};return t.datasets.forEach((t=>{let{key:n}=t;e[n]=!0})),e}(),l=function(){const e=[],n=t.datasets.map((t=>{let{key:e}=t;return`opacity#${e} 300`}));return N([Z,n]).forEach((t=>{const[n,o,...a]=t.split(" ");e.push({prop:n,duration:o,options:a})})),e}(),s=function(t){const e={};let n=null,o=null,a=null,l=null,s=null,r=null;function c(t){delete e[t],d()||(cancelAnimationFrame(n),n=null)}function d(){return Boolean(Object.keys(e).length)}function u(t){return!(!t&&(r||s))&&(null===a||a>=E)}function h(){const r=!u();!o||Date.now()-o>=O?(l&&(a=l,s||u(!0)||(s=Date.now())),o=Date.now(),l=0):l++;const f={};Object.keys(e).forEach((t=>{const{startedAt:n,from:o,to:a,duration:l=i,options:s}=e[t],r=Math.min(1,(Date.now()-n)/l);let d=o+(a-o)*(u=r,1-Math.pow(1-u,1.675));var u;s.includes("ceil")?d=Math.ceil(d):s.includes("floor")&&(d=Math.floor(d)),e[t].current=d,e[t].progress=r,f[t]=d,1===r&&c(t)})),r||t(f),d()&&(n=requestAnimationFrame(h))}return{add:function(t,a,i,c,d){e[t]={from:a,to:i,duration:c,options:d,current:a,startedAt:Date.now(),progress:0},n||(o=null,l=null,s&&Date.now()-s>5e3&&(s=null),r=Boolean(s)||!u(!0),n=requestAnimationFrame(h))},remove:c,get:function(t){return e[t]},getState:function(){const t={};return Object.keys(e).forEach((n=>{const{current:o,from:a,to:i,progress:l}=e[n];t[n]=o,t[`${n}From`]=a,t[`${n}To`]=i,t[`${n}Progress`]=l})),t},isRunning:d,isFast:u}}(d),r=B(d);let c={};function d(){const t=s.isFast()?z(c,s.getState()):c;t.static=c,n(t)}return{update:function(){let{range:n={},filter:i={},focusOn:d,minimapDelta:u}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},h=arguments.length>1?arguments[1]:void 0;Object.assign(o,n),Object.assign(a,i);const f=c;c=function(t,e,n,o,a,i,l){const{begin:s,end:r}=n,c=t.xLabels.length-1,d=Math.max(0,Math.ceil(c*s)),u=Math.min(Math.floor(c*r),c),h=function(t,e,n){return o=(n-e)/Math.floor(t/g),Math.ceil(Math.log2(o||1));var o}(e.width,d,u),f=t.isStacked?function(t,e,n,o,a){const i=t.datasets.filter((t=>e[t.key])).map((t=>{let{values:e}=t;return e})),l=i.length?X(i):[],{max:s=a.yMaxMinimap}=R(l),{max:r=a.yMaxViewport}=R(l.slice(n,o+1));return{yMinViewport:0,yMaxViewport:r,yMinMinimap:0,yMaxMinimap:s}}(t,o,d,u,l):function(t,e,n,o,a){const i=t.hasSecondYAxis&&t.datasets.slice(-1)[0],l=t.datasets.filter((t=>e[t.key]&&t!==i)),s=Q(t,n,o,a,l);if(i){const{yMinViewport:e,yMaxViewport:l,yMinMinimap:r,yMaxMinimap:c}=Q(t,n,o,a,[i]);Object.assign(s,{yMinViewportSecond:e,yMaxViewportSecond:l,yMinMinimapSecond:r,yMaxMinimapSecond:c})}return s}(t,o,d,u,l),m=tt(e.height,f.yMinViewport,f.yMaxViewport),p=t.hasSecondYAxis&&tt(e.height,f.yMinViewportSecond,f.yMaxViewportSecond),y=j(m);if(f.yMinViewport-=f.yMinViewport%y,p){const t=j(p);f.yMinViewportSecond-=f.yMinViewportSecond%t}const v={};return t.datasets.forEach((t=>{let{key:e}=t;v[`opacity#${e}`]=o[e]?1:0})),Object.assign({totalXWidth:c,xAxisScale:h,yAxisScale:m,yAxisScaleSecond:p,labelFromIndex:Math.max(0,d-1),labelToIndex:Math.min(u+1,c),filter:Object.assign({},o),focusOn:void 0!==a?a:l.focusOn,minimapDelta:void 0!==i?i:l.minimapDelta},f,v,n)}(t,e,o,a,d,u,f),h||l.forEach((t=>{let{prop:e,duration:n,options:o}=t;const a=s.get(e),i=a?a.to:f[e];if(void 0!==i&&i!==c[e]){const t=a?o.includes("fast")?f[e]:a.current:f[e];a&&s.remove(e),s.add(e,t,c[e],n,o)}})),s.isRunning()&&s.isFast()||r()},hasAnimations:function(){return s.isFast()}}}function Q(t,e,n,o,a){const{min:i=o.yMinMinimap,max:l=o.yMaxMinimap}=R(N(a.map((t=>{let{yMax:e,yMin:n}=t;return[e,n]})))),s=i/l>b?i:0;let r,c;if(0===e&&n===t.xLabels.length-1)r=s,c=l;else{const t=R(N(a.map((t=>{let{values:e}=t;return e})).map((t=>t.slice(e,n+1))))),i=void 0!==t.min?t.min:o.yMinViewport;c=void 0!==t.max?t.max:o.yMaxViewport,r=i/c>b?i:0}return{yMinViewport:r,yMaxViewport:c,yMinMinimap:s,yMaxMinimap:l}}function tt(t,e,n){const o=t-x,a=n-e,i=Math.floor(o/v);return l=a/i,Y.findIndex((t=>t>=l))||Y.length-1;var l}const et=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div";return document.createElement(t)};function nt(t,e,n){t.addEventListener(e,n)}function ot(t,e,n){t.removeEventListener(e,n)}function at(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const a=t.parentNode;a.classList.add("lovely-chart--transition-container");const i=et(t.tagName);i.className=`${n} lovely-chart--transition lovely-chart--position-${o?"top":"bottom"} lovely-chart--state-hidden`,i.innerHTML=e;const l=n.length?`.${n.split(" ").join(".")}`:"";return a.querySelectorAll(`${l}.lovely-chart--state-hidden`).forEach((t=>t.remove())),t.classList.add("lovely-chart--transition"),t.classList.remove("lovely-chart--position-bottom","lovely-chart--position-top"),t.classList.add(o?"lovely-chart--position-bottom":"lovely-chart--position-top"),a.insertBefore(i,t.nextSibling),function(t){t.classList.remove("lovely-chart--state-animated"),t.classList.add("lovely-chart--state-animated"),t.classList.remove("lovely-chart--state-hidden")}(i),function(t){t.classList.remove("lovely-chart--state-animated"),t.classList.add("lovely-chart--state-animated"),t.classList.add("lovely-chart--state-hidden")}(t),i}function it(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return t>=1e6?lt(t/1e6,e)+"M":t>=1e3?lt(t/1e3,e)+"K":t}function lt(t,e){return t.toFixed(e).replace(/(\d{3,})\.\d+/,"$1").replace(/\.0+$/,"")}function st(t){return String(t).replace(/\d(?=(\d{3})+$)/g,"$& ")}function rt(t){return Number(t/10**9)}function ct(t){let{isShort:e=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return dt(t,{isShort:e,displayWeekDay:!0})}function dt(t){let{isShort:e=!1,displayWeekDay:n=!1,displayYear:o=!0,displayHours:a=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{value:i}=t,l=new Date(i),s=e?C:I;let r=`${l.getUTCDate()} ${$[l.getUTCMonth()]}`;return n&&(r=`${s[l.getUTCDay()]}, `+r),o&&(r+=` ${l.getUTCFullYear()}`),a&&(r+=`, ${("0"+l.getUTCHours()).slice(-2)}:${("0"+l.getUTCMinutes()).slice(-2)}`),r}function ut(){return document.documentElement.classList.contains("theme-dark")?"skin-night":"skin-day"}let ht=ut();const ft={"skin-day":{background:"#FFFFFF","text-color":"#222222","minimap-mask":"#E2EEF9/0.6","minimap-slider":"#C0D1E1","grid-lines":"#182D3B/0.1","zoom-out-text":"#108BE3","tooltip-background":"#FFFFFF","tooltip-arrow":"#D2D5D7",mask:"#FFFFFF/0.5","x-axis-text":"#252529/0.6","y-axis-text":"#252529/0.6"},"skin-night":{background:"#242F3E","text-color":"#FFFFFF","minimap-mask":"#304259/0.6","minimap-slider":"#56626D","grid-lines":"#FFFFFF/0.1","zoom-out-text":"#48AAF0","tooltip-background":"#1c2533","tooltip-arrow":"#D2D5D7",mask:"#242F3E/0.5","x-axis-text":"#A3B1C2/0.6","y-axis-text":"#A3B1C2/0.6"}},mt=document.createElement("style");mt.type="text/css",mt.appendChild(document.createTextNode("")),document.head.appendChild(mt);const pt=mt.sheet;function yt(t){const e={},n=".lovely-chart--color";return["skin-day","skin-night"].forEach((o=>{e[o]={},Object.keys(ft[o]).forEach((t=>{e[o][t]=vt(ft[o][t])})),Object.keys(t).forEach((a=>{e[o][`dataset#${a}`]=vt(t[a]),xt(pt,`.lovely-chart--tooltip-dataset-value${n}-${t[a].slice(1)}`,`color: ${t[a]}`),xt(pt,`.lovely-chart--button${n}-${t[a].slice(1)}`,`border-color: ${t[a]}; color: ${t[a]}`),xt(pt,`.lovely-chart--button.lovely-chart--state-checked${n}-${t[a].slice(1)}`,`background-color: ${t[a]}`)}))})),e}function gt(t,e,n){return function(t){let[e,n,o,a=1]=t;return`rgba(${e}, ${n}, ${o}, ${a*(arguments.length>1&&void 0!==arguments[1]?arguments[1]:1)})`}(t[ht][e],n)}function vt(t){const[e,n]=t.replace("#","").split("/");return[parseInt(e.slice(0,2),16),parseInt(e.slice(2,4),16),parseInt(e.slice(4,6),16),n?parseFloat(n):1]}function xt(t,e,n){t.insertRule(`${e} { ${n} }`,t.cssRules.length)}function Mt(t){const{begin:e,end:n,totalXWidth:o,yMin:a,yMax:i,availableWidth:l,availableHeight:s,xPadding:r=0,yPadding:c=0}=t;let d=l;0===e&&(d-=r),1===n&&(d-=r);const u=d/((n!==e?n-e:1)*o);let h=e*o*u;0===e&&(h-=r);const f=s-c,m=f/(i-a),p=a*m;return{findClosestLabelIndex:function(t){return Math.round((t+h)/u)},copy:function(e,n){return Mt(z(t,e))},getCenter:function(){return[l/2,s-f/2]},getSize:function(){return[l,f]},getParams:function(){return t},getState:function(){return{xFactor:u,xOffsetPx:h,availableHeight:s,yFactor:m,yOffsetPx:p}}}}function bt(t,e,n){const{xFactor:o,xOffsetPx:a,availableHeight:i,yFactor:l,yOffsetPx:s}=t.getState();return[e*o-a,i-(n*l-s)]}function wt(t,e){let{width:n,height:a}=e;const i=et("canvas");i.width=n*o,i.height=a*o,i.style.width="100%",i.style.height=`${a}px`;const l=i.getContext("2d");return l.scale(o,o),t.appendChild(i),{canvas:i,context:l}}function kt(t,e){e.clearRect(0,0,t.width,t.height)}function St(t,e,n,o,a,i){let l=e.map((t=>{let{values:e}=t;return e.slice(n.from,n.to+1)}));t.isPie&&!i&&(l=function(t){return t.map((t=>[t.reduce(((t,e)=>t+e),0)]))}(l));const s=l.map(((e,a)=>e.map(((e,i)=>{let l=e;return t.isStacked&&(l*=o[a]),{labelIndex:n.from+i,value:e,visibleValue:l,stackOffset:0,stackValue:l}}))));return t.isPercentage&&function(t,e){const n=function(t){return X(t.map((t=>t.map((t=>{let{visibleValue:e}=t;return e})))))}(t);t.forEach((t=>{t.forEach(((t,o)=>{t.percent=t.visibleValue/n[o],t.visibleValue=t.percent*e.yMax}))}))}(s,a),t.isStacked&&function(t){const e=[];t.forEach((t=>{t.forEach(((t,n)=>{void 0===e[n]&&(e[n]=0),t.stackOffset=e[n],e[n]+=t.visibleValue,t.stackValue=e[n]}))}))}(s),s}document.documentElement.addEventListener("darkmode",(()=>{ht=ut()}));const Lt=(()=>{let t=1/Math.pow(2,22),e=1e5;function n(t,e,n,o,a){let i,l=+e[0],s=+e[1];i=+((t[0]-l)*o[0]+(t[1]-s)*o[1])*a,i>1?(l=+n[0],s=+n[1]):i>0&&(l+=+o[0]*i,s+=+o[1]*i);let r=+t[0]-l,c=+t[1]-s;return+r*r+c*c}return function(o,a,i){if(o.length<6)return function(){return{points:o,indexes:a,removed:[]}};let l=function(o,a){let i,l=o.length,s=[],r=[];for(let t=0,e=o.length;t<e;++t)s[t]=0;a||(a=[]);let c=0;for(let t=0,n=a.length;t<n;++t)s[a[t]]=e;function d(){let l=r.pop(),c=function(l){let c=l.start,d=l.end,u=l.record,h=l.currentLimit,f=0;if(!u){let i=-1,l=[o[d][0]-o[c][0],o[d][1]-o[c][1]];for(let t=0,n=a.length;t<n;++t){let n=a[t];if(n>c){if(n<d){i=n,f=e;break}break}}if(i<0){if(Math.abs(l[0])>t||Math.abs(l[1])>t){let t=1/(l[0]*l[0]+l[1]*l[1]);for(let e=c+1;e<d;++e){let a=n(o[e],o[c],o[d],l,t);a>f&&(i=e,f=a)}}else i=Math.round(.5*(c+d)),f=h;s[i]=f}u={start:c,end:d,index:i,distance:f}}return u.index&&u.distance>i&&(u.index-c>=2&&r.push({start:c,end:u.index,record:u.left,currentLimit:u.distance,parent:u,parentProperty:"left"}),d-u.index>=2&&r.push({start:u.index,end:d,record:u.right,currentLimit:u.distance,parent:u,parentProperty:"right"})),u}(l);return l.parent&&l.parentProperty&&(l.parent[l.parentProperty]=c),c}return function(t){for(i=t,r.push({start:0,end:l-1,record:c,currentLimit:e}),c=d();r.length;)d();return s}}(o,i);return function(t){let e=[],n=[],i=[],s=t*t,r=l(s);for(let t=0,l=o.length;t<l;t++)r[t]>=s||0==t||t==l-1?(e.push(o[t]),n.push(a?a[t]:t)):i.push(t);return{points:e,indexes:n,removed:i}}}})();function Tt(t,e,n,o,a,i,l,s,r,c,d,u,p){if(n.datasets.forEach(((y,g)=>{let{key:v,type:x,hasOwnYAxis:M}=y;if(!c[g])return;const b={color:gt(d,`dataset#${v}`),lineWidth:r,opacity:n.isStacked?1:c[g],simplification:p},w="pie"===x&&u?"bar":x;let k=M?l:a[g],S=M?s:i;if("area"===w){const{yMin:t,yMax:e}=i.getParams(),n=e-t,l=[{labelIndex:o.from,stackValue:0},{labelIndex:o.to,stackValue:0}],s=[{labelIndex:o.to,stackValue:n},{labelIndex:o.from,stackValue:n}];k=N([a[g-1]||l,s])}if("pie"===w&&(b.center=i.getCenter(),b.radius=_(i),b.pointerVector=e.focusOn),"bar"===w){const[t]=bt(i,0,0),[n]=bt(i,1,0);b.lineWidth=n-t,b.focusOn=e.focusOn}!function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];switch(t){case"line":return function(t,e,n,o){t.beginPath();let a=[];for(let t=0,o=e.length;t<o;t++){const{labelIndex:o,stackValue:i}=e[t];a.push(bt(n,o,i))}o.simplification&&(a=Lt(a)(o.simplification).points),a.forEach((e=>{let[n,o]=e;t.lineTo(n,o)})),t.save(),t.strokeStyle=o.color,t.lineWidth=o.lineWidth,t.globalAlpha=o.opacity,t.lineJoin="bevel",t.lineCap="butt",t.stroke(),t.restore()}(...n);case"bar":return function(t,e,n,o){const{yMin:a}=n.getParams();t.save(),t.globalAlpha=o.opacity,t.fillStyle=o.color;for(let i=0,l=e.length;i<l;i++){const{labelIndex:l,stackValue:s,stackOffset:r=0}=e[i],[,c]=bt(n,l,Math.max(r,a)),[d,u]=bt(n,l,s),h=d-o.lineWidth/2,m=u,p=1===o.opacity?o.lineWidth+f:o.lineWidth+f*o.opacity,y=c-u;t.fillRect(h,m,p,y)}t.restore()}(...n);case"step":return function(t,e,n,o){t.beginPath();let a=[];for(let t=0,o=e.length;t<o;t++){const{labelIndex:o,stackValue:i}=e[t];a.push(bt(n,o-f,i),bt(n,o+f,i))}a.forEach((e=>{let[n,o]=e;t.lineTo(n,o)})),t.save(),t.strokeStyle=o.color,t.lineWidth=o.lineWidth,t.globalAlpha=o.opacity,t.stroke(),t.restore()}(...n);case"area":return function(t,e,n,o){t.beginPath();let a=[];for(let t=0,o=e.length;t<o;t++){const{labelIndex:o,stackValue:i}=e[t];a.push(bt(n,o,i))}o.simplification&&(a=Lt(a)(o.simplification).points),a.forEach((e=>{let[n,o]=e;t.lineTo(n,o)})),t.save(),t.fillStyle=o.color,t.lineWidth=o.lineWidth,t.globalAlpha=o.opacity,t.lineJoin="bevel",t.lineCap="butt",t.fill(),t.restore()}(...n);case"pie":!function(t,e,n,o){const{visibleValue:a,stackValue:i,stackOffset:l=0}=e[0];if(!a)return;const{yMin:s,yMax:r}=n.getParams(),c=1/(r-s),d=a*c,u=l*c*Math.PI*2-Math.PI/2,f=i*c*Math.PI*2-Math.PI/2,{radius:p=120,center:[y,g],pointerVector:v}=o,x=v&&u<=v.angle&&v.angle<f&&v.distance<=p?h:0,M=(u+f)/2,b=Math.cos(M),w=Math.sin(M),k=b*x,S=w*x;if(t.save(),t.beginPath(),t.fillStyle=o.color,t.moveTo(y+k,g+S),t.arc(y+k,g+S,p,u,f),t.lineTo(y+k,g+S),t.fill(),d>=m){t.font=`700 ${function(t,e){return(e+200*t)/10}(d,p)}px Helvetica, Arial, sans-serif`,t.textAlign="center",t.textBaseline="middle",t.fillStyle="white";const e=function(t,e,n){return t>=.99?0:Math.min(1-Math.log(30*t)/5,.8)*e}(d,p);t.fillText(`${Math.round(100*d)}%`,y+b*e+k,g+w*e+S)}t.restore()}(...n)}}(w,t,k,S,b)})),e.focusOn&&(n.isBars||n.isSteps)){const[o]=bt(i,0,0),[a]=bt(i,1,0);!function(t,e,n){const[o,a]=e.getCenter(),[i,l]=e.getSize(),[s]=bt(e,n.focusOn,0);t.fillStyle=n.color,t.fillRect(o-i/2,a-l/2,s-n.lineWidth/2+f,l),t.fillRect(s+n.lineWidth/2,a-l/2,i-(s+n.lineWidth/2),l)}(t,i,{focusOn:e.focusOn,color:gt(d,"mask"),lineWidth:n.isSteps?a-o+r:a-o})}}function Ft(t,e){let n=null,o=null;function a(t){n=t,"mousedown"===t.type?(nt(document,"mousemove",s),nt(document,"mouseup",i)):"touchstart"===t.type&&(nt(document,"touchmove",s),nt(document,"touchend",i),nt(document,"touchcancel",i),void 0===t.pageX&&(t.pageX=t.touches[0].pageX)),e.draggingCursor&&document.body.classList.add(`cursor-${e.draggingCursor}`),e.onCapture&&e.onCapture(t),e.onLongPress&&(o=setTimeout((()=>e.onLongPress()),l))}function i(t){n&&(o&&(clearTimeout(o),o=null),e.draggingCursor&&document.body.classList.remove(`cursor-${e.draggingCursor}`),ot(document,"mouseup",i),ot(document,"mousemove",s),ot(document,"touchcancel",i),ot(document,"touchend",i),ot(document,"touchmove",s),n=null,e.onRelease&&e.onRelease(t))}function s(t){n&&(o&&(clearTimeout(o),o=null),"touchmove"===t.type&&void 0===t.pageX&&(t.pageX=t.touches[0].pageX),e.onDrag&&e.onDrag(t,n,{dragOffsetX:t.pageX-n.pageX}))}nt(t,"mousedown",a),nt(t,"touchstart",a)}function At(t,e,n,o,a,i){let l,s,r,c,d,u,h,f,m,y,g,v=null,M=!1,b=!1;const w=B($),k=q(C,100,!0,!0);function S(t){if(t.target===m||m.contains(t.target)||v)return;b=!1;const e=u.getBoundingClientRect();y=(t.touches?t.touches[0].clientX:t.clientX)-e.left,g=(t.touches?t.touches[0].clientY:t.clientY)-e.top,w()}function L(t){null===y||t.target===u||u.contains(t.target)||A()}function T(t){if(!b&&e.isZoomable){const e=v;v=null,S(t);const n=P();n!==e&&(v=n),a(n)}}function F(){if(m.classList.contains("lovely-chart--state-inactive"))return;const t=r.findClosestLabelIndex(y);a(t)}function A(t){y=null,v=null,kt(h,f),V(),!t&&i&&i(null)}function P(){const t=r.findClosestLabelIndex(y);return t<l.labelFromIndex||t>l.labelToIndex?null:t}function $(a){if(!y||!l||b)return;const u=P();if(null===u)return void A(a);const v=O(),M=!e.isPie||v.distance<=_(r);function w(t,n){return e.isPie?t.slice(l.labelFromIndex,l.labelToIndex+1).reduce(((t,e)=>t+e),0):t[n]}!a&&i&&(e.isPie?i(v):i(u));const[S]=bt(r,u,0),L=e.datasets.map(((t,e)=>{let{key:n,name:o,values:a,hasOwnYAxis:i}=t;return{key:n,name:o,value:w(a,u),hasOwnYAxis:i,originalIndex:e}})).filter((t=>{let{key:e}=t;return l.filter[e]}));L.length&&M?function(n,o){m.style.transform=`translate3D(${function(n){const o=(l.labelFromIndex+l.labelToIndex)/2,{angle:a}=O(),i=(e.isPie?a>Math.PI/2:n<o)?y+p:y-(m.offsetWidth+p);return Math.min(Math.max(0,i),t.offsetWidth-m.offsetWidth)}(o)}px, ${e.isPie?`${g}px`:0}, 0)`,m.classList.add("lovely-chart--state-shown"),e.isPie?C(null,n):k(function(t,e){switch(t.tooltipFormatter){case"statsFormatDayHourFull":return`${t.xLabels[e].value}:00`;case"statsTooltipFormat('day')":return dt(t.xLabels[e]);case"statsTooltipFormat('hour')":case"statsTooltipFormat('5min')":return n=t.xLabels[e],new Date(n.value).toString().match(/(\d+:\d+):/)[1];default:return t.xLabels[e].text}var n}(e,o),n)}(L,u):V(),kt(h,f),(e.isLines||e.isAreas)&&(e.isLines&&function(t,e){t.forEach((t=>{let{value:n,key:a,hasOwnYAxis:i,originalIndex:u}=t;const h=e-l.labelFromIndex,m=i?c[h]:s[u][h];if(!m)return;const[p,y]=bt(i?d:r,e,m.stackValue);!function(t,e,n){let[o,a]=t;f.strokeStyle=e,f.fillStyle=n,f.lineWidth=2,f.beginPath(),f.arc(o,a,4,0,2*Math.PI),f.fill(),f.stroke()}([p,y],gt(o,`dataset#${a}`),gt(o,"background"))}))}(L,u),function(t,e,n){f.strokeStyle=n,f.lineWidth=1,f.beginPath(),f.moveTo(t,0),f.lineTo(t,e),f.stroke()}(S,n.height-x,gt(o,"grid-lines")))}function I(t,n,o){if(!e.isPercentage)return;if(e.isPie)return void Array.from(t.querySelectorAll(".lovely-chart--percentage-title")).forEach((t=>t.remove()));const a=o?Math.round(n/o*100):0,i=t.querySelector(".lovely-chart--percentage-title:not(.lovely-chart--state-hidden)");if(i)i.innerHTML=`${a}%`;else{const e=et("span");e.className="lovely-chart--percentage-title lovely-chart--position-left",e.innerHTML=`${a}%`,t.prepend(e)}}function C(t,n){!function(t){const n=m.children[0];if(e.isPie)n&&(n.style.display="none");else{"none"===n.style.display&&(n.style.display="");const e=n.querySelector(":not(.lovely-chart--state-hidden)");n.innerHTML&&e?e.innerHTML=t:n.innerHTML=`<span>${t}</span>`}}(t),function(t){const n=m.children[1];e.isPie&&n.classList.add("lovely-chart--tooltip-legend-pie"),Array.from(n.children).forEach((t=>{!e.isPie&&n.classList.contains("lovely-chart--tooltip-legend-pie")?t.remove():t.setAttribute("data-present","false")}));const o=t.reduce(((t,e)=>t+e.value),0),a=O(),i=e.isPie?t.filter(((e,n)=>{let{value:i}=e;return function(t,e,n,o,a){const i=o>0?t.slice(0,o).reduce(((t,e)=>t+e.value),0):0,l=i/n*Math.PI*2-Math.PI/2,s=(i+e)/n*Math.PI*2-Math.PI/2;return a&&l<=a.angle&&a.angle<s&&a.distance<=_(r)}(t,i,o,n,a)})):t;i.forEach((t=>{const a=n.querySelector(`[data-name="${t.name}"]`);a?function(t){let{key:n,value:o}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2?arguments[2]:void 0;t.setAttribute("data-present","true");const i=t.querySelector(`.lovely-chart--tooltip-dataset-value.lovely-chart--color-${e.colors[n].slice(1)}:not(.lovely-chart--state-hidden)`);e.isCurrency?i.innerHTML=rt(o):i.innerHTML=st(o),I(t,o,a)}(a,t,o):function(t,n,o){let{name:a,key:i,value:l}=n;const s=`lovely-chart--tooltip-dataset-value lovely-chart--position-right lovely-chart--color-${e.colors[i].slice(1)}`,r=et();r.className="lovely-chart--tooltip-dataset",r.setAttribute("data-present","true"),r.setAttribute("data-name",a),r.innerHTML=`<span class="lovely-chart--dataset-title">${a}</span><span class="${s}">${st(l)}</span>`,I(r,l,o);const c=t.querySelector('[data-total="true"]');c?t.insertBefore(r,c):t.appendChild(r)}(n,t,o)})),(e.isBars||e.isSteps)&&e.isStacked&&function(t,e){const n=t.querySelector('[data-total="true"]');if(n)n.setAttribute("data-present","true"),n.querySelector(".lovely-chart--tooltip-dataset-value:not(.lovely-chart--state-hidden)").innerHTML=e;else{const n=et();n.className="lovely-chart--tooltip-dataset",n.setAttribute("data-present","true"),n.setAttribute("data-total","true"),n.innerHTML=`<span>All</span><span class="lovely-chart--tooltip-dataset-value lovely-chart--position-right">${e}</span>`,t.appendChild(n)}}(n,st(o)),e.isCurrency&&function(t,n){const o=t.querySelector('[data-total="true"]'),a=(parseFloat(n)*e.currencyRate).toFixed(2);if(o)o.setAttribute("data-present","true"),o.querySelector(".lovely-chart--tooltip-dataset-value:not(.lovely-chart--state-hidden)").innerHTML=`$${a}`;else{const e=et();e.className="lovely-chart--tooltip-dataset",e.setAttribute("data-present","true"),e.setAttribute("data-total","true"),e.innerHTML=`<span>USD ≈</span><span class="lovely-chart--tooltip-dataset-value lovely-chart--position-right">$${a}</span>`,t.appendChild(e)}}(n,rt(o)),Array.from(n.querySelectorAll('[data-present="false"]')).forEach((t=>{t.remove()}))}(n)}function V(){m.classList.remove("lovely-chart--state-shown")}function O(){const{width:t,height:e}=u.getBoundingClientRect(),n=[t/2,e/2],o=Math.atan2(g-n[1],y-n[0]),a=Math.sqrt((y-n[0])**2+(g-n[1])**2);return{angle:o>=-Math.PI/2?o:2*Math.PI+o,distance:a}}return u=et(),u.className="lovely-chart--tooltip",function(){const{canvas:t,context:e}=wt(u,n);h=t,f=e}(),m=et(),m.className="lovely-chart--tooltip-balloon"+(e.isZoomable?"":" lovely-chart--state-inactive"),m.innerHTML='<div class="lovely-chart--tooltip-title"></div><div class="lovely-chart--tooltip-legend"></div><div class="lovely-chart--spinner"></div>',"ontouchstart"in window&&e.isZoomable&&nt(m,"click",F),u.appendChild(m),"ontouchstart"in window?(nt(u,"touchmove",S),nt(u,"touchstart",S),nt(document,"touchstart",L)):(nt(u,"mousemove",S),nt(u,"click",T),nt(document,"mousemove",L)),t.appendChild(u),{update:function(t,e,n,o,a){l=t,s=e,r=n,c=o,d=a,$(!0)},toggleLoading:function(t){m.classList.toggle("lovely-chart--state-loading",t),t||A()},toggleIsZoomed:function(t){t!==M&&(b=!0),M=t,m.classList.toggle("lovely-chart--state-inactive",t)}}}function Pt(t){const{title:e,labelFormatter:n,tooltipFormatter:o,isStacked:a,isPercentage:i,isCurrency:l,currencyRate:s,hasSecondYAxis:r,onZoom:c,minimapRange:d,hideCaption:u,zoomOutLabel:h}=t,{datasets:f,labels:m}=function(t){const{type:e,labels:n,datasets:o,hasSecondYAxis:a}=t;return{labels:$t(n),datasets:o.map(((t,n)=>{let{name:i,color:l,values:s}=t;const{min:r,max:c}=R(s);return{type:e,key:`y${n}`,name:i,color:l,values:$t(s),hasOwnYAxis:a&&n===o.length-1,yMin:r,yMax:c}}))}}(t),p={};let y=1/0,g=-1/0;f.forEach((t=>{let{key:e,color:n,yMin:o,yMax:a}=t;p[e]=n,o<y&&(y=o),a>g&&(g=a)}));let v,x=n;switch(l&&(x="statsFormat('day')"),x){case"statsFormatDayHour":v=function(t){return t.map((t=>({value:t,text:`${t}:00`})))}(m);break;case"statsFormat('day')":v=function(t){return t.map((t=>{const e=new Date(t);return{value:t,text:`${e.getDate()} ${$[e.getMonth()]}`}}))}(m);break;case"statsFormat('hour')":case"statsFormat('5min')":v=function(t){return t.map((t=>({value:t,text:new Date(t).toString().match(/(\d+:\d+):/)[1]})))}(m);break;default:v=function(t){return t.map(((t,e)=>({value:e,text:t})))}(m)}const M={title:e,labelFormatter:n,tooltipFormatter:o,xLabels:v,datasets:f,isStacked:a,isPercentage:i,isCurrency:l,currencyRate:s,hasSecondYAxis:r,onZoom:c,isLines:"line"===t.type,isBars:"bar"===t.type,isSteps:"step"===t.type,isAreas:"area"===t.type,isPie:"pie"===t.type,yMin:y,yMax:g,colors:p,minimapRange:d,hideCaption:u,zoomOutLabel:h};return M.shouldZoomToPie=!M.onZoom&&M.isPercentage,M.isZoomable=M.onZoom||M.shouldZoomToPie,M}function $t(t){return t.slice(0)}function It(t,e){let n,o,i,l,u,h,f,m,p,g,v,b,$=window.innerWidth;const I=Pt(e),C=yt(I.colors),O=function(t,e){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=null;return function(){a?(clearTimeout(a),a=null):n&&t(),a=setTimeout((()=>{o&&t(),a=null}),e)}}((function(){Object.assign(I,Pt(e)),o.remove(),E()}),500,!1,!0);function E(){o=et(),o.className="lovely-chart--container"+(I.shouldZoomToPie?" lovely-chart--container-type-pie":""),t.appendChild(o),h=function(t,e){let n,o,a,i,l,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Zoom out",r=arguments.length>3?arguments[3]:void 0;const c=q(d,100,!1);function d(t){l||(i.innerHTML=t)}function u(){o=at(a,e,"lovely-chart--header-title",!0),o.classList.remove("lovely-chart--transition"),r()}return n=et(),n.className="lovely-chart--header",o=et(),o.className="lovely-chart--header-title",o.innerHTML=e,n.appendChild(o),i=et(),i.className="lovely-chart--header-caption lovely-chart--position-right",n.appendChild(i),t.appendChild(n),{setCaption:c,zoom:function(t){a=at(o,s,"lovely-chart--header-title lovely-chart--header-zoom-out-control"),setTimeout((()=>{nt(a,"click",u)}),500),d(t)},toggleIsZooming:function(t){l=t}}}(o,I.title,I.zoomOutLabel,Y),function(){const{canvas:t,context:e}=wt(o,{width:o.clientWidth,height:r});i=t,l=e,u={width:i.offsetWidth,height:i.offsetHeight}}(),n=G(I,u,W),f=function(t,e,n,o){function a(e,a,i,l,r){let c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,d=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,u=arguments.length>7&&void 0!==arguments[7]&&arguments[7];const h=j(i),f=Math.ceil(l/h)*h,m=Math.floor(r/h)*h;t.font=y,t.textAlign=u?"right":"left",t.textBaseline="bottom",t.lineWidth=1,t.beginPath();for(let e=f;e<=m;e+=h){const[,i]=bt(a,0,e),l=J(c,i);t.fillStyle=gt(o,d||"y-axis-text",l),u?t.fillText(it(e),n.width-s,i-s/2):t.fillText(it(e),s,i-s/2),u?(t.strokeStyle=gt(o,d,c),t.moveTo(n.width-s,i),t.lineTo(n.width-2*s,i)):(t.moveTo(s,i),t.strokeStyle=gt(o,"grid-lines",c),t.lineTo(n.width-s,i))}t.stroke()}return{drawXAxis:function(a,i){t.clearRect(0,n.height-x+1,n.width,x+1);const l=n.height-x/2,s=Math.floor(a.xAxisScale),r=function(t){return Math.pow(2,t)}(s),c=1-(a.xAxisScale-s);t.font=y,t.textAlign="center",t.textBaseline="middle";for(let s=a.labelFromIndex;s<=a.labelToIndex;s++){const a=s-M;if(a%r!=0)continue;const d=e.xLabels[s],[u]=bt(i,s,0);let h=a%(2*r)==0?1:c;h=U(h,u,n.width),t.fillStyle=gt(o,"x-axis-text",h),t.fillText(d.text,u,l)}},drawYAxis:function(i,l,r){const{yAxisScale:d,yAxisScaleFrom:u,yAxisScaleTo:h,yAxisScaleProgress:f=0,yMinViewport:m,yMinViewportFrom:p,yMinViewportTo:g,yMaxViewport:v,yMaxViewportFrom:x,yMaxViewportTo:M,yMinViewportSecond:b,yMinViewportSecondFrom:w,yMinViewportSecondTo:k,yMaxViewportSecond:S,yMaxViewportSecondFrom:L,yMaxViewportSecondTo:T}=i,F=r&&`dataset#${e.datasets[0].key}`,A=void 0!==p||void 0!==x;if(e.isPercentage?function(e){const[,a]=e.getSize();t.font=y,t.textAlign="left",t.textBaseline="bottom",t.lineWidth=1,t.beginPath(),[0,.25,.5,.75,1].forEach((e=>{const i=a-a*e+c;t.fillStyle=gt(o,"y-axis-text",1),t.fillText(100*e+"%",s,i-s/4),t.moveTo(s,i),t.strokeStyle=gt(o,"grid-lines",1),t.lineTo(n.width-s,i)})),t.stroke()}(l):e.isCurrency?function(e,a){const i=a.datasets[0].values.map((t=>rt(t))),l=i.reduce(((t,e)=>t+e),0),r=l/i.length,d=l/(i.length/2),u=l/(i.length/3),h=[0,r,d,u],f=[0,r*a.currencyRate,d*a.currencyRate,u*a.currencyRate],[,m]=e.getSize();t.font=y,t.textAlign="left",t.textBaseline="bottom",t.lineWidth=1,t.beginPath(),h.forEach(((e,a)=>{const l=m-m*(e/Math.max(...i))+c;t.fillStyle=gt(o,"y-axis-text",1),t.fillText(`${e.toFixed(2)} TON`,s,l-s/4),t.textAlign="right",t.fillText(`$${f[a].toFixed(2)}`,n.width-s,l-s/4),t.textAlign="left",t.moveTo(s,l),t.strokeStyle=gt(o,"grid-lines",1),t.lineTo(n.width-s,l)})),t.stroke()}(l,e):a(i,l,Math.round(h||d),void 0!==g?g:m,void 0!==M?M:v,u?f:1,F),f>0&&A&&a(i,l,Math.round(u),void 0!==p?p:m,void 0!==x?x:v,1-f,F),r){const{yAxisScaleSecond:t,yAxisScaleSecondFrom:n,yAxisScaleSecondTo:o,yAxisScaleSecondProgress:l=0}=i,s=`dataset#${e.datasets[e.datasets.length-1].key}`,c=void 0!==w||void 0!==L;a(i,r,Math.round(o||t),void 0!==k?k:b,void 0!==T?T:S,n?l:1,s,!0),l>0&&c&&a(i,r,Math.round(n),void 0!==w?w:b,void 0!==L?L:S,1-l,s,!0)}}}}(l,I,u,C),m=function(t,e,n,o){let i,l,s,r,c,d,u,h,f={};const m=B((function(){const{begin:t,end:e}=f;c.children[0].style.width=100*t+"%",c.children[1].style.width=100*(e-t)+"%",c.children[2].style.width=100*(1-e)+"%"}));function p(t){t.preventDefault(),u=t.target.offsetLeft}function y(){u=null}function g(t,e){let n=Object.assign({},f,t);h&&h.minimapDelta&&!e&&(n=function(t){return{begin:Math.round(t.begin/h.minimapDelta)*h.minimapDelta,end:Math.round(t.end/h.minimapDelta)*h.minimapDelta}}(n)),n.begin===f.begin&&n.end===f.end||(f=n,m(),e||o(f))}return i=et(),i.className="lovely-chart--minimap",i.style.height=`${w}px`,function(){const{canvas:e,context:n}=wt(i,{width:t.offsetWidth-2*k,height:w});l=e,s=n}(),c=et(),c.className="lovely-chart--minimap-ruler",c.innerHTML='<div class="lovely-chart--minimap-mask"></div><div class="lovely-chart--minimap-slider"><div class="lovely-chart--minimap-slider-handle"><span class="lovely-chart--minimap-slider-handle-pin"></span></div><div class="lovely-chart--minimap-slider-inner"></div><div class="lovely-chart--minimap-slider-handle"><span class="lovely-chart--minimap-slider-handle-pin"></span></div></div><div class="lovely-chart--minimap-mask"></div>',d=c.children[1],Ft(d.children[1],{onCapture:p,onDrag:function(t,e,n){let{dragOffsetX:o}=n;const a=r.width-d.offsetWidth,i=Math.max(0,Math.min(u+o-L,a)),l=i+d.offsetWidth;g({begin:i/r.width,end:l/r.width})},onRelease:y,draggingCursor:"grabbing"}),Ft(d.children[0],{onCapture:p,onDrag:function(t,e,n){let{dragOffsetX:o}=n;const a=d.offsetLeft+d.offsetWidth-2*L;g({begin:Math.min(a,Math.max(0,u+o))/r.width})},onRelease:y,draggingCursor:"ew-resize"}),Ft(d.children[2],{onCapture:p,onDrag:function(t,e,n){let{dragOffsetX:o}=n;const a=d.offsetLeft+2*L,i=r.width;g({end:Math.max(a,Math.min(u+L+o,i))/r.width})},onRelease:y,draggingCursor:"ew-resize"}),i.appendChild(c),t.appendChild(i),r={width:l.offsetWidth,height:l.offsetHeight},g(e.minimapRange||a),{update:function(t){const{begin:o,end:a}=t;u||g({begin:o,end:a},!0),e.datasets.length>=T&&(t=t.static),function(t){if(!h)return!0;const{datasets:n}=e;return!!n.some((e=>{let{key:n}=e;return h[`opacity#${n}`]!==t[`opacity#${n}`]}))||h.yMaxMinimap!==t.yMaxMinimap}(t)&&(h=z(t,{focusOn:null}),kt(l,s),function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{datasets:o}=e,a={from:0,to:t.totalXWidth},i={begin:0,end:1,totalXWidth:t.totalXWidth,yMin:t.yMinMinimap,yMax:t.yMaxMinimap,availableWidth:r.width,availableHeight:r.height,yPadding:1},l=o.map((t=>{let{key:e}=t;return h[`opacity#${e}`]})),c=St(e,o,a,l,i,!0),d=Mt(i);let u=null,f=null;if(e.hasSecondYAxis){const n=o.find((t=>t.hasOwnYAxis)),i={yMin:t.yMinMinimapSecond,yMax:t.yMaxMinimapSecond};u=St(e,[n],a,l,i)[0],f=d.copy(i)}const m=K(c.reduce(((t,e)=>t+e.length),0))*H;Tt(s,t,e,a,c,d,u,f,S,l,n,!0,m)}(h))},toggle:function(t){i.classList.toggle("lovely-chart--state-hidden",!t),requestAnimationFrame((()=>{i.classList.toggle("lovely-chart--state-transparent",!t)}))}}}(o,I,C,Z),p=At(o,I,u,C,X,N),g=function(t,e,n){let o;function a(){o=et(),o.className="lovely-chart--tools",e.datasets.length<2&&(o.className+=" lovely-chart--state-hidden"),e.datasets.forEach((t=>{let{key:n,name:a}=t;const l=et("a");l.href="#",l.dataset.key=n,l.className=`lovely-chart--button lovely-chart--color-${e.colors[n].slice(1)} lovely-chart--state-checked`,l.innerHTML=`<span class="lovely-chart--button-check"></span><span class="lovely-chart--button-label">${a}</span>`,l.addEventListener("click",(t=>{t.preventDefault(),l.dataset.clickPrevented||i(l),delete l.dataset.clickPrevented})),Ft(l,{onLongPress:()=>{l.dataset.clickPrevented="true",i(l,!0)}}),o.appendChild(l)})),t.appendChild(o)}function i(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const a=Array.from(o.getElementsByTagName("a")),i=1===o.querySelectorAll(".lovely-chart--state-checked").length;t&&(t.classList.contains("lovely-chart--state-checked")&&i?e?(a.forEach((t=>t.classList.add("lovely-chart--state-checked"))),t.classList.remove("lovely-chart--state-checked")):(t.classList.remove("lovely-chart--state-shake"),requestAnimationFrame((()=>{t.classList.add("lovely-chart--state-shake")}))):e?(a.forEach((t=>t.classList.remove("lovely-chart--state-checked"))),t.classList.add("lovely-chart--state-checked")):t.classList.toggle("lovely-chart--state-checked"));const l={};a.forEach((t=>{l[t.dataset.key]=t.classList.contains("lovely-chart--state-checked")})),n(l)}return a(),i(),{redraw:function(){if(o){const t=o;t.classList.add("lovely-chart--state-hidden"),setTimeout((()=>{t.parentNode.removeChild(t)}),500)}a(),o.classList.add("lovely-chart--state-transparent"),requestAnimationFrame((()=>{o.classList.remove("lovely-chart--state-transparent")}))}}}(o,I,R),v=I.isZoomable&&function(t,e,n,o,a,i,l,s,r){let c,d,u=!1;function h(e,h,f){if(!e)return s.toggleLoading(!1),s.toggleIsZoomed(!1),void i.toggleIsZooming(!1);s.toggleLoading(!1);const m=1/t.xLabels.length,p=h/(t.xLabels.length-1),y={};t.datasets.forEach((t=>{let{key:e}=t;return y[e]=!1}));const g=Pt(e,u||t.shouldZoomToPie),v=Object.keys(t.datasets).length!==Object.keys(g.datasets).length;o.update({range:{begin:p-m/2,end:p+m/2},filter:y}),setTimeout((()=>{Object.assign(t,g),v&&e.colors&&Object.assign(n,yt(e.colors)),v&&(l.toggle(u),r.redraw(),a.style.width=`${a.scrollWidth}px`,a.style.height=`${a.scrollHeight}px`),o.update({range:{begin:P-A,end:P+A},focusOn:null},!0);const s=1/(u||t.shouldZoomToPie?t.xLabels.length:t.xLabels.length/24)/2;let h,m;u?(h={begin:c.begin,end:c.end},m=v?c.filter:d.filter):v?(h={begin:0,end:1},m={},t.datasets.forEach((t=>{let{key:e}=t;return m[e]=!0}))):(h=t.shouldZoomToPie?{begin:P-s,end:P+s}:g.minimapRange,m=c.filter),o.update({range:h,filter:m,minimapDelta:u?null:h.end-h.begin}),f&&i.zoom(ct(f)),u=!u,i.toggleIsZooming(!1)}),o.hasAnimations()?F:0),setTimeout((()=>{t.shouldZoomToPie&&a.classList.remove("lovely-chart--state-animating")}),o.hasAnimations()?1e3:0)}return{zoomIn:function(n,o){if(u)return;const l=t.xLabels[o];c=n,i.toggleIsZooming(!0),s.toggleLoading(!0),s.toggleIsZoomed(!0),t.shouldZoomToPie&&(a.classList.add("lovely-chart--state-zoomed-in"),a.classList.add("lovely-chart--state-animating"));const{value:r}=l;(t.shouldZoomToPie?Promise.resolve(function(t){return Object.assign({},e,{type:"pie",labels:e.labels.slice(t-3,t+4),datasets:e.datasets.map((e=>({...e,values:e.values.slice(t-3,t+4)})))})}(o)):t.onZoom(r)).then((t=>h(t,o,l)))},zoomOut:function(n){if(!u)return;d=n,i.toggleIsZooming(!0),s.toggleLoading(!0),s.toggleIsZoomed(!1),t.shouldZoomToPie&&(a.classList.remove("lovely-chart--state-zoomed-in"),a.classList.add("lovely-chart--state-animating"));const o=Math.round((n.labelFromIndex+n.labelToIndex)/2);h(e,o)},isZoomed:function(){return u}}}(I,e,C,n,o,h,m,p,g)}function W(t){b=t;const{datasets:e}=I,n={from:t.labelFromIndex,to:t.labelToIndex},o={begin:t.begin,end:t.end,totalXWidth:t.totalXWidth,yMin:t.yMinViewport,yMax:t.yMaxViewport,availableWidth:u.width,availableHeight:u.height-x,xPadding:s,yPadding:c},a=e.map((e=>{let{key:n}=e;return t[`opacity#${n}`]})),r=St(I,e,n,a,o),y=Mt(o);let g=null,M=null;if(I.hasSecondYAxis){const o=e.find((t=>t.hasOwnYAxis)),i={yMin:t.yMinViewportSecond,yMax:t.yMaxViewportSecond};g=St(I,[o],n,a,i)[0],M=y.copy(i)}I.hideCaption||h.setCaption(function(t){let e,n;return v&&v.isZoomed()?(e=0===t.labelFromIndex?0:t.labelFromIndex+1,n=t.labelToIndex===t.totalXWidth-1?t.labelToIndex:t.labelToIndex-1):(e=t.labelFromIndex,n=t.labelToIndex),o=I.xLabels[e],a=I.xLabels[n],Math.abs(a.value-o.value)>V?`${dt(I.xLabels[e])} — ${dt(I.xLabels[n])}`:ct(I.xLabels[e]);var o,a}(t)),kt(i,l);const w=K(r.reduce(((t,e)=>t+e.length),0))*D;Tt(l,t,I,n,r,y,g,M,d,a,C,!1,w),I.isPie||(f.drawYAxis(t,y,M),f.drawXAxis(t,y)),m.update(t),p.update(t,r,y,g,M)}function Z(t){n.update({range:t})}function R(t){n.update({filter:t})}function N(t){(I.isBars||I.isPie||I.isSteps)&&n.update({focusOn:t})}function X(t){v.zoomIn(b,t)}function Y(){v.zoomOut(b)}E(),document.documentElement.addEventListener("darkmode",(()=>{n.update()})),window.addEventListener("resize",(()=>{window.innerWidth!==$&&($=window.innerWidth,O())})),window.addEventListener("orientationchange",(()=>{O()}))}}}]);
//# sourceMappingURL=1184.68efc66b5ecdd36e1df7.js.map