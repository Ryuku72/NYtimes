        function loadAnArticle() {
            var searchTerm = "happy times";
            var numberOfArticles = 10;
            var startYear = 1;
            var endYear = 1;
            var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=K5WrBVmGWHzv8QeERzjfidUe1dSjeJB0";

            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function(e) {
                var a = 0;
                for(i = 0; i < numberOfArticles; i++) {
                    
                    var headline = e.response.docs[i].headline.main;
                    console.log(e.response.docs[i].headline.main);
                    

                    var div = $("<div>");
                    var p = $("<p>");
                    p.text(headline);
                    div.append(p);
                    $("#articles").append(div);
                }
            })
        }


        loadAnArticle();
