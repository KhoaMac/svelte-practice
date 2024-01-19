import { ApiCall } from "../api/api"
import { apiEndpoints } from "../api/apiEndpoints"
import type { IGetAllProductResponse } from "../interface/IProductResponse"

export const load = async () => {
  let responseGetAllProducts: IGetAllProductResponse = {
    limit: 0,
    products: [],
    skip: 0,
    total: 0
  }
  try {
    responseGetAllProducts = await ApiCall.get(apiEndpoints.products)
  } catch (error) {
    console.log('Error', error) 
  }
  return {
    responseGetAllProducts
  }
}
