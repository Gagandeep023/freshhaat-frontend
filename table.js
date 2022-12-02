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
          <th>Vegetables name</th>
          <th>Quantity</th>
          <th>Farmer Name</th>
          <th>Farm Address</th>
          <th>Mobile Number</th>
          <th>Crop Time</th>
         </tr>`;
    
    // Loop to access all rows 
    for (let r of data) {
        tab += `<tr> 
    <td>${r.product_name} </td>
    <td>${r.quantity}</td>
    <td>${r.farm_name}</td> 
    <td>${r.farm_address}</td>  
    <td>${r.farm_contact}</td>  
    <td>${r.crop_time}</td>
</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("table").innerHTML = tab;
    // console.log(tab)
}