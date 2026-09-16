# YandereApiV2 SDK feature factory

from yandereapiv2_sdk.feature.base_feature import YandereApiV2BaseFeature
from yandereapiv2_sdk.feature.ratelimit_feature import YandereApiV2RatelimitFeature
from yandereapiv2_sdk.feature.retry_feature import YandereApiV2RetryFeature
from yandereapiv2_sdk.feature.test_feature import YandereApiV2TestFeature
from yandereapiv2_sdk.feature.timeout_feature import YandereApiV2TimeoutFeature


_FEATURES = {
    "base": lambda: YandereApiV2BaseFeature(),
    "ratelimit": lambda: YandereApiV2RatelimitFeature(),
    "retry": lambda: YandereApiV2RetryFeature(),
    "test": lambda: YandereApiV2TestFeature(),
    "timeout": lambda: YandereApiV2TimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
