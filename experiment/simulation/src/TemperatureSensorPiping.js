ComponentMasterJson = {};


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

//var wt;
	$("#Header").html("	<center><span>TEMPERATURE SENSOR - VESSEL & PIPING DIAGRAM</span></center>");
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
		+'<div class="row statement" ><p>The spray drying process is a widely used technique for converting liquid feed into a dry powder form by rapidly drying with a hot gas.'
		+'This method is commonly used in industries such as food processing, pharmaceuticals, chemicals, and ceramics. The objective'
		+'of this task is to develop a comprehensive Piping and Instrumentation Diagram (P&ID) for a Spray Drying Process Plant that '
		+'outlines the necessary equipment, instrumentation, control loops, and piping systems.'
		+'<br><b> Problem Description</b><br>'
		+'The spray drying process involves several critical stages such as atomization, drying, powder collection, and gas handling.'
		+'A well-designed P&ID is required to ensure optimal control, safety, and efficient operation of the plant. The diagram should '
		+'incorporate the flow of materials, energy, and signals, highlighting all relevant equipment such as pumps, compressors,'
		+'heat exchangers, filters, and storage vessels, along with the associated instrumentation for monitoring and control.</p>'
		
		+'<br><b style="margin-bottom:10px;">The P&ID should include all major and minor process components and systems such as:</b><br>'

		+'<p><span class="subTitle">Feed Preparation System:</span><br> Where liquid feed is prepared and conditioned before entering the spray dryer.'
		+'<br><span class="subTitle">Atomization System:</span><br> Atomizers or nozzles that break the liquid feed into droplets for drying.'
		+'<br><span class="subTitle">Drying Chamber:</span><br> A chamber where hot air or gas dries the atomized liquid into fine powder.'
		+'<br><span class="subTitle">Air Handling System: </span><br>For controlling airflow and temperature inside the drying chamber.'
		+'<br><span class="subTitle">Powder Recovery and Collection System:</span><br> Cyclones, filters, and receivers used to capture dried particles from the exhaust gas.'
		+'<br><span class="subTitle">Exhaust Gas Handling System:</span><br> Includes fans, scrubbers, and filtration units to ensure environmental compliance.'
		+'<br><span class="subTitle">Cooling/Storage: </span><br>Systems for cooling, storing, and packaging the dried product</p></div>'
		$("#diagram").html(htm);
       var temp=0;
	  
	   var totalComp;
	   var flag=0;
	   var  selectedValues;
	   var selectedArray=[];
	$("#verifyComponents").click(function(){
		
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

						+"<img src='images/Temp_Sensor.png' class='img-fluid' style='border-style: double;border-color: black;'>"
					  
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
						+"<img src='images/Temp_Sensor.png' class='img-fluid' id='partA1' style=' width: 100px;height:100px;position: relative; margin: 20px;'  >"
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
	}
	
	$("#nextLevel1").click(function(){
		TemperatureSensorInstrument();
	});
	
	
	
}

