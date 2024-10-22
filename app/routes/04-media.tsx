import { Link } from '@remix-run/react'

export default function Specs() {
  return (
    <main>
      <section className="px-6 py-12 h-[calc(100vh-6rem)]">
        <h1 className="text-8xl mb-20 font-bold">
          <a
            className="link link-hover"
            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source#media"
            target="_blank"
            rel="noreferrer"
          >
            media
          </a>
        </h1>
        <ul className="text-2xl list-disc list-outside pl-10 max-w-xl">
          <li className="mb-10">definiramo na &lt;source&gt; elementu</li>
          <li className="mb-10">
            katero sliko izbrati pri določeni resoluciji
          </li>
          <li className="mb-10">
            brskalnik izbere prvi source, ki ustreza kriterijem!
          </li>
        </ul>
      </section>
      <section className="flex gap-4 justify-between p-6">
        <Link className="btn btn-primary" to="/03-sizes">
          prev
        </Link>
        <Link className="btn btn-primary" to="/05-hero">
          next
        </Link>
      </section>
    </main>
  )
}
