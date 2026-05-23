"use server";

// Google Form submission details
const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/15kSZHIYH6wd3dOOJK9o6uTRiQoaOMyJtI7wlnzGDDqo/formResponse";
const EMAIL_ENTRY_ID = "entry.613693305";

export async function joinWaitlist(
  _prev: { success: boolean; error?: string } | null,
  formData: FormData
): Promise<{ success: boolean; error?: string }> {
  const email = (formData.get("email") as string | null)?.trim().toLowerCase();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  try {
    const body = new URLSearchParams();
    body.set(EMAIL_ENTRY_ID, email);

    await fetch(GOOGLE_FORM_ACTION, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
    });
  } catch {
    // Google Forms always returns a redirect — treat any response as success
  }

  return { success: true };
}
