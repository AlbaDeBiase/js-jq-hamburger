// Al click sull'icona dell'hamburger menu, deve essere visualizzato il menu mobile
// e al click sull'icona "X" il menu mobile deve scomparire.
// In altre parole, dovere scrivere solo il codice js necessario a far funzionare l'hamburger menu.

// al click sull'icona hamburger viene visualizzato il Menu
$(".fa-bars").click(function() {
$(".hamburger-menu").show();
});

// al click sull'icona X il menu mobile scompare

$(".fa-times").click(function(){
$(".hamburger-menu").hide();
})
