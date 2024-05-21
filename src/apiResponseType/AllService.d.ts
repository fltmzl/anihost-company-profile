type ServiceProduct = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

type AllService = {
  pageInfo: PageInfo;
  hostingProducts: ServiceProduct[];
  cta: Cta[];
  tools: Tool[];
  softwareProducts: ServiceProduct[];
};
