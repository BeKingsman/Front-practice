const HOST = "http://localhost:8000/"

$(document).ready( function(){
    $.ajax({
        type:'GET',
        url: HOST + 'products/Men/Jeans',
        crossDomain: true,
        headers:{
       
        },
        dataType: "json", 
        success: function(data){
            console.log(data);
          $.each(data, function(index, product){
            // createCard(product.id, product.thumbnail, product.name, product.mrp, product.price);
            createCard(product.id, product.thumbnail, product.name, product.price,product.mrp);
          });
           }
    });
});

function createCard(id, thumbnail, product_name, price,mrp){
console.log("hello")
var cardparent = document.querySelector(".main-body");
var discount = ((price/mrp)*100).toString(10).split(".")[0]; 
console.log(discount)
cardparent.innerHTML += '<div class="card"><div class="img"></div><div class="info"><div class="name">'+ product_name + '</div><div class="brand">Nike</div><div class="price">&#8377 '+price+ '</div><div class="mrp"><del>  '+mrp+ ' </del></div><div class="percent">'+discount+'% off</div> </div></div>'
}


