"use client";

import React, { useState, useRef, useEffect } from "react";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PIXELMINDS_FORM_ENDPOINT = "https://submit-form.com/O6ZoVpmTP";

function PixelmindsForm() {
  const [form, setForm] = useState({
    studentName: "",
    personalEmail: "",
    parentName: "",
    parentEmail: "",
    waiver: false
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const turnstileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).turnstile && turnstileRef.current) {
      (turnstileRef.current as HTMLDivElement).innerHTML = '';
      (window as any).turnstile.render(turnstileRef.current, {
        sitekey: process.env.NEXT_PUBLIC_SITE_KEY || '',
        callback: 'javascriptCallback',
      });
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const formElement = e.target as HTMLFormElement;
      // Submit using the browser's default form submission (for Formspark compatibility)
      formElement.submit();
      setSubmitted(true);
      setForm({ studentName: "", personalEmail: "", parentName: "", parentEmail: "", waiver: false });
    } catch {
      alert("Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="bg-white rounded-xl shadow-xl p-8 max-w-2xl mx-auto mt-10 mb-16 space-y-6" action={PIXELMINDS_FORM_ENDPOINT} method="POST" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">PixelMind Python 101 Sign-Up</h2>
      {submitted ? (
        <div className="text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <h3 className="text-2xl font-bold text-green-600 mb-4">Registration Successful!</h3>
          <p className="text-gray-700 mb-6">Thank you for signing up for PixelMind Python 101. We will contact you soon with more details.</p>
          <Button onClick={() => setSubmitted(false)} className="bg-blue-600 hover:bg-blue-700">Register Another Student</Button>
        </div>
      ) : (
        <>
          <div>
            <Label htmlFor="studentName">What is the student's full name (first & last)? *</Label>
            <Input id="studentName" name="studentName" value={form.studentName} onChange={handleChange} required placeholder="Full Name" />
          </div>
          <div>
            <Label htmlFor="personalEmail">Personal email? (leave empty if you don't have one)</Label>
            <Input id="personalEmail" name="personalEmail" value={form.personalEmail} onChange={handleChange} placeholder="Personal Email (optional)" type="email" />
          </div>
          <div>
            <Label htmlFor="parentName">Parent's Name? *</Label>
            <Input id="parentName" name="parentName" value={form.parentName} onChange={handleChange} required placeholder="Parent's Name" />
          </div>
          <div>
            <Label htmlFor="parentEmail">Parent's email? *</Label>
            <Input id="parentEmail" name="parentEmail" value={form.parentEmail} onChange={handleChange} required placeholder="Parent's Email" type="email" />
          </div>
          <div className="mt-6">
            <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />
            <div ref={turnstileRef} className="cf-turnstile" data-sitekey={process.env.NEXT_PUBLIC_SITE_KEY || ""} data-callback="javascriptCallback"></div>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-xl w-full" type="submit" disabled={submitting}>{submitting ? "Submitting..." : "Submit Registration"}</Button>
        </>
      )}
    </form>
  );
}

export default function PixelmindsPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="container mx-auto px-4">
          <div className="bg-blue-100 border border-blue-300 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-blue-900 mb-4">PixelMind Python 101 Summer Sign-Ups</h1>
            <p className="mb-2">There will be a total of 7 sessions (completely <span className="rainbow-move-text">free</span>). Each session will be <b>weekly</b> on <b>Friday at 8 PM</b> beginning on <b>August 3rd, 2025</b> to <b>September 14th, 2025</b>.</p>
            <p className="mb-2">Here is a link to a document containing the course outline (week-by-week): <a href="https://docs.google.com/document/d/1uvFINCp85JAi0u_085hcxiXIyN-OQYlvSXjufKcJLp4/edit?usp=sharing" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">Course Outline</a>.</p>
            <p className="mb-2">A bit about me: I am Anish Sahoo, a soon-to-be freshman (9th grader) at Mission San Jose High School. I am also a Life Scout and I am a part of Troop 110. I love computer science and things related to it so I started PixelMind as a nonprofit to help spread the power of computer science and all the opportunities that it can bring. All the classes are completely free and available to anyone!</p>
            <p>While previous experience in Python or a coding language is not required, you should be familiar with your operating system (Windows / Mac) and know how to do basic file operations (ex. copying files / moving files).</p>
          </div>
          <PixelmindsForm />
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
