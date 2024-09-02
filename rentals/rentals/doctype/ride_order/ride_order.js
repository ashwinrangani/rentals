// Copyright (c) 2024, ashwin rangani and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Order", {
	refresh(frm) {
		if (frm.doc.status === "New") {
			// Add the "Accept" button
			frm.add_custom_button(
				"Accept",
				() => {
					frm.set_value("status", "Accepted");
					frm.save();
				},
				"Actions"
			);

			// Add the "Reject" button
			frm.add_custom_button(
				"Reject",
				() => {
					frm.set_value("status", "Rejected");
					frm.save();
				},
				"Actions"
			);
		}
	},
});
