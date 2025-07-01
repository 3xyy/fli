"use client";

import React, { useEffect, useState } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SCHOOL_DISTRICTS = [
  "FUSD (Fremont)",
  "NHUSD (New Haven)",
  "NUSD (Newark)",
  "HUSD (Hayward)",
  "MVUSD (Milpitas)",
  "OUSD (Oakland)",
  "SJUSD (San Jose)",
  "Other"
];
const GRADES = Array.from({ length: 12 }, (_, i) => `${i + 1}`);
const SUBJECTS = [
  "Math",
  "English",
  "Science",
  "History",
  "Computer Science",
  "Foreign Language",
  "Art",
  "Music",
  "Other"
];

const LEGAL_WAIVER = `As the parent or legal guardian, I confirm that I have the authority to allow my child or dependent to take part in the activities and events. I give my full consent and, on behalf of myself and my child or dependent, I agree to WAIVE, RELEASE, AND DISCHARGE any and all liability. This includes, but is not limited to, any liability caused by the negligence or fault of the Future Leaders Initiative (FLI) and its directors, officers, employees, volunteers, representatives, agents, and sponsors.\n\nI also agree to protect and hold harmless all the parties mentioned above from any responsibility, loss, claim, or damage that may arise due to my lack of authority or capacity to give this consent. I make this release on behalf of both myself and my child or dependent.\n\nI understand that my child will need access to a computer or device with internet connection to participate in the virtual event. I accept responsibility for ensuring my child has the necessary equipment and internet access. I agree that my child will behave respectfully and follow all rules during online sessions. I understand that inappropriate behavior may result in removal from the program. I understand that while FLI takes reasonable steps to ensure online safety, they cannot guarantee complete privacy or data security in a virtual setting. I give permission for my child to use the necessary online platforms and tools selected by FLI (e.g., Zoom, Google Meet, etc.).`;

