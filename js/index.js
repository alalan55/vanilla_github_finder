const url = 'https://api.github.com/users'
const client_id = '25a4a4276028eae17610';
const client_secret = '0d542c3a2443d7189eeb511d5519e808a24d33dc';
const inputProfile = document.querySelector('.input_profile')
let x = process.env.client_id


inputProfile.addEventListener('keypress', (e)=>{
    if(e.key == 'Enter'){
        console.log(x)
    }
    
})

const searchUser = async (user) =>{
    try {
        let urlProfile = `${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`
        let urlRepos = `${url}/${user}/repos?per_page=10&sort=created:%20asc&client_id=${client_id}&client_secret=${client_secret}`
        let reqProfile = await fetch(urlProfile);
        let reqRepos = await fetch(urlRepos);

    } catch (error) {
        
    }
}