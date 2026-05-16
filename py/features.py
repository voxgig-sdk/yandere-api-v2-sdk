# YandereApiV2 SDK feature factory

from feature.base_feature import YandereApiV2BaseFeature
from feature.test_feature import YandereApiV2TestFeature


def _make_feature(name):
    features = {
        "base": lambda: YandereApiV2BaseFeature(),
        "test": lambda: YandereApiV2TestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
