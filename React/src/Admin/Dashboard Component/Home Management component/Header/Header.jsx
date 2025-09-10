import { BookOpen } from 'lucide-react'
import React from 'react'

// eslint-disable-next-line no-unused-vars
export default function Header({ title }) {
    return (
        <>

            <div className={`flex items-center  gap-2 text-mainColor  cursor-pointer select-none   w-full justify-center`}>
                <BookOpen className="w-8 h-8 " />
                <span className="text-2xl font-semibold  tracking-widest uppercase">
                    {title}
                </span>
            </div>


        </>
    )
}
