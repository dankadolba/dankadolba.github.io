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
        type: 'scatter',
        inverted: true,
        data: [[157,151],
        [212,-60],
        [53,-213],
        [-157,-152],
        [210,60],
        [-53,212]],
        color: Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.5).get(),
       // enableMouseTracking: false
    },
    //малые тайники
    {
        name: 'Малые тайники',
        type: 'scatter',
        inverted: true,
        data: [[16,155],
        [142,64],
        [126,-91],
        [-16,-156],
        [-142,-65],
        [-126,90]],
        color: Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.5).get(),
    },
    //малая прочка    
    {
        name: 'Малая прочка',
        type: 'scatter',
        inverted: true,
        data: [[301,-86],
        [75,-303],
        [-225,-218],
        [-301,86],
        [-75,303],
        [225,218]],
        color: Highcharts.Color(Highcharts.getOptions().colors[2]).setOpacity(0.5).get(),
    }, 
    //малая скорость
    {
        name: 'Малая скорость',
        type: 'scatter',
        inverted: true,
        data: [[280,20],
        [157,-233],
        [-124,-252],
        [-280,-21],
        [-157,233],
        [124,252]],
        color: Highcharts.Color(Highcharts.getOptions().colors[3]).setOpacity(0.5).get(),
    },
    //малая разведка    
    {
        name: 'Малая разведка',
        type: 'scatter',
        inverted: true,
        data: [[-30,122],
        [90,87],
        [120,-35],
        [29,-122],
        [-89,-87],
        [-120,36]],
        color: Highcharts.Color(Highcharts.getOptions().colors[4]).setOpacity(0.5).get(),
    },
    //малая диета
    {
        name: 'Малая диета',
        type: 'scatter',
        inverted: true,
        data: [[228,102],
        [203,-148],
        [-26,-249],
        [-228,-102],
        [-203,147],
        [27,249]],
        color: Highcharts.Color(Highcharts.getOptions().colors[5]).setOpacity(0.5).get(),
    },
    //малый БАБС
    {
        name: 'Малый БАБС',
        type: 'scatter',
        inverted: true,
        data: [[82,169],
        [188,13],
        [105,-155],
        [-82,-169],
        [-188,-13],
        [-105,156]],
        color: Highcharts.Color(Highcharts.getOptions().colors[6]).setOpacity(0.5).get(),
    },
    //Малый дурак
    {
        name: 'Малый дурак',
        type: 'scatter',
        inverted: true,
        data: [[-203,-113],
        [169,-158],
        [44,-227],
        [-98,-210],
        [-230,28],
        [-169,156],
        [-45,227],
        [230,-28],
        [203,111],
        [98,210]],
        color: Highcharts.Color(Highcharts.getOptions().colors[7]).setOpacity(0.5).get(),
    },

        
    // БОЛЬШИЕ АРТЫ
        
    //Большая прочка
    {
        name: 'Большая прочка',
        type: 'scatter',
        inverted: true,
        data: [[89,-25],
        [-25,-90],
        [-89,25],
        [25,88]],
        color: Highcharts.Color(Highcharts.getOptions().colors[2]).setOpacity(0.5).get(),
       // enableMouseTracking: false
    }, 
    //Большая скорость
    {
        name: 'Большая скорость',
        type: 'scatter',
        inverted: true,
        data: [[86,-78],
        [-78,-86],
        [-86,77],
        [79,86]],
        color: Highcharts.Color(Highcharts.getOptions().colors[3]).setOpacity(0.5).get(),
       // enableMouseTracking: false
    },
    //Большая разведка
    {
        name: 'Большая разведка',
        type: 'scatter',
        inverted: true,
        data: [[-229,-32],
        [-32,228],
        [230,32],
        [33,-229]],
        color: Highcharts.Color(Highcharts.getOptions().colors[4]).setOpacity(0.5).get(),
       // enableMouseTracking: false
    },  
    //Большая диета
    {
        name: 'Большая диета',
        type: 'scatter',
        inverted: true,
        data: [[50,-131],
        [-126,-51],
        [-52,129],
        [129,51]],
        color: Highcharts.Color(Highcharts.getOptions().colors[5]).setOpacity(0.5).get(),
       // enableMouseTracking: false
    },
    //Большой тренер
    {
        name: 'Большой тренер',
        type: 'scatter',
        inverted: true,
        data: [[-12,-162],
        [-162,12],
        [12,162],
        [162,-12]],
        color: Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.5).get(),
       // enableMouseTracking: false
    }, 
    //Большой БАБС
    {
        name: 'Большой БАБС',
        type: 'scatter',
        inverted: true,
        data: [[-93,-161],
        [-160,93],
        [93,161],
        [161,-93]],
        color: Highcharts.Color(Highcharts.getOptions().colors[6]).setOpacity(0.5).get(),
       // enableMouseTracking: false
    },              
    //Большой тайник
    {
        name: 'Большой тайник',
        type: 'scatter',
        inverted: true,
        data: [[-173,-117],
        [-117,172],
        [173,117],
        [117,-173]],
        color: Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.5).get(),
       // enableMouseTracking: false
    }, 

    //УНИКИ    
    {
        name: 'Уники',
        type: 'scatter',
        inverted: true,
        data: [[58,-8],[34,-51],[-7,58],[-18,-53],[-54,-19],[-49,31],
        [42,41]],
        color: Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.5).get(),
       // enableMouseTracking: false
    },          
             
    {
        name: 'Катоточки',
        type: 'scatter',
        color: Highcharts.getOptions().colors[1],
        data: [[-229,-18],
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
        [-84,-125],
        [-113,-47]]
    },
        
    
    /*
    {
        name: 'map',
        type: 'scatter',
        color: Highcharts.getOptions().colors[1],
        data: [[-300, 300], [-300,-300], [300, 300], [0,0], [300, -300]]
        
    }*/
    ],
    tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '{point.x}, {point.y}'
    }
});