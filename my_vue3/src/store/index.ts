
import { createStore } from "vuex";
import { modules } from "./modules";
import { userState } from "./modules/user/store";
import { wechatState } from "./modules/wechat/store";

type State = {
  user: userState,
  wechat: wechatState
}

const store = createStore<State>({
  modules,
})
export {State};
export default store;