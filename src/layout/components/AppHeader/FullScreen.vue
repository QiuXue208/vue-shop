<template>
  <el-icon @click="handleScreen"><FullScreen /></el-icon>
</template>

<script lang='ts' setup>

const handleScreen = () => {
  toggleFullScreen()
}

function toggleFullScreen() {
  if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

document.addEventListener("keydown", function(e) {
  if (e.keyCode == 13) {
    toggleFullScreen();
  }
}, false);

</script>

<style lang='scss' scoped>

</style>