<template>
  <div class="text">
    首页 {{$store.state.count}}
    <el-button>1235</el-button>
    <el-config-provider :locale="zhCn">
      <el-date-picker
      v-model="value1"
      type="date"
      placeholder="Pick a day"
    />
    </el-config-provider>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store'
import { getLoginInfo } from '@/api/modules/common'
import { ILoginInfo } from '@/api/types/common'
import { onMounted } from 'vue';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const store = useStore()
console.log(store.state.count)
store.commit('increment')
console.log(store.state)

const value1 = new Date()

onMounted(() => {
  getLoginInfo().then((res: ILoginInfo) => {
    console.log(res)
  }) 
})

</script>

<style scoped lang="scss">
.text {
  color: $color;
}
</style>
