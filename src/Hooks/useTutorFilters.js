"use client";

import { useState, useMemo, useCallback } from "react";
import { TUTORS_DATA } from "@/data/tutors";

export function useTutorFilters(initialTutors = TUTORS_DATA) {
  const [search, setSearch] = useState("");
  const [subject, setSubject] = useState("All");
  const [classLevel, setClassLevel] = useState("All");
  const [mode, setMode] = useState("All");
  const [priceRange, setPriceRange] = useState("All");
  const [availableTodayOnly, setAvailableTodayOnly] = useState(false);
  const [sortBy, setSortBy] = useState("recommended");
  const [viewMode, setViewMode] = useState("swipe"); // 'swipe' (mobile-first default) | 'list'

  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (search.trim()) count++;
    if (subject !== "All") count++;
    if (classLevel !== "All") count++;
    if (mode !== "All") count++;
    if (priceRange !== "All") count++;
    if (availableTodayOnly) count++;
    return count;
  }, [search, subject, classLevel, mode, priceRange, availableTodayOnly]);

  const resetFilters = useCallback(() => {
    setSearch("");
    setSubject("All");
    setClassLevel("All");
    setMode("All");
    setPriceRange("All");
    setAvailableTodayOnly(false);
    setSortBy("recommended");
  }, []);

  const filteredTutors = useMemo(() => {
    return initialTutors
      .filter((tutor) => {
        // Search filter
        if (search.trim()) {
          const q = search.toLowerCase();
          const matchesName = tutor.name.toLowerCase().includes(q);
          const matchesTagline = tutor.tagline.toLowerCase().includes(q);
          const matchesSubject = tutor.subjects.some((s) => s.toLowerCase().includes(q));
          if (!matchesName && !matchesTagline && !matchesSubject) return false;
        }

        // Subject filter
        if (subject !== "All") {
          const hasSubject = tutor.subjects.includes(subject) || tutor.primarySubject === subject;
          if (!hasSubject) return false;
        }

        // Class/Level filter
        if (classLevel !== "All") {
          const matchesClass = tutor.classes.some((c) =>
            c.toLowerCase().includes(classLevel.toLowerCase())
          );
          if (!matchesClass) return false;
        }

        // Mode filter
        if (mode !== "All") {
          if (mode === "Online" && tutor.mode !== "Online" && tutor.mode !== "Both") return false;
          if (mode === "Home Tutoring" && tutor.mode !== "Home Tutoring" && tutor.mode !== "Both") return false;
        }

        // Price range filter
        if (priceRange === "under_600" && tutor.pricePerHour >= 600) return false;
        if (priceRange === "600_1000" && (tutor.pricePerHour < 600 || tutor.pricePerHour > 1000)) return false;
        if (priceRange === "above_1000" && tutor.pricePerHour <= 1000) return false;

        // Available Today filter
        if (availableTodayOnly && !tutor.availableToday) return false;

        return true;
      })
      .sort((a, b) => {
        if (sortBy === "price_asc") return a.pricePerHour - b.pricePerHour;
        if (sortBy === "price_desc") return b.pricePerHour - a.pricePerHour;
        if (sortBy === "experience") return b.experienceYears - a.experienceYears;
        // recommended default: experience and verified order
        return b.experienceYears - a.experienceYears;
      });
  }, [
    initialTutors,
    search,
    subject,
    classLevel,
    mode,
    priceRange,
    availableTodayOnly,
    sortBy,
  ]);

  return {
    search,
    setSearch,
    subject,
    setSubject,
    classLevel,
    setClassLevel,
    mode,
    setMode,
    priceRange,
    setPriceRange,
    availableTodayOnly,
    setAvailableTodayOnly,
    sortBy,
    setSortBy,
    viewMode,
    setViewMode,
    activeFiltersCount,
    resetFilters,
    filteredTutors,
  };
}
