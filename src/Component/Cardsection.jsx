import React, { useState } from 'react'
import { FaRegNewspaper } from 'react-icons/fa';

const Cardsection = () => {
    const [content, setcontent] = useState([1, 2, 3, 4]);
    const [tab, settab] = useState(1)
    setTimeout(() => {
        settab(+ 1)
    }, 2000);

    return (
        <>
            <div className="text px-5">
                <div className="text col-span-4 gap-4 flex flex-row overflow-x-auto">
                    {data.map((item, index) => (
                        <div className={` hover:}`}>
                            <div key={index} class="block cursor-pointer max-w-sm p-6 border rounded-lg shadow bg-slate-100 border-x-white hover:bg-white ">
                                <div className="text flex gap-3 text-black text-2xl items-center first-letter:uppercase">
                                    <p>{item.header}</p>
                                    {item.icon}
                                </div>
                                <h5 class="mb-2 text-sm font-medium tracking-tight text-gray-900 dark:text-black">
                                    {item.content}
                                </h5>
                                <div class="text-red-700 hidden hover:block transition-all duration-300 ease-in-out" onMouseOver={()=>  setcontent(index)}>
                                    {item.leranMore}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Cardsection;

const data = [
    {
        id: 1,
        icon: <FaRegNewspaper />,
        header: "AI",
        content: "Ask literally anything. Notion we answer.",
        leranMore: "learn more",
    },
    {
        id: 2,
        icon: <FaRegNewspaper />,
        header: "Wikis",
        content: "Centeralize your knowledge. No more hunting for answers.",
        leranMore: "learn more",
    },
    {
        id: 3,
        icon: <FaRegNewspaper />,
        header: "project",
        content: "Manage complex projects without the choas.",
        leranMore: "learn more",
    },
    {
        id: 4,
        icon: <FaRegNewspaper />,
        header: "Docs",
        content: "Simple, powerful, beautiful. Next-gen note & docs",
        leranMore: "learn more",
    },
]