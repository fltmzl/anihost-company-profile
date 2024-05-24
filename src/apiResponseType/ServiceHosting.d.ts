type HostingPackage = CommonResponse & {
  name: string;
  description: string;
  price: number;
};

type ServiceHosting = {
  pageInfo: PageInfo;
  cta: Cta;
  hostingPackages: HostingPackage[];
  faqs: Faq[];
};
