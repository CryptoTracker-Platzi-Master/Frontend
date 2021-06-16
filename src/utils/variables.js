const CRYPTOS_PER_PAGES = 20;
export const BASE_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${CRYPTOS_PER_PAGES}&page=1&sparkline=false`;
