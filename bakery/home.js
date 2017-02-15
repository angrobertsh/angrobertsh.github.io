var bakeryitems = [];
var applenut = {name: "Apple Walnut Muffin", attributes: ["wg", "nuts", "fruit"], categories: ["Muffins", "Boulangerie", "Morning", "Warm", "Packaged", "Old"]}
var bananabread = {name: "Banana Bread Muffin", attributes: ["wg", "nuts", "fruit"], categories: ["Muffins", "Boulangerie", "Morning", "Warm", "Packaged", "Old"]}
var blueberry = {name: "Blueberry Muffin", attributes: ["wf", "fruit"], categories: ["Muffins", "Boulangerie", "Morning", "Warm", "Packaged", "Old"]}
var bran = {name: "Bran Muffin", attributes: ["wg", "fruit"], categories: ["Muffins", "Boulangerie", "Morning", "Warm", "Packaged", "Old"]}
var multi = {name: "Multigrain Muffin", attributes: ["wg", "nuts", "fruit"], categories: ["Muffins", "Boulangerie", "Morning", "Warm", "Packaged", "Old"]}
var cheddar = {name: "Cheddar Scone", attributes: [], categories: ["Scones", "Boulangerie", "Morning", "Warm", "Packaged", "Old"]}
var currant = {name: "Currant Scone", attributes: ["fruit"], categories: ["Scones", "Boulangerie", "Morning", "Warm", "Packaged", "Old"]}
var strawberry = {name:"Strawberry Scone", attributes: ["fruit"], categories: ["Scones", "Boulangerie", "Morning", "Warm", "Packaged", "Old"]}
var chocchip = {name:"Chocolate Chip Cookie", attributes: ["wg", "choc"], categories: ["Cookies", "Patisserie", "Afternoon", "Warm", "No", "Old"]}
var doublechoc = {name:"Double Chocolate Cookie", attributes: ["vegan", "choc"], categories: ["Cookies", "Patisserie", "Afternoon", "Warm", "No", "Old"]}
var oatmeal = {name:"Oatmeal Cookie", attributes: ["wg"], categories: ["Cookies", "Patisserie", "Afternoon", "Warm", "No", "Old"]}
var pistachio = {name:"Pistachio Cookie", attributes: ["wf"], categories: ["Cookies", "Patisserie", "Afternoon", "Warm", "No", "Old"]}
var snicker = {name:"Snickerdoodle Cookie", attributes: ["wg"], categories: ["Cookies", "Patisserie", "Afternoon", "Warm", "No", "Old"]}
var thumb = {name:"Thumbprint Cookie", attributes: ["fruit", "nuts"], categories: ["Cookies", "Patisserie", "Afternoon", "Warm", "No", "Old"]}
var walnuttea = {name:"Walnut Tea Cookie", attributes: ["nuts"], categories: ["Cookies", "Patisserie", "Afternoon", "Warm", "No", "Old"]}
var applepie = {name:"Apple Pie", attributes: ["wg", "fruit"], categories: ["Cakes-Pies-Cupcakes", "Patisserie", "Afternoon", "Cold", "No", "Old"]}
var pecanpie = {name:"Pecan Pie", attributes: ["wg", "nuts"], categories: ["Cakes-Pies-Cupcakes", "Patisserie", "Afternoon", "Cold", "No", "Old"]}
var fruittart = {name:"Fruit Tart", attributes: ["wg", "fruit"], categories: ["Cakes-Pies-Cupcakes", "Patisserie", "Afternoon", "Cold", "Tossed", "Old"]}
var lemontart = {name:"Lemon Tart", attributes: ["wg", "fruit"], categories: ["Cakes-Pies-Cupcakes", "Patisserie", "Afternoon", "Cold", "Tossed", "Old"]}
var fruitcheese = {name:"Fruit Cheesecake", attributes: ["fruit"], categories: ["Cakes-Pies-Cupcakes", "Patisserie", "Afternoon", "Cold", "No", "Old"]}
var choccheese = {name:"Chocolate Cheesecake", attributes: ["choc"], categories: ["Cakes-Pies-Cupcakes", "Patisserie", "Afternoon", "Cold", "No", "Old"]}
var vancup = {name:"Vanilla Cupcake", attributes: ["fruit", "wf"], categories: ["Cakes-Pies-Cupcakes", "Patisserie", "Afternoon", "Warm", "Tossed", "Old"]}
var raspcup = {name:"Raspberry Cupcake", attributes: ["fruit"], categories: ["Cakes-Pies-Cupcakes", "Patisserie", "Afternoon", "Warm", "No", "Old"]}
var germchoc = {name:"German Chocolate Cupcake", attributes: ["choc"], categories: ["Cakes-Pies-Cupcakes", "Patisserie", "Afternoon", "Warm", "No", "Old"]}
var carmchoc = {name:"Caramel Chocolate Cupcake", attributes: ["caramel"], categories: ["Cakes-Pies-Cupcakes", "Patisserie", "Afternoon", "Cold", "No", "Old"]}
var flourless = {name:"Flourless Chocolate Cake", attributes: ["choc", "wf"], categories: ["Cakes-Pies-Cupcakes", "Patisserie", "Afternoon", "Cold", "No", "Old"]}
var vegancake = {name:"Vegan Chocolate Cake", attributes: ["choc", "vegan"], categories: ["Cakes-Pies-Cupcakes", "Patisserie", "Afternoon", "Cold", "No", "Old"]}
var creampuff = {name:"Cream Puff", attributes: [], categories: ["Puffs-Eclairs", "Patisserie", "Afternoon", "Cold", "Tossed", "Old"]}
var powderpuff = {name:"Powdered Sugar Cream Puff", attributes: [], categories: ["Puffs-Eclairs", "Patisserie", "Afternoon", "Cold", "Tossed", "Old"]}
var chocpuff = {name:"Chocolate Drizzled Cream Puff", attributes: ["choc", "caramel"], categories: ["Puffs-Eclairs", "Patisserie", "Afternoon", "Cold", "Tossed", "Old"]}
var carmeclair = {name:"Caramel Eclair", attributes: ["caramel"], categories: ["Puffs-Eclairs", "Patisserie", "Afternoon", "Cold", "Tossed", "Old"]}
var choceclair = {name:"Chocolate Eclair", attributes: ["choc"], categories: ["Puffs-Eclairs", "Patisserie", "Afternoon", "Cold", "Tossed", "Old"]}
var carmpud = {name:"Caramel Pudding", attributes: ["caramel"], categories: ["Miscellaneous", "Patisserie", "Afternoon", "Cold", "No", "Old"]}
var ricepud = {name:"Rice Pudding", attributes: ["wf"], categories: ["Miscellaneous", "Patisserie", "Afternoon", "Cold", "No", "Old"]}
var nutbar = {name:"Seeds and Nut Bar", attributes: ["raw", "vegan", "wf", "nuts"], categories: ["Miscellaneous", "Patisserie", "Afternoon", "Cold", "No", "Old"]}


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

