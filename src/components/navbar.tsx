import Link from 'next/link';

export default function Navbar() {
  return (
    <div className='flex'>
      <div className="my-5 mx-auto lg:mr-96">
        <Link href={'/'} className="mr-10">Home</Link>
        <Link href={'/content'}>Content</Link>
      </div>
    </div>
  )
}
