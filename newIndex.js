global.generateUUID = function(){
    var d = new Date().getTime();
    if(typeof window !== "undefined" && window && window.performance && typeof window.performance.now === "function"){
        d += performance.now(); //use high-precision timer if available
    }
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
}

global.cassPromisify = function(p,success,failure){
    if (success !== undefined && success != null)
        p.then(success);
    if (failure !== undefined && failure != null)
        p.catch(failure);
    return p;
}
global.cassReturnAsPromise = function(o,success,failure){
    let p = new Promise((resolve,reject)=>{
        resolve(o);
    });
    if (success !== undefined && success != null)
        p.then(success);
    if (failure !== undefined && failure != null)
        p.catch(failure);
    return p;
}

global.crypto = null;
try {
  crypto = require('crypto').webcrypto;
} catch (err) {
  console.log("Webcrypto not available.");
}

var bon = require('browser-or-node');

if (bon.isBrowser) {
  	// do browser only stuff
}

if (bon.isNode) {
	// do node.js only stuff
	var isNodeJs = {};
	var request = require("request");
}

if (global.forge === undefined)
	if (typeof __webpack_require__ === 'function')
	{
		global.forge = require("forge");
	}
	else
	{
		isNodeJs.forgeType = "node";
		global.forge = require("node-forge");
	}
else
	var forge = global.forge;


    JavalikeEquals = function(value){
        if (value == null)
            return false;
        if (value.valueOf)
            return this.valueOf() === value.valueOf();
        return this === value;
    };
    
    JavalikeGetClass = function(){
        return this.constructor;
    };
    
    /* String */
    if (!String.prototype.equals) {
        String.prototype.equals=JavalikeEquals;
    }
    if (!String.prototype.startsWith) {
        String.prototype.startsWith=function(start, from){
            var f = from != null ? from : 0;
            return this.substring(f, f + start.length) == start;
        }
    }
    if (!String.prototype.endsWith) {
        String.prototype.endsWith=function(end){
            if (end == null)
                return false;
            if (this.length < end.length)
                return false;
            return this.substring(this.length - end.length, this.length) == end;
        }
    }
    if (!String.prototype.trim) {
        stjs.trimLeftRegExp = /^\s+/;
        stjs.trimRightRegExp = /\s+$/;
        String.prototype.trim = function() {
            return this.replace(stjs.trimLeftRegExp, "").replace(stjs.trimRightRegExp, "");
        }
    }
    if (!String.prototype.matches){
        String.prototype.matches=function(regexp){
            return this.match("^" + regexp + "$") != null;
        }
    }
    if (!String.prototype.compareTo){
        String.prototype.compareTo=function(other){
            if (other == null)
                return 1;
            if (this < other)
                return -1;
            if (this == other)
                return 0;
            return 1;
        }
    }
    
    if (!String.prototype.compareToIgnoreCase){
        String.prototype.compareToIgnoreCase=function(other){
            if (other == null)
                return 1;
            return this.toLowerCase().compareTo(other.toLowerCase());
        }
    }
    
    if (!String.prototype.equalsIgnoreCase){
        String.prototype.equalsIgnoreCase=function(other){
            if (other == null)
                return false;
            return this.toLowerCase() === other.toLowerCase();
        }
    }
    
    if (!String.prototype.codePointAt){
        String.prototype.codePointAt=String.prototype.charCodeAt;
    }
    
    if (!String.prototype.replaceAll){
        String.prototype.replaceAll=function(regexp, replace){
            return this.replace(new RegExp(regexp, "g"), replace);
        }
    }
    
    if (!String.prototype.replaceFirst){
        String.prototype.replaceFirst=function(regexp, replace){
            return this.replace(new RegExp(regexp), replace);
        }
    }
    
    if (!String.prototype.regionMatches){
        String.prototype.regionMatches=function(ignoreCase, toffset, other, ooffset, len){
            if (arguments.length == 4){
                len=arguments[3];
                ooffset=arguments[2];
                other=arguments[1];
                toffset=arguments[0];
                ignoreCase=false;
            }
            if (toffset < 0 || ooffset < 0 || other == null || toffset + len > this.length || ooffset + len > other.length)
                return false;
            var s1 = this.substring(toffset, toffset + len);
            var s2 = other.substring(ooffset, ooffset + len);
            return ignoreCase ? s1.equalsIgnoreCase(s2) : s1 === s2;
        }
    }
    
    if(!String.prototype.contains){
        String.prototype.contains=function(it){
            return this.indexOf(it)>=0;
        };
    }
    
    if(!String.prototype.getClass){
        String.prototype.getClass=JavalikeGetClass;
    }
    
    
    //force valueof to match the Java's behavior
    String.valueOf=function(value){
        return new String(value);
    };
    
    /* Number */
    var Byte=Number;
    var Double=Number;
    var Float=Number;
    var Integer=Number;
    var Long=Number;
    var Short=Number;
    
    /* type conversion - approximative as Javascript only has integers and doubles */
    if (!Number.prototype.intValue) {
        Number.prototype.intValue=function(){
            return parseInt(this);
        }
    }
    if (!Number.prototype.shortValue) {
        Number.prototype.shortValue=function(){
            return parseInt(this);
        }
    }
    if (!Number.prototype.longValue) {
        Number.prototype.longValue=function(){
            return parseInt(this);
        }
    }
    if (!Number.prototype.byteValue) {
        Number.prototype.byteValue=function(){
            return parseInt(this);
        }
    }
    
    if (!Number.prototype.floatValue) {
        Number.prototype.floatValue=function(){
            return parseFloat(this);
        }
    }
    
    if (!Number.prototype.doubleValue) {
        Number.prototype.doubleValue=function(){
            return parseFloat(this);
        }
    }
    
    if (!Number.parseInt) {
        Number.parseInt = parseInt;
    }
    if (!Number.parseShort) {
        Number.parseShort = parseInt;
    }
    if (!Number.parseLong) {
        Number.parseLong = parseInt;
    }
    if (!Number.parseByte) {
        Number.parseByte = parseInt;
    }
    
    if (!Number.parseDouble) {
        Number.parseDouble = parseFloat;
    }
    
    if (!Number.parseFloat) {
        Number.parseFloat = parseFloat;
    }
    
    if (!Number.isNaN) {
        Number.isNaN = isNaN;
    }
    
    if (!Number.prototype.isNaN) {
        Number.prototype.isNaN = function() {
            return isNaN(this);
        }
    }
    if (!Number.prototype.equals) {
        Number.prototype.equals=JavalikeEquals;
    }
    if(!Number.prototype.getClass){
        Number.prototype.getClass=JavalikeGetClass;
    }
    
    //force valueof to match approximately the Java's behavior (for Integer.valueOf it returns in fact a double)
    Number.valueOf=function(value){
        return new Number(value).valueOf();
    }
    
    /* Boolean */
    if (!Boolean.prototype.equals) {
        Boolean.prototype.equals=JavalikeEquals;
    }
    if(!Boolean.prototype.getClass){
        Boolean.prototype.getClass=JavalikeGetClass;
    }
    
    //force valueof to match the Java's behavior
    Boolean.valueOf=function(value){
        return new Boolean(value).valueOf();
    }
    

