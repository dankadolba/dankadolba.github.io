Highcharts.chart('container', {
    chart: {
                zoomType: 'xy',
        
    },
    title: {
        text: 'Арты'
    },
    subtitle: {
        text: 'TTqE20-21'
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
        data: [
            [-195,91],
            [-18,214],
            [177,123],
            [195,-91],
            [18,-215],
            [-177,-124]
        ],
        color: Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.5).get(),
       // enableMouseTracking: false
    },
    //малые тайники
    {
        name: 'Малые тайники',
        type: 'scatter',
        inverted: true,
        data: [
            [148,-40],
            [-108,108],
            [40,147],
            [148,40],
            [108,-109],
            [-40,-148]
        ],
        color: Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.5).get(),
    },
    //малая прочка    
    {
        name: 'Малая прочка',
        type: 'scatter',
        inverted: true,
        data: [
            [-27,307],
            [252,176],
            [279,-130],
            [27,-307],
            [-252,-177],
            [-279,130]
        ],
        color: Highcharts.Color(Highcharts.getOptions().colors[2]).setOpacity(0.5).get(),
    }, 
    //малая скорость
    {
        name: 'Малая скорость',
        type: 'scatter',
        inverted: true,
        data: [
            [-117,250],
            [158,227],
            [276,-24],
            [117,-251],
            [-158,-227],
            [-276,24]
        ],
        color: Highcharts.Color(Highcharts.getOptions().colors[3]).setOpacity(0.5).get(),
    },
    //малая разведка    
    {
        name: 'Малая разведка',
        type: 'scatter',
        inverted: true,
        data: [
            [-110,-71],
            [-112,51],
            [-10,123],
            [99,71],
            [112,-52],
            [10,-124]
        ],
        color: Highcharts.Color(Highcharts.getOptions().colors[4]).setOpacity(0.5).get(),
    },
    //малая диета
    {
        name: 'Малая диета',
        type: 'scatter',
        inverted: true,
        data: [
            [-175,173],
            [64,238],
            [238,64],
            [173,-174],
            [-64,-238],
            [-237,-65]
        ],
        color: Highcharts.Color(Highcharts.getOptions().colors[5]).setOpacity(0.5).get(),
    },
    //малый БАБС
    {
        name: 'Малый БАБС',
        type: 'scatter',
        inverted: true,
        data: [
            [-184,16],
            [-78,168],
            [107,152],
            [184,-17],
            [78,-168],
            [-106,-152]
        ],
        color: Highcharts.Color(Highcharts.getOptions().colors[6]).setOpacity(0.5).get(),
    },
    //Малый дурак
    {
        name: 'Малый дурак',
        type: 'scatter',
        inverted: true,
        data: [
            [174,-147],
            [-85,-211],
            [85,210],
            [193,122],
            [-55,222],
            [228,-16],
            [-194,-121],
            [55,-221],
            [-228,16],
            [-174,147]
        ],
        color: Highcharts.Color(Highcharts.getOptions().colors[7]).setOpacity(0.5).get(),
    },

        
    // БОЛЬШИЕ АРТЫ
        
    //Большая прочка
    {
        name: 'Большая прочка',
        type: 'scatter',
        inverted: true,
        data: [
            [-10,91],
            [91,7],
            [8,-92],
            [-91,-8]
        ],
        color: Highcharts.Color(Highcharts.getOptions().colors[2]).setOpacity(0.5).get(),
       // enableMouseTracking: false
    }, 
    //Большая скорость
    {
        name: 'Большая скорость',
        type: 'scatter',
        inverted: true,
        data: [
            [41,106],
            [106,-41],
            [-41,-106],
            [-107,41]
        ],
        color: Highcharts.Color(Highcharts.getOptions().colors[3]).setOpacity(0.5).get(),
       // enableMouseTracking: false
    },
    //Большая разведка
    {
        name: 'Большая разведка',
        type: 'scatter',
        inverted: true,
        data: [
            [112,-199],
            [-199,-111],
            [-111,199],
            [199,111]
        ],
        color: Highcharts.Color(Highcharts.getOptions().colors[4]).setOpacity(0.5).get(),
       // enableMouseTracking: false
    },  
    //Большая диета
    {
        name: 'Большая диета',
        type: 'scatter',
        inverted: true,
        data: [
            [100,93],
            [93,-101],
            [-100,-94],
            [-93,100]
        ],
        color: Highcharts.Color(Highcharts.getOptions().colors[5]).setOpacity(0.5).get(),
       // enableMouseTracking: false
    },
    //Большой тренер
    {
        name: 'Большой тренер',
        type: 'scatter',
        inverted: true,
        data: [
            [154,47],
            [47,-153],
            [-152,-47],
            [-47,152]
        ],
        color: Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.5).get(),
       // enableMouseTracking: false
    }, 
    //Большой БАБС
    {
        name: 'Большой БАБС',
        type: 'scatter',
        inverted: true,
        data: [
            [180,-29],
            [-28,-180],
            [-180,28],
            [28,180]
        ],
        color: Highcharts.Color(Highcharts.getOptions().colors[6]).setOpacity(0.5).get(),
       // enableMouseTracking: false
    },              
    //Большой тайник
    {
        name: 'Большой тайник',
        type: 'scatter',
        inverted: true,
        data: [
            [169,-117],
            [-118,-168],
            [-168,116],
            [118,167]
        ],
        color: Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.5).get(),
       // enableMouseTracking: false
    }, 

    //УНИКИ    
    {
        name: 'Уники',
        type: 'scatter',
        inverted: true,
        data: [

        ],
        color: Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.5).get(),
       // enableMouseTracking: false
    },
    
    //Катоточки
    {
        name: 'Катоточки',
        type: 'scatter',
        color: Highcharts.getOptions().colors[1],
        data: [[-203,58],
        [-143,59],
        [-113,179],
        [-212,-9],
        [-20,216],
        [-191,16],
        [-87,191],
        [-145,156],
        [-169,20],
        [-160,144],
        [-170,118],
        [-53,216],
        [-79,205],
        [-53,216],
        [-212,-9],
        [-136,178],
        [-31,177],
        [-77,156],
        [-124,130],
        [-167,63],
        [-136,111],
        [-53,172],
        [-140,240],
        [-120,243],
        [-272,45],
        [-237,128],
        [-151,223],
        [-101,258],
        [-39,150],
        [-125,92],
        [-114,105],
        [-69,146],
        [-161,145],
        [-186,179]]
        
    }    
    
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