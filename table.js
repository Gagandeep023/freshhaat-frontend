// api url
const api_url = 
      "http://127.0.0.1:3001/api/v1/dashboard/details";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        // hideloader();
    }
    show(data);
}
// Calling that async function
getapi(api_url);
function show(data) {
    var tab = 
        `<tr>
          <th>Product name</th>
          <th>Product Image</th>
          <th>Farm Address</th>
          <th>Crop Time</th>
          <th>Go to product</th>

         </tr>`;


    for (let r of data) {
        tab += `<tr> 
    <td>${r.product_name} </td>
    <td><img src="${r.product_image}"/></td>
    <td>${r.farm_address}</td>  
    <td>${r.crop_time}</td>
    <td><input onclick="location.href = 'http://127.0.0.1:5501/product-details.html?productId=${r.product_id}';" class='btn btn-info' type='button' value='Details'/></td>

</tr>`; 
    }

    
    // Setting innerHTML as tab variable
    document.getElementById("table").innerHTML = tab;
    // console.log(tab)
}