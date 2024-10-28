import { Link } from '@remix-run/react'

const width = 1824
const height = 1368
const sizes = [320, 640, 768, 1024, 1366, 1600, 1920]
const types = ['avif', 'webp', 'jpg']

/**
 * decoding="sync|async|auto"
 * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/decoding
 *
 * fetchPriority="high|low|auto"
 * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/fetchPriority
 *
 * Preload Scanner
 * @see https://web.dev/articles/preload-scanner#whats_a_preload_scanner
 */

export default function Test() {
  return (
    <main>
      {/* Above the fold */}
      <section className="h-svh">
        <picture>
          {types.map((type) => (
            <source
              key={type}
              type={`image/${type}`}
              srcSet={sizes
                .map((size) => `/image/spacenet-${size}.${type} ${size}w`)
                .join(',')}
            />
          ))}
          <img
            className="h-full w-full object-cover object-top"
            src="/image/spacenet-1920.jpg"
            alt="Spacenet close-up"
            width={width}
            height={height}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </picture>
      </section>
      <section className="px-6 py-12">
        <picture>
          {types.map((type) => (
            <source
              key={type}
              type={`image/${type}`}
              srcSet={sizes
                .map((size) => `/image/spacenet-${size}.${type} ${size}w`)
                .join(',')}
              sizes="300px"
            />
          ))}
          <img
            className="w-[300px]"
            src="/image/spacenet-1920.jpg"
            alt="Spacenet close-up"
            sizes="300px"
            width={width}
            height={height}
            loading="lazy"
            decoding="async"
          />
        </picture>
      </section>
      <section className="flex justify-between p-6">
        <Link className="btn btn-primary" to="/04-media">
          prev
        </Link>{' '}
        <Link className="btn btn-primary" to="/06-sizes">
          next
        </Link>
      </section>
    </main>
  )
}
