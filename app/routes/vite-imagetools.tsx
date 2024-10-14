import { Picture } from '~/components/Picture'

import spacenet from '~/image/spacenet.jpg?hero'
import square from '~/image/spacenet.jpg?square'
import lqip from '~/image/spacenet.jpg?lqip'

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
      <div className="my-6 mt-[2000px] w-[300px]">
        <Picture
          picture={square}
          lqip={lqip}
          className="aspect-square object-cover"
          alt="Space Net Square"
          loading="lazy"
        />
      </div>
    </main>
  )
}
