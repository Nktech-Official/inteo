"use server";
export interface formData {
  phone: string;
  subject: string;
  message: string;
}
export async function handleContact(formData: formData) {
  // Perform server-side operations using formData (e.g., database interactions)
  console.log("Form data:", formData);

  // Optionally return a response object
  return { message: "Message send successfully!" };
}
