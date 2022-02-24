import Banner from "../components/banner";
import Header from "../components/header";
import NewsList from "../components/newList";
import Footer from "../components/footer";


const HomePage = {
    async render() {
        return /* html */`
            <div class="">
            ${Header.render()}
            </div>

            <div class="banner">
            ${Banner.render()}
            <div>
                ${await NewsList.render()}
            </div>
            ${Footer.render()}
            </div>
        `;
    },
};
export default HomePage;