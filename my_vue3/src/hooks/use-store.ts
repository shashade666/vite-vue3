import { Form } from "ant-design-vue";
import { useStore } from "vuex";
import { State } from "../store";
import { Getters } from '../store/utlis'
// import { Gettters } from '../store/index'

interface IUserYdStore {
    state: State;
    getters: Getters;
    
}
const userYdStore = (): IUserYdStore => {
    const { state, getters }: IUserYdStore = useStore<State>();
    return { state, getters };
};
export { userYdStore };
export default userYdStore;
