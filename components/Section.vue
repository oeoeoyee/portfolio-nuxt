<template>
    <div class="flex justify-center flex-wrap">
        <!-- <div class="w-5/6">section測試</div> -->
        <!-- <p v-if="titleHasShow">測試標題{{titleTest}}</p>
        <input v-model="title" type="text">
        <p ref="testTxt">測試文字</p> -->
        <section class="border border-myColor-borderGery bg-white w-5/6 p-4">
            <div class="h-24 m-auto flex items-center border-b border-myColor-borderGery">
                <h2 class="text-3.5xl font-bold">歷程</h2>
            </div>
            <div class="m-auto flex-wrap items-center mt-4">
                <ExperienceSection></ExperienceSection>
                <StudySection></StudySection>
            </div>
        </section>
        <!-- 會用到的集合:邊框樣式、section周邊留空、h1234字型 -->
        <!-- 組件:section、button -->
        <!-- 配色可以改一下，否則看起來不太專業 -->
        <!-- 到時候技能做成一個全json -->
    </div>
</template>

<script setup>
// import experienceSection from "./experienceSection.vue"

const title = ref('')
// const skillArrayAll = ref([
//     {
//         skillName: '程式方面技能',
//         skillArr: ['HTML5', 'CSS3', 'JavaScript ES6', 'Vue3', 'Pinia', 'Vite']
//     },
//     {
//         skillName: '開發工具和技術',
//         skillArr: ['Git版控', 'API串接與開需求', 'Git版控', 'RWD響應式設計']
//     },
// ])

const test = () => {
    console.log('test props')
}
const testPorpsObj = ref({
    num: 123,
    str: '11122233'
})

// const emitSkillName = (name) => {
//     console.log(name);
// }

// const emitSkillItem = (item) => {
//     console.log(item);
// }

// const codeSkillArray = ref(['HTML5', 'CSS3', 'JavaScript ES6', 'Vue3', 'Pinia', 'Vite'])
// const toolSkillArray = ref(['Git版控', 'API串接與開需求', 'Git版控', 'RWD響應式設計'])
const titleTest = computed(()=>{
    return `${title.value}測試名`
})
const titleHasShow = computed(()=>{
    return title.value.length > 5
})

const testTxt = ref(null) //請先給一個null

// console.log(testTxt.value) //組件掛載前，取不到testTxt 

onMounted(()=>{
	// console.log("test:", testTxt.value) //組件掛載後，取得到testTxt 
})
</script>
