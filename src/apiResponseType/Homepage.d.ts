type SellingPoint = CommonResponse & {
  image: string;
  title: string;
  description: string;
};

type Client = CommonResponse & {
  name: string;
  image: string;
};

type WorkStep = CommonResponse & {
  order: number;
  title: string;
  description: string;
};

type Tool = CommonResponse & {
  name: string;
  image: string;
};

type Service = CommonResponse & {
  title: string;
  description: string;
  image: string;
  icon: string;
  icon_name: string;
  category: number;
};

type WhatWeDo = CommonResponse & {
  title: string;
  description: string;
  image: string;
};

type PageInfo = {
  title: string;
  description: string;
};

type PageHero = {
  title: string;
  text: string;
  description: string;
  image: string;
};

type Cta = CommonResponse & {
  title: string;
  description: string;
  url: string;
};

type Faq = CommonResponse & {
  question: string;
  answer: string;
};

type Homepage = {
  pageHero: PageHero;
  serviceHero: PageHero;
  hostingPackages: HostingPackage[];
  clients: Client[];
  whatWeDo: WhatWeDo[];
  services: Service[];
  cta: Cta[];
  tools: Tool[];
  workSteps: WorkStep[];
  testimonials: [];
  sellingPoints: SellingPoints[];
};
