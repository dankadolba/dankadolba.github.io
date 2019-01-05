Highcharts.chart('container', {
    chart: {
                zoomType: 'xy',
        
    },
    title: {
        text: 'Arts'
    },
    subtitle: {
        text: '2018-2018'
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
    {
        name: 'Большие прочки/Great Architect',
        type: 'scatter',
        color: Highcharts.getOptions().colors[2],
        data: [
            [-61,-62],[-61,60],[58,61],[56,-62]]
    },{
        
        name: 'Большие скорости/Great boots',
        type: 'scatter',
        color: Highcharts.getOptions().colors[3],
        data: [
            [-100,-35],[-32,103],[101,38],[35,-102]]               
    },{
        
        name: 'Большие разведки/Great eye',
        type: 'scatter',
        color: Highcharts.getOptions().colors[4],
        data: [
            [77,199],[199,-77],[-77,-199],[-199,77]]               
    },{
        
        name: 'Большие диеты/Great diet',
        type: 'scatter',
        color: Highcharts.getOptions().colors[5],
        data: [
            [-127,16],[16,126],[128,-17],[-17,-127]]               
    },
    {
        
        name: 'Большие скорострои/Great trainer',
        type: 'scatter',
        color: Highcharts.getOptions().colors[6],
        data: [
            [-125,81],[81,125],[125,-82],[-81,-125]]               
    },
    {
        
        name: 'Большие БАБС/Great GWGG',
        type: 'scatter',
        color: Highcharts.getOptions().colors[7],
        data: [
            [-87,147],[146,87],[87,-146],[-146,-88]]               
    },   
    {
        
        name: 'Большие тайники/Great confusion',
        type: 'scatter',
        color: Highcharts.getOptions().colors[8],
        data: [
            [-17,191],[191,17],[17,-190],[-191,-17]]               
    },
    {
        
        name: 'Уники/Unique',
        type: 'scatter',
        color: Highcharts.getOptions().colors[9],
        data: [
            [-34,-44],[-58,0],[50,-21],[-34,43],[10,51],[47,25],[15,-48]]               
    },
    {
        name: 'Малые прочки/Small architect',
        type: 'scatter',
        color: Highcharts.getOptions().colors[2],
        data: [
            [-204,-204],[-278,74],[-75,277],[204,204],[278,-75],[75,-278]]
    },{
        
        name: 'Малые скорости/Small boots',
        type: 'scatter',
        color: Highcharts.getOptions().colors[3],
        data: [
            [-110,-234],[-258,-22],[-148,213],[110,234],[258,21],[148,-212]]               
    },{
        
        name: 'Малые разведки/Small eye',
        type: 'scatter',
        color: Highcharts.getOptions().colors[4],
        data: [
            [110,-31],[29,-111],[-81,-82],[-111,29],[-31,111],[81,80]]               
    },{
        
        name: 'Малые диеты/Small diet',
        type: 'scatter',
        color: Highcharts.getOptions().colors[5],
        data: [
            [-20,-230],[-209,-97],[-188,133],[20,228],[209,97],[189,-131]]               
    },
    {
        
        name: 'Малые скорострои/Small trainer',
        type: 'scatter',
        color: Highcharts.getOptions().colors[6],
        data: [
            [52,-196],[-143,-144],[-195,51],[-52,194],[143,143],[195,-52]]               
    },
    {
        
        name: 'Малые БАБС/Small GWGG',
        type: 'scatter',
        color: Highcharts.getOptions().colors[7],
        data: [
            [98,-142],[-72,-157],[-172,-12],[-100,142],[72,157],[172,14]]               
    },   
    {
        
        name: 'Малые тайники/Small confusion',
        type: 'scatter',
        color: Highcharts.getOptions().colors[8],
        data: [
            [118,-82],[-13,-144],[-130,-61],[-118,83],[12,144],[131,61]]               
    },
    {
        
        name: 'Книжки/Fools',
        type: 'scatter',
        color: Highcharts.getOptions().colors[10],
        data: [
            [-126,-173],[-202,66],[202,-66],[-126,173],[126,-174],[202,66],[1,213],[126,173],[0,-213],[-202,-66]]               
    }
    ],
    tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '{point.x}, {point.y}'
    }
});