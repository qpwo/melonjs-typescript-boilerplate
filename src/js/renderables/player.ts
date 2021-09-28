import * as me from 'melonjs2/dist/melonjs.module';

 // Note : Jay Inheritance to be replaced with standard ES6 inheritance in melonjs 10+
class PlayerEntity extends me.Entity {

    /**
     * constructor
     */
    constructor (x: number, y: number, settings: any) {
        // call the parent constructor
        super(x, y , settings);
    }

    /**
     * update the entity
     */
    update  (dt) {

        // apply physics to the body (this moves the entity)
        this.body.update(dt);

        // handle collisions against other shapes
        me.collision.check(this);

        // return true if we moved or if the renderable was updated
        return (this._super(me.Entity, 'update', [dt]) || this.body.vel.x !== 0 || this.body.vel.y !== 0);
    }

   /**
     * colision handler
     * (called when colliding with other objects)
     */
    onCollision  (response: me.collision.ResponseObject, other: me.Entity): boolean {
        // Make all other objects solid
        return true;
    }
};

export default PlayerEntity;
