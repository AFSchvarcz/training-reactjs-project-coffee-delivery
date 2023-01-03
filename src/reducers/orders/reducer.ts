import produce from "immer";
import { ActionTypes } from "./actions";

export interface OrderDetailsType {
  cep: string;
  street: string;
  number: number;
  addr2?: string;
  neighborhood: string;
  city: string;
  state: string;
  paymentMethod: string;
}

export interface ProductDataType {
  id: string;
  qty: number;
}

interface OrderState {
  orderDetails?: OrderDetailsType;
  productsList: ProductDataType[];
}

export function orderReducer(state: OrderState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT_TO_CART: {
      const productInCartIndex = state.productsList.findIndex(
        (product) => product.id === action.payload.id
      );
      if (productInCartIndex < 0) {
        return produce(state, (draft) => {
          draft.productsList.push(action.payload);
        });
      }
      return produce(state, (draft) => {
        draft.productsList[productInCartIndex].qty += action.payload.qty;
      });
    }
    case ActionTypes.UPDATE_PRODUCT_QUANTITY: {
      const productInCartIndex = state.productsList.findIndex(
        (product) => product.id === action.payload.id
      );
      return produce(state, (draft) => {
        draft.productsList[productInCartIndex].qty = action.payload.qty;
      });
    }
    case ActionTypes.REMOVE_PRODUCT_FROM_CART: {
      const productInCartIndex = state.productsList.findIndex(
        (product) => product.id === action.payload.id
      );
      return produce(state, (draft) => {
        draft.productsList.splice(productInCartIndex, 1);
        console.log(draft.productsList);
      });
    }
    case ActionTypes.UPDATE_ORDER_DETAILS: {
      return produce(state, (draft) => {
        draft.orderDetails = action.payload.orderDetails;
      });
    }
    default:
      return state;
  }
}
