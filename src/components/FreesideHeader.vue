<template>
  <header :class="{ 'not-transparent': !scrolledToTop}">
    <div class="logo">
      <div>Freeside</div>
      <div>Heavy</div>
      <div>Industries</div>
    </div>
    <nav>
      <ul>
        <li><a href="#">Showcase</a></li>
        <li><a href="#section-projects">Projects</a></li>
        <li><a href="#section-contact">Contact</a></li>
      </ul>
    </nav>
    <a class="quote">
      <div class="text">
        <a href="#section-contact">
          Get a quote
        </a>
      </div>
    </a>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class FreesideHeader extends Vue {
  @Prop() private scrolledToTop!: boolean;
}
</script>

<style scoped lang="scss">
$border: 1px solid rgba(247, 246, 241, 0.2);
$border-color-scrolled: rgba(23, 38, 36, 0.2);
$padding: 50px;

header {
  border-bottom: $border;

  display: flex;
  flex-flow: row nowrap;

  transition: 2s all;

  .logo {
    border-right: $border;

    font-family: "Inter", sans-serif;
    font-weight: 900;
    text-align: left;
    color: #fff;
    padding: 20px;
  }

  nav {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    flex: 1;

    ul {
      display: flex;
      gap: $padding;
      margin: 0;
      padding: 0 0 0 $padding;

      li {
        list-style-type: none;
        opacity: .7;
        transition: 1s all;

        &:hover {
          opacity: 1;
        }
      }
    }
  }

  nav ul a, .quote {
    font-family: "Big Shoulders Display", sans-serif;
    color: rgb(247, 246, 241);
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 700;
    text-decoration: none;
  }

  .quote {
    background-color: rgb(209, 154, 29);
    padding: 0 $padding;

    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    a {
      color: #000;
      text-decoration: none;
    }
  }
}

header.not-transparent {
  background-color: #fff;
  border-color: $border-color-scrolled;

  .logo {
    color: #172624;
    border-color: $border-color-scrolled;
  }

  nav ul a {
    color: #596360;
  }
}
</style>
