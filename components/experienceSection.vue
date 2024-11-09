<template>
    <div>
        <div class="py-4">
            <h4 class="text-2xl w-full font-bold">工作經歷</h4>
            <!-- 未來v for -->
            <div
                v-for="(index) in 2" :key="index"
                class="border-b border-myColor-borderGery py-4">
                <h5>全球華人1111 - 前端工程師</h5>
                <p>2023/05-現</p>
                <button @click="openTextModel()">做了什麼(點開)</button>
                <PopupTextModal :data=popupData :popupHidden="popupHidden" @popupHidden="emitPopupHidden"></PopupTextModal>
            </div>
        </div>
    </div>
</template>

<script setup>

const popupHidden = ref(true)
const popupData = ref({})
const openTextModel = () =>{
    // 1. 傳項目的id過去 
    // 2. 控制modal的開關
    popupHidden.value = false
    popupData.value = {
        title: '(在)全球華人(的詳細經歷)',
        job: '前端工程師',
        workContent: [
            {
                schedule: '2024/09-尚未結束',
                name: '公司求職管理系統 翻新開發',
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
    }
}

const emitPopupHidden = (status) => {
    popupHidden.value = status
}
</script>