export default class AuthentificationService {
    static isAuthenticated: boolean = false;


    //mot de passe pikachu pseudo pikachu 
    static login(username: string, password: string): Promise<boolean> {
        const isAuthenticated = (username === 'pikachu' && password === 'pikachu');

        return new Promise(resolve => {
            setTimeout(() => {
            this.isAuthenticated = isAuthenticated;
            resolve(isAuthenticated);
        }, 1000);
    });
  }
}