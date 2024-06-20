import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { NAVBAR_HEIGHT } from "@/constants/navbar";
import { Providers } from "@/providers/Providers";
import "./globals.css";

//👇 Import Montserrat font
import { Montserrat } from "next/font/google";

//👇 Configure our font object
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});
/**
 * Layout component which applies to all pages.
 * Contains:
 * - Navbar
 * - Footer
 * - Children (page content)
 * It also applies the theme to the page.
 * @param children Page content
 * @returns Layout component
 */
export default function RootLayoutWithProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning className={montserrat.className}>
        <body>
          <Providers>
            <Navbar />
            <main
              className={`
                bg-white dark:bg-neutral-900
                transition-colors duration-700 ease-in-out
                min-h-[calc(100vh-4rem)]
                pt-${NAVBAR_HEIGHT}
              `}
            >
              <div
                className="
                  mx-auto max-w-3xl md:max-w-6xl
                  min-h-[85vh]
                  pt-10 p-4
                "
              >
                {children}
                <Footer />
              </div>
            </main>
          </Providers>
        </body>
      </html>
    </>
  );
}
