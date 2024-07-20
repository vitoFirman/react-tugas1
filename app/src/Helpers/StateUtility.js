import {set} from 'lodash'

export default class Stateutility {
    constructor (ctx) {
        this.setContext(ctx)
    }
    setContext (ctx={}) {
        this.ctx = ctx
    }
    setPartialState= function (key, value) {
        const newState = {...this.ctx.state}
        set(newState, key, value)
        this.ctx.setState(newState)
    }
}