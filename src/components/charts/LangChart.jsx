import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);
const LangChart = ({ data }) => {
  const chartConfigs = {
    type: "pie3d",
    width: "100%",
    height: 400,
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Languages",
        captionFontColor: "#f1f5f8",
        labelFontColor: " #bfdfff",
        decimals: 1,
        bgColor: "#202546",
        bgAlpha: "100",
        theme: "fusion",
        legenditemfontcolor: "#bfdfff",
      },
      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default LangChart;
