 
import Image from "next/image"
import Link from "next/link"

const photos = [
    { src: "/images/student-training-2.jpeg", rotate: "rotate-10", x: "translate-x-50", y: "translate-y-10" },
    { src: "/images/community-2.jpeg", rotate: "rotate-10", x: "translate-x-18", y: "translate-y-22" },
    { src: "/images/community.jpeg", rotate: "rotate-6", x: "-translate-x-39", y: "-translate-y-0" },
    { src: "/images/smj-hero-7.jpeg", rotate: "-rotate-16", x: "translate-x-15", y: "-translate-y-30" },
    { src: "/images/smj-hero-4.jpeg", rotate: "-rotate-18", x: "-translate-x-17", y: "-translate-y-22" },
    { src: "/images/student-training.jpeg", rotate: "-rotate-11", x: "-translate-x-24", y: "translate-y-24" },
    { src: "/images/moment-1.jpeg", rotate: "-rotate-8", x: "translate-x-48", y: "-translate-y-21" },
    { src: "/images/moment-2.jpeg", rotate: "rotate-10", x: "translate-x-30", y: "-translate-y-5" },
    { src: "/images/smj-hero-6.jpeg", rotate: "rotate-3", x: "-translate-x-0", y: "-translate-y-0" },

]

export default function MomentsCollage() {
    return (
        <section className=" bg-black md:min-h-screen w-full md:py-8 text-white text-center">

            {/* HEADING FIRST */}


            {/* COLLAGE BLOCK */}
            <div className="relative flex justify-center items-center h-[28rem] overflow-hidden">

                {photos.map((p, i) => (
                    <div
                        key={i}
                        className={`absolute ${p.rotate} ${p.x} ${p.y}
          transition-transform duration-500 hover:scale-105`}
                    >
                        <div className="bg-white p-1 rounded-sm shadow-xl">
                            <div className="relative w-42 h-32 md:w-48 md:h-36  overflow-hidden">
                                <Image src={p.src} alt="moment" fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                ))}

            </div>
                        <h2 className="text-3xl md:text-4xl text-gold  font-semibold max-w-2xl mx-auto mb-12 px-6">
                Some experiences end when the event does.
                The ones that shape you stay forever. <br />
               <Link href="/gallery"> <button className="bg-charcoal text-black px-6 py-3 mt-2 rounded-md text-lg font-bold hover:bg-white transition-colors">
                View Gallery
            </button></Link>
            </h2>
             
        </section>

    )
}