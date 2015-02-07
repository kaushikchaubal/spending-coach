using System.Web;
using System.Web.Optimization;

namespace Angle
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            // App Styles and Scripts
            bundles.Add(new StyleBundle("~/Content/css").Include(
                "~/Content/app/css/app.css"
            ));

            bundles.Add(new ScriptBundle("~/bundles/Angle").Include(
                // App init
                "~/Scripts/app/app.init.js",
                // Modules
                "~/Scripts/app/modules/bootstrap-start.js",
                "~/Scripts/app/modules/calendar.js",
                "~/Scripts/app/modules/classyloader.js",
                "~/Scripts/app/modules/clear-storage.js",
                "~/Scripts/app/modules/constants.js",
                "~/Scripts/app/modules/demo",
                "~/Scripts/app/modules/flatdoc.js",
                "~/Scripts/app/modules/fullscreen.js",
                "~/Scripts/app/modules/gmap.js",
                "~/Scripts/app/modules/load-css.js",
                "~/Scripts/app/modules/localize.js",
                "~/Scripts/app/modules/maps-vector.js",
                "~/Scripts/app/modules/navbar-search.js",
                "~/Scripts/app/modules/notify.js",
                "~/Scripts/app/modules/now.js",
                "~/Scripts/app/modules/panel-tools.js",
                "~/Scripts/app/modules/play-animation.js",
                "~/Scripts/app/modules/porlets.js",
                "~/Scripts/app/modules/sidebar.js",
                "~/Scripts/app/modules/skycons.js",
                "~/Scripts/app/modules/slimscroll.js",
                "~/Scripts/app/modules/sparkline.js",
                "~/Scripts/app/modules/table-checkall.js",
                "~/Scripts/app/modules/toggle-state.js",
                "~/Scripts/app/modules/utils.js"
            ));

            // Demos

            bundles.Add(new ScriptBundle("~/bundles/demoDatatable").Include(
                "~/Scripts/demo/demo-datatable.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/demoFlot").Include(
                "~/Scripts/demo/demo-flot.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/demoForms").Include(
                "~/Scripts/demo/demo-forms.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/demoPanels").Include(
                "~/Scripts/demo/demo-panels.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/demoRTL").Include(
                "~/Scripts/demo/demo-rtl.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/demoSearch").Include(
                "~/Scripts/demo/demo-search.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/demoVectormap").Include(
                "~/Scripts/demo/demo-vector-map.js"
            ));
            
            bundles.Add(new ScriptBundle("~/bundles/demoJQGrid").Include(
                "~/Scripts/demo/demo-jqgrid.js"
            ));
            
            bundles.Add(new ScriptBundle("~/bundles/demoSortable").Include(
                "~/Scripts/demo/demo-sortable.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/demoNestable").Include(
                "~/Scripts/demo/demo-nestable.js"
            ));
            // Main Vendor

            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-2.1.3.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            // Vendor Plugins
            bundles.Add(new ScriptBundle("~/bundles/sparklines").Include(
                          "~/Vendor/sparklines/jquery.sparkline.min.js"
                        ));


            bundles.Add(new StyleBundle("~/bundles/simpleLineIcons").Include(
              "~/Vendor/simple-line-icons/css/simple-line-icons.css"
            ));


            bundles.Add(new ScriptBundle("~/bundles/storage").Include(
              "~/Vendor/jQuery-Storage-API/jquery.storageapi.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/jquery.easing").Include(
              "~/Vendor/jquery.easing/js/jquery.easing.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/datatables").Include(
              "~/Vendor/datatables/media/js/jquery.dataTables.min.js",
              "~/Vendor/datatables-colvis/js/dataTables.colVis.js",
              "~/Vendor/datatable-bootstrap/js/dataTables.bootstrap.js",
              "~/Vendor/datatable-bootstrap/js/dataTables.bootstrapPagination.js"
            ));

            bundles.Add(new StyleBundle("~/bundles/datatablesCss").Include(
              "~/Vendor/datatables-colvis/css/dataTables.colVis.css",
              "~/Vendor/datatable-bootstrap/css/dataTables.bootstrap.css"
            ));

            bundles.Add(new ScriptBundle("~/bundles/parsley").Include(
              "~/Vendor/parsleyjs/dist/parsley.min.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/filestyle").Include(
              "~/Vendor/bootstrap-filestyle/src/bootstrap-filestyle.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/tagsinput").Include(
              "~/Vendor/bootstrap-tagsinput/dist/bootstrap-tagsinput.min.js"
            ));

            bundles.Add(new StyleBundle("~/bundles/tagsinputCss").Include(
              "~/Vendor/bootstrap-tagsinput/dist/bootstrap-tagsinput.css"
            ));

            bundles.Add(new ScriptBundle("~/bundles/gmap").Include(
              "~/Vendor/jQuery-gMap/jquery.gmap.min.js"
            ));

            bundles.Add(new StyleBundle("~/bundles/weatherIcons").Include(
              "~/Vendor/weather-icons/css/weather-icons.min.css"
            ));

            bundles.Add(new ScriptBundle("~/bundles/skycons").Include(
              "~/Vendor/skycons/skycons.js"
            ));

            bundles.Add(new StyleBundle("~/bundles/whirl").Include(
              "~/Vendor/whirl/dist/whirl.css"
            ));

            bundles.Add(new ScriptBundle("~/bundles/classyloader").Include(
              "~/Vendor/jquery-classyloader/js/jquery.classyloader.min.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/animo").Include(
              "~/Vendor/animo.js/animo.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/fastclick").Include(
              "~/Vendor/fastclick/lib/fastclick.js"
            ));

            bundles.Add(new StyleBundle("~/bundles/fontawesome").Include(
              "~/Vendor/fontawesome/css/font-awesome.min.css"
            ));


            bundles.Add(new ScriptBundle("~/bundles/sliderCtrl").Include(
              "~/Vendor/seiyria-bootstrap-slider/dist/bootstrap-slider.min.js"
            ));

            bundles.Add(new StyleBundle("~/bundles/sliderCtrlCss").Include(
              "~/Vendor/seiyria-bootstrap-slider/dist/css/bootstrap-slider.min.css"
            ));

            bundles.Add(new ScriptBundle("~/bundles/wysiwyg").Include(
              "~/Vendor/bootstrap-wysiwyg/bootstrap-wysiwyg.js",
              "~/Vendor/bootstrap-wysiwyg/external/jquery.hotkeys.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/slimscroll").Include(
              "~/Vendor/slimscroll/jquery.slimscroll.min.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/screenfull").Include(
              "~/Vendor/screenfull/dist/screenfull.min.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/jvectormap").Include(
              "~/Vendor/ika.jvectormap/jquery-jvectormap-1.2.2.min.js",
              "~/Vendor/ika.jvectormap/jquery-jvectormap-world-mill-en.js",
              "~/Vendor/ika.jvectormap/jquery-jvectormap-us-mill-en.js"
            ));

            bundles.Add(new StyleBundle("~/bundles/jvectormapCss").Include(
              "~/Vendor/ika.jvectormap/jquery-jvectormap-1.2.2.css"
            ));

            bundles.Add(new ScriptBundle("~/bundles/flot").Include(
              "~/Vendor/flot/jquery.flot.js",
              "~/Vendor/flot.tooltip/js/jquery.flot.tooltip.min.js",
              "~/Vendor/flot/jquery.flot.resize.js",
              "~/Vendor/flot/jquery.flot.pie.js",
              "~/Vendor/flot/jquery.flot.time.js",
              "~/Vendor/flot/jquery.flot.categories.js",
              "~/Vendor/flot-spline/js/jquery.flot.spline.min.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/jqueryUi").Include(
                // "~/Vendor/jquery-ui/ui/*.js",
                "~/Vendor/jquery-ui/ui//core.js",
                "~/Vendor/jquery-ui/ui//widget.js",
                "~/Vendor/jquery-ui/ui//mouse.js",
                "~/Vendor/jquery-ui/ui//draggable.js",
                "~/Vendor/jquery-ui/ui//droppable.js",
                "~/Vendor/jquery-ui/ui//sortable.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/jqueryUiTouchPunch").Include(
              "~/Vendor/jqueryui-touch-punch/jquery.ui.touch-punch.min.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/moment").Include(
              "~/Vendor/moment/min/moment-with-locales.min.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/inputmask").Include(
              "~/Vendor/jquery.inputmask/dist/jquery.inputmask.bundle.min.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/flatdoc").Include(
              "~/Vendor/flatdoc/flatdoc.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/chosen").Include(
              "~/Vendor/chosen_v1.2.0/chosen.jquery.min.js"
            ));

            bundles.Add(new StyleBundle("~/bundles/chosenCss").Include(
              "~/Vendor/chosen_v1.2.0/chosen.min.css"
            ));

            bundles.Add(new ScriptBundle("~/bundles/fullcalendar").Include(
              "~/Vendor/fullcalendar/dist/fullcalendar.min.js",
              "~/Vendor/fullcalendar/dist/gcal.js"
            ));

            bundles.Add(new StyleBundle("~/bundles/fullcalendarCss").Include(
              "~/Vendor/fullcalendar/dist/fullcalendar.css"
            ));

            bundles.Add(new StyleBundle("~/bundles/animatecss").Include(
              "~/Vendor/animate.css/animate.min.css"
            ));

            bundles.Add(new ScriptBundle("~/bundles/localize").Include(
              "~/Vendor/jquery-localize-i18n/dist/jquery.localize.js"
            ));
            
            bundles.Add(new ScriptBundle("~/bundles/nestable").Include(
              "~/Vendor/nestable/jquery.nestable.js"
            ));
            
            bundles.Add(new ScriptBundle("~/bundles/sortable").Include(
              "~/Vendor/html.sortable/dist/html.sortable.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/jqGrid").Include(
              "~/Vendor/jqgrid/js/jquery.jqGrid.js",
              "~/Vendor/jqgrid/js/i18n/grid.locale-en.js"
            ));

            bundles.Add(new StyleBundle("~/bundles/jqGridCss").Include(
                "~/Vendor/jqgrid/css/ui.jqgrid.css",
                "~/Vendor/jquery-ui/themes/smoothness/jquery-ui.css"
            ));

        }
    }
}
