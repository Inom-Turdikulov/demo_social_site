Inomoz CodeStyle
====================
1. CodeStyle (based on Google CodeStyle)
---------------------
1. Omit the protocol src="//...
##General Formatting Rules
2. 2 Space indent (i used 4, but i think 2 is better)
3. Use lowercase
4. Trail whitespace
##General Meta Rules
5. Encoding - UTF8 (without BOM [Byte order mark],  in html - set <meta charset="utf-8">, css not specify the encoding)
6. Comments, my comments style:
  @todo add comments style
7. Mark todos
##HTML Style Rules
8. Doctype (use html5 doctype <!DOCTYPE html>)
9. Validate documents (like Validate tools in Web Developer or Kingsquare HTML Validator)
10. Semantic (Use HTML according to its purpose. Details on html5doctor.com)
11. Multimedia fallback (alt on images, etc...)
12. Separate structure from presentation from behavior.
13. Do not use entity references. (Use utf8 charcter, sol. - fix bad html parsing)
14. Close optional tags (google rec. ommit, but i close like <li>..., and use <br> <img> except <br /> <img />)
15. Omit type attributes for style sheets and scripts.
##HTML Formatting Rules
16. Use a new line for every block, list, or table element, and indent every such child element.
I use this style (easy select block - alt+x, modules (.main-menu, .custom-image, .social-block) and tags within a module are separated by 1 line):

``` html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">

  <title>Document</title>

  <link rel="stylesheet" href="style.css">
</head>

<body>
  <!-- begin module  -->
    <div class="module">
      <p>Item</p>

      <ul>
        <li>
          <a href="#">Item 1</a>
        </li>
        <li>
          <a href="#">Item 2</a>
        </li>
        <li>
          <a href="#">Item 3</a>
        </li>
        <li>
          <a href="#">Item 4</a>
        </li>
      </ul>
    </div>
  <!-- end module -->

  <!-- begin module  -->
    <div class="module">
      <p>Item</p>

      <ul>
        <li>
          <a href="#">Item 1</a>
        </li>
        <li>
          <a href="#">Item 2</a>
        </li>
        <li>
          <a href="#">Item 3</a>
        </li>
        <li>
          <a href="#">Item 4</a>
        </li>
      </ul>
    </div>
    <!-- end module -->
</body>
</html>
```
17. Use double quote in html (<a class="maia-button maia-button-secondary">Sign in</a>)
##CSS Style Rules
18. Valid CSS
19. Use meaningful or generic ID and class names. (not use .button-green use .btn-advansed .btn-primary .btn-secondary .btn-main)
20. Use ID and class names that are as short as possible but as long as necessary.
21. Avoid qualifying ID and class names with type selectors. (not use a.g-error use .g-error)
22. Use shorthand properties where possible.
23. Omit unit specification after “0” values.
24. Omit leading “0”s in values. (use .5em .5s)
25. Use 3 character hexadecimal notation where possible.
26. Prefix selectors with an application-specific prefix (optional).
  .login
    .login-header
    .login-noteblock
27. Separate words in ID and class names by a hyphen. (not use main_block, use main-block)
28. Avoid user agent detection as well as CSS “hacks”—try a different approach first.
##CSS Formatting Rules
29. Declaration Order (i used CSSComb it sorting declarations by group)
30. Block Content Indentation
@media screen, projection {

  html {
    background: #fff;
    color: #444;
  }

}
31. Use a semicolon after every declaration. (easy to remove prop.)
32. Property Name Stops (<prop.>:<space><value>;)
33. Declaration Block Separation
/* Recommended */
#video {
  margin-top: 1em;
}
34. Separate selectors and declarations by new lines. (easy add/remove selector)
35. Separate rules by new lines.
html {
  background: #fff;
}
<newline>
body {
  margin: auto;
  width: 50%;
}
36. Use single quotation marks for attribute selectors and property values. (double used in html!)
font-family: 'open sans', arial, sans-serif;
##CSS Meta Rules
Group sections by a section comment. I used CSSDoc Syntax.
##Parting Words by Google
Be consistent.

If you’re editing code, take a few minutes to look at the code around you and determine its style. If they use spaces around all their arithmetic operators, you should too. If their comments have little boxes of hash marks around them, make your comments have little boxes of hash marks around them too.

The point of having style guidelines is to have a common vocabulary of coding so people can concentrate on what you’re saying rather than on how you’re saying it. We present global style rules here so people know the vocabulary, but local style is also important. If code you add to a file looks drastically different from the existing code around it, it throws readers out of their rhythm when they go to read it. Avoid this.
##Parting Words by Me
Use useful tools/shrotcuts/templates to automate this style, search new practicles and solutions.
2. Dictonary
---------------------
h-* Helper, like
h-left
h-right
(floating helper, used very low!!!! very low!!!!, i think only for testing)

h-tx-left
h-tx-right
h-tx-center
(Align helper, used very low!!!! very low!!!!, i think only for testing)

h-ir

h-cf
h-cl
h-cr
somthing else (basicly used with @extend method)

h-fz-x
h-fz-xl


i - item
tx - text

it - input text
is - input submit
itx - textarea
ir - input radio
ic - input checkbox
(i prefer use original tags (input, textarea and style them without this styles, but it useful to set adv styles - <input type="text" class="i-secondary">))

ico - icon
(1 letter? no pls i use this letter (icon-main, icon-social, icon-*))
t - title
(.login-t hm useful!!!)
f - footer
(.login-f hm useful!!!)
h - header
(.login-h hm useful!!!)

с - card
cl - clear
(see above h-cf, h-cfl, h-cfr)
col - column
like col1of12 col-1 col-2 col-3

cnt - content
.comment
  .comment-cnt

img - image
.img-default-avatar

a - link
  ??? rly, i think it useful ???
  .a-register
  .a-login
  .a-usercreat
ac  - action
  .ac-select-all
  .ac-i-remove

usr - user
  .usr-logged
  .ac-usr-add

e - error
  .e-warning
  .e-error
  .e-info

What comes after primary, secondary, tertiary?

The sequence continues with quaternary, quinary, senary, septenary, octonary, nonary, and denary, although most of these terms are rarely used. There's no word relating to the number eleven but there is one that relates to the number twelve: duodenary.

2. Tools
---------------------
Gulp
Sass
CSSComb
SpriteSmith