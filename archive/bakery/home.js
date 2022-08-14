var bakeryitems = [];
var applenut = {name: "Apple Walnut Muffin", attributes: ["wg", "nuts", "fruit"], categories: {type: "Muffins", family: "Boulangerie", time: "Morning", case: "Warm", sale: "Packaged", added: "Old", perception: "Healthy"}}
var bananabread = {name: "Banana Bread Muffin", attributes: ["wg", "nuts", "fruit"], categories: {type: "Muffins", family: "Boulangerie", time: "Morning", case: "Warm", sale: "Packaged", added: "Old", perception: "Healthy"}}
var blueberry = {name: "Blueberry Muffin", attributes: ["wf", "fruit"], categories: {type: "Muffins", family: "Boulangerie", time: "All-Day", case: "Warm", sale: "Packaged", added: "Old", perception: "Classic"}}
var bran = {name: "Bran Muffin", attributes: ["wg", "fruit"], categories: {type: "Muffins", family: "Boulangerie", time: "Morning", case: "Warm", sale: "Packaged", added: "Old", perception: "Healthy"}}
var multi = {name: "Multigrain Muffin", attributes: ["wg", "nuts", "fruit"], categories: {type: "Muffins", family: "Boulangerie", time: "Morning", case: "Warm", sale: "Packaged", added: "Old", perception: "Healthy"}}
var cheddar = {name: "Cheddar Scone", attributes: [], categories: {type: "Scones", family: "Boulangerie", time: "All-Day", case: "Warm", sale: "Packaged", added: "Old", perception: "Classic"}}
var currant = {name: "Currant Scone", attributes: ["fruit"], categories: {type: "Scones", family: "Boulangerie", time: "All-Day", case: "Warm", sale: "Packaged", added: "Old", perception: "Classic"}}
var strawberry = {name:"Strawberry Scone", attributes: ["fruit"], categories: {type: "Scones", family: "Boulangerie", time: "All-Day", case: "Warm", sale: "Packaged", added: "Old", perception: "Indulgent"}}
var chocchip = {name:"Chocolate Chip Cookie", attributes: ["wg", "choc"], categories: {type: "Cookies", family: "Patisserie", time: "Afternoon", case: "Warm", sale: "No", added: "Old", perception: "Classic"}}
var doublechoc = {name:"Double Chocolate Cookie", attributes: ["vegan", "choc"], categories: {type: "Cookies", family: "Patisserie", time: "Afternoon", case: "Warm", sale: "No", added: "Old", perception: "Indulgent"}}
var oatmeal = {name:"Oatmeal Cookie", attributes: ["wg"], categories: {type: "Cookies", family: "Patisserie", time: "Afternoon", case: "Warm", sale: "No", added: "Old", perception: "Classic"}}
var pistachio = {name:"Pistachio Cookie", attributes: ["wf"], categories: {type: "Cookies", family: "Patisserie", time: "Afternoon", case: "Warm", sale: "No", added: "Old", perception: "Healthy"}}
var snicker = {name:"Snickerdoodle Cookie", attributes: ["wg"], categories: {type: "Cookies", family: "Patisserie", time: "Afternoon", case: "Warm", sale: "No", added: "Old", perception: "Classic"}}
var thumb = {name:"Thumbprint Cookie", attributes: ["fruit", "nuts"], categories: {type: "Cookies", family: "Patisserie", time: "Afternoon", case: "Warm", sale: "No", added: "Old", perception: "Classic"}}
var walnuttea = {name:"Walnut Tea Cookie", attributes: ["nuts"], categories: {type: "Cookies", family: "Patisserie", time: "Afternoon", case: "Warm", sale: "No", added: "Old", perception: "Classic"}}
var applepie = {name:"Apple Pie", attributes: ["wg", "fruit"], categories: {type: "Cakes-Pies-Cupcakes", family: "Patisserie", time: "Afternoon", case: "Cold", sale: "No", added: "Old", perception: "Classic"}}
var pecanpie = {name:"Pecan Pie", attributes: ["wg", "nuts"], categories: {type: "Cakes-Pies-Cupcakes", family: "Patisserie", time: "Afternoon", case: "Cold", sale: "No", added: "Old", perception: "Classic"}}
var fruittart = {name:"Fruit Tart", attributes: ["wg", "fruit"], categories: {type: "Cakes-Pies-Cupcakes", family: "Patisserie", time: "Afternoon", case: "Cold", sale: "Tossed", added: "Old", perception: "Indulgent"}}
var lemontart = {name:"Lemon Tart", attributes: ["wg", "fruit"], categories: {type: "Cakes-Pies-Cupcakes", family: "Patisserie", time: "Afternoon", case: "Cold", sale: "Tossed", added: "Old", perception: "Indulgent"}}
var fruitcheese = {name:"Fruit Cheesecake", attributes: ["fruit"], categories: {type: "Cakes-Pies-Cupcakes", family: "Patisserie", time: "Afternoon", case: "Cold", sale: "No", added: "Old", perception: "Indulgent"}}
var choccheese = {name:"Chocolate Cheesecake", attributes: ["choc"], categories: {type: "Cakes-Pies-Cupcakes", family: "Patisserie", time: "Afternoon", case: "Cold", sale: "No", added: "Old", perception: "Indulgent"}}
var vancup = {name:"Vanilla Cupcake", attributes: ["fruit", "wf"], categories: {type: "Cakes-Pies-Cupcakes", family: "Patisserie", time: "Afternoon", case: "Warm", sale: "Tossed", added: "Old", perception: "Indulgent"}}
var raspcup = {name:"Raspberry Cupcake", attributes: ["fruit"], categories: {type: "Cakes-Pies-Cupcakes", family: "Patisserie", time: "Afternoon", case: "Warm", sale: "No", added: "Old", perception: "Indulgent"}}
var germchoc = {name:"German Chocolate Cupcake", attributes: ["choc"], categories: {type: "Cakes-Pies-Cupcakes", family: "Patisserie", time: "Afternoon", case: "Warm", sale: "No", added: "Old", perception: "Indulgent"}}
var carmchoc = {name:"Caramel Chocolate Cupcake", attributes: ["caramel"], categories: {type: "Cakes-Pies-Cupcakes", family: "Patisserie", time: "Afternoon", case: "Cold", sale: "No", added: "Old", perception: "Indulgent"}}
var flourless = {name:"Flourless Chocolate Cake", attributes: ["choc", "wf"], categories: {type: "Cakes-Pies-Cupcakes", family: "Patisserie", time: "Afternoon", case: "Cold", sale: "No", added: "Old", perception: "Indulgent"}}
var vegancake = {name:"Vegan Chocolate Cake", attributes: ["choc", "vegan"], categories: {type: "Cakes-Pies-Cupcakes", family: "Patisserie", time: "Afternoon", case: "Cold", sale: "No", added: "Old", perception: "Indulgent"}}
var creampuff = {name:"Cream Puff", attributes: [], categories: {type: "Puffs-Eclairs", family: "Patisserie", time: "Afternoon", case: "Cold", sale: "Tossed", added: "Old", perception: "Indulgent"}}
var powderpuff = {name:"Powdered Sugar Cream Puff", attributes: [], categories: {type: "Puffs-Eclairs", family: "Patisserie", time: "Afternoon", case: "Cold", sale: "Tossed", added: "Old", perception: "Indulgent"}}
var chocpuff = {name:"Chocolate Drizzled Cream Puff", attributes: ["choc", "caramel"], categories: {type: "Puffs-Eclairs", family: "Patisserie", time: "Afternoon", case: "Cold", sale: "Tossed", added: "Old", perception: "Indulgent"}}
var carmeclair = {name:"Caramel Eclair", attributes: ["caramel"], categories: {type: "Puffs-Eclairs", family: "Patisserie", time: "Afternoon", case: "Cold", sale: "Tossed", added: "Old", perception: "Indulgent"}}
var choceclair = {name:"Chocolate Eclair", attributes: ["choc"], categories: {type: "Puffs-Eclairs", family: "Patisserie", time: "Afternoon", case: "Cold", sale: "Tossed", added: "Old", perception: "Indulgent"}}
var carmpud = {name:"Caramel Pudding", attributes: ["caramel"], categories: {type: "Miscellaneous", family: "Patisserie", time: "Afternoon", case: "Cold", sale: "No", added: "Old", perception: "Indulgent"}}
var ricepud = {name:"Rice Pudding", attributes: ["wf"], categories: {type: "Miscellaneous", family: "Patisserie", time: "Afternoon", case: "Cold", sale: "No", added: "Old", perception: "Classic"}}
var nutbar = {name:"Seeds and Nut Bar", attributes: ["raw", "vegan", "wf", "nuts"], categories: {type: "Miscellaneous", family: "Patisserie", time: "Afternoon", case: "Cold", sale: "No", added: "Old", perception: "Healthy"}}


