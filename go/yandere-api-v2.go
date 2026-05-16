package voxgigyandereapiv2sdk

import (
	"github.com/voxgig-sdk/yandere-api-v2-sdk/core"
	"github.com/voxgig-sdk/yandere-api-v2-sdk/entity"
	"github.com/voxgig-sdk/yandere-api-v2-sdk/feature"
	_ "github.com/voxgig-sdk/yandere-api-v2-sdk/utility"
)

// Type aliases preserve external API.
type YandereApiV2SDK = core.YandereApiV2SDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type YandereApiV2Entity = core.YandereApiV2Entity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type YandereApiV2Error = core.YandereApiV2Error

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewPostEntityFunc = func(client *core.YandereApiV2SDK, entopts map[string]any) core.YandereApiV2Entity {
		return entity.NewPostEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewYandereApiV2SDK = core.NewYandereApiV2SDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
