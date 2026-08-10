import React from 'react'

function Profile() {
  return (
    <div>
        <div class="profile-details-container">
      <div class="profile-header">
        <div class="profile-avatar-image">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Profile image"
          />
        </div>
        <div class="profile-info">
          <h1 class="profile-name">Aiswarya S</h1>
          <p class="profile-email">me@gmail.com</p>
          <div class="membership-info">
            <span class="membership-badge">Premium</span>
            <span class="membership-details">4K + HDR</span>
          </div>
        </div>
      </div>

      <div class="profile-sections">
        {/* <!-- Account Setting --> */}
        <div class="profile-section">
          <h2>Account Settings</h2>
          <div class="setting-grid">
            {/* <!-- Cards --> */}
            <div class="setting-items">
              <div class="setting-header">
                <h3>Membership & Billing</h3>
                <button class="btn-change">Change Plan</button>
              </div>
              <p class="setting-details">Premium Plan-199/month</p>
              <p class="setting-details">Next billin date-July 05, 2025</p>
            </div>

            {/* <!-- Cards --> */}
            <div class="setting-items">
              <div class="setting-header">
                <h3>Profile and Parental control</h3>
                <button class="btn-change">Manage</button>
              </div>
              <p class="setting-details">Profile-1</p>
              <p class="setting-details">All maturity rating</p>
            </div>

            {/* <!-- Cards --> */}
            <div class="setting-items">
              <div class="setting-header">
                <h3>Privacy & Security</h3>
                <button class="btn-change">Change Password</button>
              </div>
              <p class="setting-details">Password: ************</p>
              <p class="setting-details">Two factor authentication</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Profile
