export interface Props {
    placeholder?: string;
    modelValue?: string | number;
    maxLength?: number;
    required?: boolean;
    inputClass?: string;
    disabled?: boolean;
    textCenter?: boolean;
    precision?: number;
    min?: number;
    max?: number;
}
declare const _default: import("vue").DefineComponent<{
    required: {
        type: globalThis.PropType<boolean>;
    };
    placeholder: {
        type: globalThis.PropType<string>;
    };
    disabled: {
        type: globalThis.PropType<boolean>;
    };
    max: {
        type: globalThis.PropType<number>;
    };
    min: {
        type: globalThis.PropType<number>;
        default: number;
    };
    modelValue: {
        type: globalThis.PropType<string | number>;
        default: string;
    };
    maxLength: {
        type: globalThis.PropType<number>;
    };
    inputClass: {
        type: globalThis.PropType<string>;
    };
    textCenter: {
        type: globalThis.PropType<boolean>;
    };
    precision: {
        type: globalThis.PropType<number>;
        default: number;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    required: {
        type: globalThis.PropType<boolean>;
    };
    placeholder: {
        type: globalThis.PropType<string>;
    };
    disabled: {
        type: globalThis.PropType<boolean>;
    };
    max: {
        type: globalThis.PropType<number>;
    };
    min: {
        type: globalThis.PropType<number>;
        default: number;
    };
    modelValue: {
        type: globalThis.PropType<string | number>;
        default: string;
    };
    maxLength: {
        type: globalThis.PropType<number>;
    };
    inputClass: {
        type: globalThis.PropType<string>;
    };
    textCenter: {
        type: globalThis.PropType<boolean>;
    };
    precision: {
        type: globalThis.PropType<number>;
        default: number;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    min: number;
    modelValue: string | number;
    precision: number;
}, {}>;
export default _default;
