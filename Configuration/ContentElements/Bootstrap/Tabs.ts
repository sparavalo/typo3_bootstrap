/**
 * Created by manfred on 23.06.14.
 * TS for TABs
 */
tt_content.bootstrap_package_tabs = COA
tt_content.bootstrap_package_tabs {
    10 =< lib.stdheader
    20 = FLUIDTEMPLATE
    20 {
        file = {$plugin.bootstrap_package_contentelements.view.templateRootPath}Bootstrap/Tabs.html
        partialRootPath = {$plugin.bootstrap_package_contentelements.view.partialRootPath}
        layoutRootPath = {$plugin.bootstrap_package_contentelements.view.layoutRootPath}
    }
}