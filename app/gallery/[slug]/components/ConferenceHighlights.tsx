interface ConferenceHighlightsProps {
  title: string;
  eventDate?: string;
}

// Timeline days are derived generically — when a conference agenda is
// attached to the relatedConference, this component can be upgraded to
// render actual agenda items. For now we use a visually rich default.
const DEFAULT_DAYS = [
  {
    day: "Day 1",
    events: [
      { time: "09:00", label: "Opening Ceremony", description: "Inauguration, keynote addresses, and welcome of delegations from participating institutions." },
      { time: "11:30", label: "Committee Orientation", description: "Chairs brief delegates on rules of procedure, agenda topics, and session expectations." },
      { time: "14:00", label: "Committee Sessions I", description: "First formal committee sessions with opening speeches and preliminary debate." },
    ],
  },
  {
    day: "Day 2",
    events: [
      { time: "09:00", label: "Committee Sessions II", description: "Caucuses, working papers, and intensive deliberation on agenda topics." },
      { time: "13:00", label: "Networking Lunch", description: "Delegates connect with peers across institutions, committees, and cities." },
      { time: "15:00", label: "Committee Sessions III", description: "Draft resolutions tabled, amendments debated, and voting procedures initiated." },
    ],
  },
  {
    day: "Day 3",
    events: [
      { time: "09:00", label: "Final Committee Sessions", description: "Resolution voting, final speeches, and committee closure." },
      { time: "12:00", label: "Cultural Programme", description: "Performances, exhibitions, and collaborative cultural exchange." },
      { time: "15:00", label: "Awards Ceremony", description: "Recognition of outstanding delegates, best position papers, and best committees." },
    ],
  },
];

export default function ConferenceHighlights({
  title,
}: ConferenceHighlightsProps) {
  return (
    <section
      className="section-padding-sm"
      style={{ backgroundColor: "var(--color-ivory)" }}
      aria-labelledby="highlights-heading"
    >
      <div className="content-wide">
        {/* Section heading */}
        <div className="text-center mb-16">
          <p className="text-label text-gold mb-5">Programme</p>
          <h2
            id="highlights-heading"
            className="text-heading text-navy"
          >
            Conference Highlights
          </h2>
          <div className="gold-rule mx-auto mt-6" aria-hidden="true" />
          <p
            className="font-sans text-navy/50 mt-6 max-w-[520px] mx-auto"
            style={{ fontSize: "clamp(14px, 1.3vw, 16px)", lineHeight: 1.7 }}
          >
            Three days of intensive diplomacy, leadership, and engagement at {title}.
          </p>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {DEFAULT_DAYS.map((dayData, dayIdx) => (
            <div key={dayIdx} className="relative">
              {/* Day label */}
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="w-10 h-10 flex items-center justify-center border border-gold/40 flex-shrink-0"
                  aria-hidden="true"
                >
                  <span className="font-serif text-[13px] font-bold text-gold">
                    {dayIdx + 1}
                  </span>
                </div>
                <h3 className="font-serif text-[22px] font-bold text-navy tracking-[-0.01em]">
                  {dayData.day}
                </h3>
              </div>

              {/* Events */}
              <ol className="space-y-0 list-none relative">
                {/* Vertical line */}
                <div
                  className="absolute left-[3px] top-0 bottom-0 w-[1px]"
                  style={{ backgroundColor: "rgba(187,139,87,0.25)" }}
                  aria-hidden="true"
                />

                {dayData.events.map((event, evIdx) => (
                  <li key={evIdx} className="relative pl-7 pb-8 last:pb-0">
                    {/* Timeline dot */}
                    <div
                      className="absolute left-0 top-[6px] w-[7px] h-[7px] border border-gold bg-white"
                      aria-hidden="true"
                      style={{ borderRadius: "1px" }}
                    />

                    {/* Time */}
                    <span className="font-sans text-[10px] font-medium tracking-[0.18em] uppercase text-gold/70 block mb-1">
                      {event.time}
                    </span>

                    {/* Event name */}
                    <h4 className="font-sans text-[14px] font-semibold text-navy tracking-[-0.005em] mb-1.5">
                      {event.label}
                    </h4>

                    {/* Description */}
                    <p className="font-sans text-[13px] leading-[1.65] text-navy/50">
                      {event.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
