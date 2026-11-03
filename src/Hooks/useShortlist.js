"use client";

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "inquisitive_shortlist_v1";

export function useShortlist() {
  const [shortlist, setShortlist] = useState([]);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load from localStorage on mount safely
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setShortlist(JSON.parse(stored));
      }
    } catch (e) {
      console.warn("Could not load shortlist from localStorage", e);
    } finally {
      setIsHydrated(true);
    }
  }, []);

  // Save to localStorage whenever shortlist changes
  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(shortlist));
    } catch (e) {
      console.warn("Could not save shortlist to localStorage", e);
    }
  }, [shortlist, isHydrated]);

  const toggleShortlist = useCallback((tutorId) => {
    setShortlist((prev) => {
      if (prev.includes(tutorId)) {
        return prev.filter((id) => id !== tutorId);
      }
      return [...prev, tutorId];
    });
  }, []);

  const addToShortlist = useCallback((tutorId) => {
    setShortlist((prev) => (prev.includes(tutorId) ? prev : [...prev, tutorId]));
  }, []);

  const removeFromShortlist = useCallback((tutorId) => {
    setShortlist((prev) => prev.filter((id) => id !== tutorId));
  }, []);

  const clearShortlist = useCallback(() => {
    setShortlist([]);
  }, []);

  const isShortlisted = useCallback(
    (tutorId) => shortlist.includes(tutorId),
    [shortlist]
  );

  return {
    shortlist,
    shortlistCount: shortlist.length,
    toggleShortlist,
    addToShortlist,
    removeFromShortlist,
    clearShortlist,
    isShortlisted,
    isHydrated,
  };
}
