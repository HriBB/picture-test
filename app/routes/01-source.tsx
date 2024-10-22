import { Link } from '@remix-run/react'

export default function Specs() {
  return (
    <main>
      <section className="px-6 py-12 h-[calc(100vh-6rem)]">
        <h1 className="text-8xl mb-10 font-bold">
          <a
            className="link"
            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source"
            target="_blank"
            rel="noreferrer"
          >
            &lt;source&gt;
          </a>
        </h1>
        <ul className="text-2xl list-disc list-inside pl-5">
          <li className="mb-4">
            pove brskalniku, kateri formati slike so na voljo (avif, webp, jpg)
          </li>
          <li className="mb-4">browser sam izbere format</li>
          <li className="mb-4">avif najmanjša velikost, najmanša podpora</li>
          <li className="mb-4">webp srednja velikost, srednja podpora</li>
          <li className="mb-4">jpg največji velikost, največja podpora</li>
        </ul>
      </section>
      <section className="flex gap-4 justify-between p-6">
        <Link className="btn btn-primary" to="/00-img">
          prev
        </Link>
        <Link className="btn btn-primary" to="/02-srcset">
          next
        </Link>
      </section>
    </main>
  )
}
