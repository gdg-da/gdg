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
                    <div className="mx-auto animate-fadeIn">
                        <h1 className="text-5xl md:text-6xl font-black mb-6 comic-text random-rotate animate-slideInFromLeft">Welcome to GDG on Campus DA-IICT</h1>
                        <p className="text-xl mb-8 max-w-2xl mx-auto comic-panel random-rotate animate-slideInFromRight">Join our vibrant community of tech enthusiasts, where innovation meets learning. Together, we explore the latest in technology and build amazing things.</p>
                        <div className="flex gap-4 justify-center">
                            <Button size="lg" className="comic-red comic-highlight random-rotate hover:-translate-y-1 transition-transform animate-scaleIn"><a href='https://chat.whatsapp.com/EOUef2JNbFB5hadvb48OWC' target='_blank'>Join Community</a></Button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h2 className="text-4xl font-black mb-8 text-center comic-title random-rotate animate-fadeIn">What We Do</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {activities.activities.map((activity, index) => (
                        <div key={index} className="comic-card random-rotate animate-scaleIn" style={{ animationDelay: `${index * 0.1}s` }}>
                            <h3 className="comic-blue text-2xl font-bold mb-4 comic-text">{activity.name}</h3>
                            <p className="text-lg">{activity.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section>
                <div className="comic-card space-y-6 comic-dots animate-fadeIn">
                    {features.fearures.map((feature, index) => (
                        <div key={index} className="comic-red flex items-center gap-4 p-4 comic-border random-rotate animate-slideInFromLeft" style={{ animationDelay: `${index * 0.1}s` }}>
                            <ArrowRight className="h-6 w-6" />
                            <span className="text-lg font-semibold">{feature}</span>
                        </div>
                    ))}
                </div>
            </section>
            <section>
                <h2 className="text-4xl font-black mb-8 text-center comic-title random-rotate animate-fadeIn">Technologies We Love</h2>
                <div className="comic-card grid grid-cols-2 md:grid-cols-4 gap-8 comic-stripes animate-scaleIn">
                    {Technologies.map((tech, index) => (
                        <div key={index} className="text-center">
                            <div className="comic-yellow comic-border bg-[#FFB1B1]/20 p-4 mb-4 mx-auto w-20 h-20 flex items-center justify-center random-rotate animate-bounce" style={{ animationDelay: `${index * 0.2}s` }}>
                                {tech.icon}
                            </div>
                            <h3 className="comic-yellow text-lg font-bold comic-text random-rotate">{tech.name}</h3>
                        </div>
                    ))}
                </div>
            </section>
            <section>
                <h2 className="text-4xl font-black mb-8 text-center comic-title random-rotate animate-fadeIn">How to Grow With Us?</h2>
                <div className="comic-card space-y-6 comic-checkered-grid animate-scaleIn">
                    {GrowWithUs.map((step, index) => (
                        <div key={index} className="comic-green flex items-center gap-4 p-4 comic-border bg-[#FFD6A5]/20 random-rotate animate-slideInFromRight" style={{ animationDelay: `${index * 0.1}s` }}>
                            <ArrowRight className="h-6 w-6" />
                            <span className="text-lg font-semibold">{step}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}