import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="p-4 sm:p-8 md:p-16 lg:p-28 relative">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 min-h-[50vh] lg:h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center order-2 lg:order-1">
          <p
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-center ${poppins.className}`}
          >
            Echolinks: Your Smart Way to Shorten and Share
          </p>
          <p className="px-4 sm:px-8 md:px-16 lg:px-40 text-center text-sm sm:text-base">
            Echolinks is a simple and efficient URL shortener that helps you
            convert long, messy links into clean, trackable ones. Share smarter
            and reach your audience faster with easy-to-manage short links.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-5 w-full sm:w-auto">
            <Link href="/shorten" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer">
                Try Now
              </button>
            </Link>
            <Link href="/github" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer">
                Github
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center lg:justify-start relative h-64 sm:h-80 lg:h-auto order-1 lg:order-2">
          <Image
            src={"/vector.png"}
            fill={true}
            alt="Img"
            className="object-contain"
          />
        </div>
      </section>
    </main>
  );
}
