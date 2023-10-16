import { FrequencyType } from "../types/event-items";
import "v-calendar/style.css";
declare const _default: import("vue").DefineComponent<{
    frequency: {
        type: globalThis.PropType<FrequencyType>;
    };
    interval: {
        type: globalThis.PropType<string | number>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:frequency" | "update:interval")[], "update:frequency" | "update:interval", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    frequency: {
        type: globalThis.PropType<FrequencyType>;
    };
    interval: {
        type: globalThis.PropType<string | number>;
    };
}>> & {
    "onUpdate:frequency"?: ((...args: any[]) => any) | undefined;
    "onUpdate:interval"?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _default;
