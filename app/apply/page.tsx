'use client'

import { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { INSTAGRAM_URL, CONTACT_EMAIL, CONTACT_EMAIL_HREF, APPLY_FORM_ID, RESPONSE_WINDOW } from '@/lib/constants'

export default function ApplyPage() {
  const [state, handleSubmit] = useForm(APPLY_FORM_ID)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    instagram: '',
    status: '',
    revenue: '',
    goals: '',
    challenge: '',
    message: '',
  })

  const submitted = state.succeeded

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      <section className="pt-40 pb-20 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-[#C6A15B] text-xs tracking-[0.3em] uppercase font-light">
            Apply
          </span>
          <span className="block w-8 h-px bg-[#C6A15B] mx-auto my-5" />
          <h1
            className="text-5xl md:text-6xl text-white leading-tight mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to grow?
            <br />
            <em className="text-[#C6A15B] not-italic">Let us talk.</em>
          </h1>
          <p className="text-[#A1A1A1] text-lg leading-relaxed">
            Applications are reviewed personally. We take the time to understand every
            creator who reaches out — because the right partnership matters.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-[#A1A1A1]">
            {['Private & Confidential', `${RESPONSE_WINDOW} Response`, 'No Obligation'].map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className="text-[#C6A15B] text-xs">◈</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0A0A0A] pb-32">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          {submitted ? (
            <div className="text-center py-20">
              <span className="block w-12 h-px bg-[#C6A15B] mx-auto mb-8" />
              <h2
                className="text-3xl text-white mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Application received.
              </h2>
              <p className="text-[#A1A1A1] text-base leading-relaxed mb-8">
                Thank you for applying. We have received your application and will review it
                personally. You can expect to hear from us within {RESPONSE_WINDOW}.
              </p>
              <p className="text-[#A1A1A1] text-sm">
                In the meantime, feel free to{' '}
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C6A15B] hover:underline"
                >
                  follow us on Instagram
                </a>
                .
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[#A1A1A1] text-xs tracking-[0.2em] uppercase">
                  Full name <span className="text-[#C6A15B]">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="bg-[#121212] border border-white/10 text-white placeholder-[#A1A1A1]/40 px-4 py-3.5 text-sm focus:outline-none focus:border-[#C6A15B]/60 transition-colors duration-200"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#A1A1A1] text-xs tracking-[0.2em] uppercase">
                  Email address <span className="text-[#C6A15B]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="bg-[#121212] border border-white/10 text-white placeholder-[#A1A1A1]/40 px-4 py-3.5 text-sm focus:outline-none focus:border-[#C6A15B]/60 transition-colors duration-200"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#A1A1A1] text-xs tracking-[0.2em] uppercase">
                  Instagram handle <span className="text-[#C6A15B]">*</span>
                </label>
                <input
                  type="text"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                  required
                  placeholder="@yourhandle"
                  className="bg-[#121212] border border-white/10 text-white placeholder-[#A1A1A1]/40 px-4 py-3.5 text-sm focus:outline-none focus:border-[#C6A15B]/60 transition-colors duration-200"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#A1A1A1] text-xs tracking-[0.2em] uppercase">
                  Creator status <span className="text-[#C6A15B]">*</span>
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  required
                  className="bg-[#121212] border border-white/10 text-white px-4 py-3.5 text-sm focus:outline-none focus:border-[#C6A15B]/60 transition-colors duration-200 appearance-none cursor-pointer"
                >
                  <option value="" disabled className="text-[#A1A1A1]">
                    Select your current status
                  </option>
                  <option value="aspiring">Aspiring creator — not yet launched</option>
                  <option value="new">New creator — launched within 3 months</option>
                  <option value="active">Active creator — earning consistently</option>
                  <option value="scaling">Scaling creator — looking to grow significantly</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#A1A1A1] text-xs tracking-[0.2em] uppercase">
                  Current monthly revenue (approximate)
                </label>
                <select
                  name="revenue"
                  value={formData.revenue}
                  onChange={handleChange}
                  className="bg-[#121212] border border-white/10 text-white px-4 py-3.5 text-sm focus:outline-none focus:border-[#C6A15B]/60 transition-colors duration-200 appearance-none cursor-pointer"
                >
                  <option value="" disabled className="text-[#A1A1A1]">
                    Select a range
                  </option>
                  <option value="0">Not yet earning</option>
                  <option value="0-500">Under $500/month</option>
                  <option value="500-2000">$500 – $2,000/month</option>
                  <option value="2000-5000">$2,000 – $5,000/month</option>
                  <option value="5000-10000">$5,000 – $10,000/month</option>
                  <option value="10000+">$10,000+/month</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#A1A1A1] text-xs tracking-[0.2em] uppercase">
                  What are your goals? <span className="text-[#C6A15B]">*</span>
                </label>
                <textarea
                  name="goals"
                  value={formData.goals}
                  onChange={handleChange}
                  required
                  rows={3}
                  placeholder="Where do you want to be in 6–12 months?"
                  className="bg-[#121212] border border-white/10 text-white placeholder-[#A1A1A1]/40 px-4 py-3.5 text-sm focus:outline-none focus:border-[#C6A15B]/60 transition-colors duration-200 resize-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#A1A1A1] text-xs tracking-[0.2em] uppercase">
                  What is your biggest challenge right now?{' '}
                  <span className="text-[#C6A15B]">*</span>
                </label>
                <textarea
                  name="challenge"
                  value={formData.challenge}
                  onChange={handleChange}
                  required
                  rows={3}
                  placeholder="What is holding you back from the results you want?"
                  className="bg-[#121212] border border-white/10 text-white placeholder-[#A1A1A1]/40 px-4 py-3.5 text-sm focus:outline-none focus:border-[#C6A15B]/60 transition-colors duration-200 resize-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#A1A1A1] text-xs tracking-[0.2em] uppercase">
                  Anything else you would like us to know?
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Optional — but the more context you give, the better we can assess the fit."
                  className="bg-[#121212] border border-white/10 text-white placeholder-[#A1A1A1]/40 px-4 py-3.5 text-sm focus:outline-none focus:border-[#C6A15B]/60 transition-colors duration-200 resize-none"
                />
              </div>

              <p className="text-[#A1A1A1]/60 text-xs leading-relaxed">
                All information is kept strictly confidential. We will never share your
                details with third parties. By submitting, you agree to our{' '}
                <a href="/privacy" className="text-[#C6A15B] hover:underline">
                  Privacy Policy
                </a>
                .
              </p>

              <ValidationError errors={state.errors} className="text-red-400 text-xs" />

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full py-4 bg-[#C6A15B] text-black text-sm tracking-widest uppercase font-medium hover:bg-[#D4B47A] transition-all duration-300 active:scale-[0.99] mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {state.submitting ? 'Submitting…' : 'Submit Application'}
              </button>
            </form>
          )}

          {!submitted && (
            <div className="mt-12 pt-12 border-t border-white/5 text-center">
              <p className="text-[#A1A1A1] text-sm mb-6">Prefer to reach out directly?</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-[#C6A15B] text-sm tracking-widest uppercase group"
                >
                  DM on Instagram
                  <span className="block w-8 h-px bg-[#C6A15B] group-hover:w-12 transition-all duration-300" />
                </a>
                <a
                  href={CONTACT_EMAIL_HREF}
                  className="inline-flex items-center gap-3 text-[#C6A15B] text-sm tracking-widest uppercase group"
                >
                  Email Us
                  <span className="block w-8 h-px bg-[#C6A15B] group-hover:w-12 transition-all duration-300" />
                </a>
              </div>
              <p className="mt-4 text-[#A1A1A1]/60 text-xs">{CONTACT_EMAIL}</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
