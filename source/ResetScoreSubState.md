## bg
* **Description =** putdeschere
* **Type =** [FlxSprite](https://api.haxeflixel.com/flixel/FlxSprite.html)

## alphabetArray
* **Description =** putdeschere
* **Type =** [Array<Alphabet>](https://api.haxeflixel.com/Array.html)
* **Default value =** []

## icon
* **Description =** putdeschere
* **Type =** [HealthIcon](https://api.haxeflixel.com/HealthIcon.html)

## onYes
* **Description =** putdeschere
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## yesText
* **Description =** putdeschere
* **Type =** [Alphabet](https://api.haxeflixel.com/Alphabet.html)

## noText
* **Description =** putdeschere
* **Type =** [Alphabet](https://api.haxeflixel.com/Alphabet.html)

## song
* **Description =** putdeschere
* **Type =** [String](https://api.haxeflixel.com/String.html)

## difficulty
* **Description =** putdeschere
* **Type =** [Int](https://api.haxeflixel.com/Int.html)

## week
* **Description =** putdeschere
* **Type =** [Int](https://api.haxeflixel.com/Int.html)

## name
* **Description =** putdeschere
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** song

## tooLong
* **Description =** putdeschere
* **Type =** [Float](https://api.haxeflixel.com/Float.html)
* **Default value =** (name.length > 18) ? 0.8 : 1

## text
* **Description =** putdeschere
* **Type =** [Alphabet](https://api.haxeflixel.com/Alphabet.html)
* **Default value =** new Alphabet(0, 180, "Reset the score of", true)

## text
* **Description =** putdeschere
* **Type =** [Alphabet](https://api.haxeflixel.com/Alphabet.html)
* **Default value =** new Alphabet(0, text.y + 90, name, true)

## alphas
* **Description =** putdeschere
* **Type =** [Array<Float>](https://api.haxeflixel.com/Array.html)
* **Default value =** [0.6, 1.25]

## confirmInt
* **Description =** putdeschere
* **Type =** [Int](https://api.haxeflixel.com/Int.html)
* **Default value =** onYes ? 1 : 0

