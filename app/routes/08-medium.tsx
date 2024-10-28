import { Link } from '@remix-run/react'

const width = 1824
const height = 1368
const sizes = [320, 640, 768, 1024, 1366, 1600, 1920]
const types = ['avif', 'webp', 'jpg']

export default function Test() {
  return (
    <main>
      <section className="px-6 py-12 h-[calc(100vh-6rem)]">
        <picture>
          {types.map((type) => (
            <source
              key={type}
              type={`image/${type}`}
              srcSet={sizes
                .map((size) => `/image/spacenet-${size}.${type} ${size}w`)
                .join(',')}
              sizes="600px"
            />
          ))}
          <img
            className="w-[600px]"
            src="/image/spacenet-1920.jpg"
            alt="Spacenet close-up medium"
            sizes="600px"
            width={width}
            height={height}
            loading="lazy"
            decoding="async"
          />
        </picture>
      </section>
      <section className="flex gap-4 justify-between p-6">
        <Link className="btn btn-primary" to="/07-small">
          prev
        </Link>
        <Link className="btn btn-primary" to="/09-vite-imagetools">
          next
        </Link>
      </section>
    </main>
  )
}
