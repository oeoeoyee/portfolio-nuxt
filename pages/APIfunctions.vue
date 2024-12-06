<script setup lang="ts">
// 可以串接 台北觀光api主題遊程
const travelData = ref([]);
const { data, pending, refresh, execute, error, status } = 
  // useFetch('https://www.travel.taipei/open-api/zh-tw/Miscellaneous/Categories?type=Activity');
  useFetch('https://data.taipei/api/v1/dataset/36847f3f-deff-4183-a5bb-800737591de5?scope=resourceAquire');
console.log(data.value);
// https://data.taipei/dataset?qs=&topic=%E8%A7%80%E5%85%89
travelData.value = data.value;

</script>

<template>
  <div>
    <ul>
      <li v-for="(item, index) in travelData" :key=index>{{ item }}</li>
    </ul>
  </div>
</template>

<style scoped></style>