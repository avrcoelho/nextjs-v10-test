import { useRouter } from 'next/router'
import Link from 'next/link'

export default function About() {
  const router = useRouter()

  return (
  <div>
    <h1>About</h1>

    <p>
      <Link href="/about" locale="en">
        <a>
          About EN
        </a>
      </Link>
      <br />
      <Link href="/about" locale="pt">
        <a>
          About PT
        </a>
      </Link>
    </p>

    <pre>{JSON.stringify(router, null, 2)}</pre>
  </div>
  )
}