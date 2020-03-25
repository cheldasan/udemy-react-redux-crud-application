//application内のreducerを総括する
//reducerは、actionを受けてstateを変更するの為のメソッドです
import { combineReducers } from 'redux'
import events from './events'

export default combineReducers({ events })
// export default combineReducers({ foo, bar, baz })のようにも書ける