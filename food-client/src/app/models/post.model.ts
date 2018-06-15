export class Post {
    public userId: String;
    public title: String;
    public description: String;
    public location: String;
    public datePosted: Number;
    public likes: Number;
    public interest: Number;
    public active: Boolean;
    public expirationDate: Number;
    public image: String;

    constructor(userId: String, title: String, description: String, location: String, datePosted: Number, 
        likes: Number, interest: Number, active: Boolean, expirationDate: Number, image: String)
    {
        this.userId=userId;
        this.title=title;
        this.description=description;
        this.location=location;
        this.datePosted=datePosted;
        this.likes=likes;
        this.interest=interest;
        this.active=active;
        this.expirationDate=expirationDate;
        this.image=image;
    }
     
}