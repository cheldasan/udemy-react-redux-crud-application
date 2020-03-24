import { INCREMENT, DECREMENT } from '../actions'

const initialState = { value: 0 }

//reducerは関数として定義する
//state（状態）とactionを引数に持つ
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 }
    case DECREMENT:
      return { value: state.value - 1 }
    default:
      return state
  }
}