'use client'

import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'
import Link from 'next/link'
import { AuthInput } from '@/components/shared/AuthInput'
import Button from '@/components/shared/Button'
import Heading from '@/components/shared/Heading'
import Image from 'next/image'
import Logo from '@/components/shared/Logo'

export default function SignInPage() {
  return (
    <div className="w-full max-w-[580px] bg-white border-[2px] border-[#3D3D3D1A] rounded-[24px] p-8 md:p-10 relative z-20 shadow-xl">
      <SignIn.Root>

        {/* HEADER */}
        <div className="flex flex-col items-center text-center gap-2 mb-6">
          <Heading className="text-[20px] leading-tight flex justify-center items-center gap-2">
            Welcome Back
            <Image
              src={"/icon/auth/join.png"}
              alt={"badge icon"}
              width={25}
              height={25}
            />
          </Heading>

          <Logo />

          <Heading
            text="Sign in to your account"
            className="text-[32px] md:text-[40px] leading-tight"
          />
        </div>

        <SignIn.Step name="start" className="space-y-6">

          <Clerk.GlobalError />

          {/* Google */}
          <Clerk.Connection name="google" asChild>
            <Button className="w-full justify-center gap-4">
              <Image
                src={"/icon/auth/google.png"}
                alt={"Google icon"}
                width={20}
                height={20}
              />
              Continue with Google
            </Button>
          </Clerk.Connection>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or</span>
            </div>
          </div>

          {/* Input Fields */}
          <AuthInput label="Email address" name="identifier" type="email" />
          <AuthInput label="Password" name="password" type="password" />

          {/* Submit */}
          <SignIn.Action submit asChild>
            <Button className="w-full justify-center mt-2">
              Sign In
            </Button>
          </SignIn.Action>

          {/* Link */}
          <div className="text-center mt-4">
            <Link
              href="/sign-up"
              className="text-[#535353] hover:text-amber-600 transition-colors font-medium"
            >
              Don&apos;t have an account? Sign up
            </Link>
          </div>

        </SignIn.Step>

        {/* STEP 2: 2FA / EMAIL CODE (if enabled) */}
        <SignIn.Step name="verifications" className="space-y-6">
          <SignIn.Strategy name="email_code">
            <div className="text-center mb-6">
              <Heading text="Check your email" className="text-2xl mb-2" />
              <p className="text-[#535353]">
                We sent a sign-in code.
              </p>
            </div>

            <AuthInput label="Verification Code" name="code" />

            <SignIn.Action submit asChild>
              <Button className="w-full justify-center">Verify Code</Button>
            </SignIn.Action>
          </SignIn.Strategy>
        </SignIn.Step>

      </SignIn.Root>
    </div>
  )
}
