const addBlogForm = document.getElementById("addBlogForm");

addBlogForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = auth.currentUser;
  if (!user) return alert("Login first");

  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;
  const category = document.getElementById("category").value;
  
  // Placeholder image URL (replace with Cloudinary upload later)
  const imageURL = "assets/placeholder.png";db.collection("blogs").add({
    title,
    content,
    category,
    image: imageURL,
    author: user.email,
    uid: user.uid,
    date: new Date(),
    likes: 0
  }).then(() => {
    alert("Blog added!");
    window.location.href = "index.html";
  });
});