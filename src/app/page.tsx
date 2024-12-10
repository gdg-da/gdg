import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import activities from '@/lib/activities.json'
import features from '@/lib/features.json'
import { TabletSmartphone, Globe, Server, Bot } from 'lucide-react'

export default function Home() {

    const Technologies = [
        { name: 'Android', icon: <TabletSmartphone /> },
        { name: 'Web', icon: <Globe /> },
        { name: 'Cloud', icon: <Server /> },
        { name: 'AI/ML', icon: <Bot /> },
    ]

    const GrowWithUs = [
        'Follow our social media to stay updated! (links given in the footer :P)',
        'Participate in our workshops and hackathons',
        'Join our WhatsApp community group and participate in the discussions. Ask your doubts or share cool stuff!'
    ]

    return (
        <div className="space-y-16">
            <section>
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="">
                        <h1 className="text-5xl md:text-6xl font-black mb-6 comic-text random-rotate">Welcome to GDG on Campus DA-IICT</h1>
                        <p className="text-xl mb-8 max-w-2xl mx-auto comic-panel random-rotate">Join our vibrant community of tech enthusiasts, where innovation meets learning. Together, we explore the latest in technology and build amazing things.</p>
                        <div className="flex gap-4 justify-center">
                            <Button size="lg" className="comic-highlight random-rotate hover:-translate-y-1 transition-transform">Join Community</Button>
                            <Button size="lg" variant="outline" className="comic-text random-rotate hover:-translate-y-1 transition-transform">Learn More</Button>
                        </div>
                    </div>
                    {/* <div className="md:w-1/2">
                        <div className="comic-border p-4 transform rotate-2 random-rotate">
                            <Image src="/placeholder.svg?height=300&width=400" alt="GDG DA-IICT" width={400} height={300} className="w-full rounded-lg" />
                        </div>
                    </div> */}
                </div>
            </section>
            <section>
                <h2 className="text-4xl font-black mb-8 text-center comic-title random-rotate">What We Do</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {activities.activities.map((activity, index) => (
                        <div key={index} className="comic-card random-rotate">
                            <h3 className="text-2xl font-bold mb-4 comic-text">{activity.name}</h3>
                            <p className="text-lg">{activity.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section>
                <div className="comic-card space-y-6 comic-dots">
                    {features.fearures.map((feature, index) => (
                        <div key={index} className="flex items-center gap-4 p-4 comic-border bg-[#FFD6A5]/20 random-rotate">
                            <ArrowRight className="h-6 w-6" />
                            <span className="text-lg font-semibold">{feature}</span>
                        </div>
                    ))}
                </div>
            </section>
            <section>
                <h2 className="text-4xl font-black mb-8 text-center comic-title random-rotate">Technologies We Love</h2>
                <div className="comic-card grid grid-cols-2 md:grid-cols-4 gap-8 comic-stripes">
                    {Technologies.map((tech, index) => (
                        <div key={index} className="text-center">
                            <div className="comic-border bg-[#FFB1B1]/20 p-4 mb-4 mx-auto w-20 h-20 flex items-center justify-center random-rotate">
                                {tech.icon}
                            </div>
                            <h3 className="text-lg font-bold comic-text random-rotate">{tech.name}</h3>
                        </div>
                    ))}
                </div>
            </section>
            <section>
                <h2 className="text-4xl font-black mb-8 text-center comic-title random-rotate">How to Grow With Us?</h2>
                <div className="comic-card space-y-6 comic-checkered-grid">
                    {GrowWithUs.map((step, index) => (
                        <div key={index} className="flex items-center gap-4 p-4 comic-border bg-[#FFD6A5]/20 random-rotate">
                            <ArrowRight className="h-6 w-6" />
                            <span className="text-lg font-semibold">{step}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}