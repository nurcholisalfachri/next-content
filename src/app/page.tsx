import Image from "next/image";

export async function getDogData() {
  const res = await fetch ("https://dog.ceo/api/breeds/image/random", {next: {revalidate: 3}})
  return res.json();
}



const Home = async () => {

  const [dog] = await Promise.all<any>([
    getDogData()
  ])

  return (
    <div className="flex font-bold">
      <div className="mx-auto my-10">
        <div className="flex">
          <div className="mx-auto my-5">HOME PAGE</div>
        </div>
        <Image src={dog.message} alt="dog" width={300} height={300}/>
        <p className="my-3">Cute Dog ❤</p>
      </div>
    </div>
  )
}

export default Home;