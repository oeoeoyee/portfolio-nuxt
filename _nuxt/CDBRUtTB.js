import{I as V,J as $,o,c as l,a as e,t,K as H,_ as S,r as u,G as h,H as f,b as y,w as C,z as p,L as j,B as w,M as z,F as M}from"./5Lp_Gvtp.js";const B={class:"fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50",id:"modal"},J={class:"bg-white rounded-lg w-11/12 sm:w-4/5 p-6 max-h-5/6 sm:max-h-4/6"},E={class:"flex justify-between items-center mb-2"},G={class:"text-xl font-semibold text-gray-800"},g={__name:"textModal",props:{data:{type:Object,default:()=>({}),required:!0},popupHidden:{type:Boolean,default:!0}},emits:["popupHidden"],setup(_,{emit:n}){const r=_,i=n,m=()=>{i("popupHidden",!0)};return(d,a)=>V((o(),l("div",B,[e("div",J,[e("div",E,[e("h2",G,t(r.data.title)+"-"+t(r.data.job),1),e("button",{id:"closeModal",onClick:m,class:"text-gray-500 hover:text-gray-700"},a[0]||(a[0]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)]))]),H(d.$slots,"default")])],512)),[[$,!_.popupHidden]])}},P={class:"py-4"},T=["onClick"],N={class:"overflow-auto max-h-96 w-full px-3 min-h-[200px]"},D={__name:"experienceSection",setup(_){const n=u(!0),r=u({}),i=a=>{n.value=!1,r.value=d.value[a]},m=a=>{n.value=a},d=u([{title:"壹⼀壹⼀科技股份有限公司(全球華人集團)",job:"前端工程師",time:"2023/05-現",workContent:[{schedule:"2024/09-尚未結束",name:"求職管理系統 翻新開發",skill:"vue3、nuxt3、TypeScript、scss",timesize:"前端4位，後端4位，企劃1位、...",detail:"採敏捷開發，本次專案為將原交給外包的案子接手回來，對於前端較有挑戰性的是使用新技術(nuxt3)，以及需處理不同頁面中複雜的權限判斷。"},{schedule:"2024/08-2024/09",name:"前端工程部自用模組優化",skill:"Vue3+Vite、TypeScript",timesize:"前端2位",detail:"將活動網站常用功能寫入模組，以便日後覆用。"},{schedule:"2024/07",name:"心理測驗網站",skill:"Vue3+Vite、CSS、Bootstrap5、JS",teamsize:"前端1位、後端1位、企劃1位",detail:"製作活動前台。使用json檔讓測驗結果改變。"},{schedule:"2024/04-2024/05",name:"抽獎活動網站",skill:"Vue3+Vite、CSS、Bootstrap5、JS",timesize:"前端2位、後端1位、企劃1位",detail:"此專案為公司的抽獎活動，有讓報名、抽獎、公布名單等流程。負責製作活動前後台。包括後台上架功能等。"},{schedule:"2024/01-2024/05",name:"公司周年慶活動網站",skill:"Vue3+Vite、CSS、Bootstrap5、JS",teamsize:"前端2位、後端1位、企劃1位",detail:"此專案為公司較大的活動，有讓報名、抽獎、公布名單等流程。與同事共同製作該專案前台，以及獨立製作後台。前台功能包括判斷登入狀態、串接api顯示推薦人數。後臺功能包括匯出Excel、搜尋報名資料等。"},{schedule:"2023/08-2023/10",name:"前端工程部自用模組製作",skill:"Vue3+Vite、TypeScript、使用物件導向",timesize:"前端2人",detail:"計畫讓工程師能改只動一個JSON檔，就能製作出活動頁面能夠應用的遊戲畫面。其中使用物件導向讓code更簡潔易懂。"},{schedule:"2023/05-2023/08",name:"舊專案重構+優化",skill:"JS、JQuery、Vue2、Vue3",teamsize:"前端1人",detail:"重構原為JS+ JQuery的舊專案頁面，先改寫為Vue2，再改寫為Vue3。優化部分頁面程式寫法。成果為頁面載入速度變快，最多有從10秒變為1秒多。"}]},{title:"系統上線故份有限公司",job:"程式設計師",time:"2022/11-2023/04",workContent:[{schedule:"2022/11-2023/04",name:"公司專案維護",skill:"Bootstrap、JS、JQuery、Node.js、SQL語法、Oracle資料庫",teamsize:"前端2人、後端1人、PM1人",detail:"維護網頁，用Node.js操作資料庫，並讓資料顯示於前台頁面。使用MVC架構。"}]}]);return(a,x)=>{const v=g;return o(),l("div",null,[e("div",P,[x[0]||(x[0]=e("h4",{class:"text-2xl w-full font-bold"},"工作經歷",-1)),(o(!0),l(h,null,f(p(d),(c,b)=>(o(),l("div",{key:b,class:"border-b border-myColor-borderGery py-4 flex flex-col gap-2"},[e("h5",null,t(c.title)+" - "+t(c.job),1),e("p",null,t(c.time),1),e("button",{class:"bg-myColor-ButtonGreen hover:bg-myColor-ButtonGreen text-gray-800 font-bold py-2 px-4 rounded w-32",onClick:s=>i(b)}," 詳細工作內容 ",8,T),y(v,{data:p(r),popupHidden:p(n),onPopupHidden:m},{default:C(()=>[e("ul",N,[(o(!0),l(h,null,f(p(r).workContent,(s,k)=>(o(),l("li",{key:k,class:"border-b border-myColor-borderGery py-4 flex flex-col gap-2"},[e("b",null,"專案名稱："+t(s.name),1),e("p",null,"專案時間："+t(s.schedule),1),e("p",null,"使用技能："+t(s.skill),1),e("p",null,"合作人數："+t(s.teamsize),1),e("p",null,"細節描述："+t(s.detail),1)]))),128))])]),_:2},1032,["data","popupHidden"])]))),128))])])}}},L=S(D,[["__scopeId","data-v-04784e13"]]),Q={class:"py-4"},R=["onClick"],I={class:"overflow-auto max-h-96 w-full px-3 min-h-[200px]"},O={__name:"studySection",setup(_){const n=u(!0),r=u({}),i=a=>{n.value=!1,r.value=d.value[a]},m=a=>{n.value=a},d=u([{title:"緯育Tibame",job:"前端工程師養成班",time:"2022/06-2022/10",workContent:[{schedule:"2022/08-2022/10",name:"團體專題 - 溯。REVERSE歷史藝術博物館網站",skill:"scss、JS、Vue",teamsize:"組員6人",detail:"動態網站，組員共同負責設計、切版、程式邏輯、資料庫建置、PHP語法。"},{schedule:"2022/06-2022/08",name:"個人專題 - 百日花藝網站",skill:"HTML、CSS、JS",teamsize:"前端1人",detail:"靜態網站，自己負責設計、切版、畫面功能呈現。作品獲得班上同學票選「最佳設計」。"}]},{title:"線上課程",job:"Vue3技術精進、Nuxt3技能學習",time:"2024/08-2024/10",workContent:[{schedule:"2022/11-2023/04",name:"自我介紹練習專案",skill:"Vue3、Nuxt3",teamsize:"前端1人",detail:"作為課程練習，順便寫一個自己的作品集、簡歷。"}]},{title:"勞動部職業訓練中⼼",job:"DREAMWEAVER暨CSS網⾴設計假⽇班",time:"2021/10-2022/01",workContent:[]}]);return(a,x)=>{const v=g;return o(),l("div",null,[e("div",Q,[x[0]||(x[0]=e("h4",{class:"text-2xl w-full font-bold"},"進修/學習經歷",-1)),(o(!0),l(h,null,f(p(d),(c,b)=>(o(),l("div",{key:b,class:"border-b border-myColor-borderGery py-4 flex flex-col gap-2"},[e("h5",null,t(c.title)+" - "+t(c.job),1),e("p",null,t(c.time),1),c.workContent.length>0?(o(),l("button",{key:0,class:"bg-myColor-ButtonYellow hover:bg-myColor-ButtonYellow text-gray-800 font-bold py-2 px-4 rounded w-32",onClick:s=>i(b)}," 詳細學習成果 ",8,R)):j("",!0),y(v,{data:p(r),popupHidden:p(n),onPopupHidden:m},{default:C(()=>[e("ul",I,[(o(!0),l(h,null,f(p(r).workContent,(s,k)=>(o(),l("li",{key:k,class:"border-b border-myColor-borderGery py-4 flex flex-col gap-2"},[e("b",null,"專案名稱："+t(s.name),1),e("p",null,"專案時間："+t(s.schedule),1),e("p",null,"使用技能："+t(s.skill),1),e("p",null,"合作人數："+t(s.teamsize),1),e("p",null,"細節描述："+t(s.detail),1)]))),128))])]),_:2},1032,["data","popupHidden"])]))),128))])])}}},A=S(O,[["__scopeId","data-v-c9cc3ca7"]]),F={class:"flex justify-center flex-wrap"},Y={class:"border border-myColor-borderGery bg-white w-5/6 p-4"},q={class:"m-auto flex-wrap items-center mt-4"},K={__name:"Section",setup(_){const n=u("");return u({num:123,str:"11122233"}),w(()=>`${n.value}測試名`),w(()=>n.value.length>5),u(null),z(()=>{}),(r,i)=>{const m=L,d=A;return o(),l("div",F,[e("section",Y,[i[0]||(i[0]=e("div",{class:"h-24 m-auto flex items-center border-b border-myColor-borderGery"},[e("h2",{class:"text-3.5xl font-bold"},"歷程")],-1)),e("div",q,[y(m),y(d)])])])}}},W={class:"py-20 md:py-10"},X=M({__name:"experience",setup(_){return(n,r)=>{const i=K;return o(),l("div",W,[y(i)])}}});export{X as default};
