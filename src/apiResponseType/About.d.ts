type Employee = CommonResponse & {
  name: string;
  email: string;
  profile_picture: string;
  role: string;
  linkedin: string;
};

type About = {
  pageInfo: PageInfo;
  pageHero: PageHero;
  clients: Client[];
  whatWeDo: WhatWeDo[];
  sellingPoints: SellingPoints[];
  employees: Employee[];
};
