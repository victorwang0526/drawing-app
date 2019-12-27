import Vue from 'vue'
import App from './App.vue'
import router from './router'

// add ionic
import IonicVue from '@ionic/vue';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import { defineCustomElements } from '@ionic/pwa-elements/loader'; // add this line

import { addIcons } from "ionicons";
import { construct, home, redo, undo, remove, add, close} from "ionicons/icons";

// add vant
import { Button, Tabs, Tab, Row, Col, Image, Loading, Overlay } from 'vant';

// add ionic
addIcons({
  "ios-construct": construct.ios,
  "md-construct": construct.md,
  "ios-home": home.ios,
  "md-home": home.md,
  "ios-redo": redo.ios,
  "md-redo": redo.md,
  "ios-undo": undo.ios,
  "md-undo": undo.md,
  "ios-remove": remove.ios,
  "md-remove": remove.md,
  "ios-add": add.ios,
  "md-add": add.md,
  "ios-close": close.ios,
  "md-close": close.md,
});

Vue.use(IonicVue);

Vue.config.ignoredElements = [/^ion-/];
defineCustomElements(window);  // add this line

// add vant
Vue.use(Button)
  .use(Tabs)
  .use(Tab)
  .use(Row)
  .use(Col)
  .use(Image)
  .use(Loading)
  .use(Overlay);

// default config
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
