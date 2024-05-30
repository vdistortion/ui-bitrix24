import{a as z}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{d as V,o as g,f as y,g as h,n as B}from"./vue.esm-bundler-Bn_nRS7z.js";import{u as _}from"./useStyles-B1JkXNY2.js";import"./v4-CQkTLCs1.js";const S=["value","placeholder","disabled"],n={resizes:["","no","y","x"]},s=V({__name:"BxTextarea",props:{modelValue:{type:String,default:""},placeholder:{type:String,default:""},resize:{type:String,default:"",validator(e){return n.resizes.includes(e)}},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){_();const a=e,b=o;function v(d){const i=d.target;b("update:modelValue",i.value)}return(d,i)=>(g(),y("div",{class:B(["ui-ctl ui-ctl-textarea",{"ui-ctl-no-resize":a.resize==="no","ui-ctl-resize-y":a.resize==="y","ui-ctl-resize-x":a.resize==="x"}])},[h("textarea",{class:"ui-ctl-element",value:a.modelValue,placeholder:a.placeholder,disabled:a.disabled,onInput:v},null,40,S)],2))}});s.__docgenInfo={exportName:"default",displayName:"BxTextarea",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"resize",type:{name:"PropResizes"},defaultValue:{func:!1,value:"''"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/valentin/WebstormProjects/vue-bitrix24/src/components/BxTextarea.vue"]};const t={modelValue:"",placeholder:"",resize:"",disabled:!1},X={title:"forms/bx-textarea",component:s,args:{"update:modelValue":z("update:modelValue"),modelValue:t.modelValue,placeholder:t.placeholder,resize:t.resize,disabled:t.disabled},argTypes:{modelValue:{defaultValue:t.modelValue,control:{type:"text"}},placeholder:{defaultValue:t.placeholder,control:{type:"text"}},resize:{options:n.resizes,defaultValue:t.resize,control:{type:"inline-radio"}},disabled:{defaultValue:t.disabled,control:{type:"boolean"}}}},l={render:e=>({template:'<bx-textarea v-bind="args" v-on="args"></bx-textarea>',data:()=>({args:e}),provide:{$BX24:null},components:{BxTextarea:s}})},T=(e,o)=>({render:a=>({template:`
      <div v-for="item in propList" :key="item" class="component">
        <bx-textarea v-bind="args" v-on="args" :[propName]="item">{{ args.default }}</bx-textarea>
      </div>
    `,data:()=>({args:a,propName:e,propList:o}),provide:{$BX24:null},components:{BxTextarea:s}}),argTypes:{[e]:{table:{disable:!0}}}}),r=T("resize",n.resizes);var u,p,c;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => ({
    template: '<bx-textarea v-bind="args" v-on="args"></bx-textarea>',
    data: () => ({
      args
    }),
    provide: {
      $BX24: null
    },
    components: {
      BxTextarea
    }
  })
}`,...(c=(p=l.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,f,x;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"Story('resize', propsValues.resizes)",...(x=(f=r.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const $=["Default","Resizes"];export{l as Default,r as Resizes,$ as __namedExportsOrder,X as default};
