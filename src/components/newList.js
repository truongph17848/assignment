//import data from "../data";
import { getAll } from '../../api/product';
const NewsList = {
  async render() {
    // Chờ thằng axios.get truy cập API và lấy dữ liệu, 
    // lấy dữ liệu xong sẽ trả về và gán vào biến response
    const { data } = await getAll();
    return  /* html */`

             


    <div class="bg-white">
    <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-extrabold tracking-tight text-gray-900"> Sản Phẩm nổi bật </h2>

      <div class="mt-6 grid grid-cols-3 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

      ${data.map((product) => `

        <div class="border p-4">
          <div
            class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
            <a href="/#/products/${product.id}">
                        <img src="${product.img}" alt="" />
              alt="Front of men&#039;s Basic Tee in black."
              class="w-full h-full object-center object-cover lg:w-full lg:h-full">
          </div>
          <div class="mt-4 flex justify-between">
            <div>

                <a href="/#/products/${product.id}">

                  ${product.name}


              <a href="/#/products/${product.id}">
              <p class="mt-1 text-sm text-gray-500">${product.desc}</p>
            </div>
            <p class="text-sm font-medium text-gray-900">${product.price}$</p>
          </div>
          </a>
        </div>

        `).join("")}

      </div>
    </div>
  </div>



                 

        
        `;
  },
};
export default NewsList;