bakeryitems = [applenut, bananabread, blueberry, bran, multi, cheddar, currant, strawberry, chocchip, doublechoc, oatmeal, pistachio, snicker, thumb, walnuttea, applepie, pecanpie, fruittart, lemontart, fruitcheese, choccheese, vancup, raspcup, germchoc, carmchoc, flourless, vegancake, carmeclair, choceclair, chocpuff, powderpuff, creampuff, ricepud, carmpud, nutbar]

function additem()
{
//	var newitemname = document.additemform.itemname.value;
//	var attributearray = new Array();
//	var categoryarray = new Array();
}

function removeitem()
{
//	var removeitemname = document.removeitem.removeitemname.value;
}

function populateString(string)
{
	// get thing
	// JSON.stringify(bakeryitems)
}


function populateInitialList()
{
	document.getElementById("bakeryjson").value = JSON.stringify(bakeryitems);
	populateListFromString();
}

function populateListFromString()
{
	bakeryitems = JSON.parse(document.getElementById("bakeryjson").value);
	createCategories();
	setItems();
}

function createCategories()
{
	var helperhash = {};
	let thecurrentsort = $('input[name=thesort]:checked', '#filteritems').val();
	let currentUL;
	let type;
	bakeryitems.forEach(function(item){
		type = item["categories"][thecurrentsort]
		if(helperhash[type] === undefined){
			helperhash[type] = 1;
			currentUL = document.createElement('ul');
			currentUL.id = type;
			currentUL.className = "categ";
			currentUL.innerHTML = type;
			document.getElementById("categlist").appendChild(currentUL);
		} else {
			helperhash[type] += 1;
		}
	});
}

