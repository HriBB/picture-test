import { Link } from '@remix-run/react'

const width = 1824
const height = 1368
const sizes = [320, 640, 768, 1024, 1366, 1600, 1920]
const types = ['avif', 'webp', 'jpg']

export default function Test() {
  return (
    <main>
      <section className="md:px-6 md:py-12 h-[calc(100svh-6rem)]">
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
            alt="Spacenet close-up small"
            sizes="300px"
            width={width}
            height={height}
            loading="lazy"
            decoding="async"
          />
        </picture>
      </section>
      <section className="flex gap-4 justify-between p-6">
        <Link className="btn btn-primary" to="/06-sizes">
          prev
        </Link>
        <Link className="btn btn-primary" to="/08-medium">
          next
        </Link>
      </section>
    </main>
  )
}
