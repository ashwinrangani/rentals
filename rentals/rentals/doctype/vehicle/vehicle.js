// Copyright (c) 2024, ashwin rangani and contributors
// For license information, please see license.txt

frappe.ui.form.on("Vehicle", {
	refresh(frm) {
        //html field
        frm.get_field('summary').$wrapper.append("<h1>Hello</h1>")
	},
    
    //button field
    get_summary(frm){
        frm.get_field("get_summary").$wrapper.append("<p>This is your summary</p>")
    }
});
