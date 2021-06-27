import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './plugins/antd.js'
import http from "../network/http";

Vue.config.productionTip = false
Vue.prototype.$http = http

Vue.filter('formatLength', value => {
    return value.length > 9 ? value.slice(0, 9) + '...' : value
})
import {MessageBox, Message} from 'element-ui'
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message

Vue.mixin({
    methods: {
        getAuthHeaders() {
            return {Authorization: `Bearer ${localStorage.token}`}
        },
        getUsername() {
            return localStorage.username
        }
    },
    data() {
        return {
            uploadUrl: this.$http.defaults.baseURL + '/upload'
        }
    }
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
