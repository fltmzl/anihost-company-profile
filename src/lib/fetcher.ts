const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

interface FetchOptions extends RequestInit {
  endpoint: string;
  locale?: Locale;
}

const fetcher = async ({ endpoint, locale = "id", ...options }: FetchOptions) => {
  const url = `${BASE_URL}${endpoint}?locale=${locale}`;
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
};

export default fetcher;
