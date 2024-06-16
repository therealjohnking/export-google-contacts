# Export Contacts to Google Sheets

## Description
This Google Apps Script, `exportContacts`, is designed to export contact information from your Google Contacts into a Google Sheet. It efficiently handles continuous updates by only appending new contacts since the last processed contact, making it ideal for regularly updating a contact list without duplication.

## Functionality
The script retrieves all your contacts from Google Contacts and exports details such as names, email addresses, job titles, and custom fields to the active sheet in your Google Spreadsheet. If the spreadsheet already contains data, the script identifies the last processed contact and continues from the next one, ensuring that no contact is processed twice.

## Features
- **Automatic Continuation**: The script remembers the last contact processed and continues from the next, making it efficient for regular updates.
- **Comprehensive Export**: Exports contact names, all associated emails, job titles, and specific custom fields (like "Reports To").

## How It Works
1. **Check Existing Data**: First, it checks if the active sheet has any existing data and identifies the last contact processed.
2. **Export New Data**: Then, it processes each contact that hasn't been processed since the last execution, appending their information to the sheet.

## Setup
To use this script:
1. Open Google Sheets and create a new spreadsheet or open an existing one where you want to store your contact information.
2. Go to `Extensions > Apps Script`.
3. Delete any existing code and paste the contents of `exportContacts.gs`.
4. Save and close the Apps Script editor.
5. You can run the script manually from the Apps Script interface or set up triggers to run it automatically at regular intervals.

## Usage
Run the script manually by clicking `Run` in the Apps Script editor, or automate it using time-based triggers in Google Apps Script for periodic updates.

## Note
Ensure that you have the necessary permissions enabled for your Google account to access Contacts and manage Sheets. This script requires authorization the first time it is run.

## License
This project is licensed under the MIT License - see the `LICENSE` file for details.

## Contributions
Contributions are welcome. Please fork this repository and submit a pull request if you have any enhancements or bug fixes.
