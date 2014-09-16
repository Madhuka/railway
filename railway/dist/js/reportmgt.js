ReportMgt = new function () {
   
    // add seller for system
    this.genReport = function () {
    	var saler = $("#saler option:selected").text().split('- ')[1];
    //	var org = $("#org option:selected").val();
    	var sale = $("#sale option:selected").val();
    	var from = $("#datetimepicker1").val();
		var to = $("#datetimepicker2").val();
		var today   = new Date();
	//	today.setDate(today.getDate() + 1)
		var tod  = new Date(to);
		var fromd  = new Date(from);
		console.log();
		if(today<tod){
			alertify.alert("Date you pick as 'To' must to be older day than today. ");
		   
		}else if(today<fromd){
			alertify.alert("Date you pick as 'From' must to be older day than today. ");
		   
		}else
			if(fromd>tod){
				alertify.alert("'From' must to be less than 'To'");
			   
			
		}
    	var errorFound =false;
        var reportData = {'action':'getphonesbysaler',
        		'phoneSellerId':saler,
        		'phoneIsSold':sale,
        		'test':'xxx',
        		'from':$("#datetimepicker1").val(),
        		'to':$("#datetimepicker2").val()
        		};
        if(!errorFound){
        Util
            .makeJsonRequest(
                "GET",
                './apis/api/phone.jag',
                reportData,
                null,
                function (data) {
                    if (!data.error) {
                    	alertify.success("Successfull listting ");	
                        console.log(data);
                        var template = '<div class="col-md-12"><table class="table table-hover">'+
                        ' <thead><tr><th>IMEI</th><th>Type</th><th>Color</th><th>Seller Id</th><th>Customer Name</th><th>Is Original</th><th></th></tr></thead><tbody>'+
                        '{{#.}}<tr>'+
                        '<td><a href=./viewPhone.jag?phoneID={{phone_id}} >{{phone_IMEI}}</a></td>'+
                        '<td>{{phone_type}}</td>'+
                        '<td>{{phone_detail}}</td>'+
                        '<td><a href=./viewRetailer.jag?sellerID={{phone_sellerId}} >{{phone_sellerId}}</a></td>'+
                        '<td>{{phone_customerName}}</td>'+
                        '<td>{{phone_original}}</td>'+
                        '<tr>{{/.}}</tbody></table>';
                        var html = Mustache.to_html(template, data.results);
                        console.log(html);
                        $('#listrole').html(html);
                      
                    } else {
                    	alertify.alert("Request Failed, "+data.errorMsg);
                    }
                });
        }

    };

        
    
    //for print 
    
 // add seller for system
    this.genReportForPrint = function () {
    	var saler = $("#saler option:selected").text().split('- ')[1];
    //	var org = $("#org option:selected").val();
    	var sale = $("#sale option:selected").val();
    	var from = $("#datetimepicker1").val();
		var to = $("#datetimepicker2").val();
		var today   = new Date();
	//	today.setDate(today.getDate() + 1)
		var tod  = new Date(to);
		var fromd  = new Date(from);
		console.log();
		if(today<tod){
			alertify.alert("Date you pick as 'To' must to be older day than today. ");
		   
		}else if(today<fromd){
			alertify.alert("Date you pick as 'From' must to be older day than today. ");
		   
		}else
			if(fromd>tod){
				alertify.alert("'From' must to be less than 'To'");
			   
			
		}
    	var errorFound =false;
        var reportData = {'action':'getphonesbysaler',
        		'phoneSellerId':saler,
        		'phoneIsSold':sale,
        		'test':'xxx',
        		'from':$("#datetimepicker1").val(),
        		'to':$("#datetimepicker2").val()
        		};
        if(!errorFound){
        Util
            .makeJsonRequest(
                "GET",
                './apis/api/phone.jag',
                reportData,
                null,
                function (data) {
                    if (!data.error) {
                    	alertify.success("Successfull listting ");	
                        console.log(data);
                        var template = '<div class="col-md-12"><table class="table table-hover">'+
                        ' <thead><tr><th>IMEI</th><th>Type</th><th>Color</th><th>Seller Id</th><th>Customer Name</th><th>Is Original</th><th></th></tr></thead><tbody>'+
                        '{{#.}}<tr>'+
                        '<td>{{phone_IMEI}}</td>'+
                        '<td>{{phone_type}}</td>'+
                        '<td>{{phone_detail}}</td>'+
                        '<td>{{phone_sellerId}}</td>'+
                        '<td>{{phone_customerName}}</td>'+
                        '<td>{{phone_original}}</td>'+
                        '<tr>{{/.}}</tbody></table>';
                        var html = Mustache.to_html(template, data.results);
                        console.log(html);
                        $('#listrole').html(html);
                        $('#fromt').html('');
                    } else {
                    	alertify.alert("Request Failed, "+data.errorMsg);
                    }
                });
        }

    };
    //update seller
    
    // add seller for system
    this.updateSeller = function () {
    	var errorFound =false;
		if ($('#sellerName').val() == "") {
			alertify.error("Username is needed to enter");
			errorFound = true;
		}		
		if ($('#sellercompany').val() == "") {
			alertify.error("Company name is needed to enter");
			errorFound = true;
		}
		if ($('#sellermobile').val() == "") {
			alertify.error("Mobile number is needed to enter");
			errorFound = true;
		}
		if ($('#sellerphoneMIME').val() == "") {
			alertify.error("PhoneMIME number is needed to enter");
			errorFound = true;
		}
		if ($('#selleremail').val() == "") {
			alertify.error("Email ID is needed to enter");
			errorFound = true;
		}
        var sellerData = {'sellerName':$('#seller_name').val(),
        		'sellerCompany':$('#seller_company').val(),
        		'sellerId':$('#seller_id').val(),        		
        		'sellerAddress':$('#seller_address').val(),
        		'sellerTelphone':$('#seller_telphone').val(),
        		'sellerMobile':$('#seller_mobile').val(),
        		'sellerNIC':$('#seller_NIC').val(),
        		'sellerPhoneMIME':$('#seller_phoneMIME').val(),
        		'sellerEmail':$('#seller_email').val(),
        		'sellerLocation':$('#seller_location').val(),
        		'sellerOut':1
        		};
        if(!errorFound){
        Util
            .makeJsonRequest(
                "GET",
                './apis/api/seller.jag?action=updateseller',
                sellerData,
                null,
                function (data) {
                    if (!data.error) {
                    	alertify.success("Successfull Updated Seller Information");	
                        console.log(data);
                      
                    } else {
                    	alertify.alert("Request Failed, "+data.errorMsg);
                    }
                });
        }

    };
    
   
    this.removeSeller = function () {
          Util
            .makeJsonRequest(
                "GET",
                './apis/api/seller.jag?action=deletseller&sellerId='+$('#seller_id').val(),
                null,
                null,
                function (data) {
                    if (!data.error) {
                    	alertify.success("Successfull removed");	
                        console.log(data);
                      
                    } else {
                    	alertify.alert("Request Failed, "+data.errorMsg);
                    }
                });
       

    };
    
  

};