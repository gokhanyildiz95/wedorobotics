const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:4000";

async function request(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  const data = await res.json().catch(() => null);

  if (!res.ok) {
    const message = data?.message || "Bir şeyler ters gitti. Lütfen tekrar deneyin.";
    throw new Error(message);
  }

  return data;
}

export const api = {
  getBlogPosts: () => request("/api/blog"),
  getBlogPost: (slug) => request(`/api/blog/${slug}`),
  getTestimonials: () => request("/api/testimonials"),
  sendContactMessage: (payload) =>
    request("/api/contact", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
};
