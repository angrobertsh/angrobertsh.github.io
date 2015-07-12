var bakeryitems = new Array();
var applenut = ["Apple Walnut Muffin", ["wg", "nuts", "fruit"], ["Muffins", "Boulangerie", "Morning", "Warm", "Packaged", "Old"]]
var bananabread = ["Banana Bread Muffin", ["wg", "nuts", "fruit"], ["Muffins", "Boulangerie", "Morning", "Warm", "Packaged", "Old"]]
var blueberry = ["Blueberry Muffin", ["wf", "fruit"], ["Muffins", "Boulangerie", "Morning", "Warm", "Packaged", "Old"]]
var bran = ["Bran Muffin", ["wg", "fruit"], ["Muffins", "Boulangerie", "Morning", "Warm", "Packaged", "Old"]]
var multi = ["Multigrain Muffin", ["wg", "nuts", "fruit"], ["Muffins", "Boulangerie", "Morning", "Warm", "Packaged", "Old"]]
var cheddar = ["Cheddar Scone", [], ["Scones", "Boulangerie", "Morning", "Warm", "Packaged", "Old"]]
var currant = ["Currant Scone", ["fruit"], ["Scones", "Boulangerie", "Morning", "Warm", "Packaged", "Old"]]
var strawberry = ["Strawberry Scone", ["fruit"], ["Scones", "Boulangerie", "Morning", "Warm", "Packaged", "Old"]]
var chocchip = ["Chocolate Chip Cookie", ["wg", "choc"], ["Cookies", "Patisserie", "Afternoon", "Warm", "No", "Old"]]
var doublechoc = ["Double Chocolate Cookie", ["vegan", "choc"], ["Cookies", "Patisserie", "Afternoon", "Warm", "No", "Old"]]
var oatmeal = ["Oatmeal Cookie", ["wg"], ["Cookies", "Patisserie", "Afternoon", "Warm", "No", "Old"]]
var pistachio = ["Pistachio Cookie", ["wf"], ["Cookies", "Patisserie", "Afternoon", "Warm", "No", "Old"]]
var snicker = ["Snickerdoodle Cookie", ["wg"], ["Cookies", "Patisserie", "Afternoon", "Warm", "No", "Old"]]
var thumb = ["Thumbprint Cookie", ["fruit", "nuts"], ["Cookies", "Patisserie", "Afternoon", "Warm", "No", "Old"]]
var walnuttea = ["Walnut Tea Cookie", ["nuts"], ["Cookies", "Patisserie", "Afternoon", "Warm", "No", "Old"]]
var applepie = ["Apple Pie", ["wg", "fruit"], ["Cakes-Pies-Cupcakes", "Patisserie", "Afternoon", "Cold", "No", "Old"]]
var pecanpie = ["Pecan Pie", ["wg", "nuts"], ["Cakes-Pies-Cupcakes", "Patisserie", "Afternoon", "Cold", "No", "Old"]]
var fruittart = ["Fruit Tart", ["wg", "fruit"], ["Cakes-Pies-Cupcakes", "Patisserie", "Afternoon", "Cold", "Tossed", "Old"]]
var lemontart = ["Lemon Tart", ["wg", "fruit"], ["Cakes-Pies-Cupcakes", "Patisserie", "Afternoon", "Cold", "Tossed", "Old"]]
var fruitcheese = ["Fruit Cheesecake", ["fruit"], ["Cakes-Pies-Cupcakes", "Patisserie", "Afternoon", "Cold", "No", "Old"]]
var choccheese = ["Chocolate Cheesecake", ["choc"], ["Cakes-Pies-Cupcakes", "Patisserie", "Afternoon", "Cold", "No", "Old"]]
var vancup = ["Vanilla Cupcake", ["fruit", "wf"], ["Cakes-Pies-Cupcakes", "Patisserie", "Afternoon", "Warm", "Tossed", "Old"]]
var raspcup = ["Raspberry Cupcake", ["fruit"], ["Cakes-Pies-Cupcakes", "Patisserie", "Afternoon", "Warm", "No", "Old"]]
var germchoc = ["German Chocolate Cupcake", ["choc"], ["Cakes-Pies-Cupcakes", "Patisserie", "Afternoon", "Warm", "No", "Old"]]
var carmchoc = ["Caramel Chocolate Cupcake", ["caramel"], ["Cakes-Pies-Cupcakes", "Patisserie", "Afternoon", "Cold", "No", "Old"]]
var flourless = ["Flourless Chocolate Cake", ["choc", "wf"], ["Cakes-Pies-Cupcakes", "Patisserie", "Afternoon", "Cold", "No", "Old"]]
var vegancake = ["Vegan Chocolate Cake", ["choc", "vegan"], ["Cakes-Pies-Cupcakes", "Patisserie", "Afternoon", "Cold", "No", "Old"]]
var creampuff = ["Cream Puff", [], ["Puffs-Eclairs", "Patisserie", "Afternoon", "Cold", "Tossed", "Old"]]
var powderpuff = ["Powdered Sugar Cream Puff", [], ["Puffs-Eclairs", "Patisserie", "Afternoon", "Cold", "Tossed", "Old"]]
var chocpuff = ["Chocolate Drizzled Cream Puff", ["choc", "caramel"], ["Puffs-Eclairs", "Patisserie", "Afternoon", "Cold", "Tossed", "Old"]]
var carmeclair = ["Caramel Eclair", ["caramel"], ["Puffs-Eclairs", "Patisserie", "Afternoon", "Cold", "Tossed", "Old"]]
var choceclair = ["Chocolate Eclair", ["choc"], ["Puffs-Eclairs", "Patisserie", "Afternoon", "Cold", "Tossed", "Old"]]
var carmpud = ["Caramel Pudding", ["caramel"], ["Miscellaneous", "Patisserie", "Afternoon", "Cold", "No", "Old"]]
var ricepud = ["Rice Pudding", ["wf"], ["Miscellaneous", "Patisserie", "Afternoon", "Cold", "No", "Old"]]
var nutbar = ["Seeds and Nut Bar", ["raw", "vegan", "wf", "nuts"], ["Miscellaneous", "Patisserie", "Afternoon", "Cold", "No", "Old"]]


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
			var categoryname = value[2][thecurrentsort];
//			check to see if div id doesn't exist by seeing if length is zero
			if($("#" + categoryname).length == 0)
			{
				$("#categlist").append("<div class='categtitle' id='" + categoryname + "'><br>" + categoryname + "<br></div>");
//				create new header div attached to categlist with categoryname as id and text			
			}
			if(filternames.length !== 0)
			{	
				var counter = 0;
				$.each(value[1], function(index2, value2){
//					see if quality exists in filternames, index = -1 if it doesn't exist
					if(jQuery.inArray(value2, filternames) !==-1)
					{
						counter++;
					}
				});
				if(counter == filternames.length)
				{
//						add array element 0 to the end of the div with id category name
					$("#" + categoryname).append("<div class='bakedgood'>" + value[0] + "</div>");
				}
			}
			if(filternames.length == 0)
			{
				$("#" + categoryname).append("<div class='bakedgood'>" + value[0] + "</div>");
			}

		});







		return false;
	});

});