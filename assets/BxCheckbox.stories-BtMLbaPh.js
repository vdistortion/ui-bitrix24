import{a as p}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{d as b,o as v,b as f,e as n,j as x}from"./vue.esm-bundler-4dOjYi74.js";import{i as h}from"./injectStyles-Dd9PIcWy.js";import{_ as V}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./v4-CQkTLCs1.js";const c=b({methods:{updateInput(e){const s=e.target.checked,a=[...this.modelValue];s?a.push(this.value):a.splice(a.indexOf(this.value),1),this.$emit("update:modelValue",a)}},computed:{isChecked(){return this.modelValue.includes(this.value)}},mixins:[h],model:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue"],props:{modelValue:{type:Array,default:()=>[]},value:{type:[Boolean,String,Array,Object],default:""},disabled:{type:Boolean,default:!1}},name:"bx-checkbox"}),g={class:"bx-checkbox ui-ctl ui-ctl-checkbox"},k=["checked","value","disabled"],y={class:"ui-ctl-label-text"};function _(e,t,s,a,B,j){return v(),f("label",g,[n("input",{class:"ui-ctl-element",type:"checkbox",checked:e.isChecked,value:e.value,disabled:e.disabled,onChange:t[0]||(t[0]=(...m)=>e.updateInput&&e.updateInput(...m))},null,40,k),n("div",y,[x(e.$slots,"default")])])}const i=V(c,[["render",_]]);c.__docgenInfo={exportName:"default",displayName:"bx-checkbox",description:"",tags:{},props:[{name:"v-model",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"value",type:{name:"boolean|string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["undefined"]}}],slots:[{name:"default"}],sourceFiles:["/home/valentin/WebstormProjects/vue-bitrix24/src/components/BxCheckbox.vue","/home/valentin/WebstormProjects/vue-bitrix24/src/mixins/injectStyles.ts"]};const l={modelValue:[],value:"",disabled:!1},w={title:"forms/bx-checkbox",component:i,args:{default:"Two","update:modelValue":p("update:modelValue"),modelValue:l.modelValue,value:"Two",disabled:l.disabled},argTypes:{default:{control:{type:"text"}},modelValue:{defaultValue:l.modelValue,control:{type:"object"}},value:{defaultValue:l.value,control:{type:"text"}},disabled:{defaultValue:l.disabled,control:{type:"boolean"}}}},o={render:e=>({template:`
      <div>
        <bx-checkbox v-bind="args" v-on="args" v-model="args.modelValue" value="One">One</bx-checkbox>
      </div>
      <div>
        <bx-checkbox v-bind="args" v-on="args" v-model="args.modelValue">{{ args.default }}</bx-checkbox>
      </div>
      <pre>{{ { modelValue: args.modelValue } }}</pre>
    `,data:()=>({args:e}),provide:{$BX24:null},components:{BxCheckbox:i}})};var d,u,r;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(r=(u=o.parameters)==null?void 0:u.docs)==null?void 0:r.source}}};const N=["Default"];export{o as Default,N as __namedExportsOrder,w as default};
