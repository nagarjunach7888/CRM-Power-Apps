var student =
{
    permanentaddressstate : function (formContext , disabledstatus){
        formContext.getControl("nag_permanentaddresscountry").setDisabled(disabledstatus);
            formContext.getControl("nag_permanentaddressstate").setDisabled(disabledstatus);
            formContext.getControl("nag_permanentaddressdistrict").setDisabled(disabledstatus);
            formContext.getControl("nag_permanentaddresspostalcode").setDisabled(disabledstatus);
            formContext.getControl("nag_permanentaddressvillagename").setDisabled(disabledstatus);
            formContext.getControl("nag_permanentaddresscity").setDisabled(disabledstatus);
            formContext.getControl("nag_permanentaddresslandmark").setDisabled(disabledstatus);
    },
    onload : function (executionContext) {
        var formContext = executionContext.getFormContext();
        var isaddresssame = formContext.getAttribute("nag_ispresentaddresssameaspermanentaddress").getValue();
        student.permanentaddressstate(formContext,isaddresssame);
    },
    onchange : function (executionContext) {
         var formContext = executionContext.getFormContext();
         var isaddresssame = formContext.getAttribute("nag_ispresentaddresssameaspermanentaddress").getValue();
         student.permanentaddressstate(formContext,isaddresssame);
    }
};