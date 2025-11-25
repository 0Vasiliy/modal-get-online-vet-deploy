import VueRouter from 'vue-router'
import vModal from '@/components/form/v-modal.vue'

export default new VueRouter({
    routes:[      
        {
            path: '/',
            component: vModal,         
        },
       
    ],
    mode: 'hash', // hash mode для работы на GitHub Pages
    base: process.env.NODE_ENV === 'production' ? '/modal-get-online-vet-deploy/' : '/',
})
