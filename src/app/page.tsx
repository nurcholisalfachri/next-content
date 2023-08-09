import Image from "next/image";

const Home = () => {
  
  return (
    <div className="flex font-bold">
      <div className="mx-auto my-10">
        <div className="flex my-10">
          <div className="mx-auto my-5">HOME PAGE</div>
        </div>
        <Image src="/vercel.svg" width={200} height={200} alt="profile" />
      </div>
    </div>
  )
}

export default Home;