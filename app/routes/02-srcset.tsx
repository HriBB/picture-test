import { Link } from '@remix-run/react'

export default function Specs() {
  return (
    <main>
      <section className="px-6 py-12 h-[calc(100vh-6rem)]">
        <h1 className="text-8xl mb-20 font-bold">
          <a
            className="link link-hover"
            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#srcset"
            target="_blank"
            rel="noreferrer"
          >
            srcset
          </a>
        </h1>
        <ul className="text-2xl list-disc list-outside pl-10 max-w-xl">
          <li className="mb-10">
            definiramo lahko na &lt;img&gt; ali &lt;source&gt; elementu
          </li>
          <li className="mb-10">katere velikosti slike so na voljo</li>
          <li className="mb-10">
            uporabljamo 1x, 2x ALI 320w, 640w descriptor, ne oboje
          </li>
          <li className="mb-10">
            če ni descriptorja, browser tretira sliko kot 1x
          </li>
          <li className="mb-10">
            x descriptor pove samo faktor 1x, 2x, 2.5x, 3x, ...
          </li>
          <li className="mb-10">
            w descriptor pove različne širine, omogoča media queryje in je bolj
            napreden
          </li>
        </ul>
      </section>
      <section className="flex gap-4 justify-between p-6">
        <Link className="btn btn-primary" to="/01-img">
          prev
        </Link>
        <Link className="btn btn-primary" to="/03-sizes">
          next
        </Link>
      </section>
    </main>
  )
}
