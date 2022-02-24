import Navigo from "navigo";
import AboutPage from "./pages/about";
import HomePage from "./pages/home";
import Sigin from "./components/sigin";
import Sigup from "./components/sigup";
import dashboard from "./admin/dashboard";
import listNewsPage from "./admin/news/list";
import addProduct from "./admin/news/add";
import Edit from "./admin/news/edit";
import Detail from "./pages/Detail";
import productsPage from "./components/products/index";
import DetailProduct from "./components/products/detail";
import CartPage from "./pages/cart";
import listProductsPage from "./admin/products/list_product";
import EditProducts from "./admin/products/edit_product";
import addProductNewProduct from "./admin/products/add_product";
import ListCategory from "./admin/Category/list_Category";
import AddCatagory from "./admin/Category/add_Category";


const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (content, id) => {
    document.getElementById("app").innerHTML = await content.render(id);
    if (content.afterRender) content.afterRender(id);
};

router.on({
    "/": () => {
        print(HomePage);
    },
    "/about": () => {
        print(AboutPage);
    },
    "/sigup": () => {
        print(Sigup);
    },
    "/sigin": () => {
        print(Sigin);
    },

    "/Detail/:id": (value) => {
        print(Detail, value.data.id)
    },



    "/admin/dashboard": () => {
        print(dashboard)
    },

    "/admin/news": () => {
        print(listNewsPage)
    },

    "/admin/news/add": () => {
        print(addProduct)
    },

    "/admin/news/:id/edit": ({ data }) => {
        print(Edit, data.id)
    },
    "/products": () => {
        print(productsPage)
    },
    "/products/:id": (value) => {
        print(DetailProduct, value.data.id)
    },
    "/cart": () => {
        print(CartPage)
    },
    "/admin/products": () => {
        print(listProductsPage)
    },
    "/admin/products/:id/EditProducts": ({ data }) => {
        print(EditProducts, data.id)
    },
    "/admin/products/addProductNewProduct": () => {
        print(addProductNewProduct)
    },
    "/admin/categorys": () => {
        print(ListCategory)
    },
    "/admin/categorys/AddCatagory": () => {
        print(AddCatagory)
    }




});
router.resolve();