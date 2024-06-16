function exportContacts() {
  var contacts = ContactsApp.getContacts();
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Check if the sheet already has data and find the last processed contact
  var lastRow = sheet.getLastRow();
  var lastProcessed = lastRow > 1 ? sheet.getRange(lastRow, 1).getValue() : null;

  var started = false;
  contacts.forEach(function(contact) {
    if (lastProcessed === null || started) {
      // Your existing code to process and append contact data
      var emails = contact.getEmails().map(function(email) {
        return email.getAddress();
      });
      var jobTitle = contact.getCompanies().map(function(company) {
        return company.getJobTitle();
      }).join(", ");
      var reportsTo = contact.getCustomFields().filter(function(field) {
        return field.getLabel() === "Reports To";
      }).map(function(field) {
        return field.getValue();
      }).join(", ");

      sheet.appendRow([contact.getFullName(), emails.join(", "), jobTitle, reportsTo]);
    } else if (contact.getFullName() === lastProcessed) {
      started = true;
    }
  });
}