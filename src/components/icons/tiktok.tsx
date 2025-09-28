import type { SVGProps } from "react";

export function TiktokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
      fill="currentColor"
      {...props}
    >
        <path d="M22.99 6.421a5.455 5.455 0 0 1-4.136 4.136c-1.196.34-2.45.34-3.704.34v-4.476h4.476a5.35 5.35 0 0 1 3.364-.001zm-7.917 14.54a5.32 5.32 0 0 1-5.32-5.32c0-.447.054-.888.16-1.317h4.085v-4.476c0-4.965-4.02-8.985-8.985-8.985v4.32a5.49 5.49 0 0 1 5.49 5.49v5.82a5.49 5.49 0 0 1-5.49 5.49v4.32c4.965 0 8.985-4.02 8.985-8.985z"/>
    </svg>
  );
}
