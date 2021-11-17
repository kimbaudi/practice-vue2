<template>
  <v-app id="app">
    <v-system-bar app color="primary" height="30">The system bar</v-system-bar>

    <v-app-bar app clipped-left color="yellow" dense flat light>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-light.png"
          width="100"
        />
      </div>
      <v-toolbar-title class="ml-5">Application</v-toolbar-title>
      <div class="d-flex pl-5 nav">
        <router-link v-for="page in pages" :key="page.path" :to="page.path">
          {{ page.name }}
        </router-link>
      </div>
      <v-spacer></v-spacer>
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>open_in_new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>account_circle</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>settings</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>

    <v-footer app>The footer</v-footer>

    <v-bottom-navigation app color="secondary">
      The bottom navigation
    </v-bottom-navigation>
  </v-app>
</template>

<script>
  import { pages } from 'router';

  export default {
    name: 'App',
    data: () => ({ drawer: null, group: 1, pages }),
  };
</script>

<style lang="scss">
  @import '~vuetify/src/styles/styles.sass';

  :root {
    --font: Roboto, sans-serif;
    --textColor: #374961;
    --linkActiveColor: #41b783;
  }

  #app {
    font-family: var(--font);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: var(--blue);
  }

  .nav {
    a {
      font-weight: 500;
      color: var(--textColor);
      margin: 0 5px;
    }

    a.router-link-exact-active {
      color: var(--linkActiveColor);
    }
  }
</style>
