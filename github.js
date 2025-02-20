const searchButton = document.getElementById('search-btn');
const username = document.getElementById('username');
const profileContainer = document.getElementById("profile-container");
const errorMessage = document.getElementById("error-message");

// profile fields

const avatar = document.getElementById("avatar");
const name = document.getElementById("name");
const bio = document.getElementById("bio");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const repos = document.getElementById("repos");
const profileLink = document.getElementById("profile-link");

//  fetch github user data

async function fetchGitHubProfile(username){
    const url = `https://api.github.com/users/${username}`;
    try {
        const response = await fetch(url);

        if(!response.ok){
            throw new Error("User not found");
        }

        const data = await response.json();
        displayProfile(data);
    } catch (error){
        displayError(error.message);
    }
}