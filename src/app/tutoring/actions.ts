"use server";

import { headers } from "next/headers";

const TUTOR_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPARK_TUTTUT_ENDPOINT!;
const STUDENT_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPARK_TUTSTU_ENDPOINT!;

export type FormState = {
  success: boolean;
  error: boolean;
  message: string;
};

const initialState: FormState = {
  success: false,
  error: false,
  message: "",
};

// Use correct env variables for endpoints
export async function submitTutorForm(prevState: FormState, formData: FormData) {
  const cfTurnstileResponse = formData.get("cf-turnstile-response") as string;
  const ipHeaders = await headers();
  const ip = ipHeaders.get("x-real-ip");
  const verifyFormData = new FormData();
  verifyFormData.append("secret", process.env.NEXT_PRIVATE_TURNSTILE_SECRET_KEY!);
  verifyFormData.append("response", String(cfTurnstileResponse));
  verifyFormData.append("remoteip", String(ip));
  const url = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
  try {
    const result = await fetch(url, { body: verifyFormData, method: "POST" });
    const outcome = await result.json();
    if (!outcome.success) {
      return { success: false, error: true, message: "Invalid CAPTCHA" };
    }
    // Forward form data to submit-form.com
    const submitRes = await fetch(TUTOR_ENDPOINT, {
      method: "POST",
      body: formData,
    });
    if (!submitRes.ok) {
      return { success: false, error: true, message: "Submission failed. Please try again." };
    }
    return { success: true, error: false, message: "" };
  } catch (err) {
    return { success: false, error: true, message: "Unable to verify CAPTCHA or submit form." };
  }
}

export async function submitStudentForm(prevState: FormState, formData: FormData) {
  const cfTurnstileResponse = formData.get("cf-turnstile-response") as string;
  const ipHeaders = await headers();
  const ip = ipHeaders.get("x-real-ip");
  const verifyFormData = new FormData();
  verifyFormData.append("secret", process.env.NEXT_PRIVATE_TURNSTILE_SECRET_KEY!);
  verifyFormData.append("response", String(cfTurnstileResponse));
  verifyFormData.append("remoteip", String(ip));
  const url = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
  try {
    const result = await fetch(url, { body: verifyFormData, method: "POST" });
    const outcome = await result.json();
    if (!outcome.success) {
      return { success: false, error: true, message: "Invalid CAPTCHA" };
    }
    // Forward form data to submit-form.com
    const submitRes = await fetch(STUDENT_ENDPOINT, {
      method: "POST",
      body: formData,
    });
    if (!submitRes.ok) {
      return { success: false, error: true, message: "Submission failed. Please try again." };
    }
    return { success: true, error: false, message: "" };
  } catch (err) {
    return { success: false, error: true, message: "Unable to verify CAPTCHA or submit form." };
  }
}
