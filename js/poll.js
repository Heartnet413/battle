var milkcocoa = new MilkCocoa('hotirsqj107.mlkcca.com');

var ds1 = milkcocoa.dataStore('round1');
var ds2 = milkcocoa.dataStore('round2');
var ds3 = milkcocoa.dataStore('round3');
var ds4 = milkcocoa.dataStore('round4');

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


	milkcocoa.dataStore('round1').stream().size(100).next(function(err, data) {
		var west = 0;
		var east = 0; // 投票数

		for (var i=0; i<data.length; i++) {
			var which = data[i].value.poll;
			if (which == 'east') {
				east++;
			} else if (which == 'west') {
				west++;
			}
		}
		console.log('round1:', west, east);
	});
	
	milkcocoa.dataStore('round2').stream().size(100).next(function(err, data) {
		var west = 0;
		var east = 0; // 投票数

		for (var i=0; i<data.length; i++) {
			var which = data[i].value.poll;
			if (which == 'east') {
				east++;
			} else if (which == 'west') {
				west++;
			}
		}
		console.log('round2:', west, east);
	});

	milkcocoa.dataStore('round3').stream().size(100).next(function(err, data) {
		var west = 0;
		var east = 0; // 投票数

		for (var i=0; i<data.length; i++) {
			var which = data[i].value.poll;
			if (which == 'east') {
				east++;
			} else if (which == 'west') {
				west++;
			}
		}
		console.log('round3:', west, east);
	});

	milkcocoa.dataStore('round4').stream().size(100).next(function(err, data) {
		var west = 0;
		var east = 0; // 投票数

		for (var i=0; i<data.length; i++) {
			var which = data[i].value.poll;
			if (which == 'east') {
				east++;
			} else if (which == 'west') {
				west++;
			}
		}
		console.log('round4:', west, east);
	});
});
