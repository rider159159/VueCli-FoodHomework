<template>
  <button type="button" class="top top__scroll btn rounded-circle d-flex p-1 text-secondary bg-white" @click.prevent="scrollToTop(0)" v-if="isShowOfTop">
    <span class="material-icons">arrow_upward</span>
  </button>
</template>

<script>
export default {
  data () {
    return {
      isShowOfTop: false
    }
  },
  methods: {
    scrollToTop (scrollNumber) {
      window.scrollTo({
        top: scrollNumber,
        behavior: 'smooth'
      })
    },
    showTop () {
      const vm = this
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 100) {
        vm.isShowOfTop = true
      } else {
        vm.isShowOfTop = false
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.showTop)
  },
  unmounted () {
    window.removeEventListener('scroll', this.showTop)
  }
}
</script>
