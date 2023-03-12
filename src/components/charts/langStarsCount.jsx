import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);
const StarsPerLang = ({ data }) => {
  const chartConfigs = {
    type: "doughnut2d",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Stars Per Language",
        decimals: 0,
        pieRadius: "40%",
        doughnutRadius: "60%",
        showPercentValues: 0,
        captionFontBold: 0,
        captionFontSize: 16,
        captionFont: "Roboto",
        baseFont: "Open Sans",
        baseFontSize: 14,
        captionFontColor: "#f1f5f8",
        labelFontColor: " #bfdfff",
        smartLineColor: "#137fc0",
        pieRadius: "45%",
        doughnutRadius: "50%",
        showShadow: "50",
        valueBorderColor: "#000",

        showPlotBorder: 0,

        use3DLighting: 0,
        useDataPlotColorForLabels: 0,
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

export default StarsPerLang;
