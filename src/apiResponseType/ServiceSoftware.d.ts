type SoftwareProduct = CommonResponse & {
  title: string;
  icon: string;
};

type ServiceSoftware = {
  pageInfo: PageInfo;
  softwareServices: SoftwareProduct[];
  sellingPoints: SellingPoint[];
  faqs: Faq[];
  cta: Cta;
};