// Add types for props to fix implicit any errors
interface MultiSelectProps {
  options: string[];
  value: string[];
  onChange: (value: string[]) => void;
  label: string;
}
function MultiSelect({ options, value, onChange, label }: MultiSelectProps) {
  return (
    <div>
      <Label className="font-semibold mb-1 block">{label}</Label>
      <div className="flex flex-wrap gap-2">
        {options.map((opt: string) => (
          <button
            type="button"
            key={opt}
            className={`px-3 py-1 rounded-full border text-sm ${value.includes(opt) ? "bg-blue-600 text-white border-blue-600" : "bg-white text-blue-800 border-blue-300"}`}
            onClick={() =>
              value.includes(opt)
                ? onChange(value.filter((v) => v !== opt))
                : onChange([...value, opt])
            }
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

interface WaiverCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}
function WaiverCheckbox({ checked, onChange }: WaiverCheckboxProps) {
  const [scrolled, setScrolled] = useState(false);
  return (
    <div className="mt-6">
      <div
        className="h-40 overflow-y-auto bg-blue-50 p-4 rounded border border-blue-200 text-sm text-blue-900 mb-2"
        onScroll={e => {
          const el = e.target as HTMLDivElement;
          if (el.scrollTop + el.clientHeight >= el.scrollHeight - 10) setScrolled(true);
        }}
      >
        {LEGAL_WAIVER.split("\n").map((p, i) => <p key={i} className="mb-2">{p}</p>)}
      </div>
      <label className="flex items-center gap-2">
        <input type="checkbox" disabled={!scrolled} checked={checked} onChange={e => onChange(e.target.checked)} />
        <span className={!scrolled ? "text-gray-400" : ""}>I agree to the above waiver</span>
      </label>
    </div>
  );
}

function TutorForm() {
  const [form, setForm] = useState<{
    name: string;
    email: string;
    district: string;
    school: string;
    grade: string;
    experience: string;
    why: string;
    grades: string[];
    availability: string;
    subjects: string[];
    subjectGrades: string;
    parentName: string;
    parentEmail: string;
    waiver: boolean;
  }>({
    name: "",
    email: "",
    district: SCHOOL_DISTRICTS[0],
    school: "",
    grade: "",
    experience: "",
    why: "",
    grades: [],
    availability: "",
    subjects: [],
    subjectGrades: "",
    parentName: "",
    parentEmail: "",
    waiver: false
  });
  const turnstileRef = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.turnstile && turnstileRef.current) {
      // Remove any previous widget
      turnstileRef.current.innerHTML = '';
      window.turnstile.render(turnstileRef.current, {
        sitekey: process.env.NEXT_PUBLIC_SITE_KEY || '',
        callback: 'javascriptCallback',
      });
    }
  }, []);
  return (
    <form className="bg-white rounded-xl shadow-xl p-8 max-w-2xl mx-auto mt-10 mb-16 space-y-6" action={process.env.NEXT_PUBLIC_FORMSPARK_TUTTUT_ENDPOINT} method="POST">
      <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">Tutor Application</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label>Tutor Name</Label>
          <Input name="name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required />
        </div>
        <div>
          <Label>Tutor Email</Label>
          <Input name="email" type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} required />
        </div>
        <div>
          <Label>School District</Label>
          <select
            name="district"
            className="w-full border rounded px-3 py-2 mt-1 text-blue-900 bg-white"
            value={form.district}
            onChange={e => setForm(f => ({ ...f, district: e.target.value }))}
            required
          >
            {SCHOOL_DISTRICTS.map(d => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>
        <div>
          <Label>School Name</Label>
          <Input name="school" value={form.school} onChange={e => setForm(f => ({ ...f, school: e.target.value }))} required />
        </div>
        <div>
          <Label>Grade this Fall</Label>
          <select
            name="grade"
            className="w-full border rounded px-3 py-2 mt-1 text-blue-900 bg-white"
            value={form.grade}
            onChange={e => setForm(f => ({ ...f, grade: (e.target as HTMLSelectElement).value }))}
            required
          >
            <option value="">Select</option>
            {GRADES.map(g => <option key={g} value={g}>{g}</option>)}
          </select>
        </div>
        <div className="md:col-span-2">
          <Label>Prior Experience (max 150 words)</Label>
          <Textarea name="experience" maxLength={1200} value={form.experience} onChange={e => setForm(f => ({ ...f, experience: e.target.value }))} required />
        </div>
        <div className="md:col-span-2">
          <Label>Why do you want to be a tutor? (max 150 words)</Label>
          <Textarea name="why" maxLength={1200} value={form.why} onChange={e => setForm(f => ({ ...f, why: e.target.value }))} required />
        </div>
        <div className="md:col-span-2">
          <MultiSelect options={GRADES} value={form.grades} onChange={v => setForm(f => ({ ...f, grades: v }))} label="Grades comfortable teaching (1-12)" />
          {/* Hidden input for grades array */}
          <input type="hidden" name="grades" value={form.grades.join(",")} />
        </div>
        <div className="md:col-span-2">
          <Label>When are you available to tutor?</Label>
          <Input name="availability" value={form.availability} onChange={e => setForm(f => ({ ...f, availability: e.target.value }))} required />
        </div>
        <div className="md:col-span-2">
          <MultiSelect options={SUBJECTS} value={form.subjects} onChange={v => setForm(f => ({ ...f, subjects: v }))} label="Subjects confident teaching" />
          {/* Hidden input for subjects array */}
          <input type="hidden" name="subjects" value={form.subjects.join(",")} />
        </div>
        <div className="md:col-span-2">
          <Label>Grades for each of these subjects</Label>
          <Input name="subjectGrades" value={form.subjectGrades} onChange={e => setForm(f => ({ ...f, subjectGrades: e.target.value }))} required />
        </div>
        <div>
          <Label>Parent Name</Label>
          <Input name="parentName" value={form.parentName} onChange={e => setForm(f => ({ ...f, parentName: e.target.value }))} required />
        </div>
        <div>
          <Label>Parent Email</Label>
          <Input name="parentEmail" type="email" value={form.parentEmail} onChange={e => setForm(f => ({ ...f, parentEmail: e.target.value }))} required />
        </div>
      </div>
      <WaiverCheckbox checked={form.waiver} onChange={v => setForm(f => ({ ...f, waiver: v }))} />
      <div className="mt-6">
        <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />
        <div ref={turnstileRef} className="cf-turnstile" data-sitekey={process.env.NEXT_PUBLIC_SITE_KEY || ""} data-callback="javascriptCallback"></div>
      </div>
      <div className="text-center mt-6">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-xl" type="submit" disabled={!form.waiver}>Submit Tutor Application</Button>
      </div>
    </form>
  );
}

function StudentForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    district: SCHOOL_DISTRICTS[0],
    school: "",
    grade: "",
    why: "",
    availability: "",
    parentName: "",
    parentEmail: "",
    parentPhone: "",
    waiver: false
  });
  const turnstileRef = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.turnstile && turnstileRef.current) {
      // Remove any previous widget
      turnstileRef.current.innerHTML = '';
      window.turnstile.render(turnstileRef.current, {
        sitekey: process.env.NEXT_PUBLIC_SITE_KEY || '',
        callback: 'javascriptCallback',
      });
    }
  }, []);
  return (
    <form className="bg-white rounded-xl shadow-xl p-8 max-w-2xl mx-auto mt-10 mb-16 space-y-6" action={process.env.NEXT_PUBLIC_FORMSPARK_TUTSTU_ENDPOINT} method="POST">
      <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">Student Application</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label>Student Name</Label>
          <Input name="name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required />
        </div>
        <div>
          <Label>Student Email (if applicable)</Label>
          <Input name="email" type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
        </div>
        <div>
          <Label>School District</Label>
          <select
            name="district"
            className="w-full border rounded px-3 py-2 mt-1 text-blue-900 bg-white"
            value={form.district}
            onChange={e => setForm(f => ({ ...f, district: e.target.value }))}
            required
          >
            {SCHOOL_DISTRICTS.map(d => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>
        <div>
          <Label>School Name</Label>
          <Input name="school" value={form.school} onChange={e => setForm(f => ({ ...f, school: e.target.value }))} required />
        </div>
        <div>
          <Label>Grade this Fall</Label>
          <select
            name="grade"
            className="w-full border rounded px-3 py-2 mt-1 text-blue-900 bg-white"
            value={form.grade}
            onChange={e => setForm(f => ({ ...f, grade: (e.target as HTMLSelectElement).value }))}
            required
          >
            <option value="">Select</option>
            {GRADES.map(g => <option key={g} value={g}>{g}</option>)}
          </select>
        </div>
        <div className="md:col-span-2">
          <Label>Why does your student need tutoring?</Label>
          <Input name="why" value={form.why} onChange={e => setForm(f => ({ ...f, why: e.target.value }))} required />
        </div>
        <div className="md:col-span-2">
          <Label>When are you available to receive tutoring?</Label>
          <Input name="availability" value={form.availability} onChange={e => setForm(f => ({ ...f, availability: e.target.value }))} required />
        </div>
        <div>
          <Label>Parent Name</Label>
          <Input name="parentName" value={form.parentName} onChange={e => setForm(f => ({ ...f, parentName: e.target.value }))} required />
        </div>
        <div>
          <Label>Parent Email</Label>
          <Input name="parentEmail" type="email" value={form.parentEmail} onChange={e => setForm(f => ({ ...f, parentEmail: e.target.value }))} required />
        </div>
        <div>
          <Label>Parent Phone Number</Label>
          <Input name="parentPhone" value={form.parentPhone} onChange={e => setForm(f => ({ ...f, parentPhone: e.target.value }))} required />
        </div>
      </div>
      <WaiverCheckbox checked={form.waiver} onChange={v => setForm(f => ({ ...f, waiver: v }))} />
      <div className="mt-6">
        <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />
        <div ref={turnstileRef} className="cf-turnstile" data-sitekey={process.env.NEXT_PUBLIC_SITE_KEY || ""} data-callback="javascriptCallback"></div>
      </div>
      <div className="text-center mt-6">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-xl" type="submit" disabled={!form.waiver}>Submit Student Application</Button>
      </div>
    </form>
  );
}

export default function TutoringPage() {
  const [tab, setTab] = useState("tutor");
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-4 mb-8">
            <Button className={tab === "tutor" ? "bg-blue-600 text-white" : "bg-white text-blue-800 border border-blue-600"} onClick={() => setTab("tutor")}>Tutor Form</Button>
            <Button className={tab === "student" ? "bg-blue-600 text-white" : "bg-white text-blue-800 border border-blue-600"} onClick={() => setTab("student")}>Student Form</Button>
          </div>
          {tab === "tutor" ? <TutorForm /> : <StudentForm />}
        </div>
      </div>
      <Footer />
    </>
  );
}

declare global {
  interface Window {
    turnstile?: {
      render: (container: Element, options: { sitekey: string; callback: string }) => void;
    };
  }
}
