//import data from "../data";
import { getAll } from '../../api/posts';
const NewsList = {
    async render() {
        // Chờ thằng axios.get truy cập API và lấy dữ liệu, 
        // lấy dữ liệu xong sẽ trả về và gán vào biến response
        const { data } = await getAll();
        return  /* html */`
            <h2 class="font-semibold text-2xl uppercase text-blue-800 my-4">Sản Phẩm Mới</h2>
            <div class="grid grid-cols-3 gap-8">
                ${data.map((post) => `
                    <div class="border p-4">
                        <a href="/Detail/${post.id}">
                            <img src="${post.img}" alt=""/> 
                        </a>
                        <h3 class="my-3"><a href="/Detail/${post.id}" class="font-semibold text-lg text-orange-500">${post.title}</a></h3>                    
                        <p>${post.desc}</p>
                    </div>
                    `).join("")}
                </div>
        
        `;
    },
};
export default NewsList;