import { ApiCall } from "../api/api"
import { apiEndpoints } from "../api/apiEndpoints"
import type { IGetAllProductResponse } from "../interface/IProductResponse"
interface ILoadParams {
  id?: number
}

export const load = async ({id = 1}: ILoadParams) => {
  let responseGetAllProducts: IGetAllProductResponse = {
    limit: 0,
    products: [],
    skip: 0,
    total: 0
  }
  let responseGetProductDetail
  // : IProductDetail = {
  //   id: 0,
  //   title: '',
  //   description: '',
  //   price: 0,
  //   discountPercentage: 0,
  //   rating: 0,
  //   stock: 0,
  //   brand: 0,
  //   category: '',
  //   thumbnail: 0,
  //   images: []
  // }

  try {
    responseGetAllProducts = await ApiCall.get(apiEndpoints.products)
  } catch (error) {
    console.log('Error', error) 
  }


  try {
    responseGetProductDetail = await ApiCall.get(`${apiEndpoints.products}/${id}`)
  }
  catch (error) {
    console.log('Error', error) 
  }
  
  return {
    responseGetAllProducts,
    responseGetProductDetail
  }
}
