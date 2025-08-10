import { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar, Clock } from "lucide-react";
import img1 from '../../assets/images/slider-image-1.jfif';
import img2 from '../../assets/images/slider-image-2.jfif';
// صور وهمية (استخدم صورك لو حابب)
const placeholder = img1;

// بيانات الأخبار
const newsData = [
  {
    id: 1,
    title: "تطورات جديدة في عالم التكنولوجيا",
    excerpt: "اكتشافات مذهلة في مجال الذكاء الاصطناعي تغير مستقبل التقنية",
    date: "2024-01-15",
    readTime: "5 دقائق",
    image: placeholder,
    category: "تكنولوجيا",
  },
  {
    id: 2,
    title: "الاقتصاد العالمي في عام 2024",
    excerpt: "تحليل شامل للتوقعات الاقتصادية والتحديات المستقبلية",
    date: "2024-01-14",
    readTime: "8 دقائق",
    image: img1,
    category: "اقتصاد",
  },
  {
   id: 1,
    title: "تطورات جديدة في عالم التكنولوجيا",
    excerpt: "اكتشافات مذهلة في مجال الذكاء الاصطناعي تغير مستقبل التقنية",
    date: "2024-01-15",
    readTime: "5 دقائق",
    image: placeholder,
    category: "تكنولوجيا",
  },
  {
    id: 2,
    title: "الاقتصاد العالمي في عام 2024",
    excerpt: "تحليل شامل للتوقعات الاقتصادية والتحديات المستقبلية",
    date: "2024-01-14",
    readTime: "8 دقائق",
    image: img1,
    category: "اقتصاد",
  },
    {
    id: 1,
    title: "تطورات جديدة في عالم التكنولوجيا",
    excerpt: "اكتشافات مذهلة في مجال الذكاء الاصطناعي تغير مستقبل التقنية",
    date: "2024-01-15",
    readTime: "5 دقائق",
    image: placeholder,
    category: "تكنولوجيا",
  },
  {
    id: 2,
    title: "الاقتصاد العالمي في عام 2024",
    excerpt: "تحليل شامل للتوقعات الاقتصادية والتحديات المستقبلية",
    date: "2024-01-14",
    readTime: "8 دقائق",
    image: img1,
    category: "اقتصاد",
  },
  {
   id: 1,
    title: "تطورات جديدة في عالم التكنولوجيا",
    excerpt: "اكتشافات مذهلة في مجال الذكاء الاصطناعي تغير مستقبل التقنية",
    date: "2024-01-15",
    readTime: "5 دقائق",
    image: placeholder,
    category: "تكنولوجيا",
  },
  {
    id: 2,
    title: "الاقتصاد العالمي في عام 2024",
    excerpt: "تحليل شامل للتوقعات الاقتصادية والتحديات المستقبلية",
    date: "2024-01-14",
    readTime: "8 دقائق",
    image: img1,
    category: "اقتصاد",
  },
    {
    id: 1,
    title: "تطورات جديدة في عالم التكنولوجيا",
    excerpt: "اكتشافات مذهلة في مجال الذكاء الاصطناعي تغير مستقبل التقنية",
    date: "2024-01-15",
    readTime: "5 دقائق",
    image: placeholder,
    category: "تكنولوجيا",
  },
  {
    id: 2,
    title: "الاقتصاد العالمي في عام 2024",
    excerpt: "تحليل شامل للتوقعات الاقتصادية والتحديات المستقبلية",
    date: "2024-01-14",
    readTime: "8 دقائق",
    image: img1,
    category: "اقتصاد",
  },
  {
   id: 1,
    title: "تطورات جديدة في عالم التكنولوجيا",
    excerpt: "اكتشافات مذهلة في مجال الذكاء الاصطناعي تغير مستقبل التقنية",
    date: "2024-01-15",
    readTime: "5 دقائق",
    image: placeholder,
    category: "تكنولوجيا",
  },
  {
    id: 2,
    title: "الاقتصاد العالمي في عام 2024",
    excerpt: "تحليل شامل للتوقعات الاقتصادية والتحديات المستقبلية",
    date: "2024-01-14",
    readTime: "8 دقائق",
    image: img2,
    category: "اقتصاد",
  }
  

  // ... أضف باقي الأخبار بنفس التنسيق
];

const ITEMS_PER_PAGE = 6;

export default function ArchiveNews() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(newsData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentNews = newsData.slice(startIndex, endIndex);

  const goToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getCategoryColor = (category) => {
    const colors = {
      تكنولوجيا: "bg-blue-100 text-blue-800",
      اقتصاد: "bg-green-100 text-green-800",
      رياضة: "bg-orange-100 text-orange-800",
      تعليم: "bg-purple-100 text-purple-800",
      صحة: "bg-red-100 text-red-800",
      بيئة: "bg-emerald-100 text-emerald-800",
      ثقافة: "bg-pink-100 text-pink-800",
      سياحة: "bg-cyan-100 text-cyan-800",
      أمن: "bg-gray-100 text-gray-800",
      طاقة: "bg-yellow-100 text-yellow-800",
      طب: "bg-indigo-100 text-indigo-800",
      نقل: "bg-teal-100 text-teal-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        {/* العنوان */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">أرشيف الأخبار</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            تصفّح أحدث الأخبار والمقالات من مختلف المجالات
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-mainColor to-secondaryColor mx-auto mt-6 rounded-full"></div>
        </div>

        {/* الشبكة */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentNews.map((article) => (
            <div
              key={article.id}
              className="group bg-white shadow-lg rounded-lg overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                      article.category
                    )}`}
                  >
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-800 mb-2 line-clamp-2">{article.title}</h3>
                <p className="text-slate-600 mb-4 text-sm line-clamp-3">{article.excerpt}</p>
                <div className="flex justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(article.date).toLocaleDateString("ar-EG")}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* الترقيم */}
        <div className="flex justify-center items-center gap-2">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center gap-1 px-3 py-1 border rounded-md text-sm text-slate-600 hover:bg-slate-100 disabled:opacity-50"
          >
            <ChevronLeft className="w-4 h-4" /> السابق
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => goToPage(page)}
              className={`w-8 h-8 rounded-md text-sm ${
                currentPage === page
                  ? "bg-mainColor text-white"
                  : "border text-slate-600 hover:bg-slate-100"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center gap-1 px-3 py-1 border rounded-md text-sm text-slate-600 hover:bg-slate-100 disabled:opacity-50"
          >
            التالي <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
