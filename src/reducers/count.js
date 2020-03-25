import { READ_EVENTS } from '../actions'

//reducerは関数として定義する
//state（状態）とactionを引数に持つ
export default (state = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      return state
    default:
      return state
  }
}