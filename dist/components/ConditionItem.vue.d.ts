import "v-calendar/style.css";
import { EventCondition, ClientType, ConditionAdLevelType } from "../types/event-items";
interface Condition extends EventCondition {
    adLevel: ConditionAdLevelType;
    client: ClientType;
}
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: globalThis.PropType<Condition>;
        required: true;
    };
    index: {
        type: globalThis.PropType<string | number>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "removeItem")[], "update:modelValue" | "removeItem", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: globalThis.PropType<Condition>;
        required: true;
    };
    index: {
        type: globalThis.PropType<string | number>;
        required: true;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onRemoveItem?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _default;