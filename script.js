const generateMeme=() => {
	const generateMemeButton=document.querySelector(".generateMemeButton");
	const memeTitle=document.querySelector(".memeTitle");
	const memeAuthor=document.querySelector(".memeAuthor");
	const memeImage=document.querySelector(".memeImage")
	
	const updateDetails = (url, title, author) => {
		memeImage.setAttribute("src", url);
		memeTitle.innerHTML = title;
		memeAuthor.innerHTML = `Meme by: ${author}`;
	};
	
	const fetchMemeData = async () => {
		try {
			const response = await fetch("https://meme-api.com/gimme/wholesomememes");
			const data = await response.json();
			updateDetails(data.url, data.title, data.author);
		} catch (error) {
			console.error('Error:', error);
		}
	}
	generateMemeButton.addEventListener("click",fetchMemeData);
	fetchMemeData();
};

generateMeme();