function setItems()
{
	let currentLI;
	let thecurrentsort = $('input[name=thesort]:checked', '#filteritems').val();
	let filternames = [];
	let checker = [];
	$('input[name=thefilter]:checked').each(function()
		{
				filternames.push($(this).val());
		}
	);
	bakeryitems.forEach(function(item){
		if(filternames.map(function(filter){
			return item["attributes"].includes(filter);
		}).includes(false) === false) {
			currentLI = document.createElement('li');
			currentLI.className = "bakedgood";
			currentLI.innerHTML = item["name"];
			document.getElementById(item["categories"][thecurrentsort]).appendChild(currentLI);
		}
	});
}

$(document).ready(function(){


	populateInitialList();


//	$('#toggleingredients').click(function()
//	{
//		$('#ingredientlist').toggle();
//	});


	$("#filteritems").submit(function(e)
	{
		e.preventDefault();
		$("#categlist").empty();

		populateListFromString();

// 		//the sort
// 		var thecurrentsort = $('input[name=thesort]:checked', '#filteritems').val();
//
// 		//the filters
// 		var filternames = [];
// 		$('input[name=thefilter]:checked').each
// 			(function()
// 			{
//     			filternames.push($(this).val());
//     	});
//
//
// 		$.each(bakeryitems, function(index, value){
// 			var categoryname = value["categories"][thecurrentsort];
// //			check to see if div id doesn't exist by seeing if length is zero
// 			if($("#" + categoryname).length == 0)
// 			{
// 				$("#categlist").append("<div class='categtitle' id='" + categoryname + "'><br>" + categoryname + "<br></div>");
// //				create new header div attached to categlist with categoryname as id and text
// 			}
// 			if(filternames.length !== 0)
// 			{
// 				var counter = 0;
// 				$.each(value["attributes"], function(index2, value2){
// //					see if quality exists in filternames, index = -1 if it doesn't exist
// 					if(jQuery.inArray(value2, filternames) !==-1)
// 					{
// 						counter++;
// 					}
// 				});
// 				if(counter == filternames.length)
// 				{
// //						add array element 0 to the end of the div with id category name
// 					$("#" + categoryname).append("<div class='bakedgood'>" + value["name"] + "</div>");
// 				}
// 			}
// 			if(filternames.length == 0)
// 			{
// 				$("#" + categoryname).append("<div class='bakedgood'>" + value["name"] + "</div>");
// 			}
//
// 		});
//
//
//
//

		// return false;
	});

});
