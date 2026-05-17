package utility

import "github.com/voxgig-sdk/yandere-api-v2-sdk/go/core"

func featureAddUtil(ctx *core.Context, f core.Feature) {
	client := ctx.Client
	features := client.Features

	client.Features = append(features, f)
}
