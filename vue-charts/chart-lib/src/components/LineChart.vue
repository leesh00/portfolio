<template>
    <canvas ref="lineChart" id="lineChart" width="100" height="100"></canvas>
</template>

<script>

export default {
  mounted() {
    var lineChart = new this.$_Chart(this.$refs.lineChart, {
        type: 'doughnut',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [52, 19, 3, 5, 2, 10],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 0,
            }]
        },
        options: {
            tooltips: {
                xPadding:100,
            yPadding:400,
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            cutoutPercentage:90,
        }
    });
    lineChart()
  }
}
</script>

<style>

</style>