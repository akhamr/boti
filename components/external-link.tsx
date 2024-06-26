export function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      className="inline-flex flex-1 items-center gap-1 hover:underline"
    >
      <span>{children}</span>
      <svg width="16" height="16" viewBox="0 0 256 256">
        <path
          d="M208,34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34Zm2,174a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2ZM166,96v48a6,6,0,0,1-12,0V110.48l-53.76,53.76a6,6,0,0,1-8.48-8.48L145.52,102H112a6,6,0,0,1,0-12h48A6,6,0,0,1,166,96Z"
          fill="currentColor"
        ></path>
      </svg>
    </a>
  );
}
