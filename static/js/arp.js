(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    var colorPalette = ['#fb1f11','#1790ff', '#5621a9',  '#edb619','#3dc803','#8080ff', '#ff968d', '#f83be4'];
    echarts.registerTheme('arp', {
        color: colorPalette,
        backgroundColor: "#cedfe9",
        
        graph: {
            color: colorPalette
        },
        textStyle :{
            fontFamily: "Satoshi-Regular",
            color: "black",
            fontSize: 14
            
        },
        subtextStyle: {
            color: "black"
        },
        title: {
            textStyle: {
                color: "black",
                // fontWeight: "normal"
            },
            subtextStyle: {
                color: "black",
                fontSize: 14
            }
        },
        legend:{
            textStyle: {
                color: "black"
            }
        },
        toolbox:{
            iconStyle:{
                borderColor: "black"
            }
        },
        visualMap:{
            textStyle:{
                color:"black"
            }
        }
     
        
    });
}));