import Footer from "../../pages/Footer";
import Header from "../../pages/Header";

interface LayoutProps {
    children: React.ReactNode
}
export default function Layout({children}:LayoutProps )  {
  return (
      <div>
          <Header />
          {children}
          <Footer />
    </div>
  )
}



