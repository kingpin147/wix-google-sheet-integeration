import { appendToGooglesheet } from 'backend/googleSheet';
import {getClientIP} from "backend/ip";

$w.onReady(() => {
  $w('#submitButton').onClick(async () => {
    const firstName = $w('#firstNameInput').value;
    const lastName = $w('#lastNameInput').value;
    const company = $w('#companyInput').value;
    const linkedin = $w('#linkedinInput').value;

    // Simple validation
    if (!firstName || !lastName || !company || !linkedin) {
      $w('#statusText').text = "❌ Please fill out all fields.";
	  $w("#statusText").style.color = "rgb(12, 69, 62)";
	  $w("#statusText").show();
      return;
    }

    try {
		const clientIP = await getClientIP();
      await appendToGooglesheet({ firstName, lastName, company, linkedin, clientIP });
      $w('#statusText').text = "✅ Submitted successfully!";
	  $w("#statusText").style.color = "rgb(12, 69, 62)";
	  $w("#statusText").show();
    } catch (err) {
      console.error(err);
      $w('#statusText').text = "❌ Submission failed. Try again.";
	  $w("#statusText").style.color = "255, 64, 64)";
	  $w("#statusText").show();
    }
  });
});
