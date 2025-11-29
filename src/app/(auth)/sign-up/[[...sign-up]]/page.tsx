'use client'

import * as Clerk from '@clerk/elements/common'
import * as SignUp from '@clerk/elements/sign-up'
import Link from 'next/link'
import { AuthInput } from '@/components/shared/AuthInput'
import Button from '@/components/shared/Button'
import Heading from '@/components/shared/Heading'
import Image from 'next/image'
import Logo from '@/components/shared/Logo'

export default function SignUpPage() {
  return (
    <div className="w-full max-w-[580px] bg-white border-[2px] border-[#3D3D3D1A] rounded-[24px] p-8 md:p-10 relative z-20 shadow-xl">
      <SignUp.Root>

        {/* STEP 1: INITIAL FORM */}
        <SignUp.Step name="start" className="space-y-6">
          <div className="flex flex-col items-center text-center gap-2 mb-6">
            <Heading className="text-[20px] leading-tight flex justify-center items-center gap-2">
              Join Us
              <Image
                src={"/icon/auth/team.png"}
                alt={"badge icon"}
                width={25}
                height={25}
              />
            </Heading>
            <Logo />
            <Heading
              text="Create your account"
              className="text-[32px] md:text-[40px] leading-tight"
            />
          </div>

          <Clerk.GlobalError />

          {/* Google OAuth Button */}
          <Clerk.Connection name="google" asChild>
            <Button className="w-full justify-center gap-4">
              <Image
                src={"/icon/auth/google.png"}
                alt={"badge icon"}
                width={20}
                height={20}
              />
              Continue with Google
            </Button>
          </Clerk.Connection>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AuthInput label="First Name" name="firstName" />
            <AuthInput label="Last Name" name="lastName" />
          </div>

          <AuthInput label="Email address" name="emailAddress" type="email" />
          <AuthInput label="Password" name="password" type="password" />

          <SignUp.Captcha className="w-full h-auto" />

          <SignUp.Action submit asChild>
            <Button className="w-full justify-center mt-2">
              Create Account
            </Button>
          </SignUp.Action>

          <div className="text-center mt-4">
            <Link href="/sign-in" className="text-[#535353] hover:text-amber-600 transition-colors font-medium">
              Already have an account? Sign in
            </Link>
          </div>
        </SignUp.Step>

        {/* STEP 2: VERIFICATION CODE */}
        <SignUp.Step name="verifications" className="space-y-6">
          <SignUp.Strategy name="email_code">
            <div className="text-center mb-6">
              <Heading text="Check your email" className="text-2xl mb-2" />
              <p className="text-[#535353]">
                We sent a code to
                {/* <SignUp.SafeIdentifier /> */}
              </p>
            </div>

            <AuthInput label="Verification Code" name="code" />

            <SignUp.Action submit asChild>
              <Button className="w-full justify-center">Verify Email</Button>
            </SignUp.Action>
          </SignUp.Strategy>
        </SignUp.Step>

      </SignUp.Root>
    </div>
  )
}