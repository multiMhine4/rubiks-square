export default class Square {
    constructor(node) {
        this.node = node;
        this.tiles = new Map([
            ["LU", node.children[0]],
            ["RU", node.children[1]],
            ["LD", node.children[2]],
            ["RD", node.children[3]]
        ]);
    }

    getTile(pos) {
        return this.tiles.get(pos);
    }
}
