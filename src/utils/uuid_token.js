import { v4 as uuidv4 } from 'uuid';
export const getUUId = () => {
  let uuid_token = localStorage.getItem('USERTEMPID');
  if (!uuid_token) {
    uuid_token = uuidv4();
    localStorage.setItem('USERTEMPID',uuid_token);
  }
  return uuid_token;
};
