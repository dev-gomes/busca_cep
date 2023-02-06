import { createApp } from 'vue';
import App from './App.vue';
import VueTheMask from 'vue-the-mask'

import './styles/global.css';

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaSearch, FaMapMarkedAlt, BiHouseDoorFill, BiTelephoneFill, MdPersonpincircleRound } from "oh-vue-icons/icons";

addIcons(FaSearch, FaMapMarkedAlt, BiHouseDoorFill, BiTelephoneFill, MdPersonpincircleRound);

const app = createApp(App);
app.use(VueTheMask)
app.component("v-icon", OhVueIcon);
app.mount("#app");