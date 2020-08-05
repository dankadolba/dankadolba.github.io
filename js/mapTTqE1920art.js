Highcharts.chart('container', {
    chart: {
                zoomType: 'xy',
        
    },
    title: {
        text: 'Art TTq Europe 2020-2021'
    },
    subtitle: {
        text: '05.08.2020'
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
        name: 'The trainers slight talent / Малый тренер 215',
        type: 'scatter',
        inverted: true,
        data: [[-195,91],
        [-18,214],
        [177,123],
        [195,-91],
        [18,-215],
        [-177,-124]],
color: Highcharts.getOptions().colors[0],       // enableMouseTracking: false
    },
    //малые тайники
    {
        name: 'Rivals slight confusion / Малые тайники 153',
        type: 'scatter',
        inverted: true,
        data: [[148,-40],
        [-108,108],
        [40,147],
        [148,40],
        [108,-109],
        [-40,-148]],
color: Highcharts.getOptions().colors[1],    },
    //малая прочка    
    {
        name: 'The architects slight secret /Малая прочка 308',
        type: 'scatter',
        inverted: true,
        data: [[-27,307],
        [252,176],
        [279,-130],
        [27,-307],
        [-252,-177],
        [-279,130]],
color: Highcharts.getOptions().colors[2],    }, 
    //малая скорость
    {
        name: 'The slight titan boots / Малая скорость 277',
        type: 'scatter',
        inverted: true,
        data: [[-117,250],
        [158,227],
        [276,-24],
        [117,-251],
        [-158,-227],
        [-276,24]],
color: Highcharts.getOptions().colors[3],    },
   //малая разведка    
    {
        name: 'The eagles slight eyes / Малая разведка 122',
        type: 'scatter',
        inverted: true,
        data: [[-100,-71],
        [-112,51],
        [-10,123],
        [99,71],
        [112,-52],
        [10,-124]],
color: Highcharts.getOptions().colors[4],    },
	
	
    //малая диета
    {
        name: 'Slight diet control / Малая диета 246',
        type: 'scatter',
        inverted: true,
        data: [[-175,173],
        [64,238],
        [238,64],
        [173,-174],
        [-64,-238],
        [-237,-65]],
color: Highcharts.getOptions().colors[5],    },


    //Малый дурак
    {
        name: 'Artefact of the slight fool / Малый дурак 227',
        type: 'scatter',
        inverted: true,
        data: [[174,-147],
        [-85,-211],
        [85,210],
        [193,122],
        [-55,222],
        [228,-16],
        [-194,-121],
        [55,-221],
        [-228,16],
        [-174,147]],
color: Highcharts.getOptions().colors[7],    },	

    //малый БАБС
    {
        name: 'Slight storage masterplan / Малый БАБС 185',
        type: 'scatter',
        inverted: true,
        data: [[-184,16],
        [-78,168],
        [107,152],
        [184,-17],
        [78,-168],
        [-106,-152]],
color: Highcharts.getOptions().colors[6],    },
        
    // БОЛЬШИЕ АРТЫ
        
    //Большая прочка
    {
        name: 'The architects great secret / Большая прочка 91',
        type: 'scatter',
        inverted: true,
        data: [[-10,91],
        [91,7],
        [8,-92],
        [-91,-8]],
color: Highcharts.getOptions().colors[2],       // enableMouseTracking: false
    }, 
    //Большая скорость
    {
        name: 'The great titan boots / Большая скорость 113',
        type: 'scatter',
        inverted: true,
        data: [[41,106],
        [106,-41],
        [-41,-106],
        [-107,41]],
color: Highcharts.getOptions().colors[3],       // enableMouseTracking: false
    },
    //Большая разведка
    {
        name: 'The eagles great eyes / Большая разведка 228',
        type: 'scatter',
        inverted: true,
        data: [[112,-199],
        [-199,-111],
        [-111,199],
        [199,111]],
color: Highcharts.getOptions().colors[4],       // enableMouseTracking: false
    },  
    //Большая диета
    {
        name: 'Great diet control / Большая диета 137',
        type: 'scatter',
        inverted: true,
        data: [[100,93],
        [93,-101],
        [-100,-94],
        [-93,100]],
        color: Highcharts.getOptions().colors[5],
       // enableMouseTracking: false
    },
    //Большой тренер
    {
        name: 'The trainers great talent / Большой тренер 160',
        type: 'scatter',
        inverted: true,
        data: [[154,47],
        [47,-153],
        [-152,-47],
        [-47,152]],
        color: Highcharts.getOptions().colors[0],
       // enableMouseTracking: false
    }, 
    //Большой БАБС
    {
        name: 'Great storage masterplan / Большой БАБС 182',
        type: 'scatter',
        inverted: true,
        data: [[180,-29],
        [-28,-180],
        [-180,28],
        [28,180]],
        color: Highcharts.getOptions().colors[6],
       // enableMouseTracking: false
    },              
    //Большой тайник
    {
        name: 'Rivals great confusion / Большой тайник 205',
        type: 'scatter',
        inverted: true,
        data: [[169,-117],
        [-118,-168],
        [-168,116],
        [118,167]],
        color: Highcharts.getOptions().colors[1],
       // enableMouseTracking: false
    }, 

    //УНИКИ    
    {
        name: 'Unique / Уники 57',
        type: 'scatter',
        inverted: true,
        data: [[-10,-56],
        [-57,31],
        [37,-45],
        [58,1],
        [-51,-25],
        [34,45],
        [-14,56]],
        color: Highcharts.getOptions().colors[0],
       // enableMouseTracking: false
    }            
    ],
    tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '{point.x}, {point.y}'
    }
});
