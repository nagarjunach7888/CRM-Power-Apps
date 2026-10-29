var student ={
    onload : function (executionContext){
        var formContext = executionContext.getFormContext( );
        var issameadress = formContext.getAttribute("nag_ispresentaddresssameaspermanentaddress").getValue();
        if (issameadress == true){
           var postalcode =formContext.getAttribute("nag_presentaddresspostalcode").getValue();
           formContext.getAttribute("nag_permanentaddresspostalcode").setValue(postalcode);
           var Villagename =formContext.getAttribute("nag_presentaddressvillagename").getValue();
           formContext.getAttribute("nag_permanentaddressvillagename").setValue(Villagename);
           var City =formContext.getAttribute("nag_presentaddresscity").getValue();
           formContext.getAttribute("nag_permanentaddresscity").setValue(City);
           var landmark =formContext.getAttribute("nag_presentaddresslandmark").getValue();
           formContext.getAttribute("nag_permanentaddresslandmark").setValue(landmark);
        }
        else{
            
        }
    },
    onchange : function (executionContext){

    }

};