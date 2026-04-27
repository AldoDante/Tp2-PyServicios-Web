$(document).ready(function () {
    
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    $('.table-hover tbody tr:not(.no-hover)').hover(
        function() {
            $(this).css('box-shadow', '0 4px 8px rgba(0,0,0,0.1)');
        },
        function() {
            $(this).css('box-shadow', 'none');
        }
    );
});