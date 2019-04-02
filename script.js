var image = [];
var title = [];
var prices = [];

$(".add").click(function(){
        var newImage = $(".imageInput").val();
        var newTitle = $(".titleInput").val();
        var newPrice = $(".priceInput").val();
        image.push(newImage);
        title.push(newTitle);
        prices.push(newPrice);
    $(".merchandises").append("<div class='newI'>" +'<img src="' + newImage + '">' + '<p>' + newTitle + '</p>' + '<p>' + newPrice + '</p>' + "</div>");
    $(".total").text(0 + prices.length);
    var totalPrice = 0;
    prices.forEach(function(price){
        var numPrice = parseInt(price);
        totalPrice = totalPrice + numPrice;
    $(".totalP").text("$" + totalPrice);
    });
});
    $(".checkout").click(function(){
        var totalPrice = 0;
        prices.forEach(function(price){
            var numPrice = parseInt(price);
            totalPrice = totalPrice + numPrice;
        });
        if(prices.length === 0){
            alert("You haven't add anything to your cart yet!");
        }
        else if(prices.length === 1){
            alert("Thank You! You've checked out " + title[0] + " and a total of $" + totalPrice);
        }
        else{
            alert("Thank You! You've checked out " + title[0] + " and other item(s), and a total of $" + totalPrice);
        }
    });    
    