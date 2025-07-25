"use client"
import { Navbar } from "./components/navbar";
import { ResumeCard } from "./components/ResumeCard";
import { usePuterStore } from "./lib/puter";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const {auth, kv} = usePuterStore();
  const router = useRouter();
  
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loadingResumes, setLoadingResumes] = useState(false);
  
  useEffect(() => {
    if(!auth.isAuthenticated) {
      router.push("/auth");
    }
  }, [auth.isAuthenticated, router]);

  useEffect(() => {
    const loadResumes = async () => {
      setLoadingResumes(true);
      const resumes = await (kv.list("resume:*", true)) as KVItem[];
      
      const paredResumes = resumes?.map((resume) => (
        JSON.parse(resume.value) as Resume
      ))
     
      setResumes(paredResumes || []);
      setLoadingResumes(false);
    }

    loadResumes();
  }, []);

  return (
      <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Track Your Applications & Resume Ratings</h1>
        {!loadingResumes && resumes.length === 0 ? (
          <h2>No resumes found. Upload your resume to get started.</h2>
        ) : (
          <h2>Review your resume and track your applications and Ai powered feedback</h2>
        )}
      </div>

      {loadingResumes && (
        <div className="flex flex-col items-center justify-center">
          <img src="/images/resume-scan-2.gif" className="w-[200px] " />
        </div>
      )}

      {resumes.length > 0 && !loadingResumes && (
      <div className="resumes-section">
        {resumes.map((resume) => (
          <ResumeCard key={resume.id} resume={resume} />
        ))}
      </div>
    )}

    {!loadingResumes && resumes.length === 0 && (
      <div className="flex flex-col items-center justify-center mt-10 gap-4">
        <Link href="/upload" className="primary-button w-fit text-xl font-semibold">Upload Resume</Link>
        
      </div>
    )}
    </section>

    
    </main>
  );
}