global.EcArray = require("./src/com/eduworks/ec/array/EcArray.js");
global.EcObject = require("./src/com/eduworks/ec/array/EcObject.js");
global.EcAes = require("./src/com/eduworks/ec/crypto/EcAes.js");
global.EcAesParameters = require("./src/com/eduworks/ec/crypto/EcAesParameters.js");
global.EcCrypto = require("./src/com/eduworks/ec/crypto/EcCrypto.js");
global.EcPk = require("./src/com/eduworks/ec/crypto/EcPk.js");
global.EcPpk = require("./src/com/eduworks/ec/crypto/EcPpk.js");
global.EcRsaOaep = require("./src/com/eduworks/ec/crypto/EcRsaOaep.js");
global.EcDate = require("./src/com/eduworks/ec/date/EcDate.js");
global.Hypergraph = require("./src/com/eduworks/ec/graph/Hypergraph.js");
global.Triple = require("./src/com/eduworks/ec/graph/Triple.js");
global.EcRemote = require("./src/com/eduworks/ec/remote/EcRemote.js");
global.EcLocalStorage = require("./src/com/eduworks/ec/storage/EcLocalStorage.js");
global.EcAsyncTask = require("./src/com/eduworks/ec/task/EcAsyncTask.js");
global.Task = require("./src/com/eduworks/ec/task/Task.js");
global.Exporter = require("./src/org/cass/exporter/Exporter.js");
global.Importer = require("./src/org/cass/importer/Importer.js");
global.RemoteIdentityManagerInterface = require("./src/org/cassproject/ebac/identity/remote/RemoteIdentityManagerInterface.js");
global.Cass = require("./src/org/cassproject/schema/cass/Cass.js");
global.AssertionCodebook = require("./src/org/cassproject/schema/cass/profile/AssertionCodebook.js");
global.Ebac = require("./src/org/cassproject/schema/general/Ebac.js");
global.General = require("./src/org/cassproject/schema/general/General.js");
global.EcLinkedData = require("./src/org/json/ld/EcLinkedData.js");
global.EcAsyncHelper = require("./src/com/eduworks/ec/array/EcAsyncHelper.js");
global.EcAesCtr = require("./src/com/eduworks/ec/crypto/EcAesCtr.js");
global.EcAesCtrAsyncWorker = require("./src/com/eduworks/ec/crypto/EcAesCtrAsyncWorker.js");
global.EcRsaOaepAsyncWorker = require("./src/com/eduworks/ec/crypto/EcRsaOaepAsyncWorker.js");
global.Graph = require("./src/com/eduworks/ec/graph/Graph.js");
global.EcAsyncTaskWorker = require("./src/com/eduworks/ec/task/EcAsyncTaskWorker.js");
global.EbacContact = require("./src/com/eduworks/schema/ebac/EbacContact.js");
global.EbacCredential = require("./src/com/eduworks/schema/ebac/EbacCredential.js");
global.EbacCredentialRequest = require("./src/com/eduworks/schema/ebac/EbacCredentialRequest.js");
global.EbacCredentials = require("./src/com/eduworks/schema/ebac/EbacCredentials.js");
global.EbacEncryptedSecret = require("./src/com/eduworks/schema/ebac/EbacEncryptedSecret.js");
global.EbacSignature = require("./src/com/eduworks/schema/ebac/EbacSignature.js");
global.EcContact = require("./src/org/cassproject/ebac/identity/EcContact.js");
global.EcIdentity = require("./src/org/cassproject/ebac/identity/EcIdentity.js");
global.EcRemoteLinkedData = require("./src/org/cassproject/schema/general/EcRemoteLinkedData.js");
global.ce = {};
global.ce.Agent = require("./src/org/credentialengine/Agent.js");
global.ce.AlignmentMap = require("./src/org/credentialengine/AlignmentMap.js");
global.ce.Assessment = require("./src/org/credentialengine/Assessment.js");
global.ce.Competency = require("./src/org/credentialengine/Competency.js");
global.ce.CompetencyFramework = require("./src/org/credentialengine/CompetencyFramework.js");
global.ce.ConditionManifest = require("./src/org/credentialengine/ConditionManifest.js");
global.ce.ContactPoint = require("./src/org/credentialengine/ContactPoint.js");
global.ce.CostManifest = require("./src/org/credentialengine/CostManifest.js");
global.ce.CredentialAssertion = require("./src/org/credentialengine/CredentialAssertion.js");
global.ce.CredentialFramework = require("./src/org/credentialengine/CredentialFramework.js");
global.ce.CredentialOrganization = require("./src/org/credentialengine/CredentialOrganization.js");
global.ce.CredentialPerson = require("./src/org/credentialengine/CredentialPerson.js");
global.ce.DurationProfile = require("./src/org/credentialengine/DurationProfile.js");
global.ce.FinancialAssistanceProfile = require("./src/org/credentialengine/FinancialAssistanceProfile.js");
global.ce.IdentifierValue = require("./src/org/credentialengine/IdentifierValue.js");
global.ce.IndustryClassification = require("./src/org/credentialengine/IndustryClassification.js");
global.ce.InstructionalProgramClassification = require("./src/org/credentialengine/InstructionalProgramClassification.js");
global.ce.LearningOpportunity = require("./src/org/credentialengine/LearningOpportunity.js");
global.ce.OccupationClassification = require("./src/org/credentialengine/OccupationClassification.js");
global.ce.Place = require("./src/org/credentialengine/Place.js");
global.ce.ProficiencyScale = require("./src/org/credentialengine/ProficiencyScale.js");
global.ce.QACredentialOrganization = require("./src/org/credentialengine/QACredentialOrganization.js");
global.schema = {};
global.schema.Thing = require("./src/org/schema/Thing.js");
global.Collection = require("./src/org/w3/skos/Collection.js");
global.Concept = require("./src/org/w3/skos/Concept.js");
global.ConceptScheme = require("./src/org/w3/skos/ConceptScheme.js");
global.OrderedCollection = require("./src/org/w3/skos/OrderedCollection.js");
global.EcAesCtrAsync = require("./src/com/eduworks/ec/crypto/EcAesCtrAsync.js");
global.EcRsaOaepAsync = require("./src/com/eduworks/ec/crypto/EcRsaOaepAsync.js");
global.EcDirectedGraph = require("./src/com/eduworks/ec/graph/EcDirectedGraph.js");
global.EcAsyncTaskManager = require("./src/com/eduworks/ec/task/EcAsyncTaskManager.js");
global.EbacContactGrant = require("./src/com/eduworks/schema/ebac/EbacContactGrant.js");
global.EbacCredentialCommit = require("./src/com/eduworks/schema/ebac/EbacCredentialCommit.js");
global.EbacEncryptedValue = require("./src/com/eduworks/schema/ebac/EbacEncryptedValue.js");
global.EcIdentityManager = require("./src/org/cassproject/ebac/identity/EcIdentityManager.js");
global.EcRekeyRequest = require("./src/org/cassproject/ebac/identity/EcRekeyRequest.js");
global.EcRemoteIdentityManager = require("./src/org/cassproject/ebac/identity/remote/EcRemoteIdentityManager.js");
global.OAuth2FileBasedRemoteIdentityManager = require("./src/org/cassproject/ebac/identity/remote/OAuth2FileBasedRemoteIdentityManager.js");
global.EcEncryptedValue = require("./src/org/cassproject/ebac/repository/EcEncryptedValue.js");
global.EcRepository = require("./src/org/cassproject/ebac/repository/EcRepository.js");
global.GeneralFile = require("./src/org/cassproject/general/repository/GeneralFile.js");
global.Course = require("./src/org/credentialengine/Course.js");
global.schema.Action = require("./src/org/schema/Action.js");
global.schema.AssessAction = require("./src/org/schema/AssessAction.js");
global.schema.ChooseAction = require("./src/org/schema/ChooseAction.js");
global.schema.ConsumeAction = require("./src/org/schema/ConsumeAction.js");
global.schema.ControlAction = require("./src/org/schema/ControlAction.js");
global.schema.CreateAction = require("./src/org/schema/CreateAction.js");
global.schema.CreativeWork = require("./src/org/schema/CreativeWork.js");
global.schema.CreativeWorkSeason = require("./src/org/schema/CreativeWorkSeason.js");
global.schema.CreativeWorkSeries = require("./src/org/schema/CreativeWorkSeries.js");
global.schema.DataCatalog = require("./src/org/schema/DataCatalog.js");
global.schema.Dataset = require("./src/org/schema/Dataset.js");
global.schema.DeactivateAction = require("./src/org/schema/DeactivateAction.js");
global.schema.DigitalDocument = require("./src/org/schema/DigitalDocument.js");
global.schema.DrawAction = require("./src/org/schema/DrawAction.js");
global.schema.DrinkAction = require("./src/org/schema/DrinkAction.js");
global.schema.EatAction = require("./src/org/schema/EatAction.js");
global.schema.EcCreativeWork = require("./src/org/schema/EcCreativeWork.js");
global.schema.Episode = require("./src/org/schema/Episode.js");
global.schema.FilmAction = require("./src/org/schema/FilmAction.js");
global.schema.FindAction = require("./src/org/schema/FindAction.js");
global.schema.Game = require("./src/org/schema/Game.js");
global.schema.IgnoreAction = require("./src/org/schema/IgnoreAction.js");
global.schema.InstallAction = require("./src/org/schema/InstallAction.js");
global.schema.Intangible = require("./src/org/schema/Intangible.js");
global.schema.InteractAction = require("./src/org/schema/InteractAction.js");
global.schema.Invoice = require("./src/org/schema/Invoice.js");
global.schema.ItemList = require("./src/org/schema/ItemList.js");
global.schema.JobPosting = require("./src/org/schema/JobPosting.js");
global.schema.JoinAction = require("./src/org/schema/JoinAction.js");
global.schema.Language = require("./src/org/schema/Language.js");
global.schema.LeaveAction = require("./src/org/schema/LeaveAction.js");
global.schema.ListenAction = require("./src/org/schema/ListenAction.js");
global.schema.ListItem = require("./src/org/schema/ListItem.js");
global.schema.MarryAction = require("./src/org/schema/MarryAction.js");
global.schema.MediaObject = require("./src/org/schema/MediaObject.js");
global.schema.Menu = require("./src/org/schema/Menu.js");
global.schema.MenuItem = require("./src/org/schema/MenuItem.js");
global.schema.MenuSection = require("./src/org/schema/MenuSection.js");
global.schema.Message = require("./src/org/schema/Message.js");
global.schema.MoveAction = require("./src/org/schema/MoveAction.js");
global.schema.Movie = require("./src/org/schema/Movie.js");
global.schema.MovieSeries = require("./src/org/schema/MovieSeries.js");
global.schema.MusicComposition = require("./src/org/schema/MusicComposition.js");
global.schema.MusicPlaylist = require("./src/org/schema/MusicPlaylist.js");
global.schema.MusicRecording = require("./src/org/schema/MusicRecording.js");
global.schema.MusicRelease = require("./src/org/schema/MusicRelease.js");
global.schema.MusicVideoObject = require("./src/org/schema/MusicVideoObject.js");
global.schema.NoteDigitalDocument = require("./src/org/schema/NoteDigitalDocument.js");
global.schema.Offer = require("./src/org/schema/Offer.js");
global.schema.OfferCatalog = require("./src/org/schema/OfferCatalog.js");
global.schema.Order = require("./src/org/schema/Order.js");
global.schema.OrderItem = require("./src/org/schema/OrderItem.js");
global.schema.Organization = require("./src/org/schema/Organization.js");
global.schema.OrganizeAction = require("./src/org/schema/OrganizeAction.js");
global.schema.PaintAction = require("./src/org/schema/PaintAction.js");
global.schema.Painting = require("./src/org/schema/Painting.js");
global.schema.ParcelDelivery = require("./src/org/schema/ParcelDelivery.js");
global.schema.PerformingGroup = require("./src/org/schema/PerformingGroup.js");
global.schema.Periodical = require("./src/org/schema/Periodical.js");
global.schema.Permit = require("./src/org/schema/Permit.js");
global.schema.Person = require("./src/org/schema/Person.js");
global.schema.Photograph = require("./src/org/schema/Photograph.js");
global.schema.PhotographAction = require("./src/org/schema/PhotographAction.js");
global.schema.Place = require("./src/org/schema/Place.js");
global.schema.PlanAction = require("./src/org/schema/PlanAction.js");
global.schema.PlayAction = require("./src/org/schema/PlayAction.js");
global.schema.PresentationDigitalDocument = require("./src/org/schema/PresentationDigitalDocument.js");
global.schema.Product = require("./src/org/schema/Product.js");
global.schema.ProductModel = require("./src/org/schema/ProductModel.js");
global.schema.ProgramMembership = require("./src/org/schema/ProgramMembership.js");
global.schema.PropertyValueSpecification = require("./src/org/schema/PropertyValueSpecification.js");
global.schema.PublicationIssue = require("./src/org/schema/PublicationIssue.js");
global.schema.PublicationVolume = require("./src/org/schema/PublicationVolume.js");
global.schema.Quantity = require("./src/org/schema/Quantity.js");
global.schema.Question = require("./src/org/schema/Question.js");
global.schema.RadioEpisode = require("./src/org/schema/RadioEpisode.js");
global.schema.RadioSeason = require("./src/org/schema/RadioSeason.js");
global.schema.RadioSeries = require("./src/org/schema/RadioSeries.js");
global.schema.Rating = require("./src/org/schema/Rating.js");
global.schema.ReactAction = require("./src/org/schema/ReactAction.js");
global.schema.ReadAction = require("./src/org/schema/ReadAction.js");
global.schema.Recipe = require("./src/org/schema/Recipe.js");
global.schema.RegisterAction = require("./src/org/schema/RegisterAction.js");
global.schema.Reservation = require("./src/org/schema/Reservation.js");
global.schema.ReservationPackage = require("./src/org/schema/ReservationPackage.js");
global.schema.ReserveAction = require("./src/org/schema/ReserveAction.js");
global.schema.Residence = require("./src/org/schema/Residence.js");
global.schema.ResumeAction = require("./src/org/schema/ResumeAction.js");
global.schema.Review = require("./src/org/schema/Review.js");
global.schema.ReviewAction = require("./src/org/schema/ReviewAction.js");
global.schema.Role = require("./src/org/schema/Role.js");
global.schema.ScheduleAction = require("./src/org/schema/ScheduleAction.js");
global.schema.ScreeningEvent = require("./src/org/schema/ScreeningEvent.js");
global.schema.Sculpture = require("./src/org/schema/Sculpture.js");
global.schema.SearchAction = require("./src/org/schema/SearchAction.js");
global.schema.Season = require("./src/org/schema/Season.js");
global.schema.Seat = require("./src/org/schema/Seat.js");
global.schema.Series = require("./src/org/schema/Series.js");
global.schema.Service = require("./src/org/schema/Service.js");
global.schema.ServiceChannel = require("./src/org/schema/ServiceChannel.js");
global.schema.SocialEvent = require("./src/org/schema/SocialEvent.js");
global.schema.SoftwareApplication = require("./src/org/schema/SoftwareApplication.js");
global.schema.SoftwareSourceCode = require("./src/org/schema/SoftwareSourceCode.js");
global.schema.SomeProducts = require("./src/org/schema/SomeProducts.js");
global.schema.SportsEvent = require("./src/org/schema/SportsEvent.js");
global.schema.SportsOrganization = require("./src/org/schema/SportsOrganization.js");
global.schema.SportsTeam = require("./src/org/schema/SportsTeam.js");
global.schema.SpreadsheetDigitalDocument = require("./src/org/schema/SpreadsheetDigitalDocument.js");
global.schema.StructuredValue = require("./src/org/schema/StructuredValue.js");
global.schema.SubscribeAction = require("./src/org/schema/SubscribeAction.js");
global.schema.SuspendAction = require("./src/org/schema/SuspendAction.js");
global.schema.Taxi = require("./src/org/schema/Taxi.js");
global.schema.TaxiReservation = require("./src/org/schema/TaxiReservation.js");
global.schema.TaxiService = require("./src/org/schema/TaxiService.js");
global.schema.TextDigitalDocument = require("./src/org/schema/TextDigitalDocument.js");
global.schema.TheaterEvent = require("./src/org/schema/TheaterEvent.js");
global.schema.TheaterGroup = require("./src/org/schema/TheaterGroup.js");
global.schema.Ticket = require("./src/org/schema/Ticket.js");
global.schema.TouristAttraction = require("./src/org/schema/TouristAttraction.js");
global.schema.TrackAction = require("./src/org/schema/TrackAction.js");
global.schema.TradeAction = require("./src/org/schema/TradeAction.js");
global.schema.TrainReservation = require("./src/org/schema/TrainReservation.js");
global.schema.TrainTrip = require("./src/org/schema/TrainTrip.js");
global.schema.TransferAction = require("./src/org/schema/TransferAction.js");
global.schema.TravelAction = require("./src/org/schema/TravelAction.js");
global.schema.TVEpisode = require("./src/org/schema/TVEpisode.js");
global.schema.TVSeason = require("./src/org/schema/TVSeason.js");
global.schema.TVSeries = require("./src/org/schema/TVSeries.js");
global.schema.TypeAndQuantityNode = require("./src/org/schema/TypeAndQuantityNode.js");
global.schema.UnRegisterAction = require("./src/org/schema/UnRegisterAction.js");
global.schema.UpdateAction = require("./src/org/schema/UpdateAction.js");
global.schema.UseAction = require("./src/org/schema/UseAction.js");
global.schema.UserInteraction = require("./src/org/schema/UserInteraction.js");
global.schema.UserLikes = require("./src/org/schema/UserLikes.js");
global.schema.UserPageVisits = require("./src/org/schema/UserPageVisits.js");
global.schema.UserPlays = require("./src/org/schema/UserPlays.js");
global.schema.UserPlusOnes = require("./src/org/schema/UserPlusOnes.js");
global.schema.UserTweets = require("./src/org/schema/UserTweets.js");
global.schema.Vehicle = require("./src/org/schema/Vehicle.js");
global.schema.VideoGame = require("./src/org/schema/VideoGame.js");
global.schema.VideoGameSeries = require("./src/org/schema/VideoGameSeries.js");
global.schema.VideoObject = require("./src/org/schema/VideoObject.js");
global.schema.ViewAction = require("./src/org/schema/ViewAction.js");
global.schema.VisualArtsEvent = require("./src/org/schema/VisualArtsEvent.js");
global.schema.VisualArtwork = require("./src/org/schema/VisualArtwork.js");
global.schema.VoteAction = require("./src/org/schema/VoteAction.js");
global.schema.WantAction = require("./src/org/schema/WantAction.js");
global.schema.WarrantyPromise = require("./src/org/schema/WarrantyPromise.js");
global.schema.WatchAction = require("./src/org/schema/WatchAction.js");
global.schema.WearAction = require("./src/org/schema/WearAction.js");
global.schema.WebApplication = require("./src/org/schema/WebApplication.js");
global.schema.WebPage = require("./src/org/schema/WebPage.js");
global.schema.WebPageElement = require("./src/org/schema/WebPageElement.js");
global.schema.WebSite = require("./src/org/schema/WebSite.js");
global.schema.WPAdBlock = require("./src/org/schema/WPAdBlock.js");
global.schema.WPFooter = require("./src/org/schema/WPFooter.js");
global.schema.WPHeader = require("./src/org/schema/WPHeader.js");
global.schema.WPSideBar = require("./src/org/schema/WPSideBar.js");
global.schema.WriteAction = require("./src/org/schema/WriteAction.js");
global.EcConcept = require("./src/org/w3/skos/EcConcept.js");
global.EcConceptScheme = require("./src/org/w3/skos/EcConceptScheme.js");
global.CfdAssessment = require("./src/com/eduworks/schema/cfd/competency/CfdAssessment.js");
global.CfdReference = require("./src/com/eduworks/schema/cfd/competency/CfdReference.js");
global.ExtContent = require("./src/com/eduworks/schema/pebl/eXtension/ExtContent.js");
global.ExtPerson = require("./src/com/eduworks/schema/pebl/eXtension/ExtPerson.js");
global.ExtResource = require("./src/com/eduworks/schema/pebl/eXtension/ExtResource.js");
global.EcQuiz = require("./src/com/eduworks/schema/question/EcQuiz.js");
global.VideoStory = require("./src/org/angles/schema/angles/VideoStory.js");
global.MoodleConfig = require("./src/org/cass/adapter/MoodleConfig.js");
global.XapiConfig = require("./src/org/cass/adapter/XapiConfig.js");
global.EcContactGrant = require("./src/org/cassproject/ebac/identity/EcContactGrant.js");
global.EcFile = require("./src/org/cassproject/general/repository/EcFile.js");
global.Competency = require("./src/org/cassproject/schema/cass/competency/Competency.js");
global.Directory = require("./src/org/cassproject/schema/cass/competency/Directory.js");
global.Framework = require("./src/org/cassproject/schema/cass/competency/Framework.js");
global.Level = require("./src/org/cassproject/schema/cass/competency/Level.js");
global.Relation = require("./src/org/cassproject/schema/cass/competency/Relation.js");
global.RollupRule = require("./src/org/cassproject/schema/cass/competency/RollupRule.js");
global.Assertion = require("./src/org/cassproject/schema/cass/profile/Assertion.js");
global.AssertionEnvelope = require("./src/org/cassproject/schema/cass/profile/AssertionEnvelope.js");
global.ce.AssessmentProfile = require("./src/org/credentialengine/AssessmentProfile.js");
global.ce.ConditionProfile = require("./src/org/credentialengine/ConditionProfile.js");
global.ce.CostProfile = require("./src/org/credentialengine/CostProfile.js");
global.ce.Credential = require("./src/org/credentialengine/Credential.js");
global.ce.CredentialingAction = require("./src/org/credentialengine/CredentialingAction.js");
global.ce.Degree = require("./src/org/credentialengine/Degree.js");
global.ce.Diploma = require("./src/org/credentialengine/Diploma.js");
global.ce.DoctoralDegree = require("./src/org/credentialengine/DoctoralDegree.js");
global.ce.EarningsProfile = require("./src/org/credentialengine/EarningsProfile.js");
global.ce.EmploymentOutcomeProfile = require("./src/org/credentialengine/EmploymentOutcomeProfile.js");
global.ce.GeneralEducationDevelopment = require("./src/org/credentialengine/GeneralEducationDevelopment.js");
global.ce.GeoCoordinates = require("./src/org/credentialengine/GeoCoordinates.js");
global.ce.HoldersProfile = require("./src/org/credentialengine/HoldersProfile.js");
global.ce.JurisdictionProfile = require("./src/org/credentialengine/JurisdictionProfile.js");
global.ce.LearningOpportunityProfile = require("./src/org/credentialengine/LearningOpportunityProfile.js");
global.ce.LearningResource = require("./src/org/credentialengine/LearningResource.js");
global.ce.License = require("./src/org/credentialengine/License.js");
global.ce.MasterDegree = require("./src/org/credentialengine/MasterDegree.js");
global.ce.MicroCredential = require("./src/org/credentialengine/MicroCredential.js");
global.ce.OfferAction = require("./src/org/credentialengine/OfferAction.js");
global.ce.ProcessProfile = require("./src/org/credentialengine/ProcessProfile.js");
global.ce.ProfessionalDoctorate = require("./src/org/credentialengine/ProfessionalDoctorate.js");
global.ce.QualityAssuranceCredential = require("./src/org/credentialengine/QualityAssuranceCredential.js");
global.ce.RecognizeAction = require("./src/org/credentialengine/RecognizeAction.js");
global.ce.RegulateAction = require("./src/org/credentialengine/RegulateAction.js");
global.ce.RenewAction = require("./src/org/credentialengine/RenewAction.js");
global.ce.ResearchDoctorate = require("./src/org/credentialengine/ResearchDoctorate.js");
global.ce.RevocationProfile = require("./src/org/credentialengine/RevocationProfile.js");
global.ce.RevokeAction = require("./src/org/credentialengine/RevokeAction.js");
global.ce.RightsAction = require("./src/org/credentialengine/RightsAction.js");
global.ce.SecondarySchoolDiploma = require("./src/org/credentialengine/SecondarySchoolDiploma.js");
global.ce.VerificationServiceProfile = require("./src/org/credentialengine/VerificationServiceProfile.js");
global.schema.AboutPage = require("./src/org/schema/AboutPage.js");
global.schema.Accommodation = require("./src/org/schema/Accommodation.js");
global.schema.AchieveAction = require("./src/org/schema/AchieveAction.js");
global.schema.ActivateAction = require("./src/org/schema/ActivateAction.js");
global.schema.AddAction = require("./src/org/schema/AddAction.js");
global.schema.AdministrativeArea = require("./src/org/schema/AdministrativeArea.js");
global.schema.AggregateOffer = require("./src/org/schema/AggregateOffer.js");
global.schema.AggregateRating = require("./src/org/schema/AggregateRating.js");
global.schema.AgreeAction = require("./src/org/schema/AgreeAction.js");
global.schema.Airline = require("./src/org/schema/Airline.js");
global.schema.AlignmentObject = require("./src/org/schema/AlignmentObject.js");
global.schema.AllocateAction = require("./src/org/schema/AllocateAction.js");
global.schema.Apartment = require("./src/org/schema/Apartment.js");
global.schema.ApartmentComplex = require("./src/org/schema/ApartmentComplex.js");
global.schema.ApplyAction = require("./src/org/schema/ApplyAction.js");
global.schema.ArriveAction = require("./src/org/schema/ArriveAction.js");
global.schema.Article = require("./src/org/schema/Article.js");
global.schema.AssignAction = require("./src/org/schema/AssignAction.js");
global.schema.Audience = require("./src/org/schema/Audience.js");
global.schema.AudioObject = require("./src/org/schema/AudioObject.js");
global.schema.AuthorizeAction = require("./src/org/schema/AuthorizeAction.js");
global.schema.BedDetails = require("./src/org/schema/BedDetails.js");
global.schema.BefriendAction = require("./src/org/schema/BefriendAction.js");
global.schema.Blog = require("./src/org/schema/Blog.js");
global.schema.Book = require("./src/org/schema/Book.js");
global.schema.BookmarkAction = require("./src/org/schema/BookmarkAction.js");
global.schema.BookSeries = require("./src/org/schema/BookSeries.js");
global.schema.BorrowAction = require("./src/org/schema/BorrowAction.js");
global.schema.Brand = require("./src/org/schema/Brand.js");
global.schema.BreadcrumbList = require("./src/org/schema/BreadcrumbList.js");
global.schema.BroadcastChannel = require("./src/org/schema/BroadcastChannel.js");
global.schema.BroadcastService = require("./src/org/schema/BroadcastService.js");
global.schema.BusinessAudience = require("./src/org/schema/BusinessAudience.js");
global.schema.BusinessEvent = require("./src/org/schema/BusinessEvent.js");
global.schema.BusReservation = require("./src/org/schema/BusReservation.js");
global.schema.BusTrip = require("./src/org/schema/BusTrip.js");
global.schema.BuyAction = require("./src/org/schema/BuyAction.js");
global.schema.CableOrSatelliteService = require("./src/org/schema/CableOrSatelliteService.js");
global.schema.CampingPitch = require("./src/org/schema/CampingPitch.js");
global.schema.CancelAction = require("./src/org/schema/CancelAction.js");
global.schema.Car = require("./src/org/schema/Car.js");
global.schema.CheckAction = require("./src/org/schema/CheckAction.js");
global.schema.CheckoutPage = require("./src/org/schema/CheckoutPage.js");
global.schema.ChildrensEvent = require("./src/org/schema/ChildrensEvent.js");
global.schema.City = require("./src/org/schema/City.js");
global.schema.CivicStructure = require("./src/org/schema/CivicStructure.js");
global.schema.ClaimReview = require("./src/org/schema/ClaimReview.js");
global.schema.Clip = require("./src/org/schema/Clip.js");
global.schema.Code = require("./src/org/schema/Code.js");
global.schema.CollectionPage = require("./src/org/schema/CollectionPage.js");
global.schema.ComedyEvent = require("./src/org/schema/ComedyEvent.js");
global.schema.Comment = require("./src/org/schema/Comment.js");
global.schema.CommunicateAction = require("./src/org/schema/CommunicateAction.js");
global.schema.ComputerLanguage = require("./src/org/schema/ComputerLanguage.js");
global.schema.ContactPage = require("./src/org/schema/ContactPage.js");
global.schema.ContactPoint = require("./src/org/schema/ContactPoint.js");
global.schema.Conversation = require("./src/org/schema/Conversation.js");
global.schema.CookAction = require("./src/org/schema/CookAction.js");
global.schema.Corporation = require("./src/org/schema/Corporation.js");
global.schema.Country = require("./src/org/schema/Country.js");
global.schema.Course = require("./src/org/schema/Course.js");
global.schema.CourseInstance = require("./src/org/schema/CourseInstance.js");
global.schema.Crematorium = require("./src/org/schema/Crematorium.js");
global.schema.DanceEvent = require("./src/org/schema/DanceEvent.js");
global.schema.DanceGroup = require("./src/org/schema/DanceGroup.js");
global.schema.DataDownload = require("./src/org/schema/DataDownload.js");
global.schema.DataFeed = require("./src/org/schema/DataFeed.js");
global.schema.DataFeedItem = require("./src/org/schema/DataFeedItem.js");
global.schema.DatedMoneySpecification = require("./src/org/schema/DatedMoneySpecification.js");
global.schema.DeleteAction = require("./src/org/schema/DeleteAction.js");
global.schema.DeliveryEvent = require("./src/org/schema/DeliveryEvent.js");
global.schema.Demand = require("./src/org/schema/Demand.js");
global.schema.DepartAction = require("./src/org/schema/DepartAction.js");
global.schema.DigitalDocumentPermission = require("./src/org/schema/DigitalDocumentPermission.js");
global.schema.DisagreeAction = require("./src/org/schema/DisagreeAction.js");
global.schema.DiscoverAction = require("./src/org/schema/DiscoverAction.js");
global.schema.DislikeAction = require("./src/org/schema/DislikeAction.js");
global.schema.Distance = require("./src/org/schema/Distance.js");
global.schema.DonateAction = require("./src/org/schema/DonateAction.js");
global.schema.DownloadAction = require("./src/org/schema/DownloadAction.js");
global.schema.Duration = require("./src/org/schema/Duration.js");
global.EcComment = require("./src/org/schema/EcComment.js");
global.EcOrganization = require("./src/org/schema/EcOrganization.js");
global.EcPerson = require("./src/org/schema/EcPerson.js");
global.schema.EducationalAudience = require("./src/org/schema/EducationalAudience.js");
global.schema.EducationalOrganization = require("./src/org/schema/EducationalOrganization.js");
global.schema.EducationEvent = require("./src/org/schema/EducationEvent.js");
global.schema.ElementarySchool = require("./src/org/schema/ElementarySchool.js");
global.schema.EmailMessage = require("./src/org/schema/EmailMessage.js");
global.schema.EndorseAction = require("./src/org/schema/EndorseAction.js");
global.schema.Energy = require("./src/org/schema/Energy.js");
global.schema.EngineSpecification = require("./src/org/schema/EngineSpecification.js");
global.schema.EntryPoint = require("./src/org/schema/EntryPoint.js");
global.schema.Enumeration = require("./src/org/schema/Enumeration.js");
global.schema.EventReservation = require("./src/org/schema/EventReservation.js");
global.schema.EventStatusType = require("./src/org/schema/EventStatusType.js");
global.schema.EventVenue = require("./src/org/schema/EventVenue.js");
global.schema.ExerciseAction = require("./src/org/schema/ExerciseAction.js");
global.schema.ExhibitionEvent = require("./src/org/schema/ExhibitionEvent.js");
global.schema.Festival = require("./src/org/schema/Festival.js");
global.schema.FinancialProduct = require("./src/org/schema/FinancialProduct.js");
global.schema.FireStation = require("./src/org/schema/FireStation.js");
global.schema.Flight = require("./src/org/schema/Flight.js");
global.schema.FlightReservation = require("./src/org/schema/FlightReservation.js");
global.schema.FollowAction = require("./src/org/schema/FollowAction.js");
global.schema.FoodEstablishmentReservation = require("./src/org/schema/FoodEstablishmentReservation.js");
global.schema.FoodEvent = require("./src/org/schema/FoodEvent.js");
global.schema.FoodService = require("./src/org/schema/FoodService.js");
global.schema.GamePlayMode = require("./src/org/schema/GamePlayMode.js");
global.schema.GameServer = require("./src/org/schema/GameServer.js");
global.schema.GameServerStatus = require("./src/org/schema/GameServerStatus.js");
global.schema.GatedResidenceCommunity = require("./src/org/schema/GatedResidenceCommunity.js");
global.schema.GenderType = require("./src/org/schema/GenderType.js");
global.schema.GeoCoordinates = require("./src/org/schema/GeoCoordinates.js");
global.schema.GeoShape = require("./src/org/schema/GeoShape.js");
global.schema.GiveAction = require("./src/org/schema/GiveAction.js");
global.schema.GovernmentBuilding = require("./src/org/schema/GovernmentBuilding.js");
global.schema.GovernmentOrganization = require("./src/org/schema/GovernmentOrganization.js");
global.schema.GovernmentPermit = require("./src/org/schema/GovernmentPermit.js");
global.schema.GovernmentService = require("./src/org/schema/GovernmentService.js");
global.schema.HighSchool = require("./src/org/schema/HighSchool.js");
global.schema.Hospital = require("./src/org/schema/Hospital.js");
global.schema.House = require("./src/org/schema/House.js");
global.schema.ImageGallery = require("./src/org/schema/ImageGallery.js");
global.schema.ImageObject = require("./src/org/schema/ImageObject.js");
global.schema.IndividualProduct = require("./src/org/schema/IndividualProduct.js");
global.schema.InformAction = require("./src/org/schema/InformAction.js");
global.schema.InsertAction = require("./src/org/schema/InsertAction.js");
global.schema.InteractionCounter = require("./src/org/schema/InteractionCounter.js");
global.schema.InvestmentOrDeposit = require("./src/org/schema/InvestmentOrDeposit.js");
global.schema.InviteAction = require("./src/org/schema/InviteAction.js");
global.schema.ItemAvailability = require("./src/org/schema/ItemAvailability.js");
global.schema.ItemListOrderType = require("./src/org/schema/ItemListOrderType.js");
global.schema.ItemPage = require("./src/org/schema/ItemPage.js");
global.schema.Landform = require("./src/org/schema/Landform.js");
global.schema.LandmarksOrHistoricalBuildings = require("./src/org/schema/LandmarksOrHistoricalBuildings.js");
global.schema.LegislativeBuilding = require("./src/org/schema/LegislativeBuilding.js");
global.schema.LendAction = require("./src/org/schema/LendAction.js");
global.schema.LikeAction = require("./src/org/schema/LikeAction.js");
global.schema.LiteraryEvent = require("./src/org/schema/LiteraryEvent.js");
global.schema.LoanOrCredit = require("./src/org/schema/LoanOrCredit.js");
global.schema.LocalBusiness = require("./src/org/schema/LocalBusiness.js");
global.schema.LodgingBusiness = require("./src/org/schema/LodgingBusiness.js");
global.schema.LodgingReservation = require("./src/org/schema/LodgingReservation.js");
global.schema.LoseAction = require("./src/org/schema/LoseAction.js");
global.schema.MapCategoryType = require("./src/org/schema/MapCategoryType.js");
global.schema.Mass = require("./src/org/schema/Mass.js");
global.schema.MedicalOrganization = require("./src/org/schema/MedicalOrganization.js");
global.schema.MiddleSchool = require("./src/org/schema/MiddleSchool.js");
global.schema.MobileApplication = require("./src/org/schema/MobileApplication.js");
global.schema.MonetaryAmount = require("./src/org/schema/MonetaryAmount.js");
global.schema.Motel = require("./src/org/schema/Motel.js");
global.schema.Mountain = require("./src/org/schema/Mountain.js");
global.schema.MovieClip = require("./src/org/schema/MovieClip.js");
global.schema.MovieTheater = require("./src/org/schema/MovieTheater.js");
global.schema.Museum = require("./src/org/schema/Museum.js");
global.schema.MusicAlbum = require("./src/org/schema/MusicAlbum.js");
global.schema.MusicAlbumProductionType = require("./src/org/schema/MusicAlbumProductionType.js");
global.schema.MusicAlbumReleaseType = require("./src/org/schema/MusicAlbumReleaseType.js");
global.schema.MusicEvent = require("./src/org/schema/MusicEvent.js");
global.schema.MusicGroup = require("./src/org/schema/MusicGroup.js");
global.schema.MusicReleaseFormatType = require("./src/org/schema/MusicReleaseFormatType.js");
global.schema.MusicVenue = require("./src/org/schema/MusicVenue.js");
global.schema.NewsArticle = require("./src/org/schema/NewsArticle.js");
global.schema.NGO = require("./src/org/schema/NGO.js");
global.schema.NutritionInformation = require("./src/org/schema/NutritionInformation.js");
global.schema.OfferItemCondition = require("./src/org/schema/OfferItemCondition.js");
global.schema.OpeningHoursSpecification = require("./src/org/schema/OpeningHoursSpecification.js");
global.schema.OrderAction = require("./src/org/schema/OrderAction.js");
global.schema.OrderStatus = require("./src/org/schema/OrderStatus.js");
global.schema.OrganizationRole = require("./src/org/schema/OrganizationRole.js");
global.schema.OwnershipInfo = require("./src/org/schema/OwnershipInfo.js");
global.schema.Park = require("./src/org/schema/Park.js");
global.schema.ParkingFacility = require("./src/org/schema/ParkingFacility.js");
global.schema.PayAction = require("./src/org/schema/PayAction.js");
global.schema.PaymentCard = require("./src/org/schema/PaymentCard.js");
global.schema.PaymentMethod = require("./src/org/schema/PaymentMethod.js");
global.schema.PaymentService = require("./src/org/schema/PaymentService.js");
global.schema.PaymentStatusType = require("./src/org/schema/PaymentStatusType.js");
global.schema.PeopleAudience = require("./src/org/schema/PeopleAudience.js");
global.schema.PerformAction = require("./src/org/schema/PerformAction.js");
global.schema.PerformanceRole = require("./src/org/schema/PerformanceRole.js");
global.schema.PerformingArtsTheater = require("./src/org/schema/PerformingArtsTheater.js");
global.schema.Pharmacy = require("./src/org/schema/Pharmacy.js");
global.schema.Physician = require("./src/org/schema/Physician.js");
global.schema.PlaceOfWorship = require("./src/org/schema/PlaceOfWorship.js");
global.schema.Playground = require("./src/org/schema/Playground.js");
global.schema.PoliceStation = require("./src/org/schema/PoliceStation.js");
global.schema.PostalAddress = require("./src/org/schema/PostalAddress.js");
global.schema.PrependAction = require("./src/org/schema/PrependAction.js");
global.schema.Preschool = require("./src/org/schema/Preschool.js");
global.schema.PriceSpecification = require("./src/org/schema/PriceSpecification.js");
global.schema.ProfessionalService = require("./src/org/schema/ProfessionalService.js");
global.schema.ProfilePage = require("./src/org/schema/ProfilePage.js");
global.schema.PropertyValue = require("./src/org/schema/PropertyValue.js");
global.schema.PublicationEvent = require("./src/org/schema/PublicationEvent.js");
global.schema.QAPage = require("./src/org/schema/QAPage.js");
global.schema.QualitativeValue = require("./src/org/schema/QualitativeValue.js");
global.schema.QuantitativeValue = require("./src/org/schema/QuantitativeValue.js");
global.schema.QuoteAction = require("./src/org/schema/QuoteAction.js");
global.schema.RadioChannel = require("./src/org/schema/RadioChannel.js");
global.schema.RadioClip = require("./src/org/schema/RadioClip.js");
global.schema.RadioStation = require("./src/org/schema/RadioStation.js");
global.schema.RealEstateAgent = require("./src/org/schema/RealEstateAgent.js");
global.schema.ReceiveAction = require("./src/org/schema/ReceiveAction.js");
global.schema.RecyclingCenter = require("./src/org/schema/RecyclingCenter.js");
global.schema.RejectAction = require("./src/org/schema/RejectAction.js");
global.schema.RentAction = require("./src/org/schema/RentAction.js");
global.schema.RentalCarReservation = require("./src/org/schema/RentalCarReservation.js");
global.schema.ReplaceAction = require("./src/org/schema/ReplaceAction.js");
global.schema.ReplyAction = require("./src/org/schema/ReplyAction.js");
global.schema.Report = require("./src/org/schema/Report.js");
global.schema.ReservationStatusType = require("./src/org/schema/ReservationStatusType.js");
global.schema.Resort = require("./src/org/schema/Resort.js");
global.schema.RestrictedDiet = require("./src/org/schema/RestrictedDiet.js");
global.schema.ReturnAction = require("./src/org/schema/ReturnAction.js");
global.schema.Room = require("./src/org/schema/Room.js");
global.schema.RsvpAction = require("./src/org/schema/RsvpAction.js");
global.schema.RsvpResponseType = require("./src/org/schema/RsvpResponseType.js");
global.schema.RVPark = require("./src/org/schema/RVPark.js");
global.schema.SaleEvent = require("./src/org/schema/SaleEvent.js");
global.schema.ScholarlyArticle = require("./src/org/schema/ScholarlyArticle.js");
global.schema.School = require("./src/org/schema/School.js");
global.schema.SearchResultsPage = require("./src/org/schema/SearchResultsPage.js");
global.schema.SelfStorage = require("./src/org/schema/SelfStorage.js");
global.schema.SellAction = require("./src/org/schema/SellAction.js");
global.schema.SendAction = require("./src/org/schema/SendAction.js");
global.schema.ShareAction = require("./src/org/schema/ShareAction.js");
global.schema.ShoppingCenter = require("./src/org/schema/ShoppingCenter.js");
global.schema.SingleFamilyResidence = require("./src/org/schema/SingleFamilyResidence.js");
global.schema.SiteNavigationElement = require("./src/org/schema/SiteNavigationElement.js");
global.schema.SocialMediaPosting = require("./src/org/schema/SocialMediaPosting.js");
global.schema.Specialty = require("./src/org/schema/Specialty.js");
global.schema.SportsActivityLocation = require("./src/org/schema/SportsActivityLocation.js");
global.schema.SportsClub = require("./src/org/schema/SportsClub.js");
global.schema.StadiumOrArena = require("./src/org/schema/StadiumOrArena.js");
global.schema.State = require("./src/org/schema/State.js");
global.schema.SteeringPositionValue = require("./src/org/schema/SteeringPositionValue.js");
global.schema.Store = require("./src/org/schema/Store.js");
global.schema.SubwayStation = require("./src/org/schema/SubwayStation.js");
global.schema.Suite = require("./src/org/schema/Suite.js");
global.schema.Synagogue = require("./src/org/schema/Synagogue.js");
global.schema.Table = require("./src/org/schema/Table.js");
global.schema.TakeAction = require("./src/org/schema/TakeAction.js");
global.schema.TaxiStand = require("./src/org/schema/TaxiStand.js");
global.schema.TechArticle = require("./src/org/schema/TechArticle.js");
global.schema.TelevisionChannel = require("./src/org/schema/TelevisionChannel.js");
global.schema.TelevisionStation = require("./src/org/schema/TelevisionStation.js");
global.schema.TennisComplex = require("./src/org/schema/TennisComplex.js");
global.schema.TieAction = require("./src/org/schema/TieAction.js");
global.schema.TipAction = require("./src/org/schema/TipAction.js");
global.schema.TireShop = require("./src/org/schema/TireShop.js");
global.schema.TouristInformationCenter = require("./src/org/schema/TouristInformationCenter.js");
global.schema.ToyStore = require("./src/org/schema/ToyStore.js");
global.schema.TrainStation = require("./src/org/schema/TrainStation.js");
global.schema.TravelAgency = require("./src/org/schema/TravelAgency.js");
global.schema.TVClip = require("./src/org/schema/TVClip.js");
global.schema.UnitPriceSpecification = require("./src/org/schema/UnitPriceSpecification.js");
global.schema.UserBlocks = require("./src/org/schema/UserBlocks.js");
global.schema.UserCheckins = require("./src/org/schema/UserCheckins.js");
global.schema.UserComments = require("./src/org/schema/UserComments.js");
global.schema.UserDownloads = require("./src/org/schema/UserDownloads.js");
global.schema.VideoGallery = require("./src/org/schema/VideoGallery.js");
global.schema.VideoGameClip = require("./src/org/schema/VideoGameClip.js");
global.schema.Volcano = require("./src/org/schema/Volcano.js");
global.schema.WarrantyScope = require("./src/org/schema/WarrantyScope.js");
global.schema.WholesaleStore = require("./src/org/schema/WholesaleStore.js");
global.schema.WinAction = require("./src/org/schema/WinAction.js");
global.schema.Zoo = require("./src/org/schema/Zoo.js");
global.CfdAlignment = require("./src/com/eduworks/schema/cfd/competency/CfdAlignment.js");
global.EcAlignment = require("./src/org/cass/competency/EcAlignment.js");
global.EcDirectory = require("./src/org/cass/competency/EcDirectory.js");
global.EcLevel = require("./src/org/cass/competency/EcLevel.js");
global.EcRollupRule = require("./src/org/cass/competency/EcRollupRule.js");
global.EcAssertion = require("./src/org/cass/profile/EcAssertion.js");
global.ce.AccreditAction = require("./src/org/credentialengine/AccreditAction.js");
global.ce.AdvancedStandingAction = require("./src/org/credentialengine/AdvancedStandingAction.js");
global.ce.ApproveAction = require("./src/org/credentialengine/ApproveAction.js");
global.ce.AssociateDegree = require("./src/org/credentialengine/AssociateDegree.js");
global.ce.BachelorDegree = require("./src/org/credentialengine/BachelorDegree.js");
global.ce.Badge = require("./src/org/credentialengine/Badge.js");
global.ce.Certificate = require("./src/org/credentialengine/Certificate.js");
global.ce.Certification = require("./src/org/credentialengine/Certification.js");
global.ce.CredentialAlignmentObject = require("./src/org/credentialengine/CredentialAlignmentObject.js");
global.ce.DigitalBadge = require("./src/org/credentialengine/DigitalBadge.js");
global.ce.OpenBadge = require("./src/org/credentialengine/OpenBadge.js");
global.ce.PostalAddress = require("./src/org/credentialengine/PostalAddress.js");
global.schema.AcceptAction = require("./src/org/schema/AcceptAction.js");
global.schema.ActionStatusType = require("./src/org/schema/ActionStatusType.js");
global.schema.Airport = require("./src/org/schema/Airport.js");
global.schema.AnimalShelter = require("./src/org/schema/AnimalShelter.js");
global.schema.Answer = require("./src/org/schema/Answer.js");
global.schema.APIReference = require("./src/org/schema/APIReference.js");
global.schema.AppendAction = require("./src/org/schema/AppendAction.js");
global.schema.Aquarium = require("./src/org/schema/Aquarium.js");
global.schema.AskAction = require("./src/org/schema/AskAction.js");
global.schema.AutomotiveBusiness = require("./src/org/schema/AutomotiveBusiness.js");
global.schema.AutoPartsStore = require("./src/org/schema/AutoPartsStore.js");
global.schema.AutoRental = require("./src/org/schema/AutoRental.js");
global.schema.AutoRepair = require("./src/org/schema/AutoRepair.js");
global.schema.AutoWash = require("./src/org/schema/AutoWash.js");
global.schema.BankAccount = require("./src/org/schema/BankAccount.js");
global.schema.Barcode = require("./src/org/schema/Barcode.js");
global.schema.Beach = require("./src/org/schema/Beach.js");
global.schema.BedAndBreakfast = require("./src/org/schema/BedAndBreakfast.js");
global.schema.BikeStore = require("./src/org/schema/BikeStore.js");
global.schema.BlogPosting = require("./src/org/schema/BlogPosting.js");
global.schema.BoardingPolicyType = require("./src/org/schema/BoardingPolicyType.js");
global.schema.BodyOfWater = require("./src/org/schema/BodyOfWater.js");
global.schema.BookFormatType = require("./src/org/schema/BookFormatType.js");
global.schema.BookStore = require("./src/org/schema/BookStore.js");
global.schema.BowlingAlley = require("./src/org/schema/BowlingAlley.js");
global.schema.Bridge = require("./src/org/schema/Bridge.js");
global.schema.BroadcastEvent = require("./src/org/schema/BroadcastEvent.js");
global.schema.BuddhistTemple = require("./src/org/schema/BuddhistTemple.js");
global.schema.BusinessEntityType = require("./src/org/schema/BusinessEntityType.js");
global.schema.BusinessFunction = require("./src/org/schema/BusinessFunction.js");
global.schema.BusStation = require("./src/org/schema/BusStation.js");
global.schema.BusStop = require("./src/org/schema/BusStop.js");
global.schema.Campground = require("./src/org/schema/Campground.js");
global.schema.Canal = require("./src/org/schema/Canal.js");
global.schema.CatholicChurch = require("./src/org/schema/CatholicChurch.js");
global.schema.Cemetery = require("./src/org/schema/Cemetery.js");
global.schema.CheckInAction = require("./src/org/schema/CheckInAction.js");
global.schema.CheckOutAction = require("./src/org/schema/CheckOutAction.js");
global.schema.ChildCare = require("./src/org/schema/ChildCare.js");
global.schema.Church = require("./src/org/schema/Church.js");
global.schema.CityHall = require("./src/org/schema/CityHall.js");
global.schema.ClothingStore = require("./src/org/schema/ClothingStore.js");
global.schema.CollegeOrUniversity = require("./src/org/schema/CollegeOrUniversity.js");
global.schema.CommentAction = require("./src/org/schema/CommentAction.js");
global.schema.CompoundPriceSpecification = require("./src/org/schema/CompoundPriceSpecification.js");
global.schema.ComputerStore = require("./src/org/schema/ComputerStore.js");
global.schema.ConfirmAction = require("./src/org/schema/ConfirmAction.js");
global.schema.ContactPointOption = require("./src/org/schema/ContactPointOption.js");
global.schema.Continent = require("./src/org/schema/Continent.js");
global.schema.ConvenienceStore = require("./src/org/schema/ConvenienceStore.js");
global.schema.Courthouse = require("./src/org/schema/Courthouse.js");
global.schema.CreditCard = require("./src/org/schema/CreditCard.js");
global.schema.CurrencyConversionService = require("./src/org/schema/CurrencyConversionService.js");
global.schema.DayOfWeek = require("./src/org/schema/DayOfWeek.js");
global.schema.DefenceEstablishment = require("./src/org/schema/DefenceEstablishment.js");
global.schema.DeliveryChargeSpecification = require("./src/org/schema/DeliveryChargeSpecification.js");
global.schema.DeliveryMethod = require("./src/org/schema/DeliveryMethod.js");
global.schema.Dentist = require("./src/org/schema/Dentist.js");
global.schema.DepartmentStore = require("./src/org/schema/DepartmentStore.js");
global.schema.DepositAccount = require("./src/org/schema/DepositAccount.js");
global.schema.DigitalDocumentPermissionType = require("./src/org/schema/DigitalDocumentPermissionType.js");
global.schema.DiscussionForumPosting = require("./src/org/schema/DiscussionForumPosting.js");
global.schema.DriveWheelConfigurationValue = require("./src/org/schema/DriveWheelConfigurationValue.js");
global.schema.DryCleaningOrLaundry = require("./src/org/schema/DryCleaningOrLaundry.js");
global.EcAnswer = require("./src/org/schema/EcAnswer.js");
global.EcQuestion = require("./src/org/schema/EcQuestion.js");
global.schema.ElectronicsStore = require("./src/org/schema/ElectronicsStore.js");
global.schema.Embassy = require("./src/org/schema/Embassy.js");
global.schema.EmergencyService = require("./src/org/schema/EmergencyService.js");
global.schema.EmployeeRole = require("./src/org/schema/EmployeeRole.js");
global.schema.EmploymentAgency = require("./src/org/schema/EmploymentAgency.js");
global.schema.EntertainmentBusiness = require("./src/org/schema/EntertainmentBusiness.js");
global.schema.ExerciseGym = require("./src/org/schema/ExerciseGym.js");
global.schema.FinancialService = require("./src/org/schema/FinancialService.js");
global.schema.Florist = require("./src/org/schema/Florist.js");
global.schema.FoodEstablishment = require("./src/org/schema/FoodEstablishment.js");
global.schema.FurnitureStore = require("./src/org/schema/FurnitureStore.js");
global.schema.GardenStore = require("./src/org/schema/GardenStore.js");
global.schema.GasStation = require("./src/org/schema/GasStation.js");
global.schema.GeoCircle = require("./src/org/schema/GeoCircle.js");
global.schema.GolfCourse = require("./src/org/schema/GolfCourse.js");
global.schema.GovernmentOffice = require("./src/org/schema/GovernmentOffice.js");
global.schema.GroceryStore = require("./src/org/schema/GroceryStore.js");
global.schema.HardwareStore = require("./src/org/schema/HardwareStore.js");
global.schema.HealthAndBeautyBusiness = require("./src/org/schema/HealthAndBeautyBusiness.js");
global.schema.HealthClub = require("./src/org/schema/HealthClub.js");
global.schema.HinduTemple = require("./src/org/schema/HinduTemple.js");
global.schema.HobbyShop = require("./src/org/schema/HobbyShop.js");
global.schema.HomeAndConstructionBusiness = require("./src/org/schema/HomeAndConstructionBusiness.js");
global.schema.HomeGoodsStore = require("./src/org/schema/HomeGoodsStore.js");
global.schema.Hostel = require("./src/org/schema/Hostel.js");
global.schema.Hotel = require("./src/org/schema/Hotel.js");
global.schema.HotelRoom = require("./src/org/schema/HotelRoom.js");
global.schema.HousePainter = require("./src/org/schema/HousePainter.js");
global.schema.HVACBusiness = require("./src/org/schema/HVACBusiness.js");
global.schema.IceCreamShop = require("./src/org/schema/IceCreamShop.js");
global.schema.InsuranceAgency = require("./src/org/schema/InsuranceAgency.js");
global.schema.InternetCafe = require("./src/org/schema/InternetCafe.js");
global.schema.JewelryStore = require("./src/org/schema/JewelryStore.js");
global.schema.LakeBodyOfWater = require("./src/org/schema/LakeBodyOfWater.js");
global.schema.LegalService = require("./src/org/schema/LegalService.js");
global.schema.Library = require("./src/org/schema/Library.js");
global.schema.LiquorStore = require("./src/org/schema/LiquorStore.js");
global.schema.LiveBlogPosting = require("./src/org/schema/LiveBlogPosting.js");
global.schema.LocationFeatureSpecification = require("./src/org/schema/LocationFeatureSpecification.js");
global.schema.Locksmith = require("./src/org/schema/Locksmith.js");
global.schema.MeetingRoom = require("./src/org/schema/MeetingRoom.js");
global.schema.MensClothingStore = require("./src/org/schema/MensClothingStore.js");
global.schema.MobilePhoneStore = require("./src/org/schema/MobilePhoneStore.js");
global.schema.Mosque = require("./src/org/schema/Mosque.js");
global.schema.MotorcycleDealer = require("./src/org/schema/MotorcycleDealer.js");
global.schema.MotorcycleRepair = require("./src/org/schema/MotorcycleRepair.js");
global.schema.MovieRentalStore = require("./src/org/schema/MovieRentalStore.js");
global.schema.MovingCompany = require("./src/org/schema/MovingCompany.js");
global.schema.MusicStore = require("./src/org/schema/MusicStore.js");
global.schema.NailSalon = require("./src/org/schema/NailSalon.js");
global.schema.NightClub = require("./src/org/schema/NightClub.js");
global.schema.Notary = require("./src/org/schema/Notary.js");
global.schema.OceanBodyOfWater = require("./src/org/schema/OceanBodyOfWater.js");
global.schema.OfficeEquipmentStore = require("./src/org/schema/OfficeEquipmentStore.js");
global.schema.OnDemandEvent = require("./src/org/schema/OnDemandEvent.js");
global.schema.OutletStore = require("./src/org/schema/OutletStore.js");
global.schema.ParentAudience = require("./src/org/schema/ParentAudience.js");
global.schema.PawnShop = require("./src/org/schema/PawnShop.js");
global.schema.PaymentChargeSpecification = require("./src/org/schema/PaymentChargeSpecification.js");
global.schema.PetStore = require("./src/org/schema/PetStore.js");
global.schema.Plumber = require("./src/org/schema/Plumber.js");
global.schema.Pond = require("./src/org/schema/Pond.js");
global.schema.PostOffice = require("./src/org/schema/PostOffice.js");
global.schema.PublicSwimmingPool = require("./src/org/schema/PublicSwimmingPool.js");
global.schema.Reservoir = require("./src/org/schema/Reservoir.js");
global.schema.Restaurant = require("./src/org/schema/Restaurant.js");
global.schema.RiverBodyOfWater = require("./src/org/schema/RiverBodyOfWater.js");
global.schema.RoofingContractor = require("./src/org/schema/RoofingContractor.js");
global.schema.SeaBodyOfWater = require("./src/org/schema/SeaBodyOfWater.js");
global.schema.ShoeStore = require("./src/org/schema/ShoeStore.js");
global.schema.SkiResort = require("./src/org/schema/SkiResort.js");
global.schema.SportingGoodsStore = require("./src/org/schema/SportingGoodsStore.js");
global.schema.TattooParlor = require("./src/org/schema/TattooParlor.js");
global.schema.Waterfall = require("./src/org/schema/Waterfall.js");
global.schema.Winery = require("./src/org/schema/Winery.js");
global.ExtInstitution = require("./src/com/eduworks/schema/pebl/eXtension/ExtInstitution.js");
global.EcCompetency = require("./src/org/cass/competency/EcCompetency.js");
global.EcFramework = require("./src/org/cass/competency/EcFramework.js");
global.CSVExport = require("./src/org/cass/exporter/CSVExport.js");
global.ASNImport = require("./src/org/cass/importer/ASNImport.js");
global.CSVImport = require("./src/org/cass/importer/CSVImport.js");
global.CTDLASNCSVImport = require("./src/org/cass/importer/CTDLASNCSVImport.js");
global.FrameworkImport = require("./src/org/cass/importer/FrameworkImport.js");
global.MedbiqImport = require("./src/org/cass/importer/MedbiqImport.js");
global.TabStructuredImport = require("./src/org/cass/importer/TabStructuredImport.js");
global.ce.ApprenticeshipCertificate = require("./src/org/credentialengine/ApprenticeshipCertificate.js");
global.ce.JourneymanCertificate = require("./src/org/credentialengine/JourneymanCertificate.js");
global.ce.MasterCertificate = require("./src/org/credentialengine/MasterCertificate.js");
global.schema.AccountingService = require("./src/org/schema/AccountingService.js");
global.schema.AdultEntertainment = require("./src/org/schema/AdultEntertainment.js");
global.schema.AmusementPark = require("./src/org/schema/AmusementPark.js");
global.schema.ArtGallery = require("./src/org/schema/ArtGallery.js");
global.schema.Attorney = require("./src/org/schema/Attorney.js");
global.schema.AutoBodyShop = require("./src/org/schema/AutoBodyShop.js");
global.schema.AutoDealer = require("./src/org/schema/AutoDealer.js");
global.schema.AutomatedTeller = require("./src/org/schema/AutomatedTeller.js");
global.schema.Bakery = require("./src/org/schema/Bakery.js");
global.schema.BankOrCreditUnion = require("./src/org/schema/BankOrCreditUnion.js");
global.schema.BarOrPub = require("./src/org/schema/BarOrPub.js");
global.schema.BeautySalon = require("./src/org/schema/BeautySalon.js");
global.schema.Brewery = require("./src/org/schema/Brewery.js");
global.schema.CafeOrCoffeeShop = require("./src/org/schema/CafeOrCoffeeShop.js");
global.schema.Casino = require("./src/org/schema/Casino.js");
global.schema.ComedyClub = require("./src/org/schema/ComedyClub.js");
global.schema.DaySpa = require("./src/org/schema/DaySpa.js");
global.schema.Electrician = require("./src/org/schema/Electrician.js");
global.schema.FastFoodRestaurant = require("./src/org/schema/FastFoodRestaurant.js");
global.schema.GeneralContractor = require("./src/org/schema/GeneralContractor.js");
global.schema.HairSalon = require("./src/org/schema/HairSalon.js");
global.EcFrameworkGraph = require("./src/com/eduworks/ec/graph/EcFrameworkGraph.js");
global.CfdCompetency = require("./src/com/eduworks/schema/cfd/competency/CfdCompetency.js");
global.CfdFramework = require("./src/com/eduworks/schema/cfd/competency/CfdFramework.js");
global.CfdKnowledge = require("./src/com/eduworks/schema/cfd/competency/CfdKnowledge.js");
global.CfdRollup = require("./src/com/eduworks/schema/cfd/competency/CfdRollup.js");
global.CfdSkill = require("./src/com/eduworks/schema/cfd/competency/CfdSkill.js");
global.CTDLASNCSVConceptImport = require("./src/org/cass/importer/CTDLASNCSVConceptImport.js");
global.CfdAttitude = require("./src/com/eduworks/schema/cfd/competency/CfdAttitude.js");
global.CfdBelief = require("./src/com/eduworks/schema/cfd/competency/CfdBelief.js");
