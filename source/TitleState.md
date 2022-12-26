## muteKeys
* **Description =** putdeschere
* **Static**
* **Type =** [Array<FlxKey>](https://api.haxeflixel.com/Array.html)
* **Default value =** [FlxKey.ZERO]

## volumeDownKeys
* **Description =** putdeschere
* **Static**
* **Type =** [Array<FlxKey>](https://api.haxeflixel.com/Array.html)
* **Default value =** [FlxKey.NUMPADMINUS, FlxKey.MINUS]

## volumeUpKeys
* **Description =** putdeschere
* **Static**
* **Type =** [Array<FlxKey>](https://api.haxeflixel.com/Array.html)
* **Default value =** [FlxKey.NUMPADPLUS, FlxKey.PLUS]

## initialized
* **Description =** putdeschere
* **Static**
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## blackScreen
* **Description =** putdeschere
* **Type =** [FlxSprite](https://api.haxeflixel.com/flixel/FlxSprite.html)

## credGroup
* **Description =** putdeschere
* **Type =** [FlxGroup](https://api.haxeflixel.com/flixel/group/FlxGroup.html)

## credTextShit
* **Description =** putdeschere
* **Type =** [Alphabet](https://api.haxeflixel.com/Alphabet.html)

## textGroup
* **Description =** putdeschere
* **Type =** [FlxGroup](https://api.haxeflixel.com/flixel/group/FlxGroup.html)

## ngSpr
* **Description =** putdeschere
* **Type =** [FlxSprite](https://api.haxeflixel.com/flixel/FlxSprite.html)

## titleTextColors
* **Description =** putdeschere
* **Type =** [Array<FlxColor>](https://api.haxeflixel.com/Array.html)
* **Default value =** [0xFF33FFFF, 0xFF3333CC]

## titleTextAlphas
* **Description =** putdeschere
* **Type =** [Array<Float>](https://api.haxeflixel.com/Array.html)
* **Default value =** [1, .64]

## curWacky
* **Description =** putdeschere
* **Type =** [Array<String>](https://api.haxeflixel.com/Array.html)
* **Default value =** []

## wackyImage
* **Description =** putdeschere
* **Type =** [FlxSprite](https://api.haxeflixel.com/flixel/FlxSprite.html)

## easterEggKeys
* **Description =** putdeschere
* **Type =** [Array<String>](https://api.haxeflixel.com/Array.html)
* **Default value =** ['SHADOW', 'RIVER', 'SHUBS', 'BBPANZU']

## allowedKeys
* **Description =** putdeschere
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

## easterEggKeysBuffer
* **Description =** putdeschere
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** ''

## mustUpdate
* **Description =** putdeschere
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## titleJSON
* **Description =** putdeschere
* **Type =** [TitleData](https://api.haxeflixel.com/TitleData.html)

## updateVersion
* **Description =** putdeschere
* **Static**
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** ''

## curVersion
* **Description =** putdeschere
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** MainMenuState.psychEngineVersion.trim()

## gfDance
* **Description =** putdeschere
* **Type =** [FlxSprite](https://api.haxeflixel.com/flixel/FlxSprite.html)

## danceLeft
* **Description =** putdeschere
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## titleText
* **Description =** putdeschere
* **Type =** [FlxSprite](https://api.haxeflixel.com/flixel/FlxSprite.html)

## swagShader
* **Description =** putdeschere
* **Type =** [ColorSwap](https://api.haxeflixel.com/ColorSwap.html)
* **Default value =** null

## bg
* **Description =** putdeschere
* **Type =** [FlxSprite](https://api.haxeflixel.com/flixel/FlxSprite.html)
* **Default value =** new FlxSprite()

## easterEgg
* **Description =** putdeschere
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** FlxG.save.data.psychDevsEasterEgg

## path
* **Description =** putdeschere
* **Type =** [Dynamic](https://api.haxeflixel.com/Dynamic.html)
* **Default value =** + Paths.currentModDirectory + "/images/titleEnter.png"

## animFrames
* **Description =** putdeschere
* **Type =** [Array<FlxFrame>](https://api.haxeflixel.com/Array.html)
* **Default value =** []

## logo
* **Description =** putdeschere
* **Type =** [FlxSprite](https://api.haxeflixel.com/flixel/FlxSprite.html)
* **Default value =** new FlxSprite().loadGraphic(Paths.image('logo'))

## firstArray
* **Description =** putdeschere
* **Type =** [Array<String>](https://api.haxeflixel.com/Array.html)
* **Default value =** fullText.split('\n')

## swagGoodArray
* **Description =** putdeschere
* **Type =** [Array<Array<String>>](https://api.haxeflixel.com/Array.html)
* **Default value =** []

## playJingle
* **Description =** putdeschere
* **Static**
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## newTitle
* **Description =** putdeschere
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## titleTimer
* **Description =** putdeschere
* **Type =** [Float](https://api.haxeflixel.com/Float.html)
* **Default value =** 0

## pressedEnter
* **Description =** putdeschere
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** FlxG.keys.justPressed.ENTER || controls.ACCEPT

## keyName
* **Description =** putdeschere
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** Std.string(keyPressed)

## black
* **Description =** putdeschere
* **Type =** [FlxSprite](https://api.haxeflixel.com/flixel/FlxSprite.html)
* **Default value =** new FlxSprite(0, 0).makeGraphic(FlxG.width, FlxG.height, FlxColor.BLACK)

## closedState
* **Description =** putdeschere
* **Static**
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## increaseVolume
* **Description =** putdeschere
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## sound
* **Description =** putdeschere
* **Type =** [FlxSound](https://api.haxeflixel.com/flixel/system/FlxSound.html)
* **Default value =** null

## easteregg
* **Description =** putdeschere
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** FlxG.save.data.psychDevsEasterEgg

