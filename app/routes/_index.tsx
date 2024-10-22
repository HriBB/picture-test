import { Link } from '@remix-run/react'

export default function Specs() {
  return (
    <main>
      <section className="px-6 py-12 h-[calc(100vh-6rem)]">
        <h1 className="text-8xl mb-10 font-bold">
          <a
            className="link"
            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture"
            target="_blank"
            rel="noreferrer"
          >
            &lt;picture&gt;
          </a>
        </h1>
        <ul className="text-2xl list-disc list-inside pl-5">
          <li className="mb-4">
            pove brskalniku vse možne formate in velikosti slike
          </li>
          <li className="mb-4">kompleksno!</li>
        </ul>
      </section>
      <section className="flex gap-4 justify-between p-6">
        <div />
        <Link className="btn btn-primary" to="/00-img">
          next
        </Link>
      </section>
    </main>
  )
}
