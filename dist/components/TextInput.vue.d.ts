export interface Props {
    placeholder?: string;
    modelValue?: string | number;
    type?: string | number;
    maxLength?: number;
    required?: boolean;
    inputClass?: string;
    disabled?: boolean;
}
declare const _default: import("vue").DefineComponent<{
    type: {
        type: globalThis.PropType<string | number>;
        default: string;
    };
    required: {
        type: globalThis.PropType<boolean>;
    };
    placeholder: {
        type: globalThis.PropType<string>;
    };
    disabled: {
        type: globalThis.PropType<boolean>;
    };
    modelValue: {
        type: globalThis.PropType<string | number>;
    };
    maxLength: {
        type: globalThis.PropType<number>;
    };
    inputClass: {
        type: globalThis.PropType<string>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: globalThis.PropType<string | number>;
        default: string;
    };
    required: {
        type: globalThis.PropType<boolean>;
    };
    placeholder: {
        type: globalThis.PropType<string>;
    };
    disabled: {
        type: globalThis.PropType<boolean>;
    };
    modelValue: {
        type: globalThis.PropType<string | number>;
    };
    maxLength: {
        type: globalThis.PropType<number>;
    };
    inputClass: {
        type: globalThis.PropType<string>;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    type: string | number;
}, {}>;
export default _default;
