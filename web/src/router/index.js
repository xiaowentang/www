import Vue from 'vue'
import VueRouter from 'vue-router'
// import Instance from '../../../xs-admin/server/models/Instance'

Vue.use(VueRouter)
const Home1 = ()=>import('../views/Home1.vue')
const Class = ()=>import('../views/Classes.vue')
const Employ = ()=>import('../views/Employ.vue')
const About = ()=>import('../views/About.vue')
const Message = () => import('../views/Message.vue')
const Mesdetail = () => import('../views/Mesdetail.vue')
const Instances = ()=>import('../views/Instances.vue')

const Index = () => import('@/views/Index')
const Login = () => import('@/views/Login')

const Category = () => import('@/views/Category/Category')
const CategoryList = () => import('@/views/Category/CategoryList')

const Instance = () => import('@/views/Instance/Instance')
const InstanceList = () => import('@/views/Instance/InstanceList')

const Recommend = () => import('@/views/Recommend/Recommend')
const RecommendList = () => import('@/views/Recommend/RecommendList')

const Article = () => import('@/views/Article/Article')
const ArticleList = () => import('@/views/Article/ArticleList')

const AdminUser = () => import('@/views/AdminUser/AdminUser')
const AdminUserList = () => import('@/views/AdminUser/AdminUserList')

const routes = [
    
    {
        path: '/login',
        disumerable: true,
        component: Login,
        meta: {isPublic: true,
            title:'后台'
        }
    },
    {
        path: '/home',
        redirect: '/admin_users/list',
        component: Index,
        name: '分类管理',
        children: [
            {
                path: '/categories/create',
                name: '新建分类',
                component: Category,
                group: '分类'
            },
            {
                path: '/categories/list',
                name: '分类列表',
                component: CategoryList
            },
            {
                path: '/categories/edit/:id',
                component: Category,
                props: true,
                disumerable: true
            }
        ],
        meta: {
            admin: true
        }
    },
    {
        component: Index,
        name: '文章管理',
        path: '/opex',
        children: [
            {
                path: '/articles/create',
                name: '新建文章',
                component: Article,
                group: '文章'
            },
            {
                path: '/articles/list',
                name: '文章列表',
                component: ArticleList
            },
            {
                path: '/articles/edit/:id',
                component: Article,
                props: true,
                disumerable: true
            }
        ],
        meta: {
            admin: true
        }
    },
    {
        component: Index,
        name: '系统管理',
        path: '/system',
        children: [
            {
                path: '/admin_users/create',
                name: '新建管理员',
                component: AdminUser,
                group: '管理员'
            },
            {
                path: '/admin_users/list',
                name: '管理员列表',
                component: AdminUserList
            },
            {
                path: '/admin_users/edit/:id',
                component: AdminUser,
                props: true,
                disumerable: true
            }
        ],
        meta: {
            admin: true
        }
    },
    {
        component: Index,
        name: '康复案例管理',
        path: '/instance',
        children: [
            {
                path: '/instance/create',
                name: '新建康复案例',
                component: Instance,
                // group: '康复案例'
            },
            {
                path: '/instance/list',
                name: '康复案例列表',
                component: InstanceList
            },
            {
                path: '/instance/edit/:id',
                component: Instance,
                props: true,
                disumerable: true
            }
        ],
        meta: {
            admin: true
        }
    },
    {
        component: Index,
        name: '推荐管理',
        path: '/recommend',
        children: [
            {
                path: '/recommend/create',
                name: '新建推荐',
                component: Recommend,
                // group: '推荐'
            },
            {
                path: '/recommend/list',
                name: '推荐列表',
                component: RecommendList
            },
            {
                path: '/recommend/edit/:id',
                component: Recommend,
                props: true,
                disumerable: true
            }
        ],
        meta: {
            admin: true
        }
    },
    {
        path: '/',
        redirect: '/home1'
    },
    {
        path:'/home1',
        component:Home1,
        meta:{
          title:'欣声听力康复'
        },
      },
      {
        path:'/class',
        component:Class,
        meta:{
          title:'课程介绍'
        }
      },
      {
        path:'/employ',
        component:Employ,
        meta:{
          title:'招贤纳士'
        }
      },
      {
        path:'/about',
        component:About,
        meta:{
          title:'联系我们'
        }
      },
      {
        path:'/instances',
        component:Instances,
        meta:{
          title:'康复案例'
        }
      },
      {
        path: '/message',
        component: Message,
        meta: {
          title: '康复信息'
        },
        children: [{
          path: '/mesdetail',
          component: Mesdetail
        }]
      },
]

const router = new VueRouter({
    routes,
    /* mode: 'history' */
})

//导航卫士
router.beforeEach((to, from, next) => {
    /* if (!to.meta.isPublic && !localStorage.token) {
        return next('/login')
    }
    if (to.path === '/login' && localStorage.token) {
        return next('/home')
    } */
    document.title=(to.matched[0].meta || {}).title
    next()
})

export default router
