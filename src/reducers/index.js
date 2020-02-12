import { combineReducers} from 'redux'
import count from './count'

export default combineReducers({ count })


// 複数ある場合以下のように記述できる
// export default conbineReducers({ foo, bar, baz })