<template>
  <div class="text">
    首页 {{$store.state.count}}
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store'
import { getLoginInfo } from '@/api/modules/common'
import { ILoginInfo } from '@/api/types/common'
import { onMounted } from 'vue';

const store = useStore()
console.log(store.state.count)
store.commit('increment')
console.log(store.state)

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
