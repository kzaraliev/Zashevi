import Link from 'next/link'

export const metadata = {
  title: 'Home',
  description: 'this is a test from home page',
}

export default function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello World</h1>
      <Link href="/about">About</Link>
    </div>
  )
}