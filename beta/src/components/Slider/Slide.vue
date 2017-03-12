<template>
  <div :class="'slide' + (animation ? ' ' + animation : '') + (this.$parent.fade ? ' fade-mode' : '')" :style='style'>
    <div class="slide-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['background'],
    data () {
      return {
        animation: null,
        effects: [],
        shown: false
      }
    },
    computed: {
      style () {
        if (this.background) {
          return 'background-image: url(' + this.background + ');'
        } else {
          return ''
        }
      }
    },
    methods: {
      show (dir) {
        if (dir === 'left') {
          this.animation = (this.$parent.fade ? 'from-transparent' : 'from-right')
        } else if (dir === 'right') {
          this.animation = (this.$parent.fade ? 'from-transparent' : 'from-left')
        } else {
          this.animation = (this.$parent.fade ? 'force-opaque' : 'force-show')
        }
        this.shown = true
        this.effects.forEach((e) => e.show())
      },
      hide (dir) {
        if (dir === 'left') {
          this.animation = (this.$parent.fade ? 'to-transparent' : 'to-right')
        } else if (dir === 'right') {
          this.animation = (this.$parent.fade ? 'to-transparent' : 'to-left')
        } else {
          this.animation = (this.$parent.fade ? 'force-transparent' : 'force-hide')
        }
        this.shown = false
        this.effects.forEach((e) => e.hide())
      },
      createEffect (effect) {
        this.effects.push(effect)
      }
    },
    created () {
      this.$parent.createSlide(this)
    }
  }
</script>

<style lang="scss">
  @import '../../assets/scss/sass-only/_utils.scss';

  /**
   * Keyframes
   */

  @keyframes fromright {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-100%);
    }
  }

  @keyframes fromleft {
    from {
      transform: translateX(-200%);
    }
    to {
      transform: translateX(-100%);
    }
  }

  @keyframes toright {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0%);
    }
  }

  @keyframes toleft {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(-200%);
    }
  }

  @keyframes fromtransparent {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes totransparent {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  /**
   * Styles
   */

  .slide {
    height: 100%;
    width: 100%;
    position: absolute;
    left: 100%;
    background-size: cover;
    background-position: center top;
    z-index: 1;
    background: #fff;

    &.fade-mode {
      left: 0 !important;
      opacity: 0;
    }

    &.anchor-right {
      background-position: left top;
      background-position: right top !important;
    }

    &.from-right {
      animation: fromright 1550ms $expo 0s 1 normal;
      animation-fill-mode: forwards;
    }

    &.from-left {
      animation: fromleft 1550ms $expo 0s 1 normal;
      animation-fill-mode: forwards;
    }

    &.to-right {
      animation: toright 1550ms $expo 0s 1 normal;
      animation-fill-mode: forwards;
    }

    &.to-left {
      animation: toleft 1550ms $expo 0s 1 normal;
      animation-fill-mode: forwards;
    }

    &.from-transparent {
      animation: fromtransparent 1550ms ease 0s 1 normal;
      animation-fill-mode: forwards;
    }

    &.to-transparent {
      animation: totransparent 1550ms ease 0s 1 normal;
      animation-fill-mode: forwards;
    }

    &.force-show { left: 0; }
    &.force-hide { left: 100%; }

    &.force-opaque      { opacity: 1; }
    &.force-transparent { opacity: 0; }
  }
</style>
