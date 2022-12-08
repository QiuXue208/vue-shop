<template>
  <el-container>
    <el-aside>
      <AppMenu />
    </el-aside>
    <el-container>
      <el-header>
        <AppHeader />
      </el-header>
      <el-main>
        <!-- 子路由出口 -->
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import AppMenu from '@/layout/components/AppMenu.vue'
import AppHeader from '@/layout/components/AppHeader/index.vue'
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;
}
.el-menu {
  border: none;
}
.el-menu:not(.el-menu--collapse) {
  width: 200px;
}
.el-main {
  background-color: #f8f9fb;
}
.el-header {
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.el-aside {
  background-color: #545c64;
  width: auto;
}
</style>