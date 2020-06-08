
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
        organic: true,
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
        organic: false,
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
        organic: true,
		price: 10.00
	},
    {
		name: "banana",
		vegetarian: true,
		glutenFree: true,
        organic: true,
		price: 2.55
	},
    {
		name: "orange",
		vegetarian: true,
		glutenFree: true,
        organic: true,
		price: 1.99
	},
    {
		name: "melon",
		vegetarian: true,
		glutenFree: true,
        organic: true,
		price: 4.50
	},
    {
		name: "peach",
		vegetarian: true,
		glutenFree: true,
        organic: true,
		price: 1.59
	},
    {
		name: "cheese",
		vegetarian: false,
		glutenFree: true,
        organic: false,
		price: 7.99
	},
    {
		name: "beef",
		vegetarian: false,
		glutenFree: true,
        organic: true,
		price: 11.99
	},
    {
		name: "Chicken",
		vegetarian: false,
		glutenFree: true,
        organic: true,
		price: 7.89
	},
    {
		name: "almond",
		vegetarian: true,
		glutenFree: true,
        organic: true,
		price: 3.23
	},
    {
		name: "almond milk",
		vegetarian: true,
		glutenFree: true,
        organic: false,
		price: 6.35
	},
    {
		name: "milk",
		vegetarian: false,
		glutenFree: true,
        organic: false,
		price: 5.33
	},
    {
		name: "cookies",
		vegetarian: false,
		glutenFree: false,
        organic: false,
		price: 4.78
	},
    {
		name: "pasta",
		vegetarian: true,
		glutenFree: false,
        organic: false,
		price: 4.13
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i]);
		}
        else if ((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push(prods[i]);
		}
		else if (restriction == "None"){
			product_names.push(prods[i]);
		}
	}
    product_names.sort(function(a,b) {
        return parseFloat(a.price) - parseFloat(b.price);
    });
                
    
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}