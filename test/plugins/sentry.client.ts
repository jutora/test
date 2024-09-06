import { defineNuxtPlugin, useRuntimeConfig } from 'nuxt/app';
import * as Sentry from '@sentry/vue';


export default defineNuxtPlugin({
  name: 'sentry',
  parallel: true,
  async setup(nuxtApp) {
    Sentry.init({
      app: nuxtApp.vueApp,
      dsn: "https://152c36093a1009868a8f8a8b5b96d3b9@o226357.ingest.us.sentry.io/4507908212719616",
      integrations: [
        Sentry.browserTracingIntegration(),
      ],
      enabled: true,
      tracesSampleRate: 1.0,
      replaysSessionSampleRate: 0.1,
      replaysOnErrorSampleRate: 1.0,
    });

  }
})
