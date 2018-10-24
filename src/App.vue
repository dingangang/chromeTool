<template>
  <div id="app">
    <iframe id="disable-ui-style" :src="url" frameborder="0"></iframe>
    <div class="tip">修改样式期间，请不要关闭此页面！</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      url: 'http://localhost:8089/style-change'
    }
  },
  created () {
    const vm = this
    document.documentElement.addEventListener('DOMSubtreeModified', function () {
      vm.url = ''
      vm.$nextTick(() => {
        vm.url = 'http://localhost:8089/style-change'
      })
    })
  }
}
</script>

<style>
  .tip {
    position: fixed;
    top: 45%;
    width: 100%;
    font-size: 30px;
    text-align: center;
  }
</style>
