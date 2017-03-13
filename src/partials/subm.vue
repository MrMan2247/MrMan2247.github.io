<template>
  <footer>
    <div class="footer-content">
      <div class="left">
        <img src="../assets/img/profile.png">
      </div>
      <div class="right">
        <div class="social">
          <div class="media"><a href="https://github.com/MrMan2247"><img src="../assets/img/github-icon.svg"/></a></div>
          <div class="media"><a href="https://ca.linkedin.com/in/bailey-cassel-59804481"><img src="../assets/img/LinkedIn_Logo.svg"/></a></div>
          <div class="media"><a href="https://twitter.com/MrMan2247?lang=en"><img src="../assets/img/twitter-icon.svg"/></a></div>
        </div>
      </div>
      © Bailey Cassel
    </div>
  </footer>
</template>

<style lang="scss">
  footer {
    display: flex;
    text-align: center;
    background-attachment: fixed !important;
    background: url('../assets/img/footer-bg.jpg');
    padding: 30px 0;

    .footer-content {
      max-width: 970px;
      margin: auto;
      font-family: arial;
      font-size: 8pt;

      .left {
        flex: 1 1 50%;
        text-align: right;
        padding: 0 30px;
        padding-bottom: 10px;

        img {
          max-width: 200px;
        }
      }
      .right {
        flex: 1 1 50%;
        align-self: center;
        padding: 0 30px;
        padding-bottom: 20px;

        .social {
          display: flex;
          flex-wrap: wrap;

          .media {
            flex: 1 1 100px;
            max-width: 45px;
            margin: 0 10px;
          }
        }
      }
    }
  }
</style>
