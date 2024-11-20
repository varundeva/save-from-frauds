import { LucideProps, Moon, SunMedium, Twitter } from "lucide-react"

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  twitter: Twitter,
  logo: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 122.88 108.27">
      <path
        fill="currentColor"
        d="M23.64,38.02l18.19-25.35C46.92,5.64,51.24-0.17,61.19,0c10.8,0.19,14.98,6.68,20.41,14.35 c4.86,6.87,9.73,13.73,14.59,20.6c7.61,10.7,17.47,17.69,5.36,30.34c7.18,4.96,12.1,12.36,14.96,21.97l6.37,21.01h-22.42V84.41 c0-2.33-1.91-4.24-4.24-4.24H26.66c-2.33,0-4.24,1.91-4.24,4.24v23.86H0c5.13-19.34,10.84-37.31,21.65-43.29 c-3.53-2.51-5.46-5.3-6.07-8.32C14.2,49.71,19.85,43.31,23.64,38.02L23.64,38.02z M59.33,69.41h4.36l-0.9,2.65 c5.11-0.35,10.03-3.84,12.65-10.59c2.77-7.14,5.77-3.5,5.5-15.68l-0.2-9.17c0.2-5.16-1.99-7.64-6.54-7.46 c-8.52,4.98-17.05,4.08-25.57,0c-3.5-0.89-5.57,1.49-6.54,6.39c0,5.71-0.88,14.88,1.64,19.9c1.31,2.61,2.8,3.38,4.39,6.69 c2.83,5.88,7.42,9.18,12.14,9.82L59.33,69.41L59.33,69.41z M59.57,56.35c-4.13,0.73-3.21,3.8-9.39-0.11h-1.08 c0.94,1.34,2.16,3.69,3.73,4.23c3.98,1.36,6.19,0.2,8.41-2.57c2.22,2.77,4.42,3.93,8.41,2.57c1.57-0.53,2.79-2.88,3.73-4.23H72.3 c-6.32,4-5.22,0.7-9.68,0.07C61.61,56.16,60.58,56.17,59.57,56.35L59.57,56.35z M59.99,47.47c-3.57-0.46-7.15-0.37-10.72,0 C53.03,44.47,58.34,42.87,59.99,47.47L59.99,47.47z M62.89,47.47c3.57-0.62,7.15-0.52,10.72,0C69.85,44.47,64.54,42.87,62.89,47.47 L62.89,47.47z M57.12,38.01c1.06,0.93,1.96,2.04,2.77,3.25c-3.13-1.91-6.28-3.45-9.54-3.59c0.53-0.7,1.12-1.16,1.77-1.4 C53.98,35.61,55.78,36.84,57.12,38.01L57.12,38.01z M65.76,38.01c-1.06,0.93-1.96,2.04-2.77,3.25c3.13-1.91,6.28-3.45,9.54-3.59 c-0.53-0.7-1.12-1.16-1.77-1.4C68.9,35.61,67.1,36.84,65.76,38.01L65.76,38.01z"
      />
    </svg>
  ),
  gitHub: (props: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  discord: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      {...props}
      viewBox="0 0 24 24"
      fill="currentColor"
      className="icon icon-tabler icons-tabler-filled icon-tabler-brand-discord mb-4"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M14.983 3l.123 .006c2.014 .214 3.527 .672 4.966 1.673a1 1 0 0 1 .371 .488c1.876 5.315 2.373 9.987 1.451 12.28c-1.003 2.005 -2.606 3.553 -4.394 3.553c-.732 0 -1.693 -.968 -2.328 -2.045a21.512 21.512 0 0 0 2.103 -.493a1 1 0 1 0 -.55 -1.924c-3.32 .95 -6.13 .95 -9.45 0a1 1 0 0 0 -.55 1.924c.717 .204 1.416 .37 2.103 .494c-.635 1.075 -1.596 2.044 -2.328 2.044c-1.788 0 -3.391 -1.548 -4.428 -3.629c-.888 -2.217 -.39 -6.89 1.485 -12.204a1 1 0 0 1 .371 -.488c1.439 -1.001 2.952 -1.459 4.966 -1.673a1 1 0 0 1 .935 .435l.063 .107l.651 1.285l.137 -.016a12.97 12.97 0 0 1 2.643 0l.134 .016l.65 -1.284a1 1 0 0 1 .754 -.54l.122 -.009zm-5.983 7a2 2 0 0 0 -1.977 1.697l-.018 .154l-.005 .149l.005 .15a2 2 0 1 0 1.995 -2.15zm6 0a2 2 0 0 0 -1.977 1.697l-.018 .154l-.005 .149l.005 .15a2 2 0 1 0 1.995 -2.15z" />
    </svg>
  ),
}
