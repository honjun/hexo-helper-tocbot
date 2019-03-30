const _ = require('lodash');
hexo.extend.helper.register('tocbot', function(args){

  const defaultConfig = {
    // Where to render the table of contents.
    tocSelector: '.js-toc',
    // Where to grab the headings to build the table of contents.
    contentSelector: '.js-toc-content',
    // Which headings to grab inside of the contentSelector element.
    headingSelector: 'h1, h2, h3',
    // Headings that match the ignoreSelector will be skipped.
    ignoreSelector: '.js-toc-ignore',
    // Main class to add to links.
    linkClass: 'toc-link',
    // Extra classes to add to links.
    extraLinkClasses: '',
    // Class to add to active links,
    // the link corresponding to the top most heading on the page.
    activeLinkClass: 'is-active-link',
    // Main class to add to lists.
    listClass: 'toc-list',
    // Extra classes to add to lists.
    extraListClasses: '',
    // Class that gets added when a list should be collapsed.
    isCollapsedClass: 'is-collapsed',
    // Class that gets added when a list should be able
    // to be collapsed but isn't necessarily collpased.
    collapsibleClass: 'is-collapsible',
    // Class to add to list items.
    listItemClass: 'toc-list-item',
    // Class to add to active list items.
    activeListItemClass: 'is-active-li',
    // How many heading levels should not be collpased.
    // For example, number 6 will show everything since
    // there are only 6 heading levels and number 0 will collpase them all.
    // The sections that are hidden will open
    // and close as you scroll to headings within them.
    collapseDepth: 0,
    // Smooth scrolling enabled.
    scrollSmooth: true,
    // Smooth scroll duration.
    scrollSmoothDuration: 420,
    // Smooth scroll offset.
    scrollSmoothOffset: 0,
    // Callback for scroll end.
    scrollEndCallback: function (e) {},
    // Headings offset between the headings and the top of the document (this is meant for minor adjustments).
    headingsOffset: 1,
    // Timeout between events firing to make sure it's
    // not too rapid (for performance reasons).
    throttleTimeout: 50,
    // Element to add the positionFixedClass to.
    positionFixedSelector: null,
    // Fixed position class to add to make sidebar fixed after scrolling
    // down past the fixedSidebarOffset.
    positionFixedClass: 'is-position-fixed',
    // fixedSidebarOffset can be any number but by default is set
    // to auto which sets the fixedSidebarOffset to the sidebar
    // element's offsetTop from the top of the document on init.
    fixedSidebarOffset: 'auto',
    // includeHtml can be set to true to include the HTML markup from the
    // heading node instead of just including the textContent.
    includeHtml: false,
    // onclick function to apply to all links in toc. will be called with
    // the event as the first parameter, and this can be used to stop,
    // propagation, prevent default or perform action
    onClick: false,
    // orderedList can be set to false to generate unordered lists (ul)
    // instead of ordered lists (ol)
    orderedList: true,
    // If there is a fixed article scroll container, set to calculate titles' offset
    scrollContainer: null
  };
  top = args[0] || '60px';
  right = args[1] || 'calc((100% - 950px - 250px) / 2)';
  let config = _.defaultsDeep({}, hexo.config.tocbot, hexo.theme.config.tocbot, defaultConfig);
  let result = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/honjun/hexo-helper-tocbot/css/tocbot.css"><style>
    .js-toc {
        width: 200px;
        height: auto;
        z-index: 98;
        background-color: rgba(255,255,255,0);
        transform: translateX(0);
        right: ${right};
        top: ${top};
        position: fixed;
        padding-top: 10px;
        padding-bottom: 10px;
    }
  </style><script src="https://cdn.jsdelivr.net/gh/honjun/hexo-helper-tocbot/js/tocbot.js"></script><div class="js-toc"></div><script type="text/javascript">
    tocbot.init(${JSON.stringify(config)})
  </script>`
  return result;
});