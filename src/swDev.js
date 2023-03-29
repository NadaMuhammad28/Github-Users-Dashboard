export default function sw() {
  //check if the browser supports sw, navigator--> obj that holds browser info (BOM)
  //   if ("serviceWorker" in navigator) {
  //     //register sw
  //     navigator.serviceWorker
  //       .register("/sw.js")
  //       .then((res) => res)
  //       .catch((e) => console.log("error", e.message));
  //   }
  // }
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) =>
          console.log("Service Worker registered:", registration)
        )
        .catch((error) =>
          console.error("Error registering Service Worker:", error)
        );
    });
  }
}
