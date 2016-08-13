var milkcocoa = new MilkCocoa('hotirsqj107.mlkcca.com');

var ds1 = milkcocoa.dataStore('poll');

$(function(){
	$(".btnleft").click(function(){
		ds1.push({poll: 'west'});
 	});

 	$(".btnright").click(function(){
		ds1.push({poll: 'east'});
 	});

});

