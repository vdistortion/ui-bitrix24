const o=(t,e,r)=>e&&r?{render:n=>({template:`
        <div v-for="item in propList" :key="item" class="component">
          <Component v-bind="args" v-on="args" :[propName]="item">{{ args.default }}</Component>
        </div>
      `,data:()=>({args:n,propName:e,propList:r}),provide:{$BX24:null},components:{Component:t}}),argTypes:{[e]:{table:{disable:!0}}}}:{render:n=>({template:'<Component v-bind="args" v-on="args">{{ args.default }}</Component>',data:()=>({args:n}),provide:{$BX24:null},components:{Component:t}})};export{o as S};
