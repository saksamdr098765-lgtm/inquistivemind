import { getAllCourses } from "@/app/data/courses";
import { blogs } from "@/app/data/blogs";
import { services } from "@/app/data/services";
import { locations } from "@/app/data/locations";

export default function sitemap() {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.inquistivemindacademy.com").replace(/\/$/, "");
  const currentDate = new Date();

  // 1. Core High-Priority Pages
  const staticPages = [
    { url: `${siteUrl}`, lastModified: currentDate, changeFrequency: "daily", priority: 1.0 },
    { url: `${siteUrl}/courses`, lastModified: currentDate, changeFrequency: "daily", priority: 0.95 },
    { url: `${siteUrl}/book-free-trial`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/about`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/find-tutor`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/become-a-tutor`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/blogs`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/services`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/locations`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.8 },
  ];

  // 2. Dynamic Course Routes (The primary deliverable)
  const coursePages = getAllCourses().map((course) => ({
    url: `${siteUrl}/courses/${course.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // 3. Dynamic Blog Routes
  const blogPages = (blogs || []).map((blog) => ({
    url: `${siteUrl}/blogs/${blog.slug}`,
    lastModified: blog.updatedAt ? new Date(blog.updatedAt) : currentDate,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // 4. Dynamic Services Routes
  const servicePages = (services || []).map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  // 5. Dynamic Locations Routes
  const locationPages = (locations || []).map((location) => ({
    url: `${siteUrl}/locations/${location.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticPages, ...coursePages, ...blogPages, ...servicePages, ...locationPages];
}
