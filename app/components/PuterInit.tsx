"use client"
import { useEffect } from "react";
import { usePuterStore } from "../lib/puter";

const PuterInit = () => {
  const { init } = usePuterStore();
  useEffect(() => {
    init();
  }, [init]);
  return null;
};

export default PuterInit; 