// For Tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})


  // The Calender
  $('#calendar').datetimepicker({
    format: 'L',
    inline: true
  })





  $(function () {
        

    // jQuery UI sortable for the todo list
    $('.todo-list').sortable({
        placeholder: 'sort-highlight',
        handle: '.handle',
        forcePlaceholderSize: true,
        zIndex: 999999
    })
  })