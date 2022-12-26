## animOffsets
* **Description =** Map for animations offsets: animation:String => offsets:Array<Dynamic>
* **Type =** [Map<String, Array<Dynamic>>](https://api.haxeflixel.com/Map.html)

## debugMode
* **Description =** Used to block dance animations
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## isPlayer
* **Description =** Is character on bf side?
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## curCharacter
* **Description =** Character name
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** DEFAULT_CHARACTER

## colorTween
* **Description =** Not used tween, disables when substate is opened
* **Type =** [FlxTween](https://api.haxeflixel.com/flixel/tweens/FlxTween.html)

## holdTimer
* **Description =** Timer for sing animation, uses singDuration variable. Uses when character on opponent side
* **Type =** [Float](https://api.haxeflixel.com/Float.html)
* **Default value =** 0

## heyTimer
* **Description =** Timer for hey animation, uses playbackRate variable.
* **Type =** [Float](https://api.haxeflixel.com/Float.html)
* **Default value =** 0

## specialAnim
* **Description =** If true, current animation will not be overlapped by idle animation
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## animationNotes
* **Description =** Uses for pico-speaker character
* **Type =** [Array<Dynamic>](https://api.haxeflixel.com/Array.html)
* **Default value =** []

## stunned
* **Description =** If true, stops bf idle animation, key presses will not work, and when you press a key when there was no notes to press for this key notes will not be count as miss (like in ghost tapping)
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## singDuration
* **Description =** Multiplier of how long a character holds the sing pose
* **Type =** [Float](https://api.haxeflixel.com/Float.html)
* **Default value =** 4

## idleSuffix
* **Description =** Suffix for idle animations
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** ''

## danceIdle
* **Description =** Character use "danceLeft" and "danceRight" instead of "idle"
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## skipDance
* **Description =** Uses for pico-speaker character
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## healthIcon
* **Description =** Health icon name
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** 'face'

## animationsArray
* **Description =** Array for animations
* **Type =** [Array<AnimArray>](https://api.haxeflixel.com/Array.html)
* **Default value =** []

## positionArray
* **Description =** Array for positions
* **Type =** [Array<Float>](https://api.haxeflixel.com/Array.html)
* **Default value =** [0, 0]

## cameraPosition
* **Description =** Array for positions of camera
* **Type =** [Array<Float>](https://api.haxeflixel.com/Array.html)
* **Default value =** [0, 0]

## hasMissAnimations
* **Description =** Is character has miss animations?
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## imageFile
* **Description =** Used on Character Editor
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** ''

## jsonScale
* **Description =** Used on Character Editor
* **Type =** [Float](https://api.haxeflixel.com/Float.html)
* **Default value =** 1

## noAntialiasing
* **Description =** Used on Character Editor
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## originalFlipX
* **Description =** Used on Character Editor
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## healthColorArray
* **Description =** Used on Character Editor
* **Type =** [Array<Int>](https://api.haxeflixel.com/Array.html)
* **Default value =** [255, 0, 0]

## DEFAULT_CHARACTER
* **Description =** In case a character is missing, it will use BF on its place
* **Static**
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** 'bf'

