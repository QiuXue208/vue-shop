<template>
  <div>
    首页 {{$store.state.count}}
  </div>
</template>

<script setup lang="ts">
import { useStore } from '../../store'

const store = useStore()
console.log(store.state.count)
store.commit('increment')
console.log(store.state)

</script>

<style scoped lang="scss"></style>
