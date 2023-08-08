function skillsMember() {
    var skills = ['html', 'css', 'js', 'php', 'mysql'];
    var member = {
        name: 'Nguyen Van A',
        age: 20,
        skills: skills,
        showSkills: function() {
            var html = '';
            for (var i = 0; i < this.skills.length; i++) {
                html += '<li>' + this.skills[i] + '</li>';
            }
            document.getElementById('demo').innerHTML = html;
        }
    };
    member.showSkills();
}