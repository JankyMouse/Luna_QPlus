var Imported = Imported || {};
Imported.QMovement = '1.6.3MZ';
/*:
 * @plugindesc Add more control over your character with pixel movement
   <Luna_QMovement>
 * @author LunaTechs | Quxios
 * @url https://lunatechs.dev/luna-qplugins
 *
 * @target MZ
 *
 * @repo https://github.com/quxios/QMovement
 *
 * @requires QPlus
 * @exportName QMovement
 *
 * @video TODO
 *
 * @param Main Settings
 *
 * @param Grid
 * @parent Main Settings
 * @desc The amount of pixels you want to move per Movement.
 * Plugin Default: 1   MV Default: 48
 * @type number
 * @min 1
 * @default 1
 *
 * @param Tile Size
 * @parent Main Settings
 * @desc Size of tiles in pixels
 * Default: 48
 * @type number
 * @min 1
 * @default 48
 *
 * @param Off Grid
 * @parent Main Settings
 * @desc Allow characters to move off grid?
 * @type boolean
 * @on Yes
 * @off No
 * @default true
 *
 * @param Optional Settings
 *
 * @param Smart Move
 * @parent Optional Settings
 * @desc If the move didn't succeed, try again at lower speeds or at
 * a different direction
 * @type select
 * @option Disabled
 * @value 0
 * @option Adjust Speed
 * @value 1
 * @option Adjust Direction
 * @value 2
 * @option Adjust Speed and Direction
 * @value 3
 * @default 2
 *
 * @param Mid Pass
 * @parent Optional Settings
 * @desc An extra collision check for the midpoint of the Movement.
 * @type boolean
 * @on Enable
 * @off Disable
 * @default false
 *
 * @param Move on click
 * @parent Optional Settings
 * @desc Set if player moves with mouse click
 * * Requires QPathfind to work
 * @type boolean
 * @on Enable
 * @off Disable
 * @default true
 *
 * @param Diagonal
 * @parent Optional Settings
 * @desc Allow for diagonal movement?
 * @type boolean
 * @on Yes
 * @off No
 * @default true
 *
 * @param Diagonal Speed
 * @parent Optional Settings
 * @desc Adjust the speed when moving diagonal.
 * Default: 0 TODO not functional
 * @type number
 * @min 0
 * @default 0
 *
 * @param Colliders
 *
 * @param Player Collider
 * @text Default Player Collider
 * @parent Colliders
 * @desc Default collider for the player.
 * @type struct<Collider>
 * @default {"Type":"box","Width":"36","Height":"24","Offset X":"6","Offset Y":"24"}
 *
 * @param Event Collider
 * @text Default Event Collider
 * @parent Colliders
 * @desc Default collider for events.
 * @type struct<Collider>
 * @default {"Type":"box","Width":"36","Height":"24","Offset X":"6","Offset Y":"24"}
 *
 * @param Presets
 * @parent Colliders
 * @desc List of preset colliders that you can assign to
 * events
 * @type struct<ColliderPreset>[]
 * @default []
 *
 * @param Debug Settings
 *
 * @param Show Colliders
 * @parent Debug Settings
 * @desc Show the Box Colliders by default during testing.
 * -Can be toggled on/off with F10 during play test
 * @type boolean
 * @on Show by default
 * @off Hide by default
 * @default true
 *
 * @command transfer
 * @desc Perform a map transfer to a pixel x / y position.
 * 
 * @arg mapId
 * @desc the MapID to transfer to
 * @type number
 * @default 0
 * 
 * @arg fade
 * @desc The fade out effect color to use
 * @type select
 * @default black
 * @option black
 * @option white
 * 
 * @arg dir
 * @desc The direction to face upon transfer
 * @type select
 * @default south
 * 
 * @option north
 * @value 2
 * @option south
 * @value 4
 * @option west
 * @value 6
 * @option east
 * @value 8
 * 
 * @arg x
 * @desc The x position to transfer to, in pixels
 * @type number
 * @default 0
 * @arg y
 * @desc The y position to transfer to, in pixels
 * @type number
 * @default 0
 * 
 * @command setPosition
 * @desc Move a character to a x / y pixel position.
 * @type Type
 * @default Default
 * 
 * @arg charId
 * @desc The character ID
 * @default 0
 * @arg x
 * @desc The x position in pixels
 * @default 0
 * @arg y
 * @desc The y position in pixels
 * @default 0
 * 
 * @arg dir
 * @desc The direction the character should face when transferring. Can be 2, 4, 6, 8, or for diagonals 1, 3, 7, 9
 * @desc The direction to face upon transfer
 * @type select
 * @default south
 * 
 * @option northWest
 * @value 1
 * @option north
 * @value 2
 * @option northEast
 * @value 3
 * @option south
 * @value 4
 * @option west
 * @value 6
 * @option southWest
 * @value 7
 * @option east
 * @value 8
 * @option southEast
 * @value 9
 * 
 * @command changeCollider
 * @desc Change an event or the player's collider
 * @type Type
 * @default Default
 * 
 * @arg charId
 * @desc The ID of the character - For player: 0, p, or player, otherwise the eventID or "this" for the event this command is called from.
 * @type note
 * @default 0
 * 
 * @arg type
 * @desc The type of collider to use.
 * @type select
 * @default default
 * @option default
 * @option intersection
 * @option collision
 * 
 * @arg shape
 * @desc The shape of the collider
 * @type select
 * @default box
 * @option box
 * @option circle
 * 
 * @arg width
 * @desc The width of the collider
 * @default 32
 * @type number
 * 
 * @arg height
 * @desc The height of the collider
 * @type number
 * @default 24
 * 
 * @arg ox
 * @desc The x offset of the collider in pixels
 * @type number
 * @default 0
 * 
 * @arg oy
 * @desc The y offset of the collider in pixels
 * @type number
 * @default 0
 * 
 * @help
 * This is a port of the original plugin QMovement by Quixos
 *  | https://quxios.github.io/plugins/QMovement
 * 
 * ============================================================================
 * ## About
 * ============================================================================
 * This plugin completely rewrites the collision system to use colliders. Using
 * colliders enabled more accurate collision checking with dealing with pixel
 * movement. This plugin also lets you change how many pixels the characters
 * move per step, letting you set up a 24x24 movement or a 1x1 (pixel movement)
 *
 * Note there are a few mv features disabled/broken; mouse movement, followers,
 * and vehicles.
 * ============================================================================
 * ## Setting up
 * ============================================================================
 * To setup a pixel based movement, you'll need to change the plugin parameters
 * to something like:
 *
 * - Grid = 1
 * - Off Grid = true
 * - Mid Pass = false
 *
 * Other parameters can be set to your preference.
 *
 * For a grid based movement, set it something like:
 *
 * - Grid = GRIDSIZE YOU WANT
 * - Off Grid = false
 * - Mid Pass = true
 *
 * When in grid based movement, you want your colliders to fill up most of the
 * grid size but with a padding of 4 pixels on all sides (this is because some
 * tile colliders are 4 tiles wide or tall). So if your grid size was 48, your
 * colliders shouldn't be 48x48, instead they should be 40x40, with an ox and oy
 * of 4. So your collider setting would look like: box, 40, 40, 4, 4
 * ============================================================================
 * ## Colliders
 * ============================================================================
 * There are 3 types of colliders; Polygon, Box and Circle. Though you can only
 * create box and circle colliders, unless you modify the code to accept
 * polygons. This is intentional since polygon would be "harder" to setup.
 *
 * ![Colliders Image](https://quxios.github.io/imgs/qmovement/colliders.png)
 *
 * - Boxes takes in width, height, offset x and offset y
 * - Circles similar to boxes, takes in width, height, offset x and offset y
 * ----------------------------------------------------------------------------
 * **Setting up colliders**
 * ----------------------------------------------------------------------------
 * Colliders are setup inside the Players notebox or as a comment inside an
 * Events page. Events colliders depends it's page, so you may need to make the
 * collider on all pages.
 *
 * There are two ways to setup colliders. using `<collider:-,-,-,->` and using
 * `<colliders>-</colliders>`. The first method sets the 'Default' collider for
 * that character. The second one you create the colliders for every collider
 * type.
 * ----------------------------------------------------------------------------
 * **Collider Types**
 * ----------------------------------------------------------------------------
 * There are 3 collider types. Default, Collision and Interaction.
 * - Default: This is the collider to use if collider type that was called was
 * not found
 * - Collision: This collider is used for collision checking
 * - Interaction: This collider is used for checking interaction.
 * ----------------------------------------------------------------------------
 * **Collider Presets**
 * ----------------------------------------------------------------------------
 * You can create colliders in the plugin parameters which you can use when
 * setting up other colliders.
 * ----------------------------------------------------------------------------
 * **Collider Terms**
 * ----------------------------------------------------------------------------
 * ![Colliders Terms Image](https://quxios.github.io/imgs/qmovement/colliderInfo.png)
 * ----------------------------------------------------------------------------
 * **Collider Notetag**
 * ----------------------------------------------------------------------------
 * ~~~
 *  <collider: [SHAPE], [WIDTH], [HEIGHT], [OX], [OY]>
 * ~~~
 * This notetag sets all collider types to these values.
 * - SHAPE: Set to box, circle or poly
 *   - If poly read next section on poly shape
 * - WIDTH: The width of the collider, in pixels
 * - HEIGHT: The height of the collider, in pixels
 * - OX: The X Offset of the collider, in pixels
 * - OY: The Y Offset of the collider, in pixels
 * ----------------------------------------------------------------------------
 * **Colliders Notetag**
 * ----------------------------------------------------------------------------
 * ~~~
 *  <colliders>
 *  [TYPE]: [SHAPE], [WIDTH], [HEIGHT], [OX], [OY]
 *  </colliders>
 * ~~~
 * This notetag sets all collider types to these values.
 * - TYPE: The type of collider, set to default, collision or interaction
 * - SHAPE: Set to box, circle or poly
 *   - If poly read next section on poly shape
 * - WIDTH: The width of the collider, in pixels
 * - HEIGHT: The height of the collider, in pixels
 * - OX: The X Offset of the collider, in pixels
 * - OY: The Y Offset of the collider, in pixels
 *
 * To add another type, just add `type: shape, width, height, ox, oy` on
 * another line.
 *
 * Example:
 * ~~~
 *  <colliders>
 *  default: box, 48, 48
 *  collision: circle, 24, 24, 12, 12
 *  interaction: box, 32, 32, 8, 8
 *  </colliders>
 * ~~~
 * ----------------------------------------------------------------------------
 * **Using Preset**
 * ----------------------------------------------------------------------------
 * To use a collider preset in the notetag, the format is:
 * ~~~
 *  preset, [PRESETID]
 * ~~~
 * - PRESETID: The PresetID you set in the preset parameter.
 *
 * You will use this format instead of the: `SHAPE, WIDTH, HEIGHT, OX, OY`
 *
 * Example:
 * ~~~
 *  <collider: preset, largeCollider>
 * ~~~
 * Will look for the preset with the ID `largeCollider`
 *
 * Example 2:
 * ~~~
 *  <colliders>
 *  default: preset, largeDefault
 *  collision: preset, largeCollider
 *  interaction: preset, largeInteraction
 *  </colliders>
 * ~~~
 * Will use the presets; `largeDefault`, `largeCollider`, and `largeInteraction`
 * ----------------------------------------------------------------------------
 * **Poly Colliders**
 * ----------------------------------------------------------------------------
 * To create a polygon collider, set the shape to poly. After that the rest
 * of the line should be a list of points separated with a comma. Points are
 * written as "(X,Y)". An example polygon would be:
 * ~~~
 *  poly,(24,0),(48,24),(24,48),(0,24)
 * ~~~
 * Would create a diamond shaped polygon.
 *
 * Example of using it inside a collider tag
 * ~~~
 *  <collider:poly,(24,0),(48,24),(24,48),(0,24)>
 * ~~~
 * ============================================================================
 * ## Move Routes
 * ============================================================================
 * By default, event move commands (moveup, movedown, ect) will convert to a
 * qmove that moves the character based off your tilesize. So if your tilesize
 * is 48 and your gridsize is 1. Then a moveup command will move the character
 * up 48 pixels not 1. But if you want to move the character by a fixed amount
 * of pixels, then you will use the QMove commands.
 * ----------------------------------------------------------------------------
 * **QMove**
 * ----------------------------------------------------------------------------
 * ![QMove Script Call](https://quxios.github.io/imgs/qmovement/qmove.png)
 *
 * To do a QMove, add a script in the move route in the format:
 * ~~~
 *  qmove(DIR, AMOUNT, MULTIPLER)
 * ~~~
 * - DIR: Set to a number representing the direction to move;
 *  - 4: left, 6: right, 8: up 2: down,
 *  - 1: lower left, 3: lower right, 7: upper left, 9: upper right,
 *  - 5: current direction, 0: reverse direction
 * - AMOUNT: The amount to move in that direction, in pixels
 * - MULTIPLIER: multiplies against amount to make larger values easier [OPTIONAL]
 *
 * Example:
 * ~~~
 *  qmove(4, 24)
 * ~~~
 * Will move that character 24 pixels to the left.
 * ----------------------------------------------------------------------------
 * **Arc**
 * ----------------------------------------------------------------------------
 * Arcing is used to make a character orbit around a position. Note that collisions
 * are ignored when arcing, but interactions still work. To add a arc add a script
 * in the move route in the format:
 * ~~~
 *  arc(PIVOTX, PIVOTY, RADIAN, CCWISE?, FRAMES)
 * ~~~
 * - PIVOTX: The x position to orbit around, in pixels
 * - PIVOTY: The y position to orbit around, in pixels
 * - RADIAN: The degrees to move, in radians
 * - CCWISE?: set to true or false; if true it will arc countclock wise
 * - FRAMES: The amount of frames to complete the arc
 *
 * Example:
 * ~~~
 *  arc(480,480,Math.PI*2,false,60)
 * ~~~
 * Will make the character do a full 360 arc clockwise around the point 480, 480
 * and it'll take 60 frames.
 * ============================================================================
 * ## Event Notetags/Comments
 * ============================================================================
 * **Offsets**
 * ----------------------------------------------------------------------------
 * To shift an events initial starting position, you can use the following
 * note tags:
 * ~~~
 *  <ox:X>
 * ~~~
 * or
 * ~~~
 *  <oy:X>
 * ~~~
 * Where X is the number of pixels to shift the event. Can be negative.
 * ----------------------------------------------------------------------------
 * **SmartDir**
 * ----------------------------------------------------------------------------
 * By default, when the player collides with an event it won't trigger the
 * Smart Move Dir effect. To enable this, add following notetag to the event:
 * ~~~
 *  <smartDir>
 * ~~~
 * ----------------------------------------------------------------------------
 * **IgnoreCharas**
 * ----------------------------------------------------------------------------
 * You can have an event ignore certain characters when collision checking. This
 * allows you to let some events move through some events or the player. Note that
 * this is not 2 ways, so if an event can move through the player, that doesn't
 * mean the player can move through the event.
 * ~~~
 *  <ignoreCharas:CHARAIDS>
 * ~~~
 * Where CHARAIDS is a list of character Ids, separated by a comma
 * ============================================================================
 * ## Map Notetags
 * ============================================================================
 * **GridSize**
 * ----------------------------------------------------------------------------
 * You can set the grid size for certain maps by using the notetag:
 * ~~~
 *  <grid:X>
 * ~~~
 * Where X is the grid size to use for this map.
 * ----------------------------------------------------------------------------
 * **OffGrid**
 * ----------------------------------------------------------------------------
 * You can set weither you can or can't move off the grid for certain maps by
 * using the notetag:
 * ~~~
 *  <offGrid:BOOL>
 * ~~~
 * Where BOOL is true or false
 * ----------------------------------------------------------------------------
 * **MidPass**
 * ----------------------------------------------------------------------------
 * You can set weither you want to use the mid pass function for certain maps by
 * using the notetag:
 * ~~~
 *  <midPass:BOOL>
 * ~~~
 * Where BOOL is true or false
 * ============================================================================
 * ## Plugin Commands
 * ============================================================================
 * **Transfer**
 * ----------------------------------------------------------------------------
 * MV event transfers are grid based. So this plugin command lets you map transfer
 * to a pixel x / y position.
 * ~~~
 *  qMovement transfer [MAPID] [X] [Y] [OPTIONS]
 * ~~~
 * - MAPID: The id of the map to transfer to
 * - X: The x position to transfer to, in pixels
 * - Y: The y position to transfer to, in pixels
 *
 * Possible options:
 *
 * - dirX: Set X to the dir to face after the transfer.
 *   - Can be 2, 4, 6, 8, or for diagonals 1, 3, 7, 9
 * - fadeBlack: Will fade black when transfering
 * - fadeWhite: Will fade white when transfering
 *
 * Example:
 * ~~~
 *  qMovement transfer 1 100 116 dir2 fadeBlack
 * ~~~
 * Will transfer the player to map 1 at x100, y116. There will be a black fade
 * and player will be facing down
 * ~~~
 *  qMovement transfer 1 100 116
 * ~~~
 * Will transfer the player to map 1 at x100, y116. There will be no fade and
 * players direction won't change
 * ----------------------------------------------------------------------------
 * **Set Pos**
 * ----------------------------------------------------------------------------
 * This command will let you move a character to a x / y pixel position. Note
 * this will not "walk" the character to that position! This will place the
 * character at this position, similar to a transfer.
 * ~~~
 *  qMovement setPos [CHARAID] [X] [Y] [OPTIONS]
 * ~~~
 * - CHARAID: The character identifier.
 *  - For player: 0, p, or player
 *  - For events: EVENTID, eEVENTID, eventEVENTID or this for the event that called this (replace EVENTID with a number)
 * - X: The x position to set to, in pixels
 * - Y: The y position to set to, in pixels
 *
 * Possible options:
 *
 * - dirX: Set X to the dir to face after the transfer.
 *   - Can be 2, 4, 6, 8, or for diagonals 1, 3, 7, 9
 *
 * ----------------------------------------------------------------------------
 * **Change Collider**
 * ----------------------------------------------------------------------------
 * This command will let you change a collider for a character. Note that you
 * should use this carefully. If you don't you can get that character stuck.
 * ~~~
 *  qMovement changeCollider [CHARAID] [TYPE] [SHAPE] [WIDTH] [HEIGHT] [OX] [OY]
 * ~~~
 * - CHARAID: The character identifier.
 *  - For player: 0, p, or player
 *  - For events: EVENTID, eEVENTID, eventEVENTID or this for the event that called this (replace EVENTID with a number)
 * - TYPE: The type of collider, set to default, collision or interaction
 * - SHAPE: Set to box or circle
 * - WIDTH: The width of the collider, in pixels
 * - HEIGHT: The height of the collider, in pixels
 * - OX: The X Offset of the collider, in pixels
 * - OY: The Y Offset of the collider, in pixels
 *
 * You can also set it to a preset by using the format:
 * ~~~
 *  qMovement changeCollider [CHARAID] [TYPE] preset [PRESETID]
 * ~~~
 * - CHARAID: The character identifier.
 *  - For player: 0, p, or player
 *  - For events: EVENTID, eEVENTID, eventEVENTID or this for the event that called this (replace EVENTID with a number)
 * - TYPE: The type of collider, set to default, collision or interaction
 * - PRESETID: The PresetID you set in the preset parameter.
 * ============================================================================
 * ## Tips
 * ============================================================================
 * **No closed open spaces!**
 * ----------------------------------------------------------------------------
 * For performance reasons, you should try to avoid having open spaces that are
 * closed off.
 *
 * ![Example](https://quxios.github.io/imgs/qmovement/openSpaces.png)
 *
 * On the left we can see some tiles that have a collider border, but their inside
 * is "open". This issue is should be corrected when using QPathfind because
 * if someone was to click inside that "open" space, it is passable and QPathfind
 * will try to find a way in even though there is no way in and will cause massive
 * lag. The fix can be pretty simple, you could add a CollisionMap (though that
 * may be another issue in its own) or add a RegionCollider to fill up the full
 * tile like I did on the correct side of that image.
 * ----------------------------------------------------------------------------
 * **Collision Maps - Heavy**
 * ----------------------------------------------------------------------------
 * Try to use collision maps only if you absolutely need to. Collision maps
 * can be very large images which will make your game use more memory and can
 * cause some slower pcs to start lagging. The collision checking for collision
 * maps are also take about 2-4x more time to compute and is a lot less accurate
 * since it only checks if the colliders edge collided with the collision map.
 * So using collision maps, might be pretty, but use it with caution as it can
 * slow down your game! A better solution for this would be to use a PolygonMap
 * where you create polygon colliders and add them into the map.
 * ============================================================================
 * ## Addons
 * ============================================================================
 * **Pathfind**
 * ----------------------------------------------------------------------------
 * https://quxios.github.io/plugins/QPathfind
 *
 * QPathfind is an A* pathfinding algorithm. This algorithm can be pretty heavy
 * if you are doing pixel based movements. So avoid having to many pathfinders
 * running at the same time.
 *
 * For the interval settings, you want to set this to a value where the path
 * can be found in 1-3 frames. You can think of intervals as the number of
 * moves to try per frame. The default setting 100, is good for grid based
 * since that will take you 100 grid spaces away. But for a pixel based, 100
 * steps might not be as far. If most of your pathfinds will be short (paths less then
 * 10 tiles away), then you should set this to a value between 100-300. For medium
 * paths (10-20 tiles away) try a value between 300-700. For large or complicated
 * paths (20+ tiles away or lots of obsticles) try something between 1000-2000.
 * I would avoid going over 2000. My opinion is to keep it below 1000, and simplify
 * any of your larger paths by either splitting it into multiple pathfinds or
 * just making the path less complex.
 *
 * ----------------------------------------------------------------------------
 * **Collision Map**
 * ----------------------------------------------------------------------------
 * https://quxios.github.io/plugins/QM+CollisionMap
 *
 * Collision Map is an addon for this plugin that lets you use images for
 * collisions. Note that collision map checks are a lot heavier then normal
 * collision checks. So this plugin can make your game laggier if used with
 * other heavy plugins.
 *
 * ----------------------------------------------------------------------------
 * **Region Colliders**
 * ----------------------------------------------------------------------------
 * https://quxios.github.io/plugins/QM+RegionColliders
 *
 * Region Colliders is an addon for this plugin that lets you add colliders
 * to regions by creating a json file.
 * ============================================================================
 * ## Showcase
 * ============================================================================
 * This section is for user created stuff. If you created a video, game, tutorial,
 * or an addon for QMovement feel free to send me a link and I'll showcase it here!
 * ----------------------------------------------------------------------------
 * **Videos**
 * ----------------------------------------------------------------------------
 * Great example of using the collision map addon:
 *
 * https://www.youtube.com/watch?v=-BN4Pyr5IBo
 *
 * ============================================================================
 * ## Links
 * ============================================================================
 * Formated Help:
 *
 *  https://quxios.github.io/plugins/QMovement
 *
 * RPGMakerWebs:
 *
 *  http://forums.rpgmakerweb.com/index.php?threads/qplugins.73023/
 *
 * Terms of use:
 *
 *  https://github.com/quxios/QMV-Master-Demo/blob/master/readme.md
 *
 * Like my plugins? Support me on Patreon!
 *
 *  https://www.patreon.com/quxios
 *
 * @tags movement, pixel, character
 */
