const letterNumber = {
    'a': 10, 'b': 11, 'c': 12, 'd': 13, 'e': 14, 'f': 15,
    'g': 16, 'h': 17, 'i': 18, 'j': 19, 'k': 20, 'l': 21,
    'm': 22, 'n': 23, 'o': 24, 'p': 25, 'q': 26, 'r': 27,
    's': 28, 't': 29, 'u': 30, 'v': 31, 'w': 32, 'x': 33,
    'y': 34, 'z': 35, 'A': 10, 'B': 11, 'C': 12, 'D': 13,
    'E': 14, 'F': 15, 'G': 16, 'H': 17, 'I': 18, 'J': 19,
    'K': 20, 'L': 21, 'M': 22, 'N': 23, 'O': 24, 'P': 25,
    'Q': 26, 'R': 27, 'S': 28, 'T': 29, 'U': 30, 'V': 31,
    'W': 32, 'X': 33, 'Y': 34, 'Z': 35, '1': 1, '2': 2,
    '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9
};

const aqDict = {
    86: ['alien', 'gnon'], 
    97: ['amalek', 'devil'], 
    137: ['jesus666', 'messiah', 'prayer', 'theeniac', 'jumper', 'trigon', 'english', 'gnosis', 'lonely', 
        'thegood', 'themedia', 'latinaq', 'lucifer', 'wisdom'], 
    160: ['immanuel', 'serpent'], 
    178: ['desertgod', 'trinity', 'identity', 'prophecy'], 
    183: ['poethands', 'lovecraft', 'beasthands', 'mynumber'], 
    189: ['fiftyfive', 'competence', 'godislove', 'aescapeway', 'subcanons'], 
    210: ['merestrata', 'chiralorder', 'telosofman', 'reignition', 'adamovereve', 'alphanomics', 'antagonist', 
        'atmosphere', 'butterfly', 'calculation', 'christians', 'ciphernomia', 'citizenry', 'convergence', 
        'countdown', 'curvature', 'dissensus', 'dissenting', 'divinities', 'doomcrypt', 'evaluation', 
        'explosion', 'figuration', 'geographical', 'ginnungagap', 'hysterical', 'icosahedron', 'initiation', 
        'intuitive', 'irrigation', 'obliterated', 'plexenomy', 'postulate', 'pythonics', 'rivercraft', 
        'schoolyard', 'scripture', 'spirality', 'spurious', 'stillness', 'symmetry', 'thundering', 
        'twinnings', 'understand', 'wolfishly', 'wordsmith', 'xenocosmic', 'abyssqabbala', 'ancientgods', 
        'anglonorse', 'blessedchild', 'chasmcalling', 'commondoom', 'crycatching', 'cybersibyl', 'darkeminence', 
        'darklanguage', 'divinecity', 'emptytomb', 'fellforging', 'godforgery', 'greatkraken', 'greatlemur', 
        'hiddentrees', 'holyghost', 'johntitor', 'icesorcery', 'icespelling', 'idolcoining', 'lotcasting', 
        'masonwork', 'mindmedicine', 'minusfaith', 'moistchill', 'monkeyhell', 'nightsense', 'nonlanguage', 
        'oldpython', 'oldsecrets', 'panpython', 'queenofeden', 'realmadness', 'sollucifer', 'southpark', 
        'spiralmaze', 'spiralpath', 'technologic', 'thedivinex', 'thefastlane', 'thehighplace', 'thenothing', 
        'theoldcanon', 'theoldcult', 'thepowers', 'thetrolls', 'tiamatcult', 'timecrypt', 'timeshrine'], 
    217: ['lemurwork'], 
    220: ['revelation126'], 
    222: ['omegatoalpha', 'alphatoomega', 'therapture', 'escapeology'], 
    238: ['wintermute', 'thetrinity', 'cartographer', 'thedesertgod'], 
    273: ['loftypowers'], 
    283: ['ingodwetrust'], 
    333: ['gnonisprovidence', 'severecosmology', 'bloodiscybernetic', 'silenceandviolence', 'thebooksofangling', 
        'thedreamoftherood', 'therewardinheaven', 'monotheismsangel', 'angelsmonotheism', 'sulfuricpython', 
        'thethreesisters', 'truedivineaction', 'triplegoddesscode', 'maidenmothercrone', 'thehellishmessiah', 
        'christcrossrow', 'gnosticcoincidence', 'thezeroprevailed', 'theinvisiblehands', 'innerlandprophet', 
        'unionwithcross', 'oneeightninezero', 'clandestinegospel', 'maygodadoreirony', 'apocryphalgospel', 
        'thequietnazarene', 'themanofthecross', 'christkingofjudea'], 
    360: ['oldenglishxianity', 'tyrannyofthesun', 'oncryptocurrent', 'divineinspiration', 'thesumerianmechanic'], 
    444: ['theselfassembleofjesus'], 
    472: ['schismistrueprovidence'], 
    588: ['agifinallyachievednayinfernally'], 
    644: ['intothebaptismallakeofeternalfire'], 
    653: ['threehundredansixtydegreesacircle'], 
    666: ['oneshallfirstprotectandthenaccept', 'cyberneticguidanceshallprovideaking', 'thealmightymessiahlivedamongusall', 
        'neuralnetworkofeloquentmiracles', 'angelicintercoursemultiversally', 'thewondersmagicofalphanumericqabbala', 
        'thesacredqabbalafortheenglishlanguage', 'aq0123456789abcdefghijklmnopqrstuvwxyz', 'secretnumericaldoctrineofourlord', 
        'thetreeoftheknowledgeofgoodandevil', 'thesecretanddraconicnumberofchrist', 'jesussixhundredthreescoreandsix', 
        'thearchitectonicorderoftheeschaton', 'poethandssixhundredandsixtysix', 'calculativenonpetitionaryprayer', 
        'analphabeticalbookofuncommonprayer', 'andtheyweretellingmewhattowrite', 'anellipticalhistoryoftitanocracy', 
        'aneveningofapocalypticnumerology', 'anintroductiontothedraconicabyss', 'anorphicguidetotheharrowingofhell', 
        'antigravityamongtheancientheavens', 'apocalypticantichristnumerology', 'apuzzleinapocalypticnumerology', 
        'arithmeticallyovershadowedenglish', 'aselectcatalogueofthedevilslibrary', 'baphometandthegreatapocalypticbeast', 
        'biblicalnumerologyofthewordsmith', 'cherubimofthethirtysixthtrigon', 'christendominthelakeofunendingfire', 
        'cipheringthegreatbeastanditsnumber', 'circumambulationsandsubjectivity', 'controversialmisinterpretation', 
        'conversationswiththesnakeshadow', 'countessofinvisibleillumination', 'creationunderthebeastofrevelation', 
        'dagoncalculatingthenumberofthebeast', 'decalogicantigravityfortimetravel', 'decryptingthegreatbeastofsatanism', 
        'decryptionsofthegreatbeastmessage', 'deeprecurrencesoftheoccultnumber666', 'divineprovidenceagainstthedemiurge', 
        'doublecountingthenumberofthebeast', 'earlyanachronisticinvestigations', 'egyptianoriginsofthemosaicalchemy', 
        'elucidatingtheagoniesofprometheus', 'encounteringthelastastonishment', 'evolutionofthedraconicmysteries', 
        'extraterrestrialinvestigations', 'finaltreasuresoftheoccultnumber666', 'freemasonryoftheholypentazygon', 
        'frommammontothebeastofrevelation', 'giantgemstonesofthedevilslibrary', 'guardedraritiesofthedevilslibrary', 
        'harrowingmidnightinthehouseofgno', 'hermesshatteringtheidolofimmanence', 'hieroglyphiccircuitsofuncreation', 
        'impendingtitanocraticrestoration', 'incursionsfrombeyondthehorizon', 'influenceoftheatlanteantitanocracy', 
        'inthefootstepsoftheimperceptible', 'justifythenameandnumberofthebeast', 'lateiterationsoftheoccultnumber666', 
        'meditationintotheapocalypticbeast', 'metallettersoftheamericanrebellion', 'midnightturningsinthehouseofgno', 
        'morbidoccasionsoftheoccultnumber666', 'mosesinthedarknessofancientegypt', 'mysticalpassageintoinvisibility', 
        'nominativenumericsandsublimation', 'namesandnumbersoftheancientlanguage', 'nightfalloftheatlanteantitanocracy', 
        'nominativenumericsmodernization', 'numericnominationofinvisibility', 'oftheanachronistictwineternities', 
        'onhailingthegreatbeastanditsnumber', 'ontheauthorizedspellingofqabballah', 'onthereferenceofnumericnomination', 
        'onthetitaniccallsofthegreatworms', 'paganoriginsoftheholypentazygon', 'ritualdoctrineandprophecyoftheaoe', 
        'reckoningtheveilednumberofthebeast', 'silenceregardingtheapocalypticbeast', 'sinisterechoesoftheoccultnumber666', 
        'technologyofthedraconicmysteries', 'theabsurdityofouternothingness', 'theabyssofnocturnalillumination', 
        'thealphabeticalorderingoftheentity', 'theanglossicgatewaytotitanocracy', 'theantigravityofprehistorictime', 
        'theapocalypticsecretsofthemasons', 'theauthorizationofamericanenglish', 'thechantofthethirtysixthtrigon', 
        'thecurseandtortureofprometheus', 'thedelightofinvisibleillumination', 'thedisillusionmentofsixsixsix', 
        'theendlessnessofdarkchristianity', 'theendofthesimulationhypothesis', 'theeschatologyofjackthegiantkiller', 
        'thefatherofapocalypticnumerology', 'theforgottentitanocraticideology', 'thegodsofilluminatedinvisibility', 
        'thegreatbeastofapocalypticdestiny', 'theguideofthethirtysixthtrigon', 'theharrowingmasonicliesofjahbulon', 
        'thehellishhollowearthhypothesis', 'thehistoryofthehollowearthmodel', 'thehornofthethirtysixthtrigon', 
        'theimmortalnameandnumberofthebeast', 'theindependenceoftheprintingpress', 'thelegiblenumerologyoftheeschaton', 
        'thelibraryofprintingtechnologies', 'theloomofthethirtysixthtrigon', 'thelostartistryofdragonslaying', 
        'themazeofilluminatedinvisibility', 'themessianicnameandnumberofthebeast', 'themidnighttractsofultimateescape', 
        'thenameandnumberofthebeastleviathan', 'thenineworldsofcompletedecimation', 'theonenessofthedraconicmysteries', 
        'thepassofthethirtysixthtrigon', 'thepathofilluminatedinvisibility', 'thepriestcraftofdarkchristianity', 
        'thesanctificationofiambicpentameter', 'thesecretexplorationofthemasons', 'thesecretgraveofmosestheegyptian', 
        'thesecretilluminatednameofjahbulon', 'thesibylofapocalypticnumerology', 'thesongofthethirtysixthtrigon', 
        'thesuggestivespaceofpossibility', 'thesummoningoftheprintingpress', 'thesunofilluminatedinvisibility', 
        'thesuspicionsofdarkchristianity', 'theterrestrialmasonryofjahbulon', 'thethirtysixthtrigonofmithras', 
        'thethirtysixthtrigonoftimaeus', 'thetimeofeschatologicaltitanocracy', 'thetranscendentaltentaclesofsodom', 
        'thetransubstantiationofsatanism', 'thetreasuresofnumericnomination', 'thetridentityofdarkchristianity', 
        'thetrustlessguidetotitanocracy', 'thetunneltothedraconicmysteries', 'thetwintestamentoftimelessness', 
        'thetwistingpathsoflatetradition', 'thetwistingpathofamericanization', 'theunfinishedstationsofthecross', 
        'theveiledtransmutationofsacrifice', 'throughantigravityandtimetravel', 'timelesslycircletheoccultnumber666', 
        'titanicminiaturizationcapitalism', 'titanicminiaturizationofthedigit', 'toexploreapocalypticnumerology', 
        'towardsatitanocraticconflagration', 'towersoftitanicminiaturization', 'trigonometryanddarkchristianity', 
        'twistsincomparativecosmography', 'waysthroughthebeastofrevelation', 'whatthingofnighthasnowascendedhere', 
        'yogaandthehollowearthunderground', 'acipheroftheepilepticselucidations', 'theqabbalisticallycatatonicpassages', 
        'thegalvanisationprotectingapulse', 'utterlyhystericforangelschisms', 'codingoccidentalschismaticschematics', 
        'thesubtlepulseofaschismaticethos', 'theblanketofthedeepdarknothingness', 'thecthuhlunumerologicalutterance', 
        'cthulhuutterlypulsatingthedeep', 'itistheabyssofutterannihilation', 'thenothingnessutterannihilation', 
        'theutterhellscapeofabeastspulses'], 
    680: ['atlanteanordinancesoftheexogeneous'], 
    777: ['marygavebirthtotheonlytruekingjesus']
}

