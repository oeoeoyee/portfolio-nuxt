<template>
  <div class="font-mono bg-myColor-mainGreen">
    <Header></Header>
    <!-- <ul class="flex flex-row"> 
        <NuxtLink class="flex-auto borer-solid	border-black border hover:border-slate-100" to="/"><li>Index</li></NuxtLink>
        <NuxtLink class="flex-auto borer-solid	border-black border hover:border-slate-100" to="/about"><li>About Me</li></NuxtLink>
        <NuxtLink class="flex-auto borer-solid	border-black border hover:border-slate-100" to="/APIfunctions"><li>api串接的小功能</li></NuxtLink>
        <NuxtLink class="flex-auto borer-solid	border-black border hover:border-slate-100" to="/projects"><li>專案展示</li></NuxtLink>
    </ul> -->
    <!-- <NuxtRouteAnnouncer /> -->
    <!-- <NuxtWelcome /> -->
    <NuxtLayout>
      <!-- <h1 class="text-6xl p-10 text-center">首頁/目錄</h1> -->
      <!-- <p>本專案(應該會)使用 Vue3、Vite、Nuxt、TypeScript、tailwind、JavaScript、CSS、HTML</p> -->
      <!-- <Breadcrumb /> -->
      <NuxtPage />
    </NuxtLayout>
<!--     <div>
      <AppAlert>
        This is an auto-imported component.
      </AppAlert>
    </div> -->
  </div>
</template>

<style>
@import 'tailwindcss/tailwind.css';
</style>

<script setup>

</script>