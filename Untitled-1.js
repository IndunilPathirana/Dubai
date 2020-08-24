//work
try {
    var responseself = this;
    var coord = payload.coordination;
    responseself.editable = payload.workItemEditable;
    responseself.caseEditable = payload.caseEditable;
    var solution = responseself.solution;
    // var prefix = solution.getPrefix();
    // var userId = ecm.model.desktop.userId;
    // var hostName = window.location.protocol + "//" + window.location.host;
    // var role = ecm.model.desktop.currentRole.name;
  
    // javascript functions
    require([
      "dojo/_base/declare",
      "dojo/_base/lang",
      "icm/base/Constants",
      "icm/model/properties/controller/ControllerManager",
      "ecm/widget/dialog/ConfirmationDialog",
    ], function (declare, lang, Constants, ControllerManager, Dialog) {
      if (coord) {
        coord.participate(Constants.CoordTopic.BEFORELOADWIDGET, function (
          context,
          complete,
          abort
        ) {
          alert("Hello");
          complete();
        });
      }
    });
    return payload;
  } catch (exception) {
    alert(exception);
  }
  