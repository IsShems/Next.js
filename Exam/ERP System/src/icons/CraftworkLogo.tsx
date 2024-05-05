import * as React from "react"
import { SVGProps } from "react"

export const CraftworkLogo = (props: SVGProps<SVGSVGElement>) => {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={36}
      fill="none"
      {...props}
    >
      <path
        fill="#000"
        fillRule="evenodd"
        d="M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18Zm-17.916 2.558c3.317-4.691 3.464-7.535 0-12.558-3.53 5.13-3.075 7.85 0 12.558Zm-1.575 6.112c.527-5.722-.768-8.258-6.28-10.876-.492 6.208 1.262 8.336 6.28 10.876Zm3.172 0c-.528-5.722.767-8.258 6.279-10.876.492 6.208-1.262 8.336-6.28 10.876Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
