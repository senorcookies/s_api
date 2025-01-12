
// import Chart from 'chart.js/auto'
require('dotenv').config();

// Function uses provided refresh token to get a new access token, then passes that to the getActivity function.
export function kreAuthorize() {
    const auth_link = "https://www.strava.com/oauth/token";

    fetch(auth_link,{
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'

        },
        body: JSON.stringify({
            client_id: `${ process.env.CLIENT_ID }`,
            client_secret: `${ process.env.CLIENT_SECRETE }`,
            refresh_token: `${ process.env.KELBY_REFRESH_TOKEN }`,
            grant_type: 'refresh_token'
        })
    }).then(res => res.json())
        .then(res => getActivities(res))
};

// Function uses timestamp to fetch activities after 1/1/25, then sends output to dPlot function.
function getActivities(res) {
    
    const startTime = 1735714800 // epoch timestamp
    const activities_link = `https://www.strava.com/api/v3/athlete/activities?&after=${startTime}&per_page=200&access_token=${res.access_token}`
    
    fetch(activities_link)
        .then(res => res.json())
            .then(res => dPlot(res))
};

// Fucntion takes data from the getActivities request. Extracts/computes total elevation YTD and outputs to HTML.
function dPlot(res) {
    const metersTofeet = 3.28084;
    const Data = res;

    // Review, this can probably be combined with chart calcs below.
    var totalElevation = 0;
    for (i = 0; i < Data.length; i++) {
        totalElevation += Data[i].total_elevation_gain;
    }

    // 1) Output data to HTML by ID:
    const DispData = `${ Math.ceil(totalElevation * metersTofeet) }`;
    document.getElementById("kelevdata").innerHTML = `Kelby's Total Elevation YTD: ${ DispData } ft`;


    // 2) Creat Chart:
    const sumByMonth = (Data) => {
        return Data.reduce((acc, { start_date, total_elevation_gain }) => {
          // Extract year and month
          const [year, month] = start_date.split("-").slice(0, 2);
          const key = `${year}-${month}`; // e.g., "2025-01"
          // Add to the month's total
          acc[key] = (acc[key] || 0) + (total_elevation_gain * metersTofeet);
          return acc;
        }, {});
      };

    // Save data to a JSON file
    function saveData(key, data) {
      localStorage.setItem(key, JSON.stringify(data));
    };

    const monthlyTotals = sumByMonth(Data);
    saveData("kelby_data", monthlyTotals)
    // const labels = Object.keys(monthlyTotals); // Months (e.g., "2025-01", "2025-02")
    // const values = Object.values(monthlyTotals); // Totals for each month

    // new Chart(
    //     document.getElementById('kChart'),
    //     {
    //       type: 'line',
    //       data: {
    //         labels: labels, // X-axis labels
    //         datasets: [{
    //           label: 'Monthly Elevation Total',
    //           data: values, // Y-axis data
    //           backgroundColor: 'rgba(255, 0, 0, 0.4)',
    //           borderColor: 'rgba(255, 0, 0, 1.0)',
    //           borderWidth: 1.5
    //         }]
    //       }
    //     }
    //   );
};
