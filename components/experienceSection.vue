<template>
    <div>
        <div class="py-4">
            <h4 class="text-2xl w-full font-bold">工作經歷</h4>
            <div
                v-for="(item, index) in experienceData" :key="index"
                class="border-b border-myColor-borderGery py-4 flex flex-col gap-2">
                <h5>{{ item.title }} - {{ item.job }}</h5>
                <p>{{ item.time }}</p>
                <button 
                    class="bg-myColor-ButtonGreen hover:bg-myColor-ButtonGreen text-gray-800 font-bold py-2 px-4 rounded w-32" 
                    @click="openTextModel(index)"
                >
                    詳細工作內容
                </button>
                <PopupTextModal :data=popupData :popupHidden="popupHidden" @popupHidden="emitPopupHidden">
                    <!-- <p class="mt-4 text-gray-600">這是一個使用 Tailwind CSS 實現的對話窗模組範例。你可以在這裡放任何內容，像是訊息、表單等。{{ popupData }}</p> -->
                    <ul class="overflow-auto max-h-96 w-full px-3 min-h-[200px]">
                        <li 
                            v-for="(item, index) in popupData.workContent" :key="index"
                            class="border-b border-myColor-borderGery py-4 flex flex-col gap-2">
                            <b>專案名稱：{{ item.name }}</b>
                            <p>專案時間：{{ item.schedule }}</p>
                            <p>使用技能：{{ item.skill }}</p>
                            <p>合作人數：{{ item.teamsize }}</p>
                            <p>細節描述：{{ item.detail }}</p>
                        </li>
                    </ul>
                </PopupTextModal>
            </div>
        </div>
    </div>
</template>

<script setup>

const popupHidden = ref(true)
const popupData = ref({})
const openTextModel = (jobID) =>{  
    popupHidden.value = false
    popupData.value = experienceData.value[jobID]
}

const emitPopupHidden = (status) => {
    popupHidden.value = status
}

const experienceData = ref([
    {
        title: '壹⼀壹⼀科技股份有限公司(全球華人集團)',
        job: '前端工程師',
        time: '2023/05-現',
        workContent: [
            {
                schedule: '2024/09-尚未結束',
                name: '求職管理系統 翻新開發',
                skill: 'vue3、nuxt3、TypeScript、scss',
                timesize: '前端4位，後端4位，企劃1位、...',
                detail: '採敏捷開發，本次專案為將原交給外包的案子接手回來，對於前端較有挑戰性的是使用新技術(nuxt3)，以及需處理不同頁面中複雜的權限判斷。'
            },
            {
                schedule: '2024/08-2024/09',
                name: '前端工程部自用模組優化',
                skill: 'Vue3+Vite、TypeScript',
                timesize: '前端2位',
                detail: '將活動網站常用功能寫入模組，以便日後覆用。'
            },
            {
                schedule: '2024/07',
                name: '心理測驗網站',
                skill: 'Vue3+Vite、CSS、Bootstrap5、JS',
                teamsize: '前端1位、後端1位、企劃1位',
                detail: '製作活動前台。使用json檔讓測驗結果改變。'
            },
                        {
                schedule: '2024/04-2024/05',
                name: '抽獎活動網站',
                skill: 'Vue3+Vite、CSS、Bootstrap5、JS',
                timesize: '前端2位、後端1位、企劃1位',
                detail: '此專案為公司的抽獎活動，有讓報名、抽獎、公布名單等流程。負責製作活動前後台。包括後台上架功能等。'
            },
            {
                schedule: '2024/01-2024/05',
                name: '公司周年慶活動網站',
                skill: 'Vue3+Vite、CSS、Bootstrap5、JS',
                teamsize: '前端2位、後端1位、企劃1位',
                detail: '此專案為公司較大的活動，有讓報名、抽獎、公布名單等流程。與同事共同製作該專案前台，以及獨立製作後台。前台功能包括判斷登入狀態、串接api顯示推薦人數。後臺功能包括匯出Excel、搜尋報名資料等。'
            },
            {
                schedule: '2023/08-2023/10',
                name: '前端工程部自用模組製作',
                skill: 'Vue3+Vite、TypeScript、使用物件導向',
                timesize: '前端2人',
                detail: '計畫讓工程師能改只動一個JSON檔，就能製作出活動頁面能夠應用的遊戲畫面。其中使用物件導向讓code更簡潔易懂。'
            },
            {
                schedule: '2023/05-2023/08',
                name: '舊專案重構+優化',
                skill: 'JS、JQuery、Vue2、Vue3',
                teamsize: '前端1人',
                detail: '重構原為JS+ JQuery的舊專案頁面，先改寫為Vue2，再改寫為Vue3。優化部分頁面程式寫法。成果為頁面載入速度變快，最多有從10秒變為1秒多。'
            },
        ]
    },
    {
        title: '系統上線故份有限公司',
        job: '程式設計師',
        time: '2022/11-2023/04',
        workContent: [
            {
                schedule: '2022/11-2023/04',
                name: '公司專案維護',
                skill: 'Bootstrap、JS、JQuery、Node.js、SQL語法、Oracle資料庫',
                teamsize: '前端2人、後端1人、PM1人',
                detail: '維護網頁，用Node.js操作資料庫，並讓資料顯示於前台頁面。使用MVC架構。'
            }
        ]
    },
])

</script>

<style scoped>
/* width */
::-webkit-scrollbar {
    width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #d4d4d4;
    border-radius: 3px;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #a8a8a8;
    border-radius: 3px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #e9e9e9;
}
</style>