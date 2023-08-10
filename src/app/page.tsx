import Image from "next/image";

const Home = () => {
  
  return (
    <div className="flex">
      <div className="mx-auto my-10">
        <div className="flex">
          <div className="font-bold text-2xl mx-auto mt-10 mb-200">HOME PAGE</div>
        </div>
        <Image src="/vercel.svg" width={400} height={200} alt="profile" />
      </div>
    </div>
  )
}

export default Home;