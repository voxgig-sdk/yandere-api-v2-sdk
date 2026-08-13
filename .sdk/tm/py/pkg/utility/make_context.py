# YandereApiV2 SDK utility: make_context

from projectname_sdk.core.context import YandereApiV2Context


def make_context_util(ctxmap, basectx):
    return YandereApiV2Context(ctxmap, basectx)
