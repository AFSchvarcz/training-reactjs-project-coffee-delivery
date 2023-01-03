/* eslint-disable no-unused-vars */
import { OrderDetailsType, ProductDataType } from "./reducer";

export enum ActionTypes {
  ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART",
  UPDATE_PRODUCT_QUANTITY = "UPDATE_PRODUCT_QUANTITY",
  REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART",
  UPDATE_ORDER_DETAILS = "UPDATE_ORDER_DETAILS",
}

export function addProductToCartAction(productData: ProductDataType) {
  return {
    type: ActionTypes.ADD_PRODUCT_TO_CART,
    payload: { ...productData },
  };
}

export function updateProductQuantityAction(productData: ProductDataType) {
  return {
    type: ActionTypes.UPDATE_PRODUCT_QUANTITY,
    payload: { ...productData },
  };
}

export function removeProductFromCartAction(id: string) {
  return {
    type: ActionTypes.REMOVE_PRODUCT_FROM_CART,
    payload: { id },
  };
}

export function updateOrderDetailsAction(orderDetails: OrderDetailsType) {
  return {
    type: ActionTypes.UPDATE_ORDER_DETAILS,
    payload: { orderDetails },
  };
}
