Highcharts.chart('container', {
    chart: {
                zoomType: 'xy',
        
    },
    title: {
        text: 'Арты'
    },
    subtitle: {
        text: 'TT19-20'
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
        name: 'Малый тренер',
        type: 'spline',
        inverted: true,
        data: [],
        color: Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.5).get(),
       // enableMouseTracking: false
    },
    //малые тайники
    {
        name: 'Малые тайники',
        type: 'spline',
        inverted: true,
        data: [],
        color: Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.5).get(),
    },
    //малая прочка    
    {
        name: 'Малая прочка',
        type: 'spline',
        inverted: true,
        data: [],
        color: Highcharts.Color(Highcharts.getOptions().colors[2]).setOpacity(0.5).get(),
    }, 
    //малая скорость
    {
        name: 'Малая скорость',
        type: 'spline',
        inverted: true,
        data: [],
        color: Highcharts.Color(Highcharts.getOptions().colors[3]).setOpacity(0.5).get(),
    },
    //малая разведка    
    {
        name: 'Малая разведка',
        type: 'spline',
        inverted: true,
        data: [],
        color: Highcharts.Color(Highcharts.getOptions().colors[4]).setOpacity(0.5).get(),
    },
    //малая диета
    {
        name: 'Малая диета',
        type: 'spline',
        inverted: true,
        data: [],
        color: Highcharts.Color(Highcharts.getOptions().colors[5]).setOpacity(0.5).get(),
    },
    //малый БАБС
    {
        name: 'Малый БАБС',
        type: 'spline',
        inverted: true,
        data: [],
        color: Highcharts.Color(Highcharts.getOptions().colors[6]).setOpacity(0.5).get(),
    },
    //Малый дурак
    {
        name: 'Малый дурак',
        type: 'spline',
        inverted: true,
        data: [],
        color: Highcharts.Color(Highcharts.getOptions().colors[7]).setOpacity(0.5).get(),
    },

        
    // БОЛЬШИЕ АРТЫ
        
    //Большая прочка
    {
        name: 'Большая прочка',
        type: 'spline',
        inverted: true,
        data: [],
        color: Highcharts.Color(Highcharts.getOptions().colors[2]).setOpacity(0.5).get(),
       // enableMouseTracking: false
    }, 
    //Большая скорость
    {
        name: 'Большая скорость',
        type: 'spline',
        inverted: true,
        data: [],
        color: Highcharts.Color(Highcharts.getOptions().colors[3]).setOpacity(0.5).get(),
       // enableMouseTracking: false
    },
    //Большая разведка
    {
        name: 'Большая разведка',
        type: 'spline',
        inverted: true,
        data: [],
        color: Highcharts.Color(Highcharts.getOptions().colors[4]).setOpacity(0.5).get(),
       // enableMouseTracking: false
    },  
    //Большая диета
    {
        name: 'Большая диета',
        type: 'spline',
        inverted: true,
        data: [],
        color: Highcharts.Color(Highcharts.getOptions().colors[5]).setOpacity(0.5).get(),
       // enableMouseTracking: false
    },
    //Большой тренер
    {
        name: 'Большой тренер',
        type: 'spline',
        inverted: true,
        data: [],
        color: Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.5).get(),
       // enableMouseTracking: false
    }, 
    //Большой БАБС
    {
        name: 'Большой БАБС',
        type: 'spline',
        inverted: true,
        data: [],
        color: Highcharts.Color(Highcharts.getOptions().colors[6]).setOpacity(0.5).get(),
       // enableMouseTracking: false
    },              
    //Большой тайник
    {
        name: 'Большой тайник',
        type: 'spline',
        inverted: true,
        data: [],
        color: Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.5).get(),
       // enableMouseTracking: false
    }, 

    //УНИКИ    
    {
        name: 'Уники',
        type: 'spline',
        inverted: true,
        data: [],
        color: Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.5).get(),
       // enableMouseTracking: false
    },          
             
    {
        name: 'Катоточки',
        type: 'scatter',
        color: Highcharts.getOptions().colors[10],
        data: [[-204,-15],
        [-229,-18],
        [-245,-27],
        [-198,-31],
        [-220,-37],
        [-204,-51],
        [-231,-53],
        [-185,-92],
        [-178,-192],
        [-167,-189],
        [-142,-50],
        [-8,-178],
        [-27,-167],
        [-24,-180],
        [-199,-66],
        [-178,-78],
        [-181,-66],
        [-178,-71],
        [-263,-7],
        [-179,-61],
        [-253,-54],
        [-198,-68],
        [-250,-35],
        [-222,-69],
        [-212,-77],
        [-205,-80],
        [-170,-78],
        [-240,-5],
        [-240,-5],
        [-41,-229],
        [-41,-229],
        [-245,-27],
        [-204,-51],
        [-18,-236],
        [-18,-236],
        [-5,-224],
        [-5,-224],
        [-36,-217],
        [-36,-217],
        [12,-223],
        [12,-223],
        [42,-215],
        [-196,-1],
        [40,-209],
        [66,-194],
        [-18,-135],
        [-108,-34],
        [-101,-40],
        [-84,-125]]
    },
        
    
    
    {
        name: 'map',
        type: 'scatter',
        color: Highcharts.getOptions().colors[1],
        data: [[-300, 300], [-300,-300], [300, 300], [0,0], [300, -300]]
        
    }
    ],
    tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '{point.x}, {point.y}'
    }
});