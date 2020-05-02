import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // equivalente a usar o LocalStorage
// tem o outro tambem que é equivalente ao SessionStorage
import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'
import directoryReducer from './directory/directory.reducer'
import shopReducer from './shop/shop.reducer'
const persistConfig = {
    key:'root',
    storage
}
const rootReducer = combineReducers({
    user:userReducer,
    cart:cartReducer,
    directory:directoryReducer,
    shop:shopReducer
})  
export default persistReducer(persistConfig,rootReducer)