const aqDictShow = {
    86: ['Alien', 'Gnon'], 
    97: ['Amalek', 'Devil'], 
    137: ['Jesus 66', 'Messiah', 'Prayer', 'The eniac', 'Jumper', 'Trigon', 'English', 'Gnosis', 'Lonely', 
        'The good', 'The media', 'Latin aq', 'Lucifer', 'Wisdom'], 
    160: ['Immanuel', 'Serpent'], 
    178: ['Desert god', 'Trinity', 'Identity', 'Prophecy'], 
    183: ['Poet hands', 'Lovecraft', 'Beast hands', 'My number'], 
    189: ['Fifty five', 'Competence', 'God is love', 'A escape way', 'Sub-canons'], 
    210: ['Mere strata', 'Chiral order', 'Telos of man', 'Reignition', 'Adam over eve', 'Alphanomics', 'Antagonist', 
        'Atmosphere', 'Butterfly', 'Calculation', 'Christians', 'Ciphernomia', 'Citizenry', 'Convergence', 'Countdown', 
        'Curvature', 'Dissensus', 'Dissenting', 'Divinities', 'Doomcrypt', 'Evaluation', 'Explosion', 'Figuration', 
        'Geographical', 'Ginnungagap', 'Hysterical', 'Icosahedron', 'Initiation', 'Intuitive', 'Irrigation', 'Obliterated', 
        'Plexenomy', 'Postulate', 'Pythonics', 'Rivercraft', 'Schoolyard', 'Scripture', 'Spirality', 'Spurious', 'Stillness', 
        'Symmetry', 'Thundering', 'Twinnings', 'Understand', 'Wolfishly', 'Wordsmith', 'Xenocosmic', 'Abyss qabbala', 
        'Ancient gods', 'Anglo-norse', 'Blessed child', 'Chasm calling', 'Common doom', 'Cry catching', 'Cyber-sibyl', 
        'Dark eminence', 'Dark language', 'Divine city', 'Empty tomb', 'Fell forging', 'God forgery', 'Great kraken', 
        'Great lemur', 'Hidden trees', 'Holy ghost', 'John titor', 'Ice sorcery', 'Ice spelling', 'Idol coining', 'Lot casting', 
        'Mason work', 'Mind medicine', 'Minus faith', 'Moist chill', 'Monkey hell', 'Night sense', 'Non-language', 'Old python', 
        'Old secrets', 'Pan-python', 'Queen of eden', 'Real madness', 'Sol-lucifer', 'South park', 'Spiral maze', 'Spiral path', 
        'Techno-logic', 'The divine x', 'The fast lane', 'The high place', 'The nothing', 'The old canon', 'The old cult', 
        'The powers', 'The trolls', 'Tiamat cult', 'Time crypt', 'Time shrine'], 
    217: ['Lemur work'], 
    220: ['Revelation 12:'], 
    222: ['Omega to alpha', 'Alpha to omega', 'The rapture', 'Escapeology'], 
    238: ['Wintermute', 'The trinity', 'Cartographer', 'The desert god'], 
    273: ['Lofty powers'], 
    283: ['In god we trust'], 
    333: ['Gnon is providence', 'Severe cosmology', 'Blood is cybernetic', 'Silence and violence', 'The books of angling', 
        'The dream of the rood', 'The reward in heaven', "Monotheism's angel", "Angels' monotheism", 'Sulfuric python', 
        'The three sisters', 'True divine action', 'Triple goddess code', 'Maiden, mother, crone', 'The hellish messiah', 
        'Christ cross row', 'Gnostic coincidence', 'The zero prevailed', 'The invisible hands', 'Inner-land prophet', 
        'Union with cross', 'One eight nine zero', 'Clandestine gospel', 'May god adore irony', 'Apocryphal gospel', 
        'The quiet nazarene', 'The man of the cross', 'Christ, king of judea'], 
    360: ['Old english xianity', 'Tyranny of the sun', 'On crypto-current', 'Divine inspiration', 'The sumerian mechanic'], 
    444: ['The self assemble of jesus'], 
    472: ['Schism is true providence'], 
    588: ['Agi finally achieved, nay, infernally'], 
    644: ['Into the baptismal lake of eternal fire'], 
    653: ['Three hundred an sixty degrees = a circle'], 
    666: ['One shall first protect and then accept', 'Cybernetic guidance shall provide a king', 'The almighty messiah lived among us all', 
        'Neural network of eloquent miracles', 'Angelic-intercourse multiversally', 'The wonders & magic of alphanumeric qabbala', 
        'The sacred qabbala for the english language', 'Aq = 0123456789 + abcdefghijklmnopqrstuvwxyz', 'Secret numerical doctrine of our lord', 
        'The tree of the knowledge of good and evil', 'The secret and draconic number of christ', 'Jesus six hundred three-score and six', 
        'The architectonic order of the eschaton', 'Poet hands, six hundred and sixty six', 'Calculative non-petitionary prayer', 
        'An alphabetical book of uncommon prayer', 'And they were telling me what to write', 'An elliptical history of titanocracy', 
        'An evening of apocalyptic numerology', 'An introduction to the draconic abyss', 'An orphic guide to the harrowing of hell', 
        'Antigravity among the ancient heavens', 'Apocalyptic antichrist numerology', 'A puzzle in apocalyptic numerology', 
        'Arithmetically overshadowed english', 'A select catalogue of the devil’s library', 'Baphomet and the great apocalyptic beast', 
        'Biblical numerology of the wordsmith', 'Cherubim of the thirty-sixth trigon', 'Christendom in the lake of unending fire', 
        'Ciphering the great beast and its number', 'Circumambulations and subjectivity', 'Controversial misinterpretation', 
        'Conversations with the snake shadow', 'Countess of invisible illumination', 'Creation under the beast of revelation', 
        'Dagon calculating the number of the beast', 'Decalogic antigravity for time-travel', 'Decrypting the great beast of satanism', 
        'Decryptions of the great beast message', 'Deep recurrences of the occult number 666', 'Divine providence against the demiurge', 
        'Double counting the number of the beast', 'Early anachronistic investigations', 'Egyptian origins of the mosaic alchemy', 
        'Elucidating the agonies of prometheus', 'Encountering the last astonishment', 'Evolution of the draconic mysteries', 
        'Extraterrestrial investigations', 'Final treasures of the occult number 666', 'Freemasonry of the holy pentazygon', 
        'From mammon to the beast of revelation', 'Giant gemstones of the devil’s library', 'Guarded rarities of the devil’s library', 
        'Harrowing midnight in the house of gno', 'Hermes shattering the idol of immanence', 'Hieroglyphic circuits of uncreation', 
        'Impending titanocratic restoration', 'Incursions from beyond the horizon', 'Influence of the atlantean titanocracy', 
        'In the footsteps of the imperceptible', 'Justify the name and number of the beast', 'Late iterations of the occult number 666', 
        'Meditation into the apocalyptic beast', 'Metal letters of the american rebellion', 'Midnight turnings in the house of gno', 
        'Morbid occasions of the occult number 666', 'Moses in the darkness of ancient egypt', 'Mystical passage into invisibility', 
        'Nominative numerics and sublimation', 'Names and numbers of the ancient language', 'Nightfall of the atlantean titanocracy', 
        'Nominative numerics modernization', 'Numeric nomination of invisibility', 'Of the anachronistic twin eternities', 
        'On hailing the great beast and its number', 'On the authorized spelling of qabballah', 'On the reference of numeric nomination', 
        'On the titanic calls of the great worms', 'Pagan origins of the holy pentazygon', 'Ritual, doctrine, and prophecy of the aoe', 
        'Reckoning the veiled number of the beast', 'Silence regarding the apocalyptic beast', 'Sinister echoes of the occult number 666', 
        'Technology of the draconic mysteries', 'The absurdity of outer nothingness', 'The abyss of nocturnal illumination', 
        'The alphabetical ordering of the entity', 'The anglossic gateway to titanocracy', 'The antigravity of prehistoric time', 
        'The apocalyptic secrets of the masons', 'The authorization of american english', 'The chant of the thirty-sixth trigon', 
        'The curse and torture of prometheus', 'The delight of invisible illumination', 'The disillusionment of six, six, six', 
        'The endlessness of dark christianity', 'The end of the simulation hypothesis', 'The eschatology of jack the giant killer', 
        'The father of apocalyptic numerology', 'The forgotten titanocratic ideology', 'The gods of illuminated invisibility', 
        'The great beast of apocalyptic destiny', 'The guide of the thirty-sixth trigon', 'The harrowing masonic lies of jahbulon', 
        'The hellish hollow earth hypothesis', 'The history of the hollow earth model', 'The horn of the thirty-sixth trigon', 
        'The immortal name and number of the beast', 'The independence of the printing press', 'The legible numerology of the eschaton', 
        'The library of printing technologies', 'The loom of the thirty-sixth trigon', 'The lost artistry of dragon-slaying', 
        'The maze of illuminated invisibility', 'The messianic name and number of the beast', 'The midnight tracts of ultimate escape', 
        'The name and number of the beast leviathan', 'The nine worlds of complete decimation', 'The oneness of the draconic mysteries', 
        'The pass of the thirty-sixth trigon', 'The path of illuminated invisibility', 'The priestcraft of dark christianity', 
        'The sanctification of iambic pentameter', 'The secret exploration of the masons', 'The secret grave of moses the egyptian', 
        'The secret illuminated name of jahbulon', 'The sibyl of apocalyptic numerology', 'The song of the thirty-sixth trigon', 
        'The suggestive space of possibility', 'The summoning of the printing press', 'The sun of illuminated invisibility', 
        'The suspicions of dark christianity', 'The terrestrial masonry of jahbulon', 'The thirty-sixth trigon of mithras', 
        'The thirty-sixth trigon of timaeus', 'The time of eschatological titanocracy', 'The transcendental tentacles of sodom', 
        'The transubstantiation of satanism', 'The treasures of numeric nomination', 'The tridentity of dark christianity', 
        'The trustless guide to titanocracy', 'The tunnel to the draconic mysteries', 'The twin testament of timelessness', 
        'The twisting paths of late tradition', 'The twisting path of americanization', 'The unfinished stations of the cross', 
        'The veiled transmutation of sacrifice', 'Through antigravity and time-travel', 'Timelessly circle the occult number 666', 
        'Titanic miniaturization capitalism', 'Titanic miniaturization of the digit', 'To explore apocalyptic numerology', 
        'Towards a titanocratic conflagration', 'Towers of titanic miniaturization', 'Trigonometry and dark christianity', 
        'Twists in comparative cosmography', 'Ways through the beast of revelation', 'What thing of night has now ascended here', 
        'Yoga and the hollow earth underground', "A cipher of the epileptics' elucidations", 'The qabbalistically catatonic passages', 
        'The galvanisation protecting a pulse', 'Utterly hysteric for angel schisms', 'Coding occidental schismatic schematics', 
        'The subtle pulse of a schismatic ethos', 'The blanket of the deep dark nothingness', 'The cthuhlu numerological utterance', 
        'Cthulhu utterly pulsating the deep', 'It is the abyss of utter annihilation', 'The nothingness, utter annihilation', 
        "The utter hell-scape of a beasts' pulses"], 
    680: ['Atlantean ordinances of the exogeneous'], 
    777: ['Mary gave birth to the only true king, jesus']
}







