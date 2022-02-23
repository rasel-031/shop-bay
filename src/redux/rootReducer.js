import { combineReducers } from "redux";
import { productReducer } from "./products/productReducer";
import { individualProductReducer } from "./individual-product/individualProductReducer";
import { categoriesJeweleryReducer } from "./categories/categoriesJeweleryReducer";
import { categoriesElectronicReducer } from "./categories/categoriesElectronicReducer";

export const rootReducer = combineReducers({
  products: productReducer,
  individualProduct: individualProductReducer,
  categoriesJewelery: categoriesJeweleryReducer,
  categoriesElectronic: categoriesElectronicReducer,
});
