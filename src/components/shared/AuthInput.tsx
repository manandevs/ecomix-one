import * as Clerk from '@clerk/elements/common'

export function AuthInput({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <Clerk.Field name={name} className="flex flex-col gap-2 w-full">
      <Clerk.Label className="text-[14px] font-semibold text-[#535353] ml-1">
        {label}
      </Clerk.Label>
      <Clerk.Input
        type={type}
        className="w-full shadow-[0px_3px_0px_0px_#EEEEEE] font-[400] text-[16px] bg-white py-3 px-3.5 outline-none placeholder:text-[#929292] rounded-[16px] border-[1px] border-[#3D3D3D1A] focus:border-amber-500 transition-colors"
      />
      <Clerk.FieldError className="text-red-500 text-[12px] ml-1 mt-1 font-medium" />
    </Clerk.Field>
  )
}