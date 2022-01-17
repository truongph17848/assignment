import NavAdmin from "../../components/NavAdmin";



const addProduct = {
        render(){
            return`
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
            

                    <style>

                    table, th, td {  
                        border-bottom: 1px solid black;  
                        border-collapse: collapse;  
                    }  
                    td,input {  
                        padding:  10px; 
                    
                    </style>


                    <table>
                    <tr>
                      <td><label class="form-label">Id</label></td>
                      <td><input type="text" id="id"></td>
                    </tr>
              
                    <tr>
                      <td><label class="form-label">title</label></td>
                      <td><input type="text" id="title"></td>
                    </tr>
              
                    <tr>
                      <td><label class="form-label">img</label></td>
                      <td><input type="file" id="img"></td>
                    </tr>
              
                    <tr>
                      <td><label class="form-label">createdAt</label></td>
                      <td><input type="text" id="createdAt"></td>
                    </tr>

                    <tr>
                    <td> <button onclick="addData()" id="addbtn"> <div class="d-inline p-2 bg-black text-white">  Add </div>  </button> </td>
                    </tr>
                  </table>  



                `
                var data = [];
                function addData() {
                  var id = document.getElementById('id').value;
                  var title = document.getElementById('title').value;
                  

                  var item = {
                      id : id,
                      title : title
                  };
                  this.data.push(item);
                  console.log(item);
  
              };
                `;



                </div>
                </div>
                <!-- /End replace -->
            </div>
            </main>
        </div>

            `;
        },
    };
    export default addProduct;