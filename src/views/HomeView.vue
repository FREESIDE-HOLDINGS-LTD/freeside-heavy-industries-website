<template>
  <div class="home">
    <div class="full">
      <video playsinline autoplay muted loop>
        <source src="media/mining.mp4" type="video/mp4">
      </video>
      <div class="overlay">
        <FreesideHeader class="header"></FreesideHeader>
        <div class="motto">
          <div class="large">
            Plan better,
          </div>
          <div class="large">
            build Together.
          </div>
          <div class="small">
            Freeside Heavy Industries is a specialized heavy industry consultancy and manufacturing
            firm operating all over the world.
          </div>
        </div>
      </div>
    </div>
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FreesideHeader from '@/components/FreesideHeader.vue';

@Component({
  components: {
    FreesideHeader,
  },
})
export default class HomeView extends Vue {
}
</script>

<style scoped lang="scss">
.full {
  height: 100vh;
  width: 100%;
  position: relative;
  background-color: #000000;

  .overlay {
    position: relative;
    height: 100vh;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "header"
      "motto";

    .header {
      grid-area: header;
    }

    .motto {
      grid-area: motto;

      text-align: left;
      color: #fff;
      padding: 100px;

      display: flex;
      flex-flow: column nowrap;
      justify-content: center;

      .large {
        font-family: "Big Shoulders Display", sans-serif;
        font-weight: 800;
        font-size: 140px;
        line-height: 1.1em;
        text-transform: uppercase;
      }

      .small {
        margin-top: 2rem;
        max-width: 40%;

        font-family: "Noto Sans", sans-serif;
        font-size: 30px;
        line-height: 1.1em;
      }
    }
  }

  video {
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 50%;
  }
}
</style>
