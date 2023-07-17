import{a as m}from"./chunk-OPEUWD42-a3b45fd8.js";import{d as p,a as c,b as d,g as v,o as b}from"./vue.esm-bundler-47f028ed.js";import{i as f}from"./injectStyles-810eb529.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";const r=p({computed:{isChecked(){return this.modelValue===this.value}},mixins:[f],model:{prop:"model-value",event:"update:model-value"},emits:["update:modelValue"],props:{modelValue:{type:[Boolean,String,Array,Object],default:""},value:{type:[Boolean,String,Array,Object],default:""},disabled:{type:Boolean,default:!1}},name:"bx-radio"});const V={class:"bx-radio ui-ctl ui-ctl-radio"},x=["checked","value","disabled"],y={class:"ui-ctl-label-text"};function _(e,o,B,h,j,$){return b(),c("label",V,[d("input",{class:"ui-ctl-element",type:"radio",checked:e.isChecked,value:e.value,disabled:e.disabled,onChange:o[0]||(o[0]=i=>e.$emit("update:modelValue",i.target.value))},null,40,x),d("div",y,[v(e.$slots,"default")])])}const u=g(r,[["render",_]]);r.__docgenInfo={exportName:"default",displayName:"bx-radio",description:"",tags:{},props:[{name:"modelValue",type:{name:"boolean|string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"value",type:{name:"boolean|string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}],sourceFiles:["/home/valentin/Projects/vue-bitrix24/src/components/BxRadio.vue","/home/valentin/Projects/vue-bitrix24/src/mixins/injectStyles.js"]};const a={modelValue:"",value:"",disabled:!1},C={title:"forms/bx-radio",component:u,args:{default:"Two","update:modelValue":m("update:modelValue"),modelValue:a.modelValue,value:"Two",disabled:a.disabled},argTypes:{default:{control:{type:"text"}},modelValue:{defaultValue:a.modelValue,control:{type:"object"}},value:{defaultValue:a.value,control:{type:"text"}},disabled:{defaultValue:a.disabled,control:{type:"boolean"}}}},l={render:e=>({template:`
      <div>
        <bx-radio v-bind="args" v-on="args" v-model="args.modelValue" value="One">One</bx-radio>
      </div>
      <div>
        <bx-radio v-bind="args" v-on="args" v-model="args.modelValue">{{ args.default }}</bx-radio>
      </div>
      <pre>{{ { modelValue: args.modelValue } }}</pre>
    `,data:()=>({args:e}),provide:{$BX24:null},components:{BxRadio:u}})};var t,n,s;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(s=(n=l.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const N=["Default"];export{l as Default,N as __namedExportsOrder,C as default};
//# sourceMappingURL=BxRadio.stories-d69a837b.js.map
