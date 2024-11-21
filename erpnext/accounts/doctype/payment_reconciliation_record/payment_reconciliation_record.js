// Copyright (c) 2024, VINOD GAJJALA and contributors
// For license information, please see license.txt

frappe.ui.form.on("Payment Reconciliation Record", {
	refresh(frm) {
        erpnext.accounts.unreconcile_payment.add_unreconcile_btn(this.cur_frm);
	},
});
