## bpm
* **Description =** Current BPM of song
* **Static**
* **Type =** [Float](https://api.haxeflixel.com/Float.html)
* **Default value =** 100

## crochet
* **Description =** curBeat in milliseconds
* **Static**
* **Type =** [Float](https://api.haxeflixel.com/Float.html)
* **Default value =** ((60 / bpm) * 1000)

## stepCrochet
* **Description =** curStep in milliseconds
* **Static**
* **Type =** [Float](https://api.haxeflixel.com/Float.html)
* **Default value =** crochet / 4

## songPosition
* **Description =** Current position of song
* **Static**
* **Type =** [Float=0](https://api.haxeflixel.com/Float=0.html)

## lastSongPos
* **Description =** Used for fix of missed frames
* **Static**
* **Type =** [Float](https://api.haxeflixel.com/Float.html)

## offset
* **Description =** Song offset in milliseconds
* **Static**
* **Type =** [Float](https://api.haxeflixel.com/Float.html)
* **Default value =** 0

## safeZoneOffset
* **Description =** safeFrames in milliseconds
* **Static**
* **Type =** [Float](https://api.haxeflixel.com/Float.html)
* **Default value =** (ClientPrefs.safeFrames / 60) * 1000

## bpmChangeMap
* **Description =** Array of BPM changes
* **Static**
* **Type =** [Array<BPMChangeEvent>](https://api.haxeflixel.com/Array.html)
* **Default value =** []

