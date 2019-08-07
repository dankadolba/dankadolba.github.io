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
        name: 'Малый тренер 222',
        type: 'scatter',
        inverted: true,
        data: [[-175,137],
[31,220],
[206,83],
[175,-138],
[-31,-220],
[-206,-84]],
color: Highcharts.getOptions().colors[0],       // enableMouseTracking: false
    },
    //малые тайники
    {
        name: 'Малые тайники 158',
        type: 'scatter',
        inverted: true,
        data: [[-158,-6],
[-85,134],
[74,140],
[159,6],
[85,-134],
[-74,-140]],
color: Highcharts.getOptions().colors[1],    },
    //малая прочка    
    {
        name: 'Малая прочка 317',
        type: 'scatter',
        inverted: true,
        data: [[45,314],
[294,119],
[252,-195],
[-45,-313],
[-294,-120],
[-251,195]],
color: Highcharts.getOptions().colors[2],    }, 
    //малая скорость
    {
        name: 'Малая скорость 286',
        type: 'scatter',
        inverted: true,
        data: [[-60,280],
[213,191],
[272,-88],
[60,-280],
[-213,-192],
[-272,88]],
color: Highcharts.getOptions().colors[3],    },
   //малая разведка    
    {
        name: 'Малая разведка 127',
        type: 'scatter',
        inverted: true,
        data: [[-118,-47],
[-100,77],
[18,125],
[118,46],
[100,-79],
[-18,-126]],
color: Highcharts.getOptions().colors[4],    },
	
	
    //малая диета
    {
        name: 'Малая диета 254',
        type: 'scatter',
        inverted: true,
        data: [[-134,215],
[119,224],
[254,9],
[134,-215],
[-119,-225],
[-254,-10]],
color: Highcharts.getOptions().colors[5],    },


    //Малый дурак
    {
        name: 'Малый дурак 235',
        type: 'scatter',
        inverted: true,
        data: [[-141,188],
[223,77],
[-135,-193],
[225,-68],
[-223,-77],
[-4,235],
[141,-188],
[-225,68],
[135,193],
[4,-236]],
color: Highcharts.getOptions().colors[7],    },	

    //малый БАБС
    {
        name: 'Малый БАБС 190',
        type: 'scatter',
        inverted: true,
        data: [[-181,58],
[-41,186],
[141,126],
[181,-59],
[41,-185],
[-140,-127]],
color: Highcharts.getOptions().colors[6],    },
        
    // БОЛЬШИЕ АРТЫ
        
    //Большая прочка
    {
        name: 'Большая прочка 94',
        type: 'scatter',
        inverted: true,
        data: [[13,94],
[93,-13],
[-13,-93],
[-92,13]],
color: Highcharts.getOptions().colors[2],       // enableMouseTracking: false
    }, 
    //Большая скорость
    {
        name: 'Большая скорость 118',
        type: 'scatter',
        inverted: true,
        data: [[66,98],
[98,-67],
[-66,-99],
[-98,66]],
color: Highcharts.getOptions().colors[3],       // enableMouseTracking: false
    },
    //Большая разведка
    {
        name: 'Большая разведка 235',
        type: 'scatter',
        inverted: true,
        data: [[65,-227],
[-226,-66],
[-64,225],
[226,64]],
color: Highcharts.getOptions().colors[4],       // enableMouseTracking: false
    },  
    //Большая диета
    {
        name: 'Большая диета 141',
        type: 'scatter',
        inverted: true,
        data: [[122,70],
[71,-123],
[-122,-71],
[-71,121]],
        color: Highcharts.getOptions().colors[5],
       // enableMouseTracking: false
    },
    //Большой тренер
    {
        name: 'Большой тренер 165,
        type: 'scatter',
        inverted: true,
        data: [[165,12],
[12,-165],
[-165,-12],
[-12,165]],
        color: Highcharts.getOptions().colors[0],
       // enableMouseTracking: false
    }, 
    //Большой БАБС
    {
        name: 'Большой БАБС 187',
        type: 'scatter',
        inverted: true,
        data: [[174,-71],
[-70,-174],
[-174,70],
[71,174]],
        color: Highcharts.getOptions().colors[6],
       // enableMouseTracking: false
    },              
    //Большой тайник
    {
        name: 'Большой тайник 212',
        type: 'scatter',
        inverted: true,
        data: [[141,-159],
[-158,-142],
[-141,158],
[158,141]],
        color: Highcharts.getOptions().colors[1],
       // enableMouseTracking: false
    }, 

    //УНИКИ    
    {
        name: 'Уники 59',
        type: 'scatter',
        inverted: true,
        data: [[0,59],[46,37],[-57,-14],[58,-12],[28,-52],[-25,-53],[-47,35]],
        color: Highcharts.getOptions().colors[0],
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
			  [30,34],[43,12],[17,-41]]
        
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
