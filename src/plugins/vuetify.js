import Vue from 'vue';
// import Vuetify from 'vuetify/lib';
import Vuetify, { VCard, VMenu } from 'vuetify/lib';

// Vue.use(Vuetify);
Vue.use(Vuetify, {
  components: {
    VCard,
    VMenu,
  },
});

const opts = {
  icons: {
    iconfont: 'md',
  },
};

export default new Vuetify(opts);
