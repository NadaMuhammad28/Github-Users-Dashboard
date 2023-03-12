import ReactFC from "react-fusioncharts";

import FusionCharts from "fusioncharts";

// Include the chart type
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, FusionTheme, Chart);

// STEP 3 - Creating the JSON object to store the chart configurations

const MostForkedChart = ({ data }) => {
  const chartConfigs = {
    type: "bar2d", // The chart type
    width: "100%", // Width of the chart
    height: 400, // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Most Forked",
        yAxisName: "Forks",
        xAxisName: "Repos",
        xAxisNameFontSize: 16,
        yAxisNameFontSize: 16,
        captionFontColor: "#f1f5f8",
        labelFontColor: " #bfdfff",

        showCanvasBorder: 0,
        showAlternateVGridColor: 0,
        usePlotGradientColor: 0,
        valueFontSize: 16,
        placeValuesInside: 0,
        divLineColor: "#102a42",
        divLineAlpha: 15,
        captionFontBold: 0,
        captionFontSize: 20,
        captionFont: "Roboto",
        baseFont: "Open Sans",
        baseFontSize: 12,
        baseFontColor: "#617d98",
        smartLineColor: "#617d98",
        showShadow: 0,
        showPlotBorder: 0,
        paletteColors:
          "#2caeba, #5D62B5, #FFC533, #F2726F, #8d6e63, #1de9b6, #6E80CA",
        bgColor: "#202546",
        bgAlpha: "100",
        showBorder: 0,
        theme: "fusion",
        legenditemfontcolor: "#bfdfff",
      },
      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default MostForkedChart;
