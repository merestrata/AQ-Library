

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
        console.log("yes");
        if (Object.values(aqDict[lettersum]).includes(suggestions.toLowerCase().replace(/[^a-zA-Z0-9]/g, ''))) {
            console.log("YES");
            document.getElementById("existNew").innerHTML = "(already exists)";
        }
        else{
            console.log("NO");
            document.getElementById("existNew").innerHTML = "";
        }
    }

    else{
        console.log("no");
        document.getElementById("existNew").innerHTML = "";
    }

    return
}


function phraseCalculation(){
    let phrase = document.getElementById("phrase").value;
    let lettersum=0

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

    if (Object.keys(aqDict).includes(String(lettersum))) {
        if (Object.values(aqDict[lettersum]).includes(phrase.toLowerCase().replace(/[^a-zA-Z0-9]/g, ''))) {
            document.getElementById("existPhrase").innerHTML = "";
        }
        else{
            document.getElementById("existPhrase").innerHTML = " &nbsp (do not exist yet)";
        }
    }

    else{
        document.getElementById("existPhrase").innerHTML = " &nbsp (do not exist yet)";
    }

    return
}