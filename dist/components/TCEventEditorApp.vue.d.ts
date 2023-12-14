declare const _default: import("vue").DefineComponent<{
    initial: {
        type: globalThis.PropType<{
            apiUrl: string;
            token: string;
            locale: string;
            timezone: string;
        }>;
        required: true;
    };
    data: {
        type: globalThis.PropType<string>;
    };
}, {
    saveData: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:data"[], "update:data", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    initial: {
        type: globalThis.PropType<{
            apiUrl: string;
            token: string;
            locale: string;
            timezone: string;
        }>;
        required: true;
    };
    data: {
        type: globalThis.PropType<string>;
    };
}>> & {
    "onUpdate:data"?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _default;
