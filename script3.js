const barChartOptions = {
    series: [
      {
        data: [90, 70, 50, 30, 10],
      },
    ],
    chart: {
      type: 'bar',
      height: 300,
      toolbar: {
        show: false,
      },
    },
    colors: ['#246dec', '#ac0c0c', '#367952', '#f5b74f'],
    plotOptions: {
      bar: {
        distributed: true,
        borderRadius: 4,
        horizontal: false,
        columnWidth: '35%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: ['total', 'refusé', 'en attente', 'validé'],
    },
    yaxis: {
      title: {
        text: 'Count',
      },
    },
  };
  
  const barChart = new ApexCharts(
    document.querySelector('#bar-chart'),
    barChartOptions
  );
  barChart.render();
  
  // AREA CHART
  const areaChartOptions = {
    series: [
      {
        name: 'projets validés',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: 'projets refusés',
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    chart: {
      height: 300,
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    colors: ['#4f35a1', '#246dec'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    markers: {
      size: 0,
    },
    yaxis: [
      {
        title: {
          text: 'projets validés',
        },
      },
      {
        opposite: true,
        title: {
          text: 'projets refusés',
        },
      },
    ],
    tooltip: {
      shared: true,
      intersect: false,
    },
  };
  
  const areaChart = new ApexCharts(
    document.querySelector('#area-chart'),
    areaChartOptions
  );
  areaChart.render();