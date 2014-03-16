lib.accordionheader = TEXT
lib.accordionheader {
  field = header
  append = TEXT
  append.value = <i title="open/close all" class="icon-plus-sign icon-toggle"></i>
  append.if.isTrue.field = flexform_toggle
  wrap3 = <i title="open" class="icon-caret-right"></i><i title="close" class="icon-caret-down"></i>|
  wrap3.if.isTrue.field = parentgrid_flexform_accordion
  outerWrap = <h4>|</h4>
}
lib.gridelements {
  nestableAccordion < .defaultGridSetup
  nestableAccordion {
    prepend < lib.accordionheader
    prepend {
      wrap3 >
      outerWrap = <h3>|</h3>
    }
    wrap = <div class="pane first">|</div>
    outerWrap = <div class="nestable-accordion-first-level">|</div>
    columns {
      default {
        dataWrap = <div class="{field:flexform_settings}">|</div>
        dataWrap.override = <div class="noaccordion">|</div>
        dataWrap.override.if.isFalse.field = flexform_accordion
        renderObj.20 >
        renderObj.20 = CASE
        renderObj.20 {
          key.field = CType
          text = COA
          text.10 < lib.accordionheader
          text.20 = COA
          text.20.wrap = <div class="pane nested">|</div>
          text.20.20 =< tt_content.text.20
          textpic < .text
          textpic.20.20 < tt_content.textpic.20
          textpic.20.20.text.10 >
          gridelements_pi1 =< tt_content.gridelements_pi1
          gridelements_pi1.20.10.setup.9 {
            prepend < lib.accordionheader
            wrap = <div class="pane nested">|</div>
            outerWrap = |
          }
        }
      }
    }
  }
}
tt_content.gridelements_pi1.20.10.setup.nestableAccordion < lib.gridelements.nestableAccordion