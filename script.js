// $(document).ready(function () {
//             $('.collapseOneS')
//                 .on('shown.bs.collapseOne', function() {
//                     $(this)
//                         .parent()
//                         .find(".glyphicon-menu-down")
//                         .removeClass(".glyphicon-menu-down")
//                         .addClass(".glyphicon-menu-up");
//                 })
//                 .on('hidden.bs.collapseOne', function() {
//                     $(this)
//                         .parent()
//                         .find(".glyphicon-menu-up")
//                         .removeClass(".glyphicon-menu-up")
//                         .addClass(".defence.png");
//                 });
//         });
// $(function() {
//   $('.plus-minus-toggle').on('click', function() {
//     $(this).toggleClass('collapsed');
//   });
// });

$('.card-header').on('click', function()
 {
 
  $(this).toggleClass('closed');
  $(this).toggleClass('opened');
});

console.log("hello")