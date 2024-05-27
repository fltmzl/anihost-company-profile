type ServiceProduct = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

type AllService = {
  pageInfo: PageInfo;
  serviceHero: PageHero;
  services: Service[];
  hostingProducts: ServiceProduct[];
  cta: Cta[];
  tools: Tool[];
  softwareProducts: ServiceProduct[];
};
