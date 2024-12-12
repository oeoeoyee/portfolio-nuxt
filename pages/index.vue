<script setup lang="ts">
definePageMeta({
  breadcrumb: [
    {text: '關於我', href: '/'}
  ]
});

const skillArrayAll = ref([
    {
        skillName: '程式方面技能',
        skillArr: ['HTML5', 'CSS3', 'JavaScript ES6', 'Vue3', 'Nuxt3', 'Pinia', 'Vite', 'tailwindCSS', 'SCSS']
    },
    {
        skillName: '開發工具和技術',
        skillArr: ['Git版控', 'API串接與開需求', 'Git版控', 'RWD響應式設計']
    },
    {
        skillName: '個人特質',
        skillArr: ['做事有條理', '積極溝通', '樂於學習與交流']
    },
    {
        skillName: '開發工具和技術',
        skillArr: ['Git版控', 'API串接與開需求', 'Git版控', 'RWD響應式設計']
    },
    {
        skillName: '值得一提',
        skillArr: ['重構頁面 提升載入速度70%', '製作模組，便於成員的開發', '熟悉與後端或企劃溝通', '擅長團隊合作']
    },
])

const test = (): void => {
    console.log('test props')
}
const testPorpsObj = ref({
    num: 123,
    str: '11122233'
})

const emitSkillName = (name: string): void => {
    console.log(name);
}

const emitSkillItem = (item: string): void => {
    console.log(item);
}
</script>

<template>
  <div class="py-10 md:py-20 flex justify-center flex-wrap">
    <section class="border border-myColor-borderGery bg-white w-5/6 p-4">
        <div class="h-24 m-auto flex items-center border-b border-myColor-borderGery">
            <h2 class="text-3.5xl font-bold">有關我</h2>
        </div>
        <div class="m-auto flex-wrap items-center mt-4">
            <h3 class="text-2.5xl w-full font-bold">
                許懷文
                <br>
                HSU HUAI-WEN
            </h3>
            <p class="text-xl w-full mt-4">前端工程師</p>
            <!-- <Header></Header> -->
            <SkillSection 
                :skillArrayAll="skillArrayAll" 
                :test="test" 
                :testObj="testPorpsObj"
                @clickSkillName="emitSkillName"
                @clickSkillItem="emitSkillItem"
            ></SkillSection>
        </div>
    </section>
    <!-- <div>
      <h2>關於我</h2>
      <p>
        我是許懷文，對於學習前端技術有非常大的熱忱。
        <br>我認為生活中的動力，來自於自我學習及精進專業技術，時常有新的知識、觀念注入，才能讓思想更加靈活清澈。
      </p>
    </div>
    <div>
      <h2>技能一覽</h2>
      <h3>寫程式的技能</h3>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <h3>實作上的技能(git)</h3>
      <h3>性格上的優勢</h3>
    </div> -->
  </div>
</template>

<style scoped></style>
