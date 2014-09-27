//Add html5 placeholder support (jquery plugin)
$('input, textarea').placeholder();

$('[title]').qtip(); // Grab all elements with a title attribute, and apply qTip!
$('[title!=""]').qtip(); // A bit better. Grab elements with a title attribute that isn't blank.
$('.side-menu a').qtip({
    position: {
        at: 'bottom left'
    }
});