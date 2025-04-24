"use strict";
import HomeComponent from "./components/HomeComponent.js";
import NotFoundComponent from "./components/NotFoundComponent.js";
import KarriereComponent from "./components/KarriereComponent.js";
import LeistungsComponent from "./components/LeistungsComponent.js";
import KursangeboteComponent from "./components/KursangeboteComponent.js";
import HeroTeaserComponent from "./components/designComponents/HeroTeaserComponent.js";
import UeberUnsComponent from "./components/UeberUnsComponent.js";
import KontaktComponent from "./components/KontaktComponent.js";
import LoginComponent from "./components/LoginComponent.js";


import KWM_Route from "./core/kwm-route.js";
import KWM_Router from "./core/kwm-router.js";

const myRouter = new KWM_Router({
  container: document.getElementById("kwmJS"),
  routes: [
    new KWM_Route({
      slug: "/",
      name: "Home",
      component: new HomeComponent(),
    }),
    new KWM_Route({
      slug: "/leistungen",
      name: "Leistungen",
      component: new LeistungsComponent(),
    }),
    new KWM_Route({
      slug: '/kursangebote',
      name: 'Kursangebote',
      component: new KursangeboteComponent(),
    }),
    new KWM_Route({
      slug: "/ueberuns",
      name: "Über Uns",
      component: new UeberUnsComponent(),
    }),
    new KWM_Route({
      slug: "/karriere",
      name: "Karriere",
      component: new KarriereComponent(),
    }),
    new KWM_Route({
      slug: '/kontakt',
      name: 'Kontakt',
      component: new KontaktComponent()
    }),
    new KWM_Route({
      slug: '/login',
      name: 'Login',
      component: new LoginComponent()
    }),
    new KWM_Route({
      slug: "/404",
      name: "Not Found",
      component: new NotFoundComponent(),
    }),
  ],
  slugHome: "/",
  slugNotFound: "/404",
});

myRouter.init();