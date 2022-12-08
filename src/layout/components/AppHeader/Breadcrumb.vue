<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="route in breadcrumbRoute" :key="route.path">
      {{route.meta.title}}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang='ts' setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const breadcrumbRoute = computed(() => {
  return route.matched.filter(item => item.meta.title)
})
</script>

<style lang='scss' scoped>
.el-breadcrumb {
  margin-left: 12px;
}
</style>