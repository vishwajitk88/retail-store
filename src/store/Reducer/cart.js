const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(cart);
  } else {
    return [];
  }
};

const initialState = {
  cart: getLocalStorage(),
  total_items: 5,
  total_amount: 0,
  shipping_fee: 534,
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_CART":
      const { id, amount, color, product } = payload;
      let temItem = state.cart.find((i) => i.id === id + color);
      if (temItem) {
        let newCart = state.cart.map((cartItem) => {
          if (cartItem.id === id + color) {
            let newAmount = cartItem.amount + amount;
            if (newAmount > cartItem.max) {
              newAmount = cartItem.max;
            }
            return { ...cartItem, amount: newAmount };
          } else {
            return cartItem;
          }
        });
        return { ...state, cart: newCart };
      } else {
        let newItem = {
          id: id + color,
          name: product.name,
          color,
          amount,
          image: product.images[0].url,
          price: product.price,
          max: product.stock,
        };
        return { ...state, cart: [...state.cart, newItem] };
      }
    case "CLEAR_ITEM":
      let temCart = state.cart.filter((item) => item.id !== payload.id);
      return { ...state, cart: temCart };
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "TOGGEL_BTNS":
      let tempCart = state.cart.map((item) => {
        if (item.id === payload.id) {
          if (payload.value === "inc") {
            let newAmount = item.amount + 1;
            if (newAmount > item.max) {
              newAmount = item.max;
            }
            return { ...item, amount: newAmount };
          }
          if (payload.value === "dec") {
            let newAmount = item.amount - 1;
            if (newAmount < 1) {
              newAmount = 1;
            }
            return { ...item, amount: newAmount };
          }
        } else {
          return item;
        }
      });
      return { ...state, cart: tempCart };

    case "COUNT_CART_TOTALS":
      const { total_items, total_amount } = state.cart.reduce(
        (total, cartItem) => {
          const { price, amount } = cartItem;
          total.total_items += amount;
          total.total_amount += price * amount;
          return total;
        },
        { total_items: 0, total_amount: 0 }
      );
      return { ...state, total_amount, total_items };
    default:
      return state;
  }
};
export default cartReducer;
