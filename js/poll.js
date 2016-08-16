var milkcocoa = new MilkCocoa('hotirsqj107.mlkcca.com');

var ds1 = milkcocoa.dataStore('round1');
var ds2 = milkcocoa.dataStore('round2');
var ds3 = milkcocoa.dataStore('round3');
var ds4 = milkcocoa.dataStore('round4');

var west = 32;
var east = 71;

var unit = 100 / (west + east);

var west_width = Math.floor(unit * west);
var east_width = Math.floor(unit * east);

console.log(west_width, east_width);

$(".west-result").css({
	'width' :west_width + '%'
})

$(".east-result").css({
	'width' :east_width + '%'
})


$(function(){
	$(".btnleft").click(function(){
		if(round==1){
			ds1.push({poll: 'west'});
		} else if(round==2){
 			ds2.push({poll: 'west'});           
		} else if(round==3){
			ds3.push({poll: 'west'});
		} else if (round==4){
			ds4.push({poll: 'west'});
		}
 	});

 	$(".btnright").click(function(){
		if(round==1){
			ds1.push({poll: 'east'});
		} else if(round==2){
 			ds2.push({poll: 'east'});           
		} else if(round==3){
			ds3.push({poll: 'east'});
		} else if (round==4){
			ds4.push({poll: 'east'});
		}
 	});

});

console.log(round);