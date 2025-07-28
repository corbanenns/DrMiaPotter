// Test Formspree integration
console.log("Testing Formspree integration...");

const formData = new FormData();
formData.append('firstName', 'Test');
formData.append('lastName', 'User');
formData.append('email', 'test@example.com');
formData.append('phone', '555-123-4567');
formData.append('consultationType', 'Initial Consultation');
formData.append('concerns', 'This is a test submission');
formData.append('_subject', 'Test Form Submission');

fetch("https://formspree.io/f/mblkydaw", {
  method: "POST",
  body: formData,
  headers: {
    'Accept': 'application/json'
  }
})
.then(response => {
  console.log("Formspree Response status:", response.status);
  return response.json();
})
.then(data => {
  console.log("Formspree Response data:", data);
  if (data.ok) {
    console.log("✅ SUCCESS: Form submitted successfully!");
  } else {
    console.log("❌ ERROR: Form submission failed");
  }
})
.catch(error => {
  console.error("❌ ERROR:", error);
});
