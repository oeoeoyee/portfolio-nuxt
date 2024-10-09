<template>
  <div class="font-mono">
    <ul class="flex flex-row border-solid	border-black border hover:border-slate-100"> 
        <li class="flex-auto"><NuxtLink to="/">Index</NuxtLink></li>
        <li class="flex-auto"><NuxtLink to="/about">About</NuxtLink></li>
    </ul>
    <!-- <NuxtRouteAnnouncer /> -->
    <!-- <NuxtWelcome /> -->
    <NuxtLayout>
      <NuxtPage />
      <h1 class="text-6xl py-10">首頁/目錄</h1>
      <p>本專案(應該會)使用 Vue3、Vite、Nuxt、TypeScript、tailwind、JavaScript、CSS、HTML</p>
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
