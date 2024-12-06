<template>
    <div>
        <div class="py-4">
            <h4 class="text-2xl w-full font-bold">進修/學習經歷</h4>
            <div
                v-for="(item, index) in experienceData" :key="index"
                class="border-b border-myColor-borderGery py-4 flex flex-col gap-2">
                <h5>{{ item.title }} - {{ item.job }}</h5>
                <p>{{ item.time }}</p>
                <button 
                    class="bg-myColor-ButtonYellow hover:bg-myColor-ButtonYellow text-gray-800 font-bold py-2 px-4 rounded w-32" 
                    v-if="item.workContent.length>0"
                    @click="openTextModel(index)"
                >
                    詳細學習成果
                </button>
                <PopupTextModal :data=popupData :popupHidden="popupHidden" @popupHidden="emitPopupHidden">
                    <!-- <p class="mt-4 text-gray-600">這是一個使用 Tailwind CSS 實現的對話窗模組範例。你可以在這裡放任何內容，像是訊息、表單等。{{ popupData }}</p> -->
                    <ul class="overflow-y-auto max-h-[600px] px-3">
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
        title: '緯育Tibame',
        job: '前端工程師養成班',
        time: '2022/06-2022/10',
        workContent: [
            {
                schedule: '2022/08-2022/10',
                name: '團體專題 - 溯。REVERSE歷史藝術博物館網站',
                skill: 'scss、JS、Vue',
                teamsize: '組員6人',
                detail: '動態網站，組員共同負責設計、切版、程式邏輯、資料庫建置、PHP語法。'
            },
            {
                schedule: '2022/06-2022/08',
                name: '個人專題 - 百日花藝網站',
                skill: 'HTML、CSS、JS',
                teamsize: '前端1人',
                detail: '靜態網站，自己負責設計、切版、畫面功能呈現。作品獲得班上同學票選「最佳設計」。'
            },
        ]
    },
    {
        title: '線上課程',
        job: 'Vue3技術精進、Nuxt3技能學習',
        time: '2024/08-2024/10',
        workContent: [
            {
                schedule: '2022/11-2023/04',
                name: '自我介紹練習專案',
                skill: 'Vue3、Nuxt3',
                teamsize: '前端1人',
                detail: '作為課程練習，順便寫一個自己的作品集、簡歷。'
            }
        ]
    },
    {
        title: '勞動部職業訓練中⼼',
        job: 'DREAMWEAVER暨CSS網⾴設計假⽇班',
        time: '2021/10-2022/01',
        workContent: []
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