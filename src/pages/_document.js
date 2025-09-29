import Email from "@/Components/Email/Email";
import Footer from "@/Components/Footer/Footer";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Email />
        <Main />
        <NextScript />
        <Footer/>
      </body>
    </Html>
  );
}
