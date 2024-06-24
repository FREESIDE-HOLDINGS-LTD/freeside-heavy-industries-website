<template>
  <header>
    <div class="logo">
      <div>Freeside</div>
      <div>Heavy</div>
      <div>Industries</div>
    </div>
    <nav>
      <ul>
        <li>Services</li>
        <li>Projects</li>
        <li>Team</li>
        <li>Press</li>
        <li>Contact</li>
      </ul>
    </nav>
    <a class="quote">
      <div class="text">
        Service proposal
      </div>
    </a>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class FreesideHeader extends Vue {
}
</script>

<style scoped lang="scss">
$border: 1px solid rgba(247, 246, 241, 0.2);
$padding: 50px;

header {
  border-bottom: $border;

  display: flex;
  flex-flow: row nowrap;

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

  nav ul, .quote {
    font-family: "Big Shoulders Display", sans-serif;
    color: rgb(247, 246, 241);
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 700;
  }

  .quote {
    background-color: rgb(209, 154, 29);
    color: #000;
    padding: 0 $padding;

    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }
}
</style>
