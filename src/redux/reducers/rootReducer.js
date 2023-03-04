import { authSlice } from './auth'
import { genericStateSlice } from './genericState'

const rootReducer = {
  authentication: authSlice.reducer,
  genericState: genericStateSlice.reducer,
}

export default rootReducer
