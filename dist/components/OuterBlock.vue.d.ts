export interface Props {
    id?: string;
    title: string;
    icon?: string;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    title: {
        type: globalThis.PropType<string>;
        required: true;
    };
    id: {
        type: globalThis.PropType<string>;
    };
    icon: {
        type: globalThis.PropType<string>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    title: {
        type: globalThis.PropType<string>;
        required: true;
    };
    id: {
        type: globalThis.PropType<string>;
    };
    icon: {
        type: globalThis.PropType<string>;
    };
}>>, {}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
