export interface Props {
    label: string;
    checked: boolean;
    fieldId: string;
}
declare const _default: import("vue").DefineComponent<{
    label: {
        type: globalThis.PropType<string>;
        required: true;
    };
    checked: {
        type: globalThis.PropType<boolean>;
        required: true;
    };
    fieldId: {
        type: globalThis.PropType<string>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:checked"[], "update:checked", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: globalThis.PropType<string>;
        required: true;
    };
    checked: {
        type: globalThis.PropType<boolean>;
        required: true;
    };
    fieldId: {
        type: globalThis.PropType<string>;
        required: true;
    };
}>> & {
    "onUpdate:checked"?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _default;
