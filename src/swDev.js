export default function sw() {
  //check if the browser supports sw, navigator--> obj that holds browser info (BOM)
  if ("serviceWorker" in navigator) {
    //register sw
    navigator.serviceWorker
      .register("/sw.js")
      .then((res) => res)
      .catch((e) => console.log("error", e.message));
  }
}
