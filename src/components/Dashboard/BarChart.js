import Chart from 'react-apexcharts';


const options = {
    series: [{
        name: "Years",
        data: [2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029]
    }],
    chart: {
        height: 350,
        type: 'line',
        zoom: {
            enabled: true
        },
        foreColor: '#50CDEA'
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight'
    },
    title: {
        text: 'Years',
        align: 'left',
    },
    grid: {
        row: {
            colors: ['#1E1E30', 'transparent'],
            opacity: 0.5
        },
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
};



export default function BarChart() {
    return (
        <div style={{ width: "100%", display: "flex", justifyContent: 'center', alignItems: 'center',  marginTop: 50}}>
            <div style={{ width: "100%"}}>
                <Chart options={options} series={options.series} type="line" height={350} />
            </div>
        </div>
    )

}

