import { API_URL } from '../const';

export const getHotels = () => {
  return new Promise((resolve, reject) => {
    const req = `${API_URL}/api/hotels`;
    fetch(req, { method: 'GET' })
      .then(response => response.json())
        .then(data => resolve(data))
        .catch(e => reject(e));
  });
};

export const getHotel = id => {
  return new Promise((resolve, reject) => {
    const req = `${API_URL}/api/hotel/${id}`;
    fetch(req, { method: 'GET' })
      .then(response => response.json())
        .then(data => resolve(data))
        .catch(e => reject(e));
  });
};
