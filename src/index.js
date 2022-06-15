import React, { Suspense } from "react";
import {createRoot} from "react-dom/client";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import App from "./App";
import store from "./reducers";
import { Provider } from "react-redux";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';


Sentry.init({
  dsn: "https://6c16d34365334e0fbee992044f9d223b@o575799.ingest.sentry.io/6251530",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const root = createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={<style> html {height: 100%;
};body,html {height: 100vh;font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.backgroundImage {
   background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSONcgPeMWZtUQFX46s7zVeRnjztnucUtYLKLsiq3J3qBkKAXWFQLrTxIA&s=10");
   filter: blur(8px);
   height: 100%;
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
}
.loader {
  position: absolute;
  top: calc(50% - 32px);
  left: calc(50% - 32px);
  width: 64px;
  height: 64px;
  border-radius: 50%;
  perspective: 800px;
}
.row {
  position: absolute;
  top: calc(50% - -20px);
  left: calc(50% - 32px);
  width: 64px;
  height: 64px;
  border-radius: 50%;
  perspective: 800px;
  }
.inner {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;  
}

.inner.one {
  left: 0%;
  top: 0%;
  animation: rotate-one 1s linear infinite;
  border-bottom: 3px solid #EFEFFA;
}

.inner.two {
  right: 0%;
  top: 0%;
  animation: rotate-two 1s linear infinite;
  border-right: 3px solid #EFEFFA;
}

.inner.three {
  right: 0%;
  bottom: 0%;
  animation: rotate-three 1s linear infinite;
  border-top: 3px solid #EFEFFA;
}

@keyframes rotate-one {
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
}

@keyframes rotate-two {
  0% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
}

@keyframes rotate-three {
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
}
</style>





<div class="backgroundImage"></div>

<div class="loader">
  
  <div class="inner one"></div>
  <div class="inner two"></div>
  <div class="inner three"></div>
  
  
  
</div>

<div class="row">
     <p style="color:white;text-align : center"><strong>Initializing....</strong></p> 
  </div>`




}>
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>
);

serviceWorkerRegistration.register();
