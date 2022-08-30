

const smallOption = {
    "textStyle": {
        "fontSize" : 10
    },
    "title": {
        "top": 5,
        "textStyle":{
            "fontSize": 10
        },
        "subtextStyle": {
            "fontSize" : 8
        }
    },
    "legend": {
        "show": false,

    },
    "toolbox": {
        "show": false
    },
    "grid":[
        {
            "right": 20,
            "top" : 40
        },
        {
            "right": 20
        }
    ],
    "xAxis":[{
        "nameTextStyle": {
            "fontSize" : 8
        },
        "axisLabel":{
            "fontSize": 8
        }
    },
    {
        "nameTextStyle": {
            "fontSize" : 8
        },
        "axisLabel":{
            "fontSize": 8
        }
    }
],
    "yAxis":[ {
        "nameTextStyle": {
            "fontSize" : 8
        },
        "axisLabel":{
            "fontSize": 8
        },
        "splitNumber" :3
    },
    {
        "nameTextStyle": {
            "fontSize" : 8
        },
        "axisLabel":{
            "fontSize": 8
        },
        "splitNumber" :3
    }
 ]


};

const mediumOption = {
        "textStyle": {
            "fontSize" : 12
        },
        "title": {
            "top": 10,
            "textStyle":{
                "fontSize": 12
            },
            "subtextStyle": {
                "fontSize" : 10
            }
        },
        "legend": {
            "show": true,
            "textStyle":{
                "fontSize": 10
            },
        },
        "toolbox": {
            "show": true
        },
        "grid":[
            {
                "right": 180,
                "top" : 80
            },
            {
                "right": 180
            }
        ],
        "xAxis":[{
            "nameTextStyle": {
                "fontSize" : 10
            },
            "axisLabel":{
                "fontSize": 10
            }
        },
        {
            "nameTextStyle": {
                "fontSize" : 10
            },
            "axisLabel":{
                "fontSize": 10
            }
        }
    ],
        "yAxis":[ {
            "nameTextStyle": {
                "fontSize" : 10
            },
            "axisLabel":{
                "fontSize": 10
            },
            "splitNumber" :3
        },
        {
            "nameTextStyle": {
                "fontSize" : 10
            },
            "axisLabel":{
                "fontSize": 10
            },
            "splitNumber" :3
        }
     ]
       
};
const largeOption = {
    "textStyle": {
        "fontSize" : 12
    },
    "title": {
        "top": 10,
        "textStyle":{
            "fontSize": 18
        },
        "subtextStyle": {
            "fontSize" : 12
        }
    },
    "legend": {
        "show": true,
        "textStyle":{
            "fontSize": 12
        },
    },
    "toolbox": {
        "show": true
    },
   
    "grid":[
        {
            "right": 200,
            "top" : 80
        },
        {
            "right": 200
        }
    ],
    "xAxis":[{
        "nameTextStyle": {
            "fontSize" : 12
        },
        "axisLabel":{
            "fontSize": 12
        }
    },
    {
        "nameTextStyle": {
            "fontSize" : 12
        },
        "axisLabel":{
            "fontSize": 12
        }
    }
],
    "yAxis":[ {
        "nameTextStyle": {
            "fontSize" : 12
        },
        "axisLabel":{
            "fontSize": 12
        },
        "splitNumber" :5
    },
    {
        "nameTextStyle": {
            "fontSize" : 12
        },
        "axisLabel":{
            "fontSize": 12
        },
        "splitNumber" :5
    }
 ]
};

function mediumChartSize(mq){

    if (mq.matches ){
        // alert("screen is medium now")
        var myChart = echarts.getInstanceByDom(document.getElementById('echart'));
        myChart.setOption(mediumOption);
        myChart.resize();
    }
    else {
        // alert("screen is large now")
        var myChart = echarts.getInstanceByDom(document.getElementById('echart'));
        myChart.setOption(largeOption);
        myChart.resize();
    }
    
}

function smallChartSize(mq){

    if (mq.matches){
        //  alert("screen is small now")
        var myChart = echarts.getInstanceByDom(document.getElementById('echart'));
        myChart.setOption(smallOption);
        myChart.resize();
    }
}

const mediumChartWindow = window.matchMedia("(max-width: 850px)");

const smallChartWindow = window.matchMedia("(max-width: 500px)");

smallChartWindow.addListener(smallChartSize)
mediumChartWindow.addListener(mediumChartSize)
// function GetQueryValues() {
    
//     var options = JSON.parse('{{ejsons | tojson | safe }}');
//     var sel_json = document.getElementById("echartselect").value;
//     var option = options[sel_json];
//     var myChart = echarts.getInstanceByDom(document.getElementById('echart'));
    
    
//     myChart.setOption(option,true);
// }


function toggleHide(id) {
    var obj = document.getElementById(id);
            if (obj.style.visibility == 'visible') {
                obj.style.visibility = 'hidden';
            }
            else {
                obj.style.visibility = 'visible';
            }
        }