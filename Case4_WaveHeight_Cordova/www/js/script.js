$(document).ready(function() {
	var init_present_location_YN = 1;
	getTaiwanWeather(0,"蘭嶼浮標");
    $(".btn_city_select").click(function(){
		var city_select = $(this).text();
		if(city_select=="蘭嶼浮標"){
			getTaiwanWeather(0,city_select);
		}else if(city_select=="富貴角資料浮標"){
			getTaiwanWeather(1,city_select);
		}else if(city_select=="龍洞浮標"){
			getTaiwanWeather(2,city_select);
		}else if(city_select=="馬祖浮標"){
			getTaiwanWeather(3,city_select);
		}else if(city_select=="花蓮浮標"){
			getTaiwanWeather(4,city_select);
		}else if(city_select=="金門浮標"){
			getTaiwanWeather(5,city_select);
		}
		console.log(city_select);
        $(".collapse").collapse("hide");  
    });
	
	function getTaiwanWeather(a,city_name) {
		
		var jqxhr = $.getJSON("https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0018-001?Authorization=CWB-DF9C065C-4BE1-4E19-85B6-3496DF3DA85D&format=JSON&elementName=%E6%B5%AA%E9%AB%98", function() {
			
		})
		.done(function(arr) {
			console.log("The second success.");
			
			//get時間
			var time_1 = arr.records.location[a].time[0].obsTime.substr(5,8).replace("-","/") + "時";
			var time_2 = arr.records.location[a+1].time[1].obsTime.substr(5,8).replace("-","/") + "時";
			var time_3 = arr.records.location[a+2].time[2].obsTime.substr(5,8).replace("-","/") + "時";
			var time_4 = arr.records.location[a+3].time[3].obsTime.substr(5,8).replace("-","/") + "時";
			//顯示時間
			$("#city").text(city_name);
			$("#date").text(time_1);
			$("#day2").text(time_2);
			$("#day3").text(time_3);
			$("#day4").text(time_4);
			//get浪高
			var wh1 = arr.records.location[a].time[0].weatherElement[0].elementValue;
			var wh2 = arr.records.location[a+1].time[1].weatherElement[0].elementValue;
			var wh3 = arr.records.location[a+2].time[2].weatherElement[0].elementValue;
			var wh4 = arr.records.location[a+3].time[3].weatherElement[0].elementValue;
			//顯示浪高
			$("#temp").text(wh1);
			$("#day2-high-low").text(wh2 + " cm");
			$("#day3-high-low").text(wh3 + " cm");
			$("#day4-high-low").text(wh4 + " cm");
			
		})
		.fail(function() {
			console.log("Get Taiwan weather fail!");
		})
		.always(function() {
			// console.log("Get Taiwan weather complete.");
		});
	}
	
	
});//end ready
