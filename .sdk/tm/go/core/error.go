package core

type YandereApiV2Error struct {
	IsYandereApiV2Error bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewYandereApiV2Error(code string, msg string, ctx *Context) *YandereApiV2Error {
	return &YandereApiV2Error{
		IsYandereApiV2Error: true,
		Sdk:              "YandereApiV2",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *YandereApiV2Error) Error() string {
	return e.Msg
}
