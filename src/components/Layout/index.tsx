import Footer from "../../pages/Footer";
import { FormHeading } from "../../pages/FormHeading";
import Header from "../../pages/Header";

interface LayoutProps {
    children: React.ReactNode
}
export default function Layout({children}:LayoutProps )  {
  return (
      <div>
      <Header />
      <FormHeading />
          {children}
          <Footer />
    </div>
  )
}