/*~struct~Collider:
 * @param Type
 * @desc Set to box or circle
 * @type select
 * @option Box
 * @value box
 * @option Circle
 * @value circle
 * @default box
 *
 * @param Width
 * @desc Set to the width of the collider.
 * @type Number
 * @default 36
 *
 * @param Height
 * @desc Set to the height of the collider.
 * @type Number
 * @default 24
 *
 * @param Offset X
 * @desc Set to the x offset of the collider.
 * @type Number
 * @min -9999
 * @default 6
 *
 * @param Offset Y
 * @desc Set to the y offset of the collider.
 * @type Number
 * @min -9999
 * @default 24
 */
/*~struct~ColliderPreset:
 * @param ID
 * @desc The ID of this preset, needs to be unique!
 * @default
 *
 * @param Type
 * @desc Set to box or circle
 * @type select
 * @option Box
 * @value box
 * @option Circle
 * @value circle
 * @default box
 *
 * @param Width
 * @desc Set to the width of the collider.
 * @type Number
 * @default 36
 *
 * @param Height
 * @desc Set to the height of the collider.
 * @type Number
 * @default 24
 *
 * @param Offset X
 * @desc Set to the x offset of the collider.
 * @type Number
 * @default 6
 *
 * @param Offset Y
 * @desc Set to the y offset of the collider.
 * @type Number
 * @default 24
 */

