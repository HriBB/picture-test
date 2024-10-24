import { vitePlugin as remix } from '@remix-run/dev'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import { imagetools, pictureFormat } from 'vite-imagetools'
import lqip from 'vite-plugin-lqip'

/**
 * Enable Single Fetch types
 *
 * @see https://remix.run/docs/en/main/guides/single-fetch#enable-single-fetch-types
 */
declare module '@remix-run/node' {
  interface Future {
    unstable_singleFetch: true
  }
}

export default defineConfig({
  plugins: [
    /**
     * Vite plugin for generating LQIP (Low Quality Image Placeholder) images
     *
     * @see https://github.com/drwpow/vite-plugin-lqip
     */
    lqip(),
    /**
     * Vite plugin for image processing
     *
     * @see https://github.com/JonasKruckenberg/imagetools
     */
    imagetools({
      defaultDirectives: (url) => {
        if (url.searchParams.has('hero')) {
          return new URLSearchParams({
            format: 'avif;webp;jpeg',
            w: '640;768;1024;1366;1600;1920',
            as: 'picture',
          })
        }
        if (url.searchParams.has('square')) {
          return new URLSearchParams({
            format: 'avif;webp;jpeg',
            w: '300;600',
            aspect: '1:1',
            as: 'square:300;600',
          })
        }
        return new URLSearchParams()
      },
      extendOutputFormats: (builtins) => ({
        ...builtins,
        square: (config) => async (metadatas) => {
          const basePixels = parseInt(config?.[0] || '')
          const usePixels = parseInt(config?.[1] || '') || basePixels

          if (!basePixels) return pictureFormat()(metadatas)

          const out: Record<string, string[]> = {}
          let img: { src: string; w: number; h: number } | null = null

          metadatas.forEach(({ format, src, width, height }) => {
            if (!format || !src || !width || !height) return
            if (!out[format]) out[format] = []
            const density = width / basePixels
            if (format === 'jpeg' && width === usePixels) {
              img = { src, w: width, h: height }
            }
            out[format].push(`${src} ${density}x`)
          })

          if (!img) return pictureFormat()(metadatas)

          const order = ['avif', 'webp', 'jpeg']
          const sources = Object.fromEntries(
            Object.entries(out)
              .map(([format, srcset]) => [format, srcset.join(', ')])
              .sort((a, b) => order.indexOf(a[0]) - order.indexOf(b[0]))
          )

          return { sources, img }
        },
      }),
    }),
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        unstable_singleFetch: true,
      },
    }),
    tsconfigPaths(),
  ],
})
