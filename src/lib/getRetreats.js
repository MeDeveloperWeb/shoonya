const API_URL = 'https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats/';

export default async function getRetreats({
  page = 1,
  limit = 3,
  location = '',
  tag = '',
  search = ''
}) {
  try {
    let urlParams = `?page=${page}&limit=${limit}&location=${location}&tag=${tag}&search=${search}`;

    // That's how API works. If location or tag are even present in params search isn't working in API
    if (search) urlParams = `?page=${page}&limit=${limit}&search=${search}`;

    const res = await fetch(`${API_URL}${urlParams}`);

    if (!res.ok) {
      return [];
    }

    const retreats = await res.json();

    return retreats;
  } catch (error) {
    console.log(error);
    return [];
  }
}
