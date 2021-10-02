import { BitmapText, ColorLayer, game, Stage } from 'melonjs/dist/melonjs.module'

// Note : Jay Inheritance to be replaced with standard ES6 inheritance in melonjs 10+
class PlayScreen extends Stage {
    /**
     *  action to perform on state change
     */
    onResetEvent() {
        // add a gray background to the default Stage
        game.world.addChild(new ColorLayer("background", "#202020"))

        // add a font text display object
        game.world.addChild(new BitmapText(game.viewport.width / 2, game.viewport.height / 2, {
            font: "PressStart2P",
            size: 4.0,
            textBaseline: "middle",
            textAlign: "center",
            text: "Hello World !"
        }))
    }
}

export default PlayScreen
