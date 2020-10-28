import Image from 'next/image';

export default function Home() {
  return (
  <div>
    <h1>Hello  Next 10</h1>

    <Image src="/images/beach.jpg" width={800} height={600} alt="Beach" quality={70} />
  </div>
  )
}