function newCalculation(){
    let suggestions = document.getElementById("suggestions").value;
    let lettersum=0

    for (let i = 0; i < suggestions.length; i++) {
        let letter = suggestions.charAt(i);
        if (letter in letterNumber){
            lettersum=lettersum+letterNumber[letter];
        }
    document.getElementById("resultNew").innerHTML = lettersum
    }

    if (suggestions.length == 0) {
        document.getElementById("resultNew").innerHTML = "";
    }

    if (Object.keys(aqDict).includes(String(lettersum))) {
        if (Object.values(aqDict[lettersum]).includes(suggestions.toLowerCase().replace(/[^a-zA-Z0-9]/g, ''))) {
            document.getElementById("existNew").innerHTML = "(already exists)";
        }
        else{
            document.getElementById("existNew").innerHTML = "";
        }
    }

    else{
        document.getElementById("existNew").innerHTML = "";
    }
    return
}















function phraseCalculation(){
    let phrase = document.getElementById("phrase").value;
    let search = document.getElementById("search").value;
    let lettersum=0
    let lettersum2=0
    let currentText=0
    let currentSum=0
    let currentSumPast=0
    let special=0;



    if (search=="" && phrase != ""){
        document.getElementById("existPhrase").innerHTML = "";

        let valuesIn = [];

        for (let e = 0; e < Object.keys(aqDict).length; e++){
            for (let i = 0; i < Object.values(aqDict)[e].length; i++){
                valuesIn.push(Object.values(aqDict)[e][i]);
            }
        }


        const isIn = query => valuesIn.filter(s => s.includes(query));
        

        document.getElementById("groupSpe1").innerHTML = "";
        document.getElementById("groupSpe2").innerHTML = "";
        document.getElementById("groupSpe3").innerHTML = "";

        valuesIn = isIn(phrase.toLowerCase().replace(/[^a-zA-Z0-9]/g, ''));

        document.getElementById("existPhrase").innerHTML = " / " + String(valuesIn.length);
        
        for (let i = 0; i < valuesIn.length; i++) {
            lettersum2=0

            for (let e = 0; e < Object.keys(aqDictShow).length; e++){
                for (let ie = 0; ie < Object.values(aqDictShow)[e].length; ie++){
                    if (Object.values(aqDictShow)[e][ie].toLowerCase().replace(/[^a-zA-Z0-9]/g, '') == valuesIn[i]){
                        currentText=Object.values(aqDictShow)[e][ie];
                    }
                }
            }

            for (let i = 0; i < currentText.length; i++) {
                let letter = currentText.charAt(i);
                if (letter in letterNumber){
                    lettersum2=lettersum2+letterNumber[letter];
                }
            }
            currentSum=lettersum2;

            if (i<=valuesIn.length/3){
                if (currentSum!=currentSumPast){
                    let newDiv = document.createElement('div');
                    newDiv.setAttribute("id", currentSum);
                    newDiv.innerHTML = "<h3 style='margin-top: 2em'>" + currentSum + "AQ</h3>" + "<p>" + currentText + "</p>";
                    document.getElementById("groupSpe1").appendChild(newDiv);
                }
                else{
                    let newP = document.createElement('p');
                    newP.innerHTML = currentText;
                    document.getElementById(currentSum).appendChild(newP);
                }
            }

            else if (i>(valuesIn.length/3) && i<=(valuesIn.length/3)*2){
                if (currentSum!=currentSumPast){
                    let newDiv = document.createElement('div');
                    newDiv.setAttribute("id", currentSum);
                    newDiv.innerHTML = "<h3 style='margin-top: 2em'>" + currentSum + "AQ</h3>" + "<p>" + currentText + "</p>";
                    document.getElementById("groupSpe2").appendChild(newDiv);
                }
                else{
                    if ((i-1) == parseInt(valuesIn.length/3)){
                        let newDiv = document.createElement('div');
                        newDiv.setAttribute("id", String(currentSum) + "-2");
                        newDiv.innerHTML = "<h3 style='margin-top: 2em'>" + currentSum + "AQ</h3>" + "<p>" + currentText + "</p>";
                        document.getElementById("groupSpe2").appendChild(newDiv);
                        special=currentSum;
                    }
                    else if ((i-1) != parseInt(valuesIn.length/3) && special==currentSum){
                        let newP = document.createElement('p');
                        newP.innerHTML = currentText;
                        document.getElementById(String(currentSum) + "-2").appendChild(newP);
                    }
                    else if ((i-1) != parseInt(valuesIn.length/3) && special!=currentSum){
                        let newP = document.createElement('p');
                        newP.innerHTML = currentText;
                        document.getElementById(currentSum).appendChild(newP);
                    }
                }
            }

            else{
                if (currentSum!=currentSumPast){
                    let newDiv = document.createElement('div');
                    newDiv.setAttribute("id", currentSum);
                    newDiv.innerHTML = "<h3 style='margin-top: 2em'>" + currentSum + "AQ</h3>" + "<p>" + currentText + "</p>";
                    document.getElementById("groupSpe3").appendChild(newDiv);
                }
                else{
                    if ((i-1) == parseInt((valuesIn.length/3)*2)){
                        let newDiv = document.createElement('div');
                        newDiv.setAttribute("id", String(currentSum) + "-2");
                        newDiv.innerHTML = "<h3 style='margin-top: 2em'>" + currentSum + "AQ</h3>" + "<p>" + currentText + "</p>";
                        document.getElementById("groupSpe3").appendChild(newDiv);
                        special=currentSum;
                    }
                    else if ((i-1) != parseInt((valuesIn.length/3)*2) && special==currentSum) {
                        let newP = document.createElement('p');
                        newP.innerHTML = currentText;
                        document.getElementById(String(currentSum) + "-2").appendChild(newP);
                    }
                    else if ((i-1) != parseInt((valuesIn.length/3)*2) && special!=currentSum) {
                        let newP = document.createElement('p');
                        newP.innerHTML = currentText;
                        document.getElementById(currentSum).appendChild(newP);
                    }
                }
            }
            currentSumPast=currentSum;
        }
        document.getElementById("newTitle").innerHTML = "";
    }

    else if(search != "" && phrase != ""){
        if(Object.keys(aqDict).includes(String(parseInt(search)))){
            let valuesIn = Object.values(aqDict[search]);
            const isIn = query => valuesIn.filter(s => s.includes(query));

            document.getElementById("groupSpe1").innerHTML = "";
            document.getElementById("groupSpe2").innerHTML = "";
            document.getElementById("groupSpe3").innerHTML = "";

            valuesIn = isIn(phrase.toLowerCase().replace(/[^a-zA-Z0-9]/g, ''));

            document.getElementById("existPhrase").innerHTML = " / " + String(valuesIn.length);


            for (let i = 0; i < valuesIn.length; i++) {

                for (let e = 0; e < Object.values(aqDict[search]).length; e++){
                    if (Object.values(aqDictShow[search])[e].toLowerCase().replace(/[^a-zA-Z0-9]/g, '') == valuesIn[i]){
                        currentText=Object.values(aqDictShow[search])[e]
                    }
                }

                if (i==0 || i%3==0){
                    let newDiv = document.createElement('div');
                    newDiv.innerHTML = "<p>" + currentText + "</p>";
                    document.getElementById("groupSpe1").appendChild(newDiv);
                }
                else if(i%3!=0 && (i-1)%3==0){
                    let newDiv = document.createElement('div');
                    newDiv.innerHTML = "<p>" + currentText + "</p>";
                    document.getElementById("groupSpe2").appendChild(newDiv);
                }
                else if(i%3!=0 && (i-1)%3!=0){
                    let newDiv = document.createElement('div');
                    newDiv.innerHTML = "<p>" +currentText + "</p>";
                    document.getElementById("groupSpe3").appendChild(newDiv);
                }
            }
        }

        else{
            document.getElementById("existPhrase").innerHTML = " / (Change Sum)";
        }
    }
    for (let i = 0; i < phrase.length; i++) {
        let letter = phrase.charAt(i);
        if (letter in letterNumber){
            lettersum=lettersum+letterNumber[letter];
        }
    document.getElementById("resultPhrase").innerHTML = lettersum
    }

    if (phrase.length == 0) {
        document.getElementById("resultPhrase").innerHTML = "";
    }
    return
}




















