module.exports = class EcQuestion extends schema.Question{
    static MULTIPLE_CHOICE = "Multiple Choice";
    static MULTIPLE_SELECT = "Multiple Select";
    static SHORT_ANSWER = "Short Answer";
    static FILL_IN_THE_BLANK = "Fill in the Blank";
    static ESSAY_OR_SHORT_ANSWER = "Essay or Short Answer";
    static HAND_GRADED_ESSAY = "Hand-graded Essay";
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
    static search(repo, query, success, failure, paramObj) {
        EcRepository.searchAs(repo, query, function() {
            return new EcQuestion();
        }, success, failure, paramObj);
    };
    /**
     *  Heuristic method of determining how this question should be asked.
     * 
     *  @return
     */
    getQuestionType() {
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
    cementAnswerId(id) {
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
    acceptedAnswers() {
        if (this.acceptedAnswer == null) {
            return new Array();
        }
        return this.acceptedAnswer;
    };
    suggestedAnswers() {
        if (this.suggestedAnswer == null) {
            return new Array();
        }
        return this.suggestedAnswer;
    };
    addAcceptedAnswer(answer) {
        if (this.acceptedAnswer == null) {
            (this)["acceptedAnswer"] = new Array();
        }
        if (!EcArray.isArray(this.acceptedAnswer)) {
             throw new RuntimeException("Accepted Answer is not Array");
        }
        var ary = this.acceptedAnswer;
        ary.push(answer.id);
    };
    addSuggestedAnswer(answer) {
        if (this.suggestedAnswer == null) {
            (this)["suggestedAnswer"] = new Array();
        }
        if (!EcArray.isArray(this.suggestedAnswer)) {
             throw new RuntimeException("Suggested Answer is not Array");
        }
        var ary = this.suggestedAnswer;
        ary.push(answer.id);
    };
    removeSuggestedAnswerById(id) {
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
    removeAcceptedAnswerById(id) {
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
};
