var startCount=0;
var datasheetCount=0;
var trendsCount=0;
function TemperatureSensorMimic(){
	timerMasterJson.squences=$("#counter").text();
//	console.log(timerMasterJson);
	seconds = 0;
	  updateCounter();
	$("#Header").html("	<center><span >SIMULATION</span></center>");
	$("#diagram").html("");
	
	htm=''
		+'<div class="row titlePart"  style="border-style: unset;padding:7px;">'
		+'<center><span >PROCESS MONITORING PANEL</span></center>'
		+'</div>'
		+'<div class="row">'
		+'<div class="col-sm-6">'
		+'<button id="startBtn" class="btn btn-danger" style="width:100%;margin-bottom:10px" disabled>Start</button>'
		+'</div>'
		+'<div class="col-sm-6">'
//		+'<button id="reset" class="btn btn-danger" style="width:100%;margin-bottom:10px">Reset</button>'
		+'</div>'
		+'</div>'
		+'<div class="row">'
		+'<div class="col-sm-6">'
		+'<button id="datasheetBtn" class="btn btn-danger" style="width:100%;margin-bottom:10px" data-toggle="modal" data-target="#datasheetModel" disabled>View Datasheet</button>'
		+'</div>'
		+'<div class="col-sm-6">'
		+'<button type="button" class="btn btn-danger"  id="graph" style="width:100%;margin-bottom:10px" data-toggle="modal" data-target="#modalTrends1" disabled>Trends </button>'
	

//	+'	<!-- Button to Open Modal -->'
//	+'	<button type="button" class="btn btn-primary" id="openModal">'
//	+'	    Open Charts Modal'
//	+'	</button>'
		
		+'</div>'
		+'</div>'
		+'<div class="row titlePart"  style="border-style: unset;padding:7px;">'
		+'<center><span >READINGS</span></center>'
		+'</div>'
		+'<div class="row conf" >'
		+'<table class="table table-bordered">'
		+' <thead>'
		+'</thead>'
		+'<tbody>'
		+' <tr>'
		+'   <td><label><b>TT1</b></label></td>'
		+'   <td><label id="tt1Value" class="PMCValue">20.00</label></td>'
		+'   <td><label class="PMCValue"><b><center>°C</center></b></label></td>'
		+'  </tr>'
		+'  <tr>'
		+'   <td><label><b>TT2</b></label></td>'
		+'   <td><label id="tt2Value" class="PMCValue">20.00</label></td>'
		+'   <td><label class="PMCValue"><b><center>°C</center></b></label></td>'
		+'  </tr>'
		+'  <tr>'
		+'   <td><label><b>TT3</b></label></td>'
		+'   <td><label id="tt3Value" class="PMCValue">20.00</label></td>'
		+'   <td><label class="PMCValue"><b><center>°C</center></b></label></td>'
		+'  </tr>'
		+'  <tr>'
		+'   <td><label><b>TT4</b></label></td>'
		+'   <td><label id="tt4Value" class="PMCValue">20.00</label></td>'
		+'   <td><label class="PMCValue"><b><center>°C</center></b></label></td>'
		+'  </tr>'
		+'  <tr>'
		+'   <td><label><b>TT5</b></label></td>'
		+'   <td><label id="tt5Value" class="PMCValue">20.00</label></td>'
		+'   <td><label class="PMCValue"><b><center>°C</center></b></label></td>'
		+'  </tr>'
		+'  <tr>'
		+'   <td><label><b>TT6</b></label></td>'
		+'   <td><label id="tt6Value" class="PMCValue">20.00</label></td>'
		+'   <td><label class="PMCValue"><b><center>°C</center></b></label></td>'
		+'  </tr>'
		+'  <tr>'
		+'   <td><label><b>TT7</b></label></td>'
		+'   <td><label id="tt7Value" class="PMCValue">20.00</label></td>'
		+'   <td><label class="PMCValue"><b><center>°C</center></b></label></td>'
		+'  </tr>'
		+'  <tr>'
		+'   <td><label><b>TT8</b></label></td>'
		+'   <td><label id="tt8Value" class="PMCValue">20.00</label></td>'
		+'   <td><label class="PMCValue"><b><center>°C</center></b></label></td>'
		+'  </tr>'
		+'  <tr>'
		+'   <td><label><b>PT1</b></label></td>'
		+'   <td><label id="pt1Value" class="PMCValue">20.00</label></td>'
		+'   <td><label class="PMCValue"><b>Bar</b></label></td>'
		+'  </tr>'
		+'  <tr>'
		+'   <td><label><b>PT2</b></label></td>'
		+'   <td><label id="pt2Value" class="PMCValue">20.00</label></td>'
		+'   <td><label class="PMCValue"><b>Bar</b></label></td>'
		+'  </tr>'
		+'</tbody>'
		+'</table>'

		+'</div>'
		
		+'<div class="col-sm-12">'
		+'<button type="button" class="btn btn-danger"  id="btnResult" style="margin-bottom:50px;width:100%" disabled>Result</button>'
		+'</div>'
		
		+'<div class="modal fade " id="datasheetModel">'
		+'<div class="modal-dialog modal-xl" >'
		+'<div class="modal-content">'
		+'<div class="modal-header">'
		+'<h4 class="modal-title"><center>Datasheet</center></h4>'
		+'<button type="button" class="close" data-dismiss="modal">&times;</button>'
		+'</div>'
		+'<div class="modal-body" id="datasheetBody">'
		+'</div>'
		+'<div class="modal-footer">'
//		+'<button type="button" class="btn btn-danger" data-dismiss="modal" >OK</button>'
		+'</div>'
		+'</div>'
		+'</div>'
		+'</div>'
		
		+'<div class="modal fade " id="modalTrends1">'
		+'<div class="modal-dialog modal-xl" >'
		+'<div class="modal-content">'
		+'<div class="modal-header">'
		+'<h4 class="modal-title"><center>Graph</center></h4>'
		+'<button type="button" class="close" data-dismiss="modal">&times;</button>'
		+'</div>'
		+'<div class="modal-body" id="trends1">'
		+'</div>'
		+'<div class="modal-footer">'
//		+'<button type="button" class="btn btn-danger" data-dismiss="modal" >OK</button>'
		+'</div>'
		+'</div>'
		+'</div>'
		+'</div>'
		
//		+'<div class="modal fade" id="chartsModal" tabindex="-1" aria-labelledby="chartsModalLabel" aria-hidden="true">'
//		+'  <div class="modal-dialog modal-lg">'
//		+'    <div class="modal-content">'
//		+'         <div class="modal-header">'
//		+'             <h5 class="modal-title" id="chartsModalLabel">Dynamic Charts</h5>'
//		+'             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>'
//		+'         </div>'
//		+'         <div class="modal-body" id="chartsContainer">'
//		+'             <!-- Chart containers will be added dynamically here -->'
//		+'         </div>'
//		+'     </div>'
//		+'  </div>'
//		+'</div>'

	$("#Selection").html(htm);
	$("#graph").click(function(){
		trendsCount++;
		$("#trends1").empty("");
		var htm=''
		
	for(var i=0;i<dataArr.length;i++){
		htm+='<div class="Container-fluid">'
//		htm+='<h4>Test Cycle - '+(i+1)
			var rowStr='RowDiv'+(i+1)
		  htm+="<div class='row' id='"+rowStr+"'>"
			
			var GraphData='sensorGraphCold'+i;
		    htm+="<div class='col-sm-12' id="+GraphData+">"
			+'</div>'	
		 
		//For Hot Readings
		
			var GraphData='sensorGraphHot'+i;
			var downloadGraphBtn='graphBtn'+i;
			htm+="<div class='col-sm-12' id="+GraphData+">"
			+'</div>'
			+"<div class='col-sm-12' id="+downloadGraphBtn+">"
			+'</div>'
			htm+='</div>'
		$("#trends1").append(htm);
			tempratureSensorGraphCold(dataArr[i],i);
		tempratureSensorGraphHot(dataArr[i],i);
		
	}	
	
		 
//	$(document).ready(function () {
//        $('#GraphDataButton'+(i+1)).on('click', function () {
//        	console.log("Clickiuyrotigjdfoigj");
//            html2canvas(document.querySelector('#RowDiv'+count)).then(canvas => {
//                var imgData = canvas.toDataURL("image/png");
//                $('#screenshotImg').attr('src', imgData);
//                $('#downloadBtn').show().off('click').on('click', function() {
//                    var a = document.createElement('a');
//                    a.href = imgData;
//                    a.download = 'screenshot.png';
//                    a.click();
//                });
//            });
//        });
//    });
		    
	});
	
//	$("#openModal").click(function() {
//		for(var i=0;i<dataArr.length;i++){
//			var htm='<div class="row">'
//				for(var j=0;j<dataArr[i].coldReading.length;j++){
//					htm+="<div class='col=sm-12' id='sensorGraph'>"
//				tempratureSensorGraph(dataArr[i],i,j);
//				htm+='</div>'
//				}
//			htm+='</div>'
//				
//			
//		}
//		$("#trends1").html(htm);
//		
//	});
	
	$("#datasheetBtn").on("click", function(){
		 datasheetCount++;
		Datasheet();
	});
	$('#download').on('click', function() {
		
//		$('#saveAsJpg').prop("hidden",true);
	    html2canvas(document.querySelector("#bodyTrends")).then(canvas => {
	        // Append the screenshot canvas to the body
	        document.body.appendChild(canvas);
	        $("canvas").css("display","none");
	        // Optionally save the screenshot as an image
	        var link = document.createElement('a');
	        link.download = 'FlowSensorGraph.png';
	        link.href = canvas.toDataURL();
	        link.click();
	    });
	});
	$("#btnResult").click(function(){
		resultJson.animationStart=startCount;
		resultJson.datasheet=datasheetCount;
		resultJson.trends=trendsCount;
//		console.log(resultJson);
		result();
	});
	animateTempSensor();
	
}
var dataArr = [];
function animateTempSensor(){

//var paper = Raphael("diagram", 1600, 700);
$("#diagram").empty();
var w = 1600;
var h = 700;
	
	if ($(window).width() < 500) {
		width = $(this).width();
		paper = new Raphael(document.getElementById('diagram'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	} else{
		paper = new Raphael(document.getElementById('diagram'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	}
	

	paper.clear();
	var x = 150, y = 40;
	var time = 1000;
	var txtColor = "#00cc88"; 
	var setupColor = "#abc";
	var coldColor = "#add8e6";
	var hotColor = "#ffbfbf";

	function platform(x, y){
		paper.rect((x),(y), 270, 5).attr({"stroke":"#000","stroke-width":5}) ;
		paper.path('M' + (x+50) + ' ' + (y+5) + 'l -10 10 l 20 0 z').attr({"fill": setupColor, "stroke":"#000","stroke-width":5});
		paper.path('M' + (x+220) + ' ' + (y+5) + 'l -10 10 l 20 0 z').attr({"fill": setupColor, "stroke":"#000","stroke-width":5});
	}
	
	var coldTank = paper.rect((x+400), (y+400), 230, 200, 5).attr({"fill":"#fff","stroke":"#000","stroke-width":4});
	paper.text((x+510), (y+485), "Refrigeration Chamber").attr({'font-size':12,'font-weight':'bold'});
	platform((x+380),(y+600));
	
	var hotTank = paper.rect((x+900), (y+400), 230, 200, 5).attr({"fill":"#fff","stroke":"#000","stroke-width":4});
	paper.text((x+1010), (y+485), "Heating Chamber").attr({'font-size':12,'font-weight':'bold'});
	platform((x+880),(y+600));

	
	function rectTextBoxes(x,y){
		paper.rect((x),(y),70,28,7).attr({"fill":"#000","stroke":"#9d9d9e","stroke-width":5});
	} 

	paper.rect((x-140),(y-10),250,350,5);
	
	paper.text((x - 50), (y +17), "Electricity Status : ").attr({ 'font-size': 17, 'font-weight': 'bold' });
	var eleOn = paper.image("images/green.png", (x + 45), (y), 40, 40);
	var eleOff = paper.image("images/red.png", (x +45), (y), 40, 40);
	
	paper.text((x - 50), (y +53), "Start up process : ").attr({ 'font-size': 17, 'font-weight': 'bold' });
	var stOn = paper.image("images/green.png", (x + 45), (y + 35), 40, 40);
	var stOff = paper.image("images/red.png", (x +45), (y + 35), 40, 40);
			
	paper.text((x - 50), (y +87), "Running Process : ").attr({ 'font-size': 17, 'font-weight': 'bold' });
	var rnOn = paper.image("images/green.png", (x + 45), (y + 70), 40, 40);
	var rnOff = paper.image("images/red.png", (x +45), (y + 70), 40, 40);
			
	paper.text((x - 50), (y +123), "Shutdown Process : ").attr({ 'font-size': 17, 'font-weight': 'bold' });
	var shOn = paper.image("images/green.png", (x + 45), (y + 105), 40, 40);
	var shOff = paper.image("images/red.png", (x +45), (y + 105), 40, 40);
	
	paper.rect((x-130),(y+142),230,185,5);
	paper.text((x-70), (y+155), "TT1").attr({'font-size':15,'font-weight':'bold'});		
	rectTextBoxes(x-105,y+170); 	
	var tt1Text = paper.text((x-70), (y+184), "000.00").attr({"font-size":18,"font-family":"digital-clock-font","fill":txtColor,"font-weight":"bold"});
	
	paper.text((x+40), (y+155), "TT2").attr({'font-size':15,'font-weight':'bold'});		
	rectTextBoxes(x+5,y+170); 	
	var tt2Text = paper.text((x+40), (y+184), "000.00").attr({"font-size":18,"font-family":"digital-clock-font","fill":txtColor,"font-weight":"bold"});
	
	paper.text((x-70), (y+215), "TT3").attr({'font-size':15,'font-weight':'bold'});		
	rectTextBoxes(x-105,y+230); 	
	var tt3Text = paper.text((x-70), (y+244), "000.00").attr({"font-size":18,"font-family":"digital-clock-font","fill":txtColor,"font-weight":"bold"});
	
	paper.text((x+40), (y+215), "TT4").attr({'font-size':15,'font-weight':'bold'});		
	rectTextBoxes(x+5,y+230); 	
	var tt4Text = paper.text((x+40), (y+244), "000.00").attr({"font-size":18,"font-family":"digital-clock-font","fill":txtColor,"font-weight":"bold"});
	
	paper.text((x-70), (y+275), "TT5").attr({'font-size':15,'font-weight':'bold'});		
	rectTextBoxes(x-105,y+290); 	
	var tt5Text = paper.text((x-70), (y+304), "000.00").attr({"font-size":18,"font-family":"digital-clock-font","fill":txtColor,"font-weight":"bold"});
	
	paper.text((x+40), (y+275), "TT6").attr({'font-size':15,'font-weight':'bold'});		
	rectTextBoxes(x+5,y+290); 	
	var tt6Text = paper.text((x+40), (y+304), "000.00").attr({"font-size":18,"font-family":"digital-clock-font","fill":txtColor,"font-weight":"bold"});
	

	var horizontalPlatForm1 = paper.rect((x+300),(y+110), 1030, 10).attr({"fill":"#cac9cf", "stroke":"#000","stroke-width":2});

	var piston = paper.image("images/piston.png", (x + 490), (y - 5), 50, 202);
	
	var sensorSet = paper.set();
	var sensorPlatformSet = paper.set();

	var cylinder = paper.image("images/cylinder.png", (x + 481), (y +50), 70, 202);
	
	var cpt100std = paper.image("images/pt100_bare.png", (x + 600), (y + 515), 15, 150).attr({'transform': 'r' + 90});
	var pt100bare = paper.image("images/pt100_bare.png", (x + 420), (y + 210), 15, 170).attr({'shadow':"#red"});
	var pt100sheath = paper.image("images/pt100_sheath.png", (x + 430), (y + 200), 30, 180);
	var pt100thermo = paper.image("images/pt100_thermo.png", (x + 455), (y +208), 35, 170);
	
	var hpt100std = paper.image("images/pt100_bare.png", (x + 1100), (y + 515), 15, 150).attr({'transform': 'r' + 90});
	var ktypebare = paper.image("images/pt100_bare.png", (x + 550), (y + 210), 15, 170);
	var ktypesheath = paper.image("images/pt100_sheath.png", (x + 560), (y + 200), 30, 180);
	var ktypethermo = paper.image("images/pt100_thermo.png", (x + 585), (y +208), 35, 170);
		
	var sensorPlate = paper.rect((x+410),(y+238), 210, 15,10).attr({"fill":"#cac9cf", "stroke":"#8d8c8f","stroke-width":2});
		
	var horizontalPlatForm2 = paper.rect((x+300),(y+125), 1030, 10).attr({"fill":"#cac9cf", "stroke":"#000","stroke-width":2});
//	paper.rect((x+380), (y+100), 20,40,8).attr({"fill":"#abc", "stroke":"#000","stroke-width":2,'transform': 'r' + 5});
//	paper.rect((x+580), (y+100), 20,40,8).attr({"fill":"#abc", "stroke":"#000","stroke-width":2,'transform': 'r' + 355});
	
//	paper.rect((x+450), (y+38), 180, 20,8).attr({"fill":"#abc", "stroke":"#000","stroke-width":2,'transform': 'r' + 232});
//	paper.rect((x+350), (y+38), 180, 20,8).attr({"fill":"#abc", "stroke":"#000","stroke-width":2,'transform': 'r' + 127});

	var platformHolder = paper.image("images/tempSensorHolderStand.png", (x + 388), (y -25), 254, 188);
	
	var refrig_pump = paper.image("images/refrig_pump.png", (x-20), (y +500), 154, 100).transform("s-1,1");
	var refPumpOn = paper.image("images/green.png", (x + 55), (y+534), 40, 40);
	var refPumpOff = paper.image("images/red.png", (x +55), (y+534), 40, 40);
	
	paper.image("images/pt.png", (x+140), (y +328), 70, 100);
	paper.text((x+125), (y+360), "PT1 (Bar)").attr({'font-size':15,'font-weight':'bold'});	
	rectTextBoxes(x+90,y+375); 	
	var pt1Text = paper.text((x+125), (y+389), "000.00").attr({"font-size":18,"font-family":"digital-clock-font","fill":txtColor,"font-weight":"bold"});
	
	paper.image("images/heaterSCR.png", (x+1118), (y +428), 130, 150);
	var heaterRect = paper.rect((x + 1129), (y + 438),58,128,10).attr({"fill":"#d1b0b0", "opacity": 1});
	
	paper.image("images/pt.png", (x+195), (y +428), 70, 100);
	paper.text((x+180), (y+460), "PT2 (Bar)").attr({'font-size':15,'font-weight':'bold'});	
	rectTextBoxes(x+145,y+475); 	
	var pt2Text = paper.text((x+180), (y+489), "000.00").attr({"font-size":18,"font-family":"digital-clock-font","fill":txtColor,"font-weight":"bold"});
	
	paper.path("M" + (x+114) + ' ' + (y+508) + 'l 0 -90 285 0').attr({"stroke":"#818080","stroke-width":15, "stroke-linejoin": "round"});
	paper.path("M" + (x+114) + ' ' + (y+508) + 'l 0 -90 288 0').attr({"stroke":"#cac9cf","stroke-width":12, "stroke-linejoin": "round"});
	
	paper.path("M" + (x+174) + ' ' + (y+590) + 'l 0 -70 l 227 0').attr({"stroke":"#818080","stroke-width":15, "stroke-linejoin": "round"});
	paper.path("M" + (x+174) + ' ' + (y+590) + 'l 0 -70 l 230 0').attr({"stroke":"#cac9cf","stroke-width":12, "stroke-linejoin": "round"});
	paper.text((x+172), (y+602), "Outlet").attr({'font-size':12,'font-weight':'bold'});
	
	
	var lbl1 = paper.text((x+422), (y+200), "TT1").attr({'font-size':11,'font-weight':'bold'});
	var lbl2 = paper.text((x+445), (y+192), "TT2").attr({'font-size':11,'font-weight':'bold'});
	var lbl3 = paper.text((x+472), (y+200), "TT3").attr({'font-size':11,'font-weight':'bold'});
	var lbl4 = paper.text((x+554), (y+200), "TT4").attr({'font-size':11,'font-weight':'bold'});
	var lbl5 = paper.text((x+575), (y+192), "TT5").attr({'font-size':11,'font-weight':'bold'});
	var lbl6 = paper.text((x+603), (y+200), "TT6").attr({'font-size':11,'font-weight':'bold'});
	
	var lbl7 = paper.text((x+700), (y+590), "TT7").attr({'font-size':11,'font-weight':'bold'});
	rectTextBoxes(x+670,y+605); 	
	var tt7Text = paper.text((x+705), (y+619), "000.00").attr({"font-size":18,"font-family":"digital-clock-font","fill":txtColor,"font-weight":"bold"});
	
	var lbl8 = paper.text((x+1200), (y+590), "TT8").attr({'font-size':11,'font-weight':'bold'});
	rectTextBoxes(x+1170,y+605); 	
	var tt8Text = paper.text((x+1205), (y+619), "000.00").attr({"font-size":18,"font-family":"digital-clock-font","fill":txtColor,"font-weight":"bold"});
	
	paper.rect((x+660),(y+390),200,75,5);
	paper.text((x + 670), (y +410), "Refrigerator").attr({ 'font-size': 14, 'font-weight': 'bold','text-anchor': 'start' });
	var refOn = paper.image("images/green.png", (x + 690), (y+420), 40, 40);
	var refOff = paper.image("images/red.png", (x +690), (y+420), 40, 40);

	paper.text((x + 797), (y +410), "Heater").attr({ 'font-size': 14, 'font-weight': 'bold','text-anchor': 'start' });
	var heaterOn = paper.image("images/green.png", (x + 800), (y+420), 40, 40);
	var heaterOff = paper.image("images/red.png", (x +800), (y+420), 40, 40);
	
	paper.rect((x+660),(y+480),200,95,5);
	paper.text((x + 710), (y +500), "Lid Position").attr({ 'font-size': 18, 'font-weight': 'bold','text-anchor': 'start' });
	paper.text((x + 700), (y +520), "Up").attr({ 'font-size': 14, 'font-weight': 'bold','text-anchor': 'start' });
	var lidUpOn = paper.image("images/green.png", (x + 690), (y+530), 40, 40);
	var lidUpOff = paper.image("images/red.png", (x +690), (y+530), 40, 40);
	
	paper.text((x + 797), (y +520), "Down").attr({ 'font-size': 14, 'font-weight': 'bold','text-anchor': 'start' });
	var lidDownOn = paper.image("images/green.png", (x + 800), (y+530), 40, 40);
	var lidDownOff = paper.image("images/red.png", (x +800), (y+530), 40, 40);
	
	
	sensorSet.push(cylinder,pt100bare, pt100sheath, pt100thermo,ktypebare, ktypesheath, ktypethermo,sensorPlate, lbl1, lbl2, lbl3, lbl4, lbl5, lbl6);
	sensorPlatformSet.push(cylinder,pt100bare, pt100sheath, pt100thermo,ktypebare, ktypesheath, ktypethermo,sensorPlate,piston,platformHolder, lbl1, lbl2, lbl3, lbl4, lbl5, lbl6);
		
	
//	sensorPlatformSet.animate({ transform: "T500,0" }, time*5, "ease-in-out");
	
	function sideVerticalBlock(x, y){
		paper.rect((x-50),(y+468), 150, 50, 5).attr({"fill":setupColor, "stroke":"#656d74","stroke-width":3});
		paper.rect((x),(y), 50, 470, 5).attr({"fill":setupColor, "stroke":"#656d74","stroke-width":3});
	}

	sideVerticalBlock(x+250, y+100);
	sideVerticalBlock(x+1330, y+100);

	
	
	setTimeout(function() {
		eleOn.toFront();
		lidUpOn.toFront();
		stOn.toFront();
		tt1Text.attr("text", "20.00");
		tt2Text.attr("text", "20.00");
		tt3Text.attr("text", "20.00");
		tt4Text.attr("text", "20.00");
		tt5Text.attr("text", "20.00");
		tt6Text.attr("text", "20.00");
		tt7Text.attr("text", "20.00");
		tt8Text.attr("text", "20.00");
		
		$("#tt1Value").text("20.00");
		$("#tt2Value").text("20.00");
		$("#tt3Value").text("20.00");
		$("#tt4Value").text("20.00");
		$("#tt5Value").text("20.00");
		$("#tt6Value").text("20.00");
		$("#tt7Value").text("20.00");
		$("#tt8Value").text("20.00");
		$("#pt1Value").text("0.00");
		$("#pt2Value").text("0.00");
		
		$("#startBtn").prop("disabled", false);
		
	}, 2000);
	
	let activeTimeouts = [];
	
	
	$("#startBtn").on("click", function () {
		startCount++;
		a = [];
		data = {};
		$("#startBtn,#btnResult").prop("disabled", true);
		$("#datasheetBtn").prop("disabled", true);
		$("#graph").prop("disabled", true);
		sensorSet.animate({ transform: "T0,85"}, time*4, "ease-in-out");
		stOff.toFront();
		rnOn.toFront();
		refOn.toFront();
		lidUpOff.toFront();
		lidDownOn.toFront();
		refPumpOn.toFront();
		pt1Text.attr("text","0.2");
		pt2Text.attr("text","0.1");
		
		activeTimeouts.push(setTimeout(() => {
			coldTank.animate({"fill":coldColor},time*7);
			coldValueIterator();
		},time*5));
		
		function evaluate(v, ve, max, min){
				v = v - 5; 
				ve = diff = Math.random() * (max - min) + min;
				perv = (5/100)*ve;
				randomSign = Math.random() < 0.5 ? -1 : 1;
				perv = randomSign * perv;
				return v + perv;
		}
		
		
		
//		function clearAllTimeouts() {
//		    // Clear all timeouts from the array
//		    activeTimeouts.forEach((timeout) => clearTimeout(timeout));
//		    activeTimeouts = []; // Reset the array
//		}

		function roomTempCounter(temp){
			if(temp == "cold"){
				for(var n = 0; n < 12; n++){
					activeTimeouts.push(setTimeout(() =>{
						var tmp = parseFloat(tt7Text.attr("text")) + 5;
						tt7Text.attr("text", tmp + '.00');
						$("#tt7Value").text(tmp+ '.00');
					}, n*700))
				}
			}else if(temp =="hot"){
				for(var n = 0; n < 39; n++){
					activeTimeouts.push(setTimeout(() =>{
						var tmp = parseFloat(tt8Text.attr("text")) - 20;
						tt8Text.attr("text", tmp+ '.00');
						$("#tt8Value").text(tmp+ '.00');
					}, n*500))
				}
			}
		}
			
		function coldValueIterator(){
				
			var ptb = 20, pts = 20, ptt = 20, kb = 20, ks = 20, kt = 20, pstd = 20, cnt = 0;
			var ptbe = 0, ptse = 0, ptte = 0, kbe = 0, kse = 0, kte=0;
				
			let ptbmin = 0.25;
			let ptbmax = 2;
					
			let ptsmin = 0;
			let ptsmax = 4;
					
			let pttmin = 0;
			let pttmax = 1;
					
			let kbmin = 0;
			let kbmax = 2;
				
			let ksmin = 0;
			let ksmax = 0.5;
			
			let ktmin = 0;
			let ktmax = 3;
			
			dataAr = [];
			
			for(i = 0 ; i < 12 ; i++){
				
				 activeTimeouts.push(setTimeout(() => {
					round = {};
					pstd = pstd - 5;
					cnt = cnt + 5;
					
					ptb = evaluate(ptb, ptbe, ptbmax, ptbmin);				
					pts = evaluate(pts, ptse, ptsmax, ptsmin);				
					ptt = evaluate(ptt, ptte, pttmax, pttmin);				 
					kb = evaluate(kb, kbe, kbmax, kbmin);				 
					ks = evaluate(ks, kse, ksmax, ksmin);
					kt = evaluate(kt, kte, ktmax, ktmin);
					
					tt1Text.attr('text',ptb.toFixed(2));
					tt2Text.attr('text',pts.toFixed(2));
					tt3Text.attr('text',ptt.toFixed(2));
					tt4Text.attr('text',kb.toFixed(2));
					tt5Text.attr('text',ks.toFixed(2));
					tt6Text.attr('text',kt.toFixed(2));
					tt7Text.attr('text',pstd.toFixed(2));
								
					$("#tt1Value").text(ptb.toFixed(2));
					$("#tt2Value").text(pts.toFixed(2));
					$("#tt3Value").text(ptt.toFixed(2));
					$("#tt4Value").text(kb.toFixed(2));
					$("#tt5Value").text(ks.toFixed(2));
					$("#tt6Value").text(kt.toFixed(2));
					$("#tt7Value").text(pstd.toFixed(2));
					$("#tt8Value").text("20.00");
					$("#pt1Value").text("0.2");
					$("#pt2Value").text("0.1");
					
					
					round.tt1 = ptb.toFixed(2);
					round.tt2 = pts.toFixed(2);
					round.tt3 = ptt.toFixed(2);
					round.tt4 = kb.toFixed(2);
					round.tt5 = ks.toFixed(2);
					round.tt6 = kt.toFixed(2);
					round.tt7 = pstd.toFixed(2);
					
					dataAr.push(round);
					/* $("#turbineVal1").text(tv.toFixed(2));
					$("#venturiVal1").text(vv.toFixed(2));
					$("#eleMagneticVal1").text(mv.toFixed(2));
					$("#pitotVal1").text(pv.toFixed(2));
					$("#ultrasonicVal1").text(uv.toFixed(2));
					$("#or ificeVal1").text(ov.toFixed(2));*/
							
					if(cnt >= 60){ 
						data.coldReading = dataAr;
						activeTimeouts.push(setTimeout(() =>{
							refPumpOff.toFront();
							lidDownOff.toFront();
							lidUpOn.toFront();
							refOff.toFront();
							pt1Text.attr("text", "000.00");
							pt2Text.attr("text", "000.00");
							coldTank.animate({"fill":"#fff"},time*10);
//							tt7Text.attr("text", "20.00");		
							tt1Text.attr("text", "20.00");
							tt2Text.attr("text", "20.00");
							tt3Text.attr("text", "20.00");
							tt4Text.attr("text", "20.00");
							tt5Text.attr("text", "20.00");
							tt6Text.attr("text", "20.00");
							
							
							$("#tt1Value").text("20.00");
							$("#tt2Value").text("20.00");
							$("#tt3Value").text("20.00");
							$("#tt4Value").text("20.00");
							$("#tt5Value").text("20.00");
							$("#tt6Value").text("20.00");
//							$("#tt7Value").text("20.00");
//							$("#tt8Value").text("20.00");
							$("#pt1Value").text("0.00");
							$("#pt2Value").text("0.00");	
							
							roomTempCounter("cold");				
							sensorSet.animate({ transform: "T0,0"}, time*4, function(){
								
								activeTimeouts.push(setTimeout(() =>{
								sensorPlatformSet.animate({ transform: "T500,0" }, time*10, function(){
									activeTimeouts.push(setTimeout(() =>{
									sensorSet.animate({ transform: "T500,85"}, time*4, function(){
										lidUpOff.toFront();
										heaterOn.toFront();
										lidDownOn.toFront();
										activeTimeouts.push(setTimeout(() =>{
											heaterRect.animate({"opacity": 0 }, 15000);
											hotTank.animate({"fill":hotColor},time*38);
											hotValueIterator();
										}, 3000));
									});
									}, 5000));
								});	
								}, 5000));							
							});
						}, 5000));
						
					}
					
				}, i*(time*1.2)));
			}
			
			
		}
		
		function evaluate1(v, ve, max, min){
				v = v + 20; 
				ve = diff = Math.random() * (max - min) + min;
				perv = (20/100)*ve;
				randomSign = Math.random() < 0.5 ? -1 : 1;
				perv = randomSign * perv;
				return v + perv;
		}	
		
		function hotValueIterator(){
			
			var ptb = 20, pts = 20, ptt = 20, kb = 20, ks = 20, kt = 20, pstd = 20;
			var ptbe = 0, ptse = 0, ptte = 0, kbe = 0, kse = 0, kte=0;
			
			let ptbmin = 0.25;
			let ptbmax = 2;
				
			let ptsmin = 0;
			let ptsmax = 4;
				
			let pttmin = 0;
			let pttmax = 1;
				
			let kbmin = 0;
			let kbmax = 2;
				
			let ksmin = 0;
			let ksmax = 0.5;
			
			let ktmin = 0;
			let ktmax = 3;
			
			dataAr = [];
			
			for(i = 0 ; i < 39 ; i++){
				
				 activeTimeouts.push(setTimeout(() => {
					 round = {};
					pstd = pstd + 20;
					
					ptb = evaluate1(ptb, ptbe, ptbmax, ptbmin);				
					pts = evaluate1(pts, ptse, ptsmax, ptsmin);				
					ptt = evaluate1(ptt, ptte, pttmax, pttmin);				 
					kb = evaluate1(kb, kbe, kbmax, kbmin);				 
					ks = evaluate1(ks, kse, ksmax, ksmin);
					kt = evaluate1(kt, kte, ktmax, ktmin);
					
					tt1Text.attr('text',ptb.toFixed(2));
					tt2Text.attr('text',pts.toFixed(2));
					tt3Text.attr('text',ptt.toFixed(2));
					tt4Text.attr('text',kb.toFixed(2));
					tt5Text.attr('text',ks.toFixed(2));
					tt6Text.attr('text',kt.toFixed(2));
					tt8Text.attr('text',pstd.toFixed(2));
								
					$("#tt1Value").text(ptb.toFixed(2));
					$("#tt2Value").text(pts.toFixed(2));
					$("#tt3Value").text(ptt.toFixed(2));
					$("#tt4Value").text(kb.toFixed(2));
					$("#tt5Value").text(ks.toFixed(2));
					$("#tt6Value").text(kt.toFixed(2));
					$("#tt7Value").text("20.00");
					$("#tt8Value").text(pstd.toFixed(2));
					$("#pt1Value").text("0.2");
					$("#pt2Value").text("0.1");
					
					round.tt1 = ptb.toFixed(2);
					round.tt2 = pts.toFixed(2);
					round.tt3 = ptt.toFixed(2);
					round.tt4 = kb.toFixed(2);
					round.tt5 = ks.toFixed(2);
					round.tt6 = kt.toFixed(2);
					round.tt8 = pstd.toFixed(2);
					
					dataAr.push(round);
					
					if(pstd >= 800){
						data.hotReading = dataAr;
						lidUpOn.toFront();
						lidDownOff.toFront();
						heaterOff.toFront();
						rnOff.toFront();
						shOn.toFront();
						roomTempCounter("hot");
						heaterRect.animate({"opacity": 1 }, 15000);
						hotTank.animate({"fill":"#fff"}, 15000, 
						activeTimeouts.push(setTimeout(() =>{
							shOff.toFront();
							sensorPlatformSet.animate({ transform: "T0,0" }, time*10);
							tt1Text.attr("text", "20.00");
							tt2Text.attr("text", "20.00");
							tt3Text.attr("text", "20.00");
							tt4Text.attr("text", "20.00");
							tt5Text.attr("text", "20.00");
							tt6Text.attr("text", "20.00");
//							tt8Text.attr("text", "20.00");
					
												
							$("#tt1Value").text("20.00");
							$("#tt2Value").text("20.00");
							$("#tt3Value").text("20.00");
							$("#tt4Value").text("20.00");
							$("#tt5Value").text("20.00");
							$("#tt6Value").text("20.00");
//							$("#tt7Value").text("20.00");
//							$("#tt8Value").text("20.00");
							$("#pt1Value").text("0.00");
							$("#pt2Value").text("0.00");
							activeTimeouts.push(setTimeout(() =>{
								$("#datasheetBtn,#graph,#startBtn,#btnResult").prop("disabled", false);
							}, 3000));
						}, 16000)));
						sensorSet.animate({ transform: "T500,0"}, time*4);
						dataArr.push(data);
						console.log(dataArr);
					}
			}, i*(time*1.2))); 
				
			}
		}
		
	})
	
}