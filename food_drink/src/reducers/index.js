import { combineReducers} from "redux";
import products from "./products"
import product from "./product"
import categories from "./categories"
import productsCategories from "./productsCategories"
import categoryDetail from "./categoryDetail"
import users from "./users"

const appReducers = combineReducers({
    products,
    product,
    categories,
    productsCategories,
    categoryDetail,
    users
});

export default appReducers;