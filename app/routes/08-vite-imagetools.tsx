import { Picture } from '~/components/Picture'

//import spacenetAlt from '~/image/spacenet.jpg?format=avif;webp;jpeg&w=640;768;1024;1366;1600;1920&as=picture'
import spacenet from '~/image/spacenet.jpg?hero'
import square from '~/image/spacenet.jpg?square'
import lqip from '~/image/spacenet.jpg?lqip'
import { Link } from '@remix-run/react'

export default function ViteImageTools() {
  return (
    <main>
      <h1 className="absolute top-2 left-2 text-2xl p-2 z-50">
        vite-imagetools
      </h1>
      <div className="w-full h-svh">
        <Picture
          picture={spacenet}
          lqip={lqip}
          pictureClassName="absolute top-0 left-0 right-0 bottom-0"
          className="w-full h-full object-cover"
          alt="Space Net Hero"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </div>
      <div className="p-6 my-6 mt-[1500px] ">
        <div className="w-[300px]">
          <Picture
            picture={square}
            lqip={lqip}
            className="aspect-square object-cover"
            alt="Space Net Square"
            loading="lazy"
          />
        </div>
      </div>
      <section className="flex gap-4 justify-between p-6">
        <Link className="btn btn-primary" to="/07-medium">
          prev
        </Link>
        <Link className="btn btn-primary" to="/09-vite-imagetools-art">
          next
        </Link>
      </section>
    </main>
  )
}
