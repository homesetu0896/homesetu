export default function sitemap() {
  const BASE_URL = "https://homesetu.in";

  const services = [
    "carpenter",
    "plumbing",
    "electrician",
    "ac-repair",
    "waterproofing",
    "painting",
  ];

  const serviceUrls = services.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...serviceUrls,
  ];
}