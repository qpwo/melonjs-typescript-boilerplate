import 'index.css'
import { audio, device, loader, pool, state, video } from 'melonjs/dist/melonjs.module.js'
import PlayerEntity from './js/renderables/player.js'
import PlayScreen from './js/stage/play'
import TitleScreen from './js/stage/title'
import DataManifest from './manifest'



device.onReady(function () {

    // initialize the display canvas once the device/browser is ready
    if (!video.init(1218, 562, { parent: "screen", scale: "auto" })) {
        alert("Your browser does not support HTML5 canvas.")
        return
    }

    // Initialize the audio.
    audio.init("mp3,ogg")

    // allow cross-origin for image/texture loading
    loader.crossOrigin = "anonymous"

    // set and load all resources.
    loader.preload(DataManifest, function () {
        // set the user defined game stages
        state.set(state.MENU, new TitleScreen(8))
        state.set(state.PLAY, new PlayScreen({}))

        // add our player entity in the entity pool
        pool.register("mainPlayer", PlayerEntity)

        // Start the game.
        state.change(state.PLAY, false)
    })
})
