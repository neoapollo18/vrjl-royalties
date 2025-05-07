import Link from "next/link"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <main>
      <Navbar />
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: "url('/images/concert-blue-crowd.png')" }}>
        <div className="hero-overlay"></div>
        <div className="noise-overlay"></div>

        <div className="container mx-auto px-6 hero-content">
          <div className="max-w-5xl">
            <h1 className="hero-title text-white mb-8 animate-fade-up">
              Your music.
              <br />
              <span className="text-white">Your royalties.</span>
            </h1>

            <p className="hero-subtitle text-white opacity-90 mb-16 animate-fade-up delay-200">
              The avant-garde platform that helps visionary musicians track, collect, and maximize their creative
              earnings.
            </p>

            <div className="mb-16 animate-fade-up delay-300">{/* Search bar removed */}</div>

            <div className="flex flex-col sm:flex-row gap-6 animate-fade-up delay-400">
              <Link href="/signup" className="btn-primary">
                Get Started
              </Link>
              <Link href="/demo" className="btn-secondary">
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section section-light">
        <div className="container mx-auto px-6">
          <div className="asymmetrical-layout mb-20">
            <div>
              <h2 className="section-title">Redefining royalty management</h2>
            </div>
            <div>
              <p className="section-subtitle text-gray-600">
                We handle the complex infrastructure so you can focus on your creative vision.
              </p>
            </div>
          </div>

          <div className="feature-grid">
            <div className="feature-item artistic-card animate-fade-up">
              <img src="/images/icon-connect.svg" alt="Connect" className="feature-icon" />
              <h3 className="feature-title">One-click setup</h3>
              <p className="feature-description">
                Connect with BMI, ASCAP, MLC, and SoundExchange in minutes, not months. Seamless integration for the
                modern artist.
              </p>
            </div>

            <div className="feature-item artistic-card animate-fade-up delay-200">
              <img src="/images/icon-split.svg" alt="Split" className="feature-icon" />
              <h3 className="feature-title">Fair split management</h3>
              <p className="feature-description">
                Send split agreements to collaborators and get everyone paid fairly. Transparent and equitable
                distribution.
              </p>
            </div>

            <div className="feature-item artistic-card animate-fade-up delay-400">
              <img src="/images/icon-track.svg" alt="Track" className="feature-icon" />
              <h3 className="feature-title">Real-time tracking</h3>
              <p className="feature-description">
                Watch your royalties roll in as they happen and get alerts when something's off. Complete visibility
                into your earnings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Process Section */}
      <section className="section section-light">
        <div className="container mx-auto px-6">
          <div className="avant-grid">
            <div className="col-span-12 md:col-span-5 md:col-start-2">
              <h2 className="section-title mb-8">Your creative process deserves better</h2>
              <p className="text-lg text-gray-600 mb-8 font-light leading-relaxed">
                We believe that artists should be able to focus on their craft without worrying about the business side
                of music. Our platform automates the tedious parts of royalty management, so you can spend more time
                creating.
              </p>
              <ul className="creative-list text-gray-600 mb-8">
                <li>Automatic registration with all major collection agencies</li>
                <li>Digital split agreements that are legally binding</li>
                <li>Real-time royalty tracking and projections</li>
                <li>Alerts when your royalty income unexpectedly drops</li>
              </ul>
              <Link href="/features" className="btn-primary inline-flex">
                Explore All Features
              </Link>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-8 mt-12 md:mt-0">
              <div className="artistic-border">
                <img
                  src="/images/concert-red-smoke.png"
                  alt="Creative Process"
                  className="w-full h-auto image-treatment"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section bg-image" style={{ backgroundImage: "url('/images/concert-colorful-lights.png')" }}>
        <div className="bg-overlay"></div>
        <div className="noise-overlay"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="section-title mb-6 animate-fade-up">Join our newsletter</h2>
            <p className="text-lg mb-8 animate-fade-up delay-100">
              Stay updated with the latest features, industry insights, and royalty management tips.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto animate-fade-up delay-200">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-black font-medium hover:bg-white/90 transition-colors"
              >
                Subscribe
              </button>
            </form>

            <p className="text-sm text-white/60 mt-4 animate-fade-up delay-300">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section section-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">Get in touch</h2>
            <p className="section-subtitle mx-auto">
              Have questions? We're here to help you get started with your royalty management journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <p className="text-gray-600 mb-6">
                Fill out the form or reach out directly through our contact information.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-purple mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600">support@vrjl.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-purple mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-purple mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-gray-600">123 Music Avenue, Los Angeles, CA 90001</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple focus:border-purple"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple focus:border-purple"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple focus:border-purple"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple focus:border-purple"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-purple hover:bg-purple-dark text-white font-medium rounded-md transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-image" style={{ backgroundImage: "url('/images/concert-red-smoke.png')" }}>
        <div className="bg-overlay"></div>
        <div className="noise-overlay"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="section-title text-white mb-8 animate-fade-up">Ready to transform your royalty management?</h2>

          <Link href="/signup" className="btn-primary text-lg px-8 py-4 animate-fade-up delay-200">
            Start Your Creative Journey
          </Link>
        </div>
      </section>
    </main>
  )
}
