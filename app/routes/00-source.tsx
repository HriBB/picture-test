import { Link } from '@remix-run/react'

export default function Specs() {
  return (
    <main>
      <section className="px-6 py-12 h-[calc(100vh-6rem)]">
        <h1 className="text-8xl mb-20 font-bold">
          <a
            className="link link-hover"
            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source"
            target="_blank"
            rel="noreferrer"
          >
            &lt;source&gt;
          </a>
        </h1>
        <ul className="text-2xl list-disc list-outside pl-10 max-w-xl">
          <li className="mb-10">katere slike so na voljo</li>
          <li className="mb-10">void element, se ne renderira</li>
          <li className="mb-10">
            za &lt;picture&gt;, &lt;audio&gt; in &lt;video&gt; elemente
          </li>
          <li className="mb-10">
            brskalnik izbere najbolj primerno sliko iz prvega source-a, ki
            ustreza kriterijem
          </li>
        </ul>
      </section>
      <section className="flex gap-4 justify-between p-6">
        <Link className="btn btn-primary" to="/">
          prev
        </Link>
        <Link className="btn btn-primary" to="/01-img">
          next
        </Link>
      </section>
    </main>
  )
}
