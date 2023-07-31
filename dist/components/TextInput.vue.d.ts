export interface Props {
    placeholder?: string;
    modelValue: string | number;
}
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: import("vue").PropType<string | number>;
        required: true;
    };
    placeholder: {
        type: import("vue").PropType<string>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<string | number>;
        required: true;
    };
    placeholder: {
        type: import("vue").PropType<string>;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _default;
