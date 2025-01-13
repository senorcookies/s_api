import Chart from 'chart.js/auto';

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


  const labels = Object.keys(kelby_data); // Months (e.g., "2025-01", "2025-02")
  const kelby_values = Object.values(kelby_data); 
  const kate_values = Object.values(kate_data); 
  const zach_values = Object.values(zach_data);
  const smack_values = Object.values(smack_data);
  const caren_values = Object.values(caren_data);

  const zelby_data = kelby_values.map((num, index) => num + zach_values[index]);
  const smatesa_data = kate_values.map((num, index) => num + smack_values[index] + kate_values[index]);
  const calex_data = caren_values.map((num, index) => num + kate_values[index]);

  new Chart(
    document.getElementById('tChart'), {
      type: 'bar',
      data: {
        labels: labels, // X-axis labels
        datasets: [
          {
          label: 'Zelby',
          data: zelby_data, // Y-axis data
          backgroundColor: 'rgba(255, 0, 0, 0.4)'
          },
            {
            label: 'Smatesa',
            data: smatesa_data, // Y-axis data
            backgroundColor: 'rgba(18, 1, 208, 0.4)'              
            },
              {
              label: 'Calex',
              data: calex_data, // Y-axis data
              backgroundColor: 'rgba(70, 255, 53, 0.4)'            
              }]
        }
    }
  );
};


export function indPlot() {

  const kelby_data = loadData("kelby_data");
  const kate_data = loadData("kate_data");
  const zach_data = loadData("zach_data");
  const smack_data = loadData("smack_data");
  const caren_data = loadData("Caren_data");


  const labels = Object.keys(kelby_data); // Months (e.g., "2025-01", "2025-02")
  const kelby_values = Object.values(kelby_data); 
  const kate_values = Object.values(kate_data); 
  const zach_values = Object.values(zach_data);
  const smack_values = Object.values(smack_data);
  const caren_values = Object.values(caren_data);


  new Chart(
    document.getElementById('indChart'), {
      type: 'bar',
      data: {
        labels: labels, // X-axis labels
        datasets: [
          {
            label: 'Kelby',
            data: kelby_values, // Y-axis data
            backgroundColor: 'rgba(255, 0, 0, 0.4)'
          },
            {
            label: 'Kate',
            data: kate_values, // Y-axis data
            backgroundColor: 'rgba(18, 1, 208, 0.4)'             
            },
              {
              label: 'Zach',
              data: zach_values, // Y-axis data
              backgroundColor: 'rgba(255, 238, 0, 0.4)'             
              },
                {
                label: 'Smack',
                data: smack_values, // Y-axis data
                backgroundColor: 'rgba(255, 0, 247, 0.4)'             
                },
                  {
                  label: 'Caren',
                  data: caren_values, // Y-axis data
                  backgroundColor: 'rgba(31, 143, 0, 0.4)'               
                  }]
        }
    }
  );
};






      



      