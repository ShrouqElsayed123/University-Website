import { NavLink } from "react-router-dom";
import bg from '../../assets/images/medicine.jpg'
// import bg2 from '../../assets/images/slider-image-3.jfif'
// import bg3 from '../../assets/images/faculty.jpg'

export default function Header({ links }) {
    return (
        <div className='relative h-60 flex items-center justify-center text-center mb-10'>
            <div
                className='inset-0 opacity-50 bg-cover bg-center absolute'
                style={{ backgroundImage: `url(${bg})` }}
            ></div>

            <div className='relative z-10'>
                <h2 className='text-3xl font-bold mb-3'>{links[links.length - 1].label}</h2>

                <p className="text-gray-600 dark:text-white">
                    {links.map((link, index) => (
                        <span key={index}>
                            <NavLink
                                to={link.to}
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-mainColor font-semibold " // لو active
                                        : " hover:underline"          // لو مش active
                                }
                            >
                                {link.label}
                            </NavLink>
                            {index < links.length - 1 && " >> "}
                        </span>
                    ))}
                </p>
            </div>
        </div>
    );
}




