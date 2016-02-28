---
layout: post
title:  "Syntax highlighting"
date:   2016-02-27 09:55:38 -0600
categories: blog
tags: syntax
---

{% highlight ruby linenos %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

{% highlight javascript linenos %}
var undefined,
    xui,
    window     = this,
    string     = new String('string'),
    document   = window.document,
    simpleExpr = /^#?([\w-]+)$/,
{% endhighlight %}

{% highlight html linenos %}
  <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
  <html><head>
  <title>A Tiny Page</title>
  <style type="text/css">
  <!--
        p { font-size:15pt; color:#000 }
      -->
  </style></head><!-- real comment -->
  <body bgcolor="#FFFFFF" text="#000000" link="#0000CC">
  <script language="javascript" type="text/javascript">
        function changeHeight(h) {
          var tds = document.getElementsByTagName("td");
          for(var i = 0; i < tds.length; i++) {
            tds[i].setAttribute("height", h + "px");
        }}
  </script>
  <h1>abc</h1>
  <h2>def</h2>
  <p>Testing page</p>
  </body></html>
{% endhighlight %}

{% highlight ruby linenos %}
  desc "Edit a post (defaults to most recent)"
  task :edit_post, :title do |t, args|
    args.with_defaults(:title => false)
    posts = Dir.glob("#{source_dir}/#{posts_dir}/*.*")
    post = (args.title) ? post = posts.keep_if {|post| post =~ /#{args.title}/}.last : posts.last
    if post
      puts "Opening #{post} with #{editor}..."
      system "#{ENV['EDITOR']} #{post} &"
    else
      puts "No posts were found with \"#{args.title}\" in the title."
    end
  end
{% endhighlight %}

{% highlight php linenos %}
  <?php
  require_once($GLOBALS['g_campsiteDir']. "/$ADMIN_DIR/country/common.php");
  require_once($GLOBALS['g_campsiteDir']. "/classes/SimplePager.php");
  camp_load_translation_strings("api");

  $f_country_language_selected = camp_session_get('f_language_selected', '');
  $f_country_offset = camp_session_get('f_country_offset', 0);
  if (empty($f_country_language_selected)) {
      $f_country_language_selected = null;
  }
  $ItemsPerPage = 20;
  $languages = Language::GetLanguages(null, null, null, array(), array(), true);
  $numCountries = Country::GetNumCountries($f_country_language_selected);

  $pager = new SimplePager($numCountries, $ItemsPerPage, "index.php?");

  $crumbs = array();
  $crumbs[] = array(getGS("Configure"), "");
  $crumbs[] = array(getGS("Countries"), "");
  echo camp_html_breadcrumbs($crumbs);

  ?>

  <?php  if ($g_user->hasPermission("ManageCountries")) { ?>
  <table BORDER="0" CELLSPACING="0" CELLPADDING="1">
      <tr>
          <td><a href="add.php"><?php putGS("Add new"); ?></a></td>
      </tr>
  </table>
{% endhighlight %}

{% highlight bash linenos %}
  #!/bin/bash

  cd $ROOT_DIR
  DOT_FILES="lastpass weechat ssh Xauthority"
  for dotfile in $DOT_FILES; do conform_link "$DATA_DIR/$dotfile" ".$dotfile"; done

  # TODO: refactor with suffix variables (or common cron values)

  case "$PLATFORM" in
      linux)
          #conform_link "$CONF_DIR/shell/zshenv" ".zshenv"
          crontab -l > $ROOT_DIR/tmp/crontab-conflict-arch
          cd $ROOT_DIR/$CONF_DIR/cron
          if [[ "$(diff ~/tmp/crontab-conflict-arch crontab-current-arch)" == ""
              ]];
              then # no difference with current backup
                  logger "$LOG_PREFIX: crontab live settings match stored "\
                      "settings; no restore required"
                  rm ~/tmp/crontab-conflict-arch
              else # current crontab settings in file do not match live settings
                  crontab $ROOT_DIR/$CONF_DIR/cron/crontab-current-arch
                  logger "$LOG_PREFIX: crontab stored settings conflict with "\
                      "live settings; stored settings restored. "\
                      "Previous settings recorded in ~/tmp/crontab-conflict-arch."
          fi
      ;;
{% endhighlight %}

{% highlight ruby linenos %}

{% endhighlight %}
