// Start tabs.js
function tab () {

    'use strict';

    /**
     * tabs
     *
     * @description The Tabs component.
     * @param {Object} options The options hash
     */
    var tabs = function (options) {

        var el = document.querySelector(options.el);
        if(el) {
            var tabNavigationLinks = el.querySelectorAll(options.tabNavigationLinks);
            var tabContentContainers = el.querySelectorAll(options.tabContentContainers);
            var activeIndex = 0;
            var initCalled = false;
       
        /**
         * init
         *
         * @description Initializes the component by removing the no-js class from
         *   the component, and attaching event listeners to each of the nav items.
         *   Returns nothing.
         */
        var init = function () {
            if (!initCalled) {
                initCalled = true;
                el.classList.remove('no-js');

                for (var i = 0; i < tabNavigationLinks.length; i++) {
                    var link = tabNavigationLinks[i];
                    handleClick(link, i);
                }
            }
        };

        /**
         * handleClick
         *
         * @description Handles click event listeners on each of the links in the
         *   tab navigation. Returns nothing.
         * @param {HTMLElement} link The link to listen for events on
         * @param {Number} index The index of that link
         */
        var handleClick = function (link, index) {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                goToTab(index);
            });
        };

        /**
         * goToTab
         *
         * @description Goes to a specific tab based on index. Returns nothing.
         * @param {Number} index The index of the tab to go to
         */
        var goToTab = function (index) {
            if (index !== activeIndex && index >= 0 && index <= tabNavigationLinks.length) {
                tabNavigationLinks[activeIndex].classList.remove('is-active');
                tabNavigationLinks[index].classList.add('is-active');
                tabContentContainers[activeIndex] ? tabContentContainers[activeIndex].classList.remove('is-active') : undefined;
                tabContentContainers[index] ? tabContentContainers[index].classList.add('is-active') : undefined;
                activeIndex = index;
            }
        };

        /**
         * Returns init and goToTab
         */
        return {
            init: init,
            goToTab: goToTab
        };
    }
    };

    /**
     * Attach to global namespace
     */
    window.tabs = tabs;

};
// End tabs.js


// Initialise at bottom of HTML in a <script> tag or within your main js bundle somewhere.

// Set 1 


// Set 2
// var myTabs2 = tabs({
//     el: '#tabs2',
//     tabNavigationLinks: '.tab-link',
//     tabContentContainers: '.tab-content'
// });

// Initialise Set 1

    tab();

    // lv1
    var tabsLinkLv1 = tabs({
        el: '#tabs',
        tabNavigationLinks: '.menu-content-tabs__links .tab-link_lv-1',
        tabContentContainers: '.menu-content-tabs__links .tab-content_lv-1'
    });
    if(tabsLinkLv1){
        tabsLinkLv1.init();
    }
    var tabsContentLv1 = tabs({
        el: '#tabs',
        tabNavigationLinks: '.menu-content-tabs__links .tab-link_lv-1',
        tabContentContainers: '.menu-content__img-container .tab-content_lv-1'
    });
    if(tabsContentLv1){
        tabsContentLv1.init();
    }

    //Lv2
    var tabsLv2c1 = tabs({
        el: '#tabs',
        tabNavigationLinks: '.menu-content-tabs__links .tab-link_lv-2-1',
        tabContentContainers: '.menu-content__img-container .tab-content_lv-2-1'
    });
    if(tabsLv2c1){
        tabsLv2c1.init();
    }
    var tabsLv2c2 = tabs({
        el: '#tabs',
        tabNavigationLinks: '.menu-content-tabs__links .tab-link_lv-2-2',
        tabContentContainers: '.menu-content__img-container .tab-content_lv-2-2'
    });
    if(tabsLv2c2){
        tabsLv2c2.init();
    }
    //Lv3
    for(let i = 1; i < 8; i++){
        let tabsLv3c1 = tabs({
            el: '#tabs',
            tabNavigationLinks: '.menu-content-tabs__links .tab-link_lv-3-1',
            tabContentContainers: `.menu-content__img-container .tab-content_lv-3-${i}`
        });
        if(tabsLv3c1){
            tabsLv3c1.init();
        }
    }
    for(let i = 1; i < 8; i++){
        let tabsLv3c1 = tabs({
            el: '#tabs',
            tabNavigationLinks: '.menu-content-tabs__links .tab-link_lv-3-2',
            tabContentContainers: `.menu-content__img-container .tab-content_lv-3-2-${i}`
        });
        if(tabsLv3c1){
            tabsLv3c1.init();
        }
    }
   
//     setTimeout(()=>{
//  },100);

// // Initialise Set 2 
// myTabs2.init();