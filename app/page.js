import Image from "next/image";

export default function Home() {
  return (
    <main className="p-28">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className="text-2xl font-bold">
            The best URl Shortener in the world
          </p>
          <p>We are the most straight forward URL Shortener in world</p>
        </div>
        <div className="flex justify-start relative">
          <Image src={"/vector.png"} fill={true} alt="Img" />
        </div>
      </section>
    </main>
  );
}
