import { Link } from '@remix-run/react'

export default function Specs() {
  return (
    <main>
      <section className="px-6 py-12 h-[calc(100vh-6rem)]">
        <h1 className="text-8xl mb-20 font-bold">
          <a
            className="link link-hover"
            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#sizes"
            target="_blank"
            rel="noreferrer"
          >
            sizes
          </a>
        </h1>
        <ul className="text-2xl list-disc list-outside pl-10 max-w-xl">
          <li className="mb-10">
            definiramo lahko na &lt;img&gt; ali &lt;source&gt; elementu
          </li>
          <li className="mb-10">
            kako velika je zrenderirana slika pri določeni resoluciji
          </li>
          <li className="mb-10">če ne določimo, brskalnik vzame 100vw</li>
          <li className="mb-10">primer: mobile 100vw, desktop 33%</li>
          <li className="mb-10">
            definira frontend, saj lahko sliko uporabimo na različnih mestih v
            različnih velikostih
          </li>
        </ul>
      </section>
      <section className="flex gap-4 justify-between p-6">
        <Link className="btn btn-primary" to="/02-srcset">
          prev
        </Link>
        <Link className="btn btn-primary" to="/04-media">
          next
        </Link>
      </section>
    </main>
  )
}
