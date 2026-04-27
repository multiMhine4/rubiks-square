class Tile {
    constructor(node,pos) {
        this.node = node;
        this.pos = pos;
        this.x_orient = 1;
        this.y_orient = 1;
    }

    flipX() {
        this.node.style.transform = `scale(${-1 * this.x_orient}, ${this.y_orient})`;
        this.x_orient *= -1;
    }

    flipY() {
        this.node.style.transform = `scale(${ this.x_orient}, ${-1 * this.y_orient})`;
        this.y_orient *= -1;
    }

    swapWith(tile) {
        let node1 = this.node;
        let node2 = tile.node;
        let dummy = document.createElement("div");
        dummy.style.display = "none";

        node2.after(dummy);
        node1.after(node2);
        dummy.after(node1);
        dummy.remove();

        if (this.pos[0] === tile.pos[0]) {
            this.flipY();
            tile.flipY();
        } else if (this.pos[1] === tile.pos[1]) {
            this.flipX();
            tile.flipX();
        }

        let dumPos = this.pos;
        this.pos = tile.pos;
        tile.pos = dumPos;
    }
}

export default class Square {
    constructor(node) {
        this.node = node;
        this.tiles = [
            new Tile(node.children[0], "LU"),
            new Tile(node.children[1], "RU"),
            new Tile(node.children[2], "LD"),
            new Tile(node.children[3], "RD")
        ];
    }

    getTile(pos) {
        return this.tiles.find((tile) => tile.pos == pos);
    }

    swapTiles(pos1,pos2) {
        let tile1 = this.getTile(pos1);
        let tile2 = this.getTile(pos2);
        tile1.swapWith(tile2);
    }

    turn(move) {
        switch (move) {
            case "L":
                this.swapTiles("LU","LD");
                break;
            case "R":
                this.swapTiles("RU","RD");
                break;
            case "U":
                this.swapTiles("LU","RU");
                break;
            case "D":
                this.swapTiles("LD","RD");
                break;
        }
    }
}
