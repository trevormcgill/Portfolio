import './Header.css'

export default function Header() {
    return (
        <div id='header' className='sticky top-0 z-50'>
            <header className="flex justify-center items-center bg-maine-10">
                <ul className="flex font-semibold text-soft-500 md:text-3xl m-4">
                    <li className="text-lg mx-2 md:mx-10 text-slate-50 fromLeft">
                        <a href='#'>About</a>
                    </li>
                    <li className="text-lg mx-2 md:mx-10 text-slate-50 fromLeft">
                        <a href='#'>Skills</a>
                    </li>
                    <li className="text-lg mx-2 md:mx-10 text-slate-50 fromLeft">
                        <a href='#'>Projects</a>
                    </li>
                    <li className="text-lg mx-2 md:mx-10 text-slate-50 fromLeft">
                        <a href='#'>Contact</a>
                    </li>
                </ul>
            </header>
        </div>
    )
}