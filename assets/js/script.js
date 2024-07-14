function script(text) {
  console.log(
    "%cScript Injection",
    "color: cyan; font-weight: 600; background: black; padding: 0 5px; border-radius: 5px",
    text
  );
}

// ====================================
// SCRIPT INJECTION
// ====================================
const newScript = document.createElement("script");
newScript.setAttribute("defer", "");
newScript.setAttribute("data-domain", window.location);
newScript.setAttribute("src", "https://data.ch3n.cc/js/script.js");
document.head.append(newScript);
script("Injected script 1/3");

script("Injected script 2/3 (More Ad stuff)");

var tab = localStorage.getItem("tab");
if (tab) {
  try {
    // Parse the data, it is in JSON
    var tabData = JSON.parse(tab);
  } catch {
    var tabData = {};
  }
} else {
  var tabData = {};
}

// Set the Tab title if the Tab cloak data is there
if (tabData.title) {
  document.title = tabData.title;
}

document.addEventListener("DOMContentLoaded", function () {
  // Set the Tab icon if the Tab cloak data is there
  if (tabData.icon) {
    var iconLink = document.querySelector('link[rel="icon"]');
    if (iconLink) {
      iconLink.href = tabData.icon;
    } else {
      console.warn('No link element with rel="icon" found');
    }
  }
});

fetch("/assets/json/ads.json")
  .then((response) => response.json())
  .then((data) => {
    if (data.domains.includes(window.location.hostname)) {
      const adscipterz92 = document.createElement("script");
      adscipterz92.setAttribute("async", "");
      adscipterz92.setAttribute(
        "src",
        "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6700774525685317"
      );
      adscipterz92.setAttribute("crossorigin", "anonymous");
      document.head.append(adscipterz92);
      script("Injected script 3/3 (Adsense)");
    } else {
      console.log("Skipping Adsense Injection for this domain.");
    }
  });

// key
var panicKey = localStorage.getItem("panicKey") || "`";
var panicLink =
  localStorage.getItem("PanicLink") || "https://canvas.houstonisd.org/";

document.addEventListener("keydown", function (e) {
  if (e.key === panicKey) {
    window.location.href = panicLink;
  }
});
