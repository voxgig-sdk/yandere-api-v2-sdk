package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewPostEntityFunc func(client *YandereApiV2SDK, entopts map[string]any) YandereApiV2Entity

