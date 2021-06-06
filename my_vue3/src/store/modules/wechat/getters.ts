import {  wechatState } from './store';

const moduleGetters =  {
    isTest: (state: wechatState): number =>{
        return 111;
    }
};

export default moduleGetters;