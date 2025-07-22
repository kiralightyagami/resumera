"use client"
import { usePuterStore } from "../lib/puter"
import { useEffect } from "react";
import { useRouter, } from "next/navigation";



const auth = () => {
  const {isLoading , auth} = usePuterStore();
  const router = useRouter();
  

  useEffect(() => {
    if(auth.isAuthenticated) {
      router.push("/");
    }
  }, [auth.isAuthenticated, router]);
  return (
    <main className="bg-[url('/images/bg-auth.svg')] bg-cover min-h-screen flex items-center justify-center">
      <div className="gradient-border shadow-lg">
        <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
          <div className="flex flex-col items-center gap-2 text-center">
            <h1>Welcome</h1>
            <h2>Log in to your account</h2>
          </div>
          <div>
            {isLoading ? (
              <button className="auth-button animate-pulse">
                <p>Signing you in...</p>
              </button>
            ) : (
              <>
              {auth.isAuthenticated ? (
                <button className="auth-button" onClick={() => auth.signOut()} >
                  <p>Sign out</p>
                </button>
              ) : (
                <button className="auth-button" onClick={() => auth.signIn()}>
                  <p>Sign in</p>
                </button>
              )}
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  )
}

export default auth