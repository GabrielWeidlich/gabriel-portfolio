export type Contact = {
  label: string;
  name: string;
  href: string;
  icon: string;
  external: boolean;
};

export const contacts: Contact[] = [
  {
    label: "LinkedIn",
    name: "Gabriel Weidlich",
    href: "https://www.linkedin.com/in/gabriel-weidlich-/",
    icon: "in",
    external: true,
  },
  {
    label: "Personal GitHub",
    name: "GabrielWeidlich",
    href: "https://github.com/GabrielWeidlich",
    icon: "GH",
    external: true,
  },
  {
    label: "Email",
    name: "gabrielweidlichanaps@gmail.com",
    href: "mailto:gabrielweidlichanaps@gmail.com",
    icon: "@",
    external: false,
  },
  {
    label: "Instagram",
    name: "gabriel_weidlich",
    href: "https://www.instagram.com/gabriel_weidlich/",
    icon: "IG",
    external: true,
  }
];