// import Footer from './footer'
// import Meta from './meta'
// import Buttonlist from './buttonlist'
import React from "react";
import Footer from "../footer/footer";
import { Navbar } from "../navbar-component/navbar-component";
type ComponentWithChildProps = React.PropsWithChildren<{ example?: string }>;

export default function Layout({ children }: ComponentWithChildProps) {
  return (
    <div className="mx-4 lg:mx-8">
      {/* <Meta /> */}
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
