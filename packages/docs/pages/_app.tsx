import "tailwindcss/tailwind.css";
import "nextra-theme-docs/style.css";
import "@bedu-tmp/slider/slider.css";
import { Toaster } from "@bedu-tmp/toast/src";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster topOffset={84} />
    </>
  )
}
