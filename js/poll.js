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
			if (which == 'east') {
				east++;
			} else if (which == 'west') {
				west++;
			}
		}
		
		var unit = 100 / (west + east);

		var west_width = Math.floor(unit * west);
		var east_width = Math.floor(unit * east);

		

		$(".west-result1").css({
			'width' :west_width + '%'
		})

		$(".east-result1").css({
			'width' :east_width + '%'
		})

		$(".west-result1").text(west);
		$(".east-result1").text(east);


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
	
		var unit = 100 / (west + east);

		var west_width = Math.floor(unit * west);
		var east_width = Math.floor(unit * east);

		

		$(".west-result2").animate({
			'width' :west_width + '%'
		}, 1500)

		$(".east-result2").animate({
			'width' :east_width + '%'
		}, 1500)

		$(".west-result2").text(west);
		$(".east-result2").text(east);

	});

	milkcocoa.dataStore('round3').stream().size(100).next(function(err, data) {
		var west = 0;
		var east = 0; // 投票数

		console.log(data);

		for (var i=0; i<data.length; i++) {
			var which = data[i].value.poll;
			if (which == 'east') {
				east++;
			} else if (which == 'west') {
				west++;
			}
		}
		
		var unit = 100 / (west + east);

		var west_width = Math.floor(unit * west);
		var east_width = Math.floor(unit * east);


		$(".west-result3").animate({
			'width' :west_width + '%'
		},1500)

		$(".east-result3").animate({
			'width' :east_width + '%'
		},1500)

		$(".west-result3").text(west);
		$(".east-result3").text(east);


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
		
		var unit = 100 / (west + east);

		var west_width = Math.floor(unit * west);
		var east_width = Math.floor(unit * east);

		

		$(".west-result4").animate({
			'width' :west_width + '%'
		},1500)

		$(".east-result4").animate({
			'width' :east_width + '%'
		},1500)

		$(".west-result4").text(west);
		$(".east-result4").text(east);


	});
});
