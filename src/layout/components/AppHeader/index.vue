<template>
  <div class="header-left">
    <ToggleSidebarVue />
    <Breadcrumb />
  </div>
  <div class="header-right">
    <FullScreen />
    <UserInfo />
  </div>
</template>

<script lang='ts' setup>
import ToggleSidebarVue from './ToggleSidebar.vue';
import Breadcrumb from './Breadcrumb.vue'
import FullScreen from './FullScreen.vue';
import UserInfo from './UserInfo.vue';
</script>

<style lang='scss' scoped>
.header-left,
.header-right {
  display: flex;
  align-items: center;
}
</style>