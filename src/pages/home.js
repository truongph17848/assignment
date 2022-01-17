import Banner from "../components/banner";
import Header from "../components/header";
import NewsList from "../components/newList";
import Footer from "../components/footer";


const HomePage = {
    render() {
        return /* html */`
            <div class="max-w-5xl mx-auto">
            ${Header.render()}
            <div class="banner">
                ${Banner.render()}
            </div>
            <div>
                ${NewsList.render()}
            </div>
            ${Footer.render()}
            </div>
        `;
    },
};
export default HomePage;