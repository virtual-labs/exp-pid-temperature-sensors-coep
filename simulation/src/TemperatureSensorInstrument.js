var InstrMasterJson = {};


function TemperatureSensorInstrument()
{
	
	var StdCompInstruCount=14;
	var StdPICount=2;
	var StdPLCCount=1;
	var StdAFRCount=1;
	var StdTrasmitterCount=7;
	var StdSCRCount=1;
	var StdPSCount=1;
	var StdTSCount=1;

	var perPICount;
	var perPLCCount;
	var perAFRCount;
	var perTrasmitterCount;
	var perSCRCount;
	var perPSCount;
	var perTSCount;
	
	var pi;
	var afr;
	var plc;
	var scr;
	var ps;
	var ts;
	var trasmiiter;
	
	$("#Header").html("	<center><span >TEMPERATURE SENSOR - INSTRUMENT DIAGRAM</span></center>");
	$("#Selection").css({"overflow": "auto","height":" 837px"});
	htm=''
		+'<div class="row titlePart" style="    border-style: unset;">'
		+'<center><span >CONFIGURATION</span></center>'
		+'</div>'
	
     	+'<div class="row conf" >'
		
		
		
		+'<div class="col-sm-12">'
		+'<label><b>Select no of pressure indicator (PI)</b></label>'
		+' <input class="form-select" id="pi" type="number" min="0" max="5" value="0" tabindex="1"></input>'
		+'</div>'
		
		+'<div class="col-sm-12">'
		+'<label><b>Select no of  air filter regulator (AFR)</b></label>'
		+' <input class="form-select" id="afr" type="number" min="0" max="5" value="0" tabindex="2"></input>'
		+'</div>'
		
		+'<div class="col-sm-12">'
		+'<label><b>Select no of programmable logic controller (PLC)</b></label>'
		+' <input class="form-select" id="plc" type="number" min="0" max="5" value="0" tabindex="3"></input>'
		+'</div>'
		+'<div class="col-sm-12">'
		+'<label><b>Select no of silicon-controlled rectifier (SCR)</b></label>'
		+' <input class="form-select" id="scr"  type="number" min="0" max="6" value="0" tabindex="4"></input>'
		+'</div>'
		+'<div class="col-sm-12">'
		+'<label><b>Select no of transmitter </b></label>'
		+' <input class="form-select" id="transmitter"  type="number" min="0" max="7" value="0" tabindex="5" ></input>'
		+'</div>'
		+'<div class="col-sm-12">'
		+'<label><b>Select no of Pressure Sensor (PS)</b></label>'
		+' <input class="form-select" id="ps" type="number" min="0" max="5" value="0" tabindex="6"></input>'
		+'</div>'
		+'<div class="col-sm-12">'
		+'<label><b>Select no of temperature Sensor (TS)</b></label>'
		+' <input class="form-select" id="ts" type="number" min="0" max="5" value="0" tabindex="7"></input>'
		+'</div>'
		
		+'<div class="col-sm-12">'
		+'<button type="button" class="btn btn-danger"  id="verifyInstr" style="margin-top:10px;width:100%" data-toggle="modal" data-target="#myModal1" tabindex="8">Verify Instrument </button>'
		
//		+'	  <!-- The Modal -->'
		+'  <div class="modal fade " id="myModal1">'
		+'    <div class="modal-dialog " id="modelDialog1">'
		+'	      <div class="modal-content">'
//		+'	        <!-- Modal Header -->'
		+'	        <div class="modal-header">'
		+'	          <h4 class="modal-title"><center id="modelTitle1"></center></h4>'
		+'	          <button type="button" class="close" data-dismiss="modal">&times;</button>'
		+'	        </div>'
//		+'	        <!-- Modal body -->'
		+'	        <div class="modal-body" id="modelBody1">'
		
		+'	        </div>'
//		+'	        <!-- Modal footer -->'
		+'	        <div class="modal-footer">'
		+'	          <button type="button" class="btn btn-danger" data-dismiss="modal" >Ok</button>'
		+'	        </div>'
		+'	      </div>'
		+'	    </div>'
		+'	  </div>'
//		+'	  <!-- End Modal -->'
		+'</div>'
		+'<div class="col-sm-12">'
		+'<button type="button" class="btn btn-danger"  id="nextLevel2" style="margin-top:10px;margin-bottom:10px;width:100%" tabindex="9" hidden>Next level</button>'
		+'</div>'
		
		+'</div>'
		
	$("#Selection").html(htm);
	
       var temp=0;
	 var totalComp1=0;
	   var flag=0;
	$("#verifyInstr").click(function(){
		
		 pi=parseInt($("#pi").val());
		 plc=parseInt($("#plc").val());
		 afr=parseInt($("#afr").val());
		 ts=parseInt($("#ts").val());
		 ps=parseInt($("#ps").val());
		 scr=parseInt($("#scr").val());
		 transmitter=parseInt($("#transmitter").val());
		 console.log(" pi "+pi);
		  console.log(" plc "+plc);
		  console.log(" afr "+afr);
		  console.log(" ts "+ts);
		  console.log(" ps "+ps);
		  console.log(" scr "+scr);
		  console.log(" transmitter "+transmitter);
		 CountComp1();
		 
		  
		 
		  if(totalComp1==0 ||(pi==""||plc==""||afr==""||ts==""||ps==""||scr==""||transmitter=="")){
				$("#modelDialog1").addClass("modal-md");
				$("#modelTitle1").html("Error box");
				  $("#modelBody1").html("<b>Select Components</b> ");
				  $("#modelBody1").css("color","red");
		  }
		  else{
			  if(temp<3){
				  CountComp1();
			  }else {
				  if(flag==0){
					  $("#modelDialog1").addClass("modal-xl");
					  $("#modelTitle1").html("Required configuration ");
						htm=''
					  
						+'<div class="col-sm-12" >'
						+'<center>REQUIRED COMPONENTS</center>'
						+'</div>'
					  +'<div class="col-sm-12" >'
						+'<table class="table table-striped table-bordered">'
						+' <tbody>'
						+'    <tr class="table-dark text-dark">'
						+'     <td><center>PI</center></td>'
						+'     <td><center>AFR</center></td>'
						+'     <td><center>PLC</center></td>'
						+'     <td><center>SCR</center></td>'
						+'     <td><center>Transmitter</center></td>'
						+'     <td><center>PS</center></td>'
						+'     <td><center>TS</center></td>'
						
						+'   </tr>'
						+'    <tr>'
						+'     <td><center>2</center></td>'
						+'     <td><center>1</center></td>'
						+'     <td><center>1</center></td>'
						+'     <td><center>1</center></td>'
						+'     <td><center>7</center></td>'
						+'     <td><center>1</center></td>'
						+'     <td><center>1</center></td>'
						+'   </tr>'
					    +' </tbody>'
						+'</table>'
						+'</div>'
						+"<img src='images/Temp_instru_1.png' class='img-fluid' style='border-style: double;border-color: black;'>"
						 $("#modelBody1").html(htm);
						  $("#modelBody1").css("color","red"); 
				  }
				  else
					  {
					  CountComp1();
					  }
				
			  }
			  temp++;
		  }
	
	});
		  
	function CountComp1(){
	
		if((pi==StdPICount) && (plc==StdPLCCount) && (afr==StdAFRCount) && (scr==StdSCRCount) && (transmitter==StdTrasmitterCount) && (ps==StdPSCount)&&(ts==StdTSCount) ){
			$("#modelDialog1").removeClass("modal-xl");
			 $("#modelDialog1").addClass("modal-md");
			 $("#modelTitle1").html("Message box");
			 $("#modelBody1").html("<b>Click on 'Next level' button.</b>");
			$("#modelBody1").css("color","green");
			$("#pi,#ts,#ps,#afr,#plc,#transmitter,#scr,#verifyInstr").prop("disabled",true);
			addToMasterJson();
		
			flag=1;
			htm=''
				
				+'<div class="col-sm-12" >'
				+"<img src='images/Temp_instru_1.png' class='img-fluid' id='partB1' style=' width: 100px;height:100px;position: relative; margin: 20px;'  >"
				+'</div>'
			  $("#diagram").html(htm);
			  $("#partB1").animate(
			          {
			            width: "900px",
			            height: "700px",
			            left: "+=50px",
			          },
			          1000,
			          
			        );
				$("#nextLevel2").prop("hidden",false);
		}
		else{
			
			
			
			perPLCCount=parseFloat((plc*100)/StdPLCCount);
			perAFRCount=parseFloat((afr*100)/StdAFRCount);
			perPICount=parseFloat((pi*100)/StdPICount);
			perTrasmitterCount=parseFloat((transmitter*100)/StdTrasmitterCount);
			perPSCount=parseFloat((ps*100)/StdPSCount);
			perTSCount=parseFloat((ts*100)/StdTSCount);
			perSCRCount=parseFloat((scr*100)/StdSCRCount);
			
			 console.log(" perPLCCount "+perPLCCount);
			 console.log(" perAFRCount "+perAFRCount);
			 console.log(" perPICount "+perPICount);
			 console.log(" perTrasmitterCount "+perTrasmitterCount);
			 console.log(" perPSCount "+perPSCount);
			 console.log(" perTSCount "+perTSCount);
			 console.log(" perSCRCount "+perSCRCount);
			 
				totalComp1=perPLCCount+perAFRCount+perPICount+StdTrasmitterCount+perPSCount+perTSCount+perSCRCount;
			  avg=parseInt(totalComp1/7);
			  console.log(" avg "+avg);
			
				 $("#modelDialog1").removeClass("modal-xl");
				$("#modelDialog1").addClass("modal-md");
		
				if((StdPICount<pi)||(StdPLCCount<plc)||(StdAFRCount<afr)||(StdTrasmitterCount<transmitter)||(StdSCRCount<scr)||(StdPSCount<ps)||(StdTSCount<ts)){
					
					$("#modelBody1").css("color","red"); 
					$("#modelTitle1").html("Error box");
					$("#modelBody1").html("<b>More components than expected.</b>");
				}else
					{
						if(avg<100){
							$("#modelTitle1").html("Message box");
							$("#modelBody1").css("color","red");
							 $("#modelBody1").html("<b>"+avg+" % Correctness</b>");
								
						}else{
							$("#modelBody1").css("color","red");
							$("#modelTitle1").html("Error box");
							 $("#modelBody1").html("<b>More components than expected. </b>");
						}
					}
				
		}
		
	}
	function addToMasterJson()
	{
		tempMasterJsonInstr = {
				"totalComp":"14",
				"Transmitter":"7",
				"PLC":"1",
				"AFR":"1",
				"SCR":"1",
				"PI":"2",
				"PS":"1",
				"TS":"1",
				
				};
				
		InstrMasterJson.Instrument=tempMasterJsonInstr;
		console.log(InstrMasterJson);
	}
	$("#nextLevel2").click(function(){
		if(flag==1){
			TempratureSensorSquActivities();
		}
	
	});
	
	
	
}

