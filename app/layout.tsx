import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/shared/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cirql — Turn Cold Emails into Cash",
  description:
    "Cirql blocks unwanted cold emails while letting valuable vendors through - and lets you getpaid for the time you spend with them. With Smart Email Categorization, you’ll stay organized and only focus on what matters.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <Script
          id="vector-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(e,r){try{if(e.vector)return void console.log("Vector snippet included more than once.");var t={};t.q=t.q||[];for(var o=["load","identify","on"],n=function(e){return function(){var r=Array.prototype.slice.call(arguments);t.q.push([e,r])}},c=0;c<o.length;c++){var a=o[c];t[a]=n(a)}if(e.vector=t,!t.loaded){var i=r.createElement("script");i.type="text/javascript",i.async=!0,i.src="https://cdn.vector.co/pixel.js";var l=r.getElementsByTagName("script")[0];l.parentNode.insertBefore(i,l),t.loaded=!0}}catch(e){console.error("Error loading Vector:",e)}}(window,document);
              vector.load("bd5249a4-a107-43e4-a806-ee83184720a5");
            `,
          }}
      />
      <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TQ7ZPGXV');`,
          }}
      />

    </head>
    <body className={`${inter.className} antialiased`}>
    <noscript>
      <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TQ7ZPGXV"
          height="0"
          width="0"
          style={{display: 'none', visibility: 'hidden'}}
      ></iframe>
    </noscript>

    {/* <Header /> */}
    <main>{children}</main>
    <Footer/>
    </body>
    </html>
  );
}
