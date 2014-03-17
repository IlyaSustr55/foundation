/**
 * @author Alex Rudakov <alexandr.rudakov@modera.org>
 */
Ext.define('Modera.backend.dashboard.runtime.Section', {
    extend: 'MF.runtime.Section',

    requires: [
        'Modera.backend.dashboard.runtime.DashboardsActivity'
    ],

    // override
    activate: function(workbench, callback) {
        var dashboardView = Ext.create('Modera.backend.dashboard.runtime.DashboardsActivity');

        this.registerActivitiesManager(workbench, [dashboardView]);

        callback();
    }
});