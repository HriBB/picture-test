import { Link } from '@remix-run/react'

export default function Specs() {
  return (
    <main>
      <section className="px-6 py-12 h-[calc(100vh-6rem)]">
        <h1 className="text-8xl mb-10 font-bold">
          <a
            className="link"
            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#srcset"
            target="_blank"
            rel="noreferrer"
          >
            srcset
          </a>
        </h1>
        <ul className="text-2xl list-disc list-inside pl-5">
          <li className="mb-4">
            pove brskalniku, katere dimenzije slike so na voljo
          </li>
          <li className="mb-4">
            uporabljamo 1x, 2x ALI 320w, 640w descriptor, ne oboje
          </li>
          <li className="mb-4">če ni descriptorja, browser tretira kot 1x</li>
          <li className="mb-4">
            x descriptor pove samo faktor 1x, 2x, 2.5x, 3x, ...
          </li>
          <li className="mb-4">
            w descriptor pove širino in omogoča media queryje
          </li>
          <li className="mb-4">definira backend</li>
        </ul>
      </section>
      <section className="flex gap-4 justify-between p-6">
        <Link className="btn btn-primary" to="/01-source">
          prev
        </Link>
        <Link className="btn btn-primary" to="/03-sizes">
          next
        </Link>
      </section>
    </main>
  )
}
