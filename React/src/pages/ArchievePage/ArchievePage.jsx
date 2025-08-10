import React from 'react'

import PagesHeader from '../../components/PagesHeader/PagesHeader'
import ArchiveNews from '../../components/ArchieveNews/ArchieveNews'
export default function ArchievePage() {
  return (
   <>
    <div className="w-full bg-gray-50">
         <PagesHeader
             links={[
               { to: "/", label: "Home" },
               { to: "/archive", label: "Archive News" },
             ]}
           />
           <ArchiveNews/>
      </div>
   
   
   </>
  )
}
