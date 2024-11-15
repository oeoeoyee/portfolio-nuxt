<script setup lang="ts"></script>

<template>
  <div class="flex justify-center flex-wrap pb-20">
    Page: projects
    <!-- 這個跟首頁的東西有重複 -->
      <section class="border border-myColor-borderGery bg-white w-5/6 p-4">
        <div class="h-24 m-auto flex items-center border-b border-myColor-borderGery">
            <h2 class="text-3.5xl font-bold">專案展示頁說明</h2>
        </div>
        <div class="m-auto flex-wrap items-center mt-4">
          <div class="py-4">
            <h4 class="text-2xl w-full font-bold">專案作品</h4>
            <div class="border-b border-myColor-borderGery py-4">
                <!-- <h5>{{ item.title }} - {{ item.job }}</h5> -->
                <p>作品集-Nuxt3</p>
                <HrefPic></HrefPic>
                <p>作品集1-Nuxt3</p>
                <p>作品集11-Nuxt3</p>
                <p>作品集-111Nuxt3</p>
            </div>
          </div>
          <div class="py-4">
            <h4 class="text-2xl w-full font-bold">學習整理</h4>
            <div class="border-b border-myColor-borderGery py-4">
                <!-- <h5>{{ item.title }} - {{ item.job }}</h5> -->
                <p>筆記整理集分享</p>
                <p>鐵人賽</p>
            </div>
          </div>
        </div>
      </section>
  </div>
</template>

<style scoped></style>