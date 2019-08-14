<template>
  <div class="AppMenu">
    <div
      class="AppMenu__backdrop"
      :class="{'AppMenu__trigger--visible': showMenu}"
      @click="appMenuToggle"
    />
    <div
      class="AppMenu__trigger"
      :class="{'AppMenu__trigger--triggered': showMenu}"
      @click="appMenuToggle"
    />
    <div
      class="AppMenu__links"
      :class="{'AppMenu__links--open': showMenu}"
    >
      <div class="AppMenu__closer">
        <app-icon
          name="close"
          color="white"
          @click="appMenuToggle"
        />
      </div>
      <ul>
        <li
          v-for="(link, index) in links"
          :key="index"
          @click="appMenuToggle"
        >
          <router-link :to="link.path">
            {{ link.label }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="js">
export default {
  /**
   */
  name: 'AppMenu',
  /**
   */
  props: {
    links: {
      type: Array,
      required: true
    }
  },
  /**
   */
  data: () => ({
    showMenu: false
  }),
  /**
   */
  methods: {
    /**
     */
    appMenuToggle () {
      this.showMenu = !this.showMenu
    }
  }
}
</script>

<style
  lang="stylus"
  scoped
>
@import "~src/assets/variables.styl"

.AppMenu__absolute
  position absolute
  top 0
  left 0

.AppMenu__transition
  position absolute
  background $primary
  transition-property transform, opacity
  transition-timing-function ease-in-out
  transition-duration .3s

.AppMenu
  @extend .AppMenu__absolute
  > .AppMenu__backdrop
    @extend .AppMenu__absolute
    @extend .AppMenu__transition
    z-index 1
    height 100vh
    width 100vw
    background-color rgba(0, 0, 0, 0.45)
    transition opacity .5s ease-in-out, transform .1s .5s
    transform translateX(-110vw)
    opacity 0

    &.AppMenu__trigger--visible
      transition opacity .5s ease-in-out, transform .1s .0s ease-in-out
      transform translateX(0)
      opacity 1

  > .AppMenu__trigger
    @extend .AppMenu__transition
    z-index 2
    box-shadow 3px 1px 9px 4px rgba(0, 0, 0, 0.2)
    width 80px
    height 80px
    border-radius 40px
    top -40px
    left -40px
    cursor pointer
    opacity 1
    animation shadow-pulse 2s infinite

    &:hover
      transform scale(2)

    &.AppMenu__trigger--triggered
      opacity 0

  > .AppMenu__links
    @extend .AppMenu__transition
    z-index 3
    box-shadow 3px 1px 7px 4px rgba(0, 0, 0, 0.355)
    padding 20px
    height 100vh
    width 200px
    transform translateX(-250px)

    &.AppMenu__links--open
      transform translateX(0)

    > .AppMenu__closer
      float right

    > ul > li > a
      text-decoration none
      display block
      margin 30px 0
      color #ffffff
      font-size 1.6em

  @keyframes shadow-pulse
  {
    0% {
      box-shadow 3px 1px 9px 4px rgba(0, 0, 0, 0.2), 0 0 0 0 rgba(0, 0, 0, 0.2)
    }
    100% {
      box-shadow 3px 1px 9px 4px rgba(0, 0, 0, 0.2), 0 0 0 35px rgba(0, 0, 0, 0)
    }
  }
</style>
