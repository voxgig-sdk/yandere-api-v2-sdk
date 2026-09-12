import { Context } from './Context';
declare class YandereApiV2Error extends Error {
    isYandereApiV2Error: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { YandereApiV2Error };
