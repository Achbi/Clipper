"use server";

import { redirect } from "next/navigation";
import { SignupForm } from "~/components/signup-form";
import { auth } from "~/server/auth";

export default async function Page() {
  const session = await auth();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black p-6 md:p-10">
      <div className="w-full max-w-md rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl p-8">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-white">Create your account</h1>
          <p className="text-gray-400 mt-2 text-sm">
            Sign up to start clipping viral podcast moments with AI magic.
          </p>
        </div>
        <SignupForm />
        <p className="mt-6 text-sm text-gray-400 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-white hover:underline font-medium">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}
