import Navigo from "navigo";
import AboutPage from "./pages/about";
import HomePage from "./pages/home";
import Footer from "./components/footer";
import Header from "./components/header";
import Sigin from "./components/sigin";
import Sigup from "./components/sigup";
import Dashboard from "./admin/dashboard";
import ad_News from "./admin/ad_component/ad_news";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.getElementById("app").innerHTML = content;
    document.querySelector("#header").innerHTML = Header.render();
    document.querySelector("#footer").innerHTML = Footer.render();
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/about": () => {
        print(AboutPage.render());
    },
    "/sigup": () => {
        print(Sigup.render());
    },
    "/sigin": () => {
        print(Sigin.render());
    },

    "/admin/dashboard": () => {
        print(Dashboard.render());
    },

    "/admin/news": () => {
        print(ad_News.render());
    },

    "/admin/news/add": () => {
        
    },

    "/admin/news/:id/edit": () => {
        
    },





});
router.resolve();