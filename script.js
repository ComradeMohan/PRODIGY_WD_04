function showSidebar(event) {
    event.preventDefault();
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}
function hideSidebar(event) {
    event.preventDefault();
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
} 
var icon=document.getElementById("togglemobile");
icon.onclick = function(){
    document.body.classList.toggle('light-theme');
    let theme = 'light-mode';
    if (document.body.classList.contains('light-theme')) {
        theme = 'dark-mode';
        icon.textContent = '🌞';
    } else {
        icon.textContent = '🌙';
    }
    localStorage.setItem('theme', theme);
}

const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.textContent = '🌙';
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    let theme = 'light-mode';
    if (document.body.classList.contains('light-theme')) {
        theme = 'dark-mode';
        themeToggleBtn.textContent = '🌞';
    } else {
        themeToggleBtn.textContent = '🌙';
    }
    localStorage.setItem('theme', theme);
});
window.onload = () => {
    const sections = document.querySelectorAll('section[id]');
    const navlinksSidebar = document.querySelectorAll('.sidebar li a');
    const navlinksHeader = document.querySelectorAll('.header-bar li a');
    function hideSidebar() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'none';
    }
    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 200;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navlinksSidebar.forEach(link => {
                    link.classList.remove('active');
                });
                navlinksHeader.forEach(link => {
                    link.classList.remove('active');
                });
                document.querySelector('.sidebar li a[href="#' + id + '"]').classList.add('active');
                document.querySelector('.header-bar li a[href="#' + id + '"]').classList.add('active');
            }
        });
    };

    // Add event listener to each sidebar link to hide the sidebar when clicked
    navlinksSidebar.forEach(link => {
        link.addEventListener('click', () => {
            hideSidebar();
        });
    });

    // Add event listener to each header link
    navlinksHeader.forEach(link => {
        link.addEventListener('click', () => {
            navlinksSidebar.forEach(navlink => {
                navlink.classList.remove('active');
            });
            navlinksHeader.forEach(headerLink => {
                headerLink.classList.remove('active');
            });
            link.classList.add('active');
        });
    });
};


gsap.fromTo(
    ".loading-page",
    { opacity: 1 },
    {
      opacity: 0,
      display: "none",
      duration: 1.5,
      delay: 3.5,
    }
  );
  gsap.fromTo(
    ".logo-name",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 2,
      delay: 0.5,
    }
  );


document.addEventListener("DOMContentLoaded", function() {
    var animatedElements = document.querySelectorAll('.animate-on-scroll');

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function onScroll() {
        animatedElements.forEach(function(el) {
            if (isElementInViewport(el)) {
                el.classList.add('animate');
            } else {
                el.classList.remove('animate'); // Remove animation class if element is out of view
            }
        });
    }

    window.addEventListener('scroll', onScroll);

    // Trigger the animation on page load
    onScroll();
});



    
 /*portfolio-filter---------------------------------*/
 $(document).ready(function(){
        $('.list').click(function(){
            const value = $(this).attr('data-filter');
            if(value == 'all'){
                $('.portfolio-box').show('1000');
            }
            else{
                $('.portfolio-box').not('.'+value).hide('1000');
                $('.portfolio-box').filter('.'+value).show('1000');
            }
        });
    });



    
// var icon = document.getElementById("toggle");
// icon.onclick = function(){
//     document.body.classList.toggle("light-theme");
//     if(document.body.classList.contains("light-theme")){
//         toggle.src="https://i.ibb.co/6nfwj7g/Screenshot-2024-07-02-132432.png";
//     }
//     else{
//         toggle.src="https://i.ibb.co/LYkHrkf/brightness.png";
//     }
// }