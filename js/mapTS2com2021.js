Highcharts.chart('container', {
    chart: {
                zoomType: 'xy',
        
    },
    title: {
        text: 'ART com2 2020-2021'
    },
    subtitle: {
        text: 'test'
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
        data: [[-175,115],
        [12,210],
        [188,94],
        [175,-115],
        [-12,-210],
        [-188,-94],[-160,136],
        [38,207],
        [198,71],
        [160,-136],
        [-38,-207],
        [-198,-71],[-140,157],
        [66,199],
        [206,42],
        [140,-157],
        [-66,-199],
        [-206,-42],[-113,177],
        [96,187],
        [210,10],
        [113,-177],
        [-96,-187],
        [-210,-10],[-84,192],
        [124,169],
        [209,-23],
        [84,-192],
        [-124,-169],
        [-209,23],[-53,203],
        [149,148],
        [203,-56],
        [53,-203],
        [-149,-148],
        [-203,56],[-21,209],
        [171,122],
        [191,-87],
        [21,-209],
        [-171,-122],
        [-191,87],
    ],
color: Highcharts.getOptions().colors[0],       // enableMouseTracking: false
    },
    //малые тайники
    {
        name: 'Rivals slight confusion / Малые тайники 153',
        type: 'scatter',
        inverted: true,
        data: [[-149,-18],
        [-90,120],
        [59,138],
        [149,18],
        [90,-120],
        [-59,-138],[-150,1],
        [-74,130],
        [75,129],
        [150,-1],
        [74,-130],
        [-75,-129],[-148,21],
        [-56,139],
        [93,118],
        [148,-21],
        [56,-139],
        [-93,-118],[-143,44],
        [-33,146],
        [110,102],
        [143,-44],
        [33,-146],
        [-110,-102],[-134,66],
        [-10,149],
        [125,83],
        [134,-66],
        [10,-149],
        [-125,-83],[-122,86],
        [14,149],
        [136,63],
        [122,-86],
        [-14,-149],
        [-136,-63],[-107,105],
        [37,145],
        [144,41],
        [107,-105],
        [-37,-145],
        [-144,-41],
    ],
color: Highcharts.getOptions().colors[1],    },
    //малая прочка    
    {
        name: 'The architects slight secret /Малая прочка 308',
        type: 'scatter',
        inverted: true,
        data: [[20,299],
        [269,133],
        [249,-167],
        [-20,-299],
        [-269,-133],
        [-249,167],[56,295],
        [283,99],
        [227,-196],
        [-56,-295],
        [-283,-99],
        [-227,196],[97,284],
        [294,58],
        [198,-226],
        [-97,-284],
        [-294,-58],
        [-198,226],[140,265],
        [300,12],
        [160,-254],
        [-140,-265],
        [-300,-12],
        [-160,254],[180,240],
        [298,-36],
        [118,-276],
        [-180,-240],
        [-298,36],
        [-118,276],[215,209],
        [289,-82],
        [74,-291],
        [-215,-209],
        [-289,82],
        [-74,291],[245,173],
        [272,-126],
        [27,-299],
        [-245,-173],
        [-272,126],
        [-27,299]
    ],
color: Highcharts.getOptions().colors[2],    }, 
    //малая скорость
    {
        name: 'The slight titan boots / Малая скорость 277',
        type: 'scatter',
        inverted: true,
        data: [[-77,258],
        [185,196],
        [262,-62],
        [77,-258],
        [-185,-196],
        [-262,62],[-45,265],
        [207,172],
        [252,-94],
        [45,-265],
        [-207,-172],
        [-252,94],[-8,269],
        [229,141],
        [237,-128],
        [8,-269],
        [-229,-141],
        [-237,128],[34,267],
        [248,104],
        [214,-163],
        [-34,-267],
        [-248,-104],
        [-214,163],[76,258],
        [262,64],
        [186,-195],
        [-76,-258],
        [-262,-64],
        [-186,195],[115,243],
        [268,22],
        [153,-221],
        [-115,-243],
        [-268,-22],
        [-153,221],[152,222],
        [268,-20],
        [117,-243],
        [-152,-222],
        [-268,20],
        [-117,243],
    ],
color: Highcharts.getOptions().colors[3],    },
   //малая разведка    
    {
        name: 'The eagles slight eyes / Малая разведка 122',
        type: 'scatter',
        inverted: true,
        data: [[-106,-54],
        [-100,65],
        [6,119],
        [106,54],
        [100,-65],
        [-6,-119],[-112,-41],
        [-91,76],
        [20,117],
        [112,41],
        [91,-76],
        [-20,-117],[-116,-25],
        [-80,88],
        [37,113],
        [116,25],
        [80,-88],
        [-37,-113],[-119,-6],
        [-65,100],
        [54,106],
        [119,6],
        [65,-100],
        [-54,-106],[-118,12],
        [-49,109],
        [70,96],
        [118,-12],
        [49,-109],
        [-70,-96],[-115,31],
        [-31,115],
        [84,84],
        [115,-31],
        [31,-115],
        [-84,-84],[-109,48],
        [-13,118],
        [96,70],
        [109,-48],
        [13,-118],
        [-96,-70],
    ],
color: Highcharts.getOptions().colors[4],    },
	
	
    //малая диета
    {
        name: 'Slight diet control / Малая диета 246',
        type: 'scatter',
        inverted: true,
        data: [[-142,193],
        [96,220],
        [238,27],
        [142,-193],
        [-96,-220],
        [-238,-27],[-118,209],
        [122,206],
        [240,-3],
        [118,-209],
        [-122,-206],
        [-240,3],[-87,223],
        [150,187],
        [237,-36],
        [87,-223],
        [-150,-187],
        [-237,36],[-51,234],
        [177,162],
        [228,-73],
        [51,-234],
        [-177,-162],
        [-228,73],[-14,239],
        [200,132],
        [214,-107],
        [14,-239],
        [-200,-132],
        [-214,107],[23,238],
        [218,99],
        [195,-140],
        [-23,-238],
        [-218,-99],
        [-195,140],[60,232],
        [231,64],
        [171,-168],
        [-60,-232],
        [-231,-64],
        [-171,168],
    ],
color: Highcharts.getOptions().colors[5],    },


    //Малый дурак
    {
        name: 'Artefact of the slight fool / Малый дурак 227',
        type: 'scatter',
        inverted: true,
        data: [[-203,-89],
        [-217,48],
        [-147,166],
        [-21,221],
        [112,191],
        [203,89],
        [217,-48],
        [147,-166],
        [21,-221],
        [-112,-191],[-213,-63],
        [-209,74],
        [-126,183],
        [6,222],
        [135,176],
        [213,63],
        [209,-74],
        [126,-183],
        [-6,-222],
        [-135,-176],[-219,-33],
        [-197,102],
        [-99,198],
        [36,219],
        [158,156],
        [219,33],
        [197,-102],
        [99,-198],
        [-36,-219],
        [-158,-156],[-222,2],
        [-178,132],
        [-67,212],
        [70,210],
        [180,129],
        [222,-2],
        [178,-132],
        [67,-212],
        [-70,-210],
        [-180,-129],[-219,36],
        [-156,158],
        [-33,219],
        [102,197],
        [198,99],
        [219,-36],
        [156,-158],
        [33,-219],
        [-102,-197],
        [-198,-99],[-210,70],
        [-129,180],
        [2,222],
        [132,178],
        [212,67],
        [210,-70],
        [129,-180],
        [-2,-222],
        [-132,-178],
        [-212,-67],[-161,153],
        [-41,218],
        [95,200],
        [195,106],
        [220,-29],
        [161,-153],
        [41,-218],
        [-95,-200],
        [-195,-106],
        [-220,29],[-138,174],
        [-10,222],
        [122,185],
        [208,78],
        [214,-59],
        [138,-174],
        [10,-222],
        [-122,-185],
        [-208,-78],
        [-214,59],[-109,193],
        [25,220],
        [150,164],
        [217,44],
        [202,-92],
        [109,-193],
        [-25,-220],
        [-150,-164],
        [-217,-44],
        [-202,92],[-78,208],
        [59,214],
        [174,138],
        [222,10],
        [185,-122],
        [78,-208],
        [-59,-214],
        [-174,-138],
        [-222,-10],
        [-185,122],[-44,217],
        [92,202],
        [193,109],
        [220,-25],
        [164,-150],
        [44,-217],
        [-92,-202],
        [-193,-109],
        [-220,25],
        [-164,150],[52,216],
        [169,144],
        [221,18],
        [189,-116],
        [85,-205],
        [-52,-216],
        [-169,-144],
        [-221,-18],
        [-189,116],
        [-85,205],[81,206],
        [187,119],
        [221,-13],
        [171,-141],
        [56,-215],
        [-81,-206],
        [-187,-119],
        [-221,13],
        [-171,141],
        [-56,215],[141,171],
        [215,56],
        [206,-81],
        [119,-187],
        [-13,-221],
        [-141,-171],
        [-215,-56],
        [-206,81],
        [-119,187],
        [13,221],[166,147],
        [221,21],
        [191,-112],
        [89,-203],
        [-48,-217],
        [-166,-147],
        [-221,-21],
        [-191,112],
        [-89,203],
        [48,217],
    ],
color: Highcharts.getOptions().colors[7],    },	

    //малый БАБС
    {
        name: 'Slight storage masterplan / Малый БАБС 185',
        type: 'scatter',
        inverted: true,
        data: [[-174,42],
        [-51,172],
        [123,130],
        [174,-42],
        [51,-172],
        [-123,-130],[-168,63],
        [-30,177],
        [138,114],
        [168,-63],
        [30,-177],
        [-138,-114],[-158,85],
        [-5,179],
        [153,94],
        [158,-85],
        [5,-179],
        [-153,-94],[-142,109],
        [23,178],
        [166,69],
        [142,-109],
        [-23,-178],
        [-166,-69],[-124,130],
        [51,172],
        [174,42],
        [124,-130],
        [-51,-172],
        [-174,-42],[-102,148],
        [77,162],
        [179,14],
        [102,-148],
        [-77,-162],
        [-179,-14],[-77,162],
        [102,148],
        [179,-14],
        [77,-162],
        [-102,-148],
        [-179,14],
    ],
color: Highcharts.getOptions().colors[6],    },
        
    // БОЛЬШИЕ АРТЫ
        
    //Большая прочка
    {
        name: 'The architects great secret / Большая прочка 91',
        type: 'scatter',
        inverted: true,
        data: [[6,88],
        [88,-6],
        [-6,-88],
        [-88,6],[17,86],
        [86,-17],
        [-17,-86],
        [-86,17],[29,83],
        [83,-29],
        [-29,-83],
        [-83,29],[41,78],
        [78,-41],
        [-41,-78],
        [-78,41],[53,70],
        [70,-53],
        [-53,-70],
        [-70,53],[63,61],
        [61,-63],
        [-63,-61],
        [-61,63],[72,50],
        [50,-72],
        [-72,-50],
        [-50,72],[79,39],
        [39,-79],
        [-79,-39],
        [-39,79],[83,29],
        [29,-83],
        [-83,-29],
        [-29,83],[86,17],
        [17,-86],
        [-86,-17],
        [-17,86],[88,3],
        [3,-88],
        [-88,-3],
        [-3,88],
    ],
color: Highcharts.getOptions().colors[2],       // enableMouseTracking: false
    }, 



    //Большая скорость
    {
        name: 'The great titan boots / Большая скорость 113',
        type: 'scatter',
        inverted: true,
        data: [[54,96],
        [96,-54],
        [-54,-96],
        [-96,54],[65,89],
        [89,-65],
        [-65,-89],
        [-89,65],[77,79],
        [79,-77],
        [-77,-79],
        [-79,77],[89,66],
        [66,-89],
        [-89,-66],
        [-66,89],[98,51],
        [51,-98],
        [-98,-51],
        [-51,98],[105,35],
        [35,-105],
        [-105,-35],
        [-35,105],[109,19],
        [19,-109],
        [-109,-19],
        [-19,109],[110,1],
        [1,-110],
        [-110,-1],
        [-1,110],[110,-12],
        [-12,-110],
        [-110,12],
        [12,110],[107,-27],
        [-27,-107],
        [-107,27],
        [27,107],[101,-44],
        [-44,-101],
        [-101,44],
        [44,101],
    ],
color: Highcharts.getOptions().colors[3],       // enableMouseTracking: false
    },
    //Большая разведка
    {
        name: 'The eagles great eyes / Большая разведка 228',
        type: 'scatter',
        inverted: true,
        data: [[78,-207],
        [-207,-78],
        [-78,207],
        [207,78],[52,-215],
        [-215,-52],
        [-52,215],
        [215,52],[52,-215],
        [-215,-52],
        [-52,215],
        [215,52],[22,-220],
        [-220,-22],
        [-22,220],
        [220,22],[-13,-221],
        [-221,13],
        [13,221],
        [221,-13],[-47,-216],
        [-216,47],
        [47,216],
        [216,-47],[-80,-206],
        [-206,80],
        [80,206],
        [206,-80],[-112,-191],
        [-191,112],
        [112,191],
        [191,-112],[-140,-171],
        [-171,140],
        [140,171],
        [171,-140],[-160,-153],
        [-153,160],
        [160,153],
        [153,-160],[-180,-129],
        [-129,180],
        [180,129],
        [129,-180],[-198,-99],
        [-99,198],
        [198,99],
        [99,-198],
    ],
color: Highcharts.getOptions().colors[4],       // enableMouseTracking: false
    },  
    //Большая диета
    {
        name: 'Great diet control / Большая диета 137',
        type: 'scatter',
        inverted: true,
        data: [[109,75],
        [75,-109],
        [-109,-75],
        [-75,109],[118,61],
        [61,-118],
        [-118,-61],
        [-61,118],[125,44],
        [44,-125],
        [-125,-44],
        [-44,125],[130,24],
        [24,-130],
        [-130,-24],
        [-24,130],[132,3],
        [3,-132],
        [-132,-3],
        [-3,132],[131,-18],
        [-18,-131],
        [-131,18],
        [18,131],[127,-38],
        [-38,-127],
        [-127,38],
        [38,127],[119,-57],
        [-57,-119],
        [-119,57],
        [57,119],[112,-71],
        [-71,-112],
        [-112,71],
        [71,112],[101,-86],
        [-86,-101],
        [-101,86],
        [86,101],[86,-101],
        [-101,-86],
        [-86,101],
        [101,86],
    ],
        color: Highcharts.getOptions().colors[5],
       // enableMouseTracking: false
    },
    //Большой тренер
    {
        name: 'The trainers great talent / Большой тренер 160',
        type: 'scatter',
        inverted: true,
        data: [[153,23],
        [23,-153],
        [-153,-23],
        [-23,153],[155,4],
        [4,-155],
        [-155,-4],
        [-4,155],[154,-17],
        [-17,-154],
        [-154,17],
        [17,154],[150,-41],
        [-41,-150],
        [-150,41],
        [41,150],[141,-64],
        [-64,-141],
        [-141,64],
        [64,141],[130,-85],
        [-85,-130],
        [-130,85],
        [85,130],[115,-105],
        [-105,-115],
        [-115,105],
        [105,115],[97,-121],
        [-121,-97],
        [-97,121],
        [121,97],[81,-132],
        [-132,-81],
        [-81,132],
        [132,81],[62,-142],
        [-142,-62],
        [-62,142],
        [142,62],[39,-150],
        [-150,-39],
        [-39,150],
        [150,39],
    ],
        color: Highcharts.getOptions().colors[0],
       // enableMouseTracking: false
    }, 
    //Большой БАБС
    {
        name: 'Great storage masterplan / Большой БАБС 182',
        type: 'scatter',
        inverted: true,
        data: [[169,-53],
        [-53,-169],
        [-169,53],
        [53,169],[162,-73],
        [-73,-162],
        [-162,73],
        [73,162],[150,-95],
        [-95,-150],
        [-150,95],
        [95,150],[133,-117],
        [-117,-133],
        [-133,117],
        [117,133],[113,-136],
        [-136,-113],
        [-113,136],
        [136,113],[91,-152],
        [-152,-91],
        [-91,152],
        [152,91],[66,-165],
        [-165,-66],
        [-66,165],
        [165,66],[39,-173],
        [-173,-39],
        [-39,173],
        [173,39],[18,-176],
        [-176,-18],
        [-18,176],
        [176,18],[-7,-177],
        [-177,7],
        [7,177],
        [177,-7],[-35,-174],
        [-174,35],
        [35,174],
        [174,-35],
    ],
        color: Highcharts.getOptions().colors[6],
       // enableMouseTracking: false
    },              
    //Большой тайник
    {
        name: 'Rivals great confusion / Большой тайник 205',
        type: 'scatter',
        inverted: true,
        data: [[146,-137],
        [-137,-146],
        [-146,137],
        [137,146],[128,-154],
        [-154,-128],
        [-128,154],
        [154,128],[105,-170],
        [-170,-105],
        [-105,170],
        [170,105],[78,-184],
        [-184,-78],
        [-78,184],
        [184,78],[48,-194],
        [-194,-48],
        [-48,194],
        [194,48],[17,-199],
        [-199,-17],
        [-17,199],
        [199,17],[-15,-199],
        [-199,15],
        [15,199],
        [199,-15],[-46,-195],
        [-195,46],
        [46,195],
        [195,-46],[-69,-188],
        [-188,69],
        [69,188],
        [188,-69],[-94,-176],
        [-176,94],
        [94,176],
        [176,-94],[-121,-159],
        [-159,121],
        [121,159],
        [159,-121],
    ],
        color: Highcharts.getOptions().colors[1],
       // enableMouseTracking: false
    }, 

    //УНИКИ    
    {
        name: 'Unique / Уники 57',
        type: 'scatter',
        inverted: true,
        data: [[-6,55],
        [40,38],
        [54,-7],
        [28,-47],
        [-52,-17],
        [-19,-52],
        [-46,30],[1,55],
        [44,33],
        [53,-14],
        [23,-50],
        [-54,-11],
        [-25,-49],
        [-42,35],[9,54],
        [48,27],
        [51,-21],
        [15,-53],
        [-55,-3],
        [-32,-45],
        [-37,41],[17,52],
        [52,19],
        [47,-29],
        [7,-55],
        [-55,5],
        [-38,-39],
        [-30,46],[25,49],
        [54,11],
        [42,-36],
        [-2,-55],
        [-53,14],
        [-44,-33],
        [-22,50],[32,44],
        [55,2],
        [36,-42],
        [-10,-54],
        [-50,22],
        [-49,-26],
        [-14,53],[39,39],
        [55,-7],
        [29,-47],
        [-19,-52],
        [-46,30],
        [-52,-18],
        [-6,55],[45,32],
        [53,-15],
        [21,-51],
        [-26,-48],
        [-41,37],
        [-54,-9],
        [3,55],[48,26],
        [51,-21],
        [15,-53],
        [-32,-45],
        [-36,41],
        [-55,-3],
        [10,54],[51,20],
        [47,-28],
        [7,-54],
        [-38,-40],
        [-30,46],
        [-55,5],
        [17,52],[54,11],
        [42,-35],
        [-1,-55],
        [-44,-33],
        [-23,50],
        [-53,14],
        [25,49],[55,3],
        [36,-41],
        [-10,-54],
        [-48,-26],
        [-15,53],
        [-50,22],
        [32,44],[55,-6],
        [29,-47],
        [-18,-52],
        [-52,-18],
        [-6,55],
        [-46,29],
        [39,39],[53,-14],
        [21,-51],
        [-26,-48],
        [-54,-10],
        [3,55],
        [-41,36],
        [45,32],[50,-23],
        [13,-53],
        [-33,-44],
        [-55,-1],
        [11,54],
        [-35,42],
        [49,25],[47,-28],
        [7,-55],
        [-38,-39],
        [-55,6],
        [18,52],
        [-30,46],
        [52,19],[43,-35],
        [-1,-55],
        [-44,-34],
        [-53,13],
        [25,49],
        [-23,50],
        [54,11],[37,-41],
        [-10,-54],
        [-48,-26],
        [-51,21],
        [32,45],
        [-15,53],
        [55,3],[30,-46],
        [-18,-52],
        [-52,-18],
        [-47,29],
        [39,39],
        [-6,55],
        [55,-6],[22,-50],
        [-26,-49],
        [-54,-10],
        [-42,36],
        [44,33],
        [2,55],
        [53,-14],[14,-53],
        [-33,-44],
        [-55,-2],
        [-35,42],
        [49,25],
        [11,54],
        [50,-22],
    ],
        color: Highcharts.getOptions().colors[0],
       // enableMouseTracking: false
    }            
    ],
    tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '{point.x}, {point.y}'
    }
});
