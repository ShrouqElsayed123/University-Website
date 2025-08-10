import React, { useEffect, useState } from 'react'
import {
  Calendar,
  User,
  MessageCircle,
  ArrowRight,
  ArrowLeft,
  BookOpen
}
  from 'lucide-react';
import img1 from '../../../assets/images/blog1.jpg'
import axios from 'axios';
import { Trans, useTranslation } from 'react-i18next';

// const blogPosts = [
//   {
//     id: 1,
//     image: "img1",
//     date: "June 18, 2024",
//     author: "Alicia Davis",
//     // comments: "03",
//     title: "رئيس جامعة المنوفية والمكلف بتسيير أعمال جامعة المنوفية الأهلية يشارك فى اجتماع مجلس الجامعات الأهلية",
//   },
//   {
//     id: 2,
//     image: img1,
//     date: "June 18, 2024",
//     author: "Alicia Davis",
//     // comments: "03",
//     title: "رئيس جامعة المنوفية والمكلف بتسيير أعمال جامعة المنوفية الأهلية يشارك فى اجتماع مجلس الجامعات الأهلية",
//   },
//   {
//     id: 3,
//     image: img1,
//     date: "June 18, 2024",
//     author: "Alicia Davis",
//     // comments: "03",
//     title: "رئيس جامعة المنوفية والمكلف بتسيير أعمال جامعة المنوفية الأهلية يشارك فى اجتماع مجلس الجامعات الأهلية",

//   },
// ]

export default function LatestNews() {
  const [newsList, setNewsList] = useState([]);
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  async function getData() {
    try {
      const options = {
        method: "GET",
        url: "http://localhost:1337/api/university-news1"
      }
      const res = await axios.request(options);

      if (res.statusText == "OK") {
        let { data } = res
        console.log(data.data[0].news);

        setNewsList(data.data[0].news)

      }
    }
    catch (error) {
      console.log(error);

    }
  }



  useEffect(() => {
    getData()
  }, [])

  return (
    <>

      <section className=" bg-gray-0 dark:bg-gray-900 transition-colors duration-300 my-home-section-margin p-home-section-padding"
        data-aos="fade-left"
      >
        <div className="max-w-7xl mx-auto flex justify-center items-center flex-col gap-home-section-gap">
          {/* Header */}
          <div className="flex items-center gap-2 text-secondaryColorLight1 cursor-pointer select-none border-b-[1px] border-secondaryColorLight1 w-fit">
            <BookOpen className="w-6 h-6" />
            <span className="text-sm  tracking-widest uppercase">
              {t('tnew')}
            </span>
          </div>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              <Trans
                i18nKey="new"
                components={{ highlight: <span className="text-mainColor" /> }}
              />
            </h2>
          </div>

          {/* Blog Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsList.map((post, key) => (
              <article
                key={key}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={img1}
                    alt="test"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />

                  {/* Date */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-secondaryColor text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-300">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4 text-secondaryColor" />
                      <span>بواسطة {post.author}</span>
                    </div>
                    {/* <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4 text-secondaryColor" />
                      <span>{post.comments} تعليقات</span>
                    </div> */}
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 leading-tight line-clamp-2 hover:text-mainColor transition-colors duration-200">
                    {post.title}
                  </h3>

                  <button className="bg-mainColor hover:bg-secondaryColor text-white btn-filled2 flex items-center gap-2 group">
                    {t('more')}
                    {i18n.language == 'ar'
                      ? <ArrowLeft className="w-4 h-4 transform transition-transform duration-200 group-hover:-translate-x-1" />
                      : <ArrowRight className="w-4 h-4 transform transition-transform duration-200 group-hover:-translate-x-1" />

                    }
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
