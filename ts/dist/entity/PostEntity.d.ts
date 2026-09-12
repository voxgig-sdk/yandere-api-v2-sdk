import { YandereApiV2EntityBase } from '../YandereApiV2EntityBase';
import type { YandereApiV2SDK } from '../YandereApiV2SDK';
import type { Control } from '../types';
import type { Post, PostListMatch } from '../YandereApiV2Types';
declare class PostEntity extends YandereApiV2EntityBase<Post> {
    constructor(client: YandereApiV2SDK, entopts: any);
    make(this: PostEntity): PostEntity;
    list(this: any, reqmatch?: PostListMatch, ctrl?: Control): Promise<PostEntity[]>;
}
export { PostEntity };
