// import Chart from 'chart.js/auto';

function loadData(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

export function teamPlot() {

  const kelby_data = loadData("kelby_data");
  const kate_data = loadData("kate_data");
  const zach_data = loadData("zach_data");
  const smack_data = loadData("smack_data");
  const caren_data = loadData("Caren_data");
  const alex_data = loadData("alex_data");
  const theresa_data = loadData("theresa_data");


  const labels = Object.keys(kelby_data); // Months (e.g., "2025-01", "2025-02")
  const kelby_values = Object.values(kelby_data); 
  const kate_values = Object.values(kate_data); 
  const zach_values = Object.values(zach_data);
  const smack_values = Object.values(smack_data);
  const caren_values = Object.values(caren_data);
  const alex_values = Object.values(alex_data);
  const theresa_values = Object.values(theresa_data);

  const zelby_data = kelby_values.map((num, index) => num + zach_values[index]);
  const zelby_total = zelby_data.reduce((acc, curr) => acc + curr, 0);
  const smatesa_data = kate_values.map((num, index) => num + smack_values[index] + theresa_values[index]);
  const smatesa_total = smatesa_data.reduce((acc, curr) => acc + curr, 0);
  const calex_data = caren_values.map((num, index) => num + alex_values[index]);
  const calex_total = calex_data.reduce((acc, curr) => acc + curr, 0);

  document.getElementById("zelbydata").innerHTML = `Zelby's Total Elevation YTD: ${ Math.ceil(zelby_total) } ft`;
  document.getElementById("smatesadata").innerHTML = `Smatesa's Total Elevation YTD: ${ Math.ceil(smatesa_total) } ft`;
  document.getElementById("calexdata").innerHTML = `Calex's Total Elevation YTD: ${ Math.ceil(calex_total) } ft`;


  // new Chart(
  //   document.getElementById('tChart'), {
  //     type: 'bar',
  //     data: {
  //       labels: labels, // X-axis labels
  //       datasets: [
  //         {
  //         label: 'Zelby',
  //         data: zelby_data, // Y-axis data
  //         backgroundColor: 'rgba(255, 0, 0, 0.4)'
  //         },
  //           {
  //           label: 'Smatesa',
  //           data: smatesa_data, // Y-axis data
  //           backgroundColor: 'rgba(18, 1, 208, 0.4)'              
  //           },
  //             {
  //             label: 'Calex',
  //             data: calex_data, // Y-axis data
  //             backgroundColor: 'rgba(70, 255, 53, 0.4)'            
  //             }]
  //       }
  //   }
  // );
};


export function indPlot() {

  const kelby_data = loadData("kelby_data");
  const kate_data = loadData("kate_data");
  const zach_data = loadData("zach_data");
  const smack_data = loadData("smack_data");
  const caren_data = loadData("Caren_data");
  const alex_data = loadData("alex_data");
  const theresa_data = loadData("theresa_data");


  const labels = Object.keys(kelby_data); // Months (e.g., "2025-01", "2025-02")
  const kelby_values = Object.values(kelby_data);
  const kate_values = Object.values(kate_data); 
  const zach_values = Object.values(zach_data);
  const smack_values = Object.values(smack_data);
  const caren_values = Object.values(caren_data);
  const alex_values = Object.values(alex_data);
  const theresa_values = Object.values(theresa_data);

  const kelby_total = kelby_values.reduce((acc, curr) => acc + curr, 0);
  const kate_total = kate_values.reduce((acc, curr) => acc + curr, 0);
  const zach_total = zach_values.reduce((acc, curr) => acc + curr, 0);
  const smack_total = smack_values.reduce((acc, curr) => acc + curr, 0);
  const caren_total = caren_values.reduce((acc, curr) => acc + curr, 0);
  const alex_total = alex_values.reduce((acc, curr) => acc + curr, 0);
  const theresa_total = theresa_values.reduce((acc, curr) => acc + curr, 0);

  document.getElementById("kdata").innerHTML = `Kelby's Total Elevation YTD: ${ Math.ceil(kelby_total) } ft`;
  document.getElementById("ksdata").innerHTML = `Kate's Total Elevation YTD: ${ Math.ceil(kate_total) } ft`;
  document.getElementById("zdata").innerHTML = `Zach's Total Elevation YTD: ${ Math.ceil(zach_total) } ft`;
  document.getElementById("sdata").innerHTML = `Smack's Total Elevation YTD: ${ Math.ceil(smack_total) } ft`;
  document.getElementById("cdata").innerHTML = `Caren's Total Elevation YTD: ${ Math.ceil(caren_total) } ft`;
  document.getElementById("adata").innerHTML = `Alex's Total Elevation YTD: ${ Math.ceil(alex_total) } ft`;
  document.getElementById("tdata").innerHTML = `Theresa's Total Elevation YTD: ${ Math.ceil(theresa_total) } ft`;


  // new Chart(
  //   document.getElementById('indChart'), {
  //     type: 'bar',
  //     data: {
  //       labels: labels, // X-axis labels
  //       datasets: [
  //         {
  //           label: 'Kelby',
  //           data: kelby_values, // Y-axis data
  //           backgroundColor: 'rgba(255, 0, 0, 0.4)'
  //         },
  //           {
  //           label: 'Kate',
  //           data: kate_values, // Y-axis data
  //           backgroundColor: 'rgba(18, 1, 208, 0.4)'             
  //           },
  //             {
  //             label: 'Zach',
  //             data: zach_values, // Y-axis data
  //             backgroundColor: 'rgba(255, 238, 0, 0.4)'             
  //             },
  //               {
  //               label: 'Smack',
  //               data: smack_values, // Y-axis data
  //               backgroundColor: 'rgba(255, 0, 247, 0.4)'             
  //               },
  //                 {
  //                 label: 'Caren',
  //                 data: caren_values, // Y-axis data
  //                 backgroundColor: 'rgba(31, 143, 0, 0.4)'               
  //                 },
  //                 {
  //                   label: 'Alex',
  //                   data: alex_values, // Y-axis data
  //                   backgroundColor: 'rgba(208, 187, 0, 0.4)'               
  //                   },
  //                   {
  //                     label: 'Theresa',
  //                     data: theresa_values, // Y-axis data
  //                     backgroundColor: 'rgba(187, 0, 208, 0.4)'               
  //                     }]
  //       }
  //   }
  // );
};






      



      