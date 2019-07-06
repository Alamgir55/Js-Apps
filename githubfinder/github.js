class Github{
    constructor(){
        this.client_id = 'd332940a575e3a112d58';
        this.client_secret = '094612bec81153486cbda499e86fbba6dd9e8049';
    }
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        return {
            profile
        }
    }   
}