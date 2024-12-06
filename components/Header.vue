<script setup lang="ts">
const route = useRoute()


const path = computed(():string => { 
    return route.path
});

</script>
<template>
    <ul class="flex flex-row h-16"> 
        <NuxtLink 
            :class="{'bg-myColor-hoverGreen': path === '/','bg-white': path !== '/'}"
            class="flex-auto hover:bg-myColor-hoverGreen leading-16 text-center" 
            to="/"
        >
            <li>Index</li>
        </NuxtLink>
        <NuxtLink 
            class="flex-auto hover:bg-myColor-hoverGreen leading-16 text-center" 
            :class="{'bg-myColor-hoverGreen': path === '/about','bg-white': path !== '/about'}"
            to="/about"
        >
            <li>About Me</li>
        </NuxtLink>
        <!-- <NuxtLink class="flex-auto hover:bg-myColor-hoverGreen leading-16 bg-white text-center" to="/APIfunctions"><li>api串接的小功能</li></NuxtLink> -->
        <NuxtLink 
            class="flex-auto hover:bg-myColor-hoverGreen leading-16 text-center" 
            :class="{'bg-myColor-hoverGreen': path === '/projects','bg-white': path !== '/projects'}"
            to="/projects"
        >
            <li>專案展示</li>
        </NuxtLink>
        <!-- hover:border-slate-100 -->
    </ul>
</template>