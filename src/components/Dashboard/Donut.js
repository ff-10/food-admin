
import Chart from 'react-apexcharts';
import Resturants from "../../mocks/restaurants/restaurnat.json"

export default function Donut({ width }) {

    const categoryStats = {};

    for (const rest of Resturants) {
        if (!categoryStats[rest.category_name]) {
            categoryStats[rest.category_name] = 1;
        } else {
            categoryStats[rest.category_name] += 1;
        }
    }

    const labels = [];
    const series = [];
    
    for (const [category_name, count] of Object.entries(categoryStats)) {
        labels.push(category_name)
        series.push(count)
    }

    const donutData = {
        chart: {
            foreColor: '#50CDEA'
        },
        options: {
            labels
        },
        series
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 60 }}>
            <Chart options={donutData} series={donutData.series} type="donut" width={width} />
        </div>
    )

}