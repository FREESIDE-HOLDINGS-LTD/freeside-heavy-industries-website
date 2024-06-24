<template>
  <div class="home">
    <div class="full">
      <FreesideHeader class="header" :scrolledToTop="scrolledToTop"></FreesideHeader>

      <video playsinline autoplay muted loop id="showcase-video">
        <source src="media/showcase.mp4" type="video/mp4">
      </video>
      <div class="overlay">
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
        <div class="arrow">
          <i class="fa-solid fa-arrow-down"></i>
        </div>
      </div>
    </div>

    <div class="content" id="section-projects">
      <FreesideH2 text="Projects"></FreesideH2>
      <FreesideProjects></FreesideProjects>
    </div>

    <footer id="section-contact">
      <div class="contact">
        <div class="small">
          Find out why we are a good reference for heavy industry consultancy
        </div>
        <div class="large">
          Contact us today!
        </div>
        <div class="items">
          <div class="item">
            <div class="label">
              Visit us
            </div>
            <div class="content">
              9800 Savage Rd., Suite 6272
              Fort George G. Meade, MD 20755-6000
            </div>
          </div>

          <div class="item">
            <div class="label">
              Call us
            </div>
            <div class="content">
              301-688-6311
            </div>
          </div>

          <div class="item">
            <div class="label">
              Write us
            </div>
            <div class="content">
              #freeside @ hackint
            </div>
          </div>
        </div>
      </div>
      <div class="disclaimer">
        By visiting this Site, you hereby consented to be processed by Freeside Heavy Industries
        ("Company") in any and all of its facilities in perpetuity. This processing may include, but
        is not limited to, the collection, storage, manipulation, and dissemination of your person.
        Your consent to processing by the Company is granted in perpetuity, meaning it will continue
        indefinitely. You acknowledge that this consent cannot be revoked and will remain in effect
        for the lifetime of the Company and its successors and shall shall not be voided or
        nullified by any events beyond the control of the Company, including but not limited to acts
        of war, government intervention including disolving the Company, acts of the almighty God,
        terrorism, riots, ecological collapse of the planet, the invisible hand of the free market,
        or the collapse of the society as we know it.
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FreesideHeader from '@/components/FreesideHeader.vue';
import FreesideProjects from '@/components/FreesideProjects.vue';
import FreesideH2 from '@/components/FreesideH2.vue';

@Component({
  components: {
    FreesideProjects,
    FreesideHeader,
    FreesideH2,
  },
})
export default class HomeView extends Vue {
  scrolledToTop = true;

  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.updateScrolledToTop();
  }

  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    this.updateScrolledToTop();
  }

  private updateScrolledToTop(): void {
    const video = document.getElementById('showcase-video')!;
    const position = video.getBoundingClientRect();
    this.scrolledToTop = position.top === 0;
  }
}
</script>

<style scoped lang="scss">
.home {
  overflow: hidden;

  .header {
    position: fixed;
    z-index: 99;
    width: 100vw;
  }

  .full {
    height: 100vh;
    width: 100vw;
    position: relative;
    background-color: #000000;

    .overlay {
      position: relative;
      height: 100vh;

      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: auto 1fr auto;
      grid-template-areas:
      "header"
      "motto"
      "arrow";

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

      .arrow {
        grid-area: arrow;

        font-size: 30px;
        color: #fff;
        padding: 1em;
      }
    }

    video {
      object-fit: cover;
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 30%;
    }
  }

  > .content {
    text-align: left;
    margin: 2em;
  }

  footer {
    background-color: rgb(23, 38, 36);
    color: rgb(247, 246, 241);
    text-align: left;
    padding: 8em 4em 2em 4em;

    .contact {
      .small {
        font-family: "Noto Sans", sans-serif;
        font-size: 30px;
        font-weight: 500;
      }

      .large {
        font-size: 100px;
        font-family: "Big Shoulders Display", sans-serif;
        font-weight: 800;
        text-transform: uppercase;

        margin-top: 1.5rem;
      }

      .items {
        display: flex;
        flex-flow: row nowrap;
        margin-top: 4rem;

        .item {
          flex-grow: 1;
          flex-basis: 0;
          margin: 0 1em;

          &:first-child {
            margin-left: 0;
          }

          &:last-child {
            margin-right: 0;
          }

          .label {
            font-size: 30px;
            font-family: "Big Shoulders Display", sans-serif;
            font-weight: 700;
          }

          .content {
            margin-top: 1em;
            font-size: 20px;
            font-family: "Noto Sans", sans-serif;
            font-weight: 300;
          }
        }
      }
    }

    .disclaimer {
      margin-top: 6em;
      opacity: .5;
      text-align: justify;
    }
  }
}
</style>
