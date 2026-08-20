export interface Product {
  id: string;
  title: string;
  price: string;
  tag?: string;
  image: string;
  imageAlt?: string;
  href: string;
}

export interface CategoryTile {
  title: string;
  image: string;
  href: string;
}

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface FooterColumn {
  heading: string;
  links: { label: string; href: string }[];
}

export interface SocialLink {
  platform: string;
  href: string;
  icon: string;
}
