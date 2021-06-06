import { useContext } from '@vue/runtime-core';
import { ActionContext } from 'vuex';
import { GET_DATA } from './constant';
import { wechatState } from './store';

export default {
    [GET_DATA]({commit}: ActionContext<wechatState, unknown>): void {
        console.log('执行成功 Action');
        setTimeout(()=>{
            const payload = false;
            commit(GET_DATA, payload)
        }, 2000);
    },
}