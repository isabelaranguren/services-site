interface NavigationItem {
  name: string;
  href: string;
  submenu?: { name: string; href: string }[];
}

export const navigationItems: NavigationItem[] = [
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
];
