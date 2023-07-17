import{a as b}from"./chunk-OPEUWD42-a3b45fd8.js";import{d as F,a as n,b as y,g,e as v,f as h,n as V,o as s}from"./vue.esm-bundler-47f028ed.js";import{i as T}from"./injectStyles-810eb529.js";import{_ as O}from"./_plugin-vue_export-helper-c27b6911.js";const t={types:["button","submit","reset"],colors:["default","success","success-light","danger","danger-dark","danger-light","primary","primary-dark","secondary","link","light","light-border"],sizes:["xs","sm","md","lg"],icons:["","add","stop","start","pause","setting","task","info","search","follow","unfollow","print","add-folder","list","business","business-confirm","business-warning","camera","phone-up","phone-down","back","edit","share","remove","download","cloud","page","chat","phone-call","lock","done","disk","mail","alert","angle-up","angle-down","dots","forward","fail","success","plan","eye-opened","eye-closed","tariff","battery","no-battery","half-battery","low-battery","crit-battery","demo"],loaders:["","clock","wait"]},E=F({computed:{classList(){return{[`ui-btn-${this.color}`]:t.colors.includes(this.color),[`ui-btn-${this.size}`]:t.sizes.includes(this.size),[`ui-btn-icon-${this.icon}`]:this.icon&&t.icons.includes(this.icon),[`ui-btn-${this.loader}`]:this.loader&&t.loaders.includes(this.loader),"ui-btn-disabled":this.disabled,"ui-btn-dropdown":this.dropdown,"ui-btn-round":this.round,"ui-btn-no-caps":this.noCaps}}},mixins:[T],emits:["click","toggle-menu"],props:{type:{type:String,default:"button",validator(e){return typeof e=="string"&&t.types.includes(e)}},color:{type:String,default:"default",validator(e){return typeof e=="string"&&t.colors.includes(e)}},size:{type:String,default:"md",validator(e){return typeof e=="string"&&t.sizes.includes(e)}},icon:{type:String,default:"",validator(e){return typeof e=="string"&&t.icons.includes(e)}},loader:{type:String,default:"",validator(e){return typeof e=="string"&&t.loaders.includes(e)}},count:{type:Number,default:0,validator(e){return Number.isFinite(e)}},counter:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},dropdown:{type:Boolean,default:!1},round:{type:Boolean,default:!1},noCaps:{type:Boolean,default:!1},menu:{type:Boolean,default:!1}},name:"bx-button"}),_=["type","disabled"],q={key:0,class:"ui-btn-counter"},A=["disabled"],G=["type","disabled"],H={key:0,class:"ui-btn-counter"};function J(e,a,f,K,M,Q){return e.menu?(s(),n("div",{key:0,class:V(["ui-btn-split",e.classList])},[y("button",{class:"ui-btn-main",type:e.type,disabled:e.disabled,onClick:a[0]||(a[0]=m=>e.$emit("click"))},[g(e.$slots,"default"),e.counter?(s(),n("i",q,v(e.count),1)):h("",!0)],8,_),y("button",{class:"ui-btn-menu",type:"button",disabled:e.disabled,onClick:a[1]||(a[1]=m=>e.$emit("toggle-menu"))},null,8,A)],2)):(s(),n("button",{key:1,class:V(["ui-btn",e.classList]),type:e.type,disabled:e.disabled,onClick:a[2]||(a[2]=m=>e.$emit("click"))},[g(e.$slots,"default"),e.counter?(s(),n("i",H,v(e.count),1)):h("",!0)],10,G))}const p=O(E,[["render",J]]);E.__docgenInfo={exportName:"default",displayName:"bx-button",description:"",tags:{},props:[{name:"type",type:{name:"string"},defaultValue:{func:!1,value:"'button'"}},{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'default'"}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"'md'"}},{name:"icon",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"loader",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"count",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"counter",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dropdown",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"round",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"noCaps",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"menu",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"click"},{name:"toggle-menu"}],slots:[{name:"default"}],sourceFiles:["/home/valentin/Projects/vue-bitrix24/src/components/BxButton.vue","/home/valentin/Projects/vue-bitrix24/src/mixins/injectStyles.js"]};const o={type:"button",color:"default",size:"md",icon:"",loader:"",count:0,counter:!1,disabled:!1,dropdown:!1,round:!1,noCaps:!1,menu:!1},Z={title:"bx-button",component:p,args:{default:"bx-button",click:b("click"),"toggle-menu":b("toggle-menu"),type:o.type,color:o.color,size:o.size,icon:o.icon,loader:o.loader,count:o.count,counter:o.counter,disabled:o.disabled,dropdown:o.dropdown,round:o.round,noCaps:o.noCaps,menu:o.menu},argTypes:{default:{control:{type:"text"}},type:{options:t.types,defaultValue:o.type,control:{type:"inline-radio"}},color:{options:t.colors,defaultValue:o.color,control:{type:"select"}},size:{options:t.sizes,defaultValue:o.size,control:{type:"inline-radio"}},icon:{options:t.icons,defaultValue:o.icon,control:{type:"select"}},loader:{options:t.loaders,defaultValue:o.loader,control:{type:"inline-radio"}},count:{defaultValue:o.count,control:{type:"number"}},counter:{defaultValue:o.counter,control:{type:"boolean"}},disabled:{defaultValue:o.disabled,control:{type:"boolean"}},dropdown:{defaultValue:o.dropdown,control:{type:"boolean"}},round:{defaultValue:o.round,control:{type:"boolean"}},noCaps:{defaultValue:o.noCaps,control:{type:"boolean"}},menu:{defaultValue:o.menu,control:{type:"boolean"}}}},l={render:e=>({template:'<bx-button v-bind="args" v-on="args">{{ args.default }}</bx-button>',data:()=>({args:e}),provide:{$BX24:null},components:{BxButton:p}})},c=(e,a)=>({render:f=>({template:`
      <div v-for="item in propList" :key="item" class="component">
        <bx-button v-bind="args" v-on="args" :[propName]="item">{{ args.default }}</bx-button>
      </div>
    `,data:()=>({args:f,propName:e,propList:a}),provide:{$BX24:null},components:{BxButton:p}}),argTypes:{[e]:{table:{disable:!0}}}}),r=c("color",t.colors),u=c("size",t.sizes),i=c("icon",t.icons),d=c("loader",t.loaders);var k,S,z;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => ({
    template: '<bx-button v-bind="args" v-on="args">{{ args.default }}</bx-button>',
    data: () => ({
      args
    }),
    provide: {
      $BX24: null
    },
    components: {
      BxButton
    }
  })
}`,...(z=(S=l.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var B,$,w;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:"Story('color', props.colors)",...(w=($=r.parameters)==null?void 0:$.docs)==null?void 0:w.source}}};var C,x,L;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:"Story('size', props.sizes)",...(L=(x=u.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};var N,j,D;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:"Story('icon', props.icons)",...(D=(j=i.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var I,P,X;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:"Story('loader', props.loaders)",...(X=(P=d.parameters)==null?void 0:P.docs)==null?void 0:X.source}}};const ee=["Default","Colors","Sizes","Icons","Loaders"];export{r as Colors,l as Default,i as Icons,d as Loaders,u as Sizes,ee as __namedExportsOrder,Z as default};
//# sourceMappingURL=BxButton.stories-57668bc2.js.map