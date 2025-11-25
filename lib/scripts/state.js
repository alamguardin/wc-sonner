class State {
    constructor() {
        this._instanceNode;
        this._toasts = []
    }

    setInstance(node) {
        this._instanceNode = node
    }

    get instance() {
        return this._instanceNode
    }

}

export default State