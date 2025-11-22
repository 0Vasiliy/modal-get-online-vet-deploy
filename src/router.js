import VueRouter from 'vue-router'
import vModal from '@/components/form/v-modal.vue'

export default new VueRouter({
    routes:[      
        {
            path: '/',
            component: vModal,         
        },
       
    ],
    mode: 'history',
    base:"/",
})
