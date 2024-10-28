import { Link } from '@remix-run/react'

export default function Specs() {
  return (
    <main>
      <section className="px-6 py-12 h-[calc(100vh-6rem)]">
        <h1 className="text-8xl mb-20 font-bold">
          <a
            className="link link-hover"
            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture"
            target="_blank"
            rel="noreferrer"
          >
            &lt;picture&gt;
          </a>
        </h1>
        <ul className="text-2xl list-disc list-outside pl-10 max-w-xl">
          <li className="mb-10">
            katere slike so na voljo: v katerih formatih, v katerih velikostih
            in za katere resolucije je kakšna velikost
          </li>
          <li className="mb-10">
            art direction in različni formati (avif, webp, jpeg)
          </li>
          <li className="mb-10">
            vsebuje nič ali več &lt;source&gt; elementov in en &lt;img&gt;
            element
          </li>
        </ul>
      </section>
      <section className="flex gap-4 justify-between p-6">
        <div />
        <Link className="btn btn-primary" to="/00-source">
          next
        </Link>
      </section>
    </main>
  )
}
