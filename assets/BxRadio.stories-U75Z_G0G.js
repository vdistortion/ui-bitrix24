import{a as m}from"./chunk-WFFRPTHA-zlNDxfrq.js";import{d as p,e as c,f as d,k as v,o as f}from"./vue.esm-bundler-jb8z5up1.js";import{i as b}from"./injectStyles-5_4tRF-S.js";import{_ as g}from"./_plugin-vue_export-helper-x3n3nnut.js";import"./preview-errors-7FWlPnjy.js";import"./index-PPLHz8o0.js";const s=p({computed:{isChecked(){return this.modelValue===this.value}},mixins:[b],model:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue"],props:{modelValue:{type:[Boolean,String,Array,Object],default:""},value:{type:[Boolean,String,Array,Object],default:""},disabled:{type:Boolean,default:!1}},name:"bx-radio"}),V={class:"bx-radio ui-ctl ui-ctl-radio"},x=["checked","value","disabled"],y={class:"ui-ctl-label-text"};function _(e,o,B,h,j,$){return f(),c("label",V,[d("input",{class:"ui-ctl-element",type:"radio",checked:e.isChecked,value:e.value,disabled:e.disabled,onChange:o[0]||(o[0]=u=>e.$emit("update:modelValue",u.target.value))},null,40,x),d("div",y,[v(e.$slots,"default")])])}const i=g(s,[["render",_]]);s.__docgenInfo={exportName:"default",displayName:"bx-radio",description:"",tags:{},props:[{name:"v-model",type:{name:"boolean|string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"value",type:{name:"boolean|string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}],sourceFiles:["/home/valentin/Projects/vue-bitrix24/src/components/BxRadio.vue","/home/valentin/Projects/vue-bitrix24/src/mixins/injectStyles.js"]};const a={modelValue:"",value:"",disabled:!1},P={title:"forms/bx-radio",component:i,args:{default:"Two","update:modelValue":m("update:modelValue"),modelValue:a.modelValue,value:"Two",disabled:a.disabled},argTypes:{default:{control:{type:"text"}},modelValue:{defaultValue:a.modelValue,control:{type:"object"}},value:{defaultValue:a.value,control:{type:"text"}},disabled:{defaultValue:a.disabled,control:{type:"boolean"}}}},l={render:e=>({template:`
      <div>
        <bx-radio v-bind="args" v-on="args" v-model="args.modelValue" value="One">One</bx-radio>
      </div>
      <div>
        <bx-radio v-bind="args" v-on="args" v-model="args.modelValue">{{ args.default }}</bx-radio>
      </div>
      <pre>{{ { modelValue: args.modelValue } }}</pre>
    `,data:()=>({args:e}),provide:{$BX24:null},components:{BxRadio:i}})};var t,n,r;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => ({
    template: \`
      <div>
        <bx-radio v-bind="args" v-on="args" v-model="args.modelValue" value="One">One</bx-radio>
      </div>
      <div>
        <bx-radio v-bind="args" v-on="args" v-model="args.modelValue">{{ args.default }}</bx-radio>
      </div>
      <pre>{{ { modelValue: args.modelValue } }}</pre>
    \`,
    data: () => ({
      args
    }),
    provide: {
      $BX24: null
    },
    components: {
      BxRadio
    }
  })
}`,...(r=(n=l.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const T=["Default"];export{l as Default,T as __namedExportsOrder,P as default};
