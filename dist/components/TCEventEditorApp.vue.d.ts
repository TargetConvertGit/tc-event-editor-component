declare const _default: import("vue").DefineComponent<{
    data: {
        type: globalThis.PropType<string>;
    };
    initial: {
        type: globalThis.PropType<{
            apiUrl: string;
            token: string;
            locale: string;
            timezone: string;
            isProd?: boolean | undefined;
        }>;
        required: true;
    };
}, {
    saveData: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:data"[], "update:data", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: globalThis.PropType<string>;
    };
    initial: {
        type: globalThis.PropType<{
            apiUrl: string;
            token: string;
            locale: string;
            timezone: string;
            isProd?: boolean | undefined;
        }>;
        required: true;
    };
}>> & {
    "onUpdate:data"?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _default;
