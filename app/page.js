"use client";
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
    <main className="p-4 sm:p-8 md:p-16 lg:p-28 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-float-delay-1"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-cyan-400 rounded-full animate-float-delay-2"></div>
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-purple-300 rounded-full animate-float"></div>
        <div className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-blue-300 rounded-full animate-float-delay-1"></div>
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 min-h-[50vh] lg:h-[50vh] relative z-10">
        <div className="flex flex-col gap-4 items-center justify-center order-2 lg:order-1">
          {/* Existing content with enhanced styling */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-20"></div>
            <p
              className={`relative text-2xl sm:text-3xl lg:text-4xl font-bold text-center bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent ${poppins.className}`}
            >
              Echolinks: Your Smart Way to Shorten and Share
            </p>
          </div>

          <p className="px-4 sm:px-8 md:px-16 lg:px-40 text-center text-sm sm:text-base text-gray-300 leading-relaxed">
            Echolinks is a simple and efficient URL shortener that helps you
            convert long, messy links into clean, trackable ones. Share smarter
            and reach your audience faster with easy-to-manage short links.
          </p>

          {/* Stats Section */}
          <div className="flex flex-wrap justify-center gap-6 py-4">
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                10K+
              </div>
              <div className="text-xs text-gray-400">Links Shortened</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                500+
              </div>
              <div className="text-xs text-gray-400">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                99.9%
              </div>
              <div className="text-xs text-gray-400">Uptime</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-5 w-full sm:w-auto">
            <Link href="/shorten" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer relative overflow-hidden group">
                <span className="relative z-10">Try Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Always Online</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>Secure & Fast</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span>Free to Use</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:justify-start relative h-64 sm:h-80 lg:h-auto order-1 lg:order-2">
          {/* Glow effect behind image */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
          <Image
            src={"/vector.png"}
            fill={true}
            alt="Img"
            className="object-contain relative z-10 transition-transform duration-500 hover:scale-105"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 mt-20 lg:mt-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Why Choose EchoLinks?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience the power of intelligent URL shortening with features
            designed for modern users
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {/* Feature 1 */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300 h-full">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Lightning Fast
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Generate short links instantly with our optimized
                infrastructure. No waiting, no delay - just pure speed.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300 h-full">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Smart Analytics
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Track clicks, monitor performance, and gain insights with our
                comprehensive analytics dashboard.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300 h-full">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Secure & Reliable
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Your links are protected with enterprise-grade security and
                99.9% uptime guarantee.
              </p>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
            Get started in seconds with our simple three-step process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Step 1 */}
          <div className="text-center relative">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
              <span className="text-white font-bold text-xl">1</span>
            </div>
            <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-purple-500/50 to-blue-500/50 transform translate-x-8"></div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Paste Your URL
            </h3>
            <p className="text-gray-400">
              Simply paste your long URL into our shortening tool
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center relative">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
              <span className="text-white font-bold text-xl">2</span>
            </div>
            <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-cyan-500/50 transform translate-x-8"></div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Customize & Generate
            </h3>
            <p className="text-gray-400">
              Customize your short link or let us create one automatically
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">3</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Share & Track
            </h3>
            <p className="text-gray-400">
              Share your short link and monitor its performance in real-time
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-12 border border-gray-800">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust EchoLinks for their URL shortening
            needs. Start shortening your links today - it's completely free!
          </p>
          <Link href="/shorten" className="inline-block">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200 transform hover:-translate-y-1">
              Start Shortening Now
            </button>
          </Link>
        </div>
      </section>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delay-1 {
          animation: float 6s ease-in-out infinite;
          animation-delay: 2s;
        }

        .animate-float-delay-2 {
          animation: float 6s ease-in-out infinite;
          animation-delay: 4s;
        }
      `}</style>
    </main>
  );
}
