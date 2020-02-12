import { conbineReducers} from 'redux'
import count from './count'

export default conbineReducers({ count })


// 複数ある場合以下のように記述できる
// export default conbineReducers({ foo, bar, baz })