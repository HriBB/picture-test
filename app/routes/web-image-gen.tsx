import picture from '~/images/_gen/spacenet'

const pic = picture.spacenet

export default function WebImageGen() {
  return (
    <main>
      <h1>web-image-gen</h1>
      <section className="h-svh">
        <picture>
          {Object.entries(pic.formats).map(([type, sizes]) => {
            const srcSet = Object.entries(sizes)
              .map(([size, path]) => `${path} ${size}w`)
              .join(',')

            return <source key={type} srcSet={srcSet} type={`image/${type}`} />
          })}
          <img
            className="h-full w-full object-cover object-top"
            src={pic.placeholder}
            alt="Spacenet close-up"
            width={pic.width}
            height={pic.height}
            loading="eager"
            //decoding="async"
            fetchPriority="high"
          />
        </picture>
      </section>
    </main>
  )
}
