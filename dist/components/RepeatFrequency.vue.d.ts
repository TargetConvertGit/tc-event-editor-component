import { FrequencyType } from '../types/event-items';
declare const _default: import("vue").DefineComponent<{
    frequency: {
        type: import("vue").PropType<FrequencyType>;
        required: true;
    };
    interval: {
        type: import("vue").PropType<number>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:frequency" | "update:interval")[], "update:frequency" | "update:interval", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    frequency: {
        type: import("vue").PropType<FrequencyType>;
        required: true;
    };
    interval: {
        type: import("vue").PropType<number>;
        required: true;
    };
}>> & {
    "onUpdate:frequency"?: ((...args: any[]) => any) | undefined;
    "onUpdate:interval"?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _default;
