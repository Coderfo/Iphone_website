import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import App from './App.jsx'
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://ac992809744af1fe778ebb4220771875@o4508883494043648.ingest.us.sentry.io/4508883502039040",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect,
    }),
    Sentry.replayIntegration(),
  ],
 
  tracesSampleRate: 1.0, 
  
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
 
  replaysSessionSampleRate: 0.1, 
  replaysOnErrorSampleRate: 1.0,
});



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
