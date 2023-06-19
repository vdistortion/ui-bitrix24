import{d as p,a as d,g as c,o as u}from"./vue.esm-bundler-47f028ed.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";const i=p({methods:{onClick(e){this.$BX24&&(e.preventDefault(),this.$BX24.openLink(this.href))},onMiddleClick(e){this.$BX24&&(e.preventDefault(),this.$BX24.openLink(this.href,!0))}},inject:["$BX24"],props:{href:{type:String,required:!0,validator(e){return typeof e=="string"}}},name:"bx-link"}),m=["href"];function k(e,t,b,$,B,v){return u(),d("a",{href:e.href,target:"_blank",onClick:t[0]||(t[0]=(...r)=>e.onClick&&e.onClick(...r)),onAuxclick:t[1]||(t[1]=(...r)=>e.onMiddleClick&&e.onMiddleClick(...r))},[c(e.$slots,"default")],40,m)}const l=f(i,[["render",k]]);i.__docgenInfo={displayName:"bx-link",exportName:"default",description:"",tags:{},props:[{name:"href",type:{name:"string"},required:!0}],slots:[{name:"default"}],sourceFiles:["/home/valentin/Projects/vue-bitrix24/src/components/BxLink.vue"]};const g="https://training.bitrix24.com/rest_help/js_library/additional/openPath.php",h="Component opens a specified path inside slider in the Bitrix24 account.",x=/^\/(crm\/(deal|lead|contact|company)|marketplace|company\/personal\/user\/[0-9]+|workgroups\/group\/[0-9]+)\//,C={title:"bx-link",component:l,parameters:{docs:{description:{component:`<a href="${g}" target="_blank">${h}</a>`}}},tags:["autodocs"],args:{default:"bx-link",href:"https://astrotrain55.github.io/vue-bitrix24/"},argTypes:{default:{control:{type:"text"}},href:{description:`${x}`,defaultValue:"",control:{type:"text"}}}},n={render:e=>({template:'<bx-link v-bind="args" v-on="args">{{ args.default }}</bx-link>',data:()=>({args:e}),provide:{$BX24:null},components:{BxLink:l}})};var o,a,s;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => ({
    template: '<bx-link v-bind="args" v-on="args">{{ args.default }}</bx-link>',
    data: () => ({
      args
    }),
    provide: {
      $BX24: null
    },
    components: {
      BxLink
    }
  })
}`,...(s=(a=n.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const X=["Default"];export{n as Default,X as __namedExportsOrder,C as default};
//# sourceMappingURL=BxLink.stories-b226936c.js.map
