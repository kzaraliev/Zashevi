import Link from 'next/link'
import Navigation from './nav.js'

export default function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello World</h1>
      <Link href="/about">About</Link>
    </div>
  )
}