<template>
    <ul class="flex flex-row h-16"> 
        <NuxtLink class="flex-auto hover:bg-myColor-hoverGreen leading-16 bg-white text-center" to="/"><li>Index</li></NuxtLink>
        <NuxtLink class="flex-auto hover:bg-myColor-hoverGreen leading-16 bg-white text-center" to="/about"><li>About Me</li></NuxtLink>
        <NuxtLink class="flex-auto hover:bg-myColor-hoverGreen leading-16 bg-white text-center" to="/APIfunctions"><li>api串接的小功能</li></NuxtLink>
        <NuxtLink class="flex-auto hover:bg-myColor-hoverGreen leading-16 bg-white text-center" to="/projects"><li>專案展示</li></NuxtLink>
        <!-- hover:border-slate-100 -->
    </ul>
</template>