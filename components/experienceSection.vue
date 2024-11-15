<template>
    <div>
        <div class="py-4">
            <h4 class="text-2xl w-full font-bold">工作經歷</h4>
            <div
                v-for="(item, index) in experienceData" :key="index"
                class="border-b border-myColor-borderGery py-4">
                <h5>{{ item.title }} - {{ item.job }}</h5>
                <p>{{ item.time }}</p>
                <button @click="openTextModel(index)">做了什麼(點開)</button>
                <PopupTextModal :data=popupData :popupHidden="popupHidden" @popupHidden="emitPopupHidden"></PopupTextModal>
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
        title: '全球華人1111',
        job: '前端工程師',
        time: '2023/05-現',
        workContent: [
            {
                schedule: '2024/09-尚未結束',
                name: '求職管理系統 翻新開發',
                skill: 'vue3、nuxt3、scss',
                timesize: '前端三位，後端四位，企劃兩位、...',
                detail: '採敏捷開發，本次專案為將原交給外包的案子接手回來，最複雜的工作是...。'
            },
            {
                schedule: '2024/06-2024/09',
                name: '前端模組開發',
                skill: 'vue3、ts',
                timesize: '前端兩位',
                detail: '。。。。。。。。。'
            },
        ]
    },
        {
        title: '系統上線',
        job: '程式設計師',
        time: '2022/11-2023/04',
        workContent: [
            {
                schedule: '2022/11-2023/04',
                name: '專案',
                skill: 'JS、Bootstrap、NodeJS、SQL語法',
                timesize: '前後端一起??',
                detail: '採敏捷開發，本次專案為將原交給外包的案子接手回來，最複雜的工作是...。'
            }
        ]
    },
])

</script>