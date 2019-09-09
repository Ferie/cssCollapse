// Example 1
$('.example1').cssCollapse({
    transition: {
        behavior: 'ease-in-out',
        duration: '800ms'
    }
});

// Example 2
$('.example2').cssCollapse({
    transition: {
        behavior: 'ease-in-out',
        duration: '1s',
        delay: '500ms',
    }
});

// Example 3
$('.example3').cssCollapse({
    accordion: true,
    prefix: 'accordion-',
    iconClose: 'cssCollapse-chevron-down',
    iconOpen: 'cssCollapse-chevron-up'
});

// Example 4
$('.example4').cssCollapse({
    iconClose: 'dash',
    iconOpen: 'plus'
});

// Example 5
$('.example5').cssCollapse({
    changeText: {
        changeTextClass: 'changeText',
        open: 'Open',
        close: 'Close'
    }
});
