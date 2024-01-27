import{a as m}from"./chunk-WFFRPTHA-zlNDxfrq.js";import{d as p,e as b,f as s,k as v,o as f}from"./vue.esm-bundler-jb8z5up1.js";import{i as x}from"./injectStyles-5_4tRF-S.js";import{_ as h}from"./_plugin-vue_export-helper-x3n3nnut.js";import"./preview-errors-7FWlPnjy.js";import"./index-PPLHz8o0.js";const r=p({methods:{updateInput(e){const o=e.target.checked,a=[...this.modelValue];o?a.push(this.value):a.splice(a.indexOf(this.value),1),this.$emit("update:modelValue",a)}},computed:{isChecked(){return this.modelValue.includes(this.value)}},mixins:[x],model:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue"],props:{modelValue:{type:Array,default:()=>[]},value:{type:[Boolean,String,Array,Object],default:""},disabled:{type:Boolean,default:!1}},name:"bx-checkbox"}),V={class:"bx-checkbox ui-ctl ui-ctl-checkbox"},g=["checked","value","disabled"],k={class:"ui-ctl-label-text"};function y(e,o,a,_,B,C){return f(),b("label",V,[s("input",{class:"ui-ctl-element",type:"checkbox",checked:e.isChecked,value:e.value,disabled:e.disabled,onChange:o[0]||(o[0]=(...i)=>e.updateInput&&e.updateInput(...i))},null,40,g),s("div",k,[v(e.$slots,"default")])])}const c=h(r,[["render",y]]);r.__docgenInfo={exportName:"default",displayName:"bx-checkbox",description:"",tags:{},props:[{name:"v-model",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"value",type:{name:"boolean|string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["undefined"]}}],slots:[{name:"default"}],sourceFiles:["/home/valentin/Projects/vue-bitrix24/src/components/BxCheckbox.vue","/home/valentin/Projects/vue-bitrix24/src/mixins/injectStyles.js"]};const l={modelValue:[],value:"",disabled:!1},N={title:"forms/bx-checkbox",component:c,args:{default:"Two","update:modelValue":m("update:modelValue"),modelValue:l.modelValue,value:"Two",disabled:l.disabled},argTypes:{default:{control:{type:"text"}},modelValue:{defaultValue:l.modelValue,control:{type:"object"}},value:{defaultValue:l.value,control:{type:"text"}},disabled:{defaultValue:l.disabled,control:{type:"boolean"}}}},t={render:e=>({template:`
      <div>
        <bx-checkbox v-bind="args" v-on="args" v-model="args.modelValue" value="One">One</bx-checkbox>
      </div>
      <div>
        <bx-checkbox v-bind="args" v-on="args" v-model="args.modelValue">{{ args.default }}</bx-checkbox>
      </div>
      <pre>{{ { modelValue: args.modelValue } }}</pre>
    `,data:()=>({args:e}),provide:{$BX24:null},components:{BxCheckbox:c}})};var d,n,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => ({
    template: \`
      <div>
        <bx-checkbox v-bind="args" v-on="args" v-model="args.modelValue" value="One">One</bx-checkbox>
      </div>
      <div>
        <bx-checkbox v-bind="args" v-on="args" v-model="args.modelValue">{{ args.default }}</bx-checkbox>
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
      BxCheckbox
    }
  })
}`,...(u=(n=t.parameters)==null?void 0:n.docs)==null?void 0:u.source}}};const P=["Default"];export{t as Default,P as __namedExportsOrder,N as default};
