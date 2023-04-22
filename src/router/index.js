import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import MenuPage from "@/views/MenuPage.vue";
import AboutPage from "@/views/AboutPage.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: `/`,
    component: HomePage,
    meta: [
      {
        title: `fancy HOME`
      },
      {
        name: `description`,
        content: `welcome to pretty HOME page`
      },
      {
        name: `author`,
        content: `dale`
      }
    ]
  }, {
    path: `/menu`,
    component: MenuPage,
    meta: [
      {
        title: `fancy Menu`
      },
      {
        name: `description`,
        content: `welcome to pretty MENU page`
      },
      {
        name: `author`,
        content: `dale`
      }
    ]
  }, {
    path: `/about`,
    component: AboutPage,
    meta: [
      {
        title: `fancy ABOUT`
      },
      {
        name: `description`,
        content: `welcome to pretty ABOUT page`
      },
      {
        name: `author`,
        content: `dale`
      }
    ]
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach(
  (to, from, next) => {
    //code to run between pages here ex.

    let tags = document.querySelectorAll(`meta`);
    for (let i = 0; i < tags; i++) {
      tags[i].remove()
    }
    let meta_tags = to[`meta`];
    document.querySelector(`title`)[`innerText`] = meta_tags[0][`title`]
    for (let i = 1; i < meta_tags; i++) {
      document.querySelector(`head`).insertAdjacentHTML(`beforeend`,
        `    <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">`)
    }
    from;
    next;
  }
);
export default router
