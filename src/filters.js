import Vue from 'vue';
import moment from 'moment';

Object.defineProperty(Vue.prototype, '$moment', { value: moment });

Vue.filter('dateFormat', function (value) {
    if (!value)
        return '-'
    return moment(value).format("DD/MM/YYYY")
});

Vue.filter('aditivo', function (value) {
    if (!value)
        return '-'
    return value === true ? 'Sim' : 'Não'
});

Vue.filter('default', function (value) {
    if (!value)
        return '-'
    return value.descricao
});

