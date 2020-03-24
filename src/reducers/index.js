//application内のreducerを総括する
//reducerは、actionを受けてstateを変更するの為のメソッドです
import { combineReducers } from 'redux'
import count from './count'

export default combineReducers({ count })
// export default combineReducers({ foo, bar, baz })のようにも書ける