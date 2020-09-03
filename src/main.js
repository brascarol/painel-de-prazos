import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'
import './filters'
import VueCryptojs from 'vue-cryptojs'

import Breadcrumb from 'primevue/breadcrumb';
import AutoComplete from 'primevue/autocomplete';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import MultiSelect from 'primevue/multiselect';
import Calendar from 'primevue/calendar';
import Dropdown from 'primevue/dropdown'
import Button from 'primevue/button'
import Menubar from 'primevue/menubar'
import DataTable from 'primevue/datatable'
import Chart from 'primevue/chart';
import Card from 'primevue/card';
import Dialog from 'primevue/dialog';
import Textarea from 'primevue/textarea';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Message from 'primevue/message';
import Editor from 'primevue/editor';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Checkbox from 'primevue/checkbox';
import ProgressBar from 'primevue/progressbar';
import Inplace from 'primevue/inplace';
import Carousel from 'primevue/carousel';
import FileUpload from 'primevue/fileupload';

import 'primevue/resources/themes/saga-blue/theme.css'
//import 'primevue/resources/themes/nova-light/theme.css';
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css';

 import './assets/styles/styles.css';


Vue.config.productionTip = false;

Vue.use(VueCryptojs);
Vue.use(ToastService);
Vue.component('Toast', Toast);
Vue.component('Message', Message);
Vue.component('Menubar', Menubar);
Vue.component('Breadcrumb', Breadcrumb);
Vue.component('AutoComplete', AutoComplete);
Vue.component('InputText', InputText);
Vue.component('InputNumber', InputNumber);
Vue.component('MultiSelect', MultiSelect)
Vue.component('Calendar', Calendar)
Vue.component('Dropdown', Dropdown)
Vue.component('Button', Button)
Vue.component('DataTable', DataTable);
Vue.component('Chart', Chart);
Vue.component('Card', Card);
Vue.component('Dialog', Dialog);
Vue.component('Textarea', Textarea);
Vue.component('Column', Column);
Vue.component('ColumnGroup', ColumnGroup);
Vue.component('TabView', TabView);
Vue.component('TabPanel', TabPanel);
Vue.component('Editor', Editor);
Vue.component('Accordion', Accordion);
Vue.component('AccordionTab', AccordionTab);
Vue.component('Checkbox', Checkbox);
Vue.component('ProgressBar', ProgressBar)
Vue.component('Inplace', Inplace)
Vue.component('Carousel', Carousel)
Vue.component('FileUpload', FileUpload)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')