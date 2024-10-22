import { Link } from '@remix-run/react'

export default function Specs() {
  return (
    <main>
      <section className="px-6 py-12 h-[calc(100vh-6rem)]">
        <h1 className="text-8xl mb-10 font-bold">
          <a
            className="link"
            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#sizes"
            target="_blank"
            rel="noreferrer"
          >
            sizes
          </a>
        </h1>
        <ul className="text-2xl list-disc list-inside pl-5">
          <li className="mb-4">
            pove brskalniku, kako velika je slika pri različnih resolucijah
          </li>
          <li className="mb-4">uporabljamo media querije</li>
          <li className="mb-4">default 100vw</li>
          <li className="mb-4">definira frontend</li>
        </ul>
      </section>
      <section className="flex gap-4 justify-between p-6">
        <Link className="btn btn-primary" to="/02-srcset">
          prev
        </Link>
        <Link className="btn btn-primary" to="/04-hero">
          next
        </Link>
      </section>
    </main>
  )
}
