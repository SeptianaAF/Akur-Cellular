$(document).ready(function () {
    var darkModeEnabled = localStorage.getItem("darkModeEnabled");
    if (darkModeEnabled === "true") {
        $('body').addClass('dark-mode');
        $('#septiana-theme-toggle').prop('checked', true);
    }

    $('#septiana-theme-toggle').change(function () {
        var isChecked = this.checked;
        $('body').toggleClass('dark-mode', isChecked);
        localStorage.setItem("darkModeEnabled", isChecked);
    });
});