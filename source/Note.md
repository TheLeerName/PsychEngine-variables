## extraData
* **Description =** Not used variable
* **Type =** [Map<String,Dynamic>](https://api.haxeflixel.com/Map.html)
* **Default value =** []

## strumTime
* **Description =** Strum time of current note in milliseconds
* **Type =** [Float](https://api.haxeflixel.com/Float.html)
* **Default value =** 0

## mustPress
* **Description =** If true, note will be count on bf side
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## noteData
* **Description =** 0 = Left note, 1 = Down note, 2 = Up note, 3 = Right note
* **Type =** [Int](https://api.haxeflixel.com/Int.html)
* **Default value =** 0

## canBeHit
* **Description =** Is note can be hit?
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## tooLate
* **Description =** Is note missed?
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## wasGoodHit
* **Description =** Is note pressed?
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## ignoreNote
* **Description =** If true, note ignores by opponent, and miss this note not counts as miss
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## hitByOpponent
* **Description =** Is note pressed by opponent?
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## noteWasHit
* **Description =** Not used variable
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## prevNote
* **Description =** Previous note, used for sustains
* **Type =** [Note](https://api.haxeflixel.com/Note.html)

## nextNote
* **Description =** Next note, used for sustains
* **Type =** [Note](https://api.haxeflixel.com/Note.html)

## spawned
* **Description =** Is note spawned?
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## tail
* **Description =** Array of sustains
* **Type =** [Array<Note>](https://api.haxeflixel.com/Array.html)
* **Default value =** []

## parent
* **Description =** Not used variable
* **Type =** [Note](https://api.haxeflixel.com/Note.html)

## blockHit
* **Description =** If true, player cant hit this note
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## sustainLength
* **Description =** Length of sustain note
* **Type =** [Float](https://api.haxeflixel.com/Float.html)
* **Default value =** 0

## isSustainNote
* **Description =** Is note sustain?
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## noteType
* **Description =** Name of note type
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** null

## eventName
* **Description =** Name of event, uses for event note
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** ''

## eventLength
* **Description =** Length of event, uses for event note
* **Type =** [Int](https://api.haxeflixel.com/Int.html)
* **Default value =** 0

## eventVal1
* **Description =** 1 value of event, uses for event note
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** ''

## eventVal2
* **Description =** 2 value of event, uses for event note
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** ''

## colorSwap
* **Description =** Shader for color swap note
* **Type =** [ColorSwap](https://api.haxeflixel.com/ColorSwap.html)

## inEditor
* **Description =** Is note in charting menu?
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## animSuffix
* **Description =** Suffix of animation note, uses when note type is "Alt Animation"
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** ''

## gfNote
* **Description =** Is note will be pressed by gf? Uses when note type is "GF Sing"
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## earlyHitMult
* **Description =** Multiplicator for early hit note
* **Type =** [Float](https://api.haxeflixel.com/Float.html)
* **Default value =** 0.5

## lateHitMult
* **Description =** Multiplicator for late hit note
* **Type =** [Float](https://api.haxeflixel.com/Float.html)
* **Default value =** 1

## lowPriority
* **Description =** Uses when note type is "Hurt Note"
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## swagWidth
* **Description =** Width of note
* **Static**
* **Type =** [Float](https://api.haxeflixel.com/Float.html)
* **Default value =** 160 * 0.7

## colArray
* **Description =** Array with strum note names
* **Type =** [Array<String>](https://api.haxeflixel.com/Array.html)
* **Default value =** ['purple', 'blue', 'green', 'red']

## pixelInt
* **Description =** Array with strum note indexes
* **Type =** [Array<Int>](https://api.haxeflixel.com/Array.html)
* **Default value =** [0, 1, 2, 3]

## noteSplashDisabled
* **Description =** Is note hasnt splash?
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## noteSplashTexture
* **Description =** Name of note splash texture
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** null

## noteSplashHue
* **Description =** Hue of note splash texture
* **Type =** [Float](https://api.haxeflixel.com/Float.html)
* **Default value =** 0

## noteSplashSat
* **Description =** Saturation of note splash texture
* **Type =** [Float](https://api.haxeflixel.com/Float.html)
* **Default value =** 0

## noteSplashBrt
* **Description =** Brightness of note splash texture
* **Type =** [Float](https://api.haxeflixel.com/Float.html)
* **Default value =** 0

## offsetX
* **Description =** X offset of note
* **Type =** [Float](https://api.haxeflixel.com/Float.html)
* **Default value =** 0

## offsetY
* **Description =** Y offset of note
* **Type =** [Float](https://api.haxeflixel.com/Float.html)
* **Default value =** 0

## offsetAngle
* **Description =** Angle offset of note
* **Type =** [Float](https://api.haxeflixel.com/Float.html)
* **Default value =** 0

## multAlpha
* **Description =** Multiplicator for alpha of note
* **Type =** [Float](https://api.haxeflixel.com/Float.html)
* **Default value =** 1

## multSpeed
* **Description =** Multiplicator for scroll speed of note
* **Type =** [Float](https://api.haxeflixel.com/Float.html)
* **Default value =** 1

## copyX
* **Description =** Is note calculates X? Can be used for custom positioning of note
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** true

## copyY
* **Description =** Is note calculates Y? Can be used for custom positioning of note
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** true

## copyAngle
* **Description =** Is note calculates angle? Can be used for custom positioning of note
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** true

## copyAlpha
* **Description =** Is note calculates alpha? Can be used for custom editing alpha of note
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** true

## hitHealth
* **Description =** Value of heal on hit note
* **Type =** [Float](https://api.haxeflixel.com/Float.html)
* **Default value =** 0.023

## missHealth
* **Description =** Value of hurt on miss note
* **Type =** [Float](https://api.haxeflixel.com/Float.html)
* **Default value =** 0.0475

## rating
* **Description =** Rating name of note
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** 'unknown'

## ratingMod
* **Description =** 9 = unknown, 0.25 = shit, 0.5 = bad, 0.75 = good, 1 = sick
* **Type =** [Float](https://api.haxeflixel.com/Float.html)
* **Default value =** 0

## ratingDisabled
* **Description =** Is rating disabled on this note?
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## texture
* **Description =** Name of current file name of notes
* **Type =** [String](https://api.haxeflixel.com/String.html)
* **Default value =** null

## noAnimation
* **Description =** Is note hasnt animation?
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## noMissAnimation
* **Description =** Is note hasnt miss animation?
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## hitCausesMiss
* **Description =** If true, pressing note counts as miss
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

## distance
* **Description =** Unfinished variable, distance of note
* **Type =** [Float](https://api.haxeflixel.com/Float.html)
* **Default value =** 2000

## hitsoundDisabled
* **Description =** Is hitsound disabled of pressing this note?
* **Type =** [Bool](https://api.haxeflixel.com/Bool.html)
* **Default value =** false

