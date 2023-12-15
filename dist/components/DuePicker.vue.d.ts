import "v-calendar/style.css";
import "moment-timezone";
export interface Props {
    modelValue: string | null | Date | undefined;
}
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: globalThis.PropType<string | Date | null | undefined>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: globalThis.PropType<string | Date | null | undefined>;
        required: true;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _default;
