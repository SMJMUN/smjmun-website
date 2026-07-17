import {
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";
interface AuthorCardProps {
  author: string;
}

/** Generates a deterministic avatar background colour from the author's name */
function getAvatarColor(name: string): string {
  const hues = [210, 225, 200, 195, 215];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = hues[Math.abs(hash) % hues.length];
  return `hsl(${hue}, 35%, 28%)`;
}

export default function AuthorCard({ author }: AuthorCardProps) {
  const initials = author
    .split(" ")
    .map((w) => w[0]?.toUpperCase() ?? "")
    .slice(0, 2)
    .join("");

  const avatarBg = getAvatarColor(author);

  return (
   <section
  className=""
  style={{
    paddingTop: "clamp(56px, 6vw, 80px)",
    paddingBottom: "clamp(56px, 6vw, 80px)",
  }}
>
  <div className="content-wide ">
    <div
      className="
        max-w-4xl
        mx-auto
        bg-white/70
        backdrop-blur-sm
        border
        border-[#e8dfd2]
        rounded-[20px]
        p-8
        lg:p-10
      "
    >
      <div className="flex  flex-col sm:flex-row gap-6 lg:gap-8 items-start">
        {/* Avatar */}
        <div
          className="
            w-24
            h-24
            rounded-full
            flex
            items-center
            justify-center
            flex-shrink-0
            overflow-hidden
            border
            border-[#d9cbb7]
          "
          style={{
            backgroundColor: avatarBg,
          }}
        >
          <span className="font-serif text-[28px] font-bold text-white">
            {initials}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h2
            className="
              font-serif
              text-[28px]
              lg:text-[34px]
              text-navy
              leading-tight
              mb-3
            "
          >
            {author}
          </h2>

          <p
            className="
              font-sans
              text-[15px]
              leading-[1.9]
              text-navy/65
              max-w-2xl
              mb-6
            "
          >
            A contributor to the SMJ MUN Journal with a strong interest in
            international relations, diplomacy, leadership, and global affairs.
            Through thoughtful analysis and commentary, they explore the ideas
            shaping the next generation of global citizens.
          </p>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="
                w-10
                h-10
                rounded-full
                border
                border-[#d9cbb7]
                flex
                items-center
                justify-center
                text-gold
                hover:bg-gold
                hover:text-white
                transition-all
                duration-300
              "
            >
              <AiFillLinkedin size={16} />
            </a>

            <a
              href="#"
              className="
                w-10
                h-10
                rounded-full
                border
                border-[#d9cbb7]
                flex
                items-center
                justify-center
                text-gold
                hover:bg-gold
                hover:text-white
                transition-all
                duration-300
              "
            >
              <AiOutlineInstagram size={16} />
            </a>

            <a
              href="#"
              className="
                w-10
                h-10
                rounded-full
                border
                border-[#d9cbb7]
                flex
                items-center
                justify-center
                text-gold
                hover:bg-gold
                hover:text-white
                transition-all
                duration-300
              "
            >
              <AiOutlineMail size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}
