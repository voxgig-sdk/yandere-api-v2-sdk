# ProjectName SDK exists test

import pytest
from yandereapiv2_sdk import YandereApiV2SDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = YandereApiV2SDK.test(None, None)
        assert testsdk is not None
