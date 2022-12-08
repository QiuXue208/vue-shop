<template>
  <el-icon v-if="$store.state.isCollapse" @click="$store.commit('collapseMenu')">
    <Expand />
  </el-icon>
  <el-icon v-if="!$store.state.isCollapse" @click="$store.commit('collapseMenu')">
    <Fold />
  </el-icon>
</template>

<script lang='ts' setup>

</script>

<style lang='scss' scoped>

</style>