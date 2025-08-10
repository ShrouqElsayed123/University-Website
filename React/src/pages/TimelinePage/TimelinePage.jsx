import React from 'react'
import PagesHeader from '../../components/PagesHeader/PagesHeader'
import Timeline1 from '../../components/AboutComponent/Timeline/Timeline1'
import { useTranslation } from 'react-i18next';

export default function TimelinePage() {
  const { t } = useTranslation();

  return (
    <>
      <div className="w-full bg-gray-50">
        <PagesHeader
          links={[
            { to: "/", label: t('home') },
            { to: "/timeline", label: t('establishment') },
          ]}
        />
        <Timeline1 />
      </div>

    </>
  )
}
