declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    defaultOpen: {
        type: globalThis.PropType<boolean>;
    };
    open: {
        type: globalThis.PropType<boolean>;
    };
    modal: {
        type: globalThis.PropType<boolean>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:open': (value: boolean) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    defaultOpen: {
        type: globalThis.PropType<boolean>;
    };
    open: {
        type: globalThis.PropType<boolean>;
    };
    modal: {
        type: globalThis.PropType<boolean>;
    };
}>> & {
    "onUpdate:open"?: ((value: boolean) => any) | undefined;
}, {}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
