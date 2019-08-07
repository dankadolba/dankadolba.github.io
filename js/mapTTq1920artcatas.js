Highcharts.chart('container', {
    chart: {
                zoomType: 'xy',
        
    },
    title: {
        text: 'Zone'
    },
    subtitle: {
        text: '29.07.19'
    },
    xAxis: {
        gridLineWidth: 2,
        title: {
            enabled: true,
            text: 'x'
        },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true,
        plotLines: [{
            color: 'black',
            dashStyle: 'dot',
            width: 2,
            value: 0,
            label: {
                align: 'right',
                style: {
                    fontStyle: 'italic'
                },
                x: -10
            },
            zIndex: 3
        }]
    },
    yAxis: {
        gridLineWidth: 2,
        title: {
            text: 'y'
        },
        plotLines: [{
            color: 'black',
            dashStyle: 'dot',
            width: 2,
            value: 0,
            label: {
                align: 'right',
                style: {
                    fontStyle: 'italic'
                },
                x: -10
            },
            zIndex: 3
        }]
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    series: [
    //МАЛЫЕ АРТЫ
    //малый тренер
    {
        name: 'Малый тренер 161',
        type: 'spline',
        inverted: true,
        data: [],
        color: Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.5).get(),
       // enableMouseTracking: false
    },
    //малые тайники
    {
        name: 'Малые тайники 114',
        type: 'spline',
        inverted: true,
        data: [],
        color: Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.5).get(),
    },
    //малая прочка    
    {
        name: 'Малая прочка 230',
        type: 'spline',
        inverted: true,
        data: [],
        color: Highcharts.Color(Highcharts.getOptions().colors[2]).setOpacity(0.5).get(),
    }, 
    //малая скорость
    {
        name: 'Малая скорость 207',
        type: 'spline',
        inverted: true,
        data: [],
        color: Highcharts.Color(Highcharts.getOptions().colors[3]).setOpacity(0.5).get(),
    },
   //малая разведка    
    {
        name: 'Малая разведка 93',
        type: 'spline',
        inverted: true,
        data: [],
        color: Highcharts.Color(Highcharts.getOptions().colors[4]).setOpacity(0.5).get(),
    },
	
	
    //малая диета
    {
        name: 'Малая диета 184',
        type: 'spline',
        inverted: true,
        data: [],
        color: Highcharts.Color(Highcharts.getOptions().colors[5]).setOpacity(0.5).get(),
    },


    //Малый дурак
    {
        name: 'Малый дурак 171',
        type: 'spline',
        inverted: true,
        data: [],
        color: Highcharts.Color(Highcharts.getOptions().colors[7]).setOpacity(0.5).get(),
    },	

    //малый БАБС
    {
        name: 'Малый БАБС 138',
        type: 'spline',
        inverted: true,
        data: [],
        color: Highcharts.Color(Highcharts.getOptions().colors[6]).setOpacity(0.5).get(),
    },
        
    // БОЛЬШИЕ АРТЫ
        
    //Большая прочка
    {
        name: 'Большая прочка 67',
        type: 'spline',
        inverted: true,
        data: [],
        color: Highcharts.Color(Highcharts.getOptions().colors[2]).setOpacity(0.5).get(),
       // enableMouseTracking: false
    }, 
    //Большая скорость
    {
        name: 'Большая скорость 85',
        type: 'spline',
        inverted: true,
        data: [],
        color: Highcharts.Color(Highcharts.getOptions().colors[3]).setOpacity(0.5).get(),
       // enableMouseTracking: false
    },
    //Большая разведка
    {
        name: 'Большая разведка 171',
        type: 'spline',
        inverted: true,
        data: [],
        color: Highcharts.Color(Highcharts.getOptions().colors[4]).setOpacity(0.5).get(),
       // enableMouseTracking: false
    },  
    //Большая диета
    {
        name: 'Большая диета 102',
        type: 'spline',
        inverted: true,
        data: [],
        color: Highcharts.Color(Highcharts.getOptions().colors[5]).setOpacity(0.5).get(),
       // enableMouseTracking: false
    },
    //Большой тренер
    {
        name: 'Большой тренер 120',
        type: 'spline',
        inverted: true,
        data: [],
        color: Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.5).get(),
       // enableMouseTracking: false
    }, 
    //Большой БАБС
    {
        name: 'Большой БАБС 138',
        type: 'spline',
        inverted: true,
        data: [],
        color: Highcharts.Color(Highcharts.getOptions().colors[6]).setOpacity(0.5).get(),
       // enableMouseTracking: false
    },              
    //Большой тайник
    {
        name: 'Большой тайник 153',
        type: 'spline',
        inverted: true,
        data: [],
        color: Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.5).get(),
       // enableMouseTracking: false
    }, 

    //УНИКИ    
    {
        name: 'Уники 44',
        type: 'spline',
        inverted: true,
        data: [],
        color: Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.5).get(),
       // enableMouseTracking: false
    },            
            
	{
        name: 'Катоточка',
        type: 'scatter',
        color: Highcharts.getOptions().colors[1],
        data: [[-21, -71], [-30,-5], [-39, 7], [-1,-34], [-39, -11],[-14,-39],
              [38,-196],[-22,-240],[-45,-196],[-80,-210],[-116,-209],[-162,-162],[-191,-145],[-180,-97],[-210,-81],[-205,-3],[-216,12],[66,-166],[-97,-156],[-146,-104],[-171,-36],[-123,-118],[-17,-188],[-22,-179],[-170,-1],[-58,-153],
              [-62,55],
              [-3,-46], [3,-40],[6,-47],[45,-21],[35,-34],[39,-21],[42,-13], [32,-37], [23,-35],[14,-50],
			  [-62,-55],[-23,-76],
			  [11,47],[30,34],[43,12],[17,-41]]
        
    },
			
			
    
    /*    {
        name: 'Нужны',
        type: 'scatter',
        color: Highcharts.getOptions().colors[2],
        data: [[12,-228],[-126,-158],[-233,-54],[-234,45],[35,-175],]
        
    }*/
    ],
    tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '{point.x}, {point.y}'
    }
});