interface NavigationItem {
  name: string;
  href: string;
  submenu?: { name: string; href: string }[];
}

export const navigationItems: NavigationItem[] = [
  { name: "About", href: "/about" },
  { 
    name: "Services", 
    href: "/services",
    submenu: [
      { name: "Service 1", href: "/services/1" },
      { name: "Service 2", href: "/services/2" }
    ]
  },
  { name: "Contact", href: "/contact" },
];
