import React from 'react'
import PagesHeader from '../../components/PagesHeader/PagesHeader'
import Vision from '../../components/AboutComponent/Vision/Vision'
import { useTranslation } from 'react-i18next';

export default function VisionPage() {
  const { t } = useTranslation();

  return (
    <>
      <div className="w-full bg-gray-50 dark:bg-gray-900">
        <PagesHeader
          links={[
            { to: "/", label: t('home') },
            { to: "/vision", label: t('vision') },
          ]}
        />
        <Vision />
      </div>
    </>
  )
}
