$(document).ready(function() {
    $.getJSON('projects.json', function(data) {
        var projectItems = data.menuItem;
        var projectsHtml = '';
        projectItems.forEach(function(item) {
            projectsHtml += '<div class="project-item">';
            projectsHtml += '<h2>Lab ' + item.lab_number + ': ' + item.title + '</h2>';
            projectsHtml += '<img src="' + item.image + '" alt="' + item.title + '">';
            projectsHtml += '<p>' + item.desc + '</p>';
            projectsHtml += '<p>Published on: ' + item.pubDate + '</p>';
            projectsHtml += '<a href="' + item.file_path + '">View Project</a>';
            projectsHtml += '</div>';
        });
        $('#bodyBlock h1').after(projectsHtml);
    }).fail(function() {
        console.log("An error has occurred.");
    });
});
