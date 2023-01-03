import { createContext, ReactNode, useEffect, useReducer } from "react";
import {
  addProductToCartAction,
  removeProductFromCartAction,
  updateProductQuantityAction,
  updateOrderDetailsAction,
} from "../reducers/orders/actions";
import {
  OrderDetailsType,
  orderReducer,
  ProductDataType,
} from "../reducers/orders/reducer";

interface OrderContextType {
  orderDetails?: OrderDetailsType;
  productsList: ProductDataType[];
  addProductToCart: (obj: ProductDataType) => void;
  updateProductQuantity: (obj: ProductDataType) => void;
  removeProductFromCart: (id: string) => void;
  updateOrderDetails: (orderDetails: OrderDetailsType) => void;
}

export const OrderContext = createContext({} as OrderContextType);

interface OrderContextProviderProps {
  children: ReactNode;
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [orderState, dispatch] = useReducer(
    orderReducer,
    {
      productsList: [],
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        "@afs-coffee-delivery:order-state-1.0.0"
      );
      if (storedStateAsJSON) return JSON.parse(storedStateAsJSON);
    }
  );

  useEffect(() => {
    const stateJSON = JSON.stringify(orderState);
    localStorage.setItem("@afs-coffee-delivery:order-state-1.0.0", stateJSON);
  }, [orderState]);

  function addProductToCart({ id, qty = 1 }: ProductDataType) {
    dispatch(addProductToCartAction({ id, qty }));
  }

  function updateProductQuantity({ id, qty = 1 }: ProductDataType) {
    dispatch(updateProductQuantityAction({ id, qty }));
  }

  function removeProductFromCart(id: string) {
    dispatch(removeProductFromCartAction(id));
  }

  function updateOrderDetails(orderDetails: OrderDetailsType) {
    dispatch(updateOrderDetailsAction(orderDetails));
  }

  return (
    <OrderContext.Provider
      value={{
        ...orderState,
        addProductToCart,
        updateProductQuantity,
        removeProductFromCart,
        updateOrderDetails,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
