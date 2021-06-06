
/**
 * 1、 取到每一个 namespace 中的核心的getters
 * 2、 user/ inLogin
 * 3、 user.isLogin的 returnType取出来
 */

import {modules} from './modules'

type GetGetter<Module> = Module extends { getters: infer G} ? G : unknown;

type GetGetters<Modules> = {
    [K in keyof Modules]: GetGetter<Modules[K]>;
}

type YdGetter = GetGetters<typeof modules>;
type AddPrefix<P, K> = `${ P & string}/${K & string}`;
type GetSplicekey<P, Module> = AddPrefix<P,keyof Module>;

type GetSplicekeys<Modules> = {
    [K in keyof Modules]: GetSplicekey<K, Modules[K]>;
}[keyof Modules];

// type xx = GetSplicekeys<YdGetter>;
type GetFunc<T, A, B> = T[A & keyof T][B & keyof T[A & keyof T]];

type GetSpliceObj<T> = {
    [K in GetSplicekeys<T>]:K extends `${infer A}/${infer B}`
        ? GetFunc<T, A, B>
        : unknown;
}

type ModuleGetters = GetSpliceObj<YdGetter>;
type Getters = {
    [K in keyof ModuleGetters]: ReturnType<ModuleGetters[K]>;
}
export { Getters };