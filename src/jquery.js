


<!DOCTYPE html>
<html>
  <head>
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="chrome=1">
        <title>example/jquery/jquery.js at master from tmpvar/jsdom - GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />

    
    

    <meta content="authenticity_token" name="csrf-param" />
<meta content="21ca878379a67f811aab9ef61471b62f86645619" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/stylesheets/bundle_github.css?5d20147077c599098f68712cc3fef34df0cb3bcd" media="screen" rel="stylesheet" type="text/css" />
    

    <script src="https://a248.e.akamai.net/assets.github.com/javascripts/bundle_jquery.js?1cda878e9113acce74087d5ff1a5e1c49fb94eeb" type="text/javascript"></script>
    <script src="https://a248.e.akamai.net/assets.github.com/javascripts/bundle_github.js?88c2b5bccd6a2a3b368f3ed58fe6fcf0582e5ca6" type="text/javascript"></script>
    

      <link rel='permalink' href='/tmpvar/jsdom/blob/aa45593b6e1b53eb7d808bfd300f7a9698968860/example/jquery/jquery.js'>
    

    <meta name="description" content="jsdom - CommonJS implementation of the DOM intended to be platform independent and as minimal/light as possible while completely adhering to the w3c DOM specifications." />
  <link href="https://github.com/tmpvar/jsdom/commits/master.atom" rel="alternate" title="Recent Commits to jsdom:master" type="application/atom+xml" />

  </head>


  <body class="logged_out page-blob  env-production ">
    


    

    <div id="main">
      <div id="header" class="true">
          <a class="logo" href="https://github.com">
            <img alt="github" class="default svg" height="45" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov6.svg" />
            <img alt="github" class="default png" height="45" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov6.png" />
            <!--[if (gt IE 8)|!(IE)]><!-->
            <img alt="github" class="hover svg" height="45" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov6-hover.svg" />
            <img alt="github" class="hover png" height="45" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov6-hover.png" />
            <!--<![endif]-->
          </a>

        <div class="topsearch">
    <!--
      make sure to use fully qualified URLs here since this nav
      is used on error pages on other domains
    -->
    <ul class="nav logged_out">
        <li class="pricing"><a href="https://github.com/plans">Signup and Pricing</a></li>
        <li class="explore"><a href="https://github.com/explore">Explore GitHub</a></li>
      <li class="features"><a href="https://github.com/features">Features</a></li>
        <li class="blog"><a href="https://github.com/blog">Blog</a></li>
      <li class="login"><a href="https://github.com/login?return_to=%2Ftmpvar%2Fjsdom%2Fblob%2Fmaster%2Fexample%2Fjquery%2Fjquery.js">Login</a></li>
    </ul>
</div>

      </div>

      
            <div class="site">
      <div class="pagehead repohead vis-public   instapaper_ignore readability-menu">


      <div class="title-actions-bar">
        <h1>
          <a href="/tmpvar">tmpvar</a> /
          <strong><a href="/tmpvar/jsdom" class="js-current-repository">jsdom</a></strong>
        </h1>
        



            <ul class="pagehead-actions">

        <li>
            <a href="/tmpvar/jsdom/toggle_watch" class="minibutton btn-watch watch-button" data-method="post"><span><span class="icon"></span>Watch</span></a>
        </li>
            <li><a href="/tmpvar/jsdom/fork" class="minibutton btn-fork fork-button" data-method="post"><span><span class="icon"></span>Fork</span></a></li>

      <li class="repostats">
        <ul class="repo-stats">
          <li class="watchers ">
            <a href="/tmpvar/jsdom/watchers" title="Watchers" class="tooltipped downwards">
              993
            </a>
          </li>
          <li class="forks">
            <a href="/tmpvar/jsdom/network" title="Forks" class="tooltipped downwards">
              117
            </a>
          </li>
        </ul>
      </li>
    </ul>

      </div>

        

  <ul class="tabs">
    <li><a href="/tmpvar/jsdom" class="selected" highlight="repo_sourcerepo_downloadsrepo_commitsrepo_tagsrepo_branches">Code</a></li>
    <li><a href="/tmpvar/jsdom/network" highlight="repo_networkrepo_fork_queue">Network</a>
    <li><a href="/tmpvar/jsdom/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>2</span></a></li>

      <li><a href="/tmpvar/jsdom/issues" highlight="repo_issues">Issues <span class='counter'>65</span></a></li>

      <li><a href="/tmpvar/jsdom/wiki" highlight="repo_wiki">Wiki <span class='counter'>1</span></a></li>

    <li><a href="/tmpvar/jsdom/graphs" highlight="repo_graphsrepo_contributors">Stats &amp; Graphs</a></li>

  </ul>

  
<div class="frame frame-center tree-finder" style="display:none"
      data-tree-list-url="/tmpvar/jsdom/tree-list/aa45593b6e1b53eb7d808bfd300f7a9698968860"
      data-blob-url-prefix="/tmpvar/jsdom/blob/aa45593b6e1b53eb7d808bfd300f7a9698968860"
    >

  <div class="breadcrumb">
    <b><a href="/tmpvar/jsdom">jsdom</a></b> /
    <input class="tree-finder-input" type="text" name="query" autocomplete="off" spellcheck="false">
  </div>

    <div class="octotip">
      <p>
        <a href="/tmpvar/jsdom/dismiss-tree-finder-help" class="dismiss js-dismiss-tree-list-help" title="Hide this notice forever">Dismiss</a>
        <strong>Octotip:</strong> You've activated the <em>file finder</em>
        by pressing <span class="kbd">t</span> Start typing to filter the
        file list. Use <span class="kbd badmono">↑</span> and
        <span class="kbd badmono">↓</span> to navigate,
        <span class="kbd">enter</span> to view files.
      </p>
    </div>

  <table class="tree-browser" cellpadding="0" cellspacing="0">
    <tr class="js-header"><th>&nbsp;</th><th>name</th></tr>
    <tr class="js-no-results no-results" style="display: none">
      <th colspan="2">No matching files</th>
    </tr>
    <tbody class="js-results-list">
    </tbody>
  </table>
</div>

<div id="jump-to-line" style="display:none">
  <h2>Jump to Line</h2>
  <form>
    <input class="textfield" type="text">
    <div class="full-button">
      <button type="submit" class="classy">
        <span>Go</span>
      </button>
    </div>
  </form>
</div>


<div class="subnav-bar">

  <ul class="actions">
    
      <li class="switcher">

        <div class="context-menu-container js-menu-container">
          <span class="text">Current branch:</span>
          <a href="#"
             class="minibutton bigger switcher context-menu-button js-menu-target js-commitish-button btn-branch repo-tree"
             data-master-branch="master"
             data-ref="master">
            <span><span class="icon"></span>master</span>
          </a>

          <div class="context-pane commitish-context js-menu-content">
            <a href="javascript:;" class="close js-menu-close"></a>
            <div class="title">Switch Branches/Tags</div>
            <div class="body pane-selector commitish-selector js-filterable-commitishes">
              <div class="filterbar">
                <div class="placeholder-field js-placeholder-field">
                  <label class="placeholder" for="context-commitish-filter-field" data-placeholder-mode="sticky">Filter branches/tags</label>
                  <input type="text" id="context-commitish-filter-field" class="commitish-filter" />
                </div>

                <ul class="tabs">
                  <li><a href="#" data-filter="branches" class="selected">Branches</a></li>
                  <li><a href="#" data-filter="tags">Tags</a></li>
                </ul>
              </div>

                <div class="commitish-item branch-commitish selector-item">
                  <h4>
                      <a href="/tmpvar/jsdom/blob/document-inherits-from-node/example/jquery/jquery.js" data-name="document-inherits-from-node">document-inherits-from-node</a>
                  </h4>
                </div>
                <div class="commitish-item branch-commitish selector-item">
                  <h4>
                      <a href="/tmpvar/jsdom/blob/level2/example/jquery/jquery.js" data-name="level2">level2</a>
                  </h4>
                </div>
                <div class="commitish-item branch-commitish selector-item">
                  <h4>
                      <a href="/tmpvar/jsdom/blob/level2-stepping-back/example/jquery/jquery.js" data-name="level2-stepping-back">level2-stepping-back</a>
                  </h4>
                </div>
                <div class="commitish-item branch-commitish selector-item">
                  <h4>
                      <a href="/tmpvar/jsdom/blob/level2_last_test/example/jquery/jquery.js" data-name="level2_last_test">level2_last_test</a>
                  </h4>
                </div>
                <div class="commitish-item branch-commitish selector-item">
                  <h4>
                      <a href="/tmpvar/jsdom/blob/level3/example/jquery/jquery.js" data-name="level3">level3</a>
                  </h4>
                </div>
                <div class="commitish-item branch-commitish selector-item">
                  <h4>
                      <a href="/tmpvar/jsdom/blob/level3-core/example/jquery/jquery.js" data-name="level3-core">level3-core</a>
                  </h4>
                </div>
                <div class="commitish-item branch-commitish selector-item">
                  <h4>
                      <a href="/tmpvar/jsdom/blob/master/example/jquery/jquery.js" data-name="master">master</a>
                  </h4>
                </div>
                <div class="commitish-item branch-commitish selector-item">
                  <h4>
                      <a href="/tmpvar/jsdom/blob/nodeunit-tests/example/jquery/jquery.js" data-name="nodeunit-tests">nodeunit-tests</a>
                  </h4>
                </div>
                <div class="commitish-item branch-commitish selector-item">
                  <h4>
                      <a href="/tmpvar/jsdom/blob/perf/example/jquery/jquery.js" data-name="perf">perf</a>
                  </h4>
                </div>
                <div class="commitish-item branch-commitish selector-item">
                  <h4>
                      <a href="/tmpvar/jsdom/blob/swizec-merge/example/jquery/jquery.js" data-name="swizec-merge">swizec-merge</a>
                  </h4>
                </div>
                <div class="commitish-item branch-commitish selector-item">
                  <h4>
                      <a href="/tmpvar/jsdom/blob/xpath/example/jquery/jquery.js" data-name="xpath">xpath</a>
                  </h4>
                </div>

                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/tmpvar/jsdom/blob/v0.1/example/jquery/jquery.js" data-name="v0.1">v0.1</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/tmpvar/jsdom/blob/rm/example/jquery/jquery.js" data-name="rm">rm</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/tmpvar/jsdom/blob/0.2.9/example/jquery/jquery.js" data-name="0.2.9">0.2.9</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/tmpvar/jsdom/blob/0.2.8/example/jquery/jquery.js" data-name="0.2.8">0.2.8</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/tmpvar/jsdom/blob/0.2.7/example/jquery/jquery.js" data-name="0.2.7">0.2.7</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/tmpvar/jsdom/blob/0.2.6/example/jquery/jquery.js" data-name="0.2.6">0.2.6</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/tmpvar/jsdom/blob/0.2.5/example/jquery/jquery.js" data-name="0.2.5">0.2.5</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/tmpvar/jsdom/blob/0.2.4/example/jquery/jquery.js" data-name="0.2.4">0.2.4</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/tmpvar/jsdom/blob/0.2.3/example/jquery/jquery.js" data-name="0.2.3">0.2.3</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/tmpvar/jsdom/blob/0.2.2/example/jquery/jquery.js" data-name="0.2.2">0.2.2</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/tmpvar/jsdom/blob/0.2.1/example/jquery/jquery.js" data-name="0.2.1">0.2.1</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/tmpvar/jsdom/blob/0.2.0/example/jquery/jquery.js" data-name="0.2.0">0.2.0</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/tmpvar/jsdom/blob/0.1.23/example/jquery/jquery.js" data-name="0.1.23">0.1.23</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/tmpvar/jsdom/blob/0.1.22/example/jquery/jquery.js" data-name="0.1.22">0.1.22</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/tmpvar/jsdom/blob/0.1.21/example/jquery/jquery.js" data-name="0.1.21">0.1.21</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/tmpvar/jsdom/blob/0.1.20/example/jquery/jquery.js" data-name="0.1.20">0.1.20</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/tmpvar/jsdom/blob/0.1.19/example/jquery/jquery.js" data-name="0.1.19">0.1.19</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/tmpvar/jsdom/blob/0.1.18/example/jquery/jquery.js" data-name="0.1.18">0.1.18</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/tmpvar/jsdom/blob/0.1.17/example/jquery/jquery.js" data-name="0.1.17">0.1.17</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/tmpvar/jsdom/blob/0.1.16/example/jquery/jquery.js" data-name="0.1.16">0.1.16</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/tmpvar/jsdom/blob/0.1.15/example/jquery/jquery.js" data-name="0.1.15">0.1.15</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/tmpvar/jsdom/blob/0.1.14/example/jquery/jquery.js" data-name="0.1.14">0.1.14</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/tmpvar/jsdom/blob/0.1.13/example/jquery/jquery.js" data-name="0.1.13">0.1.13</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/tmpvar/jsdom/blob/0.1.12/example/jquery/jquery.js" data-name="0.1.12">0.1.12</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/tmpvar/jsdom/blob/0.1.11/example/jquery/jquery.js" data-name="0.1.11">0.1.11</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/tmpvar/jsdom/blob/0.1.10/example/jquery/jquery.js" data-name="0.1.10">0.1.10</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/tmpvar/jsdom/blob/0.1.9/example/jquery/jquery.js" data-name="0.1.9">0.1.9</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/tmpvar/jsdom/blob/0.1.8/example/jquery/jquery.js" data-name="0.1.8">0.1.8</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/tmpvar/jsdom/blob/0.1.7/example/jquery/jquery.js" data-name="0.1.7">0.1.7</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/tmpvar/jsdom/blob/0.1.6/example/jquery/jquery.js" data-name="0.1.6">0.1.6</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/tmpvar/jsdom/blob/0.1.5/example/jquery/jquery.js" data-name="0.1.5">0.1.5</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/tmpvar/jsdom/blob/0.1.4/example/jquery/jquery.js" data-name="0.1.4">0.1.4</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/tmpvar/jsdom/blob/0.1.3/example/jquery/jquery.js" data-name="0.1.3">0.1.3</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/tmpvar/jsdom/blob/0.1.2/example/jquery/jquery.js" data-name="0.1.2">0.1.2</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/tmpvar/jsdom/blob/0.1.1/example/jquery/jquery.js" data-name="0.1.1">0.1.1</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/tmpvar/jsdom/blob/0.0.2/example/jquery/jquery.js" data-name="0.0.2">0.0.2</a>
                  </h4>
                </div>

              <div class="no-results" style="display:none">Nothing to show</div>
            </div>
          </div><!-- /.commitish-context-context -->
        </div>

      </li>
  </ul>

  <ul class="subnav">
    <li><a href="/tmpvar/jsdom" class="selected" highlight="repo_source">Files</a></li>
    <li><a href="/tmpvar/jsdom/commits/master" highlight="repo_commits">Commits</a></li>
    <li><a href="/tmpvar/jsdom/branches" class="" highlight="repo_branches">Branches <span class="counter">11</span></a></li>
    <li><a href="/tmpvar/jsdom/tags" class="" highlight="repo_tags">Tags <span class="counter">36</span></a></li>
    <li><a href="/tmpvar/jsdom/downloads" class="blank" highlight="repo_downloads">Downloads <span class="counter">0</span></a></li>
  </ul>

</div>

  
  
  


        

      </div><!-- /.pagehead -->

      




  
  <p class="last-commit">Latest commit to the <strong>master</strong> branch</p>

<div class="commit commit-tease js-details-container">
  <p class="commit-title ">
      <a href="/tmpvar/jsdom"><a href="/tmpvar/jsdom/commit/aa45593b6e1b53eb7d808bfd300f7a9698968860" class="message">Bump version, update changelog</a></a>
      
  </p>
  <div class="commit-meta">
    <a href="/tmpvar/jsdom/commit/aa45593b6e1b53eb7d808bfd300f7a9698968860" class="sha-block">commit <span class="sha">aa45593b6e</span></a>

    <div class="authorship">
      <img class="gravatar" height="20" src="https://secure.gravatar.com/avatar/2893bc1693002e652210b3705f74b5dd?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" />
      <span class="author-name"><a href="/tmpvar">tmpvar</a></span>
      authored <time class="js-relative-date" datetime="2011-10-30T19:55:27-07:00" title="2011-10-30 19:55:27">October 30, 2011</time>

    </div>
  </div>
</div>


  <div id="slider">

    <div class="breadcrumb" data-path="example/jquery/jquery.js/">
      <b><a href="/tmpvar/jsdom/tree/aa45593b6e1b53eb7d808bfd300f7a9698968860" class="js-rewrite-sha">jsdom</a></b> / <a href="/tmpvar/jsdom/tree/aa45593b6e1b53eb7d808bfd300f7a9698968860/example" class="js-rewrite-sha">example</a> / <a href="/tmpvar/jsdom/tree/aa45593b6e1b53eb7d808bfd300f7a9698968860/example/jquery" class="js-rewrite-sha">jquery</a> / jquery.js       <span style="display:none" id="clippy_4838" class="clippy-text">example/jquery/jquery.js</span>
      
      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
              width="110"
              height="14"
              class="clippy"
              id="clippy" >
      <param name="movie" value="https://a248.e.akamai.net/assets.github.com/flash/clippy.swf?v5"/>
      <param name="allowScriptAccess" value="always" />
      <param name="quality" value="high" />
      <param name="scale" value="noscale" />
      <param NAME="FlashVars" value="id=clippy_4838&amp;copied=copied!&amp;copyto=copy to clipboard">
      <param name="bgcolor" value="#FFFFFF">
      <param name="wmode" value="opaque">
      <embed src="https://a248.e.akamai.net/assets.github.com/flash/clippy.swf?v5"
             width="110"
             height="14"
             name="clippy"
             quality="high"
             allowScriptAccess="always"
             type="application/x-shockwave-flash"
             pluginspage="http://www.macromedia.com/go/getflashplayer"
             FlashVars="id=clippy_4838&amp;copied=copied!&amp;copyto=copy to clipboard"
             bgcolor="#FFFFFF"
             wmode="opaque"
      />
      </object>
      

    </div>

    <div class="frames">
      <div class="frame frame-center" data-path="example/jquery/jquery.js/" data-permalink-url="/tmpvar/jsdom/blob/aa45593b6e1b53eb7d808bfd300f7a9698968860/example/jquery/jquery.js" data-title="example/jquery/jquery.js at master from tmpvar/jsdom - GitHub" data-type="blob">
          <ul class="big-actions">
            <li><a class="file-edit-link minibutton js-rewrite-sha" href="/tmpvar/jsdom/edit/aa45593b6e1b53eb7d808bfd300f7a9698968860/example/jquery/jquery.js" data-method="post"><span>Edit this file</span></a></li>
          </ul>

        <div id="files">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><img alt="Txt" height="16" src="https://a248.e.akamai.net/assets.github.com/images/icons/txt.png" width="16" /></span>
                <span class="mode" title="File Mode">100644</span>
                  <span>168 lines (167 sloc)</span>
                <span>78.601 kb</span>
              </div>
              <ul class="actions">
                <li><a href="/tmpvar/jsdom/raw/master/example/jquery/jquery.js" id="raw-url">raw</a></li>
                  <li><a href="/tmpvar/jsdom/blame/master/example/jquery/jquery.js">blame</a></li>
                <li><a href="/tmpvar/jsdom/commits/master/example/jquery/jquery.js">history</a></li>
              </ul>
            </div>
              <div class="data type-javascript">
      <table cellpadding="0" cellspacing="0" class="lines">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
