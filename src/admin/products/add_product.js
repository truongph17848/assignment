import axios from "axios";
import { getAll } from "../../../api/Category";
import { add } from "../../../api/product";
import NavAdmin from "../../components/NavAdmin";



const addProductNewProduct = {
  async render() {
    const { data } = await getAll();
    return `
            <div class="min-h-full">
            ${NavAdmin.render()}
            <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <!-- This example requires Tailwind CSS v2.0+ -->
                <div class="lg:flex lg:items-center lg:justify-between">
                <div class="flex-1 min-w-0">
                    <h2
                    class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
                    >
                    Quản lý bài viết ----------- Thêm sản phẩm -----------
                    </h2>
                </div>
    
                </div>
            </div>
            </header>
            <main>

 <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <!-- Replace with your content -->
                <div class="px-4 py-6 sm:px-0">
                <div
                    class="border-4 border-dashed border-gray-200 rounded-lg h-96">
            
                    <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div class="max-w-md w-full space-y-8">
                  




                    
                    <form class="mt-8 space-y-6" action="" id="form-add-post">

                    <div class="rounded-md shadow-sm -space-y-px">

                
                      <div>
                        <label for="name" class="sr-only"> name </label>
                        <input id="name-post"
                        class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="name">
                      </div>
                
                      <input type="file"  
                        class="border border-black"
                        id="img-post"
                      >
                
                      <div>
                        <label for="desc" class="sr-only">desc</label>
                        <input id="desc-post"
                        class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="desc">
                      </div>
                
                    </div>

                    <div>
                    <label for="price" class="sr-only">price</label>
                    <input id="price-post"
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="price">
                  </div>


                <div>
                <label for="categoryId" class="sr-only">category:</label>
                  <select name="" id="categoryId">
                  ${data.map((post, index) => `
                  <option value="${post.category}">${post.category}</option>
                  `).join("")}
                  </select>
                </div>
                
                
                    <div>
                      <button
                       class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                        </span>
                        Add
                      </button>
                    </div>
                  </form>





                    </div>
                  </div>
    
                </div>
                </div>
                <!-- /End replace -->
            </div>
            </main>

        </div>

            `;
  },
  afterRender() {

    const formAdd = document.querySelector("#form-add-post");
    const imgPost = document.querySelector("#img-post");




    imgPost.addEventListener("change", (e) => {

      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "vhwqxt4l");


      axios({
        url: "https://api.cloudinary.com/v1_1/dd6rjgngw/image/upload",
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-formendcoded",
        },
        data: formData,
      }).then((res) => {
        formAdd.addEventListener("submit", (e) => {
          // thêm e vào và dòng dưới để chặn sự kiện(k load trang)
          e.preventDefault();

          add(
            {
              name: document.querySelector('#name-post').value,
              img: res.data.secure_url,
              price: document.querySelector('#price-post').value,
              desc: document.querySelector('#desc-post').value,
              categoryId: document.querySelector('#categoryId').value

            })
            .then((result) => console.log(result.data))
            .then(() => document.location.href = "/admin/products")
            .catch((error) => console.log(error));
        });

      })
    });



  },
};
export default addProductNewProduct;