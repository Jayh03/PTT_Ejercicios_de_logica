class User {
    
    id: number;
    name: string;
    email: string;
    createdAt: Date;

    constructor (id: number, name: string, email: string, createdAt: Date) {

        this.id = id;
        this.name = name;
        this.email = email;
        this.createdAt = createdAt;
    }

    getFullName(): string {
        return this.name;
    }

    sendEmail(subject: string, body: string): void{
        console.log(`Sending email to ${this.email}`);
        console.log(`subject: ${subject}`);
        console.log(`Body: ${body}`)
    
    }

}

const user = new User(1, "John Doe", "johndo@example.com", new Date());
console.log(user.getFullName());
user.sendEmail("Hello", "This is the body of the email.");