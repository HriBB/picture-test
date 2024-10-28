import { Link } from '@remix-run/react'

export default function Specs() {
  return (
    <main>
      <section className="px-6 py-12 h-[calc(100vh-6rem)]">
        <h1 className="text-8xl mb-20 font-bold">
          <a
            className="link link-hover"
            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img"
            target="_blank"
            rel="noreferrer"
          >
            &lt;img&gt;
          </a>
        </h1>
        <ul className="text-2xl list-disc list-outside pl-10 max-w-xl">
          <li className="mb-10">
            zrenderira eno od slik iz &lt;source&gt; elementov (currentSrc)
          </li>
          <li className="mb-10">
            mora biti prisoten v &lt;picture&gt; elementu
          </li>
          <li className="mb-10">definira velikost in ostale atributa</li>
          <li className="mb-10">deluje kot fallback</li>
        </ul>
      </section>
      <section className="flex gap-4 justify-between p-6">
        <Link className="btn btn-primary" to="/00-source">
          prev
        </Link>
        <Link className="btn btn-primary" to="/02-srcset">
          next
        </Link>
      </section>
    </main>
  )
}
