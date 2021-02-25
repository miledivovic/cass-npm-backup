var EcQuestion = function() {
    Question.call(this);
};
EcQuestion = stjs.extend(EcQuestion, Question, [], function(constructor, prototype) {
    constructor.MULTIPLE_CHOICE = "Multiple Choice";
    constructor.MULTIPLE_SELECT = "Multiple Select";
    constructor.SHORT_ANSWER = "Short Answer";
    constructor.FILL_IN_THE_BLANK = "Fill in the Blank";
    constructor.ESSAY_OR_SHORT_ANSWER = "Essay or Short Answer";
    constructor.HAND_GRADED_ESSAY = "Hand-graded Essay";
    /**
     *  Searches a repository for questions that match the search query
     * 
     *  @param {EcRepository}          repo Repository to search using the query
     *  @param {String}                query Query string to pass to the search web service
     *  @param {Callback1<Array<Quiz>> success Callback triggered after
     *                                 completing the search, returns the results
     *  @param {Callback1<String>}     failure Callback triggered if error searching
     *  @param {Object}                paramObj Parameter object for search
     *  @memberOf EcQuestion
     *  @method search
     *  @static
     */
    constructor.search = function(repo, query, success, failure, paramObj) {
        EcRepository.searchAs(repo, query, function() {
            return new EcQuestion();
        }, success, failure, paramObj);
    };
    /**
     *  Heuristic method of determining how this question should be asked.
     * 
     *  @return
     */
    prototype.getQuestionType = function() {
        var acceptedAnswers = this.acceptedAnswers();
        if (acceptedAnswers == null) {
            if (this.canEdit(EcIdentityManager.ids[0].ppk.toPk())) {
                return EcQuestion.HAND_GRADED_ESSAY;
            } else {
                return EcQuestion.ESSAY_OR_SHORT_ANSWER;
            }
        }
        var m = acceptedAnswers.length;
        if (m == 0) {
            return EcQuestion.HAND_GRADED_ESSAY;
        }
        if (this.suggestedAnswer == null) {
            if (this.text != null && this.text.indexOf("__") != -1) {
                return EcQuestion.FILL_IN_THE_BLANK;
            }
            return EcQuestion.SHORT_ANSWER;
        }
        var l = (this.suggestedAnswer).length;
        if (l == 0) {
            if (this.text != null && this.text.indexOf("__") != -1) {
                return EcQuestion.FILL_IN_THE_BLANK;
            }
            return EcQuestion.SHORT_ANSWER;
        }
        if (m > 1) {
            return EcQuestion.MULTIPLE_SELECT;
        }
        if (l > 0) {
            return EcQuestion.MULTIPLE_CHOICE;
        }
        return "Not sure.";
    };
    prototype.cementAnswerId = function(id) {
        if (this.acceptedAnswer != null) {
            if (!EcArray.isArray(this.acceptedAnswer)) {
                 throw new RuntimeException("Accepted Answer is not Array");
            }
            var ary = this.acceptedAnswer;
            for (var i = 0; i < ary.length; i++) {
                if (EcRemoteLinkedData.trimVersionFromUrl(ary[i]) == EcRemoteLinkedData.trimVersionFromUrl(id)) {
                    ary[i] = id;
                }
            }
        }
        if (this.suggestedAnswer != null) {
            if (!EcArray.isArray(this.suggestedAnswer)) {
                 throw new RuntimeException("Suggested Answer is not Array");
            }
            var ary = this.suggestedAnswer;
            for (var i = 0; i < ary.length; i++) {
                if (EcRemoteLinkedData.trimVersionFromUrl(ary[i]) == EcRemoteLinkedData.trimVersionFromUrl(id)) {
                    ary[i] = id;
                }
            }
        }
    };
    prototype.acceptedAnswers = function() {
        if (this.acceptedAnswer == null) {
            return new Array();
        }
        return this.acceptedAnswer;
    };
    prototype.suggestedAnswers = function() {
        if (this.suggestedAnswer == null) {
            return new Array();
        }
        return this.suggestedAnswer;
    };
    prototype.addAcceptedAnswer = function(answer) {
        if (this.acceptedAnswer == null) {
            (this)["acceptedAnswer"] = new Array();
        }
        if (!EcArray.isArray(this.acceptedAnswer)) {
             throw new RuntimeException("Accepted Answer is not Array");
        }
        var ary = this.acceptedAnswer;
        ary.push(answer.id);
    };
    prototype.addSuggestedAnswer = function(answer) {
        if (this.suggestedAnswer == null) {
            (this)["suggestedAnswer"] = new Array();
        }
        if (!EcArray.isArray(this.suggestedAnswer)) {
             throw new RuntimeException("Suggested Answer is not Array");
        }
        var ary = this.suggestedAnswer;
        ary.push(answer.id);
    };
    prototype.removeSuggestedAnswerById = function(id) {
        if (this.suggestedAnswer == null) {
            return;
        }
        if (!EcArray.isArray(this.suggestedAnswer)) {
             throw new RuntimeException("Suggested Answer is not Array");
        }
        var ary = this.suggestedAnswer;
        for (var i = 0; i < ary.length; i++) {
            if (EcRemoteLinkedData.trimVersionFromUrl(ary[i]) == EcRemoteLinkedData.trimVersionFromUrl(id)) {
                ary.splice(i, 1);
            }
        }
    };
    prototype.removeAcceptedAnswerById = function(id) {
        if (this.acceptedAnswer == null) {
            return;
        }
        if (!EcArray.isArray(this.acceptedAnswer)) {
             throw new RuntimeException("Accepted Answer is not Array");
        }
        var ary = this.acceptedAnswer;
        for (var i = 0; i < ary.length; i++) {
            if (EcRemoteLinkedData.trimVersionFromUrl(ary[i]) == EcRemoteLinkedData.trimVersionFromUrl(id)) {
                ary.splice(i, 1);
            }
        }
    };
}, {acceptedAnswer: "Answer", suggestedAnswer: "Answer", about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
