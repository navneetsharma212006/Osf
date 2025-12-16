import React from 'react'

const ContactService = () => {
  return (
    <div>
       <div className="mt-20 tracking-wide px-4">
      
      <div className="text-center mb-16">
        <span className="bg-neutral-900 text-orange-500 rounded-full px-4 py-1 text-sm font-medium uppercase">
          Contact
        </span>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 tracking-wide">
          Get In Touch
        </h2>

        <p className="mt-6 text-neutral-400 max-w-2xl mx-auto text-md">
          We’d love to discuss your idea and help you build something amazing.
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Left Info */}
        <div className="border border-neutral-800 rounded-xl p-8 bg-neutral-900/40">
          <h3 className="text-2xl mb-6">Contact Information</h3>

          <div className="space-y-4 text-neutral-300">
            <p>
              <span className="text-orange-500">Email:</span>{" "}
              support@osf-team.com
            </p>
            <p>
              <span className="text-orange-500">Phone:</span>{" "}
              +91 6267502221
            </p>
            <p>
              <span className="text-orange-500">Website:</span>{" "}
              www.osf.com
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="border border-neutral-800 rounded-xl p-8 bg-neutral-900/40 space-y-6">
          <div>
            <label className="block mb-2 text-sm text-neutral-300">
              Full Name
            </label>
            <input
              type="text"
              className="w-full rounded-md bg-neutral-800 border border-neutral-700 px-4 py-2 text-neutral-200 focus:outline-none focus:border-orange-500"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-neutral-300">
              Email
            </label>
            <input
              type="email"
              className="w-full rounded-md bg-neutral-800 border border-neutral-700 px-4 py-2 text-neutral-200 focus:outline-none focus:border-orange-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-neutral-300">
              Business Name (optional)
            </label>
            <input
              type="text"
              className="w-full rounded-md bg-neutral-800 border border-neutral-700 px-4 py-2 text-neutral-200 focus:outline-none focus:border-orange-500"
              placeholder="Your company"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-neutral-300">
              Service Required
            </label>
            <select className="w-full rounded-md bg-neutral-800 border border-neutral-700 px-4 py-2 text-neutral-200 focus:outline-none focus:border-orange-500">
              <option>Website Development</option>
              <option>UI / UX Design</option>
              <option>AI / ML Solution</option>
              <option>Branding</option>
              <option>Custom Project</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-sm text-neutral-300">
              Budget Range
            </label>
            <select className="w-full rounded-md bg-neutral-800 border border-neutral-700 px-4 py-2 text-neutral-200 focus:outline-none focus:border-orange-500">
              <option>₹1,000 – ₹5,000</option>
              <option>₹5,000 – ₹15,000</option>
              <option>₹15,000 – ₹35,000+</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-sm text-neutral-300">
              Project Description
            </label>
            <textarea
              rows="4"
              className="w-full rounded-md bg-neutral-800 border border-neutral-700 px-4 py-2 text-neutral-200 focus:outline-none focus:border-orange-500"
              placeholder="Tell us about your project..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full mt-4 py-3 rounded-md bg-linear-to-r from-orange-500 to-red-500 text-white font-medium hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default ContactService
