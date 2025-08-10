// ScrollToTopButton.jsx
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // يمكنك استبداله بأي أيقونة تفضلها

export default function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  // Show button on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return show ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 bg-mainColor text-white p-3 hover:-translate-y-1 hover:shadow-xl
 rounded-full shadow-lg hover:bg-secondaryColor transition duration-300"
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  ) : null;
}
