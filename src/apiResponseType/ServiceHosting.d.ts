type Package = {
  id: string;
  name: string;
};

type HostingPackage = CommonResponse & {
  name: string;
  description: string;
  price: number;
  pricingPeriod: string;
  note: string;
  items: Package[];
};

type ServiceHosting = {
  pageInfo: PageInfo;
  cta: Cta;
  hostingPackages: HostingPackage[];
  faqs: Faq[];
};
