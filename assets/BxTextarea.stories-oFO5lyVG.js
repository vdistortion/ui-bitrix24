import{a as b}from"./chunk-WFFRPTHA-zlNDxfrq.js";import{d as v,e as g,f as y,n as z,o as V}from"./vue.esm-bundler-aCGF1-iF.js";import{i as h}from"./injectStyles-5_4tRF-S.js";import{_ as B}from"./_plugin-vue_export-helper-x3n3nnut.js";import"./preview-errors-7FWlPnjy.js";import"./index-PPLHz8o0.js";const l={resizes:["","no","y","x"]},f=v({mixins:[h],model:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue"],props:{modelValue:{type:String,default:""},placeholder:{type:String,default:""},resize:{type:String,default:"",validator(e){return typeof e=="string"&&l.resizes.includes(e)}},disabled:{type:Boolean,default:!1}},name:"bx-textarea"}),S=["value","placeholder","disabled"];function $(e,t,n,T,j,k){return V(),g("div",{class:z(["ui-ctl ui-ctl-textarea",{"ui-ctl-no-resize":e.resize==="no","ui-ctl-resize-y":e.resize==="y","ui-ctl-resize-x":e.resize==="x"}])},[y("textarea",{class:"ui-ctl-element",value:e.modelValue,placeholder:e.placeholder,disabled:e.disabled,onInput:t[0]||(t[0]=x=>e.$emit("update:modelValue",x.target.value))},null,40,S)],2)}const o=B(f,[["render",$]]);f.__docgenInfo={exportName:"default",displayName:"bx-textarea",description:"",tags:{},props:[{name:"v-model",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"resize",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/valentin/Projects/vue-bitrix24/src/components/BxTextarea.vue","/home/valentin/Projects/vue-bitrix24/src/mixins/injectStyles.js"]};const a={modelValue:"",placeholder:"",resize:"",disabled:!1},I={title:"forms/bx-textarea",component:o,args:{"update:modelValue":b("update:modelValue"),modelValue:a.modelValue,placeholder:a.placeholder,resize:a.resize,disabled:a.disabled},argTypes:{modelValue:{defaultValue:a.modelValue,control:{type:"text"}},placeholder:{defaultValue:a.placeholder,control:{type:"text"}},resize:{options:l.resizes,defaultValue:a.resize,control:{type:"inline-radio"}},disabled:{defaultValue:a.disabled,control:{type:"boolean"}}}},r={render:e=>({template:'<bx-textarea v-bind="args" v-on="args"></bx-textarea>',data:()=>({args:e}),provide:{$BX24:null},components:{BxTextarea:o}})},_=(e,t)=>({render:n=>({template:`
      <div v-for="item in propList" :key="item" class="component">
        <bx-textarea v-bind="args" v-on="args" :[propName]="item">{{ args.default }}</bx-textarea>
      </div>
    `,data:()=>({args:n,propName:e,propList:t}),provide:{$BX24:null},components:{BxTextarea:o}}),argTypes:{[e]:{table:{disable:!0}}}}),s=_("resize",l.resizes);var d,i,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var u,m,c;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"Story('resize', props.resizes)",...(c=(m=s.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const R=["Default","Resizes"];export{r as Default,s as Resizes,R as __namedExportsOrder,I as default};
