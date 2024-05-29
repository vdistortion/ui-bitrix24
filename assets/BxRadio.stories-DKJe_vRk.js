import{a as m}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{d as p,o as c,b as v,e as t,j as b}from"./vue.esm-bundler-4dOjYi74.js";import{i as f}from"./injectStyles-Dd9PIcWy.js";import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./v4-CQkTLCs1.js";const r=p({methods:{onChange(e){const o=e.target;this.$emit("update:modelValue",o.value)}},computed:{isChecked(){return this.modelValue===this.value}},mixins:[f],model:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue"],props:{modelValue:{type:[Boolean,String,Array,Object],default:""},value:{type:[Boolean,String,Array,Object],default:""},disabled:{type:Boolean,default:!1}},name:"bx-radio"}),V={class:"bx-radio ui-ctl ui-ctl-radio"},x=["checked","value","disabled"],y={class:"ui-ctl-label-text"};function h(e,o,B,_,j,$){return c(),v("label",V,[t("input",{class:"ui-ctl-element",type:"radio",checked:e.isChecked,value:e.value,disabled:e.disabled,onChange:o[0]||(o[0]=(...i)=>e.onChange&&e.onChange(...i))},null,40,x),t("div",y,[b(e.$slots,"default")])])}const u=g(r,[["render",h]]);r.__docgenInfo={exportName:"default",displayName:"bx-radio",description:"",tags:{},props:[{name:"v-model",type:{name:"boolean|string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"value",type:{name:"boolean|string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["undefined"]}}],slots:[{name:"default"}],sourceFiles:["/home/valentin/WebstormProjects/vue-bitrix24/src/components/BxRadio.vue","/home/valentin/WebstormProjects/vue-bitrix24/src/mixins/injectStyles.ts"]};const a={modelValue:"",value:"",disabled:!1},P={title:"forms/bx-radio",component:u,args:{default:"Two","update:modelValue":m("update:modelValue"),modelValue:a.modelValue,value:"Two",disabled:a.disabled},argTypes:{default:{control:{type:"text"}},modelValue:{defaultValue:a.modelValue,control:{type:"object"}},value:{defaultValue:a.value,control:{type:"text"}},disabled:{defaultValue:a.disabled,control:{type:"boolean"}}}},l={render:e=>({template:`
      <div>
        <bx-radio v-bind="args" v-on="args" v-model="args.modelValue" value="One">One</bx-radio>
      </div>
      <div>
        <bx-radio v-bind="args" v-on="args" v-model="args.modelValue">{{ args.default }}</bx-radio>
      </div>
      <pre>{{ { modelValue: args.modelValue } }}</pre>
    `,data:()=>({args:e}),provide:{$BX24:null},components:{BxRadio:u}})};var d,n,s;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(s=(n=l.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const R=["Default"];export{l as Default,R as __namedExportsOrder,P as default};
