/*
 * @summary     Checkbox
 * @description Push the Shift-Key Checkboxes Multi Selection
 * @version     1.0.0
 * @file        jquery.checkboxMultiSelector.js
 * @author      Mitsugi Uchikoba <uchikoba@gmail.com>
 * @contact     uchikoba@gmail.com
 *
 * @copyright   Copyright 2014 Mitsugi Uchikoba, all rights reserved.
 */

(function($) {
  $.fn.checkboxMultiSelector = function () {
    var lastChecked = null;
    var $checkBoxes = $(this);
    $checkBoxes.click(function (e) {
      if (!lastChecked) {
        lastChecked = this;
        return;
      }

      if (e.shiftKey) {
        var start = $checkBoxes.index(this);
        var end   = $checkBoxes.index(lastChecked);

        $checkBoxes
         .slice(Math.min(start, end), Math.max(start, end) + 1)
         .attr('checked', lastChecked.checked);
      }

      lastChecked = this;
    });
    $('label').click(function (e) {
      var for_id = $(this).attr('for');
      if (for_id != undefined && for_id != '') {
        var dest_obj = $('#' + for_id);
        if (!lastChecked) {
          lastChecked = dest_obj;
          return;
        }

        if (e.shiftKey) {
          var start = $checkBoxes.index(dest_obj);
          var end   = $checkBoxes.index(lastChecked);

          $checkBoxes
            .slice(Math.min(start, end), Math.max(start, end) + 1)
            .attr('checked', lastChecked.checked);
        }
      }
    });
    return(this);
  };
})(jQuery);
