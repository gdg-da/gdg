import Image from "next/image";

const upcomingEvents = [
  {
    id: 1,
    title: "Dev-o-lution",
    type: "National Event",
    description:
      "Dev-o-lution isa tech conference where coding meets creativity, and innovation breaks free from convention. Join us for workshops, talks, and mind-expanding sessions that will revolutionize your dev skills!",
    date: "19th Jan 2025",
    image: "/devolution.png",
  },
];

const events = [
  {
    id: 1,
    title: "GSoC Intro Session",
    type: "Intra College Session",
    description:
      "The GSoC Intro event served as an orientation for students interested in participating in Google Summer of Code (GSoC). It provided insights into open-source contributions, tips for selecting the right projects and organizations, and strategies for crafting strong proposals to increase their chances of selection.",
    date: "14th Nov 2024",
    image:
      "https://raw.githubusercontent.com/ossdaiict/dsc-website/4de7e4d9cc70dacf486a7b93936abb59a2bdb113/assets/images/events/card/GSoC-icon.svg",
  },
  {
    id: 2,
    title: "SLoP 4.0",
    type: "National Event",
    description:
      "Slop 4.0 was organized as part of Hacktoberfest, celebrating open-source contributions through a collaborative hackathon. Participants worked on real-world projects, submitted pull requests, and gained hands-on experience with version control, fostering a culture of collaboration and learning in the open-source community.",
    date: "25th Sep - 10th Dec 2024",
    image:
      "https://github.com/ossdaiict/dsc-website/blob/master/assets/images/events/card/slop4.png?raw=true",
  },
  {
    id: 3,
    title: "CodeLabs",
    type: "Intra College Event",
    description:
      "Codelabs was an event centered around JavaScript, designed to deepen participants understanding of the language through guided coding sessions and projects. It covered core concepts, modern frameworks, and real-world use cases, making it ideal for both beginners and those looking to strengthen their JavaScript skills.",
    date: "23rd Sep 2024",
    image:
      "https://raw.githubusercontent.com/ossdaiict/dsc-website/4de7e4d9cc70dacf486a7b93936abb59a2bdb113/assets/images/events/card/web%20dev.svg",
  },
  {
    id: 4,
    title: "TechLoop",
    type: "Intra College Event",
    description:
      "Techloop was a comprehensive event focused on exploring various domains of technology, providing participants with an overview of fields like web development, AI, blockchain, cybersecurity, and more. It featured interactive sessions, hands-on workshops, and live demos to help attendees discover their interests and gain foundational knowledge in diverse tech areas.",
    date: "15th Oct 2024",
    image:
      "https://github.com/ossdaiict/dsc-website/blob/master/assets/images/events/card/techloop.png?raw=true",
  },
];

export default function Events() {
  return (
    <div>
      <div className="mb-12">
        <h1 className="text-5xl font-black mb-12 text-center comic-text animate-slideInFromLeft">
          Upcoming Events
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <div
              key={event.id}
              className="comic-panel animate-scaleIn"
              style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="comic-border mb-4 overflow-hidden flex justify-center">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={300}
                  height={200}
                  className="h-[200px] object-contain"
                />
              </div>
              <a href="https://devolution.dscdaiict.in/" target="_blank">
                <h2 className="comic-yellow comic-text mb-2">{event.title}</h2>
              </a>
              <p className="text-lg mb-2">{event.type}</p>
              <p className="text-lg mb-4">{event.description}</p>
              <p className="text-lg mb-6">Date: {event.date}</p>
              <a
                href="https://unstop.com/workshops-webinars/dev-o-lution-google-developer-group-on-campus-daiict-1285732"
                target="_blank">
                <h2 className="comic-yellow comic-text mb-2">
                  Book Your Tickets Now!
                </h2>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-5xl font-black mb-12 text-center comic-text animate-slideInFromLeft">
          Past Events
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={event.id}
              className="comic-panel animate-scaleIn"
              style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="comic-border mb-4 overflow-hidden flex justify-center">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={300}
                  height={200}
                  className="h-[200px] object-contain"
                />
              </div>
              <h2 className="comic-yellow comic-text mb-2">{event.title}</h2>
              <p className="text-lg mb-2">{event.type}</p>
              <p className="text-lg mb-4">{event.description}</p>
              <p className="text-lg mb-6">Date: {event.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
