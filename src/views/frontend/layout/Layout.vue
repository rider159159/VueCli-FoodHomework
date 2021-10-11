<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-white sticky-top transition" :class="{'py-0':isPadding}">
      <div class="container">
        <router-link to="/" class="navbar-brand text-primary">
          <h1 class="h2 d-flex align-items-center mb-0" @click="collapseHide">
            <span class="material-icons-outlined material-icons mr-2 h1">
              rice_bowl
            </span>
            <span>炙燒食堂</span>
          </h1>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="custom__nav navbar-nav ml-auto">
            <li class="nav-item custom__nav--hover" :class="{'active':navIndex === '0'}" @click="collapseHide('0')">
              <router-link to="/products" class="nav-link d-none d-lg-block">我們的餐點</router-link>
              <router-link to="/products" class="nav-link border-bottom d-lg-none">我們的餐點</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <top></top>
    <router-view/>
    <footer class="bg-primary py-2">
      <div class="container">
        <div class="row align-items-center">
          <div class="col">
            <div class="d-flex flex-column justify-content-center">
              <a href="https://maps.google.com/maps?q=桃園市平鎮區民族路239號2樓" target="_blank" class="text-white text-nowrap text-decoration">
                324桃園市平鎮區民族路239號2樓
              </a>
              <p class="mb-0 text-nowrap text-white">週一 ~ 週六 11:00~20:00</p>
            </div>
          </div>
          <div class="col">
            <div class="d-flex justify-content-end align-items-center">
              <a
                href="tel:0903017408"
                class="h2 text-decoration-none text-white mb-0 mr-2">
                <i class="fas fa-phone-square-alt"></i>
              </a>
              <a
                href="#"
                class="h2 text-decoration-none text-white mb-0 mr-2" target="_blank">
                <i class="fab fa-facebook-square"></i>
              </a>
              <a
                href="#" target="_blank"
                class="h2 text-decoration-none text-white mb-0 d-lg-none">
                <i class="fab fa-line"></i>
              </a>
              <a
                href="#" target="_blank"
                class="h2 text-decoration-none text-white mb-0 d-none d-lg-block">
                <i class="fab fa-line"></i>
              </a>
            </div>
          </div>
          <div class="col-12">
            <p class="text-center text-secondary mb-0">
              <span>炙燒食堂</span>
              <small class="d-block d-md-inline"> © Copright 2021  僅為作品無任何商業用途.</small>
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import $ from 'jquery'
import Top from '@/components/Top.vue'
export default {
  components: {
    Top
  },
  data () {
    return {
      navIndex: '',
      isPadding: false
    }
  },
  methods: {
    collapseHide (index) {
      this.navIndex = index
      $('#navbarSupportedContent').collapse('hide')
    },
    scrollToNav () {
      const vm = this
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 60) {
        vm.isPadding = true
      } else {
        vm.isPadding = false
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollToNav)
  },
  unmounted () {
    window.removeEventListener('scroll', this.scrollToNav)
  }
}
</script>
