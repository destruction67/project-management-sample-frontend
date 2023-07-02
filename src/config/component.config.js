import Vue from 'vue';
import {
    FontAwesomeIcon,
    FontAwesomeLayersText,
    FontAwesomeLayers,
} from '@fortawesome/vue-fontawesome';

// Base Component Import

// end Base Component Import

//Globals
import BaseLoader from '@/components/base/BaseLoader';
import BaseAppFooter from "@/components/base/BaseAppFooter";
import BaseTable from "@/components/base/BaseTable";
import Modal from "@/components/base/Modal";
import GeneratingModal from "@/components/base/GeneratingModal";
//end Globals

// Base Buttons import
import BaseButton from '../components/base/buttons/BaseButton';
import BaseModalButton from '../components/base/buttons/BaseModalButton';

import BasePrimaryButton from "@/components/base/buttons/bin/BasePrimaryButton";
import BaseDangerButton from "@/components/base/buttons/bin/BaseDangerButton";
import BaseSecondaryButton from "@/components/base/buttons/bin/BaseSecondaryButton";
import BaseSuccessButton from "@/components/base/buttons/bin/BaseSuccessButton";
import BaseInfoButton from "@/components/base/buttons/bin/BaseInfoButton";
import BaseWarningButton from "@/components/base/buttons/bin/BaseWarningButton";
import BaseOutlineButton from '@/components/base/buttons/BaseOutlineButton';
import SideNavMenu from "@/components/modules/home/SideNavMenu";
//end Base Buttons import


export const ComponentConfig = {
    pluginComponents() {
        Vue.component('font-awesome-icon', FontAwesomeIcon);
        Vue.component('font-awesome-layers', FontAwesomeLayers);
        Vue.component('font-awesome-layers-text', FontAwesomeLayersText);
    },

    baseComponent() {
        //Base Components
        // end Base Components

        //Global Components
        Vue.component('base-loader', BaseLoader);
        Vue.component('base-app-footer', BaseAppFooter);
        Vue.component('base-table', BaseTable);
        Vue.component('base-modal', Modal);
        Vue.component('base-generating-modal', GeneratingModal);
        //end Global Components

        // Base Button
        Vue.component('base-primary-btn', BasePrimaryButton);
        Vue.component('base-danger-btn', BaseDangerButton);
        Vue.component('base-secondary-btn', BaseSecondaryButton);
        Vue.component('base-success-btn', BaseSuccessButton);
        Vue.component('base-info-btn', BaseInfoButton);
        Vue.component('base-warning-btn', BaseWarningButton);
        Vue.component('base-button',BaseButton)
        Vue.component('base-modal-button',BaseModalButton)

        Vue.component('base-outline-button', BaseOutlineButton);
        // end Base Buttons

    },

    customComponents(){
        Vue.component('side-nav-menu', SideNavMenu);
    },

};

export default {ComponentConfig};