</pre>
          </td>
          <td width="100%">
                <div class="highlight"><pre><div class='line' id='LC1'>/*!</div><div class='line' id='LC2'>&nbsp;* jQuery JavaScript Library v1.4.4</div><div class='line' id='LC3'>&nbsp;* http://jquery.com/</div><div class='line' id='LC4'>&nbsp;*</div><div class='line' id='LC5'>&nbsp;* Copyright 2010, John Resig</div><div class='line' id='LC6'>&nbsp;* Dual licensed under the MIT or GPL Version 2 licenses.</div><div class='line' id='LC7'>&nbsp;* http://jquery.org/license</div><div class='line' id='LC8'>&nbsp;*</div><div class='line' id='LC9'>&nbsp;* Includes Sizzle.js</div><div class='line' id='LC10'>&nbsp;* http://sizzlejs.com/</div><div class='line' id='LC11'>&nbsp;* Copyright 2010, The Dojo Foundation</div><div class='line' id='LC12'>&nbsp;* Released under the MIT, BSD, and GPL Licenses.</div><div class='line' id='LC13'>&nbsp;*</div><div class='line' id='LC14'>&nbsp;* Date: Thu Nov 11 19:04:53 2010 -0500</div><div class='line' id='LC15'>&nbsp;*/</div><div class='line' id='LC16'>(function(E,B){function ka(a,b,d){if(d===B&amp;&amp;a.nodeType===1){d=a.getAttribute(&quot;data-&quot;+b);if(typeof d===&quot;string&quot;){try{d=d===&quot;true&quot;?true:d===&quot;false&quot;?false:d===&quot;null&quot;?null:!c.isNaN(d)?parseFloat(d):Ja.test(d)?c.parseJSON(d):d}catch(e){}c.data(a,b,d)}else d=B}return d}function U(){return false}function ca(){return true}function la(a,b,d){d[0].type=a;return c.event.handle.apply(b,d)}function Ka(a){var b,d,e,f,h,l,k,o,x,r,A,C=[];f=[];h=c.data(this,this.nodeType?&quot;events&quot;:&quot;__events__&quot;);if(typeof h===&quot;function&quot;)h=</div><div class='line' id='LC17'>h.events;if(!(a.liveFired===this||!h||!h.live||a.button&amp;&amp;a.type===&quot;click&quot;)){if(a.namespace)A=RegExp(&quot;(^|\\.)&quot;+a.namespace.split(&quot;.&quot;).join(&quot;\\.(?:.*\\.)?&quot;)+&quot;(\\.|$)&quot;);a.liveFired=this;var J=h.live.slice(0);for(k=0;k&lt;J.length;k++){h=J[k];h.origType.replace(X,&quot;&quot;)===a.type?f.push(h.selector):J.splice(k--,1)}f=c(a.target).closest(f,a.currentTarget);o=0;for(x=f.length;o&lt;x;o++){r=f[o];for(k=0;k&lt;J.length;k++){h=J[k];if(r.selector===h.selector&amp;&amp;(!A||A.test(h.namespace))){l=r.elem;e=null;if(h.preType===&quot;mouseenter&quot;||</div><div class='line' id='LC18'>h.preType===&quot;mouseleave&quot;){a.type=h.preType;e=c(a.relatedTarget).closest(h.selector)[0]}if(!e||e!==l)C.push({elem:l,handleObj:h,level:r.level})}}}o=0;for(x=C.length;o&lt;x;o++){f=C[o];if(d&amp;&amp;f.level&gt;d)break;a.currentTarget=f.elem;a.data=f.handleObj.data;a.handleObj=f.handleObj;A=f.handleObj.origHandler.apply(f.elem,arguments);if(A===false||a.isPropagationStopped()){d=f.level;if(A===false)b=false;if(a.isImmediatePropagationStopped())break}}return b}}function Y(a,b){return(a&amp;&amp;a!==&quot;*&quot;?a+&quot;.&quot;:&quot;&quot;)+b.replace(La,</div><div class='line' id='LC19'>&quot;`&quot;).replace(Ma,&quot;&amp;&quot;)}function ma(a,b,d){if(c.isFunction(b))return c.grep(a,function(f,h){return!!b.call(f,h,f)===d});else if(b.nodeType)return c.grep(a,function(f){return f===b===d});else if(typeof b===&quot;string&quot;){var e=c.grep(a,function(f){return f.nodeType===1});if(Na.test(b))return c.filter(b,e,!d);else b=c.filter(b,e)}return c.grep(a,function(f){return c.inArray(f,b)&gt;=0===d})}function na(a,b){var d=0;b.each(function(){if(this.nodeName===(a[d]&amp;&amp;a[d].nodeName)){var e=c.data(a[d++]),f=c.data(this,</div><div class='line' id='LC20'>e);if(e=e&amp;&amp;e.events){delete f.handle;f.events={};for(var h in e)for(var l in e[h])c.event.add(this,h,e[h][l],e[h][l].data)}}})}function Oa(a,b){b.src?c.ajax({url:b.src,async:false,dataType:&quot;script&quot;}):c.globalEval(b.text||b.textContent||b.innerHTML||&quot;&quot;);b.parentNode&amp;&amp;b.parentNode.removeChild(b)}function oa(a,b,d){var e=b===&quot;width&quot;?a.offsetWidth:a.offsetHeight;if(d===&quot;border&quot;)return e;c.each(b===&quot;width&quot;?Pa:Qa,function(){d||(e-=parseFloat(c.css(a,&quot;padding&quot;+this))||0);if(d===&quot;margin&quot;)e+=parseFloat(c.css(a,</div><div class='line' id='LC21'>&quot;margin&quot;+this))||0;else e-=parseFloat(c.css(a,&quot;border&quot;+this+&quot;Width&quot;))||0});return e}function da(a,b,d,e){if(c.isArray(b)&amp;&amp;b.length)c.each(b,function(f,h){d||Ra.test(a)?e(a,h):da(a+&quot;[&quot;+(typeof h===&quot;object&quot;||c.isArray(h)?f:&quot;&quot;)+&quot;]&quot;,h,d,e)});else if(!d&amp;&amp;b!=null&amp;&amp;typeof b===&quot;object&quot;)c.isEmptyObject(b)?e(a,&quot;&quot;):c.each(b,function(f,h){da(a+&quot;[&quot;+f+&quot;]&quot;,h,d,e)});else e(a,b)}function S(a,b){var d={};c.each(pa.concat.apply([],pa.slice(0,b)),function(){d[this]=a});return d}function qa(a){if(!ea[a]){var b=c(&quot;&lt;&quot;+</div><div class='line' id='LC22'>a+&quot;&gt;&quot;).appendTo(&quot;body&quot;),d=b.css(&quot;display&quot;);b.remove();if(d===&quot;none&quot;||d===&quot;&quot;)d=&quot;block&quot;;ea[a]=d}return ea[a]}function fa(a){return c.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:false}var t=E.document,c=function(){function a(){if(!b.isReady){try{t.documentElement.doScroll(&quot;left&quot;)}catch(j){setTimeout(a,1);return}b.ready()}}var b=function(j,s){return new b.fn.init(j,s)},d=E.jQuery,e=E.$,f,h=/^(?:[^&lt;]*(&lt;[\w\W]+&gt;)[^&gt;]*$|#([\w\-]+)$)/,l=/\S/,k=/^\s+/,o=/\s+$/,x=/\W/,r=/\d/,A=/^&lt;(\w+)\s*\/?&gt;(?:&lt;\/\1&gt;)?$/,</div><div class='line' id='LC23'>C=/^[\],:{}\s]*$/,J=/\\(?:[&quot;\\\/bfnrt]|u[0-9a-fA-F]{4})/g,w=/&quot;[^&quot;\\\n\r]*&quot;|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,I=/(?:^|:|,)(?:\s*\[)+/g,L=/(webkit)[ \/]([\w.]+)/,g=/(opera)(?:.*version)?[ \/]([\w.]+)/,i=/(msie) ([\w.]+)/,n=/(mozilla)(?:.*? rv:([\w.]+))?/,m=navigator.userAgent,p=false,q=[],u,y=Object.prototype.toString,F=Object.prototype.hasOwnProperty,M=Array.prototype.push,N=Array.prototype.slice,O=String.prototype.trim,D=Array.prototype.indexOf,R={};b.fn=b.prototype={init:function(j,</div><div class='line' id='LC24'>s){var v,z,H;if(!j)return this;if(j.nodeType){this.context=this[0]=j;this.length=1;return this}if(j===&quot;body&quot;&amp;&amp;!s&amp;&amp;t.body){this.context=t;this[0]=t.body;this.selector=&quot;body&quot;;this.length=1;return this}if(typeof j===&quot;string&quot;)if((v=h.exec(j))&amp;&amp;(v[1]||!s))if(v[1]){H=s?s.ownerDocument||s:t;if(z=A.exec(j))if(b.isPlainObject(s)){j=[t.createElement(z[1])];b.fn.attr.call(j,s,true)}else j=[H.createElement(z[1])];else{z=b.buildFragment([v[1]],[H]);j=(z.cacheable?z.fragment.cloneNode(true):z.fragment).childNodes}return b.merge(this,</div><div class='line' id='LC25'>j)}else{if((z=t.getElementById(v[2]))&amp;&amp;z.parentNode){if(z.id!==v[2])return f.find(j);this.length=1;this[0]=z}this.context=t;this.selector=j;return this}else if(!s&amp;&amp;!x.test(j)){this.selector=j;this.context=t;j=t.getElementsByTagName(j);return b.merge(this,j)}else return!s||s.jquery?(s||f).find(j):b(s).find(j);else if(b.isFunction(j))return f.ready(j);if(j.selector!==B){this.selector=j.selector;this.context=j.context}return b.makeArray(j,this)},selector:&quot;&quot;,jquery:&quot;1.4.4&quot;,length:0,size:function(){return this.length},</div><div class='line' id='LC26'>toArray:function(){return N.call(this,0)},get:function(j){return j==null?this.toArray():j&lt;0?this.slice(j)[0]:this[j]},pushStack:function(j,s,v){var z=b();b.isArray(j)?M.apply(z,j):b.merge(z,j);z.prevObject=this;z.context=this.context;if(s===&quot;find&quot;)z.selector=this.selector+(this.selector?&quot; &quot;:&quot;&quot;)+v;else if(s)z.selector=this.selector+&quot;.&quot;+s+&quot;(&quot;+v+&quot;)&quot;;return z},each:function(j,s){return b.each(this,j,s)},ready:function(j){b.bindReady();if(b.isReady)j.call(t,b);else q&amp;&amp;q.push(j);return this},eq:function(j){return j===</div><div class='line' id='LC27'>-1?this.slice(j):this.slice(j,+j+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(N.apply(this,arguments),&quot;slice&quot;,N.call(arguments).join(&quot;,&quot;))},map:function(j){return this.pushStack(b.map(this,function(s,v){return j.call(s,v,s)}))},end:function(){return this.prevObject||b(null)},push:M,sort:[].sort,splice:[].splice};b.fn.init.prototype=b.fn;b.extend=b.fn.extend=function(){var j,s,v,z,H,G=arguments[0]||{},K=1,Q=arguments.length,ga=false;</div><div class='line' id='LC28'>if(typeof G===&quot;boolean&quot;){ga=G;G=arguments[1]||{};K=2}if(typeof G!==&quot;object&quot;&amp;&amp;!b.isFunction(G))G={};if(Q===K){G=this;--K}for(;K&lt;Q;K++)if((j=arguments[K])!=null)for(s in j){v=G[s];z=j[s];if(G!==z)if(ga&amp;&amp;z&amp;&amp;(b.isPlainObject(z)||(H=b.isArray(z)))){if(H){H=false;v=v&amp;&amp;b.isArray(v)?v:[]}else v=v&amp;&amp;b.isPlainObject(v)?v:{};G[s]=b.extend(ga,v,z)}else if(z!==B)G[s]=z}return G};b.extend({noConflict:function(j){E.$=e;if(j)E.jQuery=d;return b},isReady:false,readyWait:1,ready:function(j){j===true&amp;&amp;b.readyWait--;</div><div class='line' id='LC29'>if(!b.readyWait||j!==true&amp;&amp;!b.isReady){if(!t.body)return setTimeout(b.ready,1);b.isReady=true;if(!(j!==true&amp;&amp;--b.readyWait&gt;0))if(q){var s=0,v=q;for(q=null;j=v[s++];)j.call(t,b);b.fn.trigger&amp;&amp;b(t).trigger(&quot;ready&quot;).unbind(&quot;ready&quot;)}}},bindReady:function(){if(!p){p=true;if(t.readyState===&quot;complete&quot;)return setTimeout(b.ready,1);if(t.addEventListener){t.addEventListener(&quot;DOMContentLoaded&quot;,u,false);E.addEventListener(&quot;load&quot;,b.ready,false)}else if(t.attachEvent){t.attachEvent(&quot;onreadystatechange&quot;,u);E.attachEvent(&quot;onload&quot;,</div><div class='line' id='LC30'>b.ready);var j=false;try{j=E.frameElement==null}catch(s){}t.documentElement.doScroll&amp;&amp;j&amp;&amp;a()}}},isFunction:function(j){return b.type(j)===&quot;function&quot;},isArray:Array.isArray||function(j){return b.type(j)===&quot;array&quot;},isWindow:function(j){return j&amp;&amp;typeof j===&quot;object&quot;&amp;&amp;&quot;setInterval&quot;in j},isNaN:function(j){return j==null||!r.test(j)||isNaN(j)},type:function(j){return j==null?String(j):R[y.call(j)]||&quot;object&quot;},isPlainObject:function(j){if(!j||b.type(j)!==&quot;object&quot;||j.nodeType||b.isWindow(j))return false;if(j.constructor&amp;&amp;</div><div class='line' id='LC31'>!F.call(j,&quot;constructor&quot;)&amp;&amp;!F.call(j.constructor.prototype,&quot;isPrototypeOf&quot;))return false;for(var s in j);return s===B||F.call(j,s)},isEmptyObject:function(j){for(var s in j)return false;return true},error:function(j){throw j;},parseJSON:function(j){if(typeof j!==&quot;string&quot;||!j)return null;j=b.trim(j);if(C.test(j.replace(J,&quot;@&quot;).replace(w,&quot;]&quot;).replace(I,&quot;&quot;)))return E.JSON&amp;&amp;E.JSON.parse?E.JSON.parse(j):(new Function(&quot;return &quot;+j))();else b.error(&quot;Invalid JSON: &quot;+j)},noop:function(){},globalEval:function(j){if(j&amp;&amp;</div><div class='line' id='LC32'>l.test(j)){var s=t.getElementsByTagName(&quot;head&quot;)[0]||t.documentElement,v=t.createElement(&quot;script&quot;);v.type=&quot;text/javascript&quot;;if(b.support.scriptEval)v.appendChild(t.createTextNode(j));else v.text=j;s.insertBefore(v,s.firstChild);s.removeChild(v)}},nodeName:function(j,s){return j.nodeName&amp;&amp;j.nodeName.toUpperCase()===s.toUpperCase()},each:function(j,s,v){var z,H=0,G=j.length,K=G===B||b.isFunction(j);if(v)if(K)for(z in j){if(s.apply(j[z],v)===false)break}else for(;H&lt;G;){if(s.apply(j[H++],v)===false)break}else if(K)for(z in j){if(s.call(j[z],</div><div class='line' id='LC33'>z,j[z])===false)break}else for(v=j[0];H&lt;G&amp;&amp;s.call(v,H,v)!==false;v=j[++H]);return j},trim:O?function(j){return j==null?&quot;&quot;:O.call(j)}:function(j){return j==null?&quot;&quot;:j.toString().replace(k,&quot;&quot;).replace(o,&quot;&quot;)},makeArray:function(j,s){var v=s||[];if(j!=null){var z=b.type(j);j.length==null||z===&quot;string&quot;||z===&quot;function&quot;||z===&quot;regexp&quot;||b.isWindow(j)?M.call(v,j):b.merge(v,j)}return v},inArray:function(j,s){if(s.indexOf)return s.indexOf(j);for(var v=0,z=s.length;v&lt;z;v++)if(s[v]===j)return v;return-1},merge:function(j,</div><div class='line' id='LC34'>s){var v=j.length,z=0;if(typeof s.length===&quot;number&quot;)for(var H=s.length;z&lt;H;z++)j[v++]=s[z];else for(;s[z]!==B;)j[v++]=s[z++];j.length=v;return j},grep:function(j,s,v){var z=[],H;v=!!v;for(var G=0,K=j.length;G&lt;K;G++){H=!!s(j[G],G);v!==H&amp;&amp;z.push(j[G])}return z},map:function(j,s,v){for(var z=[],H,G=0,K=j.length;G&lt;K;G++){H=s(j[G],G,v);if(H!=null)z[z.length]=H}return z.concat.apply([],z)},guid:1,proxy:function(j,s,v){if(arguments.length===2)if(typeof s===&quot;string&quot;){v=j;j=v[s];s=B}else if(s&amp;&amp;!b.isFunction(s)){v=</div><div class='line' id='LC35'>s;s=B}if(!s&amp;&amp;j)s=function(){return j.apply(v||this,arguments)};if(j)s.guid=j.guid=j.guid||s.guid||b.guid++;return s},access:function(j,s,v,z,H,G){var K=j.length;if(typeof s===&quot;object&quot;){for(var Q in s)b.access(j,Q,s[Q],z,H,v);return j}if(v!==B){z=!G&amp;&amp;z&amp;&amp;b.isFunction(v);for(Q=0;Q&lt;K;Q++)H(j[Q],s,z?v.call(j[Q],Q,H(j[Q],s)):v,G);return j}return K?H(j[0],s):B},now:function(){return(new Date).getTime()},uaMatch:function(j){j=j.toLowerCase();j=L.exec(j)||g.exec(j)||i.exec(j)||j.indexOf(&quot;compatible&quot;)&lt;0&amp;&amp;n.exec(j)||</div><div class='line' id='LC36'>[];return{browser:j[1]||&quot;&quot;,version:j[2]||&quot;0&quot;}},browser:{}});b.each(&quot;Boolean Number String Function Array Date RegExp Object&quot;.split(&quot; &quot;),function(j,s){R[&quot;[object &quot;+s+&quot;]&quot;]=s.toLowerCase()});m=b.uaMatch(m);if(m.browser){b.browser[m.browser]=true;b.browser.version=m.version}if(b.browser.webkit)b.browser.safari=true;if(D)b.inArray=function(j,s){return D.call(s,j)};if(!/\s/.test(&quot;\u00a0&quot;)){k=/^[\s\xA0]+/;o=/[\s\xA0]+$/}f=b(t);if(t.addEventListener)u=function(){t.removeEventListener(&quot;DOMContentLoaded&quot;,u,</div><div class='line' id='LC37'>false);b.ready()};else if(t.attachEvent)u=function(){if(t.readyState===&quot;complete&quot;){t.detachEvent(&quot;onreadystatechange&quot;,u);b.ready()}};return E.jQuery=E.$=b}();(function(){c.support={};var a=t.documentElement,b=t.createElement(&quot;script&quot;),d=t.createElement(&quot;div&quot;),e=&quot;script&quot;+c.now();d.style.display=&quot;none&quot;;d.innerHTML=&quot;   &lt;link/&gt;&lt;table&gt;&lt;/table&gt;&lt;a href='/a' style='color:red;float:left;opacity:.55;'&gt;a&lt;/a&gt;&lt;input type='checkbox'/&gt;&quot;;var f=d.getElementsByTagName(&quot;*&quot;),h=d.getElementsByTagName(&quot;a&quot;)[0],l=t.createElement(&quot;select&quot;),</div><div class='line' id='LC38'>k=l.appendChild(t.createElement(&quot;option&quot;));if(!(!f||!f.length||!h)){c.support={leadingWhitespace:d.firstChild.nodeType===3,tbody:!d.getElementsByTagName(&quot;tbody&quot;).length,htmlSerialize:!!d.getElementsByTagName(&quot;link&quot;).length,style:/red/.test(h.getAttribute(&quot;style&quot;)),hrefNormalized:h.getAttribute(&quot;href&quot;)===&quot;/a&quot;,opacity:/^0.55$/.test(h.style.opacity),cssFloat:!!h.style.cssFloat,checkOn:d.getElementsByTagName(&quot;input&quot;)[0].value===&quot;on&quot;,optSelected:k.selected,deleteExpando:true,optDisabled:false,checkClone:false,</div><div class='line' id='LC39'>scriptEval:false,noCloneEvent:true,boxModel:null,inlineBlockNeedsLayout:false,shrinkWrapBlocks:false,reliableHiddenOffsets:true};l.disabled=true;c.support.optDisabled=!k.disabled;b.type=&quot;text/javascript&quot;;try{b.appendChild(t.createTextNode(&quot;window.&quot;+e+&quot;=1;&quot;))}catch(o){}a.insertBefore(b,a.firstChild);if(E[e]){c.support.scriptEval=true;delete E[e]}try{delete b.test}catch(x){c.support.deleteExpando=false}a.removeChild(b);if(d.attachEvent&amp;&amp;d.fireEvent){d.attachEvent(&quot;onclick&quot;,function r(){c.support.noCloneEvent=</div><div class='line' id='LC40'>false;d.detachEvent(&quot;onclick&quot;,r)});d.cloneNode(true).fireEvent(&quot;onclick&quot;)}d=t.createElement(&quot;div&quot;);d.innerHTML=&quot;&lt;input type='radio' name='radiotest' checked='checked'/&gt;&quot;;a=t.createDocumentFragment();a.appendChild(d.firstChild);c.support.checkClone=a.cloneNode(true).cloneNode(true).lastChild.checked;c(function(){var r=t.createElement(&quot;div&quot;);r.style.width=r.style.paddingLeft=&quot;1px&quot;;t.body.appendChild(r);c.boxModel=c.support.boxModel=r.offsetWidth===2;if(&quot;zoom&quot;in r.style){r.style.display=&quot;inline&quot;;r.style.zoom=</div><div class='line' id='LC41'>1;c.support.inlineBlockNeedsLayout=r.offsetWidth===2;r.style.display=&quot;&quot;;r.innerHTML=&quot;&lt;div style='width:4px;'&gt;&lt;/div&gt;&quot;;c.support.shrinkWrapBlocks=r.offsetWidth!==2}r.innerHTML=&quot;&lt;table&gt;&lt;tr&gt;&lt;td style='padding:0;display:none'&gt;&lt;/td&gt;&lt;td&gt;t&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&quot;;var A=r.getElementsByTagName(&quot;td&quot;);c.support.reliableHiddenOffsets=A[0].offsetHeight===0;A[0].style.display=&quot;&quot;;A[1].style.display=&quot;none&quot;;c.support.reliableHiddenOffsets=c.support.reliableHiddenOffsets&amp;&amp;A[0].offsetHeight===0;r.innerHTML=&quot;&quot;;t.body.removeChild(r).style.display=</div><div class='line' id='LC42'>&quot;none&quot;});a=function(r){var A=t.createElement(&quot;div&quot;);r=&quot;on&quot;+r;var C=r in A;if(!C){A.setAttribute(r,&quot;return;&quot;);C=typeof A[r]===&quot;function&quot;}return C};c.support.submitBubbles=a(&quot;submit&quot;);c.support.changeBubbles=a(&quot;change&quot;);a=b=d=f=h=null}})();var ra={},Ja=/^(?:\{.*\}|\[.*\])$/;c.extend({cache:{},uuid:0,expando:&quot;jQuery&quot;+c.now(),noData:{embed:true,object:&quot;clsid:D27CDB6E-AE6D-11cf-96B8-444553540000&quot;,applet:true},data:function(a,b,d){if(c.acceptData(a)){a=a==E?ra:a;var e=a.nodeType,f=e?a[c.expando]:null,h=</div><div class='line' id='LC43'>c.cache;if(!(e&amp;&amp;!f&amp;&amp;typeof b===&quot;string&quot;&amp;&amp;d===B)){if(e)f||(a[c.expando]=f=++c.uuid);else h=a;if(typeof b===&quot;object&quot;)if(e)h[f]=c.extend(h[f],b);else c.extend(h,b);else if(e&amp;&amp;!h[f])h[f]={};a=e?h[f]:h;if(d!==B)a[b]=d;return typeof b===&quot;string&quot;?a[b]:a}}},removeData:function(a,b){if(c.acceptData(a)){a=a==E?ra:a;var d=a.nodeType,e=d?a[c.expando]:a,f=c.cache,h=d?f[e]:e;if(b){if(h){delete h[b];d&amp;&amp;c.isEmptyObject(h)&amp;&amp;c.removeData(a)}}else if(d&amp;&amp;c.support.deleteExpando)delete a[c.expando];else if(a.removeAttribute)a.removeAttribute(c.expando);</div><div class='line' id='LC44'>else if(d)delete f[e];else for(var l in a)delete a[l]}},acceptData:function(a){if(a.nodeName){var b=c.noData[a.nodeName.toLowerCase()];if(b)return!(b===true||a.getAttribute(&quot;classid&quot;)!==b)}return true}});c.fn.extend({data:function(a,b){var d=null;if(typeof a===&quot;undefined&quot;){if(this.length){var e=this[0].attributes,f;d=c.data(this[0]);for(var h=0,l=e.length;h&lt;l;h++){f=e[h].name;if(f.indexOf(&quot;data-&quot;)===0){f=f.substr(5);ka(this[0],f,d[f])}}}return d}else if(typeof a===&quot;object&quot;)return this.each(function(){c.data(this,</div><div class='line' id='LC45'>a)});var k=a.split(&quot;.&quot;);k[1]=k[1]?&quot;.&quot;+k[1]:&quot;&quot;;if(b===B){d=this.triggerHandler(&quot;getData&quot;+k[1]+&quot;!&quot;,[k[0]]);if(d===B&amp;&amp;this.length){d=c.data(this[0],a);d=ka(this[0],a,d)}return d===B&amp;&amp;k[1]?this.data(k[0]):d}else return this.each(function(){var o=c(this),x=[k[0],b];o.triggerHandler(&quot;setData&quot;+k[1]+&quot;!&quot;,x);c.data(this,a,b);o.triggerHandler(&quot;changeData&quot;+k[1]+&quot;!&quot;,x)})},removeData:function(a){return this.each(function(){c.removeData(this,a)})}});c.extend({queue:function(a,b,d){if(a){b=(b||&quot;fx&quot;)+&quot;queue&quot;;var e=</div><div class='line' id='LC46'>c.data(a,b);if(!d)return e||[];if(!e||c.isArray(d))e=c.data(a,b,c.makeArray(d));else e.push(d);return e}},dequeue:function(a,b){b=b||&quot;fx&quot;;var d=c.queue(a,b),e=d.shift();if(e===&quot;inprogress&quot;)e=d.shift();if(e){b===&quot;fx&quot;&amp;&amp;d.unshift(&quot;inprogress&quot;);e.call(a,function(){c.dequeue(a,b)})}}});c.fn.extend({queue:function(a,b){if(typeof a!==&quot;string&quot;){b=a;a=&quot;fx&quot;}if(b===B)return c.queue(this[0],a);return this.each(function(){var d=c.queue(this,a,b);a===&quot;fx&quot;&amp;&amp;d[0]!==&quot;inprogress&quot;&amp;&amp;c.dequeue(this,a)})},dequeue:function(a){return this.each(function(){c.dequeue(this,</div><div class='line' id='LC47'>a)})},delay:function(a,b){a=c.fx?c.fx.speeds[a]||a:a;b=b||&quot;fx&quot;;return this.queue(b,function(){var d=this;setTimeout(function(){c.dequeue(d,b)},a)})},clearQueue:function(a){return this.queue(a||&quot;fx&quot;,[])}});var sa=/[\n\t]/g,ha=/\s+/,Sa=/\r/g,Ta=/^(?:href|src|style)$/,Ua=/^(?:button|input)$/i,Va=/^(?:button|input|object|select|textarea)$/i,Wa=/^a(?:rea)?$/i,ta=/^(?:radio|checkbox)$/i;c.props={&quot;for&quot;:&quot;htmlFor&quot;,&quot;class&quot;:&quot;className&quot;,readonly:&quot;readOnly&quot;,maxlength:&quot;maxLength&quot;,cellspacing:&quot;cellSpacing&quot;,rowspan:&quot;rowSpan&quot;,</div><div class='line' id='LC48'>colspan:&quot;colSpan&quot;,tabindex:&quot;tabIndex&quot;,usemap:&quot;useMap&quot;,frameborder:&quot;frameBorder&quot;};c.fn.extend({attr:function(a,b){return c.access(this,a,b,true,c.attr)},removeAttr:function(a){return this.each(function(){c.attr(this,a,&quot;&quot;);this.nodeType===1&amp;&amp;this.removeAttribute(a)})},addClass:function(a){if(c.isFunction(a))return this.each(function(x){var r=c(this);r.addClass(a.call(this,x,r.attr(&quot;class&quot;)))});if(a&amp;&amp;typeof a===&quot;string&quot;)for(var b=(a||&quot;&quot;).split(ha),d=0,e=this.length;d&lt;e;d++){var f=this[d];if(f.nodeType===</div><div class='line' id='LC49'>1)if(f.className){for(var h=&quot; &quot;+f.className+&quot; &quot;,l=f.className,k=0,o=b.length;k&lt;o;k++)if(h.indexOf(&quot; &quot;+b[k]+&quot; &quot;)&lt;0)l+=&quot; &quot;+b[k];f.className=c.trim(l)}else f.className=a}return this},removeClass:function(a){if(c.isFunction(a))return this.each(function(o){var x=c(this);x.removeClass(a.call(this,o,x.attr(&quot;class&quot;)))});if(a&amp;&amp;typeof a===&quot;string&quot;||a===B)for(var b=(a||&quot;&quot;).split(ha),d=0,e=this.length;d&lt;e;d++){var f=this[d];if(f.nodeType===1&amp;&amp;f.className)if(a){for(var h=(&quot; &quot;+f.className+&quot; &quot;).replace(sa,&quot; &quot;),</div><div class='line' id='LC50'>l=0,k=b.length;l&lt;k;l++)h=h.replace(&quot; &quot;+b[l]+&quot; &quot;,&quot; &quot;);f.className=c.trim(h)}else f.className=&quot;&quot;}return this},toggleClass:function(a,b){var d=typeof a,e=typeof b===&quot;boolean&quot;;if(c.isFunction(a))return this.each(function(f){var h=c(this);h.toggleClass(a.call(this,f,h.attr(&quot;class&quot;),b),b)});return this.each(function(){if(d===&quot;string&quot;)for(var f,h=0,l=c(this),k=b,o=a.split(ha);f=o[h++];){k=e?k:!l.hasClass(f);l[k?&quot;addClass&quot;:&quot;removeClass&quot;](f)}else if(d===&quot;undefined&quot;||d===&quot;boolean&quot;){this.className&amp;&amp;c.data(this,</div><div class='line' id='LC51'>&quot;__className__&quot;,this.className);this.className=this.className||a===false?&quot;&quot;:c.data(this,&quot;__className__&quot;)||&quot;&quot;}})},hasClass:function(a){a=&quot; &quot;+a+&quot; &quot;;for(var b=0,d=this.length;b&lt;d;b++)if((&quot; &quot;+this[b].className+&quot; &quot;).replace(sa,&quot; &quot;).indexOf(a)&gt;-1)return true;return false},val:function(a){if(!arguments.length){var b=this[0];if(b){if(c.nodeName(b,&quot;option&quot;)){var d=b.attributes.value;return!d||d.specified?b.value:b.text}if(c.nodeName(b,&quot;select&quot;)){var e=b.selectedIndex;d=[];var f=b.options;b=b.type===&quot;select-one&quot;;</div><div class='line' id='LC52'>if(e&lt;0)return null;var h=b?e:0;for(e=b?e+1:f.length;h&lt;e;h++){var l=f[h];if(l.selected&amp;&amp;(c.support.optDisabled?!l.disabled:l.getAttribute(&quot;disabled&quot;)===null)&amp;&amp;(!l.parentNode.disabled||!c.nodeName(l.parentNode,&quot;optgroup&quot;))){a=c(l).val();if(b)return a;d.push(a)}}return d}if(ta.test(b.type)&amp;&amp;!c.support.checkOn)return b.getAttribute(&quot;value&quot;)===null?&quot;on&quot;:b.value;return(b.value||&quot;&quot;).replace(Sa,&quot;&quot;)}return B}var k=c.isFunction(a);return this.each(function(o){var x=c(this),r=a;if(this.nodeType===1){if(k)r=</div><div class='line' id='LC53'>a.call(this,o,x.val());if(r==null)r=&quot;&quot;;else if(typeof r===&quot;number&quot;)r+=&quot;&quot;;else if(c.isArray(r))r=c.map(r,function(C){return C==null?&quot;&quot;:C+&quot;&quot;});if(c.isArray(r)&amp;&amp;ta.test(this.type))this.checked=c.inArray(x.val(),r)&gt;=0;else if(c.nodeName(this,&quot;select&quot;)){var A=c.makeArray(r);c(&quot;option&quot;,this).each(function(){this.selected=c.inArray(c(this).val(),A)&gt;=0});if(!A.length)this.selectedIndex=-1}else this.value=r}})}});c.extend({attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},</div><div class='line' id='LC54'>attr:function(a,b,d,e){if(!a||a.nodeType===3||a.nodeType===8)return B;if(e&amp;&amp;b in c.attrFn)return c(a)[b](d);e=a.nodeType!==1||!c.isXMLDoc(a);var f=d!==B;b=e&amp;&amp;c.props[b]||b;var h=Ta.test(b);if((b in a||a[b]!==B)&amp;&amp;e&amp;&amp;!h){if(f){b===&quot;type&quot;&amp;&amp;Ua.test(a.nodeName)&amp;&amp;a.parentNode&amp;&amp;c.error(&quot;type property can't be changed&quot;);if(d===null)a.nodeType===1&amp;&amp;a.removeAttribute(b);else a[b]=d}if(c.nodeName(a,&quot;form&quot;)&amp;&amp;a.getAttributeNode(b))return a.getAttributeNode(b).nodeValue;if(b===&quot;tabIndex&quot;)return(b=a.getAttributeNode(&quot;tabIndex&quot;))&amp;&amp;</div><div class='line' id='LC55'>b.specified?b.value:Va.test(a.nodeName)||Wa.test(a.nodeName)&amp;&amp;a.href?0:B;return a[b]}if(!c.support.style&amp;&amp;e&amp;&amp;b===&quot;style&quot;){if(f)a.style.cssText=&quot;&quot;+d;return a.style.cssText}f&amp;&amp;a.setAttribute(b,&quot;&quot;+d);if(!a.attributes[b]&amp;&amp;a.hasAttribute&amp;&amp;!a.hasAttribute(b))return B;a=!c.support.hrefNormalized&amp;&amp;e&amp;&amp;h?a.getAttribute(b,2):a.getAttribute(b);return a===null?B:a}});var X=/\.(.*)$/,ia=/^(?:textarea|input|select)$/i,La=/\./g,Ma=/ /g,Xa=/[^\w\s.|`]/g,Ya=function(a){return a.replace(Xa,&quot;\\$&amp;&quot;)},ua={focusin:0,focusout:0};</div><div class='line' id='LC56'>c.event={add:function(a,b,d,e){if(!(a.nodeType===3||a.nodeType===8)){if(c.isWindow(a)&amp;&amp;a!==E&amp;&amp;!a.frameElement)a=E;if(d===false)d=U;else if(!d)return;var f,h;if(d.handler){f=d;d=f.handler}if(!d.guid)d.guid=c.guid++;if(h=c.data(a)){var l=a.nodeType?&quot;events&quot;:&quot;__events__&quot;,k=h[l],o=h.handle;if(typeof k===&quot;function&quot;){o=k.handle;k=k.events}else if(!k){a.nodeType||(h[l]=h=function(){});h.events=k={}}if(!o)h.handle=o=function(){return typeof c!==&quot;undefined&quot;&amp;&amp;!c.event.triggered?c.event.handle.apply(o.elem,</div><div class='line' id='LC57'>arguments):B};o.elem=a;b=b.split(&quot; &quot;);for(var x=0,r;l=b[x++];){h=f?c.extend({},f):{handler:d,data:e};if(l.indexOf(&quot;.&quot;)&gt;-1){r=l.split(&quot;.&quot;);l=r.shift();h.namespace=r.slice(0).sort().join(&quot;.&quot;)}else{r=[];h.namespace=&quot;&quot;}h.type=l;if(!h.guid)h.guid=d.guid;var A=k[l],C=c.event.special[l]||{};if(!A){A=k[l]=[];if(!C.setup||C.setup.call(a,e,r,o)===false)if(a.addEventListener)a.addEventListener(l,o,false);else a.attachEvent&amp;&amp;a.attachEvent(&quot;on&quot;+l,o)}if(C.add){C.add.call(a,h);if(!h.handler.guid)h.handler.guid=</div><div class='line' id='LC58'>d.guid}A.push(h);c.event.global[l]=true}a=null}}},global:{},remove:function(a,b,d,e){if(!(a.nodeType===3||a.nodeType===8)){if(d===false)d=U;var f,h,l=0,k,o,x,r,A,C,J=a.nodeType?&quot;events&quot;:&quot;__events__&quot;,w=c.data(a),I=w&amp;&amp;w[J];if(w&amp;&amp;I){if(typeof I===&quot;function&quot;){w=I;I=I.events}if(b&amp;&amp;b.type){d=b.handler;b=b.type}if(!b||typeof b===&quot;string&quot;&amp;&amp;b.charAt(0)===&quot;.&quot;){b=b||&quot;&quot;;for(f in I)c.event.remove(a,f+b)}else{for(b=b.split(&quot; &quot;);f=b[l++];){r=f;k=f.indexOf(&quot;.&quot;)&lt;0;o=[];if(!k){o=f.split(&quot;.&quot;);f=o.shift();x=RegExp(&quot;(^|\\.)&quot;+</div><div class='line' id='LC59'>c.map(o.slice(0).sort(),Ya).join(&quot;\\.(?:.*\\.)?&quot;)+&quot;(\\.|$)&quot;)}if(A=I[f])if(d){r=c.event.special[f]||{};for(h=e||0;h&lt;A.length;h++){C=A[h];if(d.guid===C.guid){if(k||x.test(C.namespace)){e==null&amp;&amp;A.splice(h--,1);r.remove&amp;&amp;r.remove.call(a,C)}if(e!=null)break}}if(A.length===0||e!=null&amp;&amp;A.length===1){if(!r.teardown||r.teardown.call(a,o)===false)c.removeEvent(a,f,w.handle);delete I[f]}}else for(h=0;h&lt;A.length;h++){C=A[h];if(k||x.test(C.namespace)){c.event.remove(a,r,C.handler,h);A.splice(h--,1)}}}if(c.isEmptyObject(I)){if(b=</div><div class='line' id='LC60'>w.handle)b.elem=null;delete w.events;delete w.handle;if(typeof w===&quot;function&quot;)c.removeData(a,J);else c.isEmptyObject(w)&amp;&amp;c.removeData(a)}}}}},trigger:function(a,b,d,e){var f=a.type||a;if(!e){a=typeof a===&quot;object&quot;?a[c.expando]?a:c.extend(c.Event(f),a):c.Event(f);if(f.indexOf(&quot;!&quot;)&gt;=0){a.type=f=f.slice(0,-1);a.exclusive=true}if(!d){a.stopPropagation();c.event.global[f]&amp;&amp;c.each(c.cache,function(){this.events&amp;&amp;this.events[f]&amp;&amp;c.event.trigger(a,b,this.handle.elem)})}if(!d||d.nodeType===3||d.nodeType===</div><div class='line' id='LC61'>8)return B;a.result=B;a.target=d;b=c.makeArray(b);b.unshift(a)}a.currentTarget=d;(e=d.nodeType?c.data(d,&quot;handle&quot;):(c.data(d,&quot;__events__&quot;)||{}).handle)&amp;&amp;e.apply(d,b);e=d.parentNode||d.ownerDocument;try{if(!(d&amp;&amp;d.nodeName&amp;&amp;c.noData[d.nodeName.toLowerCase()]))if(d[&quot;on&quot;+f]&amp;&amp;d[&quot;on&quot;+f].apply(d,b)===false){a.result=false;a.preventDefault()}}catch(h){}if(!a.isPropagationStopped()&amp;&amp;e)c.event.trigger(a,b,e,true);else if(!a.isDefaultPrevented()){var l;e=a.target;var k=f.replace(X,&quot;&quot;),o=c.nodeName(e,&quot;a&quot;)&amp;&amp;k===</div><div class='line' id='LC62'>&quot;click&quot;,x=c.event.special[k]||{};if((!x._default||x._default.call(d,a)===false)&amp;&amp;!o&amp;&amp;!(e&amp;&amp;e.nodeName&amp;&amp;c.noData[e.nodeName.toLowerCase()])){try{if(e[k]){if(l=e[&quot;on&quot;+k])e[&quot;on&quot;+k]=null;c.event.triggered=true;e[k]()}}catch(r){}if(l)e[&quot;on&quot;+k]=l;c.event.triggered=false}}},handle:function(a){var b,d,e,f;d=[];var h=c.makeArray(arguments);a=h[0]=c.event.fix(a||E.event);a.currentTarget=this;b=a.type.indexOf(&quot;.&quot;)&lt;0&amp;&amp;!a.exclusive;if(!b){e=a.type.split(&quot;.&quot;);a.type=e.shift();d=e.slice(0).sort();e=RegExp(&quot;(^|\\.)&quot;+</div><div class='line' id='LC63'>d.join(&quot;\\.(?:.*\\.)?&quot;)+&quot;(\\.|$)&quot;)}a.namespace=a.namespace||d.join(&quot;.&quot;);f=c.data(this,this.nodeType?&quot;events&quot;:&quot;__events__&quot;);if(typeof f===&quot;function&quot;)f=f.events;d=(f||{})[a.type];if(f&amp;&amp;d){d=d.slice(0);f=0;for(var l=d.length;f&lt;l;f++){var k=d[f];if(b||e.test(k.namespace)){a.handler=k.handler;a.data=k.data;a.handleObj=k;k=k.handler.apply(this,h);if(k!==B){a.result=k;if(k===false){a.preventDefault();a.stopPropagation()}}if(a.isImmediatePropagationStopped())break}}}return a.result},props:&quot;altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which&quot;.split(&quot; &quot;),</div><div class='line' id='LC64'>fix:function(a){if(a[c.expando])return a;var b=a;a=c.Event(b);for(var d=this.props.length,e;d;){e=this.props[--d];a[e]=b[e]}if(!a.target)a.target=a.srcElement||t;if(a.target.nodeType===3)a.target=a.target.parentNode;if(!a.relatedTarget&amp;&amp;a.fromElement)a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;if(a.pageX==null&amp;&amp;a.clientX!=null){b=t.documentElement;d=t.body;a.pageX=a.clientX+(b&amp;&amp;b.scrollLeft||d&amp;&amp;d.scrollLeft||0)-(b&amp;&amp;b.clientLeft||d&amp;&amp;d.clientLeft||0);a.pageY=a.clientY+(b&amp;&amp;b.scrollTop||</div><div class='line' id='LC65'>d&amp;&amp;d.scrollTop||0)-(b&amp;&amp;b.clientTop||d&amp;&amp;d.clientTop||0)}if(a.which==null&amp;&amp;(a.charCode!=null||a.keyCode!=null))a.which=a.charCode!=null?a.charCode:a.keyCode;if(!a.metaKey&amp;&amp;a.ctrlKey)a.metaKey=a.ctrlKey;if(!a.which&amp;&amp;a.button!==B)a.which=a.button&amp;1?1:a.button&amp;2?3:a.button&amp;4?2:0;return a},guid:1E8,proxy:c.proxy,special:{ready:{setup:c.bindReady,teardown:c.noop},live:{add:function(a){c.event.add(this,Y(a.origType,a.selector),c.extend({},a,{handler:Ka,guid:a.handler.guid}))},remove:function(a){c.event.remove(this,</div><div class='line' id='LC66'>Y(a.origType,a.selector),a)}},beforeunload:{setup:function(a,b,d){if(c.isWindow(this))this.onbeforeunload=d},teardown:function(a,b){if(this.onbeforeunload===b)this.onbeforeunload=null}}}};c.removeEvent=t.removeEventListener?function(a,b,d){a.removeEventListener&amp;&amp;a.removeEventListener(b,d,false)}:function(a,b,d){a.detachEvent&amp;&amp;a.detachEvent(&quot;on&quot;+b,d)};c.Event=function(a){if(!this.preventDefault)return new c.Event(a);if(a&amp;&amp;a.type){this.originalEvent=a;this.type=a.type}else this.type=a;this.timeStamp=</div><div class='line' id='LC67'>c.now();this[c.expando]=true};c.Event.prototype={preventDefault:function(){this.isDefaultPrevented=ca;var a=this.originalEvent;if(a)if(a.preventDefault)a.preventDefault();else a.returnValue=false},stopPropagation:function(){this.isPropagationStopped=ca;var a=this.originalEvent;if(a){a.stopPropagation&amp;&amp;a.stopPropagation();a.cancelBubble=true}},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=ca;this.stopPropagation()},isDefaultPrevented:U,isPropagationStopped:U,isImmediatePropagationStopped:U};</div><div class='line' id='LC68'>var va=function(a){var b=a.relatedTarget;try{for(;b&amp;&amp;b!==this;)b=b.parentNode;if(b!==this){a.type=a.data;c.event.handle.apply(this,arguments)}}catch(d){}},wa=function(a){a.type=a.data;c.event.handle.apply(this,arguments)};c.each({mouseenter:&quot;mouseover&quot;,mouseleave:&quot;mouseout&quot;},function(a,b){c.event.special[a]={setup:function(d){c.event.add(this,b,d&amp;&amp;d.selector?wa:va,a)},teardown:function(d){c.event.remove(this,b,d&amp;&amp;d.selector?wa:va)}}});if(!c.support.submitBubbles)c.event.special.submit={setup:function(){if(this.nodeName.toLowerCase()!==</div><div class='line' id='LC69'>&quot;form&quot;){c.event.add(this,&quot;click.specialSubmit&quot;,function(a){var b=a.target,d=b.type;if((d===&quot;submit&quot;||d===&quot;image&quot;)&amp;&amp;c(b).closest(&quot;form&quot;).length){a.liveFired=B;return la(&quot;submit&quot;,this,arguments)}});c.event.add(this,&quot;keypress.specialSubmit&quot;,function(a){var b=a.target,d=b.type;if((d===&quot;text&quot;||d===&quot;password&quot;)&amp;&amp;c(b).closest(&quot;form&quot;).length&amp;&amp;a.keyCode===13){a.liveFired=B;return la(&quot;submit&quot;,this,arguments)}})}else return false},teardown:function(){c.event.remove(this,&quot;.specialSubmit&quot;)}};if(!c.support.changeBubbles){var V,</div><div class='line' id='LC70'>xa=function(a){var b=a.type,d=a.value;if(b===&quot;radio&quot;||b===&quot;checkbox&quot;)d=a.checked;else if(b===&quot;select-multiple&quot;)d=a.selectedIndex&gt;-1?c.map(a.options,function(e){return e.selected}).join(&quot;-&quot;):&quot;&quot;;else if(a.nodeName.toLowerCase()===&quot;select&quot;)d=a.selectedIndex;return d},Z=function(a,b){var d=a.target,e,f;if(!(!ia.test(d.nodeName)||d.readOnly)){e=c.data(d,&quot;_change_data&quot;);f=xa(d);if(a.type!==&quot;focusout&quot;||d.type!==&quot;radio&quot;)c.data(d,&quot;_change_data&quot;,f);if(!(e===B||f===e))if(e!=null||f){a.type=&quot;change&quot;;a.liveFired=</div><div class='line' id='LC71'>B;return c.event.trigger(a,b,d)}}};c.event.special.change={filters:{focusout:Z,beforedeactivate:Z,click:function(a){var b=a.target,d=b.type;if(d===&quot;radio&quot;||d===&quot;checkbox&quot;||b.nodeName.toLowerCase()===&quot;select&quot;)return Z.call(this,a)},keydown:function(a){var b=a.target,d=b.type;if(a.keyCode===13&amp;&amp;b.nodeName.toLowerCase()!==&quot;textarea&quot;||a.keyCode===32&amp;&amp;(d===&quot;checkbox&quot;||d===&quot;radio&quot;)||d===&quot;select-multiple&quot;)return Z.call(this,a)},beforeactivate:function(a){a=a.target;c.data(a,&quot;_change_data&quot;,xa(a))}},setup:function(){if(this.type===</div><div class='line' id='LC72'>&quot;file&quot;)return false;for(var a in V)c.event.add(this,a+&quot;.specialChange&quot;,V[a]);return ia.test(this.nodeName)},teardown:function(){c.event.remove(this,&quot;.specialChange&quot;);return ia.test(this.nodeName)}};V=c.event.special.change.filters;V.focus=V.beforeactivate}t.addEventListener&amp;&amp;c.each({focus:&quot;focusin&quot;,blur:&quot;focusout&quot;},function(a,b){function d(e){e=c.event.fix(e);e.type=b;return c.event.trigger(e,null,e.target)}c.event.special[b]={setup:function(){ua[b]++===0&amp;&amp;t.addEventListener(a,d,true)},teardown:function(){--ua[b]===</div><div class='line' id='LC73'>0&amp;&amp;t.removeEventListener(a,d,true)}}});c.each([&quot;bind&quot;,&quot;one&quot;],function(a,b){c.fn[b]=function(d,e,f){if(typeof d===&quot;object&quot;){for(var h in d)this[b](h,e,d[h],f);return this}if(c.isFunction(e)||e===false){f=e;e=B}var l=b===&quot;one&quot;?c.proxy(f,function(o){c(this).unbind(o,l);return f.apply(this,arguments)}):f;if(d===&quot;unload&quot;&amp;&amp;b!==&quot;one&quot;)this.one(d,e,f);else{h=0;for(var k=this.length;h&lt;k;h++)c.event.add(this[h],d,l,e)}return this}});c.fn.extend({unbind:function(a,b){if(typeof a===&quot;object&quot;&amp;&amp;!a.preventDefault)for(var d in a)this.unbind(d,</div><div class='line' id='LC74'>a[d]);else{d=0;for(var e=this.length;d&lt;e;d++)c.event.remove(this[d],a,b)}return this},delegate:function(a,b,d,e){return this.live(b,d,e,a)},undelegate:function(a,b,d){return arguments.length===0?this.unbind(&quot;live&quot;):this.die(b,null,d,a)},trigger:function(a,b){return this.each(function(){c.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){var d=c.Event(a);d.preventDefault();d.stopPropagation();c.event.trigger(d,b,this[0]);return d.result}},toggle:function(a){for(var b=arguments,d=</div><div class='line' id='LC75'>1;d&lt;b.length;)c.proxy(a,b[d++]);return this.click(c.proxy(a,function(e){var f=(c.data(this,&quot;lastToggle&quot;+a.guid)||0)%d;c.data(this,&quot;lastToggle&quot;+a.guid,f+1);e.preventDefault();return b[f].apply(this,arguments)||false}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var ya={focus:&quot;focusin&quot;,blur:&quot;focusout&quot;,mouseenter:&quot;mouseover&quot;,mouseleave:&quot;mouseout&quot;};c.each([&quot;live&quot;,&quot;die&quot;],function(a,b){c.fn[b]=function(d,e,f,h){var l,k=0,o,x,r=h||this.selector;h=h?this:c(this.context);if(typeof d===</div><div class='line' id='LC76'>&quot;object&quot;&amp;&amp;!d.preventDefault){for(l in d)h[b](l,e,d[l],r);return this}if(c.isFunction(e)){f=e;e=B}for(d=(d||&quot;&quot;).split(&quot; &quot;);(l=d[k++])!=null;){o=X.exec(l);x=&quot;&quot;;if(o){x=o[0];l=l.replace(X,&quot;&quot;)}if(l===&quot;hover&quot;)d.push(&quot;mouseenter&quot;+x,&quot;mouseleave&quot;+x);else{o=l;if(l===&quot;focus&quot;||l===&quot;blur&quot;){d.push(ya[l]+x);l+=x}else l=(ya[l]||l)+x;if(b===&quot;live&quot;){x=0;for(var A=h.length;x&lt;A;x++)c.event.add(h[x],&quot;live.&quot;+Y(l,r),{data:e,selector:r,handler:f,origType:l,origHandler:f,preType:o})}else h.unbind(&quot;live.&quot;+Y(l,r),f)}}return this}});</div><div class='line' id='LC77'>c.each(&quot;blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error&quot;.split(&quot; &quot;),function(a,b){c.fn[b]=function(d,e){if(e==null){e=d;d=null}return arguments.length&gt;0?this.bind(b,d,e):this.trigger(b)};if(c.attrFn)c.attrFn[b]=true});E.attachEvent&amp;&amp;!E.addEventListener&amp;&amp;c(E).bind(&quot;unload&quot;,function(){for(var a in c.cache)if(c.cache[a].handle)try{c.event.remove(c.cache[a].handle.elem)}catch(b){}});</div><div class='line' id='LC78'>(function(){function a(g,i,n,m,p,q){p=0;for(var u=m.length;p&lt;u;p++){var y=m[p];if(y){var F=false;for(y=y[g];y;){if(y.sizcache===n){F=m[y.sizset];break}if(y.nodeType===1&amp;&amp;!q){y.sizcache=n;y.sizset=p}if(y.nodeName.toLowerCase()===i){F=y;break}y=y[g]}m[p]=F}}}function b(g,i,n,m,p,q){p=0;for(var u=m.length;p&lt;u;p++){var y=m[p];if(y){var F=false;for(y=y[g];y;){if(y.sizcache===n){F=m[y.sizset];break}if(y.nodeType===1){if(!q){y.sizcache=n;y.sizset=p}if(typeof i!==&quot;string&quot;){if(y===i){F=true;break}}else if(k.filter(i,</div><div class='line' id='LC79'>[y]).length&gt;0){F=y;break}}y=y[g]}m[p]=F}}}var d=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['&quot;][^'&quot;]*['&quot;]|[^\[\]'&quot;]+)+\]|\\.|[^ &gt;+~,(\[\\]+)+|[&gt;+~])(\s*,\s*)?((?:.|\r|\n)*)/g,e=0,f=Object.prototype.toString,h=false,l=true;[0,0].sort(function(){l=false;return 0});var k=function(g,i,n,m){n=n||[];var p=i=i||t;if(i.nodeType!==1&amp;&amp;i.nodeType!==9)return[];if(!g||typeof g!==&quot;string&quot;)return n;var q,u,y,F,M,N=true,O=k.isXML(i),D=[],R=g;do{d.exec(&quot;&quot;);if(q=d.exec(R)){R=q[3];D.push(q[1]);if(q[2]){F=q[3];</div><div class='line' id='LC80'>break}}}while(q);if(D.length&gt;1&amp;&amp;x.exec(g))if(D.length===2&amp;&amp;o.relative[D[0]])u=L(D[0]+D[1],i);else for(u=o.relative[D[0]]?[i]:k(D.shift(),i);D.length;){g=D.shift();if(o.relative[g])g+=D.shift();u=L(g,u)}else{if(!m&amp;&amp;D.length&gt;1&amp;&amp;i.nodeType===9&amp;&amp;!O&amp;&amp;o.match.ID.test(D[0])&amp;&amp;!o.match.ID.test(D[D.length-1])){q=k.find(D.shift(),i,O);i=q.expr?k.filter(q.expr,q.set)[0]:q.set[0]}if(i){q=m?{expr:D.pop(),set:C(m)}:k.find(D.pop(),D.length===1&amp;&amp;(D[0]===&quot;~&quot;||D[0]===&quot;+&quot;)&amp;&amp;i.parentNode?i.parentNode:i,O);u=q.expr?k.filter(q.expr,</div><div class='line' id='LC81'>q.set):q.set;if(D.length&gt;0)y=C(u);else N=false;for(;D.length;){q=M=D.pop();if(o.relative[M])q=D.pop();else M=&quot;&quot;;if(q==null)q=i;o.relative[M](y,q,O)}}else y=[]}y||(y=u);y||k.error(M||g);if(f.call(y)===&quot;[object Array]&quot;)if(N)if(i&amp;&amp;i.nodeType===1)for(g=0;y[g]!=null;g++){if(y[g]&amp;&amp;(y[g]===true||y[g].nodeType===1&amp;&amp;k.contains(i,y[g])))n.push(u[g])}else for(g=0;y[g]!=null;g++)y[g]&amp;&amp;y[g].nodeType===1&amp;&amp;n.push(u[g]);else n.push.apply(n,y);else C(y,n);if(F){k(F,p,n,m);k.uniqueSort(n)}return n};k.uniqueSort=function(g){if(w){h=</div><div class='line' id='LC82'>l;g.sort(w);if(h)for(var i=1;i&lt;g.length;i++)g[i]===g[i-1]&amp;&amp;g.splice(i--,1)}return g};k.matches=function(g,i){return k(g,null,null,i)};k.matchesSelector=function(g,i){return k(i,null,null,[g]).length&gt;0};k.find=function(g,i,n){var m;if(!g)return[];for(var p=0,q=o.order.length;p&lt;q;p++){var u,y=o.order[p];if(u=o.leftMatch[y].exec(g)){var F=u[1];u.splice(1,1);if(F.substr(F.length-1)!==&quot;\\&quot;){u[1]=(u[1]||&quot;&quot;).replace(/\\/g,&quot;&quot;);m=o.find[y](u,i,n);if(m!=null){g=g.replace(o.match[y],&quot;&quot;);break}}}}m||(m=i.getElementsByTagName(&quot;*&quot;));</div><div class='line' id='LC83'>return{set:m,expr:g}};k.filter=function(g,i,n,m){for(var p,q,u=g,y=[],F=i,M=i&amp;&amp;i[0]&amp;&amp;k.isXML(i[0]);g&amp;&amp;i.length;){for(var N in o.filter)if((p=o.leftMatch[N].exec(g))!=null&amp;&amp;p[2]){var O,D,R=o.filter[N];D=p[1];q=false;p.splice(1,1);if(D.substr(D.length-1)!==&quot;\\&quot;){if(F===y)y=[];if(o.preFilter[N])if(p=o.preFilter[N](p,F,n,y,m,M)){if(p===true)continue}else q=O=true;if(p)for(var j=0;(D=F[j])!=null;j++)if(D){O=R(D,p,j,F);var s=m^!!O;if(n&amp;&amp;O!=null)if(s)q=true;else F[j]=false;else if(s){y.push(D);q=true}}if(O!==</div><div class='line' id='LC84'>B){n||(F=y);g=g.replace(o.match[N],&quot;&quot;);if(!q)return[];break}}}if(g===u)if(q==null)k.error(g);else break;u=g}return F};k.error=function(g){throw&quot;Syntax error, unrecognized expression: &quot;+g;};var o=k.selectors={order:[&quot;ID&quot;,&quot;NAME&quot;,&quot;TAG&quot;],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['&quot;]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['&quot;]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(['&quot;]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+\-]*)\))?/,</div><div class='line' id='LC85'>POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['&quot;]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{&quot;class&quot;:&quot;className&quot;,&quot;for&quot;:&quot;htmlFor&quot;},attrHandle:{href:function(g){return g.getAttribute(&quot;href&quot;)}},relative:{&quot;+&quot;:function(g,i){var n=typeof i===&quot;string&quot;,m=n&amp;&amp;!/\W/.test(i);n=n&amp;&amp;!m;if(m)i=i.toLowerCase();m=0;for(var p=g.length,q;m&lt;p;m++)if(q=g[m]){for(;(q=q.previousSibling)&amp;&amp;q.nodeType!==1;);g[m]=n||q&amp;&amp;q.nodeName.toLowerCase()===</div><div class='line' id='LC86'>i?q||false:q===i}n&amp;&amp;k.filter(i,g,true)},&quot;&gt;&quot;:function(g,i){var n,m=typeof i===&quot;string&quot;,p=0,q=g.length;if(m&amp;&amp;!/\W/.test(i))for(i=i.toLowerCase();p&lt;q;p++){if(n=g[p]){n=n.parentNode;g[p]=n.nodeName.toLowerCase()===i?n:false}}else{for(;p&lt;q;p++)if(n=g[p])g[p]=m?n.parentNode:n.parentNode===i;m&amp;&amp;k.filter(i,g,true)}},&quot;&quot;:function(g,i,n){var m,p=e++,q=b;if(typeof i===&quot;string&quot;&amp;&amp;!/\W/.test(i)){m=i=i.toLowerCase();q=a}q(&quot;parentNode&quot;,i,p,g,m,n)},&quot;~&quot;:function(g,i,n){var m,p=e++,q=b;if(typeof i===&quot;string&quot;&amp;&amp;!/\W/.test(i)){m=</div><div class='line' id='LC87'>i=i.toLowerCase();q=a}q(&quot;previousSibling&quot;,i,p,g,m,n)}},find:{ID:function(g,i,n){if(typeof i.getElementById!==&quot;undefined&quot;&amp;&amp;!n)return(g=i.getElementById(g[1]))&amp;&amp;g.parentNode?[g]:[]},NAME:function(g,i){if(typeof i.getElementsByName!==&quot;undefined&quot;){for(var n=[],m=i.getElementsByName(g[1]),p=0,q=m.length;p&lt;q;p++)m[p].getAttribute(&quot;name&quot;)===g[1]&amp;&amp;n.push(m[p]);return n.length===0?null:n}},TAG:function(g,i){return i.getElementsByTagName(g[1])}},preFilter:{CLASS:function(g,i,n,m,p,q){g=&quot; &quot;+g[1].replace(/\\/g,</div><div class='line' id='LC88'>&quot;&quot;)+&quot; &quot;;if(q)return g;q=0;for(var u;(u=i[q])!=null;q++)if(u)if(p^(u.className&amp;&amp;(&quot; &quot;+u.className+&quot; &quot;).replace(/[\t\n]/g,&quot; &quot;).indexOf(g)&gt;=0))n||m.push(u);else if(n)i[q]=false;return false},ID:function(g){return g[1].replace(/\\/g,&quot;&quot;)},TAG:function(g){return g[1].toLowerCase()},CHILD:function(g){if(g[1]===&quot;nth&quot;){var i=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(g[2]===&quot;even&quot;&amp;&amp;&quot;2n&quot;||g[2]===&quot;odd&quot;&amp;&amp;&quot;2n+1&quot;||!/\D/.test(g[2])&amp;&amp;&quot;0n+&quot;+g[2]||g[2]);g[2]=i[1]+(i[2]||1)-0;g[3]=i[3]-0}g[0]=e++;return g},ATTR:function(g,i,n,</div><div class='line' id='LC89'>m,p,q){i=g[1].replace(/\\/g,&quot;&quot;);if(!q&amp;&amp;o.attrMap[i])g[1]=o.attrMap[i];if(g[2]===&quot;~=&quot;)g[4]=&quot; &quot;+g[4]+&quot; &quot;;return g},PSEUDO:function(g,i,n,m,p){if(g[1]===&quot;not&quot;)if((d.exec(g[3])||&quot;&quot;).length&gt;1||/^\w/.test(g[3]))g[3]=k(g[3],null,null,i);else{g=k.filter(g[3],i,n,true^p);n||m.push.apply(m,g);return false}else if(o.match.POS.test(g[0])||o.match.CHILD.test(g[0]))return true;return g},POS:function(g){g.unshift(true);return g}},filters:{enabled:function(g){return g.disabled===false&amp;&amp;g.type!==&quot;hidden&quot;},disabled:function(g){return g.disabled===</div><div class='line' id='LC90'>true},checked:function(g){return g.checked===true},selected:function(g){return g.selected===true},parent:function(g){return!!g.firstChild},empty:function(g){return!g.firstChild},has:function(g,i,n){return!!k(n[3],g).length},header:function(g){return/h\d/i.test(g.nodeName)},text:function(g){return&quot;text&quot;===g.type},radio:function(g){return&quot;radio&quot;===g.type},checkbox:function(g){return&quot;checkbox&quot;===g.type},file:function(g){return&quot;file&quot;===g.type},password:function(g){return&quot;password&quot;===g.type},submit:function(g){return&quot;submit&quot;===</div><div class='line' id='LC91'>g.type},image:function(g){return&quot;image&quot;===g.type},reset:function(g){return&quot;reset&quot;===g.type},button:function(g){return&quot;button&quot;===g.type||g.nodeName.toLowerCase()===&quot;button&quot;},input:function(g){return/input|select|textarea|button/i.test(g.nodeName)}},setFilters:{first:function(g,i){return i===0},last:function(g,i,n,m){return i===m.length-1},even:function(g,i){return i%2===0},odd:function(g,i){return i%2===1},lt:function(g,i,n){return i&lt;n[3]-0},gt:function(g,i,n){return i&gt;n[3]-0},nth:function(g,i,n){return n[3]-</div><div class='line' id='LC92'>0===i},eq:function(g,i,n){return n[3]-0===i}},filter:{PSEUDO:function(g,i,n,m){var p=i[1],q=o.filters[p];if(q)return q(g,n,i,m);else if(p===&quot;contains&quot;)return(g.textContent||g.innerText||k.getText([g])||&quot;&quot;).indexOf(i[3])&gt;=0;else if(p===&quot;not&quot;){i=i[3];n=0;for(m=i.length;n&lt;m;n++)if(i[n]===g)return false;return true}else k.error(&quot;Syntax error, unrecognized expression: &quot;+p)},CHILD:function(g,i){var n=i[1],m=g;switch(n){case &quot;only&quot;:case &quot;first&quot;:for(;m=m.previousSibling;)if(m.nodeType===1)return false;if(n===</div><div class='line' id='LC93'>&quot;first&quot;)return true;m=g;case &quot;last&quot;:for(;m=m.nextSibling;)if(m.nodeType===1)return false;return true;case &quot;nth&quot;:n=i[2];var p=i[3];if(n===1&amp;&amp;p===0)return true;var q=i[0],u=g.parentNode;if(u&amp;&amp;(u.sizcache!==q||!g.nodeIndex)){var y=0;for(m=u.firstChild;m;m=m.nextSibling)if(m.nodeType===1)m.nodeIndex=++y;u.sizcache=q}m=g.nodeIndex-p;return n===0?m===0:m%n===0&amp;&amp;m/n&gt;=0}},ID:function(g,i){return g.nodeType===1&amp;&amp;g.getAttribute(&quot;id&quot;)===i},TAG:function(g,i){return i===&quot;*&quot;&amp;&amp;g.nodeType===1||g.nodeName.toLowerCase()===</div><div class='line' id='LC94'>i},CLASS:function(g,i){return(&quot; &quot;+(g.className||g.getAttribute(&quot;class&quot;))+&quot; &quot;).indexOf(i)&gt;-1},ATTR:function(g,i){var n=i[1];n=o.attrHandle[n]?o.attrHandle[n](g):g[n]!=null?g[n]:g.getAttribute(n);var m=n+&quot;&quot;,p=i[2],q=i[4];return n==null?p===&quot;!=&quot;:p===&quot;=&quot;?m===q:p===&quot;*=&quot;?m.indexOf(q)&gt;=0:p===&quot;~=&quot;?(&quot; &quot;+m+&quot; &quot;).indexOf(q)&gt;=0:!q?m&amp;&amp;n!==false:p===&quot;!=&quot;?m!==q:p===&quot;^=&quot;?m.indexOf(q)===0:p===&quot;$=&quot;?m.substr(m.length-q.length)===q:p===&quot;|=&quot;?m===q||m.substr(0,q.length+1)===q+&quot;-&quot;:false},POS:function(g,i,n,m){var p=o.setFilters[i[2]];</div><div class='line' id='LC95'>if(p)return p(g,n,i,m)}}},x=o.match.POS,r=function(g,i){return&quot;\\&quot;+(i-0+1)},A;for(A in o.match){o.match[A]=RegExp(o.match[A].source+/(?![^\[]*\])(?![^\(]*\))/.source);o.leftMatch[A]=RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[A].source.replace(/\\(\d+)/g,r))}var C=function(g,i){g=Array.prototype.slice.call(g,0);if(i){i.push.apply(i,g);return i}return g};try{Array.prototype.slice.call(t.documentElement.childNodes,0)}catch(J){C=function(g,i){var n=0,m=i||[];if(f.call(g)===&quot;[object Array]&quot;)Array.prototype.push.apply(m,</div><div class='line' id='LC96'>g);else if(typeof g.length===&quot;number&quot;)for(var p=g.length;n&lt;p;n++)m.push(g[n]);else for(;g[n];n++)m.push(g[n]);return m}}var w,I;if(t.documentElement.compareDocumentPosition)w=function(g,i){if(g===i){h=true;return 0}if(!g.compareDocumentPosition||!i.compareDocumentPosition)return g.compareDocumentPosition?-1:1;return g.compareDocumentPosition(i)&amp;4?-1:1};else{w=function(g,i){var n,m,p=[],q=[];n=g.parentNode;m=i.parentNode;var u=n;if(g===i){h=true;return 0}else if(n===m)return I(g,i);else if(n){if(!m)return 1}else return-1;</div><div class='line' id='LC97'>for(;u;){p.unshift(u);u=u.parentNode}for(u=m;u;){q.unshift(u);u=u.parentNode}n=p.length;m=q.length;for(u=0;u&lt;n&amp;&amp;u&lt;m;u++)if(p[u]!==q[u])return I(p[u],q[u]);return u===n?I(g,q[u],-1):I(p[u],i,1)};I=function(g,i,n){if(g===i)return n;for(g=g.nextSibling;g;){if(g===i)return-1;g=g.nextSibling}return 1}}k.getText=function(g){for(var i=&quot;&quot;,n,m=0;g[m];m++){n=g[m];if(n.nodeType===3||n.nodeType===4)i+=n.nodeValue;else if(n.nodeType!==8)i+=k.getText(n.childNodes)}return i};(function(){var g=t.createElement(&quot;div&quot;),</div><div class='line' id='LC98'>i=&quot;script&quot;+(new Date).getTime(),n=t.documentElement;g.innerHTML=&quot;&lt;a name='&quot;+i+&quot;'/&gt;&quot;;n.insertBefore(g,n.firstChild);if(t.getElementById(i)){o.find.ID=function(m,p,q){if(typeof p.getElementById!==&quot;undefined&quot;&amp;&amp;!q)return(p=p.getElementById(m[1]))?p.id===m[1]||typeof p.getAttributeNode!==&quot;undefined&quot;&amp;&amp;p.getAttributeNode(&quot;id&quot;).nodeValue===m[1]?[p]:B:[]};o.filter.ID=function(m,p){var q=typeof m.getAttributeNode!==&quot;undefined&quot;&amp;&amp;m.getAttributeNode(&quot;id&quot;);return m.nodeType===1&amp;&amp;q&amp;&amp;q.nodeValue===p}}n.removeChild(g);</div><div class='line' id='LC99'>n=g=null})();(function(){var g=t.createElement(&quot;div&quot;);g.appendChild(t.createComment(&quot;&quot;));if(g.getElementsByTagName(&quot;*&quot;).length&gt;0)o.find.TAG=function(i,n){var m=n.getElementsByTagName(i[1]);if(i[1]===&quot;*&quot;){for(var p=[],q=0;m[q];q++)m[q].nodeType===1&amp;&amp;p.push(m[q]);m=p}return m};g.innerHTML=&quot;&lt;a href='#'&gt;&lt;/a&gt;&quot;;if(g.firstChild&amp;&amp;typeof g.firstChild.getAttribute!==&quot;undefined&quot;&amp;&amp;g.firstChild.getAttribute(&quot;href&quot;)!==&quot;#&quot;)o.attrHandle.href=function(i){return i.getAttribute(&quot;href&quot;,2)};g=null})();t.querySelectorAll&amp;&amp;</div><div class='line' id='LC100'>function(){var g=k,i=t.createElement(&quot;div&quot;);i.innerHTML=&quot;&lt;p class='TEST'&gt;&lt;/p&gt;&quot;;if(!(i.querySelectorAll&amp;&amp;i.querySelectorAll(&quot;.TEST&quot;).length===0)){k=function(m,p,q,u){p=p||t;m=m.replace(/\=\s*([^'&quot;\]]*)\s*\]/g,&quot;='$1']&quot;);if(!u&amp;&amp;!k.isXML(p))if(p.nodeType===9)try{return C(p.querySelectorAll(m),q)}catch(y){}else if(p.nodeType===1&amp;&amp;p.nodeName.toLowerCase()!==&quot;object&quot;){var F=p.getAttribute(&quot;id&quot;),M=F||&quot;__sizzle__&quot;;F||p.setAttribute(&quot;id&quot;,M);try{return C(p.querySelectorAll(&quot;#&quot;+M+&quot; &quot;+m),q)}catch(N){}finally{F||</div><div class='line' id='LC101'>p.removeAttribute(&quot;id&quot;)}}return g(m,p,q,u)};for(var n in g)k[n]=g[n];i=null}}();(function(){var g=t.documentElement,i=g.matchesSelector||g.mozMatchesSelector||g.webkitMatchesSelector||g.msMatchesSelector,n=false;try{i.call(t.documentElement,&quot;[test!='']:sizzle&quot;)}catch(m){n=true}if(i)k.matchesSelector=function(p,q){q=q.replace(/\=\s*([^'&quot;\]]*)\s*\]/g,&quot;='$1']&quot;);if(!k.isXML(p))try{if(n||!o.match.PSEUDO.test(q)&amp;&amp;!/!=/.test(q))return i.call(p,q)}catch(u){}return k(q,null,null,[p]).length&gt;0}})();(function(){var g=</div><div class='line' id='LC102'>t.createElement(&quot;div&quot;);g.innerHTML=&quot;&lt;div class='test e'&gt;&lt;/div&gt;&lt;div class='test'&gt;&lt;/div&gt;&quot;;if(!(!g.getElementsByClassName||g.getElementsByClassName(&quot;e&quot;).length===0)){g.lastChild.className=&quot;e&quot;;if(g.getElementsByClassName(&quot;e&quot;).length!==1){o.order.splice(1,0,&quot;CLASS&quot;);o.find.CLASS=function(i,n,m){if(typeof n.getElementsByClassName!==&quot;undefined&quot;&amp;&amp;!m)return n.getElementsByClassName(i[1])};g=null}}})();k.contains=t.documentElement.contains?function(g,i){return g!==i&amp;&amp;(g.contains?g.contains(i):true)}:t.documentElement.compareDocumentPosition?</div><div class='line' id='LC103'>function(g,i){return!!(g.compareDocumentPosition(i)&amp;16)}:function(){return false};k.isXML=function(g){return(g=(g?g.ownerDocument||g:0).documentElement)?g.nodeName!==&quot;HTML&quot;:false};var L=function(g,i){for(var n,m=[],p=&quot;&quot;,q=i.nodeType?[i]:i;n=o.match.PSEUDO.exec(g);){p+=n[0];g=g.replace(o.match.PSEUDO,&quot;&quot;)}g=o.relative[g]?g+&quot;*&quot;:g;n=0;for(var u=q.length;n&lt;u;n++)k(g,q[n],m);return k.filter(p,m)};c.find=k;c.expr=k.selectors;c.expr[&quot;:&quot;]=c.expr.filters;c.unique=k.uniqueSort;c.text=k.getText;c.isXMLDoc=k.isXML;</div><div class='line' id='LC104'>c.contains=k.contains})();var Za=/Until$/,$a=/^(?:parents|prevUntil|prevAll)/,ab=/,/,Na=/^.[^:#\[\.,]*$/,bb=Array.prototype.slice,cb=c.expr.match.POS;c.fn.extend({find:function(a){for(var b=this.pushStack(&quot;&quot;,&quot;find&quot;,a),d=0,e=0,f=this.length;e&lt;f;e++){d=b.length;c.find(a,this[e],b);if(e&gt;0)for(var h=d;h&lt;b.length;h++)for(var l=0;l&lt;d;l++)if(b[l]===b[h]){b.splice(h--,1);break}}return b},has:function(a){var b=c(a);return this.filter(function(){for(var d=0,e=b.length;d&lt;e;d++)if(c.contains(this,b[d]))return true})},</div><div class='line' id='LC105'>not:function(a){return this.pushStack(ma(this,a,false),&quot;not&quot;,a)},filter:function(a){return this.pushStack(ma(this,a,true),&quot;filter&quot;,a)},is:function(a){return!!a&amp;&amp;c.filter(a,this).length&gt;0},closest:function(a,b){var d=[],e,f,h=this[0];if(c.isArray(a)){var l,k={},o=1;if(h&amp;&amp;a.length){e=0;for(f=a.length;e&lt;f;e++){l=a[e];k[l]||(k[l]=c.expr.match.POS.test(l)?c(l,b||this.context):l)}for(;h&amp;&amp;h.ownerDocument&amp;&amp;h!==b;){for(l in k){e=k[l];if(e.jquery?e.index(h)&gt;-1:c(h).is(e))d.push({selector:l,elem:h,level:o})}h=</div><div class='line' id='LC106'>h.parentNode;o++}}return d}l=cb.test(a)?c(a,b||this.context):null;e=0;for(f=this.length;e&lt;f;e++)for(h=this[e];h;)if(l?l.index(h)&gt;-1:c.find.matchesSelector(h,a)){d.push(h);break}else{h=h.parentNode;if(!h||!h.ownerDocument||h===b)break}d=d.length&gt;1?c.unique(d):d;return this.pushStack(d,&quot;closest&quot;,a)},index:function(a){if(!a||typeof a===&quot;string&quot;)return c.inArray(this[0],a?c(a):this.parent().children());return c.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var d=typeof a===&quot;string&quot;?c(a,b||this.context):</div><div class='line' id='LC107'>c.makeArray(a),e=c.merge(this.get(),d);return this.pushStack(!d[0]||!d[0].parentNode||d[0].parentNode.nodeType===11||!e[0]||!e[0].parentNode||e[0].parentNode.nodeType===11?e:c.unique(e))},andSelf:function(){return this.add(this.prevObject)}});c.each({parent:function(a){return(a=a.parentNode)&amp;&amp;a.nodeType!==11?a:null},parents:function(a){return c.dir(a,&quot;parentNode&quot;)},parentsUntil:function(a,b,d){return c.dir(a,&quot;parentNode&quot;,d)},next:function(a){return c.nth(a,2,&quot;nextSibling&quot;)},prev:function(a){return c.nth(a,</div><div class='line' id='LC108'>2,&quot;previousSibling&quot;)},nextAll:function(a){return c.dir(a,&quot;nextSibling&quot;)},prevAll:function(a){return c.dir(a,&quot;previousSibling&quot;)},nextUntil:function(a,b,d){return c.dir(a,&quot;nextSibling&quot;,d)},prevUntil:function(a,b,d){return c.dir(a,&quot;previousSibling&quot;,d)},siblings:function(a){return c.sibling(a.parentNode.firstChild,a)},children:function(a){return c.sibling(a.firstChild)},contents:function(a){return c.nodeName(a,&quot;iframe&quot;)?a.contentDocument||a.contentWindow.document:c.makeArray(a.childNodes)}},function(a,</div><div class='line' id='LC109'>b){c.fn[a]=function(d,e){var f=c.map(this,b,d);Za.test(a)||(e=d);if(e&amp;&amp;typeof e===&quot;string&quot;)f=c.filter(e,f);f=this.length&gt;1?c.unique(f):f;if((this.length&gt;1||ab.test(e))&amp;&amp;$a.test(a))f=f.reverse();return this.pushStack(f,a,bb.call(arguments).join(&quot;,&quot;))}});c.extend({filter:function(a,b,d){if(d)a=&quot;:not(&quot;+a+&quot;)&quot;;return b.length===1?c.find.matchesSelector(b[0],a)?[b[0]]:[]:c.find.matches(a,b)},dir:function(a,b,d){var e=[];for(a=a[b];a&amp;&amp;a.nodeType!==9&amp;&amp;(d===B||a.nodeType!==1||!c(a).is(d));){a.nodeType===1&amp;&amp;</div><div class='line' id='LC110'>e.push(a);a=a[b]}return e},nth:function(a,b,d){b=b||1;for(var e=0;a;a=a[d])if(a.nodeType===1&amp;&amp;++e===b)break;return a},sibling:function(a,b){for(var d=[];a;a=a.nextSibling)a.nodeType===1&amp;&amp;a!==b&amp;&amp;d.push(a);return d}});var za=/ jQuery\d+=&quot;(?:\d+|null)&quot;/g,$=/^\s+/,Aa=/&lt;(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^&gt;]*)\/&gt;/ig,Ba=/&lt;([\w:]+)/,db=/&lt;tbody/i,eb=/&lt;|&amp;#?\w+;/,Ca=/&lt;(?:script|object|embed|option|style)/i,Da=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/\=([^=&quot;'&gt;\s]+\/)&gt;/g,P={option:[1,</div><div class='line' id='LC111'>&quot;&lt;select multiple='multiple'&gt;&quot;,&quot;&lt;/select&gt;&quot;],legend:[1,&quot;&lt;fieldset&gt;&quot;,&quot;&lt;/fieldset&gt;&quot;],thead:[1,&quot;&lt;table&gt;&quot;,&quot;&lt;/table&gt;&quot;],tr:[2,&quot;&lt;table&gt;&lt;tbody&gt;&quot;,&quot;&lt;/tbody&gt;&lt;/table&gt;&quot;],td:[3,&quot;&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&quot;,&quot;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&quot;],col:[2,&quot;&lt;table&gt;&lt;tbody&gt;&lt;/tbody&gt;&lt;colgroup&gt;&quot;,&quot;&lt;/colgroup&gt;&lt;/table&gt;&quot;],area:[1,&quot;&lt;map&gt;&quot;,&quot;&lt;/map&gt;&quot;],_default:[0,&quot;&quot;,&quot;&quot;]};P.optgroup=P.option;P.tbody=P.tfoot=P.colgroup=P.caption=P.thead;P.th=P.td;if(!c.support.htmlSerialize)P._default=[1,&quot;div&lt;div&gt;&quot;,&quot;&lt;/div&gt;&quot;];c.fn.extend({text:function(a){if(c.isFunction(a))return this.each(function(b){var d=</div><div class='line' id='LC112'>c(this);d.text(a.call(this,b,d.text()))});if(typeof a!==&quot;object&quot;&amp;&amp;a!==B)return this.empty().append((this[0]&amp;&amp;this[0].ownerDocument||t).createTextNode(a));return c.text(this)},wrapAll:function(a){if(c.isFunction(a))return this.each(function(d){c(this).wrapAll(a.call(this,d))});if(this[0]){var b=c(a,this[0].ownerDocument).eq(0).clone(true);this[0].parentNode&amp;&amp;b.insertBefore(this[0]);b.map(function(){for(var d=this;d.firstChild&amp;&amp;d.firstChild.nodeType===1;)d=d.firstChild;return d}).append(this)}return this},</div><div class='line' id='LC113'>wrapInner:function(a){if(c.isFunction(a))return this.each(function(b){c(this).wrapInner(a.call(this,b))});return this.each(function(){var b=c(this),d=b.contents();d.length?d.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){c(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){c.nodeName(this,&quot;body&quot;)||c(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&amp;&amp;this.appendChild(a)})},</div><div class='line' id='LC114'>prepend:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&amp;&amp;this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&amp;&amp;this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,this)});else if(arguments.length){var a=c(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,&quot;before&quot;,arguments)}},after:function(){if(this[0]&amp;&amp;this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,</div><div class='line' id='LC115'>this.nextSibling)});else if(arguments.length){var a=this.pushStack(this,&quot;after&quot;,arguments);a.push.apply(a,c(arguments[0]).toArray());return a}},remove:function(a,b){for(var d=0,e;(e=this[d])!=null;d++)if(!a||c.filter(a,[e]).length){if(!b&amp;&amp;e.nodeType===1){c.cleanData(e.getElementsByTagName(&quot;*&quot;));c.cleanData([e])}e.parentNode&amp;&amp;e.parentNode.removeChild(e)}return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++)for(b.nodeType===1&amp;&amp;c.cleanData(b.getElementsByTagName(&quot;*&quot;));b.firstChild;)b.removeChild(b.firstChild);</div><div class='line' id='LC116'>return this},clone:function(a){var b=this.map(function(){if(!c.support.noCloneEvent&amp;&amp;!c.isXMLDoc(this)){var d=this.outerHTML,e=this.ownerDocument;if(!d){d=e.createElement(&quot;div&quot;);d.appendChild(this.cloneNode(true));d=d.innerHTML}return c.clean([d.replace(za,&quot;&quot;).replace(fb,'=&quot;$1&quot;&gt;').replace($,&quot;&quot;)],e)[0]}else return this.cloneNode(true)});if(a===true){na(this,b);na(this.find(&quot;*&quot;),b.find(&quot;*&quot;))}return b},html:function(a){if(a===B)return this[0]&amp;&amp;this[0].nodeType===1?this[0].innerHTML.replace(za,&quot;&quot;):null;</div><div class='line' id='LC117'>else if(typeof a===&quot;string&quot;&amp;&amp;!Ca.test(a)&amp;&amp;(c.support.leadingWhitespace||!$.test(a))&amp;&amp;!P[(Ba.exec(a)||[&quot;&quot;,&quot;&quot;])[1].toLowerCase()]){a=a.replace(Aa,&quot;&lt;$1&gt;&lt;/$2&gt;&quot;);try{for(var b=0,d=this.length;b&lt;d;b++)if(this[b].nodeType===1){c.cleanData(this[b].getElementsByTagName(&quot;*&quot;));this[b].innerHTML=a}}catch(e){this.empty().append(a)}}else c.isFunction(a)?this.each(function(f){var h=c(this);h.html(a.call(this,f,h.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&amp;&amp;this[0].parentNode){if(c.isFunction(a))return this.each(function(b){var d=</div><div class='line' id='LC118'>c(this),e=d.html();d.replaceWith(a.call(this,b,e))});if(typeof a!==&quot;string&quot;)a=c(a).detach();return this.each(function(){var b=this.nextSibling,d=this.parentNode;c(this).remove();b?c(b).before(a):c(d).append(a)})}else return this.pushStack(c(c.isFunction(a)?a():a),&quot;replaceWith&quot;,a)},detach:function(a){return this.remove(a,true)},domManip:function(a,b,d){var e,f,h,l=a[0],k=[];if(!c.support.checkClone&amp;&amp;arguments.length===3&amp;&amp;typeof l===&quot;string&quot;&amp;&amp;Da.test(l))return this.each(function(){c(this).domManip(a,</div><div class='line' id='LC119'>b,d,true)});if(c.isFunction(l))return this.each(function(x){var r=c(this);a[0]=l.call(this,x,b?r.html():B);r.domManip(a,b,d)});if(this[0]){e=l&amp;&amp;l.parentNode;e=c.support.parentNode&amp;&amp;e&amp;&amp;e.nodeType===11&amp;&amp;e.childNodes.length===this.length?{fragment:e}:c.buildFragment(a,this,k);h=e.fragment;if(f=h.childNodes.length===1?h=h.firstChild:h.firstChild){b=b&amp;&amp;c.nodeName(f,&quot;tr&quot;);f=0;for(var o=this.length;f&lt;o;f++)d.call(b?c.nodeName(this[f],&quot;table&quot;)?this[f].getElementsByTagName(&quot;tbody&quot;)[0]||this[f].appendChild(this[f].ownerDocument.createElement(&quot;tbody&quot;)):</div><div class='line' id='LC120'>this[f]:this[f],f&gt;0||e.cacheable||this.length&gt;1?h.cloneNode(true):h)}k.length&amp;&amp;c.each(k,Oa)}return this}});c.buildFragment=function(a,b,d){var e,f,h;b=b&amp;&amp;b[0]?b[0].ownerDocument||b[0]:t;if(a.length===1&amp;&amp;typeof a[0]===&quot;string&quot;&amp;&amp;a[0].length&lt;512&amp;&amp;b===t&amp;&amp;!Ca.test(a[0])&amp;&amp;(c.support.checkClone||!Da.test(a[0]))){f=true;if(h=c.fragments[a[0]])if(h!==1)e=h}if(!e){e=b.createDocumentFragment();c.clean(a,b,e,d)}if(f)c.fragments[a[0]]=h?e:1;return{fragment:e,cacheable:f}};c.fragments={};c.each({appendTo:&quot;append&quot;,</div><div class='line' id='LC121'>prependTo:&quot;prepend&quot;,insertBefore:&quot;before&quot;,insertAfter:&quot;after&quot;,replaceAll:&quot;replaceWith&quot;},function(a,b){c.fn[a]=function(d){var e=[];d=c(d);var f=this.length===1&amp;&amp;this[0].parentNode;if(f&amp;&amp;f.nodeType===11&amp;&amp;f.childNodes.length===1&amp;&amp;d.length===1){d[b](this[0]);return this}else{f=0;for(var h=d.length;f&lt;h;f++){var l=(f&gt;0?this.clone(true):this).get();c(d[f])[b](l);e=e.concat(l)}return this.pushStack(e,a,d.selector)}}});c.extend({clean:function(a,b,d,e){b=b||t;if(typeof b.createElement===&quot;undefined&quot;)b=b.ownerDocument||</div><div class='line' id='LC122'>b[0]&amp;&amp;b[0].ownerDocument||t;for(var f=[],h=0,l;(l=a[h])!=null;h++){if(typeof l===&quot;number&quot;)l+=&quot;&quot;;if(l){if(typeof l===&quot;string&quot;&amp;&amp;!eb.test(l))l=b.createTextNode(l);else if(typeof l===&quot;string&quot;){l=l.replace(Aa,&quot;&lt;$1&gt;&lt;/$2&gt;&quot;);var k=(Ba.exec(l)||[&quot;&quot;,&quot;&quot;])[1].toLowerCase(),o=P[k]||P._default,x=o[0],r=b.createElement(&quot;div&quot;);for(r.innerHTML=o[1]+l+o[2];x--;)r=r.lastChild;if(!c.support.tbody){x=db.test(l);k=k===&quot;table&quot;&amp;&amp;!x?r.firstChild&amp;&amp;r.firstChild.childNodes:o[1]===&quot;&lt;table&gt;&quot;&amp;&amp;!x?r.childNodes:[];for(o=k.length-</div><div class='line' id='LC123'>1;o&gt;=0;--o)c.nodeName(k[o],&quot;tbody&quot;)&amp;&amp;!k[o].childNodes.length&amp;&amp;k[o].parentNode.removeChild(k[o])}!c.support.leadingWhitespace&amp;&amp;$.test(l)&amp;&amp;r.insertBefore(b.createTextNode($.exec(l)[0]),r.firstChild);l=r.childNodes}if(l.nodeType)f.push(l);else f=c.merge(f,l)}}if(d)for(h=0;f[h];h++)if(e&amp;&amp;c.nodeName(f[h],&quot;script&quot;)&amp;&amp;(!f[h].type||f[h].type.toLowerCase()===&quot;text/javascript&quot;))e.push(f[h].parentNode?f[h].parentNode.removeChild(f[h]):f[h]);else{f[h].nodeType===1&amp;&amp;f.splice.apply(f,[h+1,0].concat(c.makeArray(f[h].getElementsByTagName(&quot;script&quot;))));</div><div class='line' id='LC124'>d.appendChild(f[h])}return f},cleanData:function(a){for(var b,d,e=c.cache,f=c.event.special,h=c.support.deleteExpando,l=0,k;(k=a[l])!=null;l++)if(!(k.nodeName&amp;&amp;c.noData[k.nodeName.toLowerCase()]))if(d=k[c.expando]){if((b=e[d])&amp;&amp;b.events)for(var o in b.events)f[o]?c.event.remove(k,o):c.removeEvent(k,o,b.handle);if(h)delete k[c.expando];else k.removeAttribute&amp;&amp;k.removeAttribute(c.expando);delete e[d]}}});var Ea=/alpha\([^)]*\)/i,gb=/opacity=([^)]*)/,hb=/-([a-z])/ig,ib=/([A-Z])/g,Fa=/^-?\d+(?:px)?$/i,</div><div class='line' id='LC125'>jb=/^-?\d/,kb={position:&quot;absolute&quot;,visibility:&quot;hidden&quot;,display:&quot;block&quot;},Pa=[&quot;Left&quot;,&quot;Right&quot;],Qa=[&quot;Top&quot;,&quot;Bottom&quot;],W,Ga,aa,lb=function(a,b){return b.toUpperCase()};c.fn.css=function(a,b){if(arguments.length===2&amp;&amp;b===B)return this;return c.access(this,a,b,true,function(d,e,f){return f!==B?c.style(d,e,f):c.css(d,e)})};c.extend({cssHooks:{opacity:{get:function(a,b){if(b){var d=W(a,&quot;opacity&quot;,&quot;opacity&quot;);return d===&quot;&quot;?&quot;1&quot;:d}else return a.style.opacity}}},cssNumber:{zIndex:true,fontWeight:true,opacity:true,</div><div class='line' id='LC126'>zoom:true,lineHeight:true},cssProps:{&quot;float&quot;:c.support.cssFloat?&quot;cssFloat&quot;:&quot;styleFloat&quot;},style:function(a,b,d,e){if(!(!a||a.nodeType===3||a.nodeType===8||!a.style)){var f,h=c.camelCase(b),l=a.style,k=c.cssHooks[h];b=c.cssProps[h]||h;if(d!==B){if(!(typeof d===&quot;number&quot;&amp;&amp;isNaN(d)||d==null)){if(typeof d===&quot;number&quot;&amp;&amp;!c.cssNumber[h])d+=&quot;px&quot;;if(!k||!(&quot;set&quot;in k)||(d=k.set(a,d))!==B)try{l[b]=d}catch(o){}}}else{if(k&amp;&amp;&quot;get&quot;in k&amp;&amp;(f=k.get(a,false,e))!==B)return f;return l[b]}}},css:function(a,b,d){var e,f=c.camelCase(b),</div><div class='line' id='LC127'>h=c.cssHooks[f];b=c.cssProps[f]||f;if(h&amp;&amp;&quot;get&quot;in h&amp;&amp;(e=h.get(a,true,d))!==B)return e;else if(W)return W(a,b,f)},swap:function(a,b,d){var e={},f;for(f in b){e[f]=a.style[f];a.style[f]=b[f]}d.call(a);for(f in b)a.style[f]=e[f]},camelCase:function(a){return a.replace(hb,lb)}});c.curCSS=c.css;c.each([&quot;height&quot;,&quot;width&quot;],function(a,b){c.cssHooks[b]={get:function(d,e,f){var h;if(e){if(d.offsetWidth!==0)h=oa(d,b,f);else c.swap(d,kb,function(){h=oa(d,b,f)});if(h&lt;=0){h=W(d,b,b);if(h===&quot;0px&quot;&amp;&amp;aa)h=aa(d,b,b);</div><div class='line' id='LC128'>if(h!=null)return h===&quot;&quot;||h===&quot;auto&quot;?&quot;0px&quot;:h}if(h&lt;0||h==null){h=d.style[b];return h===&quot;&quot;||h===&quot;auto&quot;?&quot;0px&quot;:h}return typeof h===&quot;string&quot;?h:h+&quot;px&quot;}},set:function(d,e){if(Fa.test(e)){e=parseFloat(e);if(e&gt;=0)return e+&quot;px&quot;}else return e}}});if(!c.support.opacity)c.cssHooks.opacity={get:function(a,b){return gb.test((b&amp;&amp;a.currentStyle?a.currentStyle.filter:a.style.filter)||&quot;&quot;)?parseFloat(RegExp.$1)/100+&quot;&quot;:b?&quot;1&quot;:&quot;&quot;},set:function(a,b){var d=a.style;d.zoom=1;var e=c.isNaN(b)?&quot;&quot;:&quot;alpha(opacity=&quot;+b*100+&quot;)&quot;,f=</div><div class='line' id='LC129'>d.filter||&quot;&quot;;d.filter=Ea.test(f)?f.replace(Ea,e):d.filter+&quot; &quot;+e}};if(t.defaultView&amp;&amp;t.defaultView.getComputedStyle)Ga=function(a,b,d){var e;d=d.replace(ib,&quot;-$1&quot;).toLowerCase();if(!(b=a.ownerDocument.defaultView))return B;if(b=b.getComputedStyle(a,null)){e=b.getPropertyValue(d);if(e===&quot;&quot;&amp;&amp;!c.contains(a.ownerDocument.documentElement,a))e=c.style(a,d)}return e};if(t.documentElement.currentStyle)aa=function(a,b){var d,e,f=a.currentStyle&amp;&amp;a.currentStyle[b],h=a.style;if(!Fa.test(f)&amp;&amp;jb.test(f)){d=h.left;</div><div class='line' id='LC130'>e=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;h.left=b===&quot;fontSize&quot;?&quot;1em&quot;:f||0;f=h.pixelLeft+&quot;px&quot;;h.left=d;a.runtimeStyle.left=e}return f===&quot;&quot;?&quot;auto&quot;:f};W=Ga||aa;if(c.expr&amp;&amp;c.expr.filters){c.expr.filters.hidden=function(a){var b=a.offsetHeight;return a.offsetWidth===0&amp;&amp;b===0||!c.support.reliableHiddenOffsets&amp;&amp;(a.style.display||c.css(a,&quot;display&quot;))===&quot;none&quot;};c.expr.filters.visible=function(a){return!c.expr.filters.hidden(a)}}var mb=c.now(),nb=/&lt;script\b[^&lt;]*(?:(?!&lt;\/script&gt;)&lt;[^&lt;]*)*&lt;\/script&gt;/gi,</div><div class='line' id='LC131'>ob=/^(?:select|textarea)/i,pb=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,qb=/^(?:GET|HEAD)$/,Ra=/\[\]$/,T=/\=\?(&amp;|$)/,ja=/\?/,rb=/([?&amp;])_=[^&amp;]*/,sb=/^(\w+:)?\/\/([^\/?#]+)/,tb=/%20/g,ub=/#.*$/,Ha=c.fn.load;c.fn.extend({load:function(a,b,d){if(typeof a!==&quot;string&quot;&amp;&amp;Ha)return Ha.apply(this,arguments);else if(!this.length)return this;var e=a.indexOf(&quot; &quot;);if(e&gt;=0){var f=a.slice(e,a.length);a=a.slice(0,e)}e=&quot;GET&quot;;if(b)if(c.isFunction(b)){d=b;b=null}else if(typeof b===</div><div class='line' id='LC132'>&quot;object&quot;){b=c.param(b,c.ajaxSettings.traditional);e=&quot;POST&quot;}var h=this;c.ajax({url:a,type:e,dataType:&quot;html&quot;,data:b,complete:function(l,k){if(k===&quot;success&quot;||k===&quot;notmodified&quot;)h.html(f?c(&quot;&lt;div&gt;&quot;).append(l.responseText.replace(nb,&quot;&quot;)).find(f):l.responseText);d&amp;&amp;h.each(d,[l.responseText,k,l])}});return this},serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?c.makeArray(this.elements):this}).filter(function(){return this.name&amp;&amp;</div><div class='line' id='LC133'>!this.disabled&amp;&amp;(this.checked||ob.test(this.nodeName)||pb.test(this.type))}).map(function(a,b){var d=c(this).val();return d==null?null:c.isArray(d)?c.map(d,function(e){return{name:b.name,value:e}}):{name:b.name,value:d}}).get()}});c.each(&quot;ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend&quot;.split(&quot; &quot;),function(a,b){c.fn[b]=function(d){return this.bind(b,d)}});c.extend({get:function(a,b,d,e){if(c.isFunction(b)){e=e||d;d=b;b=null}return c.ajax({type:&quot;GET&quot;,url:a,data:b,success:d,dataType:e})},</div><div class='line' id='LC134'>getScript:function(a,b){return c.get(a,null,b,&quot;script&quot;)},getJSON:function(a,b,d){return c.get(a,b,d,&quot;json&quot;)},post:function(a,b,d,e){if(c.isFunction(b)){e=e||d;d=b;b={}}return c.ajax({type:&quot;POST&quot;,url:a,data:b,success:d,dataType:e})},ajaxSetup:function(a){c.extend(c.ajaxSettings,a)},ajaxSettings:{url:location.href,global:true,type:&quot;GET&quot;,contentType:&quot;application/x-www-form-urlencoded&quot;,processData:true,async:true,xhr:function(){return new E.XMLHttpRequest},accepts:{xml:&quot;application/xml, text/xml&quot;,html:&quot;text/html&quot;,</div><div class='line' id='LC135'>script:&quot;text/javascript, application/javascript&quot;,json:&quot;application/json, text/javascript&quot;,text:&quot;text/plain&quot;,_default:&quot;*/*&quot;}},ajax:function(a){var b=c.extend(true,{},c.ajaxSettings,a),d,e,f,h=b.type.toUpperCase(),l=qb.test(h);b.url=b.url.replace(ub,&quot;&quot;);b.context=a&amp;&amp;a.context!=null?a.context:b;if(b.data&amp;&amp;b.processData&amp;&amp;typeof b.data!==&quot;string&quot;)b.data=c.param(b.data,b.traditional);if(b.dataType===&quot;jsonp&quot;){if(h===&quot;GET&quot;)T.test(b.url)||(b.url+=(ja.test(b.url)?&quot;&amp;&quot;:&quot;?&quot;)+(b.jsonp||&quot;callback&quot;)+&quot;=?&quot;);else if(!b.data||</div><div class='line' id='LC136'>!T.test(b.data))b.data=(b.data?b.data+&quot;&amp;&quot;:&quot;&quot;)+(b.jsonp||&quot;callback&quot;)+&quot;=?&quot;;b.dataType=&quot;json&quot;}if(b.dataType===&quot;json&quot;&amp;&amp;(b.data&amp;&amp;T.test(b.data)||T.test(b.url))){d=b.jsonpCallback||&quot;jsonp&quot;+mb++;if(b.data)b.data=(b.data+&quot;&quot;).replace(T,&quot;=&quot;+d+&quot;$1&quot;);b.url=b.url.replace(T,&quot;=&quot;+d+&quot;$1&quot;);b.dataType=&quot;script&quot;;var k=E[d];E[d]=function(m){if(c.isFunction(k))k(m);else{E[d]=B;try{delete E[d]}catch(p){}}f=m;c.handleSuccess(b,w,e,f);c.handleComplete(b,w,e,f);r&amp;&amp;r.removeChild(A)}}if(b.dataType===&quot;script&quot;&amp;&amp;b.cache===null)b.cache=</div><div class='line' id='LC137'>false;if(b.cache===false&amp;&amp;l){var o=c.now(),x=b.url.replace(rb,&quot;$1_=&quot;+o);b.url=x+(x===b.url?(ja.test(b.url)?&quot;&amp;&quot;:&quot;?&quot;)+&quot;_=&quot;+o:&quot;&quot;)}if(b.data&amp;&amp;l)b.url+=(ja.test(b.url)?&quot;&amp;&quot;:&quot;?&quot;)+b.data;b.global&amp;&amp;c.active++===0&amp;&amp;c.event.trigger(&quot;ajaxStart&quot;);o=(o=sb.exec(b.url))&amp;&amp;(o[1]&amp;&amp;o[1].toLowerCase()!==location.protocol||o[2].toLowerCase()!==location.host);if(b.dataType===&quot;script&quot;&amp;&amp;h===&quot;GET&quot;&amp;&amp;o){var r=t.getElementsByTagName(&quot;head&quot;)[0]||t.documentElement,A=t.createElement(&quot;script&quot;);if(b.scriptCharset)A.charset=b.scriptCharset;</div><div class='line' id='LC138'>A.src=b.url;if(!d){var C=false;A.onload=A.onreadystatechange=function(){if(!C&amp;&amp;(!this.readyState||this.readyState===&quot;loaded&quot;||this.readyState===&quot;complete&quot;)){C=true;c.handleSuccess(b,w,e,f);c.handleComplete(b,w,e,f);A.onload=A.onreadystatechange=null;r&amp;&amp;A.parentNode&amp;&amp;r.removeChild(A)}}}r.insertBefore(A,r.firstChild);return B}var J=false,w=b.xhr();if(w){b.username?w.open(h,b.url,b.async,b.username,b.password):w.open(h,b.url,b.async);try{if(b.data!=null&amp;&amp;!l||a&amp;&amp;a.contentType)w.setRequestHeader(&quot;Content-Type&quot;,</div><div class='line' id='LC139'>b.contentType);if(b.ifModified){c.lastModified[b.url]&amp;&amp;w.setRequestHeader(&quot;If-Modified-Since&quot;,c.lastModified[b.url]);c.etag[b.url]&amp;&amp;w.setRequestHeader(&quot;If-None-Match&quot;,c.etag[b.url])}o||w.setRequestHeader(&quot;X-Requested-With&quot;,&quot;XMLHttpRequest&quot;);w.setRequestHeader(&quot;Accept&quot;,b.dataType&amp;&amp;b.accepts[b.dataType]?b.accepts[b.dataType]+&quot;, */*; q=0.01&quot;:b.accepts._default)}catch(I){}if(b.beforeSend&amp;&amp;b.beforeSend.call(b.context,w,b)===false){b.global&amp;&amp;c.active--===1&amp;&amp;c.event.trigger(&quot;ajaxStop&quot;);w.abort();return false}b.global&amp;&amp;</div><div class='line' id='LC140'>c.triggerGlobal(b,&quot;ajaxSend&quot;,[w,b]);var L=w.onreadystatechange=function(m){if(!w||w.readyState===0||m===&quot;abort&quot;){J||c.handleComplete(b,w,e,f);J=true;if(w)w.onreadystatechange=c.noop}else if(!J&amp;&amp;w&amp;&amp;(w.readyState===4||m===&quot;timeout&quot;)){J=true;w.onreadystatechange=c.noop;e=m===&quot;timeout&quot;?&quot;timeout&quot;:!c.httpSuccess(w)?&quot;error&quot;:b.ifModified&amp;&amp;c.httpNotModified(w,b.url)?&quot;notmodified&quot;:&quot;success&quot;;var p;if(e===&quot;success&quot;)try{f=c.httpData(w,b.dataType,b)}catch(q){e=&quot;parsererror&quot;;p=q}if(e===&quot;success&quot;||e===&quot;notmodified&quot;)d||</div><div class='line' id='LC141'>c.handleSuccess(b,w,e,f);else c.handleError(b,w,e,p);d||c.handleComplete(b,w,e,f);m===&quot;timeout&quot;&amp;&amp;w.abort();if(b.async)w=null}};try{var g=w.abort;w.abort=function(){w&amp;&amp;Function.prototype.call.call(g,w);L(&quot;abort&quot;)}}catch(i){}b.async&amp;&amp;b.timeout&gt;0&amp;&amp;setTimeout(function(){w&amp;&amp;!J&amp;&amp;L(&quot;timeout&quot;)},b.timeout);try{w.send(l||b.data==null?null:b.data)}catch(n){c.handleError(b,w,null,n);c.handleComplete(b,w,e,f)}b.async||L();return w}},param:function(a,b){var d=[],e=function(h,l){l=c.isFunction(l)?l():l;d[d.length]=</div><div class='line' id='LC142'>encodeURIComponent(h)+&quot;=&quot;+encodeURIComponent(l)};if(b===B)b=c.ajaxSettings.traditional;if(c.isArray(a)||a.jquery)c.each(a,function(){e(this.name,this.value)});else for(var f in a)da(f,a[f],b,e);return d.join(&quot;&amp;&quot;).replace(tb,&quot;+&quot;)}});c.extend({active:0,lastModified:{},etag:{},handleError:function(a,b,d,e){a.error&amp;&amp;a.error.call(a.context,b,d,e);a.global&amp;&amp;c.triggerGlobal(a,&quot;ajaxError&quot;,[b,a,e])},handleSuccess:function(a,b,d,e){a.success&amp;&amp;a.success.call(a.context,e,d,b);a.global&amp;&amp;c.triggerGlobal(a,&quot;ajaxSuccess&quot;,</div><div class='line' id='LC143'>[b,a])},handleComplete:function(a,b,d){a.complete&amp;&amp;a.complete.call(a.context,b,d);a.global&amp;&amp;c.triggerGlobal(a,&quot;ajaxComplete&quot;,[b,a]);a.global&amp;&amp;c.active--===1&amp;&amp;c.event.trigger(&quot;ajaxStop&quot;)},triggerGlobal:function(a,b,d){(a.context&amp;&amp;a.context.url==null?c(a.context):c.event).trigger(b,d)},httpSuccess:function(a){try{return!a.status&amp;&amp;location.protocol===&quot;file:&quot;||a.status&gt;=200&amp;&amp;a.status&lt;300||a.status===304||a.status===1223}catch(b){}return false},httpNotModified:function(a,b){var d=a.getResponseHeader(&quot;Last-Modified&quot;),</div><div class='line' id='LC144'>e=a.getResponseHeader(&quot;Etag&quot;);if(d)c.lastModified[b]=d;if(e)c.etag[b]=e;return a.status===304},httpData:function(a,b,d){var e=a.getResponseHeader(&quot;content-type&quot;)||&quot;&quot;,f=b===&quot;xml&quot;||!b&amp;&amp;e.indexOf(&quot;xml&quot;)&gt;=0;a=f?a.responseXML:a.responseText;f&amp;&amp;a.documentElement.nodeName===&quot;parsererror&quot;&amp;&amp;c.error(&quot;parsererror&quot;);if(d&amp;&amp;d.dataFilter)a=d.dataFilter(a,b);if(typeof a===&quot;string&quot;)if(b===&quot;json&quot;||!b&amp;&amp;e.indexOf(&quot;json&quot;)&gt;=0)a=c.parseJSON(a);else if(b===&quot;script&quot;||!b&amp;&amp;e.indexOf(&quot;javascript&quot;)&gt;=0)c.globalEval(a);return a}});</div><div class='line' id='LC145'>if(E.ActiveXObject)c.ajaxSettings.xhr=function(){if(E.location.protocol!==&quot;file:&quot;)try{return new E.XMLHttpRequest}catch(a){}try{return new E.ActiveXObject(&quot;Microsoft.XMLHTTP&quot;)}catch(b){}};c.support.ajax=!!c.ajaxSettings.xhr();var ea={},vb=/^(?:toggle|show|hide)$/,wb=/^([+\-]=)?([\d+.\-]+)(.*)$/,ba,pa=[[&quot;height&quot;,&quot;marginTop&quot;,&quot;marginBottom&quot;,&quot;paddingTop&quot;,&quot;paddingBottom&quot;],[&quot;width&quot;,&quot;marginLeft&quot;,&quot;marginRight&quot;,&quot;paddingLeft&quot;,&quot;paddingRight&quot;],[&quot;opacity&quot;]];c.fn.extend({show:function(a,b,d){if(a||a===0)return this.animate(S(&quot;show&quot;,</div><div class='line' id='LC146'>3),a,b,d);else{d=0;for(var e=this.length;d&lt;e;d++){a=this[d];b=a.style.display;if(!c.data(a,&quot;olddisplay&quot;)&amp;&amp;b===&quot;none&quot;)b=a.style.display=&quot;&quot;;b===&quot;&quot;&amp;&amp;c.css(a,&quot;display&quot;)===&quot;none&quot;&amp;&amp;c.data(a,&quot;olddisplay&quot;,qa(a.nodeName))}for(d=0;d&lt;e;d++){a=this[d];b=a.style.display;if(b===&quot;&quot;||b===&quot;none&quot;)a.style.display=c.data(a,&quot;olddisplay&quot;)||&quot;&quot;}return this}},hide:function(a,b,d){if(a||a===0)return this.animate(S(&quot;hide&quot;,3),a,b,d);else{a=0;for(b=this.length;a&lt;b;a++){d=c.css(this[a],&quot;display&quot;);d!==&quot;none&quot;&amp;&amp;c.data(this[a],&quot;olddisplay&quot;,</div><div class='line' id='LC147'>d)}for(a=0;a&lt;b;a++)this[a].style.display=&quot;none&quot;;return this}},_toggle:c.fn.toggle,toggle:function(a,b,d){var e=typeof a===&quot;boolean&quot;;if(c.isFunction(a)&amp;&amp;c.isFunction(b))this._toggle.apply(this,arguments);else a==null||e?this.each(function(){var f=e?a:c(this).is(&quot;:hidden&quot;);c(this)[f?&quot;show&quot;:&quot;hide&quot;]()}):this.animate(S(&quot;toggle&quot;,3),a,b,d);return this},fadeTo:function(a,b,d,e){return this.filter(&quot;:hidden&quot;).css(&quot;opacity&quot;,0).show().end().animate({opacity:b},a,d,e)},animate:function(a,b,d,e){var f=c.speed(b,</div><div class='line' id='LC148'>d,e);if(c.isEmptyObject(a))return this.each(f.complete);return this[f.queue===false?&quot;each&quot;:&quot;queue&quot;](function(){var h=c.extend({},f),l,k=this.nodeType===1,o=k&amp;&amp;c(this).is(&quot;:hidden&quot;),x=this;for(l in a){var r=c.camelCase(l);if(l!==r){a[r]=a[l];delete a[l];l=r}if(a[l]===&quot;hide&quot;&amp;&amp;o||a[l]===&quot;show&quot;&amp;&amp;!o)return h.complete.call(this);if(k&amp;&amp;(l===&quot;height&quot;||l===&quot;width&quot;)){h.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY];if(c.css(this,&quot;display&quot;)===&quot;inline&quot;&amp;&amp;c.css(this,&quot;float&quot;)===&quot;none&quot;)if(c.support.inlineBlockNeedsLayout)if(qa(this.nodeName)===</div><div class='line' id='LC149'>&quot;inline&quot;)this.style.display=&quot;inline-block&quot;;else{this.style.display=&quot;inline&quot;;this.style.zoom=1}else this.style.display=&quot;inline-block&quot;}if(c.isArray(a[l])){(h.specialEasing=h.specialEasing||{})[l]=a[l][1];a[l]=a[l][0]}}if(h.overflow!=null)this.style.overflow=&quot;hidden&quot;;h.curAnim=c.extend({},a);c.each(a,function(A,C){var J=new c.fx(x,h,A);if(vb.test(C))J[C===&quot;toggle&quot;?o?&quot;show&quot;:&quot;hide&quot;:C](a);else{var w=wb.exec(C),I=J.cur()||0;if(w){var L=parseFloat(w[2]),g=w[3]||&quot;px&quot;;if(g!==&quot;px&quot;){c.style(x,A,(L||1)+g);I=(L||</div><div class='line' id='LC150'>1)/J.cur()*I;c.style(x,A,I+g)}if(w[1])L=(w[1]===&quot;-=&quot;?-1:1)*L+I;J.custom(I,L,g)}else J.custom(I,C,&quot;&quot;)}});return true})},stop:function(a,b){var d=c.timers;a&amp;&amp;this.queue([]);this.each(function(){for(var e=d.length-1;e&gt;=0;e--)if(d[e].elem===this){b&amp;&amp;d[e](true);d.splice(e,1)}});b||this.dequeue();return this}});c.each({slideDown:S(&quot;show&quot;,1),slideUp:S(&quot;hide&quot;,1),slideToggle:S(&quot;toggle&quot;,1),fadeIn:{opacity:&quot;show&quot;},fadeOut:{opacity:&quot;hide&quot;},fadeToggle:{opacity:&quot;toggle&quot;}},function(a,b){c.fn[a]=function(d,e,f){return this.animate(b,</div><div class='line' id='LC151'>d,e,f)}});c.extend({speed:function(a,b,d){var e=a&amp;&amp;typeof a===&quot;object&quot;?c.extend({},a):{complete:d||!d&amp;&amp;b||c.isFunction(a)&amp;&amp;a,duration:a,easing:d&amp;&amp;b||b&amp;&amp;!c.isFunction(b)&amp;&amp;b};e.duration=c.fx.off?0:typeof e.duration===&quot;number&quot;?e.duration:e.duration in c.fx.speeds?c.fx.speeds[e.duration]:c.fx.speeds._default;e.old=e.complete;e.complete=function(){e.queue!==false&amp;&amp;c(this).dequeue();c.isFunction(e.old)&amp;&amp;e.old.call(this)};return e},easing:{linear:function(a,b,d,e){return d+e*a},swing:function(a,b,d,e){return(-Math.cos(a*</div><div class='line' id='LC152'>Math.PI)/2+0.5)*e+d}},timers:[],fx:function(a,b,d){this.options=b;this.elem=a;this.prop=d;if(!b.orig)b.orig={}}});c.fx.prototype={update:function(){this.options.step&amp;&amp;this.options.step.call(this.elem,this.now,this);(c.fx.step[this.prop]||c.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&amp;&amp;(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a=parseFloat(c.css(this.elem,this.prop));return a&amp;&amp;a&gt;-1E4?a:0},custom:function(a,b,d){function e(l){return f.step(l)}</div><div class='line' id='LC153'>var f=this,h=c.fx;this.startTime=c.now();this.start=a;this.end=b;this.unit=d||this.unit||&quot;px&quot;;this.now=this.start;this.pos=this.state=0;e.elem=this.elem;if(e()&amp;&amp;c.timers.push(e)&amp;&amp;!ba)ba=setInterval(h.tick,h.interval)},show:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.show=true;this.custom(this.prop===&quot;width&quot;||this.prop===&quot;height&quot;?1:0,this.cur());c(this.elem).show()},hide:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.hide=true;</div><div class='line' id='LC154'>this.custom(this.cur(),0)},step:function(a){var b=c.now(),d=true;if(a||b&gt;=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;for(var e in this.options.curAnim)if(this.options.curAnim[e]!==true)d=false;if(d){if(this.options.overflow!=null&amp;&amp;!c.support.shrinkWrapBlocks){var f=this.elem,h=this.options;c.each([&quot;&quot;,&quot;X&quot;,&quot;Y&quot;],function(k,o){f.style[&quot;overflow&quot;+o]=h.overflow[k]})}this.options.hide&amp;&amp;c(this.elem).hide();if(this.options.hide||</div><div class='line' id='LC155'>this.options.show)for(var l in this.options.curAnim)c.style(this.elem,l,this.options.orig[l]);this.options.complete.call(this.elem)}return false}else{a=b-this.startTime;this.state=a/this.options.duration;b=this.options.easing||(c.easing.swing?&quot;swing&quot;:&quot;linear&quot;);this.pos=c.easing[this.options.specialEasing&amp;&amp;this.options.specialEasing[this.prop]||b](this.state,a,0,1,this.options.duration);this.now=this.start+(this.end-this.start)*this.pos;this.update()}return true}};c.extend(c.fx,{tick:function(){for(var a=</div><div class='line' id='LC156'>c.timers,b=0;b&lt;a.length;b++)a[b]()||a.splice(b--,1);a.length||c.fx.stop()},interval:13,stop:function(){clearInterval(ba);ba=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){c.style(a.elem,&quot;opacity&quot;,a.now)},_default:function(a){if(a.elem.style&amp;&amp;a.elem.style[a.prop]!=null)a.elem.style[a.prop]=(a.prop===&quot;width&quot;||a.prop===&quot;height&quot;?Math.max(0,a.now):a.now)+a.unit;else a.elem[a.prop]=a.now}}});if(c.expr&amp;&amp;c.expr.filters)c.expr.filters.animated=function(a){return c.grep(c.timers,function(b){return a===</div><div class='line' id='LC157'>b.elem}).length};var xb=/^t(?:able|d|h)$/i,Ia=/^(?:body|html)$/i;c.fn.offset=&quot;getBoundingClientRect&quot;in t.documentElement?function(a){var b=this[0],d;if(a)return this.each(function(l){c.offset.setOffset(this,a,l)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);try{d=b.getBoundingClientRect()}catch(e){}var f=b.ownerDocument,h=f.documentElement;if(!d||!c.contains(h,b))return d||{top:0,left:0};b=f.body;f=fa(f);return{top:d.top+(f.pageYOffset||c.support.boxModel&amp;&amp;</div><div class='line' id='LC158'>h.scrollTop||b.scrollTop)-(h.clientTop||b.clientTop||0),left:d.left+(f.pageXOffset||c.support.boxModel&amp;&amp;h.scrollLeft||b.scrollLeft)-(h.clientLeft||b.clientLeft||0)}}:function(a){var b=this[0];if(a)return this.each(function(x){c.offset.setOffset(this,a,x)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);c.offset.initialize();var d,e=b.offsetParent,f=b.ownerDocument,h=f.documentElement,l=f.body;d=(f=f.defaultView)?f.getComputedStyle(b,null):b.currentStyle;</div><div class='line' id='LC159'>for(var k=b.offsetTop,o=b.offsetLeft;(b=b.parentNode)&amp;&amp;b!==l&amp;&amp;b!==h;){if(c.offset.supportsFixedPosition&amp;&amp;d.position===&quot;fixed&quot;)break;d=f?f.getComputedStyle(b,null):b.currentStyle;k-=b.scrollTop;o-=b.scrollLeft;if(b===e){k+=b.offsetTop;o+=b.offsetLeft;if(c.offset.doesNotAddBorder&amp;&amp;!(c.offset.doesAddBorderForTableAndCells&amp;&amp;xb.test(b.nodeName))){k+=parseFloat(d.borderTopWidth)||0;o+=parseFloat(d.borderLeftWidth)||0}e=b.offsetParent}if(c.offset.subtractsBorderForOverflowNotVisible&amp;&amp;d.overflow!==&quot;visible&quot;){k+=</div><div class='line' id='LC160'>parseFloat(d.borderTopWidth)||0;o+=parseFloat(d.borderLeftWidth)||0}d=d}if(d.position===&quot;relative&quot;||d.position===&quot;static&quot;){k+=l.offsetTop;o+=l.offsetLeft}if(c.offset.supportsFixedPosition&amp;&amp;d.position===&quot;fixed&quot;){k+=Math.max(h.scrollTop,l.scrollTop);o+=Math.max(h.scrollLeft,l.scrollLeft)}return{top:k,left:o}};c.offset={initialize:function(){var a=t.body,b=t.createElement(&quot;div&quot;),d,e,f,h=parseFloat(c.css(a,&quot;marginTop&quot;))||0;c.extend(b.style,{position:&quot;absolute&quot;,top:0,left:0,margin:0,border:0,width:&quot;1px&quot;,</div><div class='line' id='LC161'>height:&quot;1px&quot;,visibility:&quot;hidden&quot;});b.innerHTML=&quot;&lt;div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'&gt;&lt;div&gt;&lt;/div&gt;&lt;/div&gt;&lt;table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'&gt;&lt;tr&gt;&lt;td&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&quot;;a.insertBefore(b,a.firstChild);d=b.firstChild;e=d.firstChild;f=d.nextSibling.firstChild.firstChild;this.doesNotAddBorder=e.offsetTop!==5;this.doesAddBorderForTableAndCells=</div><div class='line' id='LC162'>f.offsetTop===5;e.style.position=&quot;fixed&quot;;e.style.top=&quot;20px&quot;;this.supportsFixedPosition=e.offsetTop===20||e.offsetTop===15;e.style.position=e.style.top=&quot;&quot;;d.style.overflow=&quot;hidden&quot;;d.style.position=&quot;relative&quot;;this.subtractsBorderForOverflowNotVisible=e.offsetTop===-5;this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==h;a.removeChild(b);c.offset.initialize=c.noop},bodyOffset:function(a){var b=a.offsetTop,d=a.offsetLeft;c.offset.initialize();if(c.offset.doesNotIncludeMarginInBodyOffset){b+=parseFloat(c.css(a,</div><div class='line' id='LC163'>&quot;marginTop&quot;))||0;d+=parseFloat(c.css(a,&quot;marginLeft&quot;))||0}return{top:b,left:d}},setOffset:function(a,b,d){var e=c.css(a,&quot;position&quot;);if(e===&quot;static&quot;)a.style.position=&quot;relative&quot;;var f=c(a),h=f.offset(),l=c.css(a,&quot;top&quot;),k=c.css(a,&quot;left&quot;),o=e===&quot;absolute&quot;&amp;&amp;c.inArray(&quot;auto&quot;,[l,k])&gt;-1;e={};var x={};if(o)x=f.position();l=o?x.top:parseInt(l,10)||0;k=o?x.left:parseInt(k,10)||0;if(c.isFunction(b))b=b.call(a,d,h);if(b.top!=null)e.top=b.top-h.top+l;if(b.left!=null)e.left=b.left-h.left+k;&quot;using&quot;in b?b.using.call(a,</div><div class='line' id='LC164'>e):f.css(e)}};c.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),d=this.offset(),e=Ia.test(b[0].nodeName)?{top:0,left:0}:b.offset();d.top-=parseFloat(c.css(a,&quot;marginTop&quot;))||0;d.left-=parseFloat(c.css(a,&quot;marginLeft&quot;))||0;e.top+=parseFloat(c.css(b[0],&quot;borderTopWidth&quot;))||0;e.left+=parseFloat(c.css(b[0],&quot;borderLeftWidth&quot;))||0;return{top:d.top-e.top,left:d.left-e.left}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||t.body;a&amp;&amp;!Ia.test(a.nodeName)&amp;&amp;</div><div class='line' id='LC165'>c.css(a,&quot;position&quot;)===&quot;static&quot;;)a=a.offsetParent;return a})}});c.each([&quot;Left&quot;,&quot;Top&quot;],function(a,b){var d=&quot;scroll&quot;+b;c.fn[d]=function(e){var f=this[0],h;if(!f)return null;if(e!==B)return this.each(function(){if(h=fa(this))h.scrollTo(!a?e:c(h).scrollLeft(),a?e:c(h).scrollTop());else this[d]=e});else return(h=fa(f))?&quot;pageXOffset&quot;in h?h[a?&quot;pageYOffset&quot;:&quot;pageXOffset&quot;]:c.support.boxModel&amp;&amp;h.document.documentElement[d]||h.document.body[d]:f[d]}});c.each([&quot;Height&quot;,&quot;Width&quot;],function(a,b){var d=b.toLowerCase();</div><div class='line' id='LC166'>c.fn[&quot;inner&quot;+b]=function(){return this[0]?parseFloat(c.css(this[0],d,&quot;padding&quot;)):null};c.fn[&quot;outer&quot;+b]=function(e){return this[0]?parseFloat(c.css(this[0],d,e?&quot;margin&quot;:&quot;border&quot;)):null};c.fn[d]=function(e){var f=this[0];if(!f)return e==null?null:this;if(c.isFunction(e))return this.each(function(l){var k=c(this);k[d](e.call(this,l,k[d]()))});if(c.isWindow(f))return f.document.compatMode===&quot;CSS1Compat&quot;&amp;&amp;f.document.documentElement[&quot;client&quot;+b]||f.document.body[&quot;client&quot;+b];else if(f.nodeType===9)return Math.max(f.documentElement[&quot;client&quot;+</div><div class='line' id='LC167'>b],f.body[&quot;scroll&quot;+b],f.documentElement[&quot;scroll&quot;+b],f.body[&quot;offset&quot;+b],f.documentElement[&quot;offset&quot;+b]);else if(e===B){f=c.css(f,d);var h=parseFloat(f);return c.isNaN(h)?f:h}else return this.css(d,typeof e===&quot;string&quot;?e:e+&quot;px&quot;)}})})(window);</div><div class='line' id='LC168'><br/></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>
      </div>
    </div>

  </div>

<div class="frame frame-loading" style="display:none;" data-tree-list-url="/tmpvar/jsdom/tree-list/aa45593b6e1b53eb7d808bfd300f7a9698968860" data-blob-url-prefix="/tmpvar/jsdom/blob/aa45593b6e1b53eb7d808bfd300f7a9698968860">
  <img src="https://a248.e.akamai.net/assets.github.com/images/modules/ajax/big_spinner_336699.gif" height="32" width="32">
</div>

    </div>

    </div>

    <!-- footer -->
    <div id="footer" >
      
  <div class="upper_footer">
     <div class="site" class="clearfix">

       <!--[if IE]><h4 id="blacktocat_ie">GitHub Links</h4><![endif]-->
       <![if !IE]><h4 id="blacktocat">GitHub Links</h4><![endif]>

       <ul class="footer_nav">
         <h4>GitHub</h4>
         <li><a href="https://github.com/about">About</a></li>
         <li><a href="https://github.com/blog">Blog</a></li>
         <li><a href="https://github.com/features">Features</a></li>
         <li><a href="https://github.com/contact">Contact &amp; Support</a></li>
         <li><a href="https://github.com/training">Training</a></li>
         <li><a href="http://status.github.com/">Site Status</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Tools</h4>
         <li><a href="http://mac.github.com/">GitHub for Mac</a></li>
         <li><a href="http://mobile.github.com/">Issues for iPhone</a></li>
         <li><a href="https://gist.github.com">Gist: Code Snippets</a></li>
         <li><a href="http://enterprise.github.com/">GitHub Enterprise</a></li>
         <li><a href="http://jobs.github.com/">Job Board</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Extras</h4>
         <li><a href="http://shop.github.com/">GitHub Shop</a></li>
         <li><a href="http://octodex.github.com/">The Octodex</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Documentation</h4>
         <li><a href="http://help.github.com/">GitHub Help</a></li>
         <li><a href="http://developer.github.com/">Developer API</a></li>
         <li><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></li>
         <li><a href="http://pages.github.com/">GitHub Pages</a></li>
       </ul>

     </div><!-- /.site -->
  </div><!-- /.upper_footer -->

<div class="lower_footer">
  <div class="site" class="clearfix">
    <!--[if IE]><div id="legal_ie"><![endif]-->
    <![if !IE]><div id="legal"><![endif]>
      <ul>
          <li><a href="https://github.com/site/terms">Terms of Service</a></li>
          <li><a href="https://github.com/site/privacy">Privacy</a></li>
          <li><a href="https://github.com/security">Security</a></li>
      </ul>

      <p>&copy; 2011 <span id="_rrt" title="0.09324s from fe9.rs.github.com">GitHub</span> Inc. All rights reserved.</p>
    </div><!-- /#legal or /#legal_ie-->

      <div class="sponsor">
        <a href="http://www.rackspace.com" class="logo">
          <img alt="Dedicated Server" height="36" src="https://a248.e.akamai.net/assets.github.com/images/modules/footer/rackspace_logo.png?v2" width="38" />
        </a>
        Powered by the <a href="http://www.rackspace.com ">Dedicated
        Servers</a> and<br/> <a href="http://www.rackspacecloud.com">Cloud
        Computing</a> of Rackspace Hosting<span>&reg;</span>
      </div>
  </div><!-- /.site -->
</div><!-- /.lower_footer -->

    </div><!-- /#footer -->

    

<div id="keyboard_shortcuts_pane" class="instapaper_ignore readability-extra" style="display:none">
  <h2>Keyboard Shortcuts <small><a href="#" class="js-see-all-keyboard-shortcuts">(see all)</a></small></h2>

  <div class="columns threecols">
    <div class="column first">
      <h3>Site wide shortcuts</h3>
      <dl class="keyboard-mappings">
        <dt>s</dt>
        <dd>Focus site search</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>?</dt>
        <dd>Bring up this help dialog</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column middle" style=&#39;display:none&#39;>
      <h3>Commit list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>c <em>or</em> o <em>or</em> enter</dt>
        <dd>Open commit</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>y</dt>
        <dd>Expand URL to its canonical form</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column last" style=&#39;display:none&#39;>
      <h3>Pull request list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>o <em>or</em> enter</dt>
        <dd>Open issue</dd>
      </dl>
    </div><!-- /.columns.last -->

  </div><!-- /.columns.equacols -->

  <div style=&#39;display:none&#39;>
    <div class="rule"></div>

    <h3>Issues</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>x</dt>
          <dd>Toggle selection</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column middle">
        <dl class="keyboard-mappings">
          <dt>I</dt>
          <dd>Mark selection as read</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>U</dt>
          <dd>Mark selection as unread</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>e</dt>
          <dd>Close selection</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Remove selection from view</dd>
        </dl>
      </div><!-- /.column.middle -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>c</dt>
          <dd>Create issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Create label</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>i</dt>
          <dd>Back to inbox</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>u</dt>
          <dd>Back to issues</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>/</dt>
          <dd>Focus issues search</dd>
        </dl>
      </div>
    </div>
  </div>

  <div style=&#39;display:none&#39;>
    <div class="rule"></div>

    <h3>Issues Dashboard</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

  <div style=&#39;display:none&#39;>
    <div class="rule"></div>

    <h3>Network Graph</h3>
    <div class="columns equacols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt><span class="badmono">←</span> <em>or</em> h</dt>
          <dd>Scroll left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">→</span> <em>or</em> l</dt>
          <dd>Scroll right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↑</span> <em>or</em> k</dt>
          <dd>Scroll up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↓</span> <em>or</em> j</dt>
          <dd>Scroll down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Toggle visibility of head labels</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">←</span> <em>or</em> shift h</dt>
          <dd>Scroll all the way left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">→</span> <em>or</em> shift l</dt>
          <dd>Scroll all the way right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↑</span> <em>or</em> shift k</dt>
          <dd>Scroll all the way up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↓</span> <em>or</em> shift j</dt>
          <dd>Scroll all the way down</dd>
        </dl>
      </div><!-- /.column.last -->
    </div>
  </div>

  <div >
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first" >
        <h3>Source Code Browsing</h3>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Activates the file finder</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Jump to line</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>w</dt>
          <dd>Switch branch/tag</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Expand URL to its canonical form</dd>
        </dl>
      </div>
    </div>
  </div>
</div>

    <div id="markdown-help" class="instapaper_ignore readability-extra">
  <h2>Markdown Cheat Sheet</h2>

  <div class="cheatsheet-content">

  <div class="mod">
    <div class="col">
      <h3>Format Text</h3>
      <p>Headers</p>
      <pre>
# This is an &lt;h1&gt; tag
## This is an &lt;h2&gt; tag
###### This is an &lt;h6&gt; tag</pre>
     <p>Text styles</p>
     <pre>
*This text will be italic*
_This will also be italic_
**This text will be bold**
__This will also be bold__

*You **can** combine them*
</pre>
    </div>
    <div class="col">
      <h3>Lists</h3>
      <p>Unordered</p>
      <pre>
* Item 1
* Item 2
  * Item 2a
  * Item 2b</pre>
     <p>Ordered</p>
     <pre>
1. Item 1
2. Item 2
3. Item 3
   * Item 3a
   * Item 3b</pre>
    </div>
    <div class="col">
      <h3>Miscellaneous</h3>
      <p>Images</p>
      <pre>
![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)
</pre>
     <p>Links</p>
     <pre>
http://github.com - automatic!
[GitHub](http://github.com)</pre>
<p>Blockquotes</p>
     <pre>
As Kanye West said:
> We're living the future so
> the present is our past.
</pre>
    </div>
  </div>
  <div class="rule"></div>

  <h3>Code Examples in Markdown</h3>
  <div class="col">
      <p>Syntax highlighting with <a href="http://github.github.com/github-flavored-markdown/" title="GitHub Flavored Markdown" target="_blank">GFM</a></p>
      <pre>
```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```</pre>
    </div>
    <div class="col">
      <p>Or, indent your code 4 spaces</p>
      <pre>
Here is a Python code example
without syntax highlighting:

    def foo:
      if not bar:
        return true</pre>
    </div>
    <div class="col">
      <p>Inline code for comments</p>
      <pre>
I think you should use an
`&lt;addr&gt;` element here instead.</pre>
    </div>
  </div>

  </div>
</div>

    <div class="context-overlay"></div>

    
    
    
  </body>
</html>

