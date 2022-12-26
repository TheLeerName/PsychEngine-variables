## animOffsets
* **Description =** putdeschere
* **Type =** [Map<String, Array<Dynamic>>](https://api.haxeflixel.com/Map.html)

## debugMode
* **Description =** putdeschere
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## isPlayer
* **Description =** putdeschere
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## curCharacter
* **Description =** putdeschere
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** DEFAULT_CHARACTER

## colorTween
* **Description =** putdeschere
* **Type =** [FlxTween](https://api.haxeflixel.com/flixel/tweens/FlxTween.html)

## holdTimer
* **Description =** putdeschere
* **Type =** [](https://api.haxeflixel.com/Float.html)
* **Default value =** 0

## heyTimer
* **Description =** putdeschere
* **Type =** [](https://api.haxeflixel.com/Float.html)
* **Default value =** 0

## specialAnim
* **Description =** putdeschere
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## animationNotes
* **Description =** putdeschere
* **Type =** [Array<Dynamic>](https://api.haxeflixel.com/Array.html)
* **Default value =** []

## stunned
* **Description =** putdeschere
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## singDuration
* **Description =** putdeschere
* **Type =** [](https://api.haxeflixel.com/Float.html)
* **Default value =** 4

## idleSuffix
* **Description =** putdeschere
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** ''

## danceIdle
* **Description =** putdeschere
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## skipDance
* **Description =** putdeschere
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## healthIcon
* **Description =** putdeschere
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** 'face'

## animationsArray
* **Description =** putdeschere
* **Type =** [Array<AnimArray>](https://api.haxeflixel.com/Array.html)
* **Default value =** []

## positionArray
* **Description =** putdeschere
* **Type =** [Array<Float>](https://api.haxeflixel.com/Array.html)
* **Default value =** [0, 0]

## cameraPosition
* **Description =** putdeschere
* **Type =** [Array<Float>](https://api.haxeflixel.com/Array.html)
* **Default value =** [0, 0]

## hasMissAnimations
* **Description =** putdeschere
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## imageFile
* **Description =** putdeschere
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** ''

## jsonScale
* **Description =** putdeschere
* **Type =** [](https://api.haxeflixel.com/Float.html)
* **Default value =** 1

## noAntialiasing
* **Description =** putdeschere
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## originalFlipX
* **Description =** putdeschere
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## healthColorArray
* **Description =** putdeschere
* **Type =** [Array<Int>](https://api.haxeflixel.com/Array.html)
* **Default value =** [255, 0, 0]

## DEFAULT_CHARACTER
* **Description =** putdeschere
* **Static**
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** 'bf'

## library
* **Description =** putdeschere
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** null

## path
* **Description =** putdeschere
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** Paths.modFolders(characterPath)

## rawJson
* **Description =** putdeschere
* **Type =** [Dynamic](https://api.haxeflixel.com/Dynamic.html)
* **Default value =** etText(path)

## json
* **Description =** putdeschere
* **Type =** [CharacterFile](https://api.haxeflixel.com/CharacterFile.html)
* **Default value =** cast Json.parse(rawJson)

## spriteType
* **Description =** putdeschere
* **Type =** [](https://api.haxeflixel.com/Dynamic.html)
* **Default value =** "

## modTxtToFind
* **Description =** putdeschere
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** Paths.modsTxt(json.image)

## txtToFind
* **Description =** putdeschere
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** Paths.getPath('images/' + json.image + '.txt', TEXT)

## animToFind
* **Description =** putdeschere
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** Paths.getPath('images/' + json.image + '/Animation.json', TEXT)

## animName
* **Description =** putdeschere
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** '' + anim.name

## animFps
* **Description =** putdeschere
* **Type =** [Int](https://api.haxeflixel.com/Int.html)
* **Default value =** anim.fps

## animLoop
* **Description =** putdeschere
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** !!anim.loop

## animIndices
* **Description =** putdeschere
* **Type =** [Array<Int>](https://api.haxeflixel.com/Array.html)
* **Default value =** anim.indices

## daOffset
* **Description =** putdeschere
* **Type =** [Dynamic](https://api.haxeflixel.com/Dynamic.html)
* **Default value =** ets.get(AnimName)

## settingCharacterUp
* **Description =** putdeschere
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** true

