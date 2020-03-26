//application内のreducerを総括する
//reducerは、actionを受けてstateを変更するの為のメソッドです
import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import events from './events'

export default combineReducers({ events, form })
// export default combineReducers({ foo, bar, baz })のようにも書ける