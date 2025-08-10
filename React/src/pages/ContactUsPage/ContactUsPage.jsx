import ContactUs from "../../components/ContactUs/ContactUS";
import PagesHeader from "../../components/PagesHeader/PagesHeader";

export default function ContactUsPage() {
  return (
    <>
      <div className="w-full bg-gray-50 dark:bg-gray-900">
      <PagesHeader
          links={[
            { to: "/", label: "Home" },
            { to: "/contactus", label: "Contact US" },
          ]}
        />
        <ContactUs/>
   </div>
   
      </>
  )
}
