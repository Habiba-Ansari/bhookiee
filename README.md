# 🍔 Bhookie Website Documentation

Welcome to the repository for **Bhookie** (https://bhookiehome-a5445.web.app/) — a fusion-style fast food restaurant serving fun, tasty, and creative global bites. This website is built from scratch using only HTML, CSS, and Firebase (no third-party libraries), with multiple customer-facing pages including login, profile, menu, and contact.

---

## 🌐 Live Website

Visit: https://bhookiehome-a5445.web.app/

GitHub Repo: [https://github.com/Habiba-Ansari/bhookiee](https://github.com/Habiba-Ansari/bhookiee)

---

## 🛠️ Tech Stack

| Feature       | Technology Used    |
|---------------|--------------------|
| Markup        | HTML               |
| Styling       | CSS                |
| Backend/Auth  | Firebase (Auth & Firestore) |
| Hosting       | Firebase Hosting   |
| External Libs | None — all custom  |

---

## 📁 Project Structure

bhookiee/
├── index.html
├── aboutus.html
├── contact_us.html
├── menu.html
├── login.html
├── myprofile.html
├── edit_profile.html
├── firebaseConfig.js
├── about.css
├── contact.css
├── log.css
├── menu.css
├── profile.css
├── editprofile.css
├── style.css
├── 404.html
├── firebase.json
├── .firebaserc
├── .gitignore
├── README.md
├── package.json


---

## 🧭 Website Pages

| Page              | File Name         | Description                              |
|-------------------|-------------------|------------------------------------------|
| Home              | `index.html`      | Welcome screen, brand overview           |
| About Us          | `aboutus.html`    | Story, mission, values of Bhookie        |
| Menu              | `menu.html`       | Display of food items in fusion style    |
| Contact Us        | `contact_us.html` | Form, map (optional), basic contact info |
| Login             | `login.html`      | Firebase Auth login form                 |
| My Profile        | `myprofile.html`  | User profile info after login            |
| Edit Profile      | `edit_profile.html` | Edit name, phone, etc. via form        |
| 404 Page          | `404.html`        | Redirect/fallback page for invalid URLs  |

---

## 🔐 Firebase Integration

- Firebase Authentication is used for user login/logout.
- Firestore is used to store user profile data.
- Configuration is included in `firebaseConfig.js` (no `.env` file used).

---

## 💡 Features

- Fully **custom-built** with no third-party frameworks
- Clean responsive UI with soft branding colors
- **Firebase Auth** login system
- Dynamic profile update system
- Organized page structure for easy navigation
- Error page (`404.html`) for unknown routes

---

**### Logic**
**Contact Us**
// Handle form submission
    const contactForm = document.querySelector("form");
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const firstName = document.getElementById("first-name").value.trim();
        const lastName = document.getElementById("last-name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!firstName || !lastName || !phone || !email || !message) {
            alert("Please fill all fields.");
            return;
        }

        db.collection("messages").add({
            firstName,
            lastName,
            phone,
            email,
            message,
            timestamp: new Date()
        }).then(() => {
            alert("Message sent successfully!");
            contactForm.reset();
        }).catch((error) => {
            console.error("Error sending message:", error);
            alert("Error sending message. Please try again.");
        });

Submits the form with all information if to the databse when user drops any query

**Save profile**

      db.collection("login").doc(newPhone).set({
        name: newName,
        userId: newUserId,
        phone: newPhone,
        ustomerId: newCustomerId
      }).then(() => {
        // Save to customer collection
        return db.collection("customer").doc(newPhone).set({
          email: newEmail,
          dob: newDob,
          c
        });
      }).then(() => {
        localStorage.setItem("userPhone", newPhone); // Update stored phone
        alert("Profile updated!");
        window.location.href = "myprofile.html";
      }).catch((error) => {
        console.error("Error updating profile:", error);
        alert("Update failed.");
      });
    });
Save the deatails of the customer in the customer collection like email id and date of birth.

**My Profile**

    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (isLoggedIn) {
      dropdown.innerHTML = `
          <li><a href="myprofile.html">My Profile</a></li>
          <li><a href="#">My Orders</a></li>
          <li><a href="#" id="logoutLink">Logout</a></li>
        `;
      document.body.addEventListener("click", (e) => {
        if (e.target.id === "logoutLink") {
          localStorage.removeItem("isLoggedIn");
          localStorage.removeItem("userPhone");
          window.location.reload();
        }

Shows the MyProfile, My orders, and Logout option only when the login is done


    
---

## 🎢 Hardest Part (While Building)

- **Firebase Authentication Setup**  
  Implementing and syncing Firebase login/logout flows with profile handling in pure JavaScript without frameworks was tricky and required careful state tracking.

- **Page Linking and Navbar Consistency**  
  Keeping navigation bar and styles consistent across all pages without using a templating system.

---

## 🎉 Most Fun Part

- **Designing the Menu Page**  
  Creating a fusion-inspired visual layout for the food items using only HTML and CSS — it was creative and engaging.

- **User Profile System**  
  Making a custom edit profile feature using Firebase Firestore and basic form handling in JavaScript was satisfying.

---

## 🚀 Deployment Notes

This project is hosted via **Firebase Hosting**.

### Steps used:

firebase login
firebase init
firebase deploy
No npm run build or framework setup required — it's a static site.

###  Contact:
POC: Habiba Ansari
Website: https://bhookiehome-a5445.web.app/
GitHub: @Habiba-Ansari

