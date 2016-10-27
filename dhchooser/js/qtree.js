(function main() {

	var tree = {};
	(function qtreeModule(ns) {
        var state;
        var nodes;
        var question;
        var details;
        var history;

        function init(json) {
            nodes = json;
            setState(0);
        }

        function setState(newstate) {
            if (!newstate) {
                state = 0;
            } else {
                state = newstate;
            }

            if (question) {
                console.log(nodes);
                console.log(state);
                question.textContent = nodes[state].question;
            }

            if (details) {
                details.textContent = nodes[state].details;
            }
        }

        function nextStateYes() {
            setState(nodes[state].yes);
        }

        function nextStateNo() {
            setState(nodes[state].no);
        }

        function bindQuestion(qId) {
            question = document.getElementById(qId);
            setState();
        }

        function bindDetails(dId) {
            details = document.getElementById(dId);
            details.textContent = nodes[state].details;
        }

        function bindYes(yesId) {
            document.getElementById(yesId)
                .addEventListener('click', nextStateYes);
        }

        function bindNo(noId) {
            document.getElementById(noId)
                .addEventListener('click', nextStateNo);
        }

        ns.init = init;
        ns.bindQuestion = bindQuestion;
        ns.bindDetails = bindDetails;
        ns.bindYes = bindYes;
        ns.bindNo = bindNo;

		return ns;
	})(tree);

    var request = new XMLHttpRequest();
    var url = 'data/questions.json';
    
    request.responseType = 'json';
    request.addEventListener('load', function loadJson() {
        if (request.readyState == 4 && request.status == 200) {
            tree.init(request.response);
            tree.bindQuestion('question');
            tree.bindDetails('details');
            tree.bindYes('yes-button');
            tree.bindNo('no-button');
        }
    });
    
    request.open('GET', url, true);
    request.send();
})();
