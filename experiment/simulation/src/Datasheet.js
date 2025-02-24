function Datasheet(){

	var htm=''
	 +' <div class="row">'

	 +' <!-- Tabs and Content Container -->'
	 +'  <ul class="nav nav-tabs" id="dynamicTabs" role="tablist"></ul>'
	 +'  <div class="tab-content" id="dynamicTabContent"></div>'
	 +'</div>'
	 +' <button id="generatePdf" class="btn btn-danger" style=" float: right; margin-top: 10px;">Download</button>'
	 
$("#datasheetBody").html(htm);


      // Clear existing tabs and content
      $('#dynamicTabs').empty();
      $('#dynamicTabContent').empty();

      for (let i = 0; i < dataArr.length; i++) {
    	  // Add tab
    	  const activeClass = i === 0 ? 'active' : ''; // Activate the first tab
    	  const tabItem = `
    	    <li class="nav-item" role="presentation">
    	      <button class="nav-link ${activeClass}" id="tab-${i}" data-bs-toggle="tab" data-bs-target="#content-${i}" type="button" role="tab">
    	        Test cycle - ${i + 1}
    	      </button>
    	    </li>`;
    	  $('#dynamicTabs').append(tabItem);

    	  // Generate table rows dynamically
    	  let rows = ` `;
    	    let row1 = ` `;
    	  for (let j = 0; j < dataArr[i].coldReading.length; j++) {
    	    rows += `
    	      <tr>
    	      
    	        <td>${j + 1}</td>
    	        <td>${dataArr[i].coldReading[j].tt1}</td>
    	        <td>${dataArr[i].coldReading[j].tt2}</td>
    	        <td>${dataArr[i].coldReading[j].tt3}</td>
    	        <td>${dataArr[i].coldReading[j].tt4}</td>
    	        <td>${dataArr[i].coldReading[j].tt5}</td>
    	        <td>${dataArr[i].coldReading[j].tt6}</td>
    	       <td>${dataArr[i].coldReading[j].tt7}</td>
    	      
    	      </tr>`;
    	  }
    	  for (let j = 0; j < dataArr[i].hotReading.length; j++) {
    	    row1 += `
    	      <tr>
    	      
    	        <td>${j + 1}</td>
    	        <td>${dataArr[i].hotReading[j].tt1}</td>
    	        <td>${dataArr[i].hotReading[j].tt2}</td>
    	        <td>${dataArr[i].hotReading[j].tt3}</td>
    	        <td>${dataArr[i].hotReading[j].tt4}</td>
    	        <td>${dataArr[i].hotReading[j].tt5}</td>
    	        <td>${dataArr[i].hotReading[j].tt6}</td>
    	       <td>${dataArr[i].hotReading[j].tt8}</td>
    	       
    	      
    	      </tr>`;
    	  }

    	  // Add tab content
    	  const tabContent = `
    	    <div class="tab-pane fade ${activeClass ? 'show active' : ''}" id="content-${i}" role="tabpanel">
    	      <table class="table table-bordered mt-3"  style="overflow-y: auto; overflow-x: auto;">
    	        <thead>
    	         <tr>
    	          <th colspan="8" style="background-color:#c7e5e9;" >COLD READINGS</th>
    	          </tr>
    	           <tr>
    	             <th>SR.NO</th>
    	            <th>TT1</th>
    	            <th>TT2</th>
    	            <th>TT3</th>
    	            <th>TT4</th>
    	            <th>TT5</th>
    	            <th>TT6</th>
    	            <th>TT7</th>
    	          </tr>
    	        </thead>
    	        <tbody>
    	          ${rows}
    	        </tbody>
    	      </table>
    	      
    	      <table class="table table-bordered mt-3"  style="overflow-y: auto; overflow-x: auto;">
    	        <thead>
    	        <tr class="hotReading">
                 <th colspan="8" style="background-color:#e7c4c4;" >HOT READINGS</th>
    	          </tr>
    	          <tr>
    	         <th>SR.NO</th>
    	            <th>TT1</th>
    	            <th>TT2</th>
    	            <th>TT3</th>
    	            <th>TT4</th>
    	            <th>TT5</th>
    	            <th>TT6</th>
    	            <th>TT8</th>
    	          </tr>
    	        </thead>
    	        <tbody>
    	          ${row1}
    	        </tbody>
    	      </table>
    	    </div>`;
    	  $('#dynamicTabContent').append(tabContent);
    	}
      
      
      
      document.getElementById('generatePdf').addEventListener('click', function () {
    	    const { jsPDF } = window.jspdf; // Access jsPDF library
    	    const doc = new jsPDF();

    	    const tables = document.querySelectorAll('#dynamicTabContent .table'); // Select all tables
    	    tables.forEach((table, index) => {
    	      if (index > 0) {
    	        doc.addPage(); // Add a new page for each table after the first
    	      }
    	      doc.autoTable({
    	        html: table, // Generate PDF table from HTML table
    	        theme: 'grid', // Optional: Table styling (striped, grid, plain)
    	        startY: 10, // Starting Y position
    	        margin: { top: 10, bottom: 10 }, // Optional margins
    	      });
    	    });

    	    doc.save('Temperature_sensor_test_cycles.pdf'); // Download the generated PDF
    	  });
}
	
