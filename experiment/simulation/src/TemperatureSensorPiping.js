ComponentMasterJson = {};
timerMasterJson = {};
resultJson={};

function TemperatureSensorPiping()
{var StdCompInstruCount=6;
var StdChamberCount=2;
var StdHeaterCount=1;
var StdPistonCount=1;
var StdPumpCount=1;
var StdChillerCount=1;

var perChamberCount;
var perHeaterCount;
var perPistonCount;
var perPumpCount;
var perChillerCount;
//var perWTCount=1;

var chamber;
var heater;
var piston;
var pump;
var chiller;
var pipingActualCount=0;

//var wt;
	$("#Header").html("	<center><span>TEMPERATURE SENSOR - PIPING DIAGRAM</span></center>");
	htm=''
		+'<div class="row titlePart"  style="border-style: unset;padding:7px;">'
		+'<center><span >CONFIGURATION</span></center>'
		+'</div>'
	
     	+'<div class="row conf" >'
	
		+'<div class="col-sm-12">'
		+'<label><b>Select no of chamber</b></label>'
		+' <input class="form-select" id="chamber" type="number" min="0" max="5" value="0" tabindex="1" ></input>'
		+'</div>'
		
		+'<div class="col-sm-12">'
		+'<label><b>Select no of heater</b></label>'
		+' <input class="form-select" id="heater" type="number" min="0" max="5" value="0" tabindex="2" ></input>'
		+'</div>'
		
	
		+'<div class="col-sm-12">'
		+'<label><b>Select no of piston</b></label>'
		+' <input class="form-select" id="piston"  type="number" min="0" max="5" value="0" tabindex="3" ></input>'
		+'</div>'
		+'<div class="col-sm-12">'
		+'<label><b>Select no of pump</b></label>'
		+' <input class="form-select" id="pump"  type="number" min="0" max="5" value="0" tabindex="4" ></input>'
		+'</div>'
		+'<div class="col-sm-12">'
		+'<label><b>Select no of chiller</b></label>'
		+' <input class="form-select" id="chiller"  type="number" min="0" max="5" value="0" tabindex="5" ></input>'
		+'</div>'
		
		+'<div class="col-sm-12">'
		+'<label><b>Utilities</b></label>'
		+'<select class="form-select" id="Utilities" multiple="multiple" tabindex="6">'
		+'  <option value="Water">Water</option>'
		+'  <option value="Air">Air</option>'
		+'  <option value="Steam">Steam </option>'
		+'  <option value="Electricity">Electricity</option>'
		+'  <option value="Sterile_Water">Sterile Water </option>'
		+'  <option value="Heating_Ventilation_Air_Conditioning(HVAC)"> Heating Ventilation Air Conditioning(HVAC)</option>'
		+'  <option value="CCTV_Surveillance">CCTV - Surveillance</option>'
		+'  <option value="Access_Control"> Access Control</option>'
		
	
		+'</select>'
		+'</div>'
		
		+'<div class="col-sm-12">'
		+'<button type="button" class="btn btn-danger"  id="verifyComponents" style="margin-top:10px;margin-bottom:10px;width:100%" data-toggle="modal" data-target="#myModal" tabindex="7">Verify Components </button>'
		
//		+'	  <!-- The Modal -->'
		+'  <div class="modal fade " id="myModal">'
		+'    <div class="modal-dialog " id="modelDialog">'
		+'	      <div class="modal-content">'
//		+'	        <!-- Modal Header -->'
		+'	        <div class="modal-header">'
		+'	          <h4 class="modal-title"><center id="modelTitle"></center></h4>'
		+'	          <button type="button" class="close" data-dismiss="modal">&times;</button>'
		+'	        </div>'
//		+'	        <!-- Modal body -->'
		+'	        <div class="modal-body" id="modelBody">'
		
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
		+'<button type="button" class="btn btn-danger"  id="nextLevel1" style="margin-top:10px;margin-bottom:10px;width:100%" tabindex="8" hidden>Next Level</button>'
		+'</div>'
		
		+'</div>'
	$("#Selection").html(htm);
	htm=''
		+'<div class="row" >'
		+'<div class="container main-container">'
		+' <h5 class="text-center" style="color: #f8f9fa;background-color: #343a40;padding-bottom:10px;padding-top:10px">PROBLEM STATEMENT</h5>'
		+'<ul class="nav nav-tabs" id="tabMenu" role="tablist">'
		+'  <li class="nav-item">'
		+'    <button class="nav-link active" id="customer-tab1" data-bs-toggle="tab" data-bs-target="#customer1" type="button" role="tab" aria-controls="customer1" aria-selected="true">Customer Requirements</button>'
		+'  </li>'
		+'  <li class="nav-item">'
		+'    <button class="nav-link" id="operation-tab1" data-bs-toggle="tab" data-bs-target="#operation1" type="button" role="tab" aria-controls="operation1" aria-selected="true">Operational Requirements</button>'
		+'  </li>'
		+' </ul>'
		+' <div class="tab-content mt-3" id="tabContent">'
//		+'   <!-- Customer Requirements -->'
		+'<div class="tab-pane fade show active" id="customer1" role="tabpanel" aria-labelledby="customer-tab1">'
//		+'    <h2 class="tab-title">Customer Requirements</h2>'
		+'<b style="font-size:18px;">Customer Requirements: (Design and development of Temperature sensor calibration facility)</b><br>'
		+'   <p style="    font-size: 18px;">The customer intends to set-up a temperature calibration facility which will test temperature sensors of following types as '
		+'   minimum requirement. For all the sensors the process connection will be either ½” NPT F) OR flange based. The temperature range will be from -40°C to 800°C.</p>'
		+'<br>'
		+'    <ul class="list-group">'
		+'     <li class="list-group-item">1. RTD with and without thermowell</li>'
		+'     <li class="list-group-item">2. Thermocouple with and without thermowell</li>'
		+'     <li class="list-group-item">3. Thermister</li>'
		+'     <li class="list-group-item">4. Thermostat</li>'
		+'     <li class="list-group-item">5. Filled in thermometer (Gas, Liquid and Metal filled)</li>'
		+'     <li class="list-group-item">6. Semiconductor based IC sensors AND </li>'
		+'     <li class="list-group-item">7. provision for any other type of temperature sensor which fits in this category</li>'
		+'   </ul>'
		+' </div>'
		
//		+' <!-- Operational Requirements -->'
		+'  <div class="tab-pane fade" id="operation1" role="tabpanel" aria-labelledby="operation-tab1">'
//		+'   <h2 class="tab-title">Operational Requirements</h2>'
		+'   <ul class="list-group">'
		+'     <li class="list-group-item">1.	Minimum energy is to be used for testing of the sensors</li>'
		+'     <li class="list-group-item">2.	The entire process of characterizing of sensor must be fully automated</li>'
		+'     <li class="list-group-item">3.	In case of power failure the set-up should continue from the current reading</li>'
		+'     <li class="list-group-item">4.	A provision must be made to reduce the heating/cooling turbulence</li>'
		+'     <li class="list-group-item">5.	Multi point characterizing (Calibration) must be provide, the points will be selected by the customer</li>'
		+'     <li class="list-group-item">6.	The set-up should test three sensors (minimum) at a time</li>'
		+'     <li class="list-group-item">7.	The duration of the test should not be more than 90 minutes in view of all the characteristics</li>'
		+'     <li class="list-group-item">8.	For dynamic characteristics a provision should be made as per demand</li>'
		+'     <li class="list-group-item">9.	The provision is to be made to acquire health of the plant before starting any test</li>'
		+'     <li class="list-group-item">10.	The entire analysis and report should be made automatically with validation of data, removing outliers, and having audit trail so as to secure the data.</li>'
		+'     <li class="list-group-item">11.	test reports need to be stored for minimum one year </li>'
		+'     <li class="list-group-item">12.	The visualization tool to be deployed for the operators</li>'
		+'     <li class="list-group-item">13.	Role based reporting structure and dash boards to be implemented using open source software </li>'
		+'     <li class="list-group-item">14.	The minimum level financial sustainability of the set up is to be ensured and reported as pointers of efficiency</li>'
		+'     <li class="list-group-item">15.	The alarms and events are to be generated for critical parameters and to be shared based on role.</li>'


		+'   </ul>'
		+'   </div>'
	+' </div>'
	    +' </div>'
		+'</div>'
		$("#diagram").html(htm);
       var temp=0;
	  
	   var totalComp;
	   var flag=0;
	   var  selectedValues;
	   var selectedArray=[];
	$("#verifyComponents").click(function(){
		pipingActualCount++;
		 chamber=parseInt($("#chamber").val());
		 pump=parseInt($("#pump").val());
		 piston=parseInt($("#piston").val());
		 heater=parseInt($("#heater").val());
		 chiller=parseInt($("#chiller").val());
		 
		 const selectedValues = $("#Utilities").val();
		 
		 
		 if (selectedValues) {
	          selectedValues.forEach(value => {
	            if (!selectedArray.includes(value)) {
	              selectedArray.push(value);
	            }
	          });

//	          $("#output").text("Values in Array: " + selectedArray.join(", "));
	        } 
		 
		 
		 
		 CountComp();
		 
		  console.log(" chamber "+chamber);
		  console.log(" pump "+	 pump);
		  console.log(" piston "+piston);
		  console.log(" heater "+heater);
		  console.log(" chiller "+chiller);
		  
		  if(totalComp==0 ||(heater === ""  || pump === "" || chamber=="" || piston=="" || chiller=="" )){
			  $("#modelDialog").removeClass("modal-xl");
				$("#modelDialog").addClass("modal-md");
				 $("#modelTitle").html("Error box ");
				  $("#modelBody").html("<b>Select components</b> ");
				  $("#modelBody").css("color","red");
		  }
		  else{
			  if(temp<3){
				  CountComp();
			  }else{
				  if(flag==0){
					  $("#modelDialog").removeClass("modal-md");
					  $("#modelDialog").addClass("modal-xl");
					  $("#modelTitle").html("Required configuration ");
					  htm=''
						  +'<div class="row">'
						  +'<div class="col-sm-6" >'
						+'<table class="table table-striped table-bordered">'
						+' <tbody>'
						+'    <tr class="table-dark text-dark">'
						+'     <td colspan="2"><center>REQUIRED COMPONENTS</center></td>'
						+'   </tr>'
						+'    <tr>'
						+'     <td><center>Chamber</center></td>'
						+'     <td><center>2</center></td>'
						+'   </tr>'
						+'    <tr>'
						+'     <td><center>Heater</center></td>'
						+'     <td><center>1</center></td>'
						+'   </tr>'
						+'    <tr>'
						+'     <td><center>Piston</center></td>'
						+'     <td><center>1</center></td>'
						+'   </tr>'
						+'   <tr>'
						+'     <td><center>Pump</center></td>'
						+'     <td><center>1</center></td>'
						+'   </tr>'
						+'    <tr>'
						+'     <td><center>Chiller</center></td>'
						+'     <td><center>1</center></td>'
						+'   </tr>'
						
						 +' </tbody>'
						+'</table>'
						+'</div>'
						 +'<div class="col-sm-6" >'
							+'<table class="table table-striped table-bordered">'
							+' <tbody>'
							+'    <tr class="table-dark text-dark">'
							+'     <td colspan="2"><center> REQUIRED UTILITIES</center></td>'
							+'   </tr>'
							+'    <tr>'
							+'     <td><center>AIR</center></td>'
							+'     <td><center><i class="fa fa-check-square icon" style=""></i></center></td>'
							+'   </tr>'
							+'   <tr>'
							+'     <td><center>ELECTRICITY</center></td>'
							+'     <td><center><i class="fa fa-check-square icon" ></i></center></td>'
							+'   </tr>'
							+'   <tr>'
							+'     <td><center>COMMUNICATION NETWORK</center></td>'
							+'     <td><center><i class="fa fa-check-square icon"></i></center></td>'
							+'   </tr>'
							
							+'    <tr>'
							+'     <td><center>ACCESS CONTROL</center></td>'
							+'     <td><center><i class="fa fa-check-square icon"></i></center></td>'
							
							+'   </tr>'
							
							+'    <tr>'
							+'     <td><center>CCTV</center></td>'
							+'     <td><center><i class="fa fa-check-square icon" ></i></center></td>'
							
							+'   </tr>'
						    +' </tbody>'
							+'</table>'
							+'</div>'
							+'</div>'

						+"<img src='images/temp_piping_1.png' class='img-fluid' style='border-style: double;border-color: black;'>"
					  
						 $("#modelBody").html(htm);
						  $("#modelBody").css("color","red");   
				  }
				  else
					  {
					  CountComp();
					  }
				  
			  }
			  temp++;
		  }
	
	});
		  
	function CountComp(){
	
		 if(totalComp==0 ||(heater === ""  || pump === "" || chamber=="" || piston=="" || chiller=="" )){
			  $("#modelDialog").removeClass("modal-xl");
				$("#modelDialog").addClass("modal-md");
				 $("#modelTitle").html("Error box");
				  $("#modelBody").html("<b>Select components</b> ");
				  $("#modelBody").css("color","red");
		  }
		
	else{
		
		
		if((chamber==StdChamberCount) && (pump==StdPumpCount)  &&( StdHeaterCount==heater) && (piston==StdPistonCount)  &&( StdChillerCount==chiller) ){
			
			if(selectedArray.length==0){
				
				 $("#modelDialog").removeClass("modal-xl");
					$("#modelDialog").addClass("modal-md");
					 $("#modelTitle").html("Error box");
					  $("#modelBody").html("<b>Select utilities.</b> ");
					  $("#modelBody").css("color","red");
			}
			else
				{
					 $("#modelDialog").removeClass("modal-xl");
					 $("#modelDialog").addClass("modal-md");
					 $("#modelTitle").html("Message box ");
					 $("#modelBody").html("<b>Click on 'Next level' button.</b>");
					$("#modelBody").css("color","green");
					$("#chamber,#heater,#pump,#verifyComponents,#Utilities,#piston,#chiller").prop("disabled",true);
				
					flag=1;
					addToMasterJson();
					htm=''
						+'<div class="col-sm-12" >'
						+"<img src='images/temp_piping_1.png' class='img-fluid' id='partA1' style=' width: 100px;height:100px;position: relative; margin: 20px;'  >"
						+'</div>'
						
					$("#diagram").html(htm);
					 $("#partA1").animate(
					          {
					            width: "900px",
					            height: "700px",
					           left: "+=50px",
		//			            background-color:"red"
					            
					          },
					          1000,
					          
					        );
						$("#nextLevel1").prop("hidden",false);
				}	
		}
		else{
			
			 perChamberCount=parseFloat((chamber*100)/StdChamberCount);
			 perPumpCount=parseFloat((pump*100)/StdPumpCount);
			 perHeaterCount=parseFloat((heater*100)/StdHeaterCount);
			 perPistonCount=parseFloat((piston*100)/StdPistonCount);
			 perChillerCount=parseFloat((chiller*100)/StdChillerCount);
			 
			  console.log(" perChamberCount "+perChamberCount);
			  console.log(" perPumpCount "+perPumpCount);
			  console.log(" perHeaterCount "+perHeaterCount);
			  console.log(" perPistonCount "+perPistonCount);
			  console.log(" perChillerCount "+perChillerCount);
			  
				totalComp=perChamberCount+perPumpCount+perHeaterCount+perPistonCount+perChillerCount;
			  avg=parseInt(totalComp/5);
			  
			  console.log(" avg "+avg);
			  console.log(" totalComp "+totalComp);
				 $("#modelDialog").removeClass("modal-xl");
				$("#modelDialog").addClass("modal-md");
				if((chamber>StdChamberCount) || (heater>StdHeaterCount) || (piston>StdPistonCount) || (pump>StdPumpCount) || (chiller>StdChillerCount)){
					
					$("#modelBody").css("color","red"); 
					 $("#modelTitle").html("Error box");
					$("#modelBody").html("<b>More components than expected. </b>");
				}else
					{
						if(avg<100){
							$("#modelBody").css("color","red");
							$("#modelTitle").html("Message box");
							 $("#modelBody").html("<b>"+avg+" % Correctness</b>");
								
						}else{
							$("#modelBody").css("color","red");
							 $("#modelTitle").html("Error box");
							 $("#modelBody").html("<b>More components than expected.</b>");
						}
					}
		}
	}
		
	}
	function addToMasterJson()
	{
		
		tempMasterJsonComp = {
		"totalComponent":"5",
		"Chamber":"2",
		"pump":"1",
		"Heater":"1",
		"Piston":"1",
		"Chiller":"1",
//		"Utilities":selectedArray,
		};
		
		ComponentMasterJson.Component=tempMasterJsonComp;
		ComponentMasterJson.Component.Utilities=selectedArray;
		console.log(ComponentMasterJson);
		resultJson.piping=pipingActualCount;
		console.log(resultJson);
	}
	
	$("#nextLevel1").click(function(){
		TemperatureSensorInstrument();
	});
	
	
	
}

