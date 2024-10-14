const types = [
  //'avif',
  'webp',
  'jpg',
]
const sizes = [640, 768, 1024, 1366, 1600, 1920]

export default function Test() {
  return (
    <main>
      <section className="h-svh">
        <picture>
          {types.map((type) => {
            const srcSet = sizes.map(
              (size) => `/image/spacenet-${size}.${type} ${size}w`
            )
            return (
              <source
                key={type}
                srcSet={srcSet.join(',')}
                type={`image/${type}`}
              />
            )
          })}

          <img
            className="h-full w-full object-cover object-top"
            src="/image/spacenet-1920.jpg"
            alt="Spacenet close-up"
            width="1824"
            height="1368"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </picture>
      </section>
    </main>
  )
}
