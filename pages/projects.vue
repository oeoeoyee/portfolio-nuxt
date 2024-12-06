<script setup lang="ts">
definePageMeta({
  breadcrumb: [
    {text: '專案展示', href: '/projects'}
  ]
});
</script>

<template>
  <div class="flex justify-center flex-wrap py-20">
    <!-- 這個跟首頁的東西有重複 -->
      <section class="border border-myColor-borderGery bg-white w-5/6 p-4">
        <div class="h-24 m-auto flex items-center border-b border-myColor-borderGery">
            <h2 class="text-3.5xl font-bold">專案展示頁說明</h2>
        </div>
        <div class="m-auto flex-wrap items-center mt-4">
          <div class="py-4">
            <h4 class="text-2xl w-full font-bold">專案作品</h4>
            <div class="border-b border-myColor-borderGery p-4 flex flex-col gap-8">
                <!-- <h5>{{ item.title }} - {{ item.job }}</h5> -->
                <div class="flex flex-col gap-2">
                  <div>
                    <h5 class="text-xl inline-block align-middle">作品集-Nuxt3</h5>
                    <a class="inline-block align-middle pl-1" href="https://oeoeoyee.github.io/portfolio-nuxt/" target="blank"><img src = "@/assets/svg/newtab.svg" alt="newtab SVG"/></a>
                  </div>
                  <li>製作時間：2024/10-2024/12</li>
                  <li>以練習及為目的，嘗試做一個自己的作品集。本專案使用 Vue3、Vite、Nuxt3、tailwind 完成。</li>
                </div>
                <!-- <HrefPic></HrefPic> -->
                <div class="flex flex-col gap-2">
                  <div>
                    <h5 class="text-xl inline-block align-middle">記帳⼩幫⼿ </h5>
                    <a class="inline-block align-middle pl-1" href="https://oeoeoyee.github.io/Vue_accountinghHelper/" target="blank"><img src = "@/assets/svg/newtab.svg" alt="newtab SVG"/></a>
                  </div>
                  <li>製作時間：2023/03</li>
                  <li>以日常需求「記帳」為發想，設計了一個看起來易用的記帳頁面。使用Vue製作。</li>
                </div>
                <div class="flex flex-col gap-2">
                  <div>
                    <h5 class="text-xl inline-block align-middle">團體專題 - 溯。REVERSE歷史藝術博物館網站</h5>
                    <a class="inline-block align-middle pl-1" href="https://tibamef2e.com/tgd102/g1/dist/index.html" target="blank"><img src = "@/assets/svg/newtab.svg" alt="newtab SVG"/></a>
                  </div>
                  <li>製作時間：2022/08-2022/10</li>
                  <li>動態網站，組員共同負責設計、切版、程式邏輯、資料庫建置、PHP語法。使用Vue2完成。</li>
                </div>
                <div class="flex flex-col gap-2">
                  <div>
                    <h5 class="text-xl inline-block align-middle">個人專題 - 百日花藝網站</h5>
                    <a class="inline-block align-middle pl-1" href="https://oeoeoyee.github.io/tgd102_02/index.html" target="blank"><img src = "@/assets/svg/newtab.svg" alt="newtab SVG"/></a>
                  </div>
                  <li>製作時間：2022/06-2022/08</li>
                  <li>靜態網站，以自身興趣當作主題，負責設計、切版、畫面功能呈現。作品獲得轉職班上同學票選「最佳設計」。</li>
                </div>
            </div>
          </div>
          <div class="py-4">
            <h4 class="text-2xl w-full font-bold">學習整理</h4>
            <div class="border-b border-myColor-borderGery p-4 flex flex-col gap-4">
                <!-- <h5>{{ item.title }} - {{ item.job }}</h5> -->
                <div class="flex flex-col gap-2">
                  <!-- <div>
                    <h5 class="text-xl inline-block align-middle">作品集-Nuxt3</h5>
                    <a class="inline-block align-middle pl-1" href="https://oeoeoyee.github.io/portfolio-nuxt/" target="blank"><img src = "@/assets/svg/newtab.svg" alt="newtab SVG"/></a>
                  </div> -->
                  <a 
                    href="https://www.notion.so/b94511f482fd4d07b0f31e5bf7e2b59a?pvs=4"
                    class="bg-myColor-ButtonGreen hover:bg-myColor-ButtonGreen text-gray-800 font-bold py-2 px-4 rounded leading-6 w-36" 
                  >
                   筆記整理及分享
                  </a>
                  <li>製作時間：2022/11-現在</li>
                  <li>目的為製做自己的筆記庫，除了查找方便外，也能隨時與同事分享交流想法。</li>
                </div>
                <!-- <HrefPic></HrefPic> -->
                <div class="flex flex-col gap-2">
                  <!-- <div>
                    <h5 class="text-xl inline-block align-middle">作品集-Nuxt3</h5>
                    <a class="inline-block align-middle pl-1" href="https://oeoeoyee.github.io/portfolio-nuxt/" target="blank"><img src = "@/assets/svg/newtab.svg" alt="newtab SVG"/></a>
                  </div> -->
                  <a 
                    href="https://ithelp.ithome.com.tw/users/20162572/ironman/6808"
                    class="bg-myColor-ButtonGreen hover:bg-myColor-ButtonGreen text-gray-800 font-bold py-2 px-4 rounded leading-6 w-20" 
                  >
                   鐵人賽
                  </a>
                  <li>製作時間：2023/09-2023/10</li>
                  <li>主題為入職將近一年，蠻常用到的技術、困難，包括GIT、JavaScript知識與小功能，及些許的Vue。將自己的知識重新整理、再表達給他人，我認為也是一種進步的方法。</li>
                </div>
            </div>
          </div>
        </div>
      </section>
  </div>
</template>

<style scoped></style>