function populateListFromString()
{
	// JSON.parse(whatever)
	// append to thing
}

$(document).ready(function(){

//	$('#toggleingredients').click(function()
//	{
//		$('#ingredientlist').toggle();
//	});


	$("#filteritems").submit(function()
	{

		$("#categlist").empty();

		//the sort
		var thecurrentsort = $('input[name=thesort]:checked', '#filteritems').val();

		//the filters
		var filternames = [];
		$('input[name=thefilter]:checked').each
			(function()
			{
    			filternames.push($(this).val());
    		});


		$.each(bakeryitems, function(index, value){
			var categoryname = value["categories"][thecurrentsort];
//			check to see if div id doesn't exist by seeing if length is zero
			if($("#" + categoryname).length == 0)
			{
				$("#categlist").append("<div class='categtitle' id='" + categoryname + "'><br>" + categoryname + "<br></div>");
//				create new header div attached to categlist with categoryname as id and text
			}
			if(filternames.length !== 0)
			{
				var counter = 0;
				$.each(value["attributes"], function(index2, value2){
//					see if quality exists in filternames, index = -1 if it doesn't exist
					if(jQuery.inArray(value2, filternames) !==-1)
					{
						counter++;
					}
				});
				if(counter == filternames.length)
				{
//						add array element 0 to the end of the div with id category name
					$("#" + categoryname).append("<div class='bakedgood'>" + value["name"] + "</div>");
				}
			}
			if(filternames.length == 0)
			{
				$("#" + categoryname).append("<div class='bakedgood'>" + value["name"] + "</div>");
			}

		});







		return false;
	});

});
