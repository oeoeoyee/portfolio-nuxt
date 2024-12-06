<template>
  <nav aria-label="breadcrumb">
    <!-- <ol class="breadcrumb">
      <li
        v-for="(crumb, index) in breadcrumbs"
        :key="index"
        :class="{ 'breadcrumb-item': true, active: index === breadcrumbs.length - 1 }"
        aria-current="page"
      >
        <nuxt-link v-if="crumb.href" :to="crumb.href">{{ crumb.text }}</nuxt-link>
        <span v-else>{{ crumb.text }}</span>
      </li>
    </ol> -->
  </nav>
</template>

<script setup>
import { useRoute } from '#app';

const route = useRoute();
const breadcrumbs = route.meta.breadcrumb || [];


</script>

<style>
.breadcrumb {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}
.breadcrumb-item {
  margin-right: 0.5rem;
}
.breadcrumb-item + .breadcrumb-item:before {
  content: '>';
  margin-right: 0.5rem;
}
</style>