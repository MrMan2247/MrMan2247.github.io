<template>
  <div class="slider-container">
    <div class="slider">
      <div class="slides">
        <slot></slot>
      </div>

      <div v-if="buttonsEnabled" class="btns">
        <div class="btn btn-left" @click="prev"></div>
        <div class="btn btn-right" @click="next"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      buttons: { type: Boolean },
      speed: { type: Number },
      fade: { type: Boolean }
    },
    data () {
      return {
        i: 0,
        slides: [],
        timerID: null
      }
    },
    computed: {
      current () {
        return this.slides[this.i]
      },
      buttonsEnabled () {
        return (this.buttons === undefined ? true : this.buttons)
      }
    },
    methods: {
      next () {
        this.current.hide('right')
        this.i = (this.i + 1) % this.slides.length
        this.current.show('left')
        this.resetTimer()
      },
      prev () {
        this.current.hide('left')
        this.i = Math.abs((this.i - 1) % this.slides.length)
        this.current.show('right')
        this.resetTimer()
      },
      show (index) {
        if (index < this.i) {
          this.current.hide('left')
          this.i = index
          this.current.show('right')
          this.resetTimer()
        } else {
          this.current.hide('right')
          this.i = index
          this.current.show('left')
          this.resetTimer()
        }
      },
      setTimer () {
        if (this.speed !== undefined) {
          this.timerID = setInterval(() => this.next(), this.speed)
        }
      },
      resetTimer () {
        if (this.speed !== undefined) {
          if (this.timerID !== null) {
            clearInterval(this.timerID)
          }
          this.timerID = setInterval(() => this.next(), this.speed)
        }
      },
      createSlide (slide) {
        this.slides.push(slide)
      }
    },
    mounted () {
      this.current.show()
      if (this.speed) this.setTimer()
    }
  }
</script>

<style lang="scss">
  @import '../../assets/scss/sass-only/_app.scss';

  /**
   * Button and container styles
   */

  .slider-container {
    position: relative;
    height: 400px;
    overflow: hidden;

    @media screen and (max-width: 500px) {
      min-height: 950px;
      max-height: 1030px;
    }

    &.quotes-slider {
      min-height: initial;
      height: 290px;
    }

    .slider {
      height: 100%;
      width: 100%;
      position: relative;

      .slides {
        height: 100%;
        width: 100%;
        position: relative;
      }

      .btns {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 999;

        &::before {
          content: '';
          position: absolute;
          background: url('../../assets/img/left-arrow.png');
          width: 100px;
          height: 100px;
          background-size: cover;
          left: 0;
          top: 35%;
        }

        &::after {
          z-index: -1;
          content: '';
          position: absolute;
          background: url('../../assets/img/right-arrow.png');
          width: 100px;
          height: 100px;
          background-size: cover;
          right: 0;
          top: 35%;
        }

        .btn {
          height: 100%;
          width: 50%;
          position: absolute;
          cursor: pointer;

          &.btn-left {
            left: 0px;
          }

          &.btn-right {
            right: 0px;
          }
        }
      }
    }
  }
</style>
