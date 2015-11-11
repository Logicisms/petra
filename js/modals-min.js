if("undefined"==typeof jQuery)throw new Error("jQuery is required to run this JavaScript");+function($){"use strict";function t(t,o){return this.each(function(){var i=$(this),s=i.data("bs.modal"),n=$.extend({},e.DEFAULTS,i.data(),"object"==typeof t&&t);s||i.data("bs.modal",s=new e(this,n)),"string"==typeof t?s[t](o):n.show&&s.show(o)})}var e=function(t,e){this.options=e,this.$body=$(document.body),this.$element=$(t),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,$.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};e.VERSION="3.2.0",e.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},e.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},e.prototype.show=function(t){var e=this,o=$.Event("show.bs.modal",{relatedTarget:t});this.$element.trigger(o),this.isShown||o.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.$body.addClass("modal-open"),this.setScrollbar(),this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',$.proxy(this.hide,this)),this.backdrop(function(){var o=$.support.transition&&e.$element.hasClass("fade");e.$element.parent().length||e.$element.appendTo(e.$body),e.$element.show().scrollTop(0),o&&e.$element[0].offsetWidth,e.$element.addClass("in").attr("aria-hidden",!1),e.enforceFocus();var i=$.Event("shown.bs.modal",{relatedTarget:t});o?e.$element.find(".modal-dialog").one("bsTransitionEnd",function(){e.$element.trigger("focus").trigger(i)}).emulateTransitionEnd(300):e.$element.trigger("focus").trigger(i)}))},e.prototype.hide=function(t){t&&t.preventDefault(),t=$.Event("hide.bs.modal"),this.$element.trigger(t),this.isShown&&!t.isDefaultPrevented()&&(this.isShown=!1,this.$body.removeClass("modal-open"),this.resetScrollbar(),this.escape(),$(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),$.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",$.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},e.prototype.enforceFocus=function(){$(document).off("focusin.bs.modal").on("focusin.bs.modal",$.proxy(function(t){this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},e.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",$.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},e.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$element.trigger("hidden.bs.modal")})},e.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},e.prototype.backdrop=function(t){var e=this,o=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var i=$.support.transition&&o;if(this.$backdrop=$('<div class="modal-backdrop '+o+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",$.proxy(function(t){t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),i&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!t)return;i?this.$backdrop.one("bsTransitionEnd",t).emulateTransitionEnd(150):t()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var s=function(){e.removeBackdrop(),t&&t()};$.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",s).emulateTransitionEnd(150):s()}else t&&t()},e.prototype.checkScrollbar=function(){document.body.clientWidth>=window.innerWidth||(this.scrollbarWidth=this.scrollbarWidth||this.measureScrollbar())},e.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.scrollbarWidth&&this.$body.css("padding-right",t+this.scrollbarWidth)},e.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},e.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var o=$.fn.modal;$.fn.modal=t,$.fn.modal.Constructor=e,$.fn.modal.noConflict=function(){return $.fn.modal=o,this},$(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(e){var o=$(this),i=o.attr("href"),s=$(o.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,"")),n=s.data("bs.modal")?"toggle":$.extend({remote:!/#/.test(i)&&i},s.data(),o.data());o.is("a")&&e.preventDefault(),s.one("show.bs.modal",function(t){t.isDefaultPrevented()||s.one("hidden.bs.modal",function(){o.is(":visible")&&o.trigger("focus")})}),t.call(s,n,this)})}(jQuery);
//# sourceMappingURL=./modals-min.js.map