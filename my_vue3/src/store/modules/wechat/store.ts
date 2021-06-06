export const createState = () =>{
    const store = {
        loading: false,
    };
    return store;
};
// 类型推导
export type wechatState = ReturnType<typeof createState>;