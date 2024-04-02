$(document).ready(function () {
    $.getJSON('projects.json', function (data) {
        var projectItems = data.menuItem;
        var projectsHtml = '<div id="accordion">';
        projectItems.forEach(function (item) {
            projectsHtml += '<h3>Lab ' + item.lab_number + ': ' + item.title + '</h3>';
            projectsHtml += '<div>';
            projectsHtml += '<p>' + item.desc + '</p>';
            projectsHtml += '<p>Published on: ' + item.pubDate + '</p>';
            projectsHtml += '<a href="' + item.file_path + '">View Project</a>';
            projectsHtml += '</div>';
        });
        projectsHtml += '</div>';
        $('#bodyBlock').append(projectsHtml);
        $('#accordion').accordion({
            collapsible: true,
            heightStyle: "content"
        });
    })
});
