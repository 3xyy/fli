"use client";

import React, { useState, useRef, useEffect } from "react";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Confetti from "@/components/Confetti";

const VOLUNTEER_FORM_ENDPOINT = "https://submit-form.com/HtBjZgdGb";

declare global {
  interface Window {
    turnstile?: {
      render: (container: Element, options: { sitekey: string; callback: string }) => void;
    };
    onTurnstileSuccess?: () => void;
  }
}

function VolunteerForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    instagram: "",
    division: "research",
    school: "",
    schoolDistrict: "",
    referral: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [turnstileChecked, setTurnstileChecked] = useState(false);
  const turnstileRef = useRef<HTMLDivElement>(null);
  const submitBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Define global callback for Turnstile
    (window as Window & { onTurnstileSuccess?: () => void }).onTurnstileSuccess = () => setTurnstileChecked(true);
    if (typeof window !== "undefined" && window.turnstile && turnstileRef.current) {
      (turnstileRef.current as HTMLDivElement).innerHTML = '';
      window.turnstile.render(turnstileRef.current, {
        sitekey: process.env.NEXT_PUBLIC_SITE_KEY || '',
        callback: 'onTurnstileSuccess',
      });
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const formElement = e.target as HTMLFormElement;
      formElement.submit();
      setSubmitted(true);
      setForm({ fullName: "", email: "", instagram: "", division: "research", school: "", schoolDistrict: "", referral: "" });
    } catch {
      alert("Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // Overlay logic (disabled for volunteer)
  const isClassFull = false;

  return (
    <div className="relative">
      <form className={`bg-white rounded-xl shadow-xl p-8 max-w-2xl mx-auto mt-10 mb-16 space-y-6`} action={VOLUNTEER_FORM_ENDPOINT} method="POST" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">Volunteer Application</h2>
        <div>
          <Label htmlFor="fullName">Full name *</Label>
          <Input id="fullName" name="fullName" value={form.fullName} onChange={handleChange} required placeholder="Full Name" />
        </div>
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input id="email" name="email" value={form.email} onChange={handleChange} required placeholder="Email" type="email" />
        </div>
        <div>
          <Label htmlFor="instagram">Instagram handle (optional)</Label>
          <Input id="instagram" name="instagram" value={form.instagram} onChange={handleChange} placeholder="Instagram handle" />
        </div>
        <div>
          <Label htmlFor="division">Preferred division *</Label>
          <select id="division" name="division" value={form.division} onChange={handleChange} className="w-full border rounded px-3 py-2">
            <option value="research">Research</option>
            <option value="marketing" disabled style={{ color: '#888' }}>Marketing (temporarily unavailable)</option>
          </select>
        </div>
        <div>
          <Label htmlFor="school">School *</Label>
          <Input id="school" name="school" value={form.school} onChange={handleChange} required placeholder="School" />
        </div>
        <div>
          <Label htmlFor="schoolDistrict">School district *</Label>
          <Input id="schoolDistrict" name="schoolDistrict" value={form.schoolDistrict} onChange={handleChange} required placeholder="School District" />
        </div>
        <div>
          <Label htmlFor="referral">How did you hear about us? *</Label>
          <Input id="referral" name="referral" value={form.referral} onChange={handleChange} required placeholder="Referral" />
        </div>
        <div className="mt-6">
          <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />
          <div ref={turnstileRef} className="cf-turnstile" data-sitekey={process.env.NEXT_PUBLIC_SITE_KEY || ""} data-callback="onTurnstileSuccess"></div>
        </div>
        <Confetti isActive={showConfetti} buttonRef={submitBtnRef} />
        <Button
          ref={submitBtnRef}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-xl w-full"
          type="submit"
          disabled={submitting || !turnstileChecked}
          onMouseEnter={() => setShowConfetti(true)}
          onMouseLeave={() => setShowConfetti(false)}
        >
          {submitting ? "Submitting..." : "Submit Application"}
        </Button>
        {submitted && (
          <div className="text-center mt-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <h3 className="text-2xl font-bold text-green-600 mb-4">Application Submitted!</h3>
            <p className="text-gray-700 mb-6">Thank you for volunteering! We will contact you soon with more details.</p>
            <Button onClick={() => setSubmitted(false)} className="bg-blue-600 hover:bg-blue-700">Submit Another Response</Button>
          </div>
        )}
      </form>
      <style jsx>{`
        .police-tape {
          border: 4px solid #222;
          letter-spacing: 2px;
          text-shadow: 1px 1px 2px #fff, 0 0 2px #222;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
          transform: rotate(-6deg);
        }
      `}</style>
    </div>
  );
}

export default function VolunteerPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="container mx-auto px-4">
          <div className="bg-blue-100 border border-blue-300 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-blue-900 mb-4">Volunteer with Future Leaders Initiative</h1>
            <p className="mb-2">Join us in empowering the next generation! Fill out the form below to volunteer for our research division. Marketing is temporarily unavailable.</p>
            <p className="mb-2">We welcome students from all schools and districts. Your help will make a real impact!</p>
          </div>
          <VolunteerForm />
        </div>
      </div>
      <Footer />
      <style jsx global>{`
  .rainbow-move-text {
    font-weight: bold;
    background: linear-gradient(270deg, #ff5e62, #ff9966, #f9d423, #a8ff78, #43cea2, #38f9d7, #5b86e5, #a17fe0, #f953c6, #ff5e62);
    background-size: 200% 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    animation: rainbow-move-side 7s linear infinite;
    display: inline-block;
  }
  @keyframes rainbow-move-side {
    0% { background-position: 0% 50%; }
    100% { background-position: 200% 50%; }
  }
`}</style>
    </>
  );
}
