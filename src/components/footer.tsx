import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="text-black py-8">
            <div className="container mx-auto px-4">
                <div className="comic-panel rounded-md bg-white">
                    <div className="flex flex-wrap justify-between">
                        <div className="w-full md:w-1/3 mb-4 md:mb-0">
                            <h3 className="comic-blue comic-text mb-2">GDG on Campus DA-IICT</h3>
                            <p className="text-lg">Empowering students with technology and innovation.</p>
                        </div>
                        <div className="w-full md:w-1/3 mb-4 md:mb-0">
                            <h3 className="comic-red comic-text mb-2">Quick Links</h3>
                            <ul className="text-lg">
                                <li><Link href="/" className="hover:underline">Home</Link></li>
                                <li><Link href="/events" className="hover:underline">Events</Link></li>
                                <li><Link href="/team" className="hover:underline">Team</Link></li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/3">
                            <h3 className="comic-yellow comic-text mb-2">Connect With Us</h3>
                            <ul className="text-lg">
                                <li><a href="https://github.com/ossdaiict" target="_blank" className="hover:underline">Github</a></li>
                                <li><a href="https://x.com/gdgdaiict" target="_blank" className="hover:underline">Twitter</a></li>
                                <li><a href="https://www.linkedin.com/company/gdg-on-campus-daiict" target="_blank" className="hover:underline">LinkedIn</a></li>
                                <li><a href="https://www.instagram.com/gdg.daiict/" target="_blank" className="hover:underline">Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <div className="zigzag mb-4"></div>
                        <p className="comic-green comic-text">© {new Date().getFullYear()} GDG on Campus DA-IICT</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}