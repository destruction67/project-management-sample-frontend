import Vue from 'vue'
import App from './App.vue'
import router from './router'

import {IconConfig} from '@/config/icon.config';
import {ComponentConfig} from '@/config/component.config';
import {AppConfig} from '@/config/app.config';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/js/bootstrap.bundle';
import '../public/css/custom.scss';

import '@sweetalert2/theme-bootstrap-4';

import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/free-regular-svg-icons';
import '@fortawesome/vue-fontawesome';

import 'popper.js';
import __ from 'lodash';
import $ from 'jquery';


Vue.config.productionTip = false

global.$ = $;
global.__ = __;

IconConfig.config();


AppConfig.appSweetAlert2();
AppConfig.appProgressBar();
AppConfig.elementFocus();

ComponentConfig.pluginComponents();
ComponentConfig.baseComponent();
ComponentConfig.customComponents();



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
