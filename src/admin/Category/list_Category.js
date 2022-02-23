import { getAll, remove } from "../../../api/Category"
import NavAdmin from "../../components/NavAdmin";
import toastr from "toastr";
import { reRender } from "../../utils";
const ListCategory = {
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
                Quản lý bài viết
                </h2>
            </div>



            <div class="mt-5 flex lg:mt-0 lg:ml-4">
                <a href="/admin/categorys/AddCatagory" class="sm:ml-3">
                    <button
                        type="button"  
                        class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        Thêm mới
                    </button>
                </a>
            </div>
            </div>
        </div>
        </header>
        <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <!-- Replace with your content -->
            <div class="px-4 py-6 sm:px-0">
            <div
                class=" border-dashed border-gray-200 rounded-lg h-96">



                
                
              <div class="flex flex-col">
              <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
    
                    <thead class="bg-gray-50">
                    <tr>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Id
                      </th>

                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                      </th>
                      <th scope="col" class="relative px-6 py-3">
                        <span class="sr-only">Edit</span>
                      </th>
                    </tr>
                    </thead>

                    <body>
                    ${data.map((post, index) => `
                    <tr>
                    <td scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">${index + 1}</td>

                    <td scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">${post.category}</td>
                    <td>
                    <button class="text-black-300 hover:bg-gray-600 hover:text-black px-3 py-2 rounded-md text-sm font-medium"> <a href="/admin/categorys/${post.id}/edit"> Edit </a> </button>
                    <button data-id=${post.id} class="btn btn-remove text-black-300 hover:bg-orange-600 hover:text-black px-3 py-2 rounded-md text-sm font-medium"> Remove </button>
                    </td>
                  </tr>
                
                    `).join("")}
                    </body >


                    </table>

                   </div >
                 </div >
              </div >
              </div >

            
            </div >
            </div >

        </div >
        </main >
    </div >
        
        `;
    },

    afterRender() {
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(button => {
            // dataset lấy giá trị của data-id lúc gán ở button
            const id = button.dataset.id;
            // lick lấy id 
            button.addEventListener('click', () => {
                console.log(id);
                const confirm = window.confirm(" Xóa nhanh không thì bảo");
                if (confirm) {
                    remove(id).then(() => toastr.success("Bạn đã xóa sản phẩm thành công"));
                    reRender(ListCategory, "#app");
                }
            })
        });
    }
};
export default ListCategory;