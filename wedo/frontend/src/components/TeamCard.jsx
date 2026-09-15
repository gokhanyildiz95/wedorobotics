const COLOR_MAP = {
  blue: "bg-blue",
  coral: "bg-coral",
  mint: "bg-mint",
  grape: "bg-grape",
};

const RING_MAP = {
  blue: "ring-blue/30",
  coral: "ring-coral/30",
  mint: "ring-mint/30",
  grape: "ring-grape/30",
};

function initials(name) {
  return name
    .replace(/Doç\.|Dr\./g, "")
    .trim()
    .split(" ")
    .filter(Boolean)
    .slice(-2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function TeamCard({ member }) {
  return (
    <div className="rounded-3xl bg-white p-6 text-center shadow-card">
      {member.photo ? (
        <img
          src={member.photo}
          alt={member.name}
          loading="lazy"
          className={`mx-auto h-24 w-24 rounded-full object-cover ring-4 ${RING_MAP[member.color]}`}
        />
      ) : (
        <div
          className={`mx-auto flex h-24 w-24 items-center justify-center rounded-full font-display font-extrabold text-2xl text-white ${COLOR_MAP[member.color]}`}
        >
          {initials(member.name)}
        </div>
      )}
      <p className="mt-4 font-display font-bold text-ink">{member.name}</p>
      <p className="mt-1 text-sm text-ink-soft">{member.role}</p>
    </div>
  );
}
