(function(c,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(c=typeof globalThis<"u"?globalThis:c||self,e(c.TCEventEditorComponent={},c.Vue))})(this,function(c,e){"use strict";class w{getEnumKey(a,l){return a[l]}parseItem(a){return JSON.parse(a)}getCurrent(){return new Date().toISOString()}}var m=(t=>(t[t.Google=1]="Google",t[t.Facebook=2]="Facebook",t))(m||{}),f=(t=>(t[t.Campaign=1]="Campaign",t[t.AdGroup=2]="AdGroup",t[t.Ad=3]="Ad",t[t.AdTag=4]="AdTag",t))(f||{}),d=(t=>(t[t.Never=-1]="Never",t[t.Hour=1]="Hour",t[t.Day=2]="Day",t[t.Week=3]="Week",t[t.Month=4]="Month",t[t.Annual=5]="Annual",t))(d||{}),_=(t=>(t[t.Monday=1]="Monday",t[t.Tuesday=2]="Tuesday",t[t.Wednesday=3]="Wednesday",t[t.Thursday=4]="Thursday",t[t.Friday=5]="Friday",t[t.Saturday=6]="Saturday",t[t.Sunday=7]="Sunday",t[t.Weekday=-1]="Weekday",t[t.Weekend=-2]="Weekend",t))(_||{}),E=(t=>(t[t.First=1]="First",t[t.Second=2]="Second",t[t.Third=3]="Third",t[t.Fourth=4]="Fourth",t[t.Fifth=5]="Fifth",t[t.Last=-1]="Last",t))(E||{}),N=(t=>(t[t.January=1]="January",t[t.February=2]="February",t[t.March=3]="March",t[t.April=4]="April",t[t.May=5]="May",t[t.June=6]="June",t[t.July=7]="July",t[t.August=8]="August",t[t.September=9]="September",t[t.October=10]="October",t[t.November=11]="November",t[t.December=12]="December",t))(N||{}),S=(t=>(t[t.SetNewBudget=1]="SetNewBudget",t[t.IncreaseBudget=2]="IncreaseBudget",t[t.LowerBudget=3]="LowerBudget",t[t.OpenProject=4]="OpenProject",t[t.SuspendProject=5]="SuspendProject",t[t.None=-1]="None",t))(S||{}),g=(t=>(t.DailyBudget="dailyBudget",t.TotalBudget="totalBudget",t))(g||{}),V=(t=>(t.Value="value",t.Percentage="percentage",t))(V||{}),b=(t=>(t.BudgetRemaining="budgetRemaining",t.Impressions="impressions",t.Spent="spent",t.Conversions="conversions",t.ReturnOnADSpending="roas",t.Clicks="clicks",t))(b||{}),B=(t=>(t[t.Today=1]="Today",t[t.Yesterday=2]="Yesterday",t[t.Last3Days=3]="Last3Days",t[t.Last7Days=4]="Last7Days",t[t.ThisMonth=5]="ThisMonth",t[t.LastMonth=6]="LastMonth",t[t.ThisSeason=7]="ThisSeason",t[t.LastSeason=8]="LastSeason",t[t.ThisYear=9]="ThisYear",t[t.LastYear=10]="LastYear",t[t.SpecifiedTime=-1]="SpecifiedTime",t))(B||{}),h=(t=>(t.MoreThan=">",t.GreaterOrEqualTo=">=",t.Equal="==",t.LessThan="<",t.LessThanOrEqualTo="<=",t))(h||{});const I=Object.freeze(Object.defineProperty({__proto__:null,ActionType:S,AdLevelType:f,BudgetType:g,ClientType:m,ConditionType:b,DateRangeType:B,EventHelper:w,FrequencyType:d,MonthType:N,OperationType:h,ValueType:V,WeekOrdinalWordsType:E,WeekdaysType:_},Symbol.toStringTag,{value:"Module"})),C={class:"space-y-3"},L={class:"flex space-x-1"},j={class:"flex items-center gap-1"},J=e.createElementVNode("span",null,"重複",-1),v=["value"],P=e.createElementVNode("option",{value:0},"自訂",-1),q={key:0,class:"flex flex-col space-y-3"},F={class:"flex items-center gap-1"},Y=e.createElementVNode("span",null,"頻率",-1),k=["value"],G={class:"flex items-center space-x-1"},U=e.createElementVNode("span",null,"every",-1),$=["value"],H=e.defineComponent({__name:"RepeatFrequency",props:{frequency:{},interval:{}},emits:["update:frequency","update:interval"],setup(t,{emit:a}){const l=t,n=e.ref(0);l.interval==1&&(n.value=l.frequency),e.watch(n,i=>{d[i]&&(a("update:frequency",i),a("update:interval",1),s.value=n.value)});const s=e.ref(l.frequency);return e.watch(s,i=>a("update:frequency",i)),(i,o)=>(e.openBlock(),e.createElementBlock("div",C,[e.createElementVNode("div",L,[e.createElementVNode("label",j,[J,e.withDirectives(e.createElementVNode("select",{class:"form-select","onUpdate:modelValue":o[0]||(o[0]=r=>n.value=r)},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(d),(r,u)=>(e.openBlock(),e.createElementBlock(e.Fragment,{key:u},[Number.isInteger(r)?(e.openBlock(),e.createElementBlock("option",{key:0,value:r},e.toDisplayString(u),9,v)):e.createCommentVNode("",!0)],64))),128)),P],512),[[e.vModelSelect,n.value]])])]),e.unref(d)[n.value]==null?(e.openBlock(),e.createElementBlock("div",q,[e.createElementVNode("label",F,[Y,e.withDirectives(e.createElementVNode("select",{class:"form-select","onUpdate:modelValue":o[1]||(o[1]=r=>s.value=r)},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(d),(r,u)=>(e.openBlock(),e.createElementBlock(e.Fragment,{key:u},[r!=e.unref(d).Never&&Number.isInteger(r)?(e.openBlock(),e.createElementBlock("option",{key:0,value:r},e.toDisplayString(u),9,k)):e.createCommentVNode("",!0)],64))),128))],512),[[e.vModelSelect,s.value]])]),e.createElementVNode("label",G,[U,e.createElementVNode("input",{type:"text",class:"form-input w-full",onKeyup:o[2]||(o[2]=r=>i.$emit("update:interval",r.target.value)),value:l.interval},null,40,$),e.createElementVNode("span",null,e.toDisplayString(e.unref(d)[s.value]),1)])])):e.createCommentVNode("",!0)]))}}),x=t=>(e.pushScopeId("data-v-f94af63a"),t=t(),e.popScopeId(),t),K={key:0,class:"p-5 rounded-lg border space-y-5"},p=x(()=>e.createElementVNode("div",null,"TC Event Editor is loaded.",-1)),z=x(()=>e.createElementVNode("span",null,"變更標題",-1)),O=e.defineComponent({__name:"TCEventEditorApp",props:{data:{}},emits:["update:data"],setup(t,{emit:a}){const l=t,n=e.computed(()=>JSON.parse(l.data||"{}")),s=()=>a("update:data",JSON.stringify(n.value,null,4));return(i,o)=>l.data?(e.openBlock(),e.createElementBlock("div",K,[p,e.createElementVNode("pre",null,[e.createElementVNode("code",null,"item title: "+e.toDisplayString(n.value.title),1)]),e.createElementVNode("div",null,[e.createElementVNode("label",null,[z,e.withDirectives(e.createElementVNode("input",{type:"text",class:"form-input w-full","onUpdate:modelValue":o[0]||(o[0]=r=>n.value.title=r)},null,512),[[e.vModelText,n.value.title]])])]),e.createVNode(H,{frequency:n.value.frequency,"onUpdate:frequency":o[1]||(o[1]=r=>n.value.frequency=r),interval:n.value.interval,"onUpdate:interval":o[2]||(o[2]=r=>n.value.interval=r)},null,8,["frequency","interval"]),e.createElementVNode("button",{onClick:s,class:"p-2 px-3 rounded-lg bg-slate-100 hover:bg-sky-500 hover:text-white"},"保存")])):e.createCommentVNode("",!0)}}),X="",Q=((t,a)=>{const l=t.__vccOpts||t;for(const[n,s]of a)l[n]=s;return l})(O,[["__scopeId","data-v-f94af63a"]]);c.TCEventEditorApp=Q,c.TCEventItems=I,Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});
