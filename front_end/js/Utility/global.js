'use strict';

var RIOT_ADAPTER_URL = "http://api.champ101.krispin.it";
var RIOT_ADAPTER_URL_V2 = "http://api.champ101.krispin.it/v2.php";
var CHANGELOG_URL = "http://changelog.champ101.krispin.it/changelog.php";

var DDRAGON_BASE_URL = "http://ddragon.leagueoflegends.com/cdn/";
var DDRAGON_URL = undefined; // gets set from MatchDAO after loading the current Version-number
var LOL_PATCH = undefined; // gets set from MatchDAO after loading the current Version-number

/** @deprecated */
var FEEDBACK_URL = 'http://champ101.krispin.it/feedback/index.php';

var CDN_ABILITIES_URL = 'http://cdn.leagueoflegends.com/champion-abilities/';

var ANIMATION_SLIDE_SPEED_PER_PANEL = 400;