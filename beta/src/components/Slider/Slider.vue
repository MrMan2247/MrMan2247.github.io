<template>
  <div class="slider-container">
    <div class="slider">
      <div class="slides">
        <slot></slot>
      </div>

      <div class="slide-text-con" v-if="buttonsEnabled">
        <p class="slide-text" v-html="(current ? current.$slots['text'][0].children[0].text : '')"></p>
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
        console.log(index)
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
        if (this.timer !== undefined) {
          if (this.timerID !== null) {
            clearInterval(this.timerID)
          }
          this.timerID = setInterval(() => this.next(), this.timer)
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
  @import '../../assets/sass/sass-only/_app.scss';

  /**
   * Button and container styles
   */

  .slider-container {
    position: relative;
    height: calc(100vh + 480px);
    max-height: 1400px;
    min-height: 1350px;

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

      .slide-text-con {
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 100vw;
        max-width: 970px;
        z-index: 999999;
        padding-bottom: 100px;
        border-bottom: 1px solid $primary;
        transform: translateX(-50%);

        &::after {
          content: url('../../assets/img/icon-gear.png');
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
        }

        p {
          position: relative;
          width: 100%;
          max-width: 680px;
          margin: 0 auto;
          color: #EEE;
          text-align: center;
          font-family: $serif;
          line-height: 33px;
          font-size: 1.1rem;
          padding: 0;
        }
      }

      .btns {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 999;

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
