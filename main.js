// Navbar toggle
function navbarToggle() {
	let menu = document.querySelector('.mylinks');
	if (menu.style.display === 'block') {
		menu.style.display = 'none';
	} else {
		menu.style.display = 'block';
	}
}

// Gitub Repos Function
async function getGithubRepos() {
	const ulForGithubRepos = document.querySelector('.githubRepos');
	const myGithubName = 'heyosj';

	let response = await fetch(`https://api.github.com/users/${myGithubName}/repos`);
	let data = await response.json();
	for (let i = 1; i < data.length; i++) {
		ulForGithubRepos.innerHTML += `
            <li>
                <a href="${data[i].html_url}" target="_blank">${data[i].name}</a>
            </li>
        `;
	}

	if (!response.ok) {
		throw Error(response.statusText);
	}
}

getGithubRepos();
