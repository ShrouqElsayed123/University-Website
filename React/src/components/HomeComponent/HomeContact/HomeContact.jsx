import { BookOpen, MoveUpLeft, MoveUpRight, MapPin, Mail, Clock, Send } from 'lucide-react';
import React from 'react'
import { Trans } from 'react-i18next'
import { NavLink } from 'react-router-dom';
import GoogleMap from '../../GoogleMap/GoogleMap';


export default function HomeContact() {
    // const { t } = useTranslation();
    return (
        <>
            <section

                className=" bg-gray-50  transition-colors duration-300 my-home-section-margin p-home-section-padding"

                data-aos="zoom-in-up"
            >
                <div className="max-w-7xl mx-auto flex justify-center items-center flex-col gap-home-section-gap">

                    {/* <div className={`flex items-center  gap-2 text-secondaryColorLight1 cursor-pointer select-none border-b-[1px] border-secondaryColorLight1 w-fit`}>
                        <BookOpen className="w-6 h-6" />
                        <span className="text-sm  tracking-widest uppercase">
                            {t('tcontact')}
                        </span>
                    </div> */}


                    <div className={`text-center `}>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            <Trans
                                i18nKey="contact"
                                components={{ highlight: <span className="text-mainColor" /> }}
                            />
                        </h2>
                    </div>


                    {/* //contentttttttttttttt  */}
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Left content (Google Map) */}
                        <div className="h-full">
                            <GoogleMap />
                        </div>

                        {/* Right content (Cards) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 self-stretch h-full">
                            {/* Office Address */}
                            <div className="bg-white dark:bg-gray-900 rounded-lg p-8 text-center shadow-sm border-b-4 border-mainColor">
                                <div className="w-12 h-12 bg-mainColor rounded-full flex items-center justify-center mx-auto mb-4">
                                    <MapPin className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">University Address</h3>
                                <p className="text-gray-600 dark:text-gray-300">70 km Cairo-Alexandria Agricultural Road</p>
                            </div>

                            {/* Email Us */}
                            <div className="bg-white dark:bg-gray-900 rounded-lg p-8 text-center shadow-sm border-b-4 border-mainColor">
                                <div className="w-12 h-12 bg-mainColor rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Mail className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Email Us</h3>
                                <p className="text-gray-600 dark:text-gray-300">support@mnu.edu.eg</p>
                            </div>

                            {/* Open Time */}
                            <div className="bg-white dark:bg-gray-900 rounded-lg p-8 text-center shadow-sm border-b-4 border-mainColor">
                                <div className="w-12 h-12 bg-mainColor rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Clock className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Open Time</h3>
                                <p className="text-gray-600 dark:text-gray-300">Mon - Sat (10.00AM - 05.30PM)</p>
                            </div>
                        </div>
                    </div>





                </div>
            </section>
        </>
    )
}
