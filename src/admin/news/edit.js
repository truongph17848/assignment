import NavAdmin from "../../components/NavAdmin";
import { get } from "../../../api/posts";
import { update } from "../../../api/posts";
import axios from "axios";

const Edit = {
  async render(id) {
    const { data } = await get(id);
    return `
    ${NavAdmin.render()}



    <header class="bg-white shadow">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <!-- This example requires Tailwind CSS v2.0+ -->
        <div class="lg:flex lg:items-center lg:justify-between">
        <div class="flex-1 min-w-0">
            <h2
            class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
            >
            Quản lý bài viết ----------- Edit sản phẩm -----------
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
          




            <form class="mt-8 space-y-6" id="form-edit-post">

            <div class="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="createdAt" class="sr-only">createdAt</label>
                <input id="createdAt-post" value="${data.createdAt}"
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm">
              </div>
        
              <div>
                <label for="title" class="sr-only">title</label>
                <input id="title-post" value="${data.title}"
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" >
              </div>
        
              <div class="grid grid-cols-2 gap-8">
              <div>
                  <input type="file"  
                      class="border border-black"
                      id="img-post"
                  >
              </div>
              <div><img width="200" src="${data.img}" id="previewImage" /></div>
          </div>
        
              <div>
                <label for="desc" class="sr-only">desc</label>
                <input id="desc-post" value="${data.desc}"
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" >
              </div>
        
            </div>
        
        
            <div>
              <button
               class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                </span>
                Update
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




`
  },
  afterRender(id) {
    const formEdit = document.querySelector('#form-edit-post');
    const imgPost = document.querySelector("#img-post");
    const imgPreview = document.querySelector('#previewImage');
    let imgUploadedLink = "";


    imgPost.addEventListener("change", (e) => {
      imgPreview.src = URL.createObjectURL(imgPost.files[0])
    });
    formEdit.addEventListener("submit", async (e) => {
      e.preventDefault();

      const file = imgPost.files[0];
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "jkbdphzy");

        const { data } = await axios({
          url: "https://api.cloudinary.com/v1_1/ecommercer2021/image/upload",
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-formendcoded",
          },
          data: formData,
        });
        imgUploadedLink = data.url
      }

      update({
        id,
        createdAt: document.querySelector('#createdAt-post').value,
        title: document.querySelector('#title-post').value,
        desc: document.querySelector('#desc-post').value,

        img: imgUploadedLink ? imgUploadedLink : imgPreview.src
      })
        .then((result) => console.log(result.data))
        .then((document.location.href = "/admin/news"))
        .catch((error) => console.log(error));
    });
  }

};
export default Edit;