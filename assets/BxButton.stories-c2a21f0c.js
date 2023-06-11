var I=Object.defineProperty;var H=(n,e,t)=>e in n?I(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var v=(n,e,t)=>(H(n,typeof e!="symbol"?e+"":e,t),t);import{d as K,a as f,b as k,e as P,f as A,g as O,n as S,o as h}from"./vue.esm-bundler-39b922e5.js";import{g as G}from"./_commonjsHelpers-725317a4.js";const _=K({computed:{classList(){const n=["default","success","success-light","danger","danger-dark","danger-light","primary","primary-dark","secondary","link","light","light-border"],e=["add","stop","start","pause","setting","task","info","search","follow","unfollow","print","add-folder","list","business","business-confirm","business-warning","camera","phone-up","phone-down","back","edit","share","remove","download","cloud","page","chat","phone-call","lock","done","disk","mail","alert","angle-up","angle-down","dots","forward","fail","success","plan","eye-opened","eye-closed","tariff","battery","no-battery","half-battery","low-battery","crit-battery","demo"];return{"ui-btn-disabled":this.disabled,"ui-btn-dropdown":this.dropdown,"ui-btn-round":this.round,"ui-btn-no-caps":this.noCaps,"ui-btn-clock":this.loader==="clock","ui-btn-wait":this.loader==="wait","ui-btn-xs":this.size==="xs","ui-btn-sm":this.size==="sm","ui-btn-md":this.size==="md","ui-btn-lg":this.size==="lg",[`ui-btn-${this.color}`]:n.includes(this.color),[`ui-btn-icon-${this.icon}`]:e.includes(this.icon)}}},emits:["click","toggle-menu"],props:{type:{type:String,default:"button"},color:{type:String,default:"default"},size:{type:String,default:"md"},icon:{type:String,default:""},loader:{type:String,default:""},count:{type:Number,default:0},counter:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},dropdown:{type:Boolean,default:!1},round:{type:Boolean,default:!1},noCaps:{type:Boolean,default:!1},menu:{type:Boolean,default:!1}},name:"bx-button"}),J=(n,e)=>{const t=n.__vccOpts||n;for(const[s,o]of e)t[s]=o;return t},Q=["type"],Y={key:0,class:"ui-btn-counter"},Z=["type"],ee={key:0,class:"ui-btn-counter"};function te(n,e,t,s,o,r){return n.menu?(h(),f("div",{key:0,class:S(["ui-btn-split",n.classList])},[k("button",{class:"ui-btn-main",type:n.type,onClick:e[0]||(e[0]=a=>n.$emit("click"))},[P(n.$slots,"default"),n.counter?(h(),f("i",Y,A(n.count),1)):O("",!0)],8,Q),k("button",{class:"ui-btn-menu",type:"button",onClick:e[1]||(e[1]=a=>n.$emit("toggle-menu"))})],2)):(h(),f("button",{key:1,class:S(["ui-btn",n.classList]),type:n.type,onClick:e[2]||(e[2]=a=>n.$emit("click"))},[P(n.$slots,"default"),n.counter?(h(),f("i",ee,A(n.count),1)):O("",!0)],10,Z))}const m=J(_,[["render",te]]);_.__docgenInfo={displayName:"bx-button",exportName:"default",description:"",tags:{},props:[{name:"type",type:{name:"string"},defaultValue:{func:!1,value:"'button'"}},{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'default'"}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"'md'"}},{name:"icon",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"loader",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"count",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"counter",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dropdown",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"round",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"noCaps",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"menu",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"click"},{name:"toggle-menu"}],slots:[{name:"default"}],sourceFiles:["/home/valentin/Projects/vue-bitrix24/src/components/BxButton.vue"]};function F(n){return new Promise((e,t)=>{let s=!1,o=document.querySelector(`script[src^="${n}"]`);if(!o)o=document.createElement("script"),o.async=!0,o.src=n,s=!0;else{e(o);return}o.addEventListener("error",t),o.addEventListener("abort",t),o.addEventListener("load",()=>{o.dataset.loaded="loaded",e(o)}),s&&document.head.append(o)})}var w={exports:{}};w.exports=X;w.exports.isMobile=X;w.exports.default=X;const ne=/(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|samsungbrowser|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,se=/CrOS/,oe=/android|ipad|playbook|silk/i;function X(n){n||(n={});let e=n.ua;if(!e&&typeof navigator<"u"&&(e=navigator.userAgent),e&&e.headers&&typeof e.headers["user-agent"]=="string"&&(e=e.headers["user-agent"]),typeof e!="string")return!1;let t=ne.test(e)&&!se.test(e)||!!n.tablet&&oe.test(e);return!t&&n.tablet&&n.featureDetect&&navigator&&navigator.maxTouchPoints>1&&e.indexOf("Macintosh")!==-1&&e.indexOf("Safari")!==-1&&(t=!0),t}var re=w.exports;const V=G(re);class ae{constructor(e){v(this,"loadScript",F);this.BX24=e}init(){return new Promise(e=>{this.BX24.init(e)})}install(e){return typeof e=="string"?(this.BX24.install(e),Promise.resolve()):new Promise(t=>{this.BX24.install(t)})}installFinish(){this.BX24.installFinish()}getAuth(){return this.BX24.getAuth()}refreshAuth(){return new Promise(e=>{this.BX24.refreshAuth(e)})}callMethod(e,t,s){this.BX24.callMethod(e,t,s)}callBatch(e,t){return new Promise(s=>{this.BX24.callBatch(e,s,t)})}callBind(e,t,s,o){return this.BX24.callBind(e,t,s,o),this.callUnbind.bind(this,e,t,s,o)}callUnbind(e,t,s,o){this.BX24.callUnbind(e,t,s,o)}get userOption(){return{set:(e,t)=>{this.BX24.userOption.set(e,t)},get:e=>this.BX24.userOption.get(e)}}get appOption(){return{set:(e,t)=>new Promise(s=>{this.BX24.appOption.set(e,t,s)}),get:e=>this.BX24.appOption.get(e)}}selectUser(){return new Promise(e=>{this.BX24.selectUser(e)})}selectUsers(){return new Promise(e=>{this.BX24.selectUsers(e)})}selectAccess(e){return new Promise(t=>{Array.isArray(e)?this.BX24.selectAccess(e,t):this.BX24.selectAccess(t)})}selectCRM(e={}){return new Promise(t=>{this.BX24.selectCRM(e,t)})}get placement(){return{bindEvent:e=>new Promise(t=>{this.BX24.placement.bindEvent(e,t)}),call:(e,t)=>new Promise(s=>{this.BX24.placement.call(e,t,s)}),getInterface:()=>new Promise(e=>{this.BX24.placement.getInterface(e)}),info:()=>this.BX24.placement.info()}}isAdmin(){return this.BX24.isAdmin()}getLang(){return this.BX24.getLang()}resizeWindow(e,t){return new Promise(s=>{this.BX24.resizeWindow(e,t,s)})}fitWindow(){return new Promise(e=>{this.BX24.fitWindow(e)})}reloadWindow(){this.BX24.reloadWindow()}setTitle(e=""){return new Promise(t=>{this.BX24.setTitle(e,t)})}ready(){return new Promise(e=>{this.BX24.ready(e)})}isReady(){return this.BX24.isReady()}proxy(e,t){return this.BX24.proxy(e,t)}closeApplication(){this.BX24.closeApplication()}getDomain(e){const t=this.BX24.getDomain();return e?["https:",t].join("//"):t}openApplication(e){return new Promise(t=>{this.BX24.openApplication(e,t)})}openPath(e){return new Promise((t,s)=>{this.BX24.openPath(e,o=>{o.result==="error"&&s(new Error(o.errorCode)),t(e)})})}proxyContext(){return this.BX24.proxyContext()}scrollParentWindow(e){return new Promise(t=>{this.BX24.scrollParentWindow(e,t)})}bind(e,t,s){return this.BX24.bind(e,t,s),this.unbind.bind(this,e,t,s)}unbind(e,t,s){this.BX24.unbind(e,t,s)}getScrollSize(){return this.BX24.getScrollSize()}get im(){return{callTo:(e,t)=>{this.BX24.im.callTo(e,t)},phoneTo:e=>{this.BX24.im.phoneTo(e)},openMessenger:e=>{this.BX24.im.openMessenger(e)},openHistory:e=>{this.BX24.im.openHistory(e)}}}}class ie{constructor(e,t={}){this.callBatch=e,this.handler=t,this.commands=[],this.result={},this.errors={},this.delay=500,this.limit=50}batch(e){return this.commands=[],this.result={},this.errors={},new Promise((t,s)=>{const o=this.parseRequest(e),r=[];let a=0;this.callBatch(o,p=>{Object.entries(p).forEach(([l,u])=>{const i=u.error();i&&(this.errors[l]=i,a+=1);const c=u.total(),d=u.data();let x=1;if(d&&(Array.isArray(d.items)?x=d.items.length:Array.isArray(d)&&(x=d.length)),this.result[l]=d,c>this.limit&&c>x){const N=Math.ceil(c/this.limit)-1,q=Array.from({length:N});r.push([l,o[l],q])}}),a>0?(this.errorLogger(),s(this.errors)):r.length?(this.buildCommandsArray(r),this.batchPayload().then(()=>t(this.parseResult()))):t(this.parseResult())})})}buildCommandsArray(e){let t=[];e.forEach(([s,o,r])=>{r.forEach((a,p)=>{const l=p+1,u=this.limit*l,c=[[s,l].join("_"),this.addStart(o,u)];t.length===this.limit?(this.commands.push(t),t=[c]):t.push(c)})}),t.length&&this.commands.push(t)}batchPayload(){const e=[];return this.commands.forEach(t=>{const s=Object.fromEntries(t),o=new Promise(r=>{setTimeout(()=>{this.callBatch(s,a=>{Object.entries(a).forEach(([p,l])=>{const[u]=p.split("_"),i=l.data();i!=null&&i.items?this.result[u].items.push(...i.items):Array.isArray(i)&&this.result[u].push(...i)}),r()})},this.delay)});e.push(o)}),Promise.all(e)}parseResult(){return Object.entries(this.handler).forEach(([e,t])=>{this.result[e]&&(this.result[e]=t(this.result[e]))}),this.result}parseRequest(e){return Object.entries(e).reduce((t,[s,o])=>{if(Array.isArray(o)){const[r,a={}]=o;t[s]=[r,a]}else{const{method:r,params:a={}}=o;t[s]=[r,a]}return t},{})}addStart(e,t){const[s,o]=e;return[s,{start:t,...o}]}errorLogger(){console.group(`${this.constructor.name}: Ошибки в методах!`),Object.entries(this.errors).forEach(([e,t])=>{console.info(`[${e}]`,t.toString())}),console.groupEnd()}}class le extends ae{constructor(){super(...arguments);v(this,"isMobile",V)}createBatch(t={},s=ie){return new s(this.BX24.callBatch,t)}openLink(t,s="_blank"){const o=()=>{const r=document.createElement("a");r.href=[this.getDomain(!0),t].join(""),r.target=s,r.click()};V()?o():this.openPath(t).catch(o)}}const ue={init(n=[],e=!0){const t=["//api.bitrix24.com/api/v1/",...n].map(s=>F(s));return Promise.all(t).then(()=>{if(window.BX24){e&&this.initAssets(window.BX24.getDomain());const s=new le(window.BX24);return s.init().then(()=>s)}return this.initAssets(),Promise.resolve(null)})},initAssets(n="www.bitrix24.ru"){const e=`//${n}/bitrix/js/ui`,s=["alerts/ui.alerts.min.css","buttons/ui.buttons.min.css","buttons/icons/ui.buttons.icons.min.css","fonts/opensans/ui.font.opensans.min.css","forms/ui.forms.min.css","icons/b24/ui.icons.b24.min.css","icons/base/ui.icons.base.min.css","icons/disk/ui.icons.disk.min.css","icons/service/ui.icons.service.min.css","progressbar/ui.progressbar.min.css"].reduce((o,r)=>{const a=document.createElement("link");return a.rel="stylesheet",a.href=[e,r].join("/"),o.append(a),o},new DocumentFragment);document.head.prepend(s)}};ue.initAssets();const me={title:"BxButton",component:m,tags:["autodocs"],args:{type:"button",color:"default",size:"md",icon:"",loader:"",count:0,counter:!1,disabled:!1,dropdown:!1,round:!1,noCaps:!1,menu:!1,onClick:()=>console.log("click"),onToggleMenu:()=>console.log("toggle-menu"),default:"BxButton"},argTypes:{type:{options:["button","submit","reset"],defaultValue:"button",control:{type:"radio"}},color:{options:["default","success","success-light","danger","danger-dark","danger-light","primary","primary-dark","secondary","link","light","light-border"],defaultValue:"default",control:{type:"radio"}},size:{options:["xs","sm","md","lg"],defaultValue:"md",control:{type:"radio"}},icon:{options:["","add","stop","start","pause","setting","task","info","search","follow","unfollow","print","add-folder","list","business","business-confirm","business-warning","camera","phone-up","phone-down","back","edit","share","remove","download","cloud","page","chat","phone-call","lock","done","disk","mail","alert","angle-up","angle-down","dots","forward","fail","success","plan","eye-opened","eye-closed","tariff","battery","no-battery","half-battery","low-battery","crit-battery","demo"],defaultValue:"",control:{type:"radio"}},loader:{options:["","clock","wait"],defaultValue:"",control:{type:"radio"}},count:{defaultValue:0,control:{type:"number"}},counter:{defaultValue:!1,control:{type:"boolean"}},disabled:{defaultValue:!1,control:{type:"boolean"}},dropdown:{defaultValue:!1,control:{type:"boolean"}},round:{defaultValue:!1,control:{type:"boolean"}},noCaps:{defaultValue:!1,control:{type:"boolean"}},menu:{defaultValue:!1,control:{type:"boolean"}}}},g={render:(n,{argTypes:e})=>({components:{BxButton:m},props:Object.keys(e),data(){return{args:n}},template:`
      <BxButton v-bind="args" v-on="args">
        <template v-if="args.default">${n.default}</template>
      </BxButton>
    `})},b={render:(n,{argTypes:e})=>({components:{BxButton:m},props:Object.keys(e),data(){return{args:n}},template:`
      <BxButton v-bind="args" v-on="args">
        BxButton
      </BxButton>
    `}),args:{color:"success"}},B={render:(n,{argTypes:e})=>({components:{BxButton:m},props:Object.keys(e),data(){return{args:n}},template:`
      <BxButton v-bind="args" v-on="args">
        BxButton
      </BxButton>
    `}),args:{color:"primary",menu:!0}},y={render:(n,{argTypes:e})=>({components:{BxButton:m},props:Object.keys(e),data(){return{args:n}},template:`
      <BxButton v-bind="args" v-on="args">
        BxButton
      </BxButton>
    `}),args:{color:"light-border",dropdown:!0}};var E,C,$;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: (args, {
    argTypes
  }) => ({
    components: {
      BxButton
    },
    props: Object.keys(argTypes),
    data() {
      return {
        args
      };
    },
    template: \`
      <BxButton v-bind="args" v-on="args">
        <template v-if="args.default">\${args.default}</template>
      </BxButton>
    \`
  })
}`,...($=(C=g.parameters)==null?void 0:C.docs)==null?void 0:$.source}}};var j,M,T;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: (args, {
    argTypes
  }) => ({
    components: {
      BxButton
    },
    props: Object.keys(argTypes),
    data() {
      return {
        args
      };
    },
    template: \`
      <BxButton v-bind="args" v-on="args">
        BxButton
      </BxButton>
    \`
  }),
  args: {
    color: 'success'
  }
}`,...(T=(M=b.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var z,L,D;B.parameters={...B.parameters,docs:{...(z=B.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: (args, {
    argTypes
  }) => ({
    components: {
      BxButton
    },
    props: Object.keys(argTypes),
    data() {
      return {
        args
      };
    },
    template: \`
      <BxButton v-bind="args" v-on="args">
        BxButton
      </BxButton>
    \`
  }),
  args: {
    color: 'primary',
    menu: true
  }
}`,...(D=(L=B.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var R,W,U;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: (args, {
    argTypes
  }) => ({
    components: {
      BxButton
    },
    props: Object.keys(argTypes),
    data() {
      return {
        args
      };
    },
    template: \`
      <BxButton v-bind="args" v-on="args">
        BxButton
      </BxButton>
    \`
  }),
  args: {
    color: 'light-border',
    dropdown: true
  }
}`,...(U=(W=y.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};const fe=["Default","Success","Menu","Dropdown"];export{g as Default,y as Dropdown,B as Menu,b as Success,fe as __namedExportsOrder,me as default};
//# sourceMappingURL=BxButton.stories-c2a21f0c.js.map
