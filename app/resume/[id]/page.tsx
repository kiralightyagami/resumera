"use client"
import { useParams, useRouter } from "next/navigation";
import { usePuterStore } from "@/app/lib/puter";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Details from "@/app/components/Details";
import { Summary } from "@/app/components/Summary";
import ATS from "@/app/components/ATS";

const Resume = () => {
  const { id } = useParams();
  const { auth, isLoading, fs, ai, kv} = usePuterStore();
  const [imageUrl, setImageUrl] = useState("");
  const [resumeUrl, setResumeUrl] = useState("");
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const router = useRouter();


  useEffect(() => {
    if( !auth.isAuthenticated && !isLoading) {
      router.push(`/auth?next=/resume/${id}`);
    }
  }, [isLoading]);

  useEffect(() => {
    const loadResume = async () => {
      const resume = await kv.get(`resume:${id}`);
      if(!resume) return;

      const data = JSON.parse(resume);

      const resumeBlob = await fs.read(data.resumePath);
      if(!resumeBlob) return;

      const pdfBlob = new Blob([resumeBlob], {type: "application/pdf"});
      const resumeUrl = URL.createObjectURL(pdfBlob);
      setResumeUrl(resumeUrl);

      const imageBlob = await fs.read(data.imagePath);
      if(!imageBlob) return;

      const imageUrl = URL.createObjectURL(imageBlob);
      setImageUrl(imageUrl);

      setFeedback(data.feedback);

    }

    loadResume();
  },[id]);
  
  return (
    <main className="!pt-0">
      <nav className="resume-nav">
        <Link href="/" className="back-button">
          <Image src="/icons/back.svg" alt="logo" width={12} height={12} className="cursor-pointer" />
          <span className="text-gray-800 text-xs font-semibold">Back to Homepage</span>
        </Link>
      </nav>
      <div className="flex flex-row w-full max-lg:flex-col-reverse">
        <section className="feedback-section bg-[url('/images/bg-small.svg')] bg-cover h-[100vh] sticky top-0 items-center justify-center">
          { imageUrl &&  resumeUrl && (
            <div className="animate-in fade-in duration-1000 gradient-border max-sm:m-0 h-[90%] max-wxl:h-fit w-fit">
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                   <img src={imageUrl} className="w-full h-full object-contain rounded-2xl" title="resume" alt="resume"/>
                </a>
            </div>
          )

          }
        </section>
        <section className="feedback-section">
          <h2 className="text-4xl !text-black font-bold">Resume Review</h2>
          {
            feedback ? (
              <div className="flex flex-col gap-8 animate-in fade-in duration-1000"> 
                 <Summary feedback={feedback}/>
                 <ATS score={feedback.ATS.score || 0} suggestions={feedback.ATS.tips || []}/>
                 <Details feedback={feedback} />  
              </div>
            ):(
              <img src="/images/resume-scan-2.gif" className="w-full" />
            )
          }
        </section>
      </div>

    </main>
  )
}

export default Resume