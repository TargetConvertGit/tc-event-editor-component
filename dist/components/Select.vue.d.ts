declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    label: {
        type: globalThis.PropType<string>;
        required: true;
    };
    disabled: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    value: {
        type: globalThis.PropType<any>;
        required: true;
    };
    options: {
        type: globalThis.PropType<Object>;
        required: true;
    };
    unSelected: {
        type: globalThis.PropType<"" | -1>;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "updateValue"[], "updateValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: globalThis.PropType<string>;
        required: true;
    };
    disabled: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    value: {
        type: globalThis.PropType<any>;
        required: true;
    };
    options: {
        type: globalThis.PropType<Object>;
        required: true;
    };
    unSelected: {
        type: globalThis.PropType<"" | -1>;
        default: string;
    };
}>> & {
    onUpdateValue?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    unSelected: "" | -1;
}, {}>, {
    default?(_: {
        option: keyof Object;
    }): any;
    customOption?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
