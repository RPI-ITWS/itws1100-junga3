$(document).ready(function() {
    function displayRSS(url) {
        $.ajax({
            url: url,
            method: 'GET',
            dataType: "xml",
            success: function(data) {
                let items = $(data).find("item");
                let content = "<ul>";
                items.each(function() {
                    let title = $(this).find("title").text();
                    let link = $(this).find("link").text();
                    let description = $(this).find("description").text();
                    content += `<li><a href='${link}'>${title}</a><br>Summary: ${description}</li>`;
                });
                content += "</ul>";
                $("#bodyBlock h2:first").after(content);
            }
        });
    }

    function displayAtom(url) {
        $.ajax({
            url: url,
            method: 'GET',
            dataType: "xml",
            success: function(data) {
                let entries = $(data).find("entry");
                let content = "<ul>";
                entries.each(function() {
                    let title = $(this).find("title").text();
                    let link = $(this).find("link").attr("href");
                    let author = $(this).find("author name").text(); 
                    let summary = $(this).find("summary").text(); 
                    content += `<li><a href='${link}'>${title}</a><br>Author: ${author}<br>Summary: ${summary}</li>`;
                });
                content += "</ul>";
                $("#bodyBlock h2:last").after(content);
            }
        });
    }
    displayRSS('../lab04/rss.xml');
    displayAtom('../lab04/atom.xml');
});
