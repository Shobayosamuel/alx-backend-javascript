import { uploadPhoto, createUser } from './utils.js';

export default async function asyncUploadUser(fileName, userData) {
  try {
    const [photo, user] = await Promise.all([
      uploadPhoto(fileName).catch((error) => null),
      createUser(userData).catch((error) => null),
    ]);

    return { photo, user };
  } catch (error) {
    return { photo: null, user: null };
  }
}
