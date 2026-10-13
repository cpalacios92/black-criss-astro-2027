// @ts-check
import { defineConfig } from 'astro/config';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
    build: {
        inlineStylesheets: "always",
    },
    integrations: [
        partytown({
            config: {
                // Esto le dice a Partytown que intercepte y reenvíe los eventos
                forward: ['dataLayer.push', 'gtag'],
            },
        }),
    ],
});