import data from "../data";

const adm_ListProduct = {
    render(){
        return `

        <style>

        table, th, td {  
            border: 1px solid black;  
            border-collapse: collapse;  
        }  
        th, td {  
            padding:  10px; 
        </style>


        <table class="">


        <tr>
          <th>id</th>
          <th>title</th>
          <th>img</th>
          <th>desc</th>
          <th>createdAt</th>
          <th colspan="2">TOOl</th>
        </tr>

        <div class="grid grid-cols-3 gap-8">
        ${data.map((post) => `
        <tr>
        <td>${post.id}</td>
        <td>${post.title}</td>
        <td>${post.img}</td>
        <td>${post.desc}</td>
        <td>${post.createdAt}</td>
        <td >  <a href ="#"><div class="d-inline p-2 bg-black text-white"> Edit </div></a> </td>
        <td >  <a href ="#"><div class="d-inline p-2 bg-black text-white"> Delete </div></a> </td>
      </tr>

        `).join("")}
        
    </div>
        

    </table>

    
        `;
    },
};
export default adm_ListProduct;