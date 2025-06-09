import React from "react";
import { Github, Linkedin, Mail, Code, ExternalLink, Zap } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-28 py-16 sm:py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              About Echo Link
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
          </div>

          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Hello! I'm a passionate developer who created Echo Link to solve the
            everyday problem of sharing long, unwieldy URLs. What started as a
            simple idea has grown into a powerful tool that helps thousands of
            users share links more efficiently.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-28 py-16 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                The Story Behind Echo Link
              </h2>
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  Echo Link was born from a simple frustration: sharing long
                  URLs that would break in messages, look unprofessional in
                  presentations, and were impossible to remember. I wanted to
                  create something that wasn't just another URL shortener, but a
                  smart, reliable tool that developers and businesses could
                  trust.
                </p>
                <p className="leading-relaxed">
                  Built with Next.js and modern web technologies, Echo Link
                  focuses on speed, reliability, and user experience. Every
                  feature is designed with the user in mind, from the clean
                  interface to the powerful analytics dashboard.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg blur opacity-30"></div>
                <div className="relative bg-gray-800 p-8 rounded-lg border border-gray-700">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-purple-400 mb-2">
                        10K+
                      </div>
                      <div className="text-gray-400 text-sm">
                        Links Shortened
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-blue-400 mb-2">
                        500+
                      </div>
                      <div className="text-gray-400 text-sm">Active Users</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-cyan-400 mb-2">
                        99.9%
                      </div>
                      <div className="text-gray-400 text-sm">Uptime</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-green-400 mb-2">
                        24/7
                      </div>
                      <div className="text-gray-400 text-sm">Available</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-28 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
            What Makes Echo Link Special
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Lightning Fast
              </h3>
              <p className="text-gray-400">
                Instant URL shortening with optimized redirects that load in
                milliseconds.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <ExternalLink className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Custom Links
              </h3>
              <p className="text-gray-400">
                Create branded, memorable short links that reflect your personal
                or business identity.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-cyan-600 to-cyan-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Developer Friendly
              </h3>
              <p className="text-gray-400">
                Built with modern technologies and designed for developers who
                appreciate clean code.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Section */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-28 py-16 bg-gray-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            I'm always excited to connect with fellow developers, entrepreneurs,
            and anyone who's passionate about building great products. Whether
            you have feedback about Echo Link, want to collaborate, or just want
            to say hello, I'd love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:your.email@example.com"
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200 transform hover:-translate-y-0.5 w-full sm:w-auto justify-center"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </a>

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 hover:border-gray-500 transition-all duration-200 w-full sm:w-auto justify-center"
            >
              <Github className="w-5 h-5" />
              View Source Code
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
