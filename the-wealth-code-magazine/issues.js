/* The Wealth Code Magazine — issue list. Newest first.
   Add one line at the top for each new issue. Every page's menu reads this. */
window.WCM_ISSUES = [
  {n:"05", slug:"issue-05", title:"Women and Wealth"},
  {n:"04", slug:"issue-04", title:"The Weekend Handyman"},
  {n:"03", slug:"issue-03", title:"Things People Throw Away"},
  {n:"02", slug:"issue-02", title:"Small-Town Opportunities"},
  {n:"01", slug:"issue-01", title:"Real Side Hustle Ideas"}
];
(function(){
  var L = window.WCM_ISSUES, MAX = 6, base = "/the-wealth-code-magazine/";
  function build(){
    document.querySelectorAll("ul.sub-menu").forEach(function(ul){
      if (!ul.querySelector('a[href*="issue-0"], a[href*="issue-1"]')) return;
      var h = "";
      L.slice(0, MAX).forEach(function(i){
        var cur = location.pathname.indexOf(base + i.slug + "/") === 0;
        h += '<li class="menu-item' + (cur ? ' current-menu-item' : '') + '"><a href="' + base + i.slug + '/"' + (cur ? ' aria-current="page"' : '') + '>Issue ' + i.n + '</a></li>';
      });
      h += '<li class="menu-item"><a href="' + base + '#feature-issues">All issues</a></li>';
      ul.innerHTML = h;
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", build); else build();
})();
