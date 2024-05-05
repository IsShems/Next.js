import * as React from "react"
interface Props {
  className: string | null
}

export const UserIcon = (props: Props) => {
  return (
    <svg
    opacity={0.2}

    className={props.className ? props.className : ''}

      width={36}
      height={36}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 20.8889C19 21.5022 18.5211 22 17.9286 22C17.3361 22 16.8571 21.5022 16.8571 20.8889C16.8571 17.8256 14.4539 15.3333 11.5 15.3333C8.54607 15.3333 6.14286 17.8256 6.14286 20.8889C6.14286 21.5022 5.66393 22 5.07143 22C4.47893 22 4 21.5022 4 20.8889C4 16.6 7.36536 13.1111 11.5 13.1111C15.6346 13.1111 19 16.6 19 20.8889ZM11.5 4.22222C12.6818 4.22222 13.6429 5.21889 13.6429 6.44444C13.6429 7.67 12.6818 8.66667 11.5 8.66667C10.3182 8.66667 9.35714 7.67 9.35714 6.44444C9.35714 5.21889 10.3182 4.22222 11.5 4.22222ZM11.5 10.8889C13.8636 10.8889 15.7857 8.89556 15.7857 6.44444C15.7857 3.99333 13.8636 2 11.5 2C9.13643 2 7.21429 3.99333 7.21429 6.44444C7.21429 8.89556 9.13643 10.8889 11.5 10.8889Z" fill="black" />
    </svg>
  )

}