var QMovement = (function () {
'use strict';

function QMovement$1() {
  throw new Error("This is a static class");
}

const _PARAMS = QPlus.getParams("<Luna_QMovement>", {
  "Player Collider": {
    Type: "box",
    Width: 36,
    Height: 24,
    "Offset X": 6,
    "Offset Y": 24,
  },
  "Event Collider": {
    Type: "box",
    Width: 36,
    Height: 24,
    "Offset X": 6,
    "Offset Y": 24,
  },
  Presets: [],
});

QMovement$1.grid = _PARAMS["Grid"];
QMovement$1.tileSize = _PARAMS["Tile Size"];
QMovement$1.offGrid = _PARAMS["Off Grid"];
QMovement$1.smartMove = _PARAMS["Smart Move"];
QMovement$1.midPass = _PARAMS["Mid Pass"];
QMovement$1.moveOnClick = _PARAMS["Move on click"];
QMovement$1.diagonal = _PARAMS["Diagonal"];
QMovement$1.collision = "#FF0000"; // will be changable in a separate addon
QMovement$1.water1 = "#00FF00"; // will be changable in a separate addon
QMovement$1.water2 = "#0000FF"; // will be changable in a separate addon
QMovement$1.water1Tag = 1; // will be changable in a separate addon
QMovement$1.water2Tag = 2; // will be changable in a separate addon
QMovement$1.playerCollider = convertColliderStruct(_PARAMS["Player Collider"]);
QMovement$1.eventCollider = convertColliderStruct(_PARAMS["Event Collider"]);
QMovement$1.presets = {};
_PARAMS["Presets"].forEach(function (preset) {
  QMovement$1.presets[preset.ID] = convertColliderStruct(preset);
});
QMovement$1.showColliders = _PARAMS["Show Colliders"];
QMovement$1.tileBoxes = {
  1537: [48, 6, 0, 42],
  1538: [6, 48],
  1539: [
    [48, 6, 0, 42],
    [6, 48],
  ],
  1540: [6, 48, 42],
  1541: [
    [48, 6, 0, 42],
    [6, 48, 42],
  ],
  1542: [
    [6, 48],
    [6, 48, 42],
  ],
  1543: [
    [48, 6, 0, 42],
    [6, 48],
    [6, 48, 42],
  ],
  1544: [48, 6],
  1545: [
    [48, 6],
    [48, 6, 0, 42],
  ],
  1546: [
    [48, 6],
    [6, 48],
  ],
  1547: [
    [48, 6],
    [48, 6, 0, 42],
    [6, 48],
  ],
  1548: [
    [48, 6],
    [6, 48, 42],
  ],
  1549: [
    [48, 6],
    [48, 6, 0, 42],
    [6, 48, 42],
  ],
  1550: [
    [48, 6],
    [6, 48],
    [6, 48, 42],
  ],
  1551: [48, 48], // Impassable A5, B
  2063: [48, 48], // Impassable A1
  2575: [48, 48],
  3586: [6, 48],
  3588: [6, 48, 42],
  3590: [
    [6, 48],
    [6, 48, 42],
  ],
  3592: [48, 6],
  3594: [
    [48, 6],
    [6, 48],
  ],
  3596: [
    [48, 6],
    [6, 48, 42],
  ],
  3598: [
    [48, 6],
    [6, 48],
    [6, 48, 42],
  ],
  3599: [48, 48], // Impassable A2, A3, A4
  3727: [48, 48],
};
const rs = QMovement$1.tileSize / 48;
for (const key in QMovement$1.tileBoxes) {
  if (QMovement$1.tileBoxes.hasOwnProperty(key)) {
    for (let i = 0; i < QMovement$1.tileBoxes[key].length; i++) {
      if (QMovement$1.tileBoxes[key][i].constructor === Array) {
        for (let j = 0; j < QMovement$1.tileBoxes[key][i].length; j++) {
          QMovement$1.tileBoxes[key][i][j] *= rs;
        }
      } else {
        QMovement$1.tileBoxes[key][i] *= rs;
      }
    }
  }
}
// following will be changable in a separate addon
QMovement$1.regionColliders = {};
QMovement$1.colliderMap = {};

function convertColliderStruct(struct) {
  return [
    struct.Type,
    struct.Width,
    struct.Height,
    struct["Offset X"],
    struct["Offset Y"],
  ];
}

function Polygon_Collider() {
  this.initialize.apply(this, arguments);
}

Polygon_Collider._counter = 0;

Polygon_Collider.prototype.initialize = function (points) {
  const args = [];
  for (let i = 1; i < arguments.length; i++) {
    args.push(arguments[i]);
  }
  this.initMembers.apply(this, args);
  this.makeVertices(points);
};

Polygon_Collider.prototype.initMembers = function (x, y) {
  x = x !== undefined ? x : 0;
  y = y !== undefined ? y : 0;
  this._position = new Point(x, y);
  this._scale = new Point(1, 1);
  this._offset = new Point(0, 0);
  this._pivot = new Point(0, 0);
  this._radian = 0;
  this._sectorSize = QMovement.tileSize;
  this._note = "";
  this.meta = {};
  this.id = Polygon_Collider._counter++;
};

Object.defineProperty(Polygon_Collider.prototype, "note", {
  get() {
    return this._note;
  },
  set(note) {
    this._note = note;
    this.meta = QPlus.getMeta(note);
  },
});

Object.defineProperty(Polygon_Collider.prototype, "x", {
  get() {
    return this._position.x;
  },
  set(x) {
    this._position.x = x;
  },
});

Object.defineProperty(Polygon_Collider.prototype, "y", {
  get() {
    return this._position.y;
  },
  set(y) {
    this._position.y = y;
  },
});

Object.defineProperty(Polygon_Collider.prototype, "ox", {
  get() {
    return this._offset.x + this._pivot.x;
  },
  set(value) {
    this._offset.x = value;
    this.refreshVertices();
  },
});

Object.defineProperty(Polygon_Collider.prototype, "oy", {
  get() {
    return this._offset.y + this._pivot.y;
  },
  set(value) {
    this._offset.y = value - this._pivot.y;
    this.refreshVertices();
  },
});

Polygon_Collider.prototype.isPolygon = function () {
  return true;
};

Polygon_Collider.prototype.isBox = function () {
  return true;
};

Polygon_Collider.prototype.isCircle = function () {
  return false;
};

Polygon_Collider.prototype.makeVertices = function (points) {
  this._vertices = [];
  this._baseVertices = [];
  this._edges = [];
  this._vectors = [];
  this._xMin = null;
  this._xMax = null;
  this._yMin = null;
  this._yMax = null;
  for (let i = 0; i < points.length; i++) {
    const x = points[i].x - this._pivot.x;
    const y = points[i].y - this._pivot.y;
    const x2 = x + this.x + this.ox;
    const y2 = y + this.y + this.oy;
    this._vertices.push(new Point(x2, y2));
    this._baseVertices.push(new Point(x, y));
    if (i !== 0) {
      const prev = this._vertices[i - 1];
      this._edges.push({
        x1: prev.x,
        x2: x2,
        y1: prev.y,
        y2: y2,
      });
    }
    if (i === points.length - 1) {
      const first = this._vertices[0];
      this._edges.push({
        x1: x2,
        x2: first.x,
        y1: y2,
        y2: first.y,
      });
    }
    let radian = Math.atan2(y, x);
    radian += radian < 0 ? Math.PI * 2 : 0;
    const dist = Math.sqrt(x * x + y * y);
    this._vectors.push({ radian, dist });
    if (this._xMin === null || this._xMin > x) {
      this._xMin = x;
    }
    if (this._xMax === null || this._xMax < x) {
      this._xMax = x;
    }
    if (this._yMin === null || this._yMin > y) {
      this._yMin = y;
    }
    if (this._yMax === null || this._yMax < y) {
      this._yMax = y;
    }
  }
  this.width = Math.abs(this._xMax - this._xMin);
  this.height = Math.abs(this._yMax - this._yMin);
  const x1 = this._xMin + this.x + this.ox;
  const y1 = this._yMin + this.y + this.oy;
  this.center = new Point(x1 + this.width / 2, y1 + this.height / 2);
};

Polygon_Collider.prototype.makeVectors = function () {
  this._vectors = this._baseVertices.map(
    function (vertex) {
      const dx = vertex.x - this._pivot.x;
      const dy = vertex.y - this._pivot.y;
      let radian = Math.atan2(dy, dx);
      radian += radian < 0 ? Math.PI * 2 : 0;
      const dist = Math.sqrt(dx * dx + dy * dy);
      return { radian, dist };
    }.bind(this)
  );
};

Polygon_Collider.prototype.setBounds = function () {
  this._xMin = null;
  this._xMax = null;
  this._yMin = null;
  this._yMax = null;
  for (let i = 0; i < this._baseVertices.length; i++) {
    const x = this._baseVertices[i].x;
    const y = this._baseVertices[i].y;
    if (this._xMin === null || this._xMin > x) {
      this._xMin = x;
    }
    if (this._xMax === null || this._xMax < x) {
      this._xMax = x;
    }
    if (this._yMin === null || this._yMin > y) {
      this._yMin = y;
    }
    if (this._yMax === null || this._yMax < y) {
      this._yMax = y;
    }
  }
  this.width = Math.abs(this._xMax - this._xMin);
  this.height = Math.abs(this._yMax - this._yMin);
  const x1 = this._xMin + this.x + this.ox;
  const y1 = this._yMin + this.y + this.oy;
  this.center = new Point(x1 + this.width / 2, y1 + this.height / 2);
};

Polygon_Collider.prototype.refreshVertices = function () {
  this._edges = [];
  let i, j;
  for (i = 0, j = this._vertices.length; i < j; i++) {
    const vertex = this._vertices[i];
    vertex.x = this.x + this._baseVertices[i].x + this.ox;
    vertex.y = this.y + this._baseVertices[i].y + this.oy;
    if (i !== 0) {
      const prev = this._vertices[i - 1];
      this._edges.push({
        x1: prev.x,
        x2: vertex.x,
        y1: prev.y,
        y2: vertex.y,
      });
    }
    if (i === j - 1) {
      const first = this._vertices[0];
      this._edges.push({
        x1: vertex.x,
        x2: first.x,
        y1: vertex.y,
        y2: first.y,
      });
    }
  }
  this.setBounds();
};

Polygon_Collider.prototype.setSectorSize = function (value) {
  return (this._sectorSize = value);
};

Polygon_Collider.prototype.sectorEdge = function () {
  let x1 = this._xMin + this.x + this.ox;
  let x2 = this._xMax + this.x + this.ox - 1;
  let y1 = this._yMin + this.y + this.oy;
  let y2 = this._yMax + this.y + this.oy - 1;
  x1 = Math.floor(x1 / this._sectorSize);
  x2 = Math.floor(x2 / this._sectorSize);
  y1 = Math.floor(y1 / this._sectorSize);
  y2 = Math.floor(y2 / this._sectorSize);
  return {
    x1: x1,
    x2: x2,
    y1: y1,
    y2: y2,
  };
};

Polygon_Collider.prototype.gridEdge = function () {
  let x1 = this._xMin + this.x + this.ox;
  let x2 = this._xMax + this.x + this.ox - 1;
  let y1 = this._yMin + this.y + this.oy;
  let y2 = this._yMax + this.y + this.oy - 1;
  x1 = Math.floor(x1 / QMovement.tileSize);
  x2 = Math.floor(x2 / QMovement.tileSize);
  y1 = Math.floor(y1 / QMovement.tileSize);
  y2 = Math.floor(y2 / QMovement.tileSize);
  return {
    x1: x1,
    x2: x2,
    y1: y1,
    y2: y2,
  };
};

Polygon_Collider.prototype.edge = function () {
  const x1 = this._xMin + this.x + this.ox;
  const x2 = this._xMax + this.x + this.ox - 1;
  const y1 = this._yMin + this.y + this.oy;
  const y2 = this._yMax + this.y + this.oy - 1;
  return {
    x1: x1,
    x2: x2,
    y1: y1,
    y2: y2,
  };
};

Polygon_Collider.prototype.setPivot = function (x, y) {
  this._pivot.x = x;
  this._pivot.y = y;
  this.makeVectors();
  this.rotate(0); // Resets base vertices
};

Polygon_Collider.prototype.centerPivot = function () {
  this._pivot.x = this.width / 2;
  this._pivot.y = this.height / 2;
  this.makeVectors();
  this.rotate(0); // Resets base vertices
};

Polygon_Collider.prototype.setRadian = function (radian) {
  radian = radian !== undefined ? radian : 0;
  this.rotate(radian - this._radian);
};

Polygon_Collider.prototype.rotate = function (radian) {
  this._radian += radian;
  for (let i = 0; i < this._vectors.length; i++) {
    const vector = this._vectors[i];
    vector.radian += radian;
    const x = vector.dist * Math.cos(vector.radian);
    const y = vector.dist * Math.sin(vector.radian);
    this._baseVertices[i].x = Math.round(x);
    this._baseVertices[i].y = Math.round(y);
  }
  this.refreshVertices();
};

Polygon_Collider.prototype.setScale = function (zX, zY) {
  zX = zX !== undefined ? zX : 1;
  zY = zY !== undefined ? zY : 1;
  this.scale(zX / this._scale.x, zY / this._scale.y);
};

Polygon_Collider.prototype.scale = function (zX, zY) {
  this._scale.x *= zX;
  this._scale.y *= zY;
  for (let i = 0; i < this._vectors.length; i++) {
    const vector = this._vectors[i];
    let x = vector.dist * Math.cos(vector.radian);
    let y = vector.dist * Math.sin(vector.radian);
    x *= zX;
    y *= zY;
    vector.radian = Math.atan2(y, x);
    vector.radian += vector.radian < 0 ? Math.PI * 2 : 0;
    vector.dist = Math.sqrt(x * x + y * y);
    this._baseVertices[i].x = Math.round(x);
    this._baseVertices[i].y = Math.round(y);
  }
  this.refreshVertices();
};

Polygon_Collider.prototype.moveTo = function (x, y) {
  if (x !== this.x || y !== this.y) {
    this.x = x;
    this.y = y;
    this.refreshVertices();
  }
};

Polygon_Collider.prototype.intersects = function (other) {
  if (this.height === 0 || this.width === 0) return false;
  if (other.height === 0 || other.width === 0) return false;
  if (!other.isPolygon()) {
    if (this.containsPoint(other.center.x, other.center.y)) return true;
  }
  if (!this.isPolygon()) {
    if (other.containsPoint(this.center.x, this.center.y)) return true;
  }
  let i, j, x, y;
  for (i = 0, j = other._vertices.length; i < j; i++) {
    x = other._vertices[i].x;
    y = other._vertices[i].y;
    if (this.containsPoint(x, y)) return true;
  }
  for (i = 0, j = this._vertices.length; i < j; i++) {
    x = this._vertices[i].x;
    y = this._vertices[i].y;
    if (other.containsPoint(x, y)) return true;
  }
  // TODO add edge checking
  /*
    for (i = 0; i < this._edges.length; i++) {
      for (j = 0; j < other._edges.length; j++) {

      }
    }*/
  return false;
};

Polygon_Collider.prototype.inside = function (other) {
  if (this.height === 0 || this.width === 0) return false;
  if (other.height === 0 || other.width === 0) return false;
  let i, j, x, y;
  for (i = 0, j = other._vertices.length; i < j; i++) {
    x = other._vertices[i].x;
    y = other._vertices[i].y;
    if (!this.containsPoint(x, y)) {
      return false;
    }
  }
  return true;
};

Polygon_Collider.prototype.containsPoint = function (x, y) {
  let i;
  let j = this._vertices.length - 1;
  let odd = false;
  const poly = this._vertices;
  for (i = 0; i < this._vertices.length; i++) {
    if (
      (poly[i].y < y && poly[j].y >= y) ||
      (poly[j].y < y && poly[i].y >= y)
    ) {
      if (
        poly[i].x +
          ((y - poly[i].y) / (poly[j].y - poly[i].y)) *
            (poly[j].x - poly[i].x) <
        x
      ) {
        odd = !odd;
      }
    }
    j = i;
  }
  return odd;
};

Polygon_Collider.prototype.lineIntersection = function (lineA, lineB) {
  const a1 = lineA.y1 - lineA.y2;
  const b1 = lineA.x2 - lineA.x1;
  const a2 = lineB.y1 - lineB.y2;
  const b2 = lineB.x2 - lineB.x1;
  const det = a1 * b2 - a2 * b1;
  if (det == 0) {
    return false;
  }
  const c1 = a1 * lineA.x1 + b1 * lineA.y1;
  const c2 = a2 * lineB.x1 + b2 * lineB.y1;
  const x = (b2 * c1 - b1 * c2) / det;
  const y = (a1 * c2 - a2 * c1) / det;
  // incomplete
  // returns false if lines don't intersect
  // x/y will return where or when they will intersect
  return new Point(x, y);
};

// TODO Optimize this
// Compaire other methods, example atan2 - atan2 or a dot product
Polygon_Collider.prototype.bestPairFrom = function (point) {
  const vertices = this._vertices;
  const radians = [];
  const points = [];
  for (let i = 0; i < vertices.length; i++) {
    let radian = Math.atan2(vertices[i].y - point.y, vertices[i].x - point.x);
    radian += radian < 0 ? 2 * Math.PI : 0;
    radians.push(radian);
    points.push(new Point(vertices[i].x, vertices[i].y));
  }
  let bestPair = [];
  let currI = 0;
  let max = -Math.PI * 2;
  while (points.length > 0) {
    const curr = points.shift();
    for (let i = 0; i < points.length; i++) {
      const dr = radians[currI] - radians[currI + i + 1];
      if (Math.abs(dr) > max) {
        max = Math.abs(dr);
        bestPair = [currI, currI + i + 1];
      }
    }
    currI++;
  }
  return bestPair;
};

// returns a new polygon
Polygon_Collider.prototype.stretchedPoly = function (radian, dist) {
  const dist2 = dist + Math.max(this.width, this.height);
  const xComponent = Math.cos(radian) * dist;
  const yComponent = Math.sin(radian) * dist;
  const x1 = this.center.x + Math.cos(radian) * dist2;
  const y1 = this.center.y + Math.sin(radian) * dist2;
  const bestPair = this.bestPairFrom(new Point(x1, y1));
  const vertices = this._vertices;
  const pointsA = [];
  const pointsB = [];
  let i;
  for (i = 0; i < vertices.length; i++) {
    const x2 = vertices[i].x - this.x;
    const y2 = vertices[i].y - this.y;
    pointsA.push(new Point(x2, y2));
    pointsB.push(new Point(x2 + xComponent, y2 + yComponent));
  }
  // TODO add the other vertices from collider
  const points = [];
  points.push(pointsA[bestPair[0]]);
  points.push(pointsB[bestPair[0]]);
  points.push(pointsB[bestPair[1]]);
  points.push(pointsA[bestPair[1]]);
  return new Polygon_Collider(points, this.x, this.y);
};

function Box_Collider() {
  this.initialize.apply(this, arguments);
}

Box_Collider.prototype = Object.create(Polygon_Collider.prototype);
Box_Collider.prototype.constructor = Box_Collider;

Box_Collider.prototype.initialize = function (width, height, ox, oy, options) {
  const points = [
    new Point(0, 0),
    new Point(width, 0),
    new Point(width, height),
    new Point(0, height),
  ];
  Polygon_Collider.prototype.initialize.call(
    this,
    points,
    width,
    height,
    ox,
    oy,
    options
  );
};

Box_Collider.prototype.initMembers = function (width, height, ox, oy, options) {
  Polygon_Collider.prototype.initMembers.call(this, 0, 0);
  ox = ox === undefined ? 0 : ox;
  oy = oy === undefined ? 0 : oy;
  options = options === undefined ? {} : options;
  this._offset = new Point(ox, oy);
  this._pivot = options.pivot || new Point(width / 2, height / 2);
  this._scale = options.scale || this._scale;
  this._radian = options.radian || this._radian;
  this._position = options.position || this._position;
};

Box_Collider.prototype.isPolygon = function () {
  return false;
};

Box_Collider.prototype.isBox = function () {
  return true;
};

Box_Collider.prototype.containsPoint = function (x, y) {
  if (this._radian === 0) {
    const xMin = this._xMin + this.x + this.ox;
    const xMax = this._xMax + this.x + this.ox;
    const yMin = this._yMin + this.y + this.oy;
    const yMax = this._yMax + this.y + this.oy;
    const insideX = x >= xMin && x <= xMax;
    const insideY = y >= yMin && y <= yMax;
    return insideX && insideY;
  } else {
    return Polygon_Collider.prototype.containsPoint.call(this, x, y);
  }
};
window.Box_Collider = Box_Collider;
function Circle_Collider() {
  this.initialize.apply(this, arguments);
}

Circle_Collider.prototype = Object.create(Polygon_Collider.prototype);
Circle_Collider.prototype.constructor = Circle_Collider;

Circle_Collider.prototype.initialize = function (
  width,
  height,
  ox,
  oy,
  options
) {
  this._radius = new Point(width / 2, height / 2);
  const points = [];
  for (let i = 7; i >= 0; i--) {
    const rad = (Math.PI / 4) * i + Math.PI;
    const x = this._radius.x + this._radius.x * Math.cos(rad);
    const y = this._radius.y + this._radius.y * -Math.sin(rad);
    points.push(new Point(x, y));
  }
  Polygon_Collider.prototype.initialize.call(
    this,
    points,
    width,
    height,
    ox,
    oy,
    options
  );
};

Circle_Collider.prototype.initMembers = Box_Collider.prototype.initMembers;

Object.defineProperty(Circle_Collider.prototype, "radiusX", {
  get() {
    return this._radius.x;
  },
});

Object.defineProperty(Circle_Collider.prototype, "radiusY", {
  get() {
    return this._radius.y;
  },
});

Circle_Collider.prototype.isPolygon = function () {
  return false;
};

Circle_Collider.prototype.isCircle = function () {
  return true;
};

Circle_Collider.prototype.scale = function (zX, zY) {
  Polygon_Collider.prototype.scale.call(this, zX, zY);
  this._radius.x *= zX;
  this._radius.y *= zY;
};

Circle_Collider.prototype.circlePosition = function (radian) {
  let x = this.radiusX * Math.cos(radian);
  let y = this.radiusY * -Math.sin(radian);
  const dist = Math.sqrt(x * x + y * y);
  radian -= this._radian;
  x = dist * Math.cos(radian);
  y = dist * -Math.sin(radian);
  return new Point(this.center.x + x, this.center.y + y);
};

Circle_Collider.prototype.intersects = function (other) {
  if (this.height === 0 || this.width === 0) return false;
  if (other.height === 0 || other.width === 0) return false;
  if (this.containsPoint(other.center.x, other.center.y)) return true;
  if (other.containsPoint(this.center.x, this.center.y)) return true;
  let x1 = this.center.x;
  const x2 = other.center.x;
  let y1 = this.center.y;
  const y2 = other.center.y;
  let rad = Math.atan2(y1 - y2, x2 - x1);
  rad += rad < 0 ? 2 * Math.PI : 0;
  let pos = this.circlePosition(rad);
  if (other.containsPoint(pos.x, pos.y)) return true;
  if (other.isCircle()) {
    rad = Math.atan2(y2 - y1, x1 - x2);
    rad += rad < 0 ? 2 * Math.PI : 0;
    pos = other.circlePosition(rad);
    if (this.containsPoint(pos.x, pos.y)) return true;
  }
  let i, j;
  for (i = 0, j = other._vertices.length; i < j; i++) {
    x1 = other._vertices[i].x;
    y1 = other._vertices[i].y;
    if (this.containsPoint(x1, y1)) return true;
  }
  for (i = 0, j = this._vertices.length; i < j; i++) {
    x1 = this._vertices[i].x;
    y1 = this._vertices[i].y;
    if (other.containsPoint(x1, y1)) return true;
  }
  return false;
};

window.Circle_Collider = Circle_Collider;

function Sprite_Collider() {
  this.initialize.apply(this, arguments);
}

Sprite_Collider.prototype = Object.create(Sprite.prototype);
Sprite_Collider.prototype.constructor = Sprite_Collider;

Sprite_Collider.prototype.initialize = function (collider, duration) {
  Sprite.prototype.initialize.call(this);
  this._emitter = new PIXI.utils.EventEmitter();
  this.z = 7;
  this._duration = duration || 0;
  this._cache = {};
  this.setupCollider(collider);
  this.checkChanges();
};

Sprite_Collider.prototype.on = function (eventName, func) {
  this._emitter.on(eventName, func);
};

Sprite_Collider.prototype.setCache = function () {
  this._cache = {
    color: this._collider.color,
    width: this._collider.width,
    height: this._collider.height,
    radian: this._collider._radian,
  };
};

Sprite_Collider.prototype.needsRedraw = function () {
  return (
    this._cache.width !== this._collider.width ||
    this._cache.height !== this._collider.height ||
    this._cache.color !== this._collider.color ||
    this._cache.radian !== this._collider._radian
  );
};

Sprite_Collider.prototype.setupCollider = function (collider) {
  this._collider = collider;
  let isNew = false;
  if (!this._colliderSprite) {
    this._colliderSprite = new PIXI.Graphics();
    isNew = true;
  }
  this.drawCollider();
  if (isNew) {
    this.addChild(this._colliderSprite);
  }
};

Sprite_Collider.prototype.drawCollider = function () {
  const collider = this._collider;
  this._colliderSprite.clear();
  let color = (collider.color || "#ff0000").replace("#", "");
  color = parseInt(color, 16);
  this._colliderSprite.beginFill(color);
  if (collider.isCircle()) {
    const radiusX = collider.radiusX;
    const radiusY = collider.radiusY;
    this._colliderSprite.drawEllipse(0, 0, radiusX, radiusY);
    this._colliderSprite.rotation = collider._radian;
  } else {
    this._colliderSprite.drawPolygon(collider._baseVertices);
  }
  this._colliderSprite.endFill();
};

Sprite_Collider.prototype.update = function () {
  Sprite.prototype.update.call(this);
  this.checkChanges();
  if (this._duration >= 0 || this._collider.kill) {
    this.updateDecay();
  }
};

Sprite_Collider.prototype.checkChanges = function () {
  this.visible = !this._collider._isHidden;
  this.x = this._collider.x + this._collider.ox;
  this.x -= $gameMap.displayX() * QMovement$1.tileSize;
  this.y = this._collider.y + this._collider.oy;
  this.y -= $gameMap.displayY() * QMovement$1.tileSize;
  if (this.x < -this._collider.width || this.x > Graphics.width) {
    if (this.y < -this._collider.height || this.y > Graphics.height) {
      this.visible = false;
    }
  }
  this._colliderSprite.z = this.z;
  this._colliderSprite.visible = this.visible;
  if (this.needsRedraw()) {
    this.drawCollider();
    this.setCache();
  }
};

Sprite_Collider.prototype.updateDecay = function () {
  this._duration--;
  if (this._duration <= 0 || this._collider.kill) {
    this._emitter.emit("collider-kill", this);
    this._collider = null;
  }
};

window.Sprite_Collider = Sprite_Collider;

class ColliderManager {
  static setup() {
    this._colliders = [];
    this._colliderGrid = [];
    this._characterGrid = [];
    this._sectorSize = QMovement$1.tileSize;
    this._needsRefresh = true;
    this.container = new Sprite();
    this.container.alpha = 0.3;
    this.containerDict = {};
    this.visible = QMovement$1.showColliders;
  }

  static clear() {
    this._colliders = [];
    this._colliderGrid = [];
    this._characterGrid = [];
    this.container.removeChildren();
    this.containerDict = {};
  }

  static refresh() {
    this.clear();
    this._colliderGrid = new Array(this._mapWidth);
    for (let x = 0; x < this._colliderGrid.length; x++) {
      this._colliderGrid[x] = [];
      for (let y = 0; y < this._mapHeight; y++) {
        this._colliderGrid[x].push([]);
      }
    }
    this._characterGrid = new Array(this._mapWidth);
    for (let x = 0; x < this._characterGrid.length; x++) {
      this._characterGrid[x] = [];
      for (let y = 0; y < this._mapHeight; y++) {
        this._characterGrid[x].push([]);
      }
    }
    this._needsRefresh = false;
  }

  static addCollider(collider, duration, ignoreGrid) {
    if (!$dataMap) return;
    const i = this._colliders.indexOf(collider);
    if (i === -1) {
      this._colliders.push(collider);
      if (duration > 0 || duration === -1) {
        this.draw(collider, duration);
      }
    }
    if (!ignoreGrid) {
      this.updateGrid(collider);
    }
  }

  static addCharacter(character, duration) {
    if (!$dataMap) return;
    const i = this._colliders.indexOf(character);
    if (i === -1) {
      this._colliders.push(character);
      if (duration > 0 || duration === -1) {
        this.draw(character.collider("bounds"), duration);
      }
    }
    this.updateGrid(character);
  }

  static remove(collider) {
    const i = this._colliders.indexOf(collider);
    if (i < 0) return;
    this.removeFromGrid(collider);
    if (!collider._colliders) collider.kill = true;
    this._colliders.splice(i, 1);
  }

  static removeSprite(sprite) {
    this.container.removeChild(sprite);
    delete this.containerDict[sprite._collider.id];
  }

  static updateGrid(collider, prevGrid) {
    if (this._needsRefresh) return;
    let currGrid;
    let grid;
    if (collider._colliders) {
      grid = this._characterGrid;
      currGrid = collider.collider("bounds").sectorEdge();
    } else {
      grid = this._colliderGrid;
      currGrid = collider.sectorEdge();
    }
    // TODO make this into 1 single 2d loop
    let x, y;
    if (prevGrid) {
      if (
        currGrid.x1 == prevGrid.x1 &&
        currGrid.y1 === prevGrid.y1 &&
        currGrid.x2 == prevGrid.x2 &&
        currGrid.y2 === prevGrid.y2
      ) {
        return;
      }
      for (x = prevGrid.x1; x <= prevGrid.x2; x++) {
        for (y = prevGrid.y1; y <= prevGrid.y2; y++) {
          if (!grid[x] || !grid[x][y]) continue;
          const i = grid[x][y].indexOf(collider);
          if (i !== -1) {
            grid[x][y].splice(i, 1);
          }
        }
      }
    }
    for (x = currGrid.x1; x <= currGrid.x2; x++) {
      for (y = currGrid.y1; y <= currGrid.y2; y++) {
        if (!grid[x] || !grid[x][y]) continue;
        grid[x][y].push(collider);
      }
    }
  }

  static removeFromGrid(collider) {
    let grid;
    let edge;
    if (collider._colliders) {
      // Is a character obj
      grid = this._characterGrid;
      edge = collider.collider("bounds").sectorEdge();
    } else {
      // is a collider
      grid = this._colliderGrid;
      edge = collider.sectorEdge();
    }
    for (let x = edge.x1; x <= edge.x2; x++) {
      for (let y = edge.y1; y <= edge.y2; y++) {
        if (!grid[x] || !grid[x][y]) continue;
        const i = grid[x][y].indexOf(collider);
        if (i !== -1) {
          grid[x][y].splice(i, 1);
        }
      }
    }
  }

  static getCharactersNear(collider, only) {
    const grid = collider.sectorEdge();
    const near = [];
    const checked = {};
    let x, y, i;
    for (x = grid.x1; x <= grid.x2; x++) {
      for (y = grid.y1; y <= grid.y2; y++) {
        if (x < 0 || x >= this.sectorCols()) continue;
        if (y < 0 || y >= this.sectorRows()) continue;
        const charas = this._characterGrid[x][y];
        for (i = 0; i < charas.length; i++) {
          if (checked[charas[i].charaId()]) {
            continue;
          }
          checked[charas[i].charaId()] = true;
          if (only) {
            const value = only(charas[i]);
            if (value === "break") {
              near.push(charas[i]);
              // Why was this in original code? It does not exist in this method.
              // isBreaking = true;
              return near;
            } else if (value === false) {
              continue;
            }
          }
          near.push(charas[i]);
        }
      }
    }
    return near;
  }

  static getCollidersNear(collider, only, debug) {
    const grid = collider.sectorEdge();
    const near = [];
    const checked = {};
    let isBreaking = false;
    let x, y, i;
    for (x = grid.x1; x <= grid.x2; x++) {
      for (y = grid.y1; y <= grid.y2; y++) {
        if (x < 0 || x >= this.sectorCols()) continue;
        if (y < 0 || y >= this.sectorRows()) continue;
        const colliders = this._colliderGrid[x][y];
        for (i = 0; i < colliders.length; i++) {
          if (checked[colliders[i].id]) {
            continue;
          }
          checked[colliders[i].id] = true;
          if (only) {
            const value = only(colliders[i]);
            if (value === "break") {
              near.push(colliders[i]);
              isBreaking = true;
              break;
            } else if (value === false) {
              continue;
            }
          }
          near.push(colliders[i]);
        }
        if (isBreaking) break;
      }
      if (isBreaking) break;
    }
    only = null;
    return near;
  }

  static getAllNear(collider, only) {
    const grid = collider.sectorEdge();
    const near = [];
    const checked = {};
    let x, y, i;
    for (x = grid.x1; x <= grid.x2; x++) {
      for (y = grid.y1; y <= grid.y2; y++) {
        if (x < 0 || x >= this.sectorCols()) continue;
        if (y < 0 || y >= this.sectorRows()) continue;
        const charas = this._characterGrid[x][y];
        const colliders = this._colliderGrid[x][y];
        for (i = 0; i < charas.length + colliders.length; i++) {
          const type = i >= charas.length ? "collider" : "chara";
          let obj;
          if (type === "chara") {
            obj = charas[i];
            if (checked[obj.charaId()]) {
              continue;
            }
            checked[obj.charaId()] = true;
          } else {
            obj = colliders[i - charas.length];
            if (checked[obj.id]) {
              continue;
            }
            checked[obj.id] = true;
          }
          if (only) {
            const value = only(type, obj);
            if (value === "break") {
              near.push(obj);
              return near;
            } else if (value === false) {
              continue;
            }
          }
          near.push(obj);
        }
      }
    }
    return near;
  }

  static sectorCols() {
    return Math.floor((this._mapWidth * QMovement$1.tileSize) / this._sectorSize);
  }

  static sectorRows() {
    return Math.floor(
      (this._mapHeight * QMovement$1.tileSize) / this._sectorSize
    );
  }

  static draw(collider, duration) {
    if ($gameTemp.isPlaytest()) {
      if (this.containerDict[collider.id]) {
        this.containerDict[collider.id]._collider = collider;
        this.containerDict[collider.id]._collider.kill = false;
        this.containerDict[collider.id]._duration = duration;
        this.containerDict[collider.id].checkChanges();
        return;
      }
      collider.kill = false;
      const sprite = new Sprite_Collider(collider, duration || -1);
      sprite.on("collider-kill", this._onSpriteColliderKill.bind(this));
      this.container.addChild(sprite);
      this.containerDict[collider.id] = sprite;
    }
  }

  static _onSpriteColliderKill(sprite) {
    this.removeSprite(sprite);
  }

  static update() {
    if (this.visible) {
      this.show();
    } else {
      this.hide();
    }
  }

  static toggle() {
    this.visible = !this.visible;
  }

  static show() {
    this.container.visible = true;
  }

  static hide() {
    this.container.visible = false;
  }

  static convertToCollider(arr) {
    let type = arr[0].toLowerCase();
    if (type === "preset") {
      const arr = QMovement$1.presets[arr[1]];
      if (!arr) {
        alert(
          "ERROR: Tried to use a collider preset that doesn't exist: ",
          type
        );
        return null;
      }
      type = arr[0].toLowerCase();
    }
    const w = arr[1] || 0;
    const h = arr[2] || 0;
    const ox = arr[3] || 0;
    const oy = arr[4] || 0;
    let collider;
    if (type === "circle" || type === "box") {
      if (type === "circle") {
        collider = new Circle_Collider(w, h, ox, oy);
      } else {
        collider = new Box_Collider(w, h, ox, oy);
      }
    } else if (type === "poly") {
      collider = new Polygon_Collider(arr.slice(1));
    } else {
      return null;
    }
    return collider;
  }

  static rayCast(origin, angle, dist, filter) {
    // Incomplete
    // need to finish the Polygon_Collider.prototype.lineIntersection function
    const ray = new Box_Collider(dist, 1, 0, 0, {
      pivot: new Point(0, 0.5),
      position: origin,
    });
    //this.draw(ray, 600);
    return this.getAllNear(ray, filter);
  }
}
window.ColliderManager = ColliderManager;
const Alias_Game_Character_processMoveCommand =
  Game_Character.prototype.processMoveCommand;
Game_Character.prototype.processMoveCommand = function (command) {
  this.subMVMoveCommands(command);
  if (this.subQMoveCommand(command)) {
    command = this._moveRoute.list[this._moveRouteIndex];
  }
  this.processQMoveCommands(command);
  Alias_Game_Character_processMoveCommand.call(this, command);
};

Game_Character.prototype.subMVMoveCommands = function (command) {
  const gc = Game_Character;
  const params = command.parameters;
  switch (command.code) {
    case gc.ROUTE_MOVE_DOWN: {
      this.subQMove("2, 1," + QMovement$1.tileSize);
      break;
    }
    case gc.ROUTE_MOVE_LEFT: {
      this.subQMove("4, 1," + QMovement$1.tileSize);
      break;
    }
    case gc.ROUTE_MOVE_RIGHT: {
      this.subQMove("6, 1," + QMovement$1.tileSize);
      break;
    }
    case gc.ROUTE_MOVE_UP: {
      this.subQMove("8, 1," + QMovement$1.tileSize);
      break;
    }
    case gc.ROUTE_MOVE_LOWER_L: {
      this.subQMove("1, 1," + QMovement$1.tileSize);
      break;
    }
    case gc.ROUTE_MOVE_LOWER_R: {
      this.subQMove("3, 1," + QMovement$1.tileSize);
      break;
    }
    case gc.ROUTE_MOVE_UPPER_L: {
      this.subQMove("7, 1," + QMovement$1.tileSize);
      break;
    }
    case gc.ROUTE_MOVE_UPPER_R: {
      this.subQMove("9, 1," + QMovement$1.tileSize);
      break;
    }
    case gc.ROUTE_MOVE_FORWARD: {
      this.subQMove("5, 1," + QMovement$1.tileSize);
      break;
    }
    case gc.ROUTE_MOVE_BACKWARD: {
      this.subQMove("0, 1," + QMovement$1.tileSize);
      break;
    }
    case gc.ROUTE_TURN_DOWN:
    case gc.ROUTE_TURN_LEFT:
    case gc.ROUTE_TURN_RIGHT:
    case gc.ROUTE_TURN_UP:
    case gc.ROUTE_TURN_90D_R:
    case gc.ROUTE_TURN_90D_L:
    case gc.ROUTE_TURN_180D:
    case gc.ROUTE_TURN_90D_R_L:
    case gc.ROUTE_TURN_RANDOM:
    case gc.ROUTE_TURN_TOWARD:
    case gc.ROUTE_TURN_AWAY: {
      this._freqCount = this.freqThreshold();
      break;
    }
  }
};

Game_Character.prototype.subQMoveCommand = function (command) {
  const gc = Game_Character;
  const code = command.code;
  const params = command.parameters;
  if (command.code === gc.ROUTE_SCRIPT) {
    const qmove = /^qmove\((.*)\)/i.exec(params[0]);
    const qmove2 = /^qmove2\((.*)\)/i.exec(params[0]);
    const arc = /^arc\((.*)\)/i.exec(params[0]);
    const arc2 = /^arc2\((.*)\)/i.exec(params[0]);
    if (qmove) return this.subQMove(qmove[1]);
    if (qmove2) return this.subQMove2(qmove2[1]);
    if (arc) return this.subArc(arc[1]);
    if (arc2) return this.subArc2(arc2[1]);
  }
  return false;
};

Game_Character.prototype.processQMoveCommands = function (command) {
  const params = command.parameters;
  switch (command.code) {
    case "arc": {
      this.arc(params[0], params[1], eval(params[2]), params[3], params[4]);
      break;
    }
    case "arc2": {
      const x = params[0] + this.px;
      const y = params[1] + this.py;
      this.arc(x, y, eval(params[2]), params[3], params[4]);
      break;
    }
    case "fixedRadianMove": {
      this.fixedRadianMove(params[0], params[1]);
      break;
    }
    case "fixedMove": {
      this.fixedMove(params[0], params[1]);
      break;
    }
    case "fixedMoveBackward": {
      this.fixedMoveBackward(params[0]);
      break;
    }
    case "fixedMoveForward": {
      this.fixedMove(this.direction(), params[0]);
      break;
    }
  }
};

Game_Character.prototype.subArc = function (settings) {
  const cmd = {};
  cmd.code = "arc";
  cmd.parameters = QPlus.stringToAry(settings);
  this._moveRoute.list[this._moveRouteIndex] = cmd;
  return true;
};

Game_Character.prototype.subArc2 = function (settings) {
  const cmd = {};
  cmd.code = "arc2";
  cmd.parameters = QPlus.stringToAry(settings);
  this._moveRoute.list[this._moveRouteIndex] = cmd;
  return true;
};

Game_Character.prototype.subQMove = function (settings) {
  settings = QPlus.stringToAry(settings);
  const dir = settings[0];
  const amt = settings[1];
  const multi = settings[2] || 1;
  const tot = amt * multi;
  const steps = Math.floor(tot / this.moveTiles());
  let moved = 0;
  let i;
  for (i = 0; i < steps; i++) {
    moved += this.moveTiles();
    const cmd = {};
    if (dir === 0) {
      cmd.code = "fixedMoveBackward";
      cmd.parameters = [this.moveTiles()];
    } else if (dir === 5) {
      cmd.code = "fixedMoveForward";
      cmd.parameters = [this.moveTiles()];
    } else {
      cmd.code = "fixedMove";
      cmd.parameters = [dir, this.moveTiles()];
    }
    this._moveRoute.list.splice(this._moveRouteIndex + 1, 0, cmd);
  }
  if (moved < tot) {
    const cmd = {};
    if (dir === 0) {
      cmd.code = "fixedMoveBackward";
      cmd.parameters = [this.moveTiles()];
    } else if (dir === 5) {
      cmd.code = "fixedMoveForward";
      cmd.parameters = [this.moveTiles()];
    } else {
      cmd.code = "fixedMove";
      cmd.parameters = [dir, this.moveTiles()];
    }
    this._moveRoute.list.splice(this._moveRouteIndex + 1 + i, 0, cmd);
  }
  this._moveRoute.list.splice(this._moveRouteIndex, 1);
  return true;
};

Game_Character.prototype.subQMove2 = function (settings) {
  settings = QPlus.stringToAry(settings);
  const radian = settings[0];
  const dist = settings[1];
  const maxSteps = Math.floor(dist / this.moveTiles());
  let steps = 0;
  let i;
  for (i = 0; i < maxSteps; i++) {
    steps += this.moveTiles();
    const cmd = {};
    cmd.code = "fixedRadianMove";
    cmd.parameters = [radian, this.moveTiles()];
    this._moveRoute.list.splice(this._moveRouteIndex + 1, 0, cmd);
  }
  if (steps < dist) {
    const cmd = {};
    cmd.code = "fixedRadianMove";
    cmd.parameters = [radian, dist - steps];
    this._moveRoute.list.splice(this._moveRouteIndex + 1 + i, 0, cmd);
  }
  this._moveRoute.list.splice(this._moveRouteIndex, 1);
  return true;
};

Game_Character.prototype.moveRandom = function () {
  const d = 2 + Math.randomInt(4) * 2;
  if (this.canPixelPass(this._px, this._py, d)) {
    this.moveStraight(d);
  }
};

const Alias_Game_Character_moveTowardCharacter =
  Game_Character.prototype.moveTowardCharacter;
Game_Character.prototype.moveTowardCharacter = function (character) {
  if ($gameMap.offGrid()) {
    const dx = this.deltaPXFrom(character.cx());
    const dy = this.deltaPYFrom(character.cy());
    let radian = Math.atan2(-dy, -dx);
    if (radian < 0) radian += Math.PI * 2;
    const oldSM = this._smartMove;
    if (oldSM <= 1) this._smartMove = 2;
    this.moveRadian(radian);
    this._smartMove = oldSM;
  } else {
    Alias_Game_Character_moveTowardCharacter.call(this, character);
  }
};

const Alias_Game_Character_moveAwayFromCharacter =
  Game_Character.prototype.moveAwayFromCharacter;
Game_Character.prototype.moveAwayFromCharacter = function (character) {
  if ($gameMap.offGrid()) {
    const dx = this.deltaPXFrom(character.cx());
    const dy = this.deltaPYFrom(character.cy());
    let radian = Math.atan2(dy, dx);
    if (radian < 0) radian += Math.PI * 2;
    const oldSM = this._smartMove;
    if (oldSM <= 1) this._smartMove = 2;
    this.moveRadian(radian);
    this._smartMove = oldSM;
  } else {
    Alias_Game_Character_moveAwayFromCharacter.call(this, character);
  }
};

Game_Character.prototype.turnTowardCharacter = function (character) {
  const dx = this.deltaPXFrom(character.cx());
  const dy = this.deltaPYFrom(character.cy());
  this.setRadian(Math.atan2(-dy, -dx));
};

Game_Character.prototype.turnTowardCharacterForward = function (character, dt) {
  if (!character.isMoving()) {
    return this.turnTowardCharacter(character);
  }
  dt = dt || 1;
  const forward = character.forwardV();
  const x = character.cx() + forward.x * dt;
  const y = character.cy() + forward.y * dt;
  const dx = this.deltaPXFrom(x);
  const dy = this.deltaPYFrom(y);
  this.setRadian(Math.atan2(-dy, -dx));
};

Game_Character.prototype.turnAwayFromCharacter = function (character) {
  const dx = this.deltaPXFrom(character.cx());
  const dy = this.deltaPYFrom(character.cy());
  this.setRadian(Math.atan2(dy, dx));
};

Game_Character.prototype.deltaPXFrom = function (x) {
  return $gameMap.deltaPX(this.cx(), x);
};

Game_Character.prototype.deltaPYFrom = function (y) {
  return $gameMap.deltaPY(this.cy(), y);
};

Game_Character.prototype.pixelDistanceFrom = function (x, y) {
  return $gameMap.distance(this.cx(), this.cy(), x, y);
};

// Returns the px, py needed for this character to be center aligned
// with the character passed in (align is based off collision collider)
Game_Character.prototype.centerWith = function (character) {
  const dx1 = this.cx() - this._px;
  const dy1 = this.cy() - this._py;
  const dx2 = character.cx() - character._px;
  const dy2 = character.cy() - character._py;
  const dx = dx2 - dx1;
  const dy = dy2 - dy1;
  return new Point(character._px + dx, character._py + dy);
};

Game_Character.prototype.centerWithCollider = function (collider) {
  const dx1 = this.cx() - this._px;
  const dy1 = this.cy() - this._py;
  const dx2 = collider.center.x - collider.x;
  const dy2 = collider.center.y - collider.y;
  const dx = dx2 - dx1;
  const dy = dy2 - dy1;
  return new Point(collider.x + dx, collider.y + dy);
};

Game_Character.prototype.adjustPosition = function (xf, yf) {
  let dx = xf - this._px;
  let dy = yf - this._py;
  const radian = Math.atan2(dy, dx);
  const distX = Math.cos(radian) * this.moveTiles();
  const distY = Math.sin(radian) * this.moveTiles();
  const final = new Point(xf, yf);
  while (!this.canPixelPass(final.x, final.y, 5, "collision")) {
    final.x -= distX;
    final.y -= distY;
    dx = final.x - this._px;
    dy = final.y - this._py;
    if (Math.atan2(dy, dx) !== radian) {
      final.x = this._px;
      final.y = this._py;
      break;
    }
  }
  this.moveColliders(this._px, this._py);
  return final;
};

Object.defineProperties(Game_CharacterBase.prototype, {
  px: {
    get: function () {
      return this._px;
    },
    configurable: true,
  },
  py: {
    get: function () {
      return this._py;
    },
    configurable: true,
  },
});

const Alias_Game_CharacterBase_initMembers =
  Game_CharacterBase.prototype.initMembers;
Game_CharacterBase.prototype.initMembers = function () {
  Alias_Game_CharacterBase_initMembers.call(this);
  this._px = 0;
  this._py = 0;
  this._realPX = 0;
  this._realPY = 0;
  this._radian = this.directionToRadian(this._direction);
  this._forwardRadian = this.directionToRadian(this._direction);
  this._adjustFrameSpeed = false;
  this._freqCount = 0;
  this._diagonal = false;
  this._currentRad = 0;
  this._targetRad = 0;
  this._pivotX = 0;
  this._pivotY = 0;
  this._radiusL = 0;
  this._radisuH = 0;
  this._angularSpeed;
  this._passabilityLevel = 0; // TODO
  this._isMoving = false;
  this._smartMove = 0;
  this._colliders = null;
  this._overrideColliders = {};
};

Game_CharacterBase.prototype.direction8 = function (horz, vert) {
  if (horz === 4 && vert === 8) return 7;
  if (horz === 4 && vert === 2) return 1;
  if (horz === 6 && vert === 8) return 9;
  if (horz === 6 && vert === 2) return 3;
  return 5;
};

Game_CharacterBase.prototype.isMoving = function () {
  return this._isMoving;
};

Game_CharacterBase.prototype.startedMoving = function () {
  return this._realPX !== this._px || this._realPY !== this._py;
};

Game_CharacterBase.prototype.isDiagonal = function () {
  return this._diagonal;
};

Game_CharacterBase.prototype.isArcing = function () {
  return this._currentRad !== this._targetRad;
};

Game_CharacterBase.prototype.setPixelPosition = function (x, y) {
  this.setPosition(x / QMovement$1.tileSize, y / QMovement$1.tileSize);
};

const Alias_Game_CharacterBase_setPosition =
  Game_CharacterBase.prototype.setPosition;
Game_CharacterBase.prototype.setPosition = function (x, y) {
  Alias_Game_CharacterBase_setPosition.call(this, x, y);
  this._px = this._realPX = x * QMovement$1.tileSize;
  this._py = this._realPY = y * QMovement$1.tileSize;
  if (!this._colliders) this.collider();
  this.moveColliders();
};

const Alias_Game_CharacterBase_copyPosition =
  Game_CharacterBase.prototype.copyPosition;
Game_CharacterBase.prototype.copyPosition = function (character) {
  Alias_Game_CharacterBase_copyPosition.call(this, character);
  this._px = character._px;
  this._py = character._py;
  this._realPX = character._realPX;
  this._realPY = character._realPY;
  if (!this._colliders) this.collider();
  this.moveColliders();
};

const Alias_Game_CharacterBase_setDirection =
  Game_CharacterBase.prototype.setDirection;
Game_CharacterBase.prototype.setDirection = function (d) {
  if (d) this._radian = this.directionToRadian(d);
  if (!this.isDirectionFixed() && d) {
    if ([1, 3, 7, 9].contains(d)) {
      this._diagonal = d;
      const horz = [1, 7].contains(d) ? 4 : 6;
      const vert = [1, 3].contains(d) ? 2 : 8;
      if (this._direction === this.reverseDir(horz)) {
        this._direction = horz;
      }
      if (this._direction === this.reverseDir(vert)) {
        this._direction = vert;
      }
      this.resetStopCount();
      return;
    } else {
      this._diagonal = false;
    }
  }
  Alias_Game_CharacterBase_setDirection.call(this, d);
};

Game_CharacterBase.prototype.setRadian = function (radian) {
  radian = QPlus.adjustRadian(radian);
  this.setDirection(this.radianToDirection(radian, QMovement$1.diagonal));
  this._radian = radian;
};

Game_CharacterBase.prototype.moveTiles = function () {
  if ($gameMap.gridSize() < this.frameSpeed()) {
    return $gameMap.offGrid() ? this.frameSpeed() : $gameMap.gridSize();
  }
  return $gameMap.gridSize();
};

Game_CharacterBase.prototype.frameSpeed = function (multi) {
  multi = multi === undefined ? 1 : Math.abs(multi);
  return this.distancePerFrame() * QMovement$1.tileSize * multi;
};

Game_CharacterBase.prototype.angularSpeed = function () {
  return this._angularSpeed || this.frameSpeed() / this._radiusL;
};

Game_CharacterBase.prototype.forwardV = function () {
  return {
    x: Math.cos(this._forwardRadian) * this.frameSpeed(),
    y: Math.sin(this._forwardRadian) * this.frameSpeed(),
  };
};

const Alias_Game_CharacterBase_canMove = Game_CharacterBase.prototype.canMove;
Game_CharacterBase.prototype.canMove = function () {
  if (this._locked) return false;
  return Alias_Game_CharacterBase_canMove.call(this);
};

Game_CharacterBase.prototype.canPass = function (x, y, dir) {
  return this.canPixelPass(x * QMovement$1.tileSize, y * QMovement$1.tileSize, dir);
};

Game_CharacterBase.prototype.canPixelPass = function (x, y, dir, dist, type) {
  dist = dist || this.moveTiles();
  type = type || "collision";
  const x1 = $gameMap.roundPXWithDirection(x, dir, dist);
  const y1 = $gameMap.roundPYWithDirection(y, dir, dist);
  if (!this.collisionCheck(x1, y1, dir, dist, type)) {
    this.collider(type).moveTo(this._px, this._py);
    return false;
  }
  if (type[0] !== "_") {
    this.moveColliders(x1, y1);
  }
  return true;
};

Game_CharacterBase.prototype.canPassDiagonally = function (x, y, horz, vert) {
  return this.canPixelPassDiagonally(
    x * QMovement$1.tileSize,
    y * QMovement$1.tileSize,
    horz,
    vert
  );
};

Game_CharacterBase.prototype.canPixelPassDiagonally = function (
  x,
  y,
  horz,
  vert,
  dist,
  type
) {
  dist = dist || this.moveTiles();
  type = type || "collision";
  const x1 = $gameMap.roundPXWithDirection(x, horz, dist);
  const y1 = $gameMap.roundPYWithDirection(y, vert, dist);
  if (dist === this.moveTiles()) {
    if (!this.canPixelPass(x1, y1, 5, null, type)) return false;
    if ($gameMap.midPass()) {
      const x2 = $gameMap.roundPXWithDirection(x, horz, dist / 2);
      const y2 = $gameMap.roundPYWithDirection(y, vert, dist / 2);
      if (!this.canPixelPass(x2, y2, 5, null, type)) return false;
    }
  } else {
    return (
      this.canPixelPass(x, y, vert, dist, type) &&
      this.canPixelPass(x, y1, horz, dist, type) &&
      this.canPixelPass(x, y, horz, dist, type) &&
      this.canPixelPass(x1, y, vert, dist, type)
    );
  }
  return true;
};

Game_CharacterBase.prototype.collisionCheck = function (x, y, dir, dist, type) {
  this.collider(type).moveTo(x, y);
  if (!this.valid(type)) return false;
  if (this.isThrough() || this.isDebugThrough()) return true;
  if ($gameMap.midPass() && dir !== 5) {
    if (!this.middlePass(x, y, dir, dist, type)) return false;
  }
  if (this.collidesWithAnyTile(type)) return false;
  if (this.collidesWithAnyCharacter(type)) return false;
  return true;
};

Game_CharacterBase.prototype.middlePass = function (x, y, dir, dist, type) {
  dist = dist / 2 || this.moveTiles() / 2;
  const x2 = $gameMap.roundPXWithDirection(x, this.reverseDir(dir), dist);
  const y2 = $gameMap.roundPYWithDirection(y, this.reverseDir(dir), dist);
  this.collider(type).moveTo(x2, y2);
  if (this.collidesWithAnyTile(type)) return false;
  if (this.collidesWithAnyCharacter(type)) return false;
  this.collider(type).moveTo(x, y);
  return true;
};

Game_CharacterBase.prototype.collidesWithAnyTile = function (type) {
  const collider = this.collider(type);
  let collided = false;
  ColliderManager.getCollidersNear(
    collider,
    function (collider) {
      collided = this.collidedWithTile(type, collider);
      if (collided) return "break";
    }.bind(this)
  );
  return collided;
};

Game_CharacterBase.prototype.collidedWithTile = function (type, collider) {
  if (collider.color && this.passableColors().contains(collider.color)) {
    return false;
  }
  if (
    collider.type &&
    (collider.type !== "collision" || collider.type !== "default")
  ) {
    return false;
  }
  return collider.intersects(this.collider(type));
};

Game_CharacterBase.prototype.collidesWithAnyCharacter = function (type) {
  const collider = this.collider(type);
  let collided = false;
  ColliderManager.getCharactersNear(
    collider,
    function (chara) {
      collided = this.collidedWithCharacter(type, chara);
      if (collided) return "break";
    }.bind(this)
  );
  return collided;
};

Game_CharacterBase.prototype.collidedWithCharacter = function (type, chara) {
  if (chara.isThrough() || chara === this || !chara.isNormalPriority()) {
    return false;
  }
  if (this.ignoreCharacters(type).contains(chara.charaId())) {
    return false;
  }
  return chara.collider("collision").intersects(this.collider(type));
};

Game_CharacterBase.prototype.ignoreCharacters = function (type) {
  // This function is to be aliased by plugins to return a list
  // of charaId's this character can pass through
  return [];
};

Game_CharacterBase.prototype.valid = function (type) {
  const edge = this.collider(type).gridEdge();
  const maxW = $gameMap.width();
  const maxH = $gameMap.height();
  if (!$gameMap.isLoopHorizontal()) {
    if (edge.x1 < 0 || edge.x2 >= maxW) return false;
  }
  if (!$gameMap.isLoopVertical()) {
    if (edge.y1 < 0 || edge.y2 >= maxH) return false;
  }
  return true;
};

Game_CharacterBase.prototype.passableColors = function () {
  // #00000000 is a transparent return value in collisionmap addon
  const colors = ["#ffffff", "#00000000"];
  switch (this._passabilityLevel) {
    case 1:
    case 3: {
      colors.push(QMovement$1.water1);
      break;
    }
    case 2:
    case 4: {
      colors.push(QMovement$1.water1);
      colors.push(QMovement$1.water2);
      break;
    }
  }
  return colors;
};

Game_CharacterBase.prototype.canPassToFrom = function (xf, yf, xi, yi, type) {
  xi = xi === undefined ? this._px : xi;
  yi = yi === undefined ? this._py : yi;
  type = type || "collision";
  // TODO remove this check by having the start and end colliders
  // be included in the _stretched collider
  if (
    !this.canPixelPass(xi, yi, 5, null, type) ||
    !this.canPixelPass(xf, yf, 5, null, type)
  ) {
    this.collider(type).moveTo(this._px, this._py);
    return false;
  }
  const dx = xf - xi;
  const dy = yf - yi;
  let radian = Math.atan2(dy, dx);
  if (radian < 0) radian += Math.PI * 2;
  const dist = Math.sqrt(dx * dx + dy * dy);
  this._colliders["_stretched"] = this.collider(type).stretchedPoly(
    radian,
    dist
  );
  if (!this.canPixelPass(xi, yi, 5, null, "_stretched")) {
    delete this._colliders["_stretched"];
    return false;
  }
  delete this._colliders["_stretched"];
  return true;
};

Game_CharacterBase.prototype.checkEventTriggerTouchFront = function (d) {
  let vert;
  let horz = (vert = d);
  if ([1, 3, 7, 9].contains(d)) {
    horz = d === 1 || d === 7 ? 4 : 6;
    vert = d === 1 || d === 3 ? 2 : 8;
  }
  const x2 = $gameMap.roundPXWithDirection(this.px, horz, this.moveTiles());
  const y2 = $gameMap.roundPYWithDirection(this.py, vert, this.moveTiles());
  this.checkEventTriggerTouch(x2, y2);
};

Game_CharacterBase.prototype.isOnLadder = function () {
  if (!this.collider()) return false;
  const collider = this.collider("collision");
  let collided = false;
  const colliders = ColliderManager.getCollidersNear(collider, function (tile) {
    if (!tile.isTile) return false;
    if (tile.isLadder && tile.intersects(collider)) {
      collided = true;
      return "break";
    }
    return false;
  });
  return collided;
};

Game_CharacterBase.prototype.isOnBush = function () {
  if (!this.collider()) return false;
  const collider = this.collider("collision");
  let collided = false;
  const colliders = ColliderManager.getCollidersNear(collider, function (tile) {
    if (!tile.isTile) return false;
    if (tile.isBush && tile.intersects(collider)) {
      collided = true;
      return "break";
    }
    return false;
  });
  return collided;
};

Game_CharacterBase.prototype.freqThreshold = function () {
  return QMovement$1.tileSize;
};

Game_CharacterBase.prototype.terrainTag = function () {
  return $gameMap.terrainTag(
    Math.floor(this.cx(true)),
    Math.floor(this.cy(true))
  );
};

Game_CharacterBase.prototype.regionId = function () {
  return $gameMap.regionId(
    Math.floor(this.cx(true)),
    Math.floor(this.cy(true))
  );
};

const Alias_Game_CharacterBase_update = Game_CharacterBase.prototype.update;
Game_CharacterBase.prototype.update = function () {
  const prevX = this._realPX;
  const prevY = this._realPY;
  if (this.startedMoving()) {
    this._isMoving = true;
  } else {
    this.updateStop();
  }
  if (this.isArcing()) {
    this.updateArc();
  } else if (this.isJumping()) {
    this.updateJump();
  } else if (this.isMoving()) {
    this.updateMove();
  }
  this.updateAnimation();
  this.updateColliders();
  if (prevX !== this._realPX || prevY !== this._realPY) {
    this.onPositionChange();
  } else {
    this._isMoving = false;
  }
};

Game_CharacterBase.prototype.updateMove = function () {
  let xSpeed = 1;
  let ySpeed = 1;
  if (this._adjustFrameSpeed) {
    xSpeed = Math.cos(this._radian);
    ySpeed = Math.sin(this._radian);
  }
  if (this._px < this._realPX) {
    this._realPX = Math.max(this._realPX - this.frameSpeed(xSpeed), this._px);
  }
  if (this._px > this._realPX) {
    this._realPX = Math.min(this._realPX + this.frameSpeed(xSpeed), this._px);
  }
  if (this._py < this._realPY) {
    this._realPY = Math.max(this._realPY - this.frameSpeed(ySpeed), this._py);
  }
  if (this._py > this._realPY) {
    this._realPY = Math.min(this._realPY + this.frameSpeed(ySpeed), this._py);
  }
  this._x = this._realX = this._realPX / QMovement$1.tileSize;
  this._y = this._realY = this._realPY / QMovement$1.tileSize;
  this._freqCount += this.frameSpeed();
};

Game_CharacterBase.prototype.updateArc = function () {
  let newRad = 0;
  if (this._currentRad < this._targetRad) {
    newRad = Math.min(this._currentRad + this.angularSpeed(), this._targetRad);
  }
  if (this._currentRad > this._targetRad) {
    newRad = Math.max(this._currentRad - this.angularSpeed(), this._targetRad);
  }
  const x1 = this._pivotX + this._radiusL * Math.cos(newRad);
  const y1 = this._pivotY + this._radiusH * Math.sin(newRad);
  this._currentRad = newRad;
  this._px = this._realPX = x1;
  this._py = this._realPY = y1;
  this._x = this._realX = this._realPX / QMovement$1.tileSize;
  this._y = this._realY = this._realPY / QMovement$1.tileSize;
  this.moveColliders(x1, y1);
  this.checkEventTriggerTouchFront(this._direction);
};

const Alias_Game_CharacterBase_updateJump =
  Game_CharacterBase.prototype.updateJump;
Game_CharacterBase.prototype.updateJump = function () {
  Alias_Game_CharacterBase_updateJump.call(this);
  this._px = this._realPX = this._x * QMovement$1.tileSize;
  this._py = this._realPY = this._y * QMovement$1.tileSize;
  this.moveColliders(this._px, this._py);
};

Game_CharacterBase.prototype.updateColliders = function () {
  const colliders = this._colliders;
  if (!colliders) return;
  let hidden = false;
  hidden = this.isTransparent() || this._erased;
  if (!hidden && this.isVisible) {
    hidden = !this.isVisible();
  }
  for (const type in colliders) {
    if (colliders.hasOwnProperty(type)) {
      colliders[type]._isHidden = !!hidden;
    }
  }
};

Game_CharacterBase.prototype.onPositionChange = function () {
  this.refreshBushDepth();
};

Game_CharacterBase.prototype.refreshBushDepth = function () {
  if (
    this.isNormalPriority() &&
    !this.isObjectCharacter() &&
    this.isOnBush() &&
    !this.isJumping()
  ) {
    if (!this.startedMoving()) this._bushDepth = 12;
  } else {
    this._bushDepth = 0;
  }
};

Game_CharacterBase.prototype.pixelJump = function (xPlus, yPlus) {
  return this.jump(xPlus / QMovement$1.tileSize, yPlus / QMovement$1.tileSize);
};

Game_CharacterBase.prototype.pixelJumpForward = function (dist, dir) {
  dir = dir || this._direction;
  dist = dist / QMovement$1.tileSize;
  const x = dir === 6 ? dist : dir === 4 ? -dist : 0;
  const y = dir === 2 ? dist : dir === 8 ? -dist : 0;
  this.jump(x, y);
};

Game_CharacterBase.prototype.pixelJumpBackward = function (dist) {
  this.pixelJumpFixed(this.reverseDir(this.direction()), dist);
};

Game_CharacterBase.prototype.pixelJumpFixed = function (dir, dist) {
  const lastDirectionFix = this.isDirectionFixed();
  this.setDirectionFix(true);
  this.pixelJumpForward(dist, dir);
  this.setDirectionFix(lastDirectionFix);
};

Game_CharacterBase.prototype.moveStraight = function (dir, dist) {
  dist = dist || this.moveTiles();
  this.setMovementSuccess(this.canPixelPass(this._px, this._py, dir, dist));
  const originalSpeed = this._moveSpeed;
  if (this.smartMove() === 1 || this.smartMove() > 2) {
    this.smartMoveSpeed(dir);
  }
  this.setDirection(dir);
  if (this.isMovementSucceeded()) {
    this._forwardRadian = this.directionToRadian(dir);
    this._diagonal = false;
    this._adjustFrameSpeed = false;
    this._px = $gameMap.roundPXWithDirection(this._px, dir, dist);
    this._py = $gameMap.roundPYWithDirection(this._py, dir, dist);
    this._realPX = $gameMap.pxWithDirection(
      this._px,
      this.reverseDir(dir),
      dist
    );
    this._realPY = $gameMap.pyWithDirection(
      this._py,
      this.reverseDir(dir),
      dist
    );
    this.increaseSteps();
  } else {
    this.checkEventTriggerTouchFront(dir);
  }
  this._moveSpeed = originalSpeed;
  if (!this.isMovementSucceeded() && this.smartMove() > 1) {
    this.smartMoveDir8(dir);
  }
};

Game_CharacterBase.prototype.moveDiagonally = function (horz, vert, dist) {
  dist = dist || this.moveTiles();
  this.setMovementSuccess(
    this.canPixelPassDiagonally(this._px, this._py, horz, vert, dist)
  );
  const originalSpeed = this._moveSpeed;
  if (this.smartMove() === 1 || this.smartMove() > 2) {
    this.smartMoveSpeed([horz, vert]);
  }
  this.setDirection(this.direction8(horz, vert));
  if (this.isMovementSucceeded()) {
    this._forwardRadian = this.directionToRadian(this.direction8(horz, vert));
    this._adjustFrameSpeed = false;
    this._px = $gameMap.roundPXWithDirection(this._px, horz, dist);
    this._py = $gameMap.roundPYWithDirection(this._py, vert, dist);
    this._realPX = $gameMap.pxWithDirection(
      this._px,
      this.reverseDir(horz),
      dist
    );
    this._realPY = $gameMap.pyWithDirection(
      this._py,
      this.reverseDir(vert),
      dist
    );
    this.increaseSteps();
  } else {
    this.checkEventTriggerTouchFront(this.direction8(horz, vert));
  }
  this._moveSpeed = originalSpeed;
  if (!this.isMovementSucceeded() && this.smartMove() > 1) {
    if (this.canPixelPass(this._px, this._py, horz)) {
      this.moveStraight(horz);
    } else if (this.canPixelPass(this._px, this._py, vert)) {
      this.moveStraight(vert);
    }
  }
};

Game_CharacterBase.prototype.moveRadian = function (radian, dist) {
  dist = dist || this.moveTiles();
  this.fixedRadianMove(radian, dist);
  if (!this.isMovementSucceeded() && this.smartMove() > 1) {
    const realDir = this.radianToDirection(radian, true);
    const xAxis = Math.cos(radian);
    const yAxis = Math.sin(radian);
    const horz = xAxis > 0 ? 6 : xAxis < 0 ? 4 : 0;
    const vert = yAxis > 0 ? 2 : yAxis < 0 ? 8 : 0;
    if ([1, 3, 7, 9].contains(realDir)) {
      if (this.canPixelPass(this._px, this._py, horz, dist)) {
        this.moveStraight(horz, dist);
      } else if (this.canPixelPass(this._px, this._py, vert, dist)) {
        this.moveStraight(vert, dist);
      }
    } else {
      const dir = this.radianToDirection(radian);
      this.smartMoveDir8(dir);
    }
  }
};

Game_CharacterBase.prototype.fixedMove = function (dir, dist) {
  dist = dist || this.moveTiles();
  dir = dir === 5 ? this.direction() : dir;
  if ([1, 3, 7, 9].contains(dir)) {
    const horz = dir === 1 || dir === 7 ? 4 : 6;
    const vert = dir === 1 || dir === 3 ? 2 : 8;
    return this.fixedDiagMove(horz, vert, dist);
  }
  this.setMovementSuccess(this.canPixelPass(this._px, this._py, dir, dist));
  this.setDirection(dir);
  if (this.isMovementSucceeded()) {
    this._forwardRadian = this.directionToRadian(dir);
    this._adjustFrameSpeed = false;
    this._px = $gameMap.roundPXWithDirection(this._px, dir, dist);
    this._py = $gameMap.roundPYWithDirection(this._py, dir, dist);
    this._realPX = $gameMap.pxWithDirection(
      this._px,
      this.reverseDir(dir),
      dist
    );
    this._realPY = $gameMap.pyWithDirection(
      this._py,
      this.reverseDir(dir),
      dist
    );
    this.increaseSteps();
  } else {
    this.checkEventTriggerTouchFront(dir);
  }
};

Game_CharacterBase.prototype.fixedDiagMove = function (horz, vert, dist) {
  dist = dist || this.moveTiles();
  this.setMovementSuccess(
    this.canPixelPassDiagonally(this._px, this._py, horz, vert)
  );
  this.setDirection(this.direction8(horz, vert));
  if (this.isMovementSucceeded()) {
    this._forwardRadian = this.directionToRadian(this.direction8(horz, vert));
    this._adjustFrameSpeed = false;
    this._px = $gameMap.roundPXWithDirection(this._px, horz, dist);
    this._py = $gameMap.roundPYWithDirection(this._py, vert, dist);
    this._realPX = $gameMap.pxWithDirection(
      this._px,
      this.reverseDir(horz),
      dist
    );
    this._realPY = $gameMap.pyWithDirection(
      this._py,
      this.reverseDir(vert),
      dist
    );
    this.increaseSteps();
  } else {
    this.checkEventTriggerTouchFront(this.direction8(horz, vert));
  }
};

Game_CharacterBase.prototype.fixedRadianMove = function (radian, dist) {
  dist = dist || this.moveTiles();
  const dir = this.radianToDirection(radian, true);
  const xAxis = Math.cos(radian);
  const yAxis = Math.sin(radian);
  const horzSteps = Math.abs(xAxis) * dist;
  const vertSteps = Math.abs(yAxis) * dist;
  const horz = xAxis > 0 ? 6 : xAxis < 0 ? 4 : 0;
  const vert = yAxis > 0 ? 2 : yAxis < 0 ? 8 : 0;
  const x2 = $gameMap.roundPXWithDirection(this._px, horz, horzSteps);
  const y2 = $gameMap.roundPYWithDirection(this._py, vert, vertSteps);
  this.setMovementSuccess(this.canPassToFrom(x2, y2, this._px, this._py));
  this.setRadian(radian);
  if (this.isMovementSucceeded()) {
    this._forwardRadian = QPlus.adjustRadian(radian);
    this._adjustFrameSpeed = true;
    this._px = x2;
    this._py = y2;
    this._realPX = $gameMap.pxWithDirection(
      this._px,
      this.reverseDir(horz),
      horzSteps
    );
    this._realPY = $gameMap.pyWithDirection(
      this._py,
      this.reverseDir(vert),
      vertSteps
    );
    this.increaseSteps();
  } else {
    this.checkEventTriggerTouchFront(dir);
  }
};

Game_CharacterBase.prototype.fixedMoveBackward = function (dist) {
  const lastDirectionFix = this.isDirectionFixed();
  this.setDirectionFix(true);
  this.fixedMove(this.reverseDir(this.direction()), dist);
  this.setDirectionFix(lastDirectionFix);
};

Game_CharacterBase.prototype.arc = function (
  pivotX,
  pivotY,
  radians,
  cc,
  frames
) {
  cc = cc ? 1 : -1;
  const dx = this._px - pivotX;
  const dy = this._py - pivotY;
  let rad = Math.atan2(dy, dx);
  frames = frames || 1;
  rad += rad < 0 ? 2 * Math.PI : 0;
  this._currentRad = rad;
  this._targetRad = rad + radians * cc;
  this._pivotX = pivotX;
  this._pivotY = pivotY;
  this._radiusL = this._radiusH = Math.sqrt(dy * dy + dx * dx);
  this._angularSpeed = radians / frames;
};

Game_CharacterBase.prototype.smartMove = function () {
  return this._smartMove;
};

Game_CharacterBase.prototype.smartMoveDir8 = function (dir) {
  const dist = this.moveTiles();
  const collider = this.collider("collision");
  const x1 = this._px;
  const y1 = this._py;
  let x2 = $gameMap.roundPXWithDirection(x1, dir, dist);
  let y2 = $gameMap.roundPYWithDirection(y1, dir, dist);
  collider.moveTo(x2, y2);
  let collided = false;
  ColliderManager.getCharactersNear(
    collider,
    function (chara) {
      if (
        chara.isThrough() ||
        chara === this ||
        !chara.isNormalPriority() ||
        /<smartdir>/i.test(chara.notes())
      ) {
        return false;
      }
      if (chara.collider("collision").intersects(collider)) {
        collided = true;
        return "break";
      }
      return false;
    }.bind(this)
  );
  collider.moveTo(x1, y1);
  if (collided) return;
  const horz = [4, 6].contains(dir) ? true : false;
  let steps = horz ? collider.height : collider.width;
  steps /= 2;
  let pass = false;
  for (let i = 0; i < 2; i++) {
    const sign = i === 0 ? 1 : -1;
    let j = 0;
    x2 = x1;
    y2 = y1;
    if (horz) {
      x2 = $gameMap.roundPXWithDirection(x1, dir, dist);
    } else {
      y2 = $gameMap.roundPYWithDirection(y1, dir, dist);
    }
    while (j < steps) {
      j += dist;
      if (horz) {
        y2 = y1 + j * sign;
      } else {
        x2 = x1 + j * sign;
      }
      pass = this.canPixelPass(x2, y2, 5);
      if (pass) break;
    }
    if (pass) break;
  }
  if (!pass) return;
  const radian = QPlus.adjustRadian(Math.atan2(y2 - y1, x2 - x1));
  this._forwardRadian = radian;
  this._px = x2;
  this._py = y2;
  this._realPX = x1;
  this._realPY = y1;
  this._adjustFrameSpeed = false;
  this.setRadian(radian);
  this.increaseSteps();
};

Game_CharacterBase.prototype.smartMoveSpeed = function (dir) {
  const diag = dir.constructor === Array;
  while (!this.isMovementSucceeded()) {
    // should improve by figuring out what 1 pixel is in terms of movespeed
    // and subtract by that value instead
    this._moveSpeed--;
    if (diag) {
      this.setMovementSuccess(
        this.canPixelPassDiagonally(this._px, this._py, dir[0], dir[1])
      );
    } else {
      this.setMovementSuccess(this.canPixelPass(this._px, this._py, dir));
    }
    if (this._moveSpeed < 1) break;
  }
};

Game_CharacterBase.prototype.reloadColliders = function () {
  this.removeColliders();
  this.setupColliders();
};

Game_CharacterBase.prototype.removeColliders = function () {
  ColliderManager.remove(this);
  for (const collider in this._colliders) {
    if (!this._colliders.hasOwnProperty(collider)) continue;
    ColliderManager.remove(this._colliders[collider]);
    this._colliders[collider] = null;
  }
  this._colliders = null;
};

// Can pass multiple types into args, ect:
// collider('collision', 'interaction', 'default')
// will return first one thats found
Game_CharacterBase.prototype.collider = function (type, alternative) {
  if (!this._colliders) this.setupColliders();
  for (let i = 0; i < arguments.length; i++) {
    if (this._colliders[arguments[i]]) {
      return this._colliders[arguments[i]];
    }
  }
  return this._colliders["default"];
};

Game_CharacterBase.prototype.defaultColliderConfig = function () {
  return "box,0,0";
};

Game_CharacterBase.prototype.setupColliders = function () {
  this._colliders = {};
  const defaultCollider = this.defaultColliderConfig();
  const notes = this.notes(true);
  let configs = {};
  const multi = /<colliders>([\s\S]*)<\/colliders>/i.exec(notes);
  const single = /<collider[:|=](.*?)>/i.exec(notes);
  if (multi) {
    configs = QPlus.stringToObj(multi[1]);
  }
  if (single) {
    configs.default = QPlus.stringToAry(single[1]);
  } else if (!configs.default) {
    configs.default = QPlus.stringToAry(defaultCollider);
  }
  Object.assign(configs, this._overrideColliders);
  for (const collider in configs) {
    this.makeCollider(collider, configs[collider]);
  }
  this.makeBounds();
  this.moveColliders();
};

Game_CharacterBase.prototype.makeCollider = function (type, settings) {
  this._colliders[type] = ColliderManager.convertToCollider(settings);
  this._colliders[type].oy -= this.shiftY();
  this._colliders[type]._charaId = this.charaId();
  ColliderManager.addCollider(this._colliders[type], -1, true);
};

Game_CharacterBase.prototype.changeCollider = function (type, settings) {
  this._overrideColliders[type] = settings;
  this.reloadColliders();
};

Game_CharacterBase.prototype.makeBounds = function () {
  let minX = null;
  let maxX = null;
  let minY = null;
  let maxY = null;
  for (const type in this._colliders) {
    if (!this._colliders.hasOwnProperty(type)) continue;
    const edge = this._colliders[type].edge();
    if (minX === null || minX > edge.x1) {
      minX = edge.x1;
    }
    if (maxX === null || maxX < edge.x2) {
      maxX = edge.x2;
    }
    if (minY === null || minY > edge.y1) {
      minY = edge.y1;
    }
    if (maxY === null || maxY < edge.y2) {
      maxY = edge.y2;
    }
  }
  const w = maxX - minX + 1;
  const h = maxY - minY + 1;
  this._colliders["bounds"] = new Box_Collider(w, h, minX, minY);
  this._colliders["bounds"]._charaId = String(this.charaId());
  ColliderManager.addCharacter(this, 0);
};

Game_CharacterBase.prototype.moveColliders = function (x, y) {
  x = typeof x === "number" ? x : this.px;
  y = typeof y === "number" ? y : this.py;
  const prev = this._colliders["bounds"].sectorEdge();
  for (const collider in this._colliders) {
    if (this._colliders.hasOwnProperty(collider)) {
      console.log(this._colliders[collider]);
      this._colliders[collider].moveTo(x, y);
    }
  }
  ColliderManager.updateGrid(this, prev);
};

Game_CharacterBase.prototype.cx = function (grid) {
  let x = this.collider("collision").center.x;
  if (grid) x /= QMovement$1.tileSize;
  return x;
};

Game_CharacterBase.prototype.cy = function (grid) {
  let y = this.collider("collision").center.y;
  if (grid) y /= QMovement$1.tileSize;
  return y;
};

const Alias_Game_Event_clearPageSettings =
  Game_Event.prototype.clearPageSettings;
Game_Event.prototype.clearPageSettings = function () {
  Alias_Game_Event_clearPageSettings.call(this);
  this._ignoreCharacters = [];
};

const Alias_Game_Event_setupPageSettings =
  Game_Event.prototype.setupPageSettings;
Game_Event.prototype.setupPageSettings = function () {
  Alias_Game_Event_setupPageSettings.call(this);
  this.reloadColliders();
  this.initialPosition();
  this._typeRandomDir = null;
  this._typeTowardPlayer = null;
  const notes = this.notes(true);
  const ignore = /<ignoreCharas:(.*?)>/i.exec(notes);
  this._ignoreCharacters = [];
  if (ignore) {
    this._ignoreCharacters = ignore[1].split(",").map(function (s) {
      return QPlus.charaIdToId(s);
    });
  }
};

Game_Event.prototype.initialPosition = function () {
  let ox = /<ox[=|:](-?[0-9]+)>/i.exec(this.comments(true)) || 0;
  let oy = /<oy[=|:](-?[0-9]+)>/i.exec(this.comments(true)) || 0;
  if (ox) ox = Number(ox[1]) || 0;
  if (oy) oy = Number(oy[1]) || 0;
  const nextOffset = new Point(ox, oy);
  if (this._initialOffset) {
    ox -= this._initialOffset.x;
    oy -= this._initialOffset.y;
  }
  this._initialOffset = nextOffset;
  this.setPixelPosition(this.px + ox, this.py + oy);
};

Game_Event.prototype.defaultColliderConfig = function () {
  return QMovement$1.eventCollider;
};

Game_Event.prototype.ignoreCharacters = function (type) {
  const ignores = Game_CharacterBase.prototype.ignoreCharacters.call(
    this,
    type
  );
  return ignores.concat(this._ignoreCharacters);
};

Game_Event.prototype.updateStop = function () {
  if (this._locked) {
    this._freqCount = this.freqThreshold();
    this.resetStopCount();
  }
  Game_Character.prototype.updateStop.call(this);
  if (!this.isMoveRouteForcing()) {
    this.updateSelfMovement();
  }
};

Game_Event.prototype.updateSelfMovement = function () {
  if (!this._locked && this.isNearTheScreen()) {
    if (this._freqCount < this.freqThreshold()) {
      switch (this._moveType) {
        case 1:
          this.moveTypeRandom();
          break;
        case 2:
          this.moveTypeTowardPlayer();
          break;
        case 3:
          this.moveTypeCustom();
          break;
      }
    } else if (this.checkStop(this.stopCountThreshold())) {
      this._freqCount = 0;
    }
  }
};

// TODO stop random dir from reseting every frame if event can't move
Game_Event.prototype.moveTypeRandom = function () {
  if (this._freqCount === 0 || this._typeRandomDir === null) {
    this._typeRandomDir = 2 * (Math.randomInt(4) + 1);
  }
  if (!this.canPixelPass(this._px, this._py, this._typeRandomDir)) {
    this._typeRandomDir = 2 * (Math.randomInt(4) + 1);
  }
  this.moveStraight(this._typeRandomDir);
};

Game_Event.prototype.moveTypeTowardPlayer = function () {
  if (this.isNearThePlayer()) {
    if (this._freqCount === 0 || this._typeTowardPlayer === null) {
      this._typeTowardPlayer = Math.randomInt(6);
    }
    switch (this._typeTowardPlayer) {
      case 0:
      case 1:
      case 2:
      case 3: {
        this.moveTowardPlayer();
        break;
      }
      case 4: {
        this.moveTypeRandom();
        break;
      }
      case 5: {
        this.moveForward();
        break;
      }
    }
  } else {
    this.moveTypeRandom();
  }
};

Game_Event.prototype.checkEventTriggerTouch = function (x, y) {
  if (!$gameMap.isEventRunning()) {
    if (this._trigger === 2 && !this.isJumping() && this.isNormalPriority()) {
      const collider = this.collider("collision");
      const prevX = collider.x;
      const prevY = collider.y;
      collider.moveTo(x, y);
      let collided = false;
      ColliderManager.getCharactersNear(
        collider,
        function (chara) {
          if (chara.constructor !== Game_Player) return false;
          collided = chara.collider("collision").intersects(collider);
          return "break";
        }.bind(this)
      );
      collider.moveTo(prevX, prevY);
      if (collided) {
        this._stopCount = 0;
        this._freqCount = this.freqThreshold();
        this.start();
      }
    }
  }
};

const Alias_Game_Interpreter_pluginCommand =
  Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function (command, args) {
  if (command.toLowerCase() === "qmovement") {
    return this.qMovementCommand(QPlus.makeArgs(args));
  }
  Alias_Game_Interpreter_pluginCommand.call(this, command, args);
};

Game_Interpreter.prototype.qMovementCommand = function (args) {
  const cmd = args.shift().toLowerCase();
  if (cmd === "changecollider") {
    const chara = QPlus.getCharacter(args[0]);
    if (!chara) return;
    const type = args[1];
    const data = args.slice(2).map(QPlus.stringToType);
    chara.changeCollider(type, data);
    return;
  }
  if (cmd === "transfer") {
    const mapId = Number(args[0]);
    const x = Number(args[1]) / QMovement$1.tileSize;
    const y = Number(args[2]) / QMovement$1.tileSize;
    const dir = Number(QPlus.getArg(args, /^dir(\d+)$/i)) || 0;
    let fade = QPlus.getArg(args, /fade(black|white)/i) || "none";
    if (fade.toLowerCase() === "black") {
      fade = 0;
    } else if (fade.toLowerCase() === "white") {
      fade = 1;
    } else {
      fade = 3;
    }
    $gamePlayer.reserveTransfer(mapId, x, y, dir, fade);
    return;
  }
  if (cmd === "setpos") {
    let chara;
    if (args[0].toLowerCase() === "this") {
      chara = this.character(0);
    } else {
      chara = QPlus.getCharacter(args[0]);
    }
    if (!chara) return;
    const x = Number(args[1]) / QMovement$1.tileSize;
    const y = Number(args[2]) / QMovement$1.tileSize;
    const dir = Number(QPlus.getArg(args, /^dir(\d+)$/i)) || 0;
    chara.locate(x, y);
    if (dir > 0) {
      chara.setDirection(dir);
    }
    return;
  }
};

const Alias_Game_Map_setup = Game_Map.prototype.setup;
Game_Map.prototype.setup = function (mapId) {
  if ($dataMap) {
    ColliderManager._mapWidth = this.width();
    ColliderManager._mapHeight = this.height();
    ColliderManager.refresh();
  }
  Alias_Game_Map_setup.call(this, mapId);
  this.reloadColliders();
};

Game_Map.prototype.tileWidth = function () {
  return QMovement$1.tileSize;
};

Game_Map.prototype.tileHeight = function () {
  return QMovement$1.tileSize;
};

Game_Map.prototype.flagAt = function (x, y) {
  x = x || $gamePlayer.x;
  y = y || $gamePlayer.y;
  const flags = this.tilesetFlags();
  const tiles = this.allTiles(x, y);
  for (let i = 0; i < tiles.length; i++) {
    const flag = flags[tiles[i]];
    console.log("layer", i, ":", flag);
    if (flag & 0x20) console.log("layer", i, "is ladder");
    if (flag & 0x40) console.log("layer", i, "is bush");
    if (flag & 0x80) console.log("layer", i, "is counter");
    if (flag & 0x100) console.log("layer", i, "is damage");
  }
};

Game_Map.prototype.gridSize = function () {
  if ($dataMap && $dataMap.meta.grid !== undefined) {
    return Number($dataMap.meta.grid) || QMovement$1.grid;
  }
  return QMovement$1.grid;
};

Game_Map.prototype.offGrid = function () {
  if ($dataMap && $dataMap.meta.offGrid !== undefined) {
    return $dataMap.meta.offGrid === "true";
  }
  return QMovement$1.offGrid;
};

Game_Map.prototype.midPass = function () {
  if ($dataMap && $dataMap.meta.midPass !== undefined) {
    return $dataMap.meta.midPass === "true";
  }
  return QMovement$1.midPass;
};

const Alias_Game_Map_refreshIfNeeded = Game_Map.prototype.refreshIfNeeded;
Game_Map.prototype.refreshIfNeeded = function () {
  Alias_Game_Map_refreshIfNeeded.call(this);
  if (ColliderManager._needsRefresh) {
    ColliderManager._mapWidth = this.width();
    ColliderManager._mapHeight = this.height();
    ColliderManager.refresh();
    this.reloadColliders();
  }
};

Game_Map.prototype.reloadColliders = function () {
  this.reloadTileMap();
  const events = this.events();
  let i, j;
  for (i = 0, j = events.length; i < j; i++) {
    events[i].reloadColliders();
  }
  const vehicles = this._vehicles;
  for (i = 0, j = vehicles.length; i < j; i++) {
    vehicles[i].reloadColliders();
  }
  $gamePlayer.reloadColliders();
  const followers = $gamePlayer.followers()._data;
  for (i = 0, j = followers.length; i < j; i++) {
    followers[i].reloadColliders();
  }
};

Game_Map.prototype.clearColliders = function () {
  const events = this.events();
  let i, j;
  for (i = 0, j = events.length; i < j; i++) {
    events[i].removeColliders();
  }
  const vehicles = this._vehicles;
  for (i = 0, j = vehicles.length; i < j; i++) {
    vehicles[i].removeColliders();
  }
  $gamePlayer.removeColliders();
  const followers = $gamePlayer.followers()._data;
  for (i = 0, j = followers.length; i < j; i++) {
    followers[i].removeColliders();
  }
};

Game_Map.prototype.reloadTileMap = function () {
  this.setupMapColliders();
  // collider map is also loaded here
  // collision map is also loaded here
};

Game_Map.prototype.setupMapColliders = function () {
  this._tileCounter = 0;
  for (let x = 0; x < this.width(); x++) {
    for (let y = 0; y < this.height(); y++) {
      const flags = this.tilesetFlags();
      const tiles = this.allTiles(x, y);
      const id = x + y * this.width();
      for (let i = tiles.length - 1; i >= 0; i--) {
        const flag = flags[tiles[i]];
        if (flag === 16) continue;
        const data = this.getMapCollider(x, y, flag);
        if (!data) continue;
        if (data[0].constructor === Array) {
          for (let j = 0; j < data.length; j++) {
            this.makeTileCollider(x, y, flag, data[j], j);
          }
        } else {
          this.makeTileCollider(x, y, flag, data, 0);
        }
      }
    }
  }
};

Game_Map.prototype.getMapCollider = function (x, y, flag) {
  if (flag >> 12 > 0) {
    flag = flag.toString(2);
    flag = flag.slice(flag.length - 12, flag.length);
    flag = parseInt(flag, 2);
  }
  let boxData;
  if (QMovement$1.regionColliders[this.regionId(x, y)]) {
    const regionData = QMovement$1.regionColliders[this.regionId(x, y)];
    boxData = [];
    for (let i = 0; i < regionData.length; i++) {
      boxData[i] = [
        regionData[i].width || 0,
        regionData[i].height || 0,
        regionData[i].ox || 0,
        regionData[i].oy || 0,
        regionData[i].tag || regionData[i].note || "",
        regionData[i].type || "box",
      ];
    }
    flag = 0;
  } else {
    boxData = QMovement$1.tileBoxes[flag];
  }
  if (!boxData) {
    if (flag & 0x20 || flag & 0x40 || flag & 0x80 || flag & 0x100) {
      boxData = [this.tileWidth(), this.tileHeight(), 0, 0];
    } else {
      return null;
    }
  }
  return boxData;
};

Game_Map.prototype.makeTileCollider = function (x, y, flag, boxData, index) {
  // boxData is array [width, height, ox, oy, note, type]
  const x1 = x * this.tileWidth();
  const y1 = y * this.tileHeight();
  const ox = boxData[2] || 0;
  const oy = boxData[3] || 0;
  const w = boxData[0];
  const h = boxData[1];
  if (w === 0 || h === 0) return;
  const type = boxData[5] || "box";
  let newBox;
  if (type === "circle") {
    newBox = new Circle_Collider(w, h, ox, oy);
  } else if (type === "box") {
    newBox = new Box_Collider(w, h, ox, oy);
  } else {
    return;
  }
  newBox.isTile = true;
  newBox.note = boxData[4] || "";
  newBox.flag = flag;
  newBox.terrain = flag >> 12;
  newBox.regionId = this.regionId(x, y);
  newBox.isWater1 =
    flag >> 12 === QMovement$1.water1Tag || /<water1>/i.test(newBox.note);
  newBox.isWater2 =
    flag >> 12 === QMovement$1.water2Tag || /<water2>/i.test(newBox.note);
  newBox.isLadder = flag & 0x20 || /<ladder>/i.test(newBox.note);
  newBox.isBush = flag & 0x40 || /<bush>/i.test(newBox.note);
  newBox.isCounter = flag & 0x80 || /<counter>/i.test(newBox.note);
  newBox.isDamage = flag & 0x100 || /<damage>/i.test(newBox.note);
  newBox.moveTo(x1, y1);
  const vx = x * this.height() * this.width();
  const vy = y * this.height();
  const vz = index;
  newBox.location = vx + vy + vz;
  if (newBox.isWater2) {
    newBox.color = QMovement$1.water2.toLowerCase();
  } else if (newBox.isWater1) {
    newBox.color = QMovement$1.water1.toLowerCase();
  } else if (newBox.isLadder || newBox.isBush || newBox.isDamage) {
    newBox.color = "#ffffff";
  } else {
    newBox.color = QMovement$1.collision.toLowerCase();
  }
  ColliderManager.addCollider(newBox, -1);
  return newBox;
};

Game_Map.prototype.adjustPX = function (x) {
  return this.adjustX(x / QMovement$1.tileSize) * QMovement$1.tileSize;
};

Game_Map.prototype.adjustPY = function (y) {
  return this.adjustY(y / QMovement$1.tileSize) * QMovement$1.tileSize;
};

Game_Map.prototype.roundPX = function (x) {
  return this.isLoopHorizontal() ? x.mod(this.width() * QMovement$1.tileSize) : x;
};

Game_Map.prototype.roundPY = function (y) {
  return this.isLoopVertical() ? y.mod(this.height() * QMovement$1.tileSize) : y;
};

Game_Map.prototype.pxWithDirection = function (x, d, dist) {
  return x + (d === 6 ? dist : d === 4 ? -dist : 0);
};

Game_Map.prototype.pyWithDirection = function (y, d, dist) {
  return y + (d === 2 ? dist : d === 8 ? -dist : 0);
};

Game_Map.prototype.roundPXWithDirection = function (x, d, dist) {
  return this.roundPX(x + (d === 6 ? dist : d === 4 ? -dist : 0));
};

Game_Map.prototype.roundPYWithDirection = function (y, d, dist) {
  return this.roundPY(y + (d === 2 ? dist : d === 8 ? -dist : 0));
};

Game_Map.prototype.deltaPX = function (x1, x2) {
  let result = x1 - x2;
  if (
    this.isLoopHorizontal() &&
    Math.abs(result) > (this.width() * QMovement$1.tileSize) / 2
  ) {
    if (result < 0) {
      result += this.width() * QMovement$1.tileSize;
    } else {
      result -= this.width() * QMovement$1.tileSize;
    }
  }
  return result;
};

Game_Map.prototype.deltaPY = function (y1, y2) {
  let result = y1 - y2;
  if (
    this.isLoopVertical() &&
    Math.abs(result) > (this.height() * QMovement$1.tileSize) / 2
  ) {
    if (result < 0) {
      result += this.height() * QMovement$1.tileSize;
    } else {
      result -= this.height() * QMovement$1.tileSize;
    }
  }
  return result;
};

Game_Map.prototype.canvasToMapPX = function (x) {
  const tileWidth = this.tileWidth();
  const originX = this.displayX() * tileWidth;
  return this.roundPX(originX + x);
};

Game_Map.prototype.canvasToMapPY = function (y) {
  const tileHeight = this.tileHeight();
  const originY = this.displayY() * tileHeight;
  return this.roundPY(originY + y);
};

Game_Party.prototype.steps = function () {
  return Math.floor(this._steps);
};

Game_Party.prototype.increaseSteps = function () {
  this._steps += $gamePlayer.moveTiles() / QMovement$1.tileSize;
};

const Alias_Game_Player_initMembers = Game_Player.prototype.initMembers;
Game_Player.prototype.initMembers = function () {
  Alias_Game_Player_initMembers.call(this);
  this._lastMouseRequested = 0;
  this._requestMouseMove = false;
  this._movingWithMouse = false;
  this._smartMove = QMovement.smartMove;
};

Game_Player.prototype.defaultColliderConfig = function () {
  return QMovement.playerCollider;
};

const Alias_Game_Player_refresh = Game_Player.prototype.refresh;
Game_Player.prototype.refresh = function () {
  this.reloadColliders();
  Alias_Game_Player_refresh.call(this);
};

Game_Player.prototype.requestMouseMove = function () {
  const currFrame = Graphics.frameCount;
  const dt = currFrame - this._lastMouseRequested;
  if (dt >= 5) {
    this._lastMouseRequested = currFrame;
    this._requestMouseMove = true;
  } else {
    this._requestMouseMove = false;
  }
};

Game_Player.prototype.moveByMouse = function (x, y) {
  if (this.triggerTouchAction()) {
    this.clearMouseMove();
    return false;
  }
  this._movingWithMouse = true;
  return true;
};

Game_Player.prototype.clearMouseMove = function () {
  this._requestMouseMove = false;
  this._movingWithMouse = false;
  $gameTemp.clearDestination();
};

Game_Player.prototype.moveByInput = function () {
  if (!this.startedMoving() && this.canMove()) {
    if (this.triggerAction()) return;
    const direction = QMovement.diagonal ? Input.dir8 : Input.dir4;
    if (direction > 0) {
      this.clearMouseMove();
    } else if ($gameTemp.isDestinationValid()) {
      if (!QMovement.moveOnClick) {
        $gameTemp.clearDestination();
        return;
      }
      this.requestMouseMove();
      if (this._requestMouseMove) {
        const x = $gameTemp.destinationPX();
        const y = $gameTemp.destinationPY();
        return this.moveByMouse(x, y);
      }
    }
    if (
      typeof QInput !== "undefined" &&
      Input.preferGamepad() &&
      $gameMap.offGrid()
    ) {
      this.moveWithAnalog();
    } else {
      if ([4, 6].contains(direction)) {
        this.moveInputHorizontal(direction);
      } else if ([2, 8].contains(direction)) {
        this.moveInputVertical(direction);
      } else if ([1, 3, 7, 9].contains(direction) && QMovement.diagonal) {
        this.moveInputDiagonal(direction);
      }
    }
  }
};

Game_Player.prototype.moveInputHorizontal = function (dir) {
  this.moveStraight(dir);
};

Game_Player.prototype.moveInputVertical = function (dir) {
  this.moveStraight(dir);
};

Game_Player.prototype.moveInputDiagonal = function (dir) {
  const diag = {
    1: [4, 2],
    3: [6, 2],
    7: [4, 8],
    9: [6, 8],
  };
  this.moveDiagonally(diag[dir][0], diag[dir][1]);
};

Game_Player.prototype.moveWithAnalog = function () {
  const horz = Input._dirAxesA.x;
  const vert = Input._dirAxesA.y;
  if (horz === 0 && vert === 0) return;
  let radian = Math.atan2(vert, horz);
  radian += radian < 0 ? Math.PI * 2 : 0;
  this.moveRadian(radian);
};

Game_Player.prototype.update = function (sceneActive) {
  const lastScrolledX = this.scrolledX();
  const lastScrolledY = this.scrolledY();
  const wasMoving = this.isMoving();
  this.updateDashing();
  if (sceneActive) {
    this.moveByInput();
  }
  Game_Character.prototype.update.call(this);
  this.updateScroll(lastScrolledX, lastScrolledY);
  this.updateVehicle();
  if (!this.startedMoving()) this.updateNonmoving(wasMoving);
  this._followers.update();
};

Game_Player.prototype.updateNonmoving = function (wasMoving) {
  if (!$gameMap.isEventRunning()) {
    if (wasMoving) {
      if (this._freqCount >= this.freqThreshold()) {
        $gameParty.onPlayerWalk();
      }
      this.checkEventTriggerHere([1, 2]);
      if ($gameMap.setupStartingEvent()) return;
    }
    if (this.triggerAction()) return;
    if (wasMoving) {
      if (this._freqCount >= this.freqThreshold()) {
        this.updateEncounterCount();
        this._freqCount = 0;
      }
    } else if (!this.isMoving() && !this._movingWithMouse) {
      $gameTemp.clearDestination();
    }
  }
};

Game_Player.prototype.updateDashing = function () {
  if (this.startedMoving()) return;
  if (this.canMove() && !this.isInVehicle() && !$gameMap.isDashDisabled()) {
    this._dashing =
      this.isDashButtonPressed() || $gameTemp.isDestinationValid();
  } else {
    this._dashing = false;
  }
};

Game_Player.prototype.startMapEvent = function (x, y, triggers, normal) {
  if (!$gameMap.isEventRunning()) {
    var collider = this.collider("interaction");
    var x1 = this._px;
    var y1 = this._py;
    collider.moveTo(x, y);
    var events = ColliderManager.getCharactersNear(
      collider,
      function (chara) {
        return this.collidesWithEvent(chara, "interaction");
      }.bind(this)
    );
    console.log(events);
    collider.moveTo(x1, y1);
    if (events.length === 0) {
      //console.log("SHOULDBERETURNING")
      events = null;
      return;
    }
    const cx = this.cx();
    const cy = this.cy();
    events.sort(function (a, b) {
      return a.pixelDistanceFrom(cx, cy) - b.pixelDistanceFrom(cx, cy);
    });
    let event = events.shift();
    console.log(event);
    while (true && event.isTriggerIn != undefined) {
      if (event.isTriggerIn(triggers) && event.isNormalPriority() === normal) {
        event.start();
      }
      if (events.length === 0 || $gameMap.isAnyEventStarting()) {
        break;
      }
      event = events.shift();
    }
    events = null;
  }
};

Game_Player.prototype.collidesWithEvent = function (event, type) {
  if (event.constructor === Game_Event && !event._erased) {
    return event.collider("interaction").intersects(this.collider(type));
  }
  return false;
};

Game_Player.prototype.checkEventTriggerHere = function (triggers) {
  if (this.canStartLocalEvents()) {
    this.startMapEvent(
      this.collider("interaction").x,
      this.collider("interaction").y,
      triggers,
      false
    );
  }
};

Game_Player.prototype.checkEventTriggerThere = function (triggers, x2, y2) {
  if (this.canStartLocalEvents()) {
    const direction = this.direction();
    const x1 = this.collider("interaction").x;
    const y1 = this.collider("interaction").y;
    x2 = x2 || $gameMap.roundPXWithDirection(x1, direction, this.moveTiles());
    y2 = y2 || $gameMap.roundPYWithDirection(y1, direction, this.moveTiles());
    this.startMapEvent(x2, y2, triggers, true);
    if (!$gameMap.isAnyEventStarting()) {
      return this.checkCounter(triggers);
    }
  }
};

Game_Player.prototype.triggerTouchAction = function () {
  if ($gameTemp.isDestinationValid()) {
    const dist = this.pixelDistanceFrom(
      $gameTemp.destinationPX(),
      $gameTemp.destinationPY()
    );
    if (dist <= QMovement.tileSize * 1.5) {
      const dx = $gameTemp.destinationPX() - this.cx();
      const dy = $gameTemp.destinationPY() - this.cy();
      if (
        Math.abs(dx) < this.moveTiles() / 2 &&
        Math.abs(dy) < this.moveTiles() / 2
      ) {
        return false;
      }
      let radian = Math.atan2(dy, dx);
      radian += radian < 0 ? 2 * Math.PI : 0;
      const dir = this.radianToDirection(radian, true);
      let horz = dir;
      let vert = dir;
      if ([1, 3, 7, 9].contains(dir)) {
        if (dir === 1 || dir === 7) horz = 4;
        if (dir === 1 || dir === 3) vert = 2;
        if (dir === 3 || dir === 9) horz = 6;
        if (dir === 7 || dir === 9) vert = 8;
      }
      const x1 = $gameMap.roundPXWithDirection(
        this._px,
        horz,
        this.moveTiles()
      );
      const y1 = $gameMap.roundPYWithDirection(
        this._py,
        vert,
        this.moveTiles()
      );
      this.startMapEvent(x1, y1, [0, 1, 2], true);
      if (!$gameMap.isAnyEventStarting()) {
        if (
          this.checkCounter(
            [0, 1, 2],
            $gameTemp.destinationPX(),
            $gameTemp.destinationPY()
          )
        ) {
          this.clearMouseMove();
          this.setDirection(dir);
          return true;
        }
      } else {
        this.clearMouseMove();
        this.setDirection(dir);
        return true;
      }
    }
  }
  return false;
};

Game_Player.prototype.checkCounter = function (triggers, x2, y2) {
  const direction = this.direction();
  const x1 = this._px;
  const y1 = this._py;
  x2 = x2 || $gameMap.roundPXWithDirection(x1, direction, this.moveTiles());
  y2 = y2 || $gameMap.roundPYWithDirection(y1, direction, this.moveTiles());
  const collider = this.collider("interaction");
  collider.moveTo(x2, y2);
  let counter;
  ColliderManager.getCollidersNear(collider, function (tile) {
    if (!tile.isTile) return false;
    if (tile.isCounter && tile.intersects(collider)) {
      counter = tile;
      return "break";
    }
    return false;
  });
  collider.moveTo(x1, y1);
  if (counter) {
    if ([4, 6].contains(direction)) {
      let dist = Math.abs(counter.center.x - collider.center.x);
      dist += collider.width;
    } else if ([8, 2].contains(direction)) {
      let dist = Math.abs(counter.center.y - collider.center.y);
      dist += collider.height;
    }
    const x3 = $gameMap.roundPXWithDirection(x1, direction, dist);
    const y3 = $gameMap.roundPYWithDirection(y1, direction, dist);
    return this.startMapEvent(x3, y3, triggers, true);
  }
  return false;
};

Game_Player.prototype.airshipHere = function () {
  // TODO
  return false;
};

Game_Player.prototype.shipBoatThere = function (x2, y2) {
  // TODO
  return false;
};

// TODO create follower support addon
Game_Player.prototype.moveStraight = function (d, dist) {
  Game_Character.prototype.moveStraight.call(this, d, dist);
};

Game_Player.prototype.moveDiagonally = function (horz, vert) {
  Game_Character.prototype.moveDiagonally.call(this, horz, vert);
};

const Alias_Game_System_onBeforeSave = Game_System.prototype.onBeforeSave;
Game_System.prototype.onBeforeSave = function () {
  Alias_Game_System_onBeforeSave.call(this);
  $gameMap.clearColliders();
  ColliderManager._needsRefresh = true;
};

const Alias_Game_System_onAfterLoad = Game_System.prototype.onAfterLoad;
Game_System.prototype.onAfterLoad = function () {
  Alias_Game_System_onAfterLoad.call(this);
  ColliderManager._needsRefresh = true;
};

const Alias_Game_Temp_initialize = Game_Temp.prototype.initialize;
Game_Temp.prototype.initialize = function () {
  Alias_Game_Temp_initialize.call(this);
  this._destinationPX = null;
  this._destinationPY = null;
};

Game_Temp.prototype.setPixelDestination = function (x, y) {
  this._destinationPX = x;
  this._destinationPY = y;
  const x1 = $gameMap.roundX(Math.floor(x / $gameMap.tileWidth()));
  const y1 = $gameMap.roundY(Math.floor(y / $gameMap.tileHeight()));
  this.setDestination(x1, y1);
};

const Alias_Game_Temp_clearDestination = Game_Temp.prototype.clearDestination;
Game_Temp.prototype.clearDestination = function () {
  if ($gamePlayer._movingWithMouse) return;
  Alias_Game_Temp_clearDestination.call(this);
  this._destinationPX = null;
  this._destinationPY = null;
};

Game_Temp.prototype.destinationPX = function () {
  return this._destinationPX;
};

Game_Temp.prototype.destinationPY = function () {
  return this._destinationPY;
};

Input.keyMapper[121] = "f10";

const Alias_Scene_Map_updateMain = Scene_Map.prototype.updateMain;
Scene_Map.prototype.updateMain = function () {
  Alias_Scene_Map_updateMain.call(this);
  const key = typeof QInput !== "undefined" ? "#f10" : "f10";
  if ($gameTemp.isPlaytest() && Input.isTriggered(key)) {
    ColliderManager.toggle();
  }
  ColliderManager.update();
};

const Alias_Scene_Map_terminate = Scene_Map.prototype.terminate;
Scene_Map.prototype.terminate = function () {
  this._spriteset.removeChild(ColliderManager.container);
  Alias_Scene_Map_terminate.call(this);
};

Scene_Map.prototype.processMapTouch = function () {
  if (TouchInput.isTriggered() || this._touchCount > 0) {
    if (TouchInput.isPressed()) {
      if (this._touchCount === 0 || this._touchCount >= 20) {
        let x = $gameMap.canvasToMapPX(TouchInput.x);
        let y = $gameMap.canvasToMapPY(TouchInput.y);
        if (!$gameMap.offGrid()) {
          const ox = x % QMovement$1.tileSize;
          const oy = y % QMovement$1.tileSize;
          x += QMovement$1.tileSize / 2 - ox;
          y += QMovement$1.tileSize / 2 - oy;
        }
        $gameTemp.setPixelDestination(x, y);
      }
      this._touchCount++;
    } else {
      this._touchCount = 0;
    }
  }
};

Scene_Map.prototype.updateCallMenu = function () {
  if (this.isMenuEnabled()) {
    if (this.isMenuCalled()) {
      this.menuCalling = true;
    }
    if (this.menuCalling && !$gamePlayer.startedMoving()) {
      this.callMenu();
    }
  } else {
    this.menuCalling = false;
  }
};

Sprite_Destination.prototype.updatePosition = function () {
  const tileWidth = $gameMap.tileWidth();
  const tileHeight = $gameMap.tileHeight();
  const x = $gameTemp.destinationPX();
  const y = $gameTemp.destinationPY();
  this.x = $gameMap.adjustPX(x);
  this.y = $gameMap.adjustPY(y);
};

const Alias_Spriteset_Map_createLowerLayer =
  Spriteset_Map.prototype.createLowerLayer;
Spriteset_Map.prototype.createLowerLayer = function () {
  Alias_Spriteset_Map_createLowerLayer.call(this);
  if (
    $gameTemp.isPlaytest() &&
    !this.children.some((c) => c === ColliderManager.container)
  ) {
    this.createColliders();
  }
};

Spriteset_Map.prototype.createColliders = function () {
  this.addChild(ColliderManager.container);
  // also get collision map here
};

if (typeof QPlus === "undefined") {
  alert("Error: QMovement requires QPlus 1.6.0 or newer to work.");
  throw new Error("Error: QMovement requires QPlus 1.6.0 or newer to work.");
}

var main = {
  ColliderManager,
  Polygon_Collider,
  Box_Collider,
  Circle_Collider,
  Sprite_Collider,
  ...QMovement$1,
};

ColliderManager.setup();

if (Utils.RPGMAKER_NAME === "MZ") {
  PluginManager.registerCommand("Luna_QMovement", "transfer", (args) => {
    let { dir = 0, fade = "black" } = args;
    const mapId = Number(args.mapId);
    const x = Number(args.x) / QMovement$1.tileSize;
    const y = Number(args.y) / QMovement$1.tileSize;
    dir = QPlus.stringToType(dir);
    if (fade) {
      if (fade.toLowerCase() === "black") {
        fade = 0;
      } else if (args.fade.toLowerCase() === "white") {
        fade = 1;
      } else {
        fade = 3;
      }
    }
    $gamePlayer.reserveTransfer(mapId, x, y, dir, fade);
    return;
  });

  PluginManager.registerCommand("Luna_QMovement", "setPosition", (args) => {
    let { dir = 0 } = args;
    let chara = null;
    if (args.charId.toLowerCase() === "this") {
      chara = undefined.character(0);
    } else {
      chara = QPlus.getCharacter(args.charId);
    }
    if (!chara) return;
    const x = Number(args.x) / QMovement$1.tileSize;
    const y = Number(args.y) / QMovement$1.tileSize;
    dir = Number(args.dir);
    chara.locate(x, y);
    if (dir > 0) {
      chara.setDirection(dir);
    }
  });

  PluginManager.registerCommand("Luna_QMovement", "changeCollider", (args) => {
    if (args.charId === `"0"`) {
      args.charId = 0;
    }
    const chara = QPlus.getCharacter(args.charId);
    if (!chara) return;
    const type = args.type;
    chara.changeCollider(type, [
      args.shape,
      Number(args.width),
      Number(args.height),
      Number(args.ox),
      Number(args.oy),
    ]);
  });
}

return main;

}());
