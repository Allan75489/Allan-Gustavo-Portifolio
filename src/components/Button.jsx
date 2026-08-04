import "../styles/Button.css";
export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  icon: IconComponent,
  target,
  download,
  type = "button",
  className = "",
}) {
  const classes = `btn btn--${variant} ${className}`.trim();
  const content = (
    <>
      {IconComponent && <IconComponent className="btn__icon" aria-hidden="true" />}
      <span>{children}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={target}
        download={download}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {content}
    </button>
  );
}
