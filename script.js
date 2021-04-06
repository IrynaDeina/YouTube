

/*
class YouTube
{
    constructor(name_chanel, date_of_create, number_of_followers, number_all_video, number_of_views)
    {
        this.name_chanel = name_chanel;
        this.date_of_create = date_of_create;
        this.number_of_followers = new Intl.DateTimeFormat().format(number_of_followers);
        this.number_all_video = number_all_video;
        this.number_of_views = number_of_views;
    }
    setName_chanel(name_chanel)
    {
        this.name_chanel = name_chanel;
    }
    setDate_of_create(date_of_create)
    {
        this.date_of_create = date_of_create;
    }
    setNumber_of_followers(number_of_followers)
    {
        this.number_of_followers = number_of_followers;
    }
    setNumber_all_video(number_all_video)
    {
        this.number_all_video = number_all_video;
    }
    setNumber_of_views(number_of_views)
    {
        this.number_of_views = number_of_views;
    }
    getName_chanel(name_chanel)
    {
        return this.name_chanel;
    }
    getDate_of_create(date_of_create)
    {
        return this.date_of_create;
    }
    getNumber_of_followers(number_of_followers)
    {
        return this.number_of_followers;
    }
    getNumber_all_video(number_all_video)
    {
        return this.number_all_video;
    }
    getNumber_of_views(number_of_views)
    {
        return this.number_of_views;
    }
    
}

var you = new Array();

function SendJSON(value)
{
    let text = document.getElementsByTagName("textarea")[0];
    
    you.push(
        new YouTube(
            value.elements["name_chanel"].value, 
            value.elements["date_of_create"].value,
            value.elements["number_of_followers"].valueAsDate,
            value.elements["number_all_video"].value,
            value.elements["number_of_views"].value
            ));

    text.value = JSON.stringify(you);  

}*/
