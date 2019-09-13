//Global Variables
var sheet = SpreadsheetApp.getActive();
var responses = sheet.getSheetByName('Responses');
var requests = sheet.getSheetByName('Requests');
var summaries = sheet.getSheetByName('Summaries');

function sendResponse() {
var destinationID = responses.getRange(responses.getLastRow(),6,1,1).getValue();
var response = responses.getRange(responses.getLastRow(),2,1,1).getValue();
var approver = responses.getRange(responses.getLastRow(),4,1,1).getValue();
var feedback = responses.getRange(responses.getLastRow(),3,1,1).getValue();
var timestamp = responses.getRange(responses.getLastRow(),1,1,1).getValue();
var companyName = responses.getRange(responses.getLastRow(),7,1,1).getValue();
var invoiceNumber = responses.getRange(responses.getLastRow(),5,1,1).getValue();
var destinationSheet = SpreadsheetApp.openById(destinationID);
var destination = destinationSheet.getSheetByName('Details and Calculations');
var responseDest = destination.getRange(6,6,1,1);
var approverDest = destination.getRange(5,6,1,1);
var feedbackDest = destination.getRange(8,6,1,1);
var timestampDest = destination.getRange(7,6,1,1); 
 responseDest.setValue(response);
 approverDest.setValue(approver);
 feedbackDest.setValue(feedback);
 timestampDest.setValue(timestamp);
var linkToForm= 'https://docs.google.com/spreadsheets/d/' + destinationID;
var htmlButton = '<table width="100%" cellspacing="0" cellpadding="0"><tr><td><table cellspacing="0" cellpadding="0"><tr><td style="border-radius: 4px;" bgcolor=“#34495E”><a href="'+ linkToForm +'" target="_blank" style="padding: 8px 12px; border: 1px solid #34495E;border-radius: 4px;font-family: Helvetica, Arial, sans-serif;font-size: 14px; color: #ffffff;text-decoration: none;font-weight:bold;display: inline-block;">Go To Invoicing Document</a></td></tr></table></td></tr></table>';
var messageBody = 'Hi All,<p><p>The invoice proof for ' + companyName + ' has been ' + response + '.<p><p>'+ approver + ' wrote: ' + feedback +'.<p><p>Use the link at the bottom of the email to be taken to the invoice file.<br><br><br>' + htmlButton;
var messageSubject = '[Invoice ' +response + '] The invoice proof for '+ companyName +  ' has been ' + response;
  MailApp.sendEmail('heiduk@fitanalytics.com',messageSubject,'',{cc: 'kyle@fitanalytics.com', from: 'invoices@fitanalytics.com',htmlBody: messageBody});
}  
function reconciliationProcess() {

}
function reminderMessage() {

}