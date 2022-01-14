import Banner from "../components/banner";
import NewsList from "../components/newList";


const HomePage = {
    render() {
        return /* html */`
            <div class="banner">
                ${Banner.render()}
            </div>
            <div>
                ${NewsList.render()}
            </div>
        `;
    },
};
export default HomePage;