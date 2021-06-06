declare module '*.css' {
    const classas: {[key: string]: string };
    export default classas;
}
declare module '*.vue' {
    import { defineComponent, FunctionalComponent} from 'vue';
    const component: ReturnType<typeof defineComponent> | FunctionalComponent;
    export default component;
}