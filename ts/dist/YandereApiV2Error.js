"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YandereApiV2Error = void 0;
class YandereApiV2Error extends Error {
    isYandereApiV2Error = true;
    sdk = 'YandereApiV2';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.YandereApiV2Error = YandereApiV2Error;
//# sourceMappingURL=YandereApiV2Error.js.map