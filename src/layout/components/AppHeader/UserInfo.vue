<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      {{$store.state.user?.username}}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item @click="handleLogout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang='ts' setup>
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus'
import { useStore } from 'vuex'

const router = useRouter()
const store = useStore()
const handleLogout = () => {
  router.replace('login')
  // 清除用户信息
  store.commit('setUserInfo', null)
  ElMessage({
    type: 'success',
    message: '退出成功',
  })
}

</script>

<style lang='scss' scoped>
.el-dropdown {
  margin-left: 12px;
  &-link {
    display: flex;
  }
}
</style>