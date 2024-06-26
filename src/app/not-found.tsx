import { Button } from "@/components/shadcn/ui/button";
import developerName from "@/constants/developerName";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: `${developerName} - Page Not Found`,
  description:
    "The page you are looking for does not exist. Navigate back to the home page",
};

export const revalidate = 0; // page will not be cached

/**
 * Rendered when the user navigates to a page that does not exist.
 * Displays a 404 error message saying that the page does not exist.
 *
 * @returns PageMessage component with a 404 error message
 */
export default function NotFound() {
  return (
    <div
      className="
        flex flex-col
        items-center justify-center 
        animate-fadeIn animation-delay-2 
        my-10 py-16 sm:py-24 md:py-28 
        text-center 
        min-h-[60vh]
      "
    >
      <h1 className="text-5xl font-semibold text-blue-800 dark:text-blue-500 my-6">
        404: Page does not exist
      </h1>
      <h2 className="text-neutral-900 dark:text-neutral-100 transition-colors duration-500 text-2xl font-medium mb-4">
        This page does not seem to exist. Navigate back to the home page.
      </h2>
      <Link href={"/"} className="w-full">
        <Button variant="gradient" className="px-20">
          Home
        </Button>
      </Link>
    </div>
  );
}
