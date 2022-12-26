## bpm
* **Description =** putdeschere
* **Static**
* **Type =** [Float](https://api.haxeflixel.com/Float.html)
* **Default value =** 100

## crochet
* **Description =** putdeschere
* **Static**
* **Type =** [Float](https://api.haxeflixel.com/Float.html)
* **Default value =** ((60 / bpm) * 1000)

## stepCrochet
* **Description =** putdeschere
* **Static**
* **Type =** [Float](https://api.haxeflixel.com/Float.html)
* **Default value =** crochet / 4

## songPosition
* **Description =** putdeschere
* **Static**
* **Type =** [Float=0](https://api.haxeflixel.com/Float=0.html)

## lastSongPos
* **Description =** putdeschere
* **Static**
* **Type =** [Float](https://api.haxeflixel.com/Float.html)

## offset
* **Description =** putdeschere
* **Static**
* **Type =** [](https://api.haxeflixel.com/Float.html)
* **Default value =** 0

## safeZoneOffset
* **Description =** putdeschere
* **Static**
* **Type =** [Float](https://api.haxeflixel.com/Float.html)
* **Default value =** (ClientPrefs.safeFrames / 60) * 1000

## bpmChangeMap
* **Description =** putdeschere
* **Static**
* **Type =** [Array<BPMChangeEvent>](https://api.haxeflixel.com/Array.html)
* **Default value =** []

## lastChange
* **Description =** putdeschere
* **Type =** [Dynamic](https://api.haxeflixel.com/Dynamic.html)
* **Default value =** omStep(step)

## curBPM
* **Description =** putdeschere
* **Type =** [Float](https://api.haxeflixel.com/Float.html)
* **Default value =** song.bpm

## totalSteps
* **Description =** putdeschere
* **Type =** [](https://api.haxeflixel.com/Int.html)
* **Default value =** 0

## totalPos
* **Description =** putdeschere
* **Type =** [](https://api.haxeflixel.com/Float.html)
* **Default value =** 0

## event
* **Description =** putdeschere
* **Type =** [BPMChangeEvent](https://api.haxeflixel.com/BPMChangeEvent.html)
* **Default value =** {stepTime: totalSteps,songTime: totalPos,bpm: curBPM,stepCrochet: calculateCrochet(curBPM)/4}

