import { collision, Entity } from 'melonjs/dist/melonjs.module'

// Note : Jay Inheritance to be replaced with standard ES6 inheritance in melonjs 10+
class PlayerEntity extends Entity {

    /**
     * constructor
     */
    constructor(x: number, y: number, settings: any) {
        // call the parent constructor
        super(x, y, settings)
    }

    /**
     * update the entity
     */
    update(dt) {

        // apply physics to the body (this moves the entity)
        this.body.update(dt)

        // handle collisions against other shapes
        collision.check(this)

        // return true if we moved or if the renderable was updated
        return (super.update([dt]) || this.body.vel.x !== 0 || this.body.vel.y !== 0)
    }

    /**
      * colision handler
      * (called when colliding with other objects)
      */
    onCollision(response: collision.ResponseObject, other: Entity): boolean {
        // Make all other objects solid
        return true
    }
};

export default PlayerEntity
