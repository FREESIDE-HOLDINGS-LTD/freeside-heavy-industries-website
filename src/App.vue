<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
body, html {
  --color-secondary: #566955;

  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Noto Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* Makes it so clicking links to elements smoothly scrolls to them instead of teleporting. */
@media (prefers-reduced-motion: no-preference) {
  * {
    scroll-behavior: smooth;
  }
}
</style>
