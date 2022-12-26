## dialogue
* **Description =** putdeschere
* **Type =** [TypedAlphabet](https://api.haxeflixel.com/TypedAlphabet.html)

## dialogueList
* **Description =** putdeschere
* **Type =** [DialogueFile](https://api.haxeflixel.com/DialogueFile.html)
* **Default value =** null

## finishThing
* **Description =** putdeschere
* **Type =** [Void->Void](https://api.haxeflixel.com/Void.html)

## nextDialogueThing
* **Description =** putdeschere
* **Type =** [Void->Void](https://api.haxeflixel.com/Void.html)
* **Default value =** null

## skipDialogueThing
* **Description =** putdeschere
* **Type =** [Void->Void](https://api.haxeflixel.com/Void.html)
* **Default value =** null

## bgFade
* **Description =** putdeschere
* **Type =** [FlxSprite](https://api.haxeflixel.com/flixel/FlxSprite.html)
* **Default value =** null

## box
* **Description =** putdeschere
* **Type =** [FlxSprite](https://api.haxeflixel.com/flixel/FlxSprite.html)

## textToType
* **Description =** putdeschere
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** ''

## arrayCharacters
* **Description =** putdeschere
* **Type =** [Array<DialogueCharacter>](https://api.haxeflixel.com/Array.html)
* **Default value =** []

## currentText
* **Description =** putdeschere
* **Type =** [](https://api.haxeflixel.com/Int.html)
* **Default value =** 0

## offsetPos
* **Description =** putdeschere
* **Type =** [Float](https://api.haxeflixel.com/Float.html)
* **Default value =** -600

## textBoxTypes
* **Description =** putdeschere
* **Type =** [Array<String>](https://api.haxeflixel.com/Array.html)
* **Default value =** ['normal', 'angry']

## curCharacter
* **Description =** putdeschere
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** ""

## dialogueEnded
* **Description =** putdeschere
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## LEFT_CHAR_X
* **Description =** putdeschere
* **Static**
* **Type =** [Float](https://api.haxeflixel.com/Float.html)
* **Default value =** -60

## RIGHT_CHAR_X
* **Description =** putdeschere
* **Static**
* **Type =** [Float](https://api.haxeflixel.com/Float.html)
* **Default value =** -100

## DEFAULT_CHAR_Y
* **Description =** putdeschere
* **Static**
* **Type =** [Float](https://api.haxeflixel.com/Float.html)
* **Default value =** 60

## charsMap
* **Description =** putdeschere
* **Type =** [Map<String, Bool>](https://api.haxeflixel.com/Map.html)
* **Default value =** new Map<String, Bool>()

## y
* **Description =** putdeschere
* **Type =** [Float](https://api.haxeflixel.com/Float.html)
* **Default value =** DEFAULT_CHAR_Y

## char
* **Description =** putdeschere
* **Type =** [DialogueCharacter](https://api.haxeflixel.com/DialogueCharacter.html)
* **Default value =** new DialogueCharacter(x + offsetPos, y, individualChar)

## saveY
* **Description =** putdeschere
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## DEFAULT_TEXT_Y
* **Description =** putdeschere
* **Static**
* **Type =** [Dynamic](https://api.haxeflixel.com/Dynamic.html)

## LONG_TEXT_ADD
* **Description =** putdeschere
* **Static**
* **Type =** [Dynamic](https://api.haxeflixel.com/Dynamic.html)

## scrollSpeed
* **Description =** putdeschere
* **Type =** [Dynamic](https://api.haxeflixel.com/Dynamic.html)

## daText
* **Description =** putdeschere
* **Type =** [TypedAlphabet](https://api.haxeflixel.com/TypedAlphabet.html)
* **Default value =** null

## ignoreThisFrame
* **Description =** putdeschere
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** true

## closeSound
* **Description =** putdeschere
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** 'dialogueClose'

## closeVolume
* **Description =** putdeschere
* **Type =** [](https://api.haxeflixel.com/Float.html)
* **Default value =** 1

## animName
* **Description =** putdeschere
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** box.animation.curAnim.name

## animName
* **Description =** putdeschere
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** box.animation.curAnim.name

## lastBoxType
* **Description =** putdeschere
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** ''

## animName
* **Description =** putdeschere
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** curDialogue.boxState

## boxType
* **Description =** putdeschere
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** textBoxTypes[0]

## lePosition
* **Description =** putdeschere
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** arrayCharacters[character].jsonFile.dialogue_pos

## char
* **Description =** putdeschere
* **Type =** [DialogueCharacter](https://api.haxeflixel.com/DialogueCharacter.html)
* **Default value =** arrayCharacters[character]

