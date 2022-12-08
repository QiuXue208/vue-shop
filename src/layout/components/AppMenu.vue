<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
    :collapse="$store.state.isCollapse"
    router
  >
    <el-menu-item index="/">
      <el-icon><HomeFilled /></el-icon>
      <span>首页</span>
    </el-menu-item>
    <el-sub-menu index="/product">
      <template #title>
        <el-icon><Goods /></el-icon>
        <span>商品</span>
      </template>
      <el-menu-item index="/product/product_list">商品列表</el-menu-item>
      <el-menu-item index="/product/product_classify">商品分类</el-menu-item>
      <el-menu-item index="/product/product_attr">商品规格</el-menu-item>
      <el-menu-item index="/product/product_comment">商品评论</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><ShoppingTrolley /></el-icon>
      <span>订单</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>