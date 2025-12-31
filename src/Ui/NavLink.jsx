function NavLink({ href, children, onClick, className, isActive }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={className}
      aria-current={isActive ? "page" : undefined}>
      {children}
    </a>
  );
}

export default NavLink;
