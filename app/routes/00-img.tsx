import { Link } from '@remix-run/react'

export default function Specs() {
  return (
    <main>
      <section className="px-6 py-12 h-[calc(100vh-6rem)]">
        <h1 className="text-8xl mb-10 font-bold">
          <a
            className="link"
            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img"
            target="_blank"
            rel="noreferrer"
          >
            &lt;img&gt;
          </a>
        </h1>
        <ul className="text-2xl list-disc list-inside pl-5">
          <li className="mb-4">
            mora obstajati v &gt;picture&lt; elementu in deluje kot fallback
          </li>
          <li className="mb-4">je element, ki se dejansko zrenderira</li>
          <li className="mb-4">&gt;picture&lt; je kot prazen &gt;div&lt;</li>
          <li className="mb-4">&gt;source&lt; da brskalniku izbiro</li>
        </ul>
      </section>
      <section className="flex gap-4 justify-between p-6">
        <Link className="btn btn-primary" to="/">
          prev
        </Link>
        <Link className="btn btn-primary" to="/01-source">
          next
        </Link>
      </section>
    </main>
  )
}
