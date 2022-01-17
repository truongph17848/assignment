import Navigo from "navigo";
import AboutPage from "./pages/about";
import HomePage from "./pages/home";
import Sigin from "./components/sigin";
import Sigup from "./components/sigup";
import dashboard from "./admin/dashboard";
import listNewsPage from "./admin/news/list";
import addProduct from "./admin/news/add";



const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.getElementById("app").innerHTML = content;
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
        print(dashboard.render())
    },

    "/admin/news": () => {
        print(listNewsPage.render())
    },

    "/admin/news/add": () => {
        print(addProduct.render())
    },

    "/admin/news/:id/edit": () => {
        
    },





});
router.resolve();