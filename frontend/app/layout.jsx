import React from "react";
import "@styles/globals.css";

import Navbar from "@components/Navbar";
import ClientOnly from "@components/ClientOnly";

export const metadata = {
  title: "Portfolio | Prafull Sakharkar",
  description: "My Profile Page",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
    </head>
    <body>
      <ClientOnly>
        <div className='relative z-0 bg-primary'>
          <Navbar />
          {children}
        </div>
      </ClientOnly>
    </body>
  </html>
);

export default RootLayout;

