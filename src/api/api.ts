import type { IGetAllProductResponse } from "../interface/IProductResponse"

const baseURL: string = 'https://dummyjson.com'
export const ApiCall = {
  get: async (path: string): Promise<IGetAllProductResponse> => {
    const response = await fetch(`${baseURL}${path}`)
    return await response.json()
  },
  // get: async (path: string) => {
  //   return instance
  //   .get(path)
  //     .then((res) => res.data)
  //     .catch((err) => err);
  // },
  // post: async (path: string, data: object) =>
  //   instance
  //     .post(path, data)
  //     .then((res) => res.data)
  //     .catch((err) => err),
  // put: async () => (path: string, data: object) =>
  //   instance
  //     .put(path, data)
  //     .then((res) => res.data)
  //     .catch((err) => err),
  // delete: async () => (path: string) =>
  //   instance
  //     .delete(path)
  //     .then((res) => res.data)
  //     .catch((err) => err),
  // patch: async () => (path: string, data: object) =>
  //   instance
  //     .patch(path, data)
  //     .then((res) => res.data)
  //     .catch((err) => err),
}