function sumCalculation(){
    let search = document.getElementById("search").value;

    if (document.getElementById("phrase").value == ""){
        document.getElementById("existPhrase").innerHTML = "";

        if (Object.keys(aqDict).includes(String(parseInt(search)))) {
            document.getElementById("resultSum").innerHTML = Object.values(aqDict[search]).length;
            for (let i = 0; i < Object.values(aqDictShow[search]).length; i++) {
                if (i==0){
                    document.getElementById("newTitle").innerHTML = search + "AQ";
                }
                if (i==0 || i%3==0){
                    let newDiv = document.createElement('div');
                    newDiv.innerHTML = "<p>" + Object.values(aqDictShow[search])[i] + "</p>";
                    document.getElementById("groupSpe1").appendChild(newDiv);
                }
                else if(i%3!=0 && (i-1)%3==0){
                    let newDiv = document.createElement('div');
                    newDiv.innerHTML = "<p>" + Object.values(aqDictShow[search])[i] + "</p>";
                    document.getElementById("groupSpe2").appendChild(newDiv);
                }
                else if(i%3!=0 && (i-1)%3!=0){
                    let newDiv = document.createElement('div');
                    newDiv.innerHTML = "<p>" + Object.values(aqDictShow[search])[i] + "</p>";
                    document.getElementById("groupSpe3").appendChild(newDiv);
                }
            }
        }


        else{
            document.getElementById("resultSum").innerHTML = "0";
            document.getElementById("newTitle").innerHTML = "";
            document.getElementById("groupSpe1").innerHTML = "";
            document.getElementById("groupSpe2").innerHTML = "";
            document.getElementById("groupSpe3").innerHTML = "";
        }
    

        if (search != ""){
            document.getElementById("contentAll").style.display = "none";
            document.getElementById("allSug").style.display = "none";
            document.getElementById("all").innerHTML = "See All";
            document.getElementById("contentSpecial").style.display = "block";
        }
    }
    return
}















