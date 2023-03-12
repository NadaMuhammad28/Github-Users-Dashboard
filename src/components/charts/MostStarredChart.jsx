import ReactFC from "react-fusioncharts";

import FusionCharts from "fusioncharts";

// Include the chart type
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, FusionTheme, Chart);

// STEP 3 - Creating the JSON object to store the chart configurations
const MostStarredChart = ({ data }) => {
  const chartConfigs = {
    type: "column2d",
    width: "100%",
    height: 400,
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Most Popular",
        yAxisName: "Stars",
        yAxisNameFontSize: 16,
        xAxisName: "Repos",
        xAxisNameFontSize: 16,
        showCanvasBorder: 0,
        showAlternateHGridColor: 0,
        usePlotGradientColor: 0,
        valueFontSize: 16,
        placeValuesInside: 0,
        divLineColor: "#5664b3",
        divLineAlpha: 15,
        captionFontColor: "#f1f5f8",
        captionFontBold: 0,
        captionFontSize: 20,
        captionFont: "Roboto",
        baseFont: "Open Sans",
        baseFontSize: 12,
        baseFontColor: "#617d98",
        smartLineColor: "#617d98",
        showHoverEffect: true,
        labelFontColor: " #bfdfff",
        showShadow: 0,
        showPlotBorder: 0,
        legenditemfontcolor: "#bfdfff",

        paletteColors:
          "#2caeba, #5D62B5, #FFC533, #F2726F, #8d6e63, #1de9b6, #6E80CA, #202546",
        bgColor: "#202546",
        bgAlpha: "100",
        showBorder: 0,
        theme: "fusion",
      },
      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default MostStarredChart;
