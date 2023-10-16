import { MonthType, WeekOrdinalWordsType, WeekdaysType } from "../types/event-items";
export interface Props {
    type: number;
    weekdays?: WeekdaysType[];
    weekOrdinal?: WeekOrdinalWordsType[];
    monthDate?: number[];
    yearMonths?: MonthType[];
}
declare const _default: import("vue").DefineComponent<{
    type: {
        type: globalThis.PropType<number>;
        required: true;
    };
    weekdays: {
        type: globalThis.PropType<WeekdaysType[]>;
    };
    weekOrdinal: {
        type: globalThis.PropType<WeekOrdinalWordsType[]>;
    };
    monthDate: {
        type: globalThis.PropType<number[]>;
    };
    yearMonths: {
        type: globalThis.PropType<MonthType[]>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:weekdays" | "update:weekOrdinal" | "update:monthDate" | "update:yearMonths")[], "update:weekdays" | "update:weekOrdinal" | "update:monthDate" | "update:yearMonths", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: globalThis.PropType<number>;
        required: true;
    };
    weekdays: {
        type: globalThis.PropType<WeekdaysType[]>;
    };
    weekOrdinal: {
        type: globalThis.PropType<WeekOrdinalWordsType[]>;
    };
    monthDate: {
        type: globalThis.PropType<number[]>;
    };
    yearMonths: {
        type: globalThis.PropType<MonthType[]>;
    };
}>> & {
    "onUpdate:weekdays"?: ((...args: any[]) => any) | undefined;
    "onUpdate:weekOrdinal"?: ((...args: any[]) => any) | undefined;
    "onUpdate:monthDate"?: ((...args: any[]) => any) | undefined;
    "onUpdate:yearMonths"?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _default;
