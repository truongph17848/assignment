import Footer from "../components/footer";
import Header from "../components/header";


const AboutPage = {
    render() {
        return /* html */`
            <div class="max-w-5xl mx-auto">
            ${Header.render()}

            <h1 class="text-2xl my-10 font-bold">About Page</h1>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quo repellat, a accusamus impedit veniam exercitationem vero culpa, tempora sint minus. Inventore recusandae deserunt optio beatae ipsum nihil odit est?</div>
            
            ${Footer.render()}
            </div>
            `;
    },
};
export default AboutPage;