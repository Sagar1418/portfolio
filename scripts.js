function downloadProject(projectName) {
    const password = prompt("Enter the password to download this project:");
    if (password === "your-password") {
        window.location.href = `files/${projectName}_project.zip`;
    } else {
        alert("Incorrect password!");
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const profilePic = document.getElementById("dynamic-profile-pic");
    const container = document.querySelector(".profile-pic");

    profilePic.onload = () => {
        const aspectRatio = profilePic.naturalWidth / profilePic.naturalHeight;
        if (aspectRatio > 1) {
            profilePic.style.width = "200px"; // Landscape images
            profilePic.style.height = "auto";
        } else {
            profilePic.style.height = "200px"; // Portrait images
            profilePic.style.width = "auto";
        }
        container.style.width = profilePic.style.width;
        container.style.height = profilePic.style.height;
    };
});
