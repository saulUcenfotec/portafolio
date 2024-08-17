document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.nav-link');
    const contentPages = document.querySelectorAll('.content-page');

    tabs.forEach(tab => {
        tab.addEventListener('shown.bs.tab', function (event) {
            const targetId = tab.getAttribute('href');
            const targetPane = document.querySelector(targetId);

            contentPages.forEach(pane => {
                pane.classList.remove('show');
            });

            setTimeout(() => {
                targetPane.classList.add('show');
            }, 1);
        });
    });
});
