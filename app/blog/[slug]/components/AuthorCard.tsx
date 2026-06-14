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
      className="bg-ivory border-t border-navy/8"
      style={{
        paddingTop: "clamp(56px, 6vw, 80px)",
        paddingBottom: "clamp(56px, 6vw, 80px)",
      }}
    >
      <div className="content-wide">
        <div className="max-w-[720px]">
          {/* Section label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-6 h-[1px] bg-gold" />
            <p className="font-sans text-[10px] font-600 tracking-[0.22em] uppercase text-navy/40">
              About the Author
            </p>
          </div>

          {/* Card */}
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            {/* Avatar */}
            <div
              className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center"
              style={{ backgroundColor: avatarBg }}
              aria-hidden="true"
            >
              <span className="font-serif text-[20px] font-bold text-white/80">
                {initials}
              </span>
            </div>

            {/* Text */}
            <div className="flex-1">
              <h2
                className="font-serif text-[22px] font-bold text-navy leading-tight mb-1"
              >
                {author}
              </h2>
              <p className="font-sans text-[11px] font-500 tracking-[0.14em] uppercase text-gold mb-3">
                SMJ MUN Contributor
              </p>
              <p className="font-sans text-[14px] leading-[1.75] text-navy/55">
                A student leader and writer passionate about international
                relations, youth empowerment, and global diplomacy. Contributing
                to the SMJ MUN Journal to amplify voices from the conference
                floor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
