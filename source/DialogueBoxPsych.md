## dialogue
* **Description =** Text object of dialogue
* **Type =** [TypedAlphabet](https://api.haxeflixel.com/TypedAlphabet.html)

## dialogueList
* **Description =** Array with dialogue texts
* **Type =** [DialogueFile](https://api.haxeflixel.com/DialogueFile.html)
* **Default value =** null

## finishThing
* **Description =** Executes when dialogue finished
* **Type =** [Void->Void](https://api.haxeflixel.com/Void.html)

## nextDialogueThing
* **Description =** Executes when next dialogue switches
* **Type =** [Void->Void](https://api.haxeflixel.com/Void.html)
* **Default value =** null

## skipDialogueThing
* **Description =** Executes when dialogue skipped
* **Type =** [Void->Void](https://api.haxeflixel.com/Void.html)
* **Default value =** null

## bgFade
* **Description =** Image object of bg
* **Type =** [FlxSprite](https://api.haxeflixel.com/flixel/FlxSprite.html)
* **Default value =** null

## box
* **Description =** dialogue box
* **Type =** [FlxSprite](https://api.haxeflixel.com/flixel/FlxSprite.html)

## textToType
* **Description =** Not used variable
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** ''

## arrayCharacters
* **Description =** Array with dialogue characters
* **Type =** [Array<DialogueCharacter>](https://api.haxeflixel.com/Array.html)
* **Default value =** []

## currentText
* **Description =** Index of current dialogue
* **Type =** [Int](https://api.haxeflixel.com/Int.html)
* **Default value =** 0

## offsetPos
* **Description =** X offset of dialogue character
* **Type =** [Float](https://api.haxeflixel.com/Float.html)
* **Default value =** -600

## textBoxTypes
* **Description =** Array with dialogue box types
* **Type =** [Array<String>](https://api.haxeflixel.com/Array.html)
* **Default value =** ['normal', 'angry']

## curCharacter
* **Description =** Current character in dialogue
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** ""

## dialogueEnded
* **Description =** Dialogue ended?
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## LEFT_CHAR_X
* **Description =** X of dialogue left character
* **Static**
* **Type =** [Float](https://api.haxeflixel.com/Float.html)
* **Default value =** -60

## RIGHT_CHAR_X
* **Description =** X of dialogue right character
* **Static**
* **Type =** [Float](https://api.haxeflixel.com/Float.html)
* **Default value =** -100

## DEFAULT_CHAR_Y
* **Description =** Y of dialogue characters
* **Static**
* **Type =** [Float](https://api.haxeflixel.com/Float.html)
* **Default value =** 60

## DEFAULT_TEXT_Y
* **Description =** Y of dialogue text
* **Static**
* **Type =** [Dynamic](https://api.haxeflixel.com/Dynamic.html)

## LONG_TEXT_ADD
* **Description =** Y offset of dialogue text
* **Static**
* **Type =** [Dynamic](https://api.haxeflixel.com/Dynamic.html)

## scrollSpeed
* **Description =** Scroll speed of dialogue
* **Type =** [Dynamic](https://api.haxeflixel.com/Dynamic.html)

## daText
* **Description =** text object of dialogue
* **Type =** [TypedAlphabet](https://api.haxeflixel.com/TypedAlphabet.html)
* **Default value =** null

## ignoreThisFrame
* **Description =** First frame is reserved for loading dialogue images
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** true

## closeSound
* **Description =** Sound of close dialogue
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** 'dialogueClose'

## closeVolume
* **Description =** Volume of sound of close dialogue
* **Type =** [Float](https://api.haxeflixel.com/Float.html)
* **Default value =** 1

