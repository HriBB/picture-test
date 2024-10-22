import { OutputMetadata } from 'types/env'

import portraitSm from '~/image/spacenet.jpg?w=300&h=600&format=avif;webp;jpeg&as=meta'
import portraitMd from '~/image/spacenet.jpg?w=600&h=1200&format=avif;webp;jpeg&as=meta'
import landscapeSm from '~/image/spacenet.jpg?w=600&h=300&format=avif;webp;jpeg&as=meta'
import landscapeMd from '~/image/spacenet.jpg?w=1200&h=600&format=avif;webp;jpeg&as=meta'
import landscapeLg from '~/image/spacenet.jpg?w=1600&h=800&format=avif;webp;jpeg&as=meta'
import { Link } from '@remix-run/react'

const img = landscapeMd.find((meta) => meta.format === 'jpeg')

type Orientation = 'portrait' | 'landscape'

/**
 * Sources with width (300w, 600w, 1200w, 1600w)
 */
const sources: Record<Orientation, Record<string, string[]>> = {
  portrait: {
    avif: [],
    webp: [],
    jpeg: [],
  },
  landscape: {
    avif: [],
    webp: [],
    jpeg: [],
  },
}

const addSource = (orientation: Orientation) => (meta: OutputMetadata) => {
  sources[orientation][meta.format].push(`${meta.src} ${meta.width}w`)
}

portraitSm.forEach(addSource('portrait'))
portraitMd.forEach(addSource('portrait'))
landscapeSm.forEach(addSource('landscape'))
landscapeMd.forEach(addSource('landscape'))
landscapeLg.forEach(addSource('landscape'))

/**
 * Sources with density (1x, 2x, 2.5x)
 */
const sourcesDensity: Record<Orientation, Record<string, string[]>> = {
  portrait: {
    avif: [],
    webp: [],
    jpeg: [],
  },
  landscape: {
    avif: [],
    webp: [],
    jpeg: [],
  },
}

const addSourceDensity =
  (orientation: Orientation, density: number) => (meta: OutputMetadata) => {
    sourcesDensity[orientation][meta.format].push(`${meta.src} ${density}x`)
  }

portraitSm.forEach(addSourceDensity('portrait', 1))
portraitMd.forEach(addSourceDensity('portrait', 2))
landscapeSm.forEach(addSourceDensity('landscape', 1))
landscapeMd.forEach(addSourceDensity('landscape', 2))
landscapeLg.forEach(addSourceDensity('landscape', 2.5))

export default function ViteImageTools() {
  return (
    <main>
      <h1 className="absolute top-2 left-2 text-2xl p-2 z-50">
        vite-imagetools
      </h1>
      {img && (
        <div className="w-full h-svh">
          <picture>
            {Object.entries(sources.portrait).map(([format, srcSet]) => (
              <source
                key={format}
                srcSet={srcSet.join(', ')}
                type={`image/${format}`}
                media="(max-width: 1024px) and (orientation: portrait)"
              />
            ))}
            {Object.entries(sources.landscape).map(([format, srcSet]) => (
              <source
                key={format}
                srcSet={srcSet.join(', ')}
                type={`image/${format}`}
                media="(max-width: 1024px) and (orientation: landscape), (min-width: 1025px)"
              />
            ))}
            <img
              src={img.src}
              alt="Portrait"
              width={img.width}
              height={img.height}
              className="w-full h-full object-cover"
            />
          </picture>
        </div>
      )}
      <section className="flex gap-4 justify-between p-6">
        <Link className="btn btn-primary" to="/08-vite-imagetools">
          prev
        </Link>
      </section>
    </main>
  )
}
