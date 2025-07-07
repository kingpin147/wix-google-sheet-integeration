✨ AI Capatalist Contact Form Integration
This project allows users to submit their contact details (first name, last name, company, LinkedIn) through a Wix form, and automatically appends that data to a Google Sheet using a service account. It also captures the user's public IP address for analytics and anti-spam logging.

📌 Features
✅ Beautiful frontend form built in Wix

📤 Sends data to Google Sheets securely using a service account

🌐 Captures client’s IP address via external API

🛡️ No user interaction needed for authentication

🧾 Automatic timestamp logging

💬 Displays user-friendly success and error messages

🏗️ Project Structure

🔹 Frontend Code (Wix Page Code)
Handles user input and triggers backend logic.
aicapatalist.js

🔹 Backend: googleSheet.jsw
Handles JWT authentication and data append to Google Sheets.

🔹 Backend: ip.jsw
Gets the user's public IP using an external service.

🔐 Google Service Account Setup
Go to Google Cloud Console

Create a Service Account with Google Sheets API access

Create and download a JSON key

Add the JSON key to Wix Secrets Manager under the name:
googleServiceAccount

Share your target Google Sheet with the service account email (e.g. your-service-account@project-id.iam.gserviceaccount.com)

more guidelines 


Google Cloud Platform
Go to the Google developer site and create a new project or choose an existing one.
In the left sidebar, click Library. Search for Google Sheets API and enable that API in your project.
On the left sidebar, click Credentials. On the top menu, click Create Credentials and select Service Account. Provide the needed information and finish all steps.
On the Credentials main page, you should see a new entry in the Service Accounts table. Click the entry’s edit icon.
Scroll down to the Keys section, and click Add Key > Create New key and select JSON. This will cause a file to download.
Open the downloaded file and copy the client_email value.


🔧 Step-by-Step: Google Sheets API with Service Account in Wix Backend
⿡ Create a Service Account
Go to Google Cloud Console

Select your project

Navigate to IAM & Admin > Service Accounts

Click “Create Service Account”

Give it a name, click Create & Continue

Assign “Editor” role (or restrict to only Sheets API)

Finish and Save

⿢ Generate a Service Account Key
Go to your new Service Account > Keys

Click “Add Key” > “Create New Key”

Choose JSON, then click Create

Download the .json key file — this contains your private key

⿣ Share Google Sheet with Service Account
Open your Google Sheet

Click Share

Paste the Service Account email (xxxxx@project-id.iam.gserviceaccount.com)

Give Editor access

⿤ Add JSON Key to Wix Secrets Manager
Open the .json file

Copy the entire content

In Wix, go to Site Settings > Secrets Manager

Add a new secret called: googleServiceAccount

