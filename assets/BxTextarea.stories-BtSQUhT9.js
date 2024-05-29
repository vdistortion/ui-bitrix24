import{a as b}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{d as v,o as y,b as z,e as V,n as g}from"./vue.esm-bundler-4dOjYi74.js";import{i as h}from"./injectStyles-Dd9PIcWy.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./v4-CQkTLCs1.js";const l={resizes:["","no","y","x"]},f=v({methods:{onInput(e){const t=e.target;this.$emit("update:modelValue",t.value)}},mixins:[h],model:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue"],props:{modelValue:{type:String,default:""},placeholder:{type:String,default:""},resize:{type:String,default:"",validator(e){return l.resizes.includes(e)}},disabled:{type:Boolean,default:!1}},name:"bx-textarea"}),S=["value","placeholder","disabled"];function $(e,t,n,T,_,j){return y(),z("div",{class:g(["ui-ctl ui-ctl-textarea",{"ui-ctl-no-resize":e.resize==="no","ui-ctl-resize-y":e.resize==="y","ui-ctl-resize-x":e.resize==="x"}])},[V("textarea",{class:"ui-ctl-element",value:e.modelValue,placeholder:e.placeholder,disabled:e.disabled,onInput:t[0]||(t[0]=(...x)=>e.onInput&&e.onInput(...x))},null,40,S)],2)}const o=B(f,[["render",$]]);f.__docgenInfo={exportName:"default",displayName:"bx-textarea",description:"",tags:{},props:[{name:"v-model",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"resize",type:{name:"PropResizes"},defaultValue:{func:!1,value:"''"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["undefined"]}}],sourceFiles:["/home/valentin/WebstormProjects/vue-bitrix24/src/components/BxTextarea.vue","/home/valentin/WebstormProjects/vue-bitrix24/src/mixins/injectStyles.ts"]};const a={modelValue:"",placeholder:"",resize:"",disabled:!1},C={title:"forms/bx-textarea",component:o,args:{"update:modelValue":b("update:modelValue"),modelValue:a.modelValue,placeholder:a.placeholder,resize:a.resize,disabled:a.disabled},argTypes:{modelValue:{defaultValue:a.modelValue,control:{type:"text"}},placeholder:{defaultValue:a.placeholder,control:{type:"text"}},resize:{options:l.resizes,defaultValue:a.resize,control:{type:"inline-radio"}},disabled:{defaultValue:a.disabled,control:{type:"boolean"}}}},s={render:e=>({template:'<bx-textarea v-bind="args" v-on="args"></bx-textarea>',data:()=>({args:e}),provide:{$BX24:null},components:{BxTextarea:o}})},I=(e,t)=>({render:n=>({template:`
      <div v-for="item in propList" :key="item" class="component">
        <bx-textarea v-bind="args" v-on="args" :[propName]="item">{{ args.default }}</bx-textarea>
      </div>
    `,data:()=>({args:n,propName:e,propList:t}),provide:{$BX24:null},components:{BxTextarea:o}}),argTypes:{[e]:{table:{disable:!0}}}}),r=I("resize",l.resizes);var d,i,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(i=s.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var p,m,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:"Story('resize', props.resizes)",...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const D=["Default","Resizes"];export{s as Default,r as Resizes,D as __namedExportsOrder,C as default};
