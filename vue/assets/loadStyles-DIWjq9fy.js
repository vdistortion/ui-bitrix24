const m=(s,i,n)=>i&&n?{render:e=>({template:`
        <div v-for="item in propList" :key="item" class="component">
          <Component v-bind="args" v-on="args" :[propName]="item">{{ args.default }}</Component>
        </div>
      `,data:()=>({args:e,propName:i,propList:n}),provide:{$BX24:null},components:{Component:s}}),argTypes:{[i]:{table:{disable:!0}}}}:{render:e=>({template:'<Component v-bind="args" v-on="args">{{ args.default }}</Component>',data:()=>({args:e}),provide:{$BX24:null},components:{Component:s}})},a=s=>{const n=`https://${s?s.getDomain():"www.bitrix24.ru"}/bitrix/js`,r=["ui/design-tokens/dist/ui.design-tokens.min.css","ui/alerts/ui.alerts.min.css","ui/buttons/ui.buttons.min.css","ui/buttons/icons/ui.buttons.icons.min.css","ui/entity-selector/dist/entity-selector.bundle.min.css","ui/forms/ui.forms.min.css","ui/hint/ui.hint.min.css","ui/icons/b24/ui.icons.b24.min.css","ui/icons/base/ui.icons.base.min.css","ui/icons/disk/ui.icons.disk.min.css","ui/icons/service/ui.icons.service.min.css","ui/layout-form/dist/layout-form.bundle.min.css","ui/progressbar/ui.progressbar.min.css","main/popup/dist/main.popup.bundle.min.css"].reduce((t,c)=>{const u=[n,c].join("/");if(document.querySelectorAll(`[href="${u}"]`).length)return t;const o=document.createElement("link");return o.rel="stylesheet",o.href=u,t.append(o),t},new DocumentFragment);r.children.length&&document.head.append(r)};export{m as S,a as l};