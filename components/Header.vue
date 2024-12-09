<script setup lang="ts">
const route = useRoute()


const path = computed(():string => { 
    return route.path
});

</script>
<template>
    <ul class="flex flex-row h-16"> 
        <NuxtLink 
            class="flex-auto hover:bg-myColor-darkMidGreen hover:text-gray-100 leading-16 text-center transition duration-300 ease-in-out" 
            :class="{'bg-myColor-darkGreen text-gray-100': path === '/','bg-white text-gray-700': path !== '/'}"
            to="/"
        >
            <li>有關我</li>
        </NuxtLink>
        <NuxtLink 
            class="flex-auto hover:bg-myColor-darkMidGreen hover:text-gray-100 leading-16 text-center transition duration-300 ease-in-out" 
            :class="{'bg-myColor-darkGreen text-gray-100': path === '/experience','bg-white text-gray-700': path !== '/experience'}"
            to="/experience"
        >
            <li>經歷</li>
        </NuxtLink>
        <!-- <NuxtLink class="flex-auto hover:bg-myColor-darkMidGreen leading-16 bg-white text-center" to="/APIfunctions"><li>api串接的小功能</li></NuxtLink> -->
        <NuxtLink 
            class="flex-auto hover:bg-myColor-darkMidGreen hover:text-gray-100 leading-16 text-center transition duration-300 ease-in-out" 
            :class="{'bg-myColor-darkGreen text-gray-100': path === '/projects','bg-white text-gray-700': path !== '/projects'}"
            to="/projects"
        >
            <li>專案展示</li>
        </NuxtLink>
        <!-- hover:border-slate-100 -->
    </ul>
</template>