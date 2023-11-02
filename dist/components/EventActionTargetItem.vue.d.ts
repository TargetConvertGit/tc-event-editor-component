export interface Props {
    target: {
        id: string;
        name: string;
        children?: any;
    };
    targets: any;
}
declare const _default: import("vue").DefineComponent<{
    target: {
        type: globalThis.PropType<{
            id: string;
            name: string;
            children?: any;
        }>;
        required: true;
    };
    targets: {
        type: globalThis.PropType<any>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    target: {
        type: globalThis.PropType<{
            id: string;
            name: string;
            children?: any;
        }>;
        required: true;
    };
    targets: {
        type: globalThis.PropType<any>;
        required: true;
    };
}>>, {}, {}>;
export default _default;