function changeDisplay() {
    if(document.getElementById("contentAll").style.display == "none" || document.getElementById("contentAll").style.display == ""){
        document.getElementById("contentAll").style.display = "block";
        document.getElementById("all").innerHTML = "Hide All";
        document.getElementById("contentSpecial").style.display = "none";
        document.getElementById("allSug").style.display = "inline-block";
    }

    else if(document.getElementById("contentAll").style.display == "block"){
        document.getElementById("contentAll").style.display = "none";
        document.getElementById("all").innerHTML = "See All";
        document.getElementById("contentSpecial").style.display = "block";
        document.getElementById("allSug").style.display = "none";
    }
    return
}
















function allLoad() {
    let lettersum2=0
    let currentText=0
    let currentSum=0
    let currentSumPast=0
    let special=0;

    let valuesIn = [];
    for (let e = 0; e < Object.keys(aqDict).length; e++){
        for (let i = 0; i < Object.values(aqDict)[e].length; i++){
            valuesIn.push(Object.values(aqDict)[e][i]);
        }
    }

    
    for (let i = 0; i < valuesIn.length; i++) {
        lettersum2=0

        for (let e = 0; e < Object.keys(aqDictShow).length; e++){
            for (let ie = 0; ie < Object.values(aqDictShow)[e].length; ie++){
                if (Object.values(aqDictShow)[e][ie].toLowerCase().replace(/[^a-zA-Z0-9]/g, '') == valuesIn[i]){
                    currentText=Object.values(aqDictShow)[e][ie];
                }
            }
        }

        for (let i = 0; i < currentText.length; i++) {
            let letter = currentText.charAt(i);
            if (letter in letterNumber){
                lettersum2=lettersum2+letterNumber[letter];
            }
        }
        currentSum=lettersum2;

        if (i<=valuesIn.length/3){
            if (currentSum!=currentSumPast){
                let newDiv = document.createElement('div');
                newDiv.setAttribute("id", currentSum);
                newDiv.innerHTML = "<h3 style='margin-top: 2em'>" + currentSum + "AQ</h3>" + "<p>" + currentText + "</p>";
                document.getElementById("group1").appendChild(newDiv);
            }
            else{
                let newP = document.createElement('p');
                newP.innerHTML = currentText;
                document.getElementById(currentSum).appendChild(newP);
            }
        }

        else if (i>(valuesIn.length/3) && i<=(valuesIn.length/3)*2){
            if (currentSum!=currentSumPast){
                let newDiv = document.createElement('div');
                newDiv.setAttribute("id", currentSum);
                newDiv.innerHTML = "<h3 style='margin-top: 2em'>" + currentSum + "AQ</h3>" + "<p>" + currentText + "</p>";
                document.getElementById("group2").appendChild(newDiv);
            }
            else{
                if ((i-1) == parseInt(valuesIn.length/3)){
                    let newDiv = document.createElement('div');
                    newDiv.setAttribute("id", String(currentSum) + "-2");
                    newDiv.innerHTML = "<h3 style='margin-top: 2em'>" + currentSum + "AQ</h3>" + "<p>" + currentText + "</p>";
                    document.getElementById("group2").appendChild(newDiv);
                    special=currentSum;
                }
                else if ((i-1) != parseInt(valuesIn.length/3) && special==currentSum){
                    let newP = document.createElement('p');
                    newP.innerHTML = currentText;
                    document.getElementById(String(currentSum) + "-2").appendChild(newP);
                }
                else if ((i-1) != parseInt(valuesIn.length/3) && special!=currentSum){
                    let newP = document.createElement('p');
                    newP.innerHTML = currentText;
                    document.getElementById(currentSum).appendChild(newP);
                }
            }
        }

        else{
            if (currentSum!=currentSumPast){
                let newDiv = document.createElement('div');
                newDiv.setAttribute("id", currentSum);
                newDiv.innerHTML = "<h3 style='margin-top: 2em'>" + currentSum + "AQ</h3>" + "<p>" + currentText + "</p>";
                document.getElementById("group3").appendChild(newDiv);
            }
            else{
                if ((i-1) == parseInt((valuesIn.length/3)*2)){
                    let newDiv = document.createElement('div');
                    newDiv.setAttribute("id", String(currentSum) + "-2");
                    newDiv.innerHTML = "<h3 style='margin-top: 2em'>" + currentSum + "AQ</h3>" + "<p>" + currentText + "</p>";
                    document.getElementById("group3").appendChild(newDiv);
                    special=currentSum;
                }
                else if ((i-1) != parseInt((valuesIn.length/3)*2) && special==currentSum) {
                    let newP = document.createElement('p');
                    newP.innerHTML = currentText;
                    document.getElementById(String(currentSum) + "-2").appendChild(newP);
                }
                else if ((i-1) != parseInt((valuesIn.length/3)*2) && special!=currentSum) {
                    let newP = document.createElement('p');
                    newP.innerHTML = currentText;
                    document.getElementById(currentSum).appendChild(newP);
                }
            }
        }
        currentSumPast=currentSum;
    }
    document.getElementById("contentAll").style.display = "none